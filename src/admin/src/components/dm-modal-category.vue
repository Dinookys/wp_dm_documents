<template>
    <div>
        <div :class="['dm-modal', {show: showCategoryModal}]">
            <h3>{{ category.ID ? "Editando a" : "Nova" }} Categoria</h3>
            <dm-notification-alert :validations="validations" :messages="messages" ></dm-notification-alert>
            <input type="hidden" v-model="category.ID">
            <div>
                <label>Nome da categoria
                    <input class="form-control" type="text" v-model="category.titulo" >
                </label>
            </div>            
            <div>
                <label>Categoria pai <br>            
                    <select class="form-control" v-model="category.ID_parent">
                        <option value="0">Raiz</option>
                        <template v-for="(cat, k) in listCategories" >
                            <option :value="cat.ID" :key="k" >{{ cat.titulo }}</option>
                        </template>
                    </select>
                </label>
            </div>            
            <div>
                <label>Publicado?
                    <select v-model="category.status" >
                        <option v-for="(label, value, index) in status" :value="value" :key="index" >{{ label }}</option>
                    </select>
                </label>
            </div>
            <div class="dm-cols" >
                <div>
                    <button class="button button-secondary dm-button-block" @click.prevent="handlerCancel" >Fechar</button>
                </div>
                <div>
                    <button class="button button-primary dm-button-block" @click.prevent="handlerSave" >Salvar</button>
                </div>
            </div>            
            <dm-loading :show="showLoading" ></dm-loading>
        </div>
        <div class="dm-backdrop"></div>
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    data() {
        return {
            showLoading: false,
            messages: {},
            validations: {}
        }
    },
    computed: {
        ...mapState(['categories', 'category', 'showCategoryModal', 'status']),        
        listCategories() {
            let excludes = this.getExcludeCats(this.category.ID);
            return this.categories.filter(cat => excludes.indexOf(cat.ID) == -1)
        }
    },
    methods: {
        getExcludeCats(ID) {
            let list = [];            
            if(ID) {
                list.push(ID);
                this.categories.map((cat) => {
                    if(ID == cat.ID_parent) {
                        list = [
                            ...list,
                            ...this.getExcludeCats(cat.ID)
                        ]
                    }
                })
            }
            return list;
        },
        handlerSave() {
            this.showLoading = true;
            this.$store.dispatch('saveCategory', this.category).then((data) => {
                this.showLoading = false;

                if(data.messages) {
                    this.messages = {...data.messages};
                } else {
                    this.messages = {};
                } 

                if(data.validations) {
                    this.validations = {...data.validations};
                } else {
                    this.validations = {};
                }                

            });
        },
        handlerCancel() {
            this.$store.commit('SHOW_CATEGORY_MODAL', false);
            this.validations = {};
            this.messages = {};
        }
    }
}
</script>

<style scoped>
    h3 {
        margin: 10px;
    }
</style>