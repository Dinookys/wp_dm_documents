<template>
    <div>
        <div :class="['dm-modal', {show: showShortcodeModal}]" >
            <div>
                <h4>Copie o código e cole em uma página para mostrar este item</h4>
            </div>
            <div>
                <input type="text" class="form-control" v-model="shortcode" @click="(e) => e.target.select()" readonly><br>                                
            </div>            
            <div>
                <button class="button button-secondary dm-button-block" @click.prevent="handlerCancel" >Fechar</button>                
            </div>
        </div>
        <div class="dm-backdrop"></div>
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {    
    computed: mapState(['shortcode', 'showShortcodeModal']),
    methods: {        
        handlerCancel() {
            this.$store.commit('SHOW_SHORTCODE_MODAL', false);
        }
    }
}
</script>