import { ref, toRefs, reactive } from 'vue';
import { $patch } from './patch';
import { $subscribe, getSubscribers, triggerSubs } from './subscriptions';
import { logWarning } from './helpers';
/**
 * @param storeId - store id
 * @param state - state map
 * @param guards - guards map
 * @returns proxy with guarded state
 */
function addStateGuards(storeId, state, guards) {
    return new Proxy(state, {
        get: (target, prop, receiver) => {
            return Reflect.get(target, prop, receiver);
        },
        set: (target, prop, value, receiver) => {
            let isGuarded = true;
            if (guards[prop]) {
                /**
                 * check guards map type
                 */
                if (Array.isArray(guards[prop])) {
                    isGuarded = guards[prop].every(fn => fn(value));
                }
                else {
                    logWarning(`{guards}: wrong type of guards map in the ${storeId} store.`, `Guards should be an array of functions.`);
                }
            }
            if (!isGuarded) {
                logWarning(`{guards}: The value "${value}" is not valid for mutation`, `of state property "${prop}" in the "${storeId}" store`);
            }
            if (isGuarded) {
                return Reflect.set(target, prop, value, receiver);
            }
            return true;
        }
    });
}
/***
 * @param store - current store instance
 * @param name - name of action
 * @param action - action to wrap
 * @returns a wrapped action to handle subscriptions
 */
function wrapAction(store, name, action) {
    return (...args) => {
        const { beforeList, afterList, onErrorList } = getSubscribers(store.$id, name);
        if (beforeList)
            triggerSubs(beforeList);
        let result;
        try {
            result = action.call(store, ...args);
        }
        catch (error) {
            if (onErrorList)
                triggerSubs(onErrorList, error);
            throw error;
        }
        if (result instanceof Promise) {
            return result
                .then(res => {
                if (afterList)
                    triggerSubs(afterList, res);
                return res;
            })
                .catch(error => {
                if (onErrorList)
                    triggerSubs(onErrorList, error);
                return Promise.reject(error);
            });
        }
        if (afterList)
            triggerSubs(afterList, result);
        return result;
    };
}
/**
 * @param options - store definition object
 * @returns store instance
 */
export function defineStore(options) {
    const { id, state, actions, guards } = options;
    let initialState = state?.() || {};
    const guardedState = guards ? addStateGuards(id, initialState, guards) : null;
    const stateRef = ref(guardedState || initialState);
    const { assign } = Object;
    /**
     * defining store properties
     */
    const _storeProperties = {};
    _storeProperties.$id = id;
    _storeProperties.$guards = (guards || {});
    _storeProperties.$patch = $patch;
    _storeProperties.$subscribe = $subscribe;
    Object.defineProperty(_storeProperties, '$state', {
        get: () => stateRef.value,
        set: (val) => stateRef.value = val
    });
    /**
     * create the store and wrapping
     * into reactive for unwrapping the refs
     * and for getting access to state refs
     * without "value"
     */
    const _store = reactive(assign(_storeProperties, toRefs(stateRef.value), actions));
    /**
     * wrapping the actions to handle subscribers
     */
    actions && Object.keys(actions).forEach(name => {
        _store[name] = wrapAction(_store, name, _store[name]);
    });
    const useStore = () => _store;
    useStore.$id = _store.$id;
    return useStore;
}
//# sourceMappingURL=store.js.map