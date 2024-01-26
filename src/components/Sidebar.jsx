import React from 'react'
import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { MdOutlineCancel,MdSpaceDashboard, MdCompare} from 'react-icons/md'
import {default as TooltipComponent} from '@mui/material/toolTip'
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
              name: 'Contact',
              icon: <IoMdContacts />,
            },
            {
              name: 'About',
              icon: <FaCommentAlt />,
            },
      ];
    const activeLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 text-[#ff4500] text-lg m-2 mr-0 bg-[#ff4d403d] border-r-4 border-[#ff4500]';
    const normalLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 text-lg text-gray-700 dark:text-gray-200 dark:hover:text-white hover:bg-[#ff4d403d] hover:text-white m-2 mr-0';

  return (
    <div className="ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto  pb-10">
      {activeMenu && (
        <>
          <div className="flex justify-between items-center">
            <Link to="/" 
            // onClick={handleCloseSideBar}
             className="items-center gap-3 ml-3 mt-4 flex text-3xl font-extrabold tracking-tight dark:text-white text-slate-900">
              <MdCompare/> <span className='netraName'>Netra</span>
            </Link>
            <TooltipComponent title="Menu" placement="left-start" arrow>
              <button
                type="button"
                onClick={() => dispatch(toggleActiveMenu())}
                className="text-xl rounded-full p-3 hover:bg-light-gray mt-4 block text-white "
              >
                <MdOutlineCancel />
              </button>
            </TooltipComponent>
          </div>

          <div className="mt-10 ">
            {links.map((link) => (
                  <NavLink
                    to={`/${link.name}`}
                    key={link.name}
                    className={({ isActive }) => (isActive ? activeLink  : normalLink) }
                  >
                    {link.icon}
                    <span className="capitalize ">{link.name}</span>
                  </NavLink>
                ))}
          </div>
        </>
      )}
    </div>
  )
}

export default Sidebar