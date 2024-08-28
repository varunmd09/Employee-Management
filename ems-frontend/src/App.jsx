import './App.css'
import Empl from './Components/Empl'
import Footer from './Components/Footer'
import Header from './Components/Header'
import ListEmp from './Components/ListEmp'
import {BrowserRouter,Routes,Route} from 'react-router-dom'


function App() {
  return (
    <>
    <BrowserRouter>
    <Header/>
    <Routes>
     <Route path='/' element={<ListEmp/>}></Route> 
     <Route path='/employees' element={<ListEmp/>}></Route> 
     <Route path='/add-employee' element={<Empl/>}></Route>
     <Route path='/edit-employee/:id' element={<Empl/>}></Route>
    </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
