import React from 'react';
import './App.css'
import axios from 'axios'
axios.defaults.withCredentials = true
function App() {


const createCookie = () => {
  axios.get('http://localhost:3005/',{ withCredentials: true }).then((res) =>{
      console.log(res.data)
    })
  }
//POST EXAMPLE
//   const payload = {
//     "email": "test@test.com",
//     "password": "pass123",
// }
//   axios.post('http://localhost:3005/login', payload ,{ withCredentials: true }).then((res) =>{
//     console.log(res.data)
//   })
// }

const deleteCookie = () => {
  axios.get('http://localhost:3005/deleteCookie',{ withCredentials: true }).then((res) =>{
    console.log(res.data)
  })
}

	return (
		<div className="App">
      <h1>HTTP ONLY COOKIE DEMO</h1>
			<div className="box">
        <button className="button green" onClick={createCookie}>Create Cookies</button>
        <button className="button yellow">Renew Cookies</button>
        <button className="button red" onClick={deleteCookie}>Delete Cookie</button>
      </div>
		</div>
	);
}

export default App;
