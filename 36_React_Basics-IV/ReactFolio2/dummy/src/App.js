import { useEffect , useState } from 'react';
import './App.css';

function App() {
  
  const[text,setText] = useState('');
  const[name, setName] = useState('love');

  function changeHandler(event){
    console.log(text);
    setText(event.target.value);
  }

  // VARIATION-1 -> Every Render
  // useEffect( () => {
  //   console.log("UI RENDERING DONE");
  // });

  // VARIATION-2 -> First Render
  // useEffect( () => {
  //   console.log("UI RENDERING DONE");
  // },[]);


  // VARIATION-3  first Render + whenever dependency changes
  // useEffect( () => {
  //   console.log("Change Observed");
  // }, [name]);

  // VARIATION-4 : to handle unmounting of a component
  useEffect( () => {
    // add event listner
    console.log("Listner added");

    return () => {
      console.log("Listner removed");
    }
  },[text]);
  

  return (
    <div className="App">
      <input type="text" onChange={changeHandler}></input>
    </div>
  )
}

export default App;
