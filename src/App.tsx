import { useEffect, useState } from 'react'
import './App.css'
import apiService from './api/ApiService';


function App() {
  const [name, setName] = useState('Mustafa')
  useEffect(() => {
    setTimeout(async () => {
      const { title }: any = await apiService.fetchData();
      setName(title)
    }, 3000);
  }, [])

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-4">
          <div className="alert alert-primary" role="alert">
            {name}
          </div>
          <div className="alert alert-secondary" role="alert">
            {name}
          </div>
        </div>
        <div className="col-4">
          <div className="alert alert-success" role="alert">
            {name}
          </div>
          <div className="alert alert-danger" role="alert">
            {name}
          </div>
        </div>
        <div className="col-4">
          <div className="alert alert-light" role="alert">
            {name}
          </div>
          <div className="alert alert-dark" role="alert">
            {name}
          </div>
        </div>
      </div>
    </div>

  )
}

export default App
