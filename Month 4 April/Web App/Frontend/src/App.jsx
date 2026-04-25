import { BrowserRouter , Routes , Route , Link } from "react-router-dom"
import Login from './screens/Login'
import Register from './screens/Register'
import Item from './screens/Item'
import Dashboard from './screens/Dashboard'
import AuthNavBar from './components/AuthNavBar'

const App = () => {

  console.log(import.meta.env.VITE_API_URL_BACKEND , "====>")

  return ( 
  <BrowserRouter>
  <div>
    <AuthNavBar/>


    <Routes>
      <Route path="/" element={<Login/>} />
      <Route path="/register" element={<Register/>} />
      <Route path="/item" element={<Item/>} />
      <Route path="/dashboard" element={<Dashboard/>} />
     
    </Routes>
  </div>
  </BrowserRouter>
  )
}

export default App
