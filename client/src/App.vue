<template>
  <div id="app">
    <header>
      <h1>แพบ่อตกปลา</h1>
    </header>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');

#app {
  font-family: 'Poppins', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body,
html {
  height: 100%;
  padding: 0;
  margin: 0;
  background: lightcoral;
}

header {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;
  background: crimson;
}

.form-control {
  background: lightpink;
}

.form-field {
  width: 60rem;
  background: crimson;
}
</style>
