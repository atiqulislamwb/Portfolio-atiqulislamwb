import React from "react";

const contents = [
  { id: 1, src: require("../assets/react_logo.png"), name: "React Js" },
  { id: 12, src: require("../assets/redux.png"), name: "Redux" },
  { id: 2, src: require("../assets/react_logo.png"), name: "React Native" },
  { id: 3, src: require("../assets/nodejs_logo.png"), name: "Node Js" },
  { id: 4, src: require("../assets/express.png"), name: "Express Js" },
  { id: 5, src: require("../assets/mongodb.png"), name: "MongoDB" },
  { id: 6, src: require("../assets/js_logo.png"), name: "JavaScript" },
  { id: 7, src: require("../assets/docker.png"), name: "Docker" },
  { id: 8, src: require("../assets/aws.png"), name: "AWS Cloud" },
  { id: 9, src: require("../assets/tailwind.png"), name: "Tailwind Css" },
  { id: 10, src: require("../assets/mui.png"), name: "Material Ui" },
  { id: 11, src: require("../assets/firebase.png"), name: "Firebase" },
];

const Skills = () => {
  return (
    <div className="mt-[80px] sm:mt-[150px]  sm:ml-[110px]">
      <div className="flex flex-wrap gap-6 items-center justify-center">
        {contents?.map((item) => (
          <div
            key={item.id}
            className="  sm:slide-left slide-in-top   sm:w-[200px] w-[110px] h-[110px] sm:h-[200px] bg-[#f8fafc] p-2 rounded-[40%]  border-b-[4px]  flex flex-col items-center justify-center border-[#bae1db]
           hover:bg-[#bae1db] transition ease-in duration-300 "
          >
            <img
              src={item?.src}
              alt={item.name}
              className="sm:w-14 sm:h-14 h-10 w-10 object-fit  "
            />
            <p className=" text-md sm:text-xl mt-2 font-bold text-[#112726]">
              {item?.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
