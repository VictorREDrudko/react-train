export const COLLAPSED = 'TOGGLE-COLLAPSED'

export type stateType = {
  collapsed: boolean
}

type actionType = {
  type: string
}

export const reducer = (state: stateType, action: actionType): stateType => {
  switch(action.type) {
    case COLLAPSED: return {...state, collapsed: !state.collapsed}
    default: throw new Error("Bad action")
  }
  
  return state
}































// // Constants
// export const TOGGLE_CONST = 'TOGGLE-COLLAPSED'


// // Types ****************
// type StateType = {
//   collapsed: boolean
// }

// type ActionType = {
//   type: string
// }

// // Reduger****************
// export const reducer = (state: StateType, action: ActionType): StateType => {
//   switch(action.type) {
//     case TOGGLE_CONST: return {...state, collapsed: !state.collapsed};
//     default: throw new Error("Bad action type");
//   }

//   return state
// }