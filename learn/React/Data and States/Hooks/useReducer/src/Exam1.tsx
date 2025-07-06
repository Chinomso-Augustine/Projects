import { useReducer } from "react";

{/*useReducer practice 1: 
    building counter app 
    more testing     
*/}

{/*Creating types for state and action which will be automatically inferred in the code
    starts with interface State{types of states to use ex string, number, bools etx }*/}

{/*states will havre count which is a number and error handler which is a string or sometimes null */}
interface State{
    count: Number; 
    error: string | null; 
}

{/*Two main actions to perform: increment and decrement */}
interface Action{
    type: "Increment" | "Decrement"; 
}

{/*Function for reducer: takes 2 args, type state which is State and action which is Action*/}
function reducer(state: State, action: Action ){

}

function Demo() {
    {/*Creating state object: similar to useState except require 2 args - actions to perform and initial value of state
        Depending on the type of actions perform, state will be updated  
    */}
    const [state, dispatch] = useReducer();

    return <div className="Practice"></div>
}


export default Demo; 