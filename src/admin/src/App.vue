<template>
  <div id="dm-documents">
    <router-view></router-view>
    <dm-notice :showMe="showMessage" @cancel="clearMessage">{{
      message
    }}</dm-notice>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "app",
  beforeMount() {
    /**
     * Setando a lista de categorias
     */
    this.$store.commit("SET_CATEGORIES", window.dm_documents.categories || []);
    this.$store.commit("SET_ICONS", window.dm_documents.icons || {});
    this.$store.commit(
      "SET_CATEGORY",
      window.dm_documents.empty.category || {}
    );
    this.$store.commit(
      "SET_DOCUMENT",
      window.dm_documents.empty.document || {}
    );
    this.$store.commit("SET_STATUS", window.dm_documents.status || {});
  },
  methods: {
    clearMessage() {
      this.$store.commit("SHOW_MESSAGE", false);
      this.$store.commit("SET_MESSAGE", "");
    },
  },
  computed: mapState(["message", "showMessage"]),
};
</script>
<style >
* {
  transition: 0.1s linear;
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

:root {
  --dm-primary: #2271b1;
  --grid-cols: 2;
}

#dm-documents .button {
  user-select: none;
}

#dm-documents .notice {
  margin: 0;
}

main {
  display: grid;
  grid-template-columns: 400px minmax(300px, 1fr) 300px;
  grid-template-rows: calc(100vh - 100px);
  border: 1px solid #ccc;
  margin-left: -20px;
}

aside {
  background-color: white;
  overflow-x: auto;
}

aside.dm-right-sidebar {
  border-left: 1px solid #ccc;
}

aside.dm-left-sidebar {
  border-right: 1px solid #ccc;
}

section {
  background-color: #f9f9f9;
}

.dm-flex {
  display: flex;
}

.dm-flex > * {
  flex: 1;
}

.dm-stick-top {
  top: 0;
  position: sticky;
  display: flex;
  justify-content: space-around;
  background-color: #eee;
  z-index: 9;
  padding: 7.5px 0;
  min-height: 35px;
  border-bottom: 1px solid #ccc;
  margin-bottom: 10px;
}

.dm-modal {
  position: fixed;
  top: 100px;
  left: 50%;
  width: 450px;
  max-width: 90%;
  max-height: 100%;
  transform: translateX(-50%) scale(0);
  background-color: white;
  border: 1px solid #383838;
  box-sizing: border-box;
  z-index: 0;
}

.dm-modal.show {
  transform: translateX(-50%) scale(1);
  z-index: 11;
}

.dm-modal.show ~ .dm-backdrop {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 10;
}

.dm-modal > div {
  padding: 15px;
}

.form-control {
  max-width: 100%;
  width: 100% !important;
}

.dm-cols {
  display: grid;
  grid-template-columns: repeat(var(--grid-cols), 1fr);
  gap: 5px;
}

.dm-cols-60-40 {
  grid-template-columns: 60% 40%;
}

.dm-button-block {
  display: block;
  width: 100%;
}

.dm-dropdown {
  border: 1px solid #ccc;
  position: absolute;
  background-color: white;
  max-height: 300px;
  overflow-x: auto;
  transform: scale(0);
}

.dm-button-dropdown,
.dm-button-dropdown:focus {
  outline: none;
  display: inline-block;
  vertical-align: middle;
  padding: 0;
  margin: 0;
  box-shadow: none;
}

.dm-dropdown.active {
  transform: scale(1);
}

.dm-dropdown > * {
  display: block;
  margin: 10px;
}

@media (max-width: 767px) {
  main {
    grid-template-columns: 95%;
    grid-template-rows: auto;    
    margin: 0 0 5px 0;
    border: none;    
  }
  section {
    order: 1;
    border: none;
  }
  aside.dm-left-sidebar {
    order: 0;
  }
  aside.dm-right-sidebar {
    order: 1;
  }
  section,
  aside.dm-left-sidebar,
  aside.dm-right-sidebar {
    border: 1px solid #ccc;
    margin-top: 5px;
  }
  .dm-modal {
    top: 25px;
    bottom: 25px;
    overflow-x: auto;    
  }
  .dm-modal.show {
    z-index: 999999;
  }
}
</style>