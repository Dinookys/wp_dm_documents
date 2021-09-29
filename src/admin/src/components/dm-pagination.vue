<template>
    <div class="tablenav" v-if="totalPages > 1" >
        <paginate
            v-model="page"            
            :page-count="totalPages"
            container-class="tablenav-pages"
            page-class="tablenav-pages-navspan button"
            prev-class="tablenav-pages-navspan button"
            next-class="tablenav-pages-navspan button"
            prev-text="&lsaquo;"
            next-text="&rsaquo;"
        ></paginate>
    </div>
</template>

<script>
import Paginate from 'vuejs-paginate'
import { mapState } from 'vuex';

export default {
    data() {
        return {
            page: 1
        }
    },
    computed: mapState(["totalPages", "currentPage"]),
    watch: {
        page: function(page) {
            if(page != this.currentPage) {
                let route = this.$route;

                this.$router.push({
                    ...route,
                    query: {
                        ...route.query,
                        page
                    }
                })
            }
        },
        currentPage: function(currentPage) {
            if(this.page != currentPage) {
                this.page = currentPage
            }
        }
    },
    components: {
        Paginate
    }
}
</script>

<style>
    .tablenav-pages-navspan {
        padding: 0 !important;
        display: inline-flex;
        margin: 0 2px !important;
    }

    .tablenav-pages-navspan a {
        padding: 5px !important;
        box-shadow: none !important;
        width: 100%;
    }
</style>