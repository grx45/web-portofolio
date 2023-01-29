import React from "react";
import { AiOutlineCopyrightCircle } from "react-icons/ai";

function Footer() {
  return (
    <footer className="bg-[#171225]">
      <div className="container mx-auto text-white flex items-center border-t border-[#708090] py-2">
        <AiOutlineCopyrightCircle className="text-xl font-bold inline mr-2" />
        <span className="text-lg"> 2023, Jeffry Ngasinur</span>
      </div>
    </footer>
  );
}

export default Footer;
