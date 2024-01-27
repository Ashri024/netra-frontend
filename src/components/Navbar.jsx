import React from 'react' 

import {Tooltip} from '@mui/material'
import { AiOutlineMenu } from 'react-icons/ai'
import { IoSettingsSharp } from "react-icons/io5";
import { MdKeyboardArrowDown } from "react-icons/md";
import avatar from "../assets/avatar.jpg"
import { useDispatch, useSelector } from 'react-redux'
import { toggleActiveMenu } from '../redux/slice'
const NavButton = ({ title, customFunc, icon, color, dotColor }) => (
  <Tooltip title={title} placement="bottom" arrow>
    <button
      type="button"
      onClick={() => customFunc()}
      style={{ color }}
      className="relative text-2xl rounded-full p-3 hover:bg-light-gray text-blue-950"
    >
      <span
        style={{ background: dotColor }}
        className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
      />
      {icon}
    </button>
  </Tooltip>
);

function Navbar() {
  const dispatch = useDispatch();
  const username = useSelector((state) => state.username);
  const activeMenu = useSelector((state) => state.activeMenu);
  return (
    <div className={`h-16 flex items-center relative justify-between p-2 ${activeMenu? "ml-72":"" } bg-white`}>
      <NavButton title="Menu" customFunc={() => dispatch(toggleActiveMenu())} icon={<AiOutlineMenu />} color="" dotColor="white" />
      <div className="flex">
        <Tooltip title="Profile" placement="bottom" arrow>
          <div
            className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg"
            onClick={() => {}}
          >
            <img
              className="rounded-full w-8 h-8"
              src={avatar}
              alt="user-profile"
            />
            <p>
              <span className="text-gray-400 text-14">Hi,</span>{' '}
              <span className="text-gray-400 font-bold ml-1 text-14">
                {username}
              </span>
            </p>
            <MdKeyboardArrowDown className="text-gray-400 text-14" />
          </div>
        </Tooltip>
        <NavButton title="Settings" customFunc={() => console.log("Settings")} icon={<IoSettingsSharp />} color="" dotColor="red" />
      </div>
    </div>
  )
}

export default Navbar