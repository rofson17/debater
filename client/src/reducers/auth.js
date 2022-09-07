import {SING_IN, SING_UP, LOGOUT, EDIT_PASSWORD} from "../constants/actionType";

export default (state={}, action)=>{
    switch (action.typ) {
        case SING_IN:
            break;
        default:
            return state;
    }
}
