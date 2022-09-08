import { defineStore } from '../nervue/src'

const state = () => ({
  name: '',
  age: 25,
  org: {}
})

const actions = {
  async setName(name: string): Promise<void>{
    this.name = name
  },

  setAge(age) {
    this.age = age
  }
}

const guards = {
  name:[ val => val.length > 10],
  age: [val => !!val],
}

export const useUserStore = defineStore({
  id: 'USER',
  state,
  actions,
  guards
})

// const store = useUserStore()