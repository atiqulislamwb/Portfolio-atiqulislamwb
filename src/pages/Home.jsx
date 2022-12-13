import React from "react";
import profile from "../assets/profile-pic.png";
import Typewriter from "typewriter-effect";
import { MdOutlineEmail } from "react-icons/md";
import {
  AiOutlineCloudDownload,
  AiOutlineGithub,
  AiOutlineLinkedin,
} from "react-icons/ai";
import { FaGoogleDrive } from "react-icons/fa";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="grid sm:grid-cols-2 sm:mt-[200px] mt-[100px] slide-top">
      <div className="flex flex-col items-center justify-center mt-10">
        <div className="sm:w-[350px] sm:h-[350px] w-[180px] h-[180px] ">
          <img
            src={profile}
            alt="profile-picture"
            className="w-full h-full transition duration-500 rounded-[50%] object-cover "
          />
          <p className="flex items-center font-semibold justify-center mt-4 gap-1 sm:text-xl text-md">
            {" "}
            <MdOutlineEmail /> atiqulislamrussell0@gmail.com
          </p>
          <div className="text-3xl mt-5  items-center text-[#0d9488] justify-center flex gap-4 ">
            <p title="mail">
              <a href="mailto:atiqulislamrussell0@gmail.com">
                <MdOutlineEmail />
              </a>
            </p>
            <p title="github">
              <a
                target="_blank"
                rel="noopener"
                href="https://github.com/atiqulislamwb"
              >
                <AiOutlineGithub />
              </a>
            </p>
            <p title="linkedin">
              <a
                href="https://www.linkedin.com/in/atiqul-islam-wb/"
                target="_blank"
                rel="noopener"
              >
                <AiOutlineLinkedin />{" "}
              </a>
            </p>
            <p className="resume drive link" target="_blank" rel="noopener">
              <a href="https://drive.google.com/file/d/1nWaLzDaVv36lh1vBLmbZLdd_Q29eTxIQ/view?usp=share_link">
                <FaGoogleDrive />{" "}
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center sm:items-start  mt-28 sm:mt-24 flex-col text-3xl gap-3">
        <p className="sm:text-3xl text-2xl ">Hi There!</p>
        <p className="font-semibold text-2xl">It's Atiqul Islam (Russell)</p>
        <p className="flex gap-2 text-2xl font-bold sm:text-4xl ">
          I am A{" "}
          <p className="text-red-600 font-bold ">
            {" "}
            <Typewriter
              options={{
                strings: [
                  " React | React Native Developer",
                  "MERN Stack Developer",
                  "JavaScript Developer",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </p>
        </p>
        <div className="flex sm:justify-start items-start gap-2 mt-10">
          <a
            target="_blank"
            rel="noopener"
            href="https://wa.me/+8801937547204"
            className="shadow-md px-5 py-2 sm:py-3 scale-in-center rounded-md bg-[#bae1db] hover:bg-[#76bdb2] transition ease-in duration-500 flex items-center justify-center font-semibold text-xl gap-2 "
          >
            Hire Me
          </a>
          <a
            download
            href="https://drive.google.com/file/d/1nWaLzDaVv36lh1vBLmbZLdd_Q29eTxIQ/view?usp=share_link"
            className="shadow-md px-5 rainbow scale-in-center  circle py-2 sm:py-3 rounded-md bg-[#bae1db] flex items-center justify-center font-semibold text-xl gap-2 hover:bg-[#76bdb2] transition ease-in duration-500 text-red-600 "
          >
            Download Resume <AiOutlineCloudDownload />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
