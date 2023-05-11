
import './App.css';
import {useEffect, useState} from 'react'
import axios from 'axios'
import Table from './Component/Table';
function App() {
  let [data,setData]=useState([])
  // fetch('http://localhost:5000/getData')
  // .then(res=>)
  useEffect(()=>{

    axios.get('http://localhost:5000/getData')
    .then(res=>   setData( res.data))
  },[])



  return (
    
      <div>  
        <Table data={data}/>
          </div>
  );
}

export default App;
