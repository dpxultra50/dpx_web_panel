import { useState } from "react";
import { Outlet } from "react-router-dom";
import Backdrop from "./layout/Backdrop";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import Sidebar from "./layout/Sidebar";
import ScrollToTop from "./layout/ScrollToTop";
import styled from "styled-components";

const User = () => {
  const [sideBar, setSideBar] = useState(false);

  const toggleSideBar = () => {
    setSideBar((prevState) => !prevState);
  };
  return (
    <>
      <>
        <Header openSideBar={toggleSideBar} />
        <Backdrop backdrop={sideBar} closeSidebar={toggleSideBar} />
        <Sidebar sidebar={sideBar} closeSidebar={toggleSideBar} />
        <ScrollToTop />
        <WhatsApp
          href="https://wa.me/8801963431045?text=Is+anyone+available+to+chat?"
          target="blank"
        >
          <img src="/images/icons/whatsapp.png" alt="" />
        </WhatsApp>
      </>
      <Outlet />
      <>
        <Footer />
      </>
    </>
  );
};

const WhatsApp = styled.a`
  position: fixed;
  bottom: 40px;
  left: 40px;
  z-index: 99;
  img {
    width: 45px;
  }
  @media (max-width: 510px) {
    img {
      width: 40px;
    }
    bottom: 30px;
    left: 10px;
  }
`;
export default User;
