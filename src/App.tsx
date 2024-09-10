 
import './App.css'
import MainLayout from './Componets/layout/MainLayout'
import ProtectedRoute from './Componets/layout/ProtectedRoute'

function App() { 

  return ( 
      <ProtectedRoute><MainLayout /></ProtectedRoute>
  )
}

export default App
