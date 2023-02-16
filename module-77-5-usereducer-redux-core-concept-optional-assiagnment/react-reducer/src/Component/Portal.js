import React, { useReducer, useState } from 'react';
import { portalReducer } from '../Reducer/PortalReducer';
import { portalStore } from '../Store/portalStore';

const Portal = () => {
     const [state, dispatch] = useReducer(portalReducer, portalStore);
     const [name, setName] = useState('');

     return (
          <div>
               <h1>my portals</h1>
               <h3>has patient: {state.patients.length}</h3>
               <input type="text" onChange={e => e.target.value} />
               <button onClick={() => dispatch({ type: 'ADD_PATIENT', name: name })}>Add</button>
               <br />
               <h3>----------------------</h3>
               {
                    state.patients.map(patient => <p
                         key={patient.id}
                    >
                         {patient.name} {patient.id}

                    </p>)
               }
          </div >
     );
};

export default Portal;