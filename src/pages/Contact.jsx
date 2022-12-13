import React from "react";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      name: e.target.name.value,
      email: e.target.email.value,
      message: e.target.message.value,
    };
    console.log(data);
  };

  return (
    <div className="flex mt-[50px] sm:mt-[150px]  flex-col items-center sm:items-start justify-center m-3 sm:m-0 sm:ml-10">
      <p className="title text-3xl sm:ml-4 font-semibold border-b-4 border-[#0d9488] ">
        Contact
      </p>
      <div className=" m-2 tilt-in-tr">
        <form action="" onSubmit={handleSubmit}>
          <input
            className=" mt-10 placeholder:bold placeholder:text-lg placeholder:text-slate-700 
          block bg-white w-full sm:w-[500px] border border-slate-300 
          rounded-md py-4  px-8 shadow-sm focus:outline-none
           focus:border-[#76bdb2] focus:ring-[#76bdb2]
            focus:ring-1 sm:text-sm"
            placeholder="Your Name"
            type="text"
            name="name"
          />
          <input
            className=" mt-8 placeholder:bold placeholder:text-lg placeholder:text-slate-700 
          block bg-white w-full sm:w-[500px] border border-slate-300 
          rounded-md py-4  px-8 shadow-sm focus:outline-none
           focus:border-[#76bdb2] focus:ring-[#76bdb2]
            focus:ring-1 sm:text-sm"
            placeholder="Your Email"
            type="email"
            name="email"
          />
          <textarea
            className=" mt-8 placeholder:bold placeholder:text-lg placeholder:text-slate-700 
          block bg-white w-full sm:w-[500px] border border-slate-300 
          rounded-md py-4  px-8 shadow-sm focus:outline-none
           focus:border-[#76bdb2] focus:ring-[#76bdb2]
            focus:ring-1 sm:text-sm"
            placeholder="Your Thought"
            type="text"
            name="message"
            rows="8"
            cols="50"
          />
          <button
            type="submit"
            class=" title shadow-md mt-5 py-2 px-7 sm:px-10 font-semibold hover:scale-110 transition duration-500  hover:bg-[#116b5f] bg-[#1ac0a7] rounded-md text-black "
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
