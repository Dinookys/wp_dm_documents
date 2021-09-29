<template>
  <aside class="dm-right-sidebar">
    <div class="dm-stick-top" >
        <strong>Pesquisar</strong>
    </div>
    <div>
        <label>Nome do arquivo <br>
            <input type="text" placeholder="Nome do arquivo" v-model="term.titulo" class="form-control" /> 
        </label>
    </div>
    <div>
        <label>Data <br>
            <date-picker class="form-control" :lang="ptBr" :value-type="datePickerConf.format" :format="datePickerConf.format" v-model="term.data" ></date-picker>
        </label>
    </div>
    <div>
        <label>Ordenar <br>
            <select v-model="order" class="form-control" @change="search" >
                <option value="ID ASC">Crescente</option>
                <option value="titulo ASC">Nome Crescente</option>
                <option value="data ASC">Data Crescente</option>
                <option value="ID DESC">Decrescente</option>
                <option value="data DESC">Data Decrescente</option>
                <option value="titulo DESC">Nome Decrescente</option>
            </select>
        </label>
    </div>
    <br>
    <div class="dm-cols" >
        <button @click.prevent="clear" class="button button-secondary dm-button-block">Limpar</button>
        <button @click.prevent="search" class="button button-primary dm-button-block">Pesquisar</button>
    </div>
  </aside>
</template>

<script>
import { mapState } from 'vuex';
import ptBr from 'vue2-datepicker/locale/pt-br'
import DatePicker from 'vue2-datepicker';
import 'vue2-datepicker/index.css';


export default {
  data() {
    return {
      ptBr,
      term: {
          titulo: "",
          data: ""
      },
      order: 'ID DESC'
    };
  },
  computed: mapState(['datePickerConf']),
  methods: {
    search() {
        let newRoute = {
          name: this.$route.name,
          params: {
              ...this.$route.params                    
          },
          query: {
            ...this.$route.query,
            order: this.order,
            term: JSON.stringify(this.term)
          }
        }
        this.$router.push(newRoute).catch(() => {
            window.location.reload();
        })
    },
    clear() {
        this.term.titulo = '';
        this.term.data = '';
        this.order= 'ID DESC';
        this.search();
    },
    getFromQuery() {
        let term =  {
            titulo: '',
            data: ''
        };

        try {
            term = JSON.parse(this.$route.query.term);
        } catch (e) {
            term =  {
              titulo: '',
              data: ''
          };
        }       

        this.term = {
            ...term
        }

        this.order = this.$route.query.order || 'ID DESC'
    }
  },
  watch: {
    '$route.query.term'() {
        this.getFromQuery()
    }
  },
  components: {
    DatePicker
  },
  mounted() {
    this.getFromQuery();      
  },
  
};
</script>

<style scoped >
    aside > div {
        padding: 7.5px 15px;
    }
</style>