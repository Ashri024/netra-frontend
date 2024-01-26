import './App.css'
import { useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {Sidebar, Navbar} from './components'
import {Home, About, Contact} from './pages'
import { useDispatch, useSelector } from 'react-redux'

function App() {
  const dispatch = useDispatch();
  const isDark = useSelector((state) => state.isDark);
  const activeMenu = useSelector((state) => state.activeMenu);

  console.log("is dark: ",isDark);
  console.log("Menu Active: ",activeMenu);
  return (
    <div className={isDark ? "dark": ""}>
      <BrowserRouter>
        <div className='flex relative dark:bg-main-dark-bg'>

        {/* If the menu is active, then only show sidebar */}
        {activeMenu ? (
            <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-blue-950 z-10">
              <Sidebar />
            </div>
          ) : (
            <div className="w-0 dark:bg-secondary-dark-bg">
              <Sidebar />
            </div>
          )}

        {/* Designing the main part */}
        <div className={activeMenu? "md:ml-72 flex flex-col w-full" : " flex flex-col w-full"} >

          {/* <Header /> */}
          <div className='fixed top-0 right-0 w-full' id='navbar'>
            <Navbar/>
          </div>

          {/* Main Section */}
          <div className="flex flex-col w-full h-screen overflow-auto p-4 mt-16">
            <Routes>
              <Route path="/" element={(<Home/>)} />
              <Route path="/Dashboard" element={(<Home/>)} />
              <Route path="/About" element={(<About/>)} />
              <Route path="/Contact" element={(<Contact/>)} />
            </Routes>
          </div>

        </div>

        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
