"use client"
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-[#F7E1D2] py-4 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6">
        {/* Logo */}
        <Link href="/">
          <Image src="/images/support_ninja_full_logo.svg" alt="SupportNinja Logo" height={40} width={200} />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-[#2B2C30] font-medium">
          <div className="flex items-center space-x-1 cursor-pointer hover:text-black">
            <span>Solutions</span> <ChevronDown size={16} />
          </div>
          <div className="flex items-center space-x-1 cursor-pointer hover:text-black">
            <span>Industries</span> <ChevronDown size={16} />
          </div>
          <Link href="#" className="hover:text-black">
            How it Works
          </Link>
          <div className="flex items-center space-x-1 cursor-pointer hover:text-black">
            <span>About</span> <ChevronDown size={16} />
          </div>
          <Link href="#" className="hover:text-black">
            Resources
          </Link>
        </div>

        {/* Get Started Button */}
        <Link
          href="/get-started"
          className="hidden md:block bg-[#0C3A23] text-white py-2 px-6 rounded-full font-medium hover:bg-green-900 transition"
        >
          Get Started
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-[#2B2C30]"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#F7E1D2] p-4 flex flex-col space-y-2">
          <Link href="#" className="hover:text-black">
            Solutions
          </Link>
          <Link href="#" className="hover:text-black">
            Industries
          </Link>
          <Link href="#" className="hover:text-black">
            How it Works
          </Link>
          <Link href="#" className="hover:text-black">
            About
          </Link>
          <Link href="#" className="hover:text-black">
            Resources
          </Link>
          <Link
            href="/get-started"
            className="bg-[#0C3A23] text-white py-2 px-6 rounded-full font-medium hover:bg-green-900 transition text-center"
          >
            Get Started
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
