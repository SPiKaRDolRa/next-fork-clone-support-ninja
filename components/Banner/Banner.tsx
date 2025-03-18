"use client"
import React from "react";

const Banner = () => {
  return (
    <div className="w-full bg-[#EE4B4A] text-center py-2 min-h-[51px]">
      <p className="text-[15px] leading-7 text-[#F7E1D2] font-inter">
        The 2025 CX Outsourcing Report is Here!{" "}
        <a
          href="#"
          className="font-bold text-[#EDBC4F] underline hover:text-yellow-400 transition"
        >
          Access the Full Report
        </a>
      </p>
    </div>
  );
};

export default Banner;