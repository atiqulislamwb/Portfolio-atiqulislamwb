import React from "react";
import profile from "../assets/profile-pic.png";
const About = () => {
  return (
    <div className=" mt-[140px] sm:mt-[250px] slide-top flex flex-col items-center justify-center">
      <div
        className=" h-[600px] sm:max-w-[1100px]
      sm:min-w-[800px]  sm:h-[500px] border-r-[4px] border-l-[4px]
       border-[#bae1db] rounded-[48px] p-10 sm:p-20 gap-10 
       bg-[#f8fafc]   flex flex-col-reverse sm:flex-row "
      >
        <div className="p-3">
          <p className="mt-6 sm:mt-10 title text-2xl sm:text-4xl ">
            a bit about me...
          </p>
          <p className=" mt-2 sm:mt-10 text-sm sm:text-lg">
            A self-taught dev passionate for programming{" "}
            <span className="font-semibold mt-3 text-red-600">
              (JavaScript)
            </span>{" "}
            . Also an independent and self motivate person to work under
            pressure and good at conflict resolution,enthusiastic about learning
            new technology,always trying to do my best in any work assigned and
            always appreciated as a good performer .
            <br />
            I’m proud to have already developed a proficient working knowledge
            of{" "}
            <span className="font-semibold mt-3 text-red-600">
              JavaScript, React Js, Redux, React Native, Node Js, Express Js,
              MongoDB, Docker and AWS Cloud .
            </span>
          </p>
        </div>
        <div>
          <div className="sm:w-[300px] sm:h-[300px] w-[180px] h-[180px] p-4  sm:mt-5">
            <img
              src={profile}
              alt="profile-picture"
              className="sm:ml-3 w-full mt-[80px] sm:mt-8 h-full transition duration-500 rounded-[50%] object-cover "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
