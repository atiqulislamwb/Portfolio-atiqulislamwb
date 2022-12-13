import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <div className=" flex items-center justify-center ">
      <p className="text-sm font-semibold">
        {" "}
        &copy; {year} Atiqul Islam Russell | All Rights Reserved
      </p>
    </div>
  );
};

export default Footer;
