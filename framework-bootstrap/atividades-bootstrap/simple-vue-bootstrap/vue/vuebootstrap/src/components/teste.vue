<!-- Revisão Vue-->

<template>
    <div class="teste">
        <h1>
           {{name }}
        </h1>
    <!---->
        <p>{{outroNome}}</p>
        <input 
        placeholder="nome"
        v-model="nome"
        v-on:keyup.enter="digitou(event)"/>


        <form class="form-teste">
            <input  type="text"
            placeholder="cargo"
            v-model="cargo">
             <input type="text"
             placeholder="telefone"
             v-model="telefone">
              <input type="text"
              placeholder="sexo"
              v-model="sexo">
              <button @click="form(event)">enviar</button>
        </form>


          <form class="novo-form-teste">
            <input  type="text"
            placeholder="opniao"
            v-model="opnei">
            <button @click="opne(event)">enviar</button>
        </form>

        <table class="tb-teste"   
           >
            <thead>
                <tr>
                    <td class="td-teste">item</td>
                    <td class="td-teste">preço</td>
                </tr>
            </thead>
           <tbody  
                v-for="mercadoria in produtos" 
                v-bind:key="mercadoria">
                    
                <td class="td-teste-request">{{mercadoria.item}}</td>
                <td class="td-teste-request">{{mercadoria.preco}}</td>  
           </tbody>
        </table>

    </div>
</template>


<script>
export default {
    name:'Teste',
    data: function(){
        return{
            name:'bicho',
            outroNome:'bicho2',
            nome:'',
            cargo:'',
            telefone:'',
            sexo:'',
            opnei:'',
            produtos: [
                {item:'arroz',preco:3.22},
                {item:'açúcar',preco:1.77},
                {item:'sal',preco:0.89}]
        }
    },methods: {
        /** */
        digitou(nome){
            nome = this.nome
            console.log(nome) 
        },
        form(){
           let cargo = this.cargo
           let telefone = this.telefone
           let sexo = this.sexo

           console.log(cargo,telefone,sexo)
        },
        opne(){
            let opniao = this.opnei
            let body = document.querySelector('body')

            let paragraph = document.createElement('p')
            paragraph.append(opniao)
            
            body.appendChild(paragraph)
        },
        mounted(){
             document.onclick = addEventListener('click',(e) =>{
                 e.preventDefault()
             }) 
        },
        updated(){
         
        }
    },
}
</script>


<style>
    .teste{

    }
    .form-teste{
        display: flex;
        flex-direction: column;

        margin: 10px 0;
    }
    .tb-teste{
        margin: 30px 0;
        border: solid 1px rgba(0,0,0,0.3);  

        width: 100%;

    }
    .tb-teste .td-teste{
          background: black;
          color: white;

          padding: 10px;  

          font-family: Georgia, 'Times New Roman', Times, serif;
    }
    .tb-teste .td-teste-request{
          background: whitesmoke;

          padding: 10px;  

          font-family: Georgia, 'Times New Roman', Times, serif;
  
    }
   
</style>

<!-- Revisão Vue-->