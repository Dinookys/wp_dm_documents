<template>
  <div :class="['dm-document', {dragstart: dragstart}]" @dragstart="handlerDragStart" @dragend="handlerDragEnd" draggable >
      <dm-actions @edit="handlerEdit" @trash="handlerRemove" @shortcode="handlerShortcode" ></dm-actions>

      <dm-notice
        :showMe="confirmRemove"
        :showConfirmButton="true"
        @confirm="handlerConfirmRemove"
        @cancel="handlerCancelRemove"
      >Remover o documento: <b>{{document.titulo}}</b>?</dm-notice>

      <div>
        <small class="id" >ID#{{document.ID}}</small>
        <small class="date" >{{ document.data }}</small>
        <div>
            <dm-icon :icon="document.icon" ></dm-icon>
        </div>
        <div class="dm-title" >
            <b>{{ document.titulo }}</b>
        </div>
      </div>      
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
    props: {
        document: {
            type: Object,
            default() {
                return {}
            }
        }
    },
    data() {
        return {
            dragstart: false,
            confirmRemoveMessage: "",
            confirmRemove: false,
        }
    },
    methods: {
        ...mapActions(["removeDocument"]),
        handlerEdit() {
            this.$store.commit('SET_DOCUMENT', this.document);
            this.$store.commit('SHOW_DOCUMENT_MODAL', true);
        },
        handlerDragStart(e) {
            e.dataTransfer.setData('ID', this.document.ID);
            e.dataTransfer.setData('Type', 'document');
            this.dragstart = true;
        },
        handlerRemove() {
            this.confirmRemove = true;
        },
        handlerCancelRemove() {
            this.confirmRemove = false
        },
        handlerConfirmRemove() {
            this.removeDocument({
                ID: this.document.ID
            });
            this.confirmRemove = false
        },
        handlerShortcode() {
            this.$store.commit('SET_SHORTCODE', `[dm_document doc="${this.document.ID}" ]`);
            this.$store.commit('SHOW_SHORTCODE_MODAL', true);
        },
        handlerDragEnd() {
            this.dragstart = false;
        }
    }
}
</script>
<style scoped>
    .dm-document {
        border: 1px solid #ccc;
        background-color: white;
        display: grid;              
        grid-template-columns: 30px calc(100% - 30px);        
        overflow: hidden;                
        margin: 5px;
        word-wrap: break-word;
    }

    .dm-document:hover {
        cursor: grab;
    }

    .dm-document.dragstart {
        border-style: dashed;
    }

    .dm-document.dragstart > * {
        opacity: .1;
    }

    .dm-document > div:last-child {
        text-align: center;
        padding: 10px;
        display: flex;        
        position: relative;        
        align-items: center;
        gap: 0 10px;
    }

    .dm-document .dm-actions {
        justify-content: space-between;
    }

    .dm-document b,
    .dm-document .dm-title {
      word-break: break-word;
    }

    .dm-document .date,
    .dm-document .id {
        position: absolute;        
    }

    .dm-document .id {
        right: 5px;
        top: 5px;
    }

    .dm-document .date {
        right: 5px;
        bottom: 5px;
    }

    .dm-document .icon {
        transform: scale(2.6);
        margin: 0 10px;
    }
</style>