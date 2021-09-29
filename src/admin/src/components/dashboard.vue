<template>
  <main>
      <dm-left-sidebar></dm-left-sidebar>
      <dm-content></dm-content>
      <dm-right-sidebar></dm-right-sidebar>
      <dm-modal-category></dm-modal-category>
      <dm-modal-document></dm-modal-document>
      <dm-modal-shortcode></dm-modal-shortcode>
  </main>
</template>

<script>

import dmLeftSidebar from "./dm-left-sidebar.vue";
import dmRightSidebar from "./dm-right-sidebar.vue";
import dmContent from "./dm-content.vue";
import dmModalCategory from "./dm-modal-category.vue";
import dmModalShortcode from "./dm-modal-shortcode.vue";
import dmModalDocument from "./dm-modal-document.vue";
import { mapActions, mapState } from 'vuex';

export default {
    components: {
        dmLeftSidebar,
        dmContent,
        dmRightSidebar,
        dmModalCategory,
        dmModalDocument,
        dmModalShortcode
    },
    computed: mapState(["categories"]),
    methods: {
        ...mapActions(["getDocuments"]),
        loadCategory(route) {

            let ID = route.params.id;
            let cat = this.categories.filter(c => c.ID == ID)[0];

            if(!cat) {
                cat = {...this.categories[0]};
            }

            if(!cat) return;

            this.$store.commit("SET_DOCUMENTS", []);

            this.getDocuments({
                ID_category: cat.ID,
                page: route.params.page || 1,
                ...route.query
            });

            this.$store.commit('SET_CURRENT_CATEGORY', cat)
        }
    },
    mounted() {
        this.$root.$on('update-documents', () => {
            this.loadCategory(this.$route)
        })
    },
    beforeRouteEnter(from, to, next)  {
        next(vm => {            
            vm.loadCategory(from);
        })
    },
    beforeRouteUpdate(from, to, next) {
        this.loadCategory(from);                
        next()
    }
}
</script>

<style>

</style>