import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Login } from "./pages/Login"
import { Dashboard } from "./pages/Dashboard"
import { NewEmployee } from "./pages/NewEmployee"
import { useState } from "react"
import { ProtectedRoute } from "./components/ProtectedRoute"
import { ExitoIS } from "./components/ExitoIS"
import { AllEmployees } from "./pages/AllEmployees"

function App() {
  const [user, setUser] = useState({id:0,name:""});

  const login = ()=>{
    //antes ya se hizo la validacion
    setUser({
      id:1,
      name:"Karla Navarro"
    })
  }

  const logout = () => {
    setUser({id:0,name:""});
  };

  return (

    <BrowserRouter>
    {
      user.id!==0 ? (
        <>
          <ExitoIS logout={logout} user={user}/>
        </>
      ):(
        <>
          {console.log("Error al enviar")}
        </>
      )
    }

      <Routes>
        <Route index element={<Login login={login} />} />
        
        <Route path="/home" element={
          <ProtectedRoute user={user}>
            <Dashboard />
          </ProtectedRoute>
        } />
        <Route path="/newEmployee" element={
          <ProtectedRoute user={user}>
            <NewEmployee />
          </ProtectedRoute>
        } />
        <Route path="/employees" element={
          <ProtectedRoute user={user}>
            <AllEmployees />
          </ProtectedRoute>
        } />
      </Routes>
    </BrowserRouter>
  )
}

export default App