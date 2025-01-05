import { useEffect, useState } from 'react'
import axios, { AxiosInstance } from 'axios';
import './App.css'
import ApiService from './service/request';



// Axios instance oluştur
const httpClient: AxiosInstance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  timeout: 3000,
  headers: { 'Content-Type': 'application/json' },
});
const apiService = new ApiService(httpClient);



function App() {
  const [name, setName] = useState('Mustafa')
  useEffect(() => {
    setTimeout(async () => {
      setName('x2333')
      const response = await apiService.fetchData();
      console.log({ response });
    }, 3000);
  },)

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
