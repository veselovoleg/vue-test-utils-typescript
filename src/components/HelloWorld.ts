import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';
import Counter from './Counter'
import TodoList from './TodoList'

@Component<HelloWorld>({
    name: 'hello-world',
    components: {
        Counter,
        TodoList
    }
})

export default class HelloWorld extends Vue{
    @Prop()
    private msg!: string;
};
