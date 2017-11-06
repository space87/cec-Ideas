<template>
<div>
    <div class="top_bar">

      <div class="container">

        <div class="row content_bar">

          <h1>CEC Hack Bin</h1>

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
  margin-top: 0px;
  padding:20px 20px;
  border-radius:3px;
}

body {
  background:#f2f8f9;
}

.top_bar {
  /* background:#3c93ae; */
  
  height:80px;
  width:100%;
  position:relative;
}

.top_bar h1 {
  font-family: 'arial';
  margin-left:10px;
  font-weight: 'bold';
  color:rgb(131, 131, 131);
  font-weight:'normal';
  font-size:50px;
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
