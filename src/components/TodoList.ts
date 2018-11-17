//https://jsonplaceholder.typicode.com/todos/
import Vue from 'vue';
import axios from 'axios';
import { Component } from 'vue-property-decorator';

@Component<TodoList>({
    name: 'todo-list'
})
export default class TodoList extends Vue {
    tasks: object = [];
    /**
     * 
     * 
     */
    created() {
        this.loadTodos();
    }
    /**
     * 
     * 
     */
    async loadTodos() {
        return axios.get(`https://jsonplaceholder.typicode.com/todos/`)
            .then(response => {
                this.$set(this.$data, 'tasks', response.data);
            })
            .catch((e) => {
                console.log(e)
            })
    }
};
