<template>
<div>
    <div class="top_bar">

      <div class="container">

        <div class="row content_bar">

          <img src="./assets/logo.png" class="top_logo">

          <h1>Idea Bin</h1>

        </div>

      </div>
      

      
    </div>
    <div id="app" class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  padding:20px 20px;
  border-radius:3px;
}

body {
  background:#e3faff;
}

.top_bar {
  background:#3c93ae;
  height:80px;
  width:100%;
  position:relative;
}

.top_bar h1 {
  font-family: 'Gloria Hallelujah', cursive;
  margin-left:10px;
  color:#fff;
  font-weight:'normal';
}

.content_bar {
  display:flex;
  align-items: center;
  justify-content: center;
}

.top_logo {
    height: auto;
    width: 60px;
    padding: 10px 5px;
}

</style>
