import { Actions, AppState, CandidateActions } from "../types/store";

export const reducer = (actions: Actions, state:AppState) =>{
  const {action, payload} = actions;
  
  switch (action) {
    case CandidateActions.ADD:
       state.candidate = [...state.candidate, payload]
    return state;
   case CandidateActions.GET:
       state.candidate = payload
    return state;
  
    default:
      return state;
  }

}