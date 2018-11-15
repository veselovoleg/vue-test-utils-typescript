import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';
import Counter from './Counter'

@Component<HelloWorld>({
    name: 'hello-world',
    components: {
        Counter
    }
})

export default class HelloWorld extends Vue{
    @Prop() private msg!: string;
};
