import React from 'react'
import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { MdOutlineCancel,MdSpaceDashboard, MdCompare} from 'react-icons/md'
import {Hidden, Tooltip} from '@mui/material'
import { IoMdContacts } from 'react-icons/io'
import { FaCommentAlt } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux'
import { toggleDarkMode, toggleActiveMenu } from '../redux/slice'


function Sidebar() {
    const dispatch = useDispatch();
    const activeMenu = useSelector((state) => state.activeMenu);

    const links = [
            {
              name: 'Dashboard',
              icon: <MdSpaceDashboard/>,
            },
            {
              name: 'Compare',
              icon: <IoMdContacts />,
            },
            
      ];
    const activeLink = 'flex items-center gap-5 pl-4 pt-3 pb-3 text-[#ff4500] text-lg mb-4 mr-0 bg-[#ff4d403d] border-r-4 border-[#ff4500]';
    const normalLink = 'flex items-center gap-5 pl-4 pt-3 pb-3 text-lg text-gray-700 dark:text-gray-200 dark:hover:text-white hover:bg-[#ff4d403d] hover:text-white mb-4 mr-0';

  return (
    <div className={`${activeMenu? "ml-3":"ml-0"} h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto  pb-10`}>
          <div className={`flex ${activeMenu? "justify-between":"justify-center"} items-center`}>
            <Link to="/" 
            // onClick={handleCloseSideBar}
             className={`items-center gap-3 ${activeMenu? "ml-3":""} mt-4 flex text-3xl font-extrabold tracking-tight dark:text-white text-slate-900`}>
              <MdCompare sx={{fontSize:"2.5rem"}} className='text-4xl' /> <span className={`netraName ${activeMenu?"": "hidden"}`} >Netra</span>
            </Link>
            <Tooltip title="Menu" placement="left-start" arrow>
              <button
                type="button"
                onClick={() => dispatch(toggleActiveMenu())}
                className={`text-xl rounded-full p-3 hover:bg-light-gray mt-4 block text-white ${activeMenu?"": "hidden"} `}
              >
                <MdOutlineCancel />
              </button>
            </Tooltip>
          </div>

          <div className="mt-10 ">
            {links.map((link) => (
              <Tooltip title={link.name} placement="right" arrow key={link.name}  >
                <div>
                  <NavLink
                    to={`/${link.name}`}
                    className={({ isActive }) => (isActive ? activeLink : normalLink) }
                  >
                    <div className='text-2xl'>
                    {link.icon}
                    </div>
                    <span className={`capitalize ${activeMenu?"": "hidden"} `}>{link.name}</span>
                  </NavLink>
                  </div>
              </Tooltip>
                ))}
          </div>
    </div>
  )
}

export default Sidebar