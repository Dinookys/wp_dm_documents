<template>
  <div>
    <div :class="['dm-modal', { show: showDocumentModal }]">
      <h3>{{ document.ID ? "Editando a" : "Novo" }} Documento</h3>
      <dm-notification-alert
        :validations="validations"
        :messages="messages"        
      ></dm-notification-alert>
      <input type="hidden" v-model="document.ID" />
      <div class="dm-flex">
        <div>
          <a href="#" title="Clique para alterar a ícone" class="dm-button-dropdown" @click.prevent="toggleDropdown">
            <dm-icon :icon="document.icon"></dm-icon>
          </a>
          <div class="dm-dropdown" ref="dropdownIcon">
            <a
              href=""
              v-for="(v, k) in sanitize_icons"
              :key="k"
              @click.prevent="(e) => setIcon(k)"
            >
              <dm-icon :icon="k"></dm-icon>
            </a>
          </div>
        </div>
        <label style="flex: 100%; margin-right: 10px">
          <input
            type="text"
            class="form-control"
            :title="document.link"
            v-model="document.link"
            placeholder="LINK"
          />
        </label>
        <div style="text-align: right">
          <button class="button button-secondary" @click="getFromWPMedia">
            Arquivo local
          </button>
        </div>
      </div>
      <div class="dm-flex">
        <label
          >Nome<br />
          <input
            class="form-control"
            type="text"
            v-model="document.titulo"
            placeholder="Nome"
          />
        </label>
      </div>
      <div>
        <label
          >Categoria <br />
          <select class="form-control" v-model="document.ID_category">
            <template v-for="(cat, k) in categories">
              <option :value="cat.ID" :key="k">{{ cat.titulo }}</option>
            </template>
          </select>
        </label>
      </div>
      <div>
        <label
          >Descrição <br />
          <textarea
            class="form-control"
            v-model="document.descricao"
          ></textarea>
        </label>
      </div>
      <div class="dm-flex">
        <label
          >Publicado?<br />
          <select v-model="document.status">
            <option
              v-for="(label, value, index) in status"
              :value="value"
              :key="index"
            >
              {{ label }}
            </option>
          </select>
        </label>
        <label class="left: auto;"
          >Data <br />
          <date-picker
            :lang="ptBr"
            :value-type="datePickerConf.format"
            :format="datePickerConf.format"
            v-model="document.data"
          ></date-picker>
        </label>
      </div>
      <div class="dm-cols">
        <div>
          <button
            class="button button-secondary dm-button-block"
            @click.prevent="handlerCancel"
          >
            Fechar
          </button>
        </div>
        <div>
          <button
            class="button button-primary dm-button-block"
            @click.prevent="handlerSave"
          >
            Salvar
          </button>
        </div>
      </div>
      <dm-loading :show="showLoading"></dm-loading>
    </div>
    <div class="dm-backdrop"></div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import ptBr from "vue2-datepicker/locale/pt-br";
import DatePicker from "vue2-datepicker";
import "vue2-datepicker/index.css";

export default {
  data() {
    return {
      ptBr,
      showLoading: false,
      messages: {},
      validations: {},
    };
  },
  computed: {
    ...mapState([
      "document",
      "documents",
      "categories",
      "currentCategory",
      "showDocumentModal",
      "status",
      "icons",
      "datePickerConf",
    ]),
    sanitize_icons() {
      let list = { ...this.icons };
      let excludes = [
        "pen",
        "trash",
        "folder-closed",
        "folder-closed-plus",
        "document-plus",
      ];

      Object.keys(list).map((k) => {
        if (excludes.indexOf(k) != -1) {
          delete list[k];
        }
      });

      return list;
    },
  },
  methods: {
    handlerSave() {
      this.showLoading = true;
      this.$store.dispatch("saveDocument", this.document).then((data) => {
        this.showLoading = false;

        if (data.messages) {
          this.messages = { ...data.messages };
        } else {
          this.messages = {};
        }

        if (data.validations) {
          this.validations = { ...data.validations };
        } else {
          this.validations = {};
        }

        if (data.item) {
          this.$root.$emit("update-documents");
        }
      });
    },
    handlerCancel() {
      this.$store.commit("SHOW_DOCUMENT_MODAL", false);
      this.validations = {};
      this.messages = {};
    },
    setIcon(v) {
      this.document.icon = v;
      this.toggleDropdown();
    },
    toggleDropdown() {
      this.$refs.dropdownIcon.classList.toggle("active");
    },
    getFromWPMedia() {
      var custom_uploader = window.wp
        .media({
          title: "Novo documento",
          library: {
            // uploadedTo : wp.media.view.settings.post.id, // attach to the current post?
            // type : 'image'
          },
          button: {
            text: "Adicionar", // button label text
          },
          multiple: false,
        })
        .on("select", () => {
          // it also has "open" and "close" events
          var attachment = custom_uploader
            .state()
            .get("selection")
            .first()
            .toJSON();

          this.document.icon =
            Object.keys(this.icons).filter((i) => i == attachment.subtype)[0] ||
            this.document.icon;
          this.document.link = attachment.url;
          this.document.titulo = attachment.title;
        })
        .open();
    },
  },
  components: {
    DatePicker,
  },
};
</script>

<style scoped>
h3 {
  margin: 10px;
}
.dm-button-dropdown {
    border: 1px solid #8c8f94;
    padding: 0 5px;
    display: flex;
    height: 100%;
    align-items: center;
    margin-right: 5px;  
    border-radius: 4px;  
}

.dm-button-dropdown .icon {
  width: 20px;
  height: 20px;
}
</style>