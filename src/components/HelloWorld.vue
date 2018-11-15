<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <counter />
    <ul>
      <li v-for="number in 30" :key="number" class="list-item">{{ number }}</li>
    </ul>
  </div>
</template>

<script lang="ts" src="./HelloWorld.ts"></script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped src="./HelloWorld.css"></style>
