import { shallowMount } from '@vue/test-utils'
import Counter from '../Counter.vue'

describe('Counter.vue', () => {
    const wrapper = shallowMount(Counter)

    it('Show correct html', () => {
        expect(wrapper.html()).toContain('<span class="count">0</span>')
    })
    
    it('Has button', () => {
        expect(wrapper.contains('button')).toBe(true)
    })

    it('Button works', () => {
        const button = wrapper.find('button')
        const span = wrapper.find('span')
        let count = (wrapper.vm as any).count

        for(let i = 0; i < 100; i++){
            count++
            button.trigger('click')
            expect(span.text()).toBe(String(count))
            expect((wrapper.vm as any).count).toBe(count)
        }
    })
})