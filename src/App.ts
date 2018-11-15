import Vue from 'vue';
import Component from "vue-class-component";
import HelloWorld from './components/HelloWorld.vue';

@Component<App>({
    name: 'app',
    components: {
        HelloWorld,
    }
})
export default class App extends Vue {

}