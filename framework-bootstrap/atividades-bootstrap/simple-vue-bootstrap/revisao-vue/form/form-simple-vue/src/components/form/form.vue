<template>
  <div class="form-vue"> 
    <Title class="title-form"/>

    <form class="form">
      <input class="form-name" 
      placeholder="nome"
      v-model="nome"/>
       <input class="form-grad" 
       placeholder="graduação"
       v-model="graduacao"/>
        <input class="form-inst" 
        placeholder="instituição"
        v-model="instituicao"/>
        <button
        @click="requisicao(event)">enviar</button>
    
      <br/>
      <textarea
      class="form-area"
      v-model="info"
      />
      </form>

  </div>
</template>

<script>
import Title from '../title/title'

export default {
  name:'Form',
  components:{
  Title
  },
  data:function(){
    return {
      nome:'',
      graduacao:'',
      instituicao:'',
      info:''
    }
  },
  methods:{
    requisicao(event){
      let nome = this.nome
      let instituicao = this.instituicao
      let graduacao = this.graduacao
      this.info = nome + ',' 
                + graduacao 
                + ','
                + instituicao + '.'

      event.preventDefault()
    }
  }
}
</script>


<style>
  .form{
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-itens:center;

    margin:30px  20px;
  }
  .form .form-name{
      margin:20px 0;
      padding:5px;
  }
  .form .form-grad{
       margin:10px 0;
       padding:5px;
  }
  .form .form-inst{
       margin:10px 0;
       padding:5px;
  }
  .form button{
    padding:3px;
    background:black;

    color:white;

    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; 

    cursor:pointer;
  }
  .form .form-area{
      height:70px;
  }
  .form-vue .title-form{
      color: rgba(0,0,0,0.3);
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; 

      background: whitesmoke;

      margin: 0 20px;
 }
</style>