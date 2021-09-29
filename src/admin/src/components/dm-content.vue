<template>
  <section>
    <div class="dm-stick-top">
      <strong>{{ titulo }}</strong>
      <div>
        <dm-pagination></dm-pagination>
      </div>
    </div>
    <template v-if="documents.length">
    <div class="dm-wrap-list">
      <template v-for="(document, k) in documents">
        <dm-document :document="document" :key="k"></dm-document>
      </template>
    </div>
    </template>
    <template v-else-if="loadingDocuments">
      <span class="dm-nodocument"><span class="spinner is-active" ></span> CARREGANDO DOCUMENTOS</span>
    </template>
    <template v-else >
      <span class="dm-nodocument">NENHUM DOCUMENTO POR AQUI</span>
    </template>

  </section>
</template>

<script>
import { mapActions, mapState } from "vuex";
import dmPagination from "./dm-pagination";

export default {
  components: {
    dmPagination,
  },
  methods: {
    ...mapActions(["newDocument"]),
  },
  computed: {
    ...mapState(["loadingDocuments"]),
    titulo() {
      return this.$store.state.currentCategory.titulo_curto || "Raiz";
    },
    documents() {
      return this.$store.state.documents || [];
    },
  },
};
</script>
<style scoped>
section {
  overflow-y: auto;
  box-sizing: border-box;
  position: relative;
}

.dm-wrap-list,
.dm-stick-top {
  justify-content: space-between !important;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  padding: 7.5px 15px;
  display: grid;
}

.tablenav {
  margin: 0;
  padding: 0;
}

.tablenav .tablenav-pages {
  margin: 0;
}

.dm-nodocument {
  opacity: 0.3;
  user-select: none;
  font-size: 18px;
  font-weight: bold;
  display: block;
}

@media (min-width: 768px) {
  .dm-nodocument {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
}

@media (max-width: 767px) {
  .dm-nodocument {
    text-align: center;
    margin: 15px;
    display: block;
  }
}
</style>