import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useState} from 'react';
import ListItems from './Components/ListItems';
import ADD from './Components/ADD';
function App() {
const [list, setList] = useState(["item1","item2"])

const addItem = (item)=>{
  setList([...list,item ])
}

  return (
    <div className="App">
<h1>TO DO LIST</h1>
<ADD addItem={addItem}/>
<ListItems list={list}/>
    </div>
  );
}

export default App;
