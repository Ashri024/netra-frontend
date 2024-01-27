import './App.css'
import { useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {Sidebar, Navbar} from './components'
import {Home, About, Contact, LoginRedirect, Login, SignUp,ForgotPassword} from './pages'
import { useDispatch, useSelector } from 'react-redux'
import LoginHero from './assets/loginHero.png';
import LoginBg from './assets/loginBg.png';
import { MdCompare} from 'react-icons/md'
import netraIcon from './assets/netraIcon.svg'

function App() {
  const dispatch = useDispatch();
  const isDark = useSelector((state) => state.isDark);
  const activeMenu = useSelector((state) => state.activeMenu);  
  let isLoggedIn = useSelector((state) => state.isLoggedIn);
  console.log("is dark: ",isDark);
  console.log("Menu Active: ",activeMenu);

  return (
    <div className={isDark ? "dark": ""}>
      <BrowserRouter>
      <Routes>
        <Route path='/Login/*' element={
          <div className="flex flex-col md:flex-row justify-center items-center">
          <div className="md:w-3/5 h-screen ml-[-10px] bg-blue-950 flex items-center flex-col justify-center gap-5 relative">
              <img src={LoginBg} alt="LoginBg" className='absolute top-0 right-0 w-full h-full object-cover object-bottom z-0' />
              <img src={LoginHero} alt="Login Hero" className="w-1/2 h-1/2 object-cover object-center relative z-1"/>
              <span className='relative z-2 text-white text-[2.5rem] text-center font-bold'>Create, Track and <br/> Inverstigate</span>
          </div>
          <div className="md:w-2/5 flex flex-col items-center justify-center gap-10">
              <div className='text-center flex flex-col gap-4'>
                  <div className='flex gap-4 items-center justify-between'>
                      <MdCompare className="text-5xl w-14 h-14 text-blue-950"/>
                      <img src={netraIcon} alt="Netra Icon" className="w-4/5 h-20"/>
                  </div>
                  <h1 className="text-3xl font-bold">Hello Investigators!</h1>
                  <h3>Enter the credentials</h3>
              </div>
              
              <Routes>
                <Route path="/" element={(<Login/>)} />
                <Route path="/Signup" element={(<SignUp/>)} />
                <Route path="/ForgotPassword" element={(<ForgotPassword/>)} />
                <Route path="*" element={(<div>Page not found</div>)} />
              </Routes>

          </div>
      </div>
          
        }/>
        <Route path='*' element={<div className='flex relative dark:bg-main-dark-bg'>

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
          <div className="flex flex-col w-full h-screen overflow-auto p-4 mt-12">
            
            <Routes>
              {isLoggedIn? (
                <>
                <Route path="/" element={(<Home/>)} />
                <Route path="/Dashboard" element={(<Home/>)} />
                <Route path="/About" element={(<About/>)} />
                <Route path="/Contact" element={(<Contact/>)} />
                </>
                )
              :(
                <>
                <Route path="/" element={(<LoginRedirect/>)} />
                <Route path="/Dashboard" element={(<LoginRedirect/>)} />
                <Route path="/About" element={(<LoginRedirect/>)} />
                <Route path="/Contact" element={(<LoginRedirect/>)} />
                </>
              )
              }
              <Route path="*" element={(<div>Page not found</div>)} />
            </Routes>
          </div>
        </div>
        </div>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
