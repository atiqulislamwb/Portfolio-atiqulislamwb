import React from "react";

const Modal = ({ data }) => {
  console.log(data);
  return (
    <div className="">
      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-2xl text-red-500 mb-3">
            {data?.full_name}
          </h3>
          <hr />
          <div>
            <p className="text-xl font-semibold mt-4 mb-1">Project Details:</p>
            <ol>
              {data?.project_details?.map((item, index) => (
                <div key={index} className="flex items-center mt-1 sm:mt-2 ">
                  <div className="w-[8px] h-[8px] bg-[#0d9488] mr-2 rounded-[50%]"></div>
                  <p className="text-sm sm:text-[17px] ">{item}</p>
                </div>
              ))}
            </ol>
          </div>
          <div>
            <p className="text-xl font-semibold mt-4">Technologies : </p>
            <div className="flex flex-row flex-wrap gap-2 mt-2">
              {data?.technology?.map((item, index) => (
                <div
                  className="bg-[#ecf4f3] px-2 py-1 font-semibold rounded-md border-2 border-[#0d9488] text-black"
                  key={index}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div>
            <p className="text-xl text-black font-semibold mt-4 mb-2">Link :</p>
            <div className="mt-1">
              {data?.links?.map((link, index) => (
                <div key={link?.id} className="flex gap-3">
                  {link?.live && (
                    <a
                      className="py-2 px-5 bg-[#29d3b9] hover:scale-110 transition duration-500  text-black rounded-md text-md"
                      href={link?.live}
                      target="_blank"
                    >
                      Live Site
                    </a>
                  )}
                  {link?.source_code && (
                    <a
                      className="py-2 px-5 bg-[#29d3b9] hover:scale-110 transition duration-500  text-black rounded-md text-md"
                      href={link?.source_code}
                      target="_blank"
                    >
                      Source Code
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="modal-action">
            <label htmlFor="my-modal" className="btn bg-red-600 border-red-500">
              Close
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
