import { isReactive, isRef } from 'vue'
import { logWarning } from './helpers'

export const createStateProxyWrapper = (state) => new Proxy(state, {
  get: (obj, prop) => {
    if (!Reflect.has(obj, prop)) return null

    return Reflect.get(obj[prop], 'value')
  },
  set(obj, prop, value){
    return Reflect.set(obj[prop], 'value', value)
  }
})

export const createStoreProxyWrapper = (store) => {
  return new Proxy(store, {
    get: (obj, prop) => {
      if (!Reflect.has(obj, prop)) return null

      if (isRef(obj[prop]) || isReactive(obj[prop])) {
        return Reflect.get(obj[prop], 'value')
      }

      return Reflect.get(obj, prop)
    },
    /***
     * here we intercept every mutation
     * of state and check it before we
     * change the reactive state.
     */
    set: (obj, prop, value, receiver) => {
      if (prop) {
        console.log(obj, prop, value, receiver)
      }
      const { $guards } = store

      let isGuarded = true

      if ($guards[prop]) {
        /**
         * check if guards key value is the array
         * of validator functions
         */
        if (Array.isArray($guards[prop])) {
          isGuarded = $guards[prop].every(fn => fn(value))
        } else {
          isGuarded = $guards[prop](value)
        }
      }

      if (!isGuarded) {
        logWarning(
          `{guards}: The value "${ value }" is not valid for mutation`,
          `of state property "${ prop as string }" in the "${ store.$id.toString?.() }" store`
        )
      }

      if (isGuarded) {
        return Reflect.set(obj[prop], 'value', value)
      }

      return true
    }
  })
}

