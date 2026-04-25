import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Login from './screens/Login'
import Register from './screens/Register'
import Item from './screens/Item'
import Dashboard from './screens/Dashboard'
import AuthNavBar from './components/AuthNavBar'
import { ToastContainer } from "react-toastify"
import ProtectedRoute from "./components/ProtectedRoute"

const App = () => {

  console.log(import.meta.env.VITE_API_URL_BACKEND, "====>")

  return (
    <BrowserRouter>
      <div>

        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />

        <AuthNavBar />


        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/item" element={
            <ProtectedRoute>
              <Item />
            </ProtectedRoute>
          } />
          <Route path="/dashboard" element={
            
              <ProtectedRoute>
             <Dashboard />
            </ProtectedRoute>
            } />

        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
