import extend from 'extend';

const initialState = {
    toggle_modal: false,
}

export default function(state = initialState, action){
    switch(action.type){

        case "TOGGLE_FORM":
            console.log(state.toggle_modal);
            return extend ({}, state, {
                toggle_modal: !state.toggle_modal
            });

        default:
            return state;
    }
}