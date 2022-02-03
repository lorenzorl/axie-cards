// import { shallowMount } from '@vue/test-utils'
const { Nuxt, Builder } = require('nuxt')
import AxieCard from '@/components/AxieCard.vue'
const nuxtConfig = require('../nuxt.config.js')



export const addVuex = (context) => {
  context.vuex = require('vuex')
  context.vue.use(context.vuex)
}

export const addI18n = (options) => {
  return (context) => {
    context.i18n = require('vue-i18n')
    context.vue.use(context.i18n)
    // eslint-disable-next-line new-cap
    context.i18nInstance = new context.i18n(options)
  }
}

export const addFilter = (name, lambda) => {
  return context => context.vue.filter(name, lambda)
}

export const compositeConfiguration = (...configs) => {
  return context => configs.forEach(config => config(context))
}

export const bootstrapVueContext = (configureContext) => {
  const context = {}
  const teardownVueContext = () => {
    jest.unmock('vue')
    Object.keys(context).forEach(key => delete context[key])
    jest.resetModules()
  }

  jest.isolateModules(() => {
    context.vueTestUtils = require('@vue/test-utils')
    context.vue = context.vueTestUtils.createLocalVue()

    jest.doMock('vue', () => context.vue)

    configureContext && configureContext(context)
  })

  return {
    teardownVueContext,
    ...context
  }
}

// describe('Logo', () => {
//   test('is a Vue instance', () => {
//     const wrapper = shallowMount(Logo)
//     expect(wrapper.vm).toBeTruthy()
//   })
// })

describe('AxieCard', () => {
  let store = null
  let NuxtStore = null
  let vueContext = null
  const dataProp = {
    "id": "aquatic-back-02",
    "partName": "Hermit",
    "skillName": "Shelter",
    "defaultAttack": 0,
    "defaultDefense": 115,
    "defaultEnergy": 1,
    "expectType": "melee",
    "iconId": "critical-block",
    "triggerColor": "#ACBCBF",
    "triggerText": "Critical Block",
    "description": "Disable critical strikes on this Axie during this round."
  };

  beforeAll(async () => {
    // const config = {
    //   dev: process.env.NODE_ENV === 'production',
    //   rootDir: resolve(__dirname, '../'),
    //   mode: 'universal',
    //   plugins,
    //   modules
    // }

    let nuxt = new Nuxt({
      ...nuxtConfig, 
      buildDir: '.nuxt-build-jest',
      ignore: ["**/components/**/*", "**/layouts/**/*", "**/pages/**/*"]
    })

    await new Builder(nuxt).build()

    NuxtStore = await require(`${nuxt.options.buildDir}/store.js`);

  }, 300000)

  beforeEach(async () => {
    vueContext = bootstrapVueContext(
      compositeConfiguration(addVuex, addI18n)
    )
    store = await NuxtStore.createStore();
  })

  afterEach(() => {
    vueContext.teardownVueContext()
  })

  test('Test Logo Component', () => {
    const wrapper = vueContext.vueTestUtils.shallowMount(AxieCard, {
      store,
      localVue: vueContext.vue,
      propsData: {
        data: dataProp
      }
    })

    expect(wrapper.vm).toBeTruthy()
  })

  // test('Test Vuetify Logo Component', () => {
  //   const wrapper = vueContext.vueTestUtils.shallowMount(VuetifyLogo, {
  //     localVue: vueContext.vue,
  //     vuetify: vueContext.vuetifyInstance
  //   })

  //   expect(wrapper.text()).toMatch('Logo')
  // })

  // test('Test Global Variables', () => {
  //   const wrapper = vueContext.vueTestUtils.shallowMount(GlobalModuleUsage, {
  //     localVue: vueContext.vue,
  //     vuetify: vueContext.vuetifyInstance
  //   })

  //   expect(wrapper.text()).toMatch('91')
  // })
})