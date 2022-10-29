// @ts-ignore
import { defineStore } from '../../nervue/src'

export const useUserStore = defineStore({
  id: 'USER',

  state: () => ({
    name: '',
    age: 35,
    org: {}
  }),

  guards: {
    name: [
      val => ({ next: val.length > 5 })
    ],
    age: [
      val => ({ next: !!val })
    ],
  },

  modifiers: {
    getUserFullName: (state) => state.name + ' Sivkov'
  },

  actions: {
    async setName(name: string): Promise<any>{
      this.$patch(state => state.name = name)
      await new Promise(res => setTimeout(res, 2000))
      return name
    },

    setAge(age){
      this.$patch({ age })
      this.$expose({
        age: true ,
        name: true,
        setName: true,
        getUserFullName: true
      })
      console.log(this._exposed.USER.age)
    }
  },

  expose: {
    name: true,
    setName: true
  },
})

const store = useUserStore()

store.$subscribe({
  name: 'setAge',
  before(){
    console.log('set age')
  }
})
