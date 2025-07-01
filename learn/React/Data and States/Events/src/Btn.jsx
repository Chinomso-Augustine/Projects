const Btn = () => {
    /*Function for testing even handler with separate function  */
    function test2(){
        console.log("testing 2")
    }

    /*fun for event handler expression */
    const handleExpre = ()=> console.log("Testing 3"); 
    const clickHandler = () => console.log('Clicked');
    {/*onMouseOver captures whenever the mouse is hovered over the btn */ }
    return (
    <div>
        <div> <button onMouseOver={clickHandler}>Hover Me</button></div>
     
       {/*inline ES6 function inside event handler */}
     <div> <button onClick={() =>console.log('Testing 1')}>Inline EC6 function event handler </button></div>

      {/*Event handler with function declaration (starts with function) */}
      <div> <button onClick={test2}>Handler with function declaration  </button> </div>

      {/*Event handler with function expression */}
      <div> <button onClick={handleExpre}>handler with function expression </button></div>
    </div>
)
}


export default Btn; 