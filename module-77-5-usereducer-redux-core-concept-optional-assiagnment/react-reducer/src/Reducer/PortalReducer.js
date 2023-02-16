export const portalReducer = (state, action) => {
     switch (action.type) {
          case 'ADD_PATIENT':
               const adding = {
                    name: action.name,
                    id: action.name + (state.patients.length)
               }
               const newPatients = [...state.patients, adding]
               return {
                    ...state,
                    patients: newPatients

               }
               break;

          default:
               return {
                    state
               }
               break;
     }
}
