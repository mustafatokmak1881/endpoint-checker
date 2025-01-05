import { useEffect, useState } from 'react'
import './App.css'
import apiService from './api/ApiService';



type listItem = any;

function App() {
  const [list, setList] = useState([]);

  useEffect(() => {
    setTimeout(async () => {
      const list: listItem = await apiService.fetchData();
      setList(list);
    }, 3000);
  }, [])

  return (
    list.map((value: any) => (
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="alert alert-success w-100" role="alert">
              {value.title}
            </div>
          </div>
        </div>
      </div>
    ))
  )

}

export default App
