<template>
  <div id="app">
    <Header />
    <Form />
  </div>
</template>

<script>
import Header from './components/header/header'
import Form from './components/form/form'

export default {
  name: "App",
 components:{
   Header,
    Form,
 }
};
</script>

<style>
#app {
 margin:0;
}
html,body{
  margin:0;
}
body{
  position:relative;
}
</style>
