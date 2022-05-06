import styled from "styled-components";

import { device, theme } from "../../Theme";

const HEIGHT = "120px";

const Wrapper = styled.div`
  position: fixed;
  width: 100%;
  z-index: 99999;

  .navbarWrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 0;
    max-width: 1440px;
    margin: 0 auto;
    padding: 0 2.5%;
    color: #fff;
    position: relative;
    overflow: hidden;
    z-index: 9999;
    transition: all 500ms ease-in-out;
  }

  .navbarWrapper.active {
    height: ${({ NAVBAR_HEIGHT }) => NAVBAR_HEIGHT};
    transition: all 500ms ease-in-out;
  }

  .navbarWrapper img {
    width: 120px;
  }

  .menuButton {
    width: 30px;
    height: 30px;
    position: relative;
  }

  .menuButton span {
    width: 100%;
    height: 1px;
    background-color: #fff;
    position: absolute;
    left: 0;
    opacity: 1;
    transition: all 500ms ease-in-out;
  }

  .menuButton span:nth-of-type(1) {
    bottom: 100%;
  }

  .menuButton span:nth-of-type(2) {
    bottom: calc(50% - (1px / 2));
  }

  .menuButton span:nth-of-type(3) {
    bottom: 0;
  }

  .menuButton:hover span:nth-of-type(1) {
    bottom: calc(50% - 1px);
    left: 25%;
    transform: rotate(60deg);
    transition: all 500ms ease-in-out;
  }

  .menuButton:hover span:nth-of-type(2) {
    bottom: calc(50% - 1px);
    left: -25%;
    transform: rotate(-60deg);
    transition: all 500ms ease-in-out;
  }

  .menuButton.open span {
    background-color: #d29c37;
    transition: all 500ms ease-in-out;
  }

  .menuButton.open:hover span {
    height: 2px;
    transition: all 500ms ease-in-out;
  }

  .menuButton.open span:nth-of-type(1) {
    bottom: calc(50% - 1px);
    left: 0;
    transform: rotate(45deg);
    transition: all 500ms ease-in-out;
  }

  .menuButton.open span:nth-of-type(2) {
    bottom: calc(50% - 1px);
    left: 0;
    transform: rotate(-45deg);
    transition: all 500ms ease-in-out;
  }

  .menuButton.open span:nth-of-type(3) {
    opacity: 0;
    transition: all 500ms ease-in-out;
  }

  .sidebar {
    height: 100vh;
    width: 40%;
    background-color: #fff;
    position: absolute;
    z-index: -1;
    right: -40%;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 1200ms ease-in-out;
  }

  .sidebar.open {
    right: 0;
    transition: all 1200ms ease-in-out;
  }

  .sidebarInnerWrapper {
    width: 90%;
    height: 90%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .sidebarItemsWrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 50%;
  }

  .sidebarItemsWrapper a {
    font-size: 32px;
    font-weight: 400;
    margin: 1rem;
    transition: all 600ms ease-in-out;
    text-transform: lowercase;
  }

  .sidebarItemsWrapper .notActiveItem {
    color: rgba(0, 0, 0, 0.2);
    transition: all 600ms ease-in-out;
  }

  .sidebarItemsWrapper a:nth-of-type(2n) {
    text-indent: 50px;
  }

  .sidebarFooter {
    width: 100%;
    height: 25%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .sidebarFooter a {
    width: 35px;
    height: 35px;
    margin: 0 0.5rem;
  }

  .sidebarFooter a img {
    width: 100%;
    height: 100%;
  }
`;

export default Wrapper;
