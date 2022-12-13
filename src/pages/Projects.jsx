import React, { useState } from "react";
import Modal from "../components/Modal";
import { topProjects, moreProjects } from "../utils/data";
const Projects = () => {
  const [data, setData] = useState({});
  return (
    <div className="">
      <div>
        <div className="mt-10 mb-10 ml-10 ">
          <span className="text-3xl  title border-b-[4px] border-[#0d9488]">
            Top Projects
          </span>
        </div>
        <div className="flex mt-10 flex-wrap  items-center justify-center gap-6">
          {topProjects?.map((project) => (
            <div
              key={project.id}
              className=" mb-3 card rounded-lg scale-in-center hover:shadow-lg w-[170px] h-[240px]  sm:w-[310px] sm:h-[435px]   "
            >
              <img
                src={project?.src}
                alt={project.name}
                className="sm:w-[300px] sm:h-[350px] w-[150px] h-[175px]  object-contain sm:object-contain  "
              />
              <div className="flex justify-between mb-5  items-center mt-4">
                <p className="text-md sm:text-2xl font-bold ml-3">
                  {project?.name}
                </p>

                <label
                  onClick={() => setData(project)}
                  htmlFor="my-modal"
                  type="button"
                  className="text-sm sm:text-xl shadow-md  cursor-pointer rounded-full px-2 sm:px-5 py-1 hover:bg-[#f8fafc] hover:scale-105 transition ease-in-out duration-300 bg-[#ecf4f3] font-semibold mr-1 ml-3 sm:ml-0 border-[2px] border-[#76bdb2]"
                >
                  Details
                </label>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <div className="mt-10 mb-10 ml-10">
          <span className="text-3xl mb-2 title  border-b-[4px] border-[#0d9488]">
            More Projects
          </span>
        </div>
        <div className="flex mt-10 flex-wrap items-center justify-center gap-6">
          {moreProjects?.map((project) => (
            <div
              key={project.id}
              className="mb-3 card rounded-lg scale-in-center hover:shadow-lg  w-[170px] h-[240px]  sm:w-[310px] sm:h-[435px]"
            >
              <img
                src={project?.src}
                alt={project?.name}
                className="sm:w-[300px] sm:h-[350px] w-[150px] h-[175px] object-contain sm:object-contain "
              />
              <div className="flex justify-between mb-5  items-center mt-4">
                <p className="text-md sm:text-2xl font-bold ml-3">
                  {project?.name}
                </p>

                <label
                  onClick={() => setData(project)}
                  htmlFor="my-modal"
                  type="button"
                  className="text-sm sm:text-xl shadow-md  cursor-pointer rounded-full px-2 sm:px-5 py-1 hover:bg-[#f8fafc] hover:scale-105 transition ease-in-out duration-300 bg-[#ecf4f3] font-semibold mr-1 ml-3 sm:ml-0 border-[2px] border-[#76bdb2]"
                >
                  Details
                </label>
              </div>
            </div>
          ))}
        </div>
      </div>
      {data && <Modal data={data} />}
    </div>
  );
};

export default Projects;
