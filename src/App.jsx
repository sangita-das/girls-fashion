
import { RouterProvider } from 'react-router-dom'
import './App.css'

import router from './Components/Routes/Routes'


function App() {
 

  return (
    <>
   <RouterProvider router={router} />
    </>
  )
}

export default App
