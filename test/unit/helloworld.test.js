import helloworld from '/src/components/helloworld.vue';
import { mount } from '@vue/test-utils';
import { beforeEach, describe, expect, it, vi } from 'vitest';

describe('helloWorld', () => {

    it('itMounts', () => {
        const wrapper = mount(helloworld);
        console.log(wrapper.html());
    } )
  

    })