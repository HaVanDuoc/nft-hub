"use client";

import React, { useEffect, useRef, useState } from "react";
import NavbarComponent from "./NavbarComponent";
import NavbarMobile from "./NavbarMobile";

const NavbarContainer = () => {
  const [showNav, setShow] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const toggleNav = () => setShow((prevShow) => !prevShow);

  const handleClickOutside = (event: MouseEvent) => {
    // Kiểm tra nếu click xảy ra bên ngoài NavbarMobile
    if (
      containerRef.current &&
      !containerRef.current.contains(event.target as Node)
    ) {
      setShow(false); // Đóng NavbarMobile
    }
  };

  useEffect(() => {
    // Thêm sự kiện click
    document.addEventListener("mousedown", handleClickOutside);

    // Gỡ bỏ sự kiện khi component bị hủy
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <NavbarComponent toggleNav={toggleNav} />
      <div ref={containerRef}>
        <NavbarMobile show={showNav} toggleNav={toggleNav} />
      </div>
    </>
  );
};

export default NavbarContainer;
