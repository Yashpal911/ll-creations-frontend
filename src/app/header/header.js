"use client";
import Link from "next/link";
import React from "react";
import { Navbar, Nav } from "rsuite";
import "rsuite/dist/rsuite.min.css";

const Header = () => {
  return (
    <div className="bg-gray-100 px-6 py-3">
      <Navbar>
        <div className="flex items-center justify-between w-full">
          {/* Left Logo */}
          <Navbar.Brand as={Link} href="/" className="text-lg font-bold">
            LL Creations
          </Navbar.Brand>

          {/* Centered Navigation */}
          <div className="flex-1 flex justify-center">
            <Nav className="flex space-x-6">
              <Nav.Item as={Link} href="/" className="headerLinks">Home</Nav.Item>
              <Nav.Item as={Link} href="/about" className="headerLinks">About Us</Nav.Item>
              <Nav.Item as={Link} href="/work" className="headerLinks">Work</Nav.Item>
              {/* <Nav.Menu title="Work">
                <Nav.Item className="!text-gray-900 hover:!text-blue-500">Logo</Nav.Item>
                <Nav.Item className="!text-gray-900 hover:!text-blue-500">Ui/Ux</Nav.Item>
                <Nav.Item className="!text-gray-900 hover:!text-blue-500">SolidWorks</Nav.Item>
              </Nav.Menu> */}
            </Nav>
          </div>

          {/* Right-Aligned Contact */}
          <div className="ml-auto">
            <Nav>
              <Link href="/contact">
              <button className="theme-btn">
                Contact Us
                </button>
              </Link>
            </Nav>
          </div>
        </div>
      </Navbar>
    </div>
  );
};

export default Header;
