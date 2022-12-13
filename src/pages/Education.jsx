import React from "react";

const Education = () => {
  return (
    <div className="flex  flex-col items-center justify-center mt-[100px] p-1 sm:mt-[200px]">
      <div className="grid slide-in-elliptic-top-bck sm:grid-cols-2 bg-white p-10 rounded-lg shadow-light">
        <div className=""></div>
        <div className="w-full sm:w-[500px] ">
          <div className="left p-4 -ml-1 border-l-4 border-[#35e6bf]">
            <p className="text-xl font-extrabold">
              Cantonment College, Jashore
            </p>
            <p>HSC (Science)</p>
            <p>Jul 2014 - Jul 2016</p>
          </div>
        </div>
        <div className="w-full sm:w-[500px] ">
          <div className="text-right p-4  border-r-4 border-[#35e6bf]">
            <p className="text-xl font-extrabold">
              Jashore University of Science & Technology
            </p>
            <p>Bachelor of Pharmacy</p>
            <p>Jan 2017 - Dec 2023</p>
          </div>
        </div>
        <div className=""></div>
      </div>
    </div>
  );
};

export default Education;
