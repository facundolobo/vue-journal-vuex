import state from "./state";
import * as mutations from "./mutations"
import * as actions from "./actions";
import * as getters from "./getters";



const myCustomModulo = {
    namespaced: true, //para encapsular el modulo
    state,

    mutations,
    actions,
    getters
}

export default myCustomModulo