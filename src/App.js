import './App.scss'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home'
import Register from './Register'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
function App() {
  const notify = (type, message) => {
    if (type === 'info') {
      toast.info(message)
    }
    if (type === 'success') {
      toast.success(message)
    }
    if (type === 'warn') {
      toast.warn(message)
    }
    if (type === 'error') {
      toast.error(message)
    }
  }
  return (
    <BrowserRouter>
      <ToastContainer
        position='top-center'
        autoClose={10000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<Register notify={notify} />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
