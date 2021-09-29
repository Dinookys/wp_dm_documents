<template>
  <aside class="dm-left-sidebar">
    <div class="dm-stick-top">
      <dm-button
        label="Categoria"
        icon="folder-closed-plus"
        @click="newCategory"
      ></dm-button>
      <dm-button
        label="Documento"
        icon="file-plus"
        @click="newDocument"
        v-if="categories.length"
      ></dm-button>
    </div>
    <div
      class="dm-root-dropzone"
      title="Arreste as categorias para move para raiz"
      @drop="handlerDropItem"
      @dragenter="handlerDragEnter"
      @dragleave="handlerDragLeave"
      @dragover.prevent
      dropzone
    ></div>
    <div class="dm-wrap-list">
      <template v-for="(category, k) in categories">
        <dm-sidebar-category
          :category="category"
          :key="k"
        ></dm-sidebar-category>
      </template>
    </div>
  </aside>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      dragEnter: false,
    };
  },
  methods: {
    handlerDropItem(e) {
      e.target.classList.remove("dragenter");

      let item_type = e.dataTransfer.getData("Type");
      let item_ID = e.dataTransfer.getData("ID");

      if (item_type == "category") {
        let category = this.categories.filter((cat) => cat.ID == item_ID)[0];
        this.$store.dispatch("saveCategory", {
          ...category,
          titulo: category.titulo_curto,
          ID_parent: 0,
        });
      }
    },
    handlerDragEnter(e) {
      e.target.classList.add("dragenter");
    },
    handlerDragLeave(e) {
      e.target.classList.remove("dragenter");
    },
    ...mapActions(["newCategory", "newDocument", "saveCategory"]),
  },
  computed: {
    categories() {
      return this.$store.state.categories;
    },
  },
};
</script>
<style scoped >
aside {
  overflow-y: hidden;
  display: flex;
  flex-direction: column;
  position: relative;
}
.dm-wrap-list {
  overflow-y: auto;
  margin-left: 30px;
}
.dm-stick-top {
  margin-bottom: 0;
}
.dm-root-dropzone {
  width: 30px;
  top: 0;
  bottom: 0;
  position: absolute;
  align-items: center;
  border: 1px solid transparent;
  background-color: #eee;
  border-right-color: #ccc;
}
.dm-root-dropzone::before {
  content: "RAIZ";
  display: block;
  position: absolute;
  top: 50%;
  transform: rotate(-90deg);
  opacity: 0.2;
  font-weight: bold;
  transition: opacity 0.1s;
}
.dm-root-dropzone.dragenter {
  box-shadow: 0 0 20px inset var(--dm-primary);
}
.dm-root-dropzone.dragenter::before {
  opacity: 0.5;
}

@media (max-width: 767px) {
  .dm-root-dropzone {
    display: none;
  }
  .dm-wrap-list {
    margin-left: 0;
    height: 100px;
    overflow-x: auto;
  }
}
</style>