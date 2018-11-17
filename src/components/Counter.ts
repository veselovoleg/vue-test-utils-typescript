import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component<Counter>({
    name: "counter"
})

export default class Counter extends Vue{
    count:number =  0
    /**
     * 
     **/
    increment(){
        this.count++ 
    }  
}

