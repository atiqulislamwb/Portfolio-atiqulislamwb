import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { GoProject } from "react-icons/go";

import { GiSkills } from "react-icons/gi";
import { FaBlog } from "react-icons/fa";
import { MdSchool, MdContacts } from "react-icons/md";
import { AiTwotoneHome } from "react-icons/ai";
import { BsFillInfoCircleFill } from "react-icons/bs";
import { RiMenuFoldFill } from "react-icons/ri";
import { IoMdCloseCircleOutline } from "react-icons/io";

export const DesktopNav = () => {
  const active =
    "text-white flex-row  flex items-center gap-2 transition ease-in duration-300";
  const inactive = "text-slate-900 flex-row flex items-center gap-2 ";

  return (
    <div className="flex flex-col items-center justify-center">
      <p className="text-3xl title text-black mt-16 mb-16">Atiqul Islam</p>
      <div className="flex slide-top flex-col gap-6 mt-10 text-lg font-semibold sub-title">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? active : inactive)}
        >
          <AiTwotoneHome />
          Home
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? active : inactive)}
        >
          <BsFillInfoCircleFill />
          About
        </NavLink>
        <NavLink
          to="/skill"
          className={({ isActive }) => (isActive ? active : inactive)}
        >
          <GiSkills />
          Skills
        </NavLink>
        <NavLink
          to="/project"
          className={({ isActive }) => (isActive ? active : inactive)}
        >
          <GoProject />
          Projects
        </NavLink>
        <NavLink
          to="/education"
          className={({ isActive }) => (isActive ? active : inactive)}
        >
          <MdSchool />
          Education
        </NavLink>
        <NavLink
          to="/blog"
          className={({ isActive }) => (isActive ? active : inactive)}
        >
          <FaBlog />
          Blog
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) => (isActive ? active : inactive)}
        >
          <MdContacts />
          Contact
        </NavLink>
      </div>
    </div>
  );
};

export const MobileNav = () => {
  const [toggle, setToggle] = useState(false);
  const active =
    "text-white flex-row  flex items-center gap-2 transition ease-in duration-300";
  const inactive = "text-slate-900 flex-row flex items-center gap-2 ";

  return (
    <>
      <div className="relative flex flex-row items-center bg-[#bae1db] justify-between p-3 sm:hidden">
        <p className="text-2xl title text-black ">Atiqul Islam</p>
        <div className="absolute top-3 right-5">
          {toggle ? (
            <IoMdCloseCircleOutline
              color={"black"}
              size={32}
              onClick={() => setToggle((prev) => !prev)}
            />
          ) : (
            <RiMenuFoldFill
              color={"black"}
              size={32}
              onClick={() => setToggle((prev) => !prev)}
            />
          )}
        </div>
      </div>
      {toggle && (
        <div
          className={`smooth-transition  absolute top-0 h-[54vh] rounded-br-[15px]  w-2/3 opacity-100 bg-[#bae1db] backdrop-blur-lg z-10
            p-6 sm:hidden  ${toggle ? "left" : "-left-full"} `}
        >
          <div className="flex slide-top flex-col gap-6 mt-20 text-lg font-semibold sub-title">
            <NavLink
              onClick={() => setToggle(false)}
              to="/"
              className={({ isActive }) => (isActive ? active : inactive)}
            >
              <AiTwotoneHome />
              Home
            </NavLink>

            <NavLink
              onClick={() => setToggle(false)}
              to="/about"
              className={({ isActive }) => (isActive ? active : inactive)}
            >
              <BsFillInfoCircleFill />
              About
            </NavLink>
            <NavLink
              onClick={() => setToggle(false)}
              to="/skill"
              className={({ isActive }) => (isActive ? active : inactive)}
            >
              <GiSkills />
              Skills
            </NavLink>
            <NavLink
              onClick={() => setToggle(false)}
              to="/project"
              className={({ isActive }) => (isActive ? active : inactive)}
            >
              <GoProject />
              Projects
            </NavLink>
            <NavLink
              onClick={() => setToggle(false)}
              to="/education"
              className={({ isActive }) => (isActive ? active : inactive)}
            >
              <MdSchool />
              Education
            </NavLink>
            <NavLink
              onClick={() => setToggle(false)}
              to="/blog"
              className={({ isActive }) => (isActive ? active : inactive)}
            >
              <FaBlog />
              Blog
            </NavLink>
            <NavLink
              onClick={() => setToggle(false)}
              to="/contact"
              className={({ isActive }) => (isActive ? active : inactive)}
            >
              <MdContacts />
              Contact
            </NavLink>
          </div>
        </div>
      )}
    </>
  );
};
