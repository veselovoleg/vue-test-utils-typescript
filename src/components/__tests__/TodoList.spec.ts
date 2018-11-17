import { shallowMount } from '@vue/test-utils';
import TodoList from '../TodoList.vue';
import axios from 'axios';

jest.mock('../__mocks__/axios')

describe('TodoList.vue', () => {
    it('should fetch a list of tasks', () => {
        const getSpy = jest.spyOn(axios, 'get')
        const wrapper = shallowMount(TodoList)
        expect(getSpy).toHaveBeenCalled()
    })

    it('Show correct html', async () => {
        const wrapper = shallowMount(TodoList)
        expect(wrapper.html()).toContain('<h1>Todos</h1>')
    })
})

