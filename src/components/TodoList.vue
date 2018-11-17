<template>
    <div>
        <h1>Todos</h1><br> 
        <ul>
            <li v-for="(item, index) in tasks" :key="index">
                {{ item.id }} - {{ item.title }} ({{ item.complited === true ?  "Closed" : "Active" }})
            </li>
        </ul>
        
    </div>
</template>

<script lang="ts" src="./TodoList.ts"></script>

  <style scoped>
    li {
        text-align: left;
        list-style: none;
    }
  </style>
  