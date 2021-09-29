<template>
  <div
    :class="[
      'dm-sidebar-category',
      {
        active: isActive,
        draft: category.status == 'draft',
        dragenter: dragEnter,
        dragself: dragSelf,
      },
    ]"
    @drop="updateDropItem"
    @dragenter.prevent="handlerDragEnter"
    @dragleave="handlerDragLeave"
    @dragover.prevent
    @dragstart="handlerDragSelfStart"
    @dragend="handlerDragSelfEnd"
    dropzone
    draggable
  >
    <dm-notice
      :showMe="confirmRemove"
      :showConfirmButton="true"
      @confirm="handlerConfirmRemove"
      @cancel="handlerCancelRemove"
      >Remover a categoria: <b>{{ category.titulo }}</b
      >?</dm-notice
    >
    <dm-button
      :style="{ paddingLeft: space }"
      :icon="isActive || dragEnter ? 'folder-opened' : 'folder-closed'"
      :label="`${category.titulo_curto}#${category.ID}`"
      @click="openCategory"
    ></dm-button>
    <dm-actions
      @edit="handlerEdit"
      @trash="handlerRemove"
      @shortcode="handlerShortcode"
    ></dm-actions>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  props: {
    category: {
      type: Object,
      default: () => {
        return {};
      },
    },
  },
  data() {
    return {
      dragEnter: false,
      dragSelf: false,
      confirmRemove: false,
    };
  },
  computed: {
    ...mapState(["currentCategory", "categories"]),
    isActive() {
      return this.currentCategory.ID == this.category.ID;
    },
    space() {
      let space = this.category.level;
      if (space > 1) {
        return space * 8 + "px";
      }
      return 0;
    },
  },
  methods: {
    ...mapActions(["removeCategory"]),
    getExcludeCats(ID) {
      let list = [];
      if (ID) {
        list.push(ID);
        this.categories.map((cat) => {
          if (ID == cat.ID_parent) {
            list = [...list, ...this.getExcludeCats(cat.ID)];
          }
        });
      }
      return list;
    },
    openCategory() {
      if (!this.isActive) {
        this.$router.push({
          name: "category",
          params: {
            id: this.category.ID,
          },
        });
      }
    },
    handlerEdit() {
      let cat = { ...this.category };
      let titulo = this.category.titulo_curto || this.category.titulo;
      cat.titulo = titulo;
      delete cat.titulo_curto;

      this.$store.commit("SET_CATEGORY", cat);
      this.$store.commit("SHOW_CATEGORY_MODAL", true);
    },
    handlerRemove() {
      this.confirmRemove = true;
    },
    handlerCancelRemove() {
      this.confirmRemove = false;
    },
    handlerConfirmRemove() {
      this.removeCategory({
        ID: this.category.ID,
      });
      this.confirmRemove = false;
    },
    handlerShortcode() {
      this.$store.commit(
        "SET_SHORTCODE",
        `[dm_category cat="${this.category.ID}" ]`
      );
      this.$store.commit("SHOW_SHORTCODE_MODAL", true);
    },
    updateDropItem(e) {
      let item_type = e.dataTransfer.getData("Type");
      let item_ID = e.dataTransfer.getData("ID");

      switch (item_type) {
        case "document":
          this.$store.commit(
            "SET_DOCUMENTS",
            this.$store.state.documents.filter((doc) => {
              if (doc.ID == item_ID && this.category.ID != doc.ID_category) {
                this.$store.dispatch("saveDocument", {
                  ...doc,
                  ID_category: this.category.ID,
                }).then(() => {
                  this.$root.$emit('update-documents')
                });
                return false;
              } else {
                return true;
              }
            })
          );
          break;
        case "category":
          if (this.getExcludeCats(item_ID).indexOf(this.category.ID) == -1) {
            let category = this.categories.filter(
              (cat) => cat.ID == item_ID
            )[0];
            this.$store.dispatch("saveCategory", {
              ...category,
              titulo: category.titulo_curto,
              ID_parent: this.category.ID,
            });
          }
          break;
      }

      this.handlerDragLeave();
    },
    handlerDragEnter() {
      this.dragEnter = true;
    },
    handlerDragLeave() {
      this.dragEnter = false;
    },
    handlerDragSelfStart(e) {
      this.dragSelf = true;
      e.dataTransfer.setData("ID", this.category.ID);
      e.dataTransfer.setData("Type", "category");
    },
    handlerDragSelfEnd() {
      this.dragSelf = false;
    },
  },
};
</script>

<style>
.dm-sidebar-category,
.dm-sidebar-category * {
  transition: 0.1s linear;
}

.dm-sidebar-category {
  display: block;
  min-height: 42px;
  align-items: center;
  position: relative;
  border-left: 10px solid transparent;
  border-bottom: 1px solid transparent;
  border-top: 1px solid #38383822;
  margin: 1px 0;
}

.dm-sidebar-category.active .label {
  color: var(--dm-primary) !important;
  font-weight: bold;
}

.dm-sidebar-category:nth-child(even) {
  background-color: #eee;
}

.dm-sidebar-category.active {
  background-color: #ccc;
  border-color: var(--dm-primary);
}

.dm-sidebar-category.dragenter {
  border-color: var(--dm-primary);
  box-shadow: 0 0 20px inset var(--dm-primary);
}

.dm-sidebar-category::before {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 99;
  display: block;
}

.dm-sidebar-category:hover::before {
  display: none;
}

.dm-sidebar-category.dragself {
  border-color: grey;
  background-color: transparent;
  border-bottom-style: dashed;
  border-top-style: dashed;
  border-left-color: transparent;
}

.dm-sidebar-category.dragself > * {
  opacity: 0.1 !important;
}

.dm-sidebar-category.draft {
  border-color: rgba(200, 0, 0, 1);
}

.dm-sidebar-category .dm-button {
  width: 100%;
}

.dm-sidebar-category .dm-actions {
  opacity: 0;
  transform: scale(0);
  transition: 0.1s;
  transform-origin: center right;
  position: absolute;
  right: 0;
  flex-direction: row;
  height: 100%;
}

.dm-sidebar-category:hover .dm-actions {
  opacity: 1;
  transform: scale(1);
}

.dm-sidebar-category:hover .dm-actions > a {
  height: 100%;
  display: flex;
  align-items: center;
}

.dm-sidebar-category .dm-button {
  margin-top: 8px;
}
</style>