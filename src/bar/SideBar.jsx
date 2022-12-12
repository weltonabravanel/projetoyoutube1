import React, { useContext, useEffect } from "react";
import { NavLink } from "react-router-dom";

import { context } from "../context/context.jsx";

import studio from "../assests/sidebar/studio.svg";
import music from "../assests/sidebar/music.svg";
import kids from "../assests/sidebar/kids.svg";
import TV from "../assests/sidebar/TV.svg";

// import necessary components ^^^^^

const SideBar = () => {
  // destructuring every value we need from context to set SideBar
  const { sideBar, setsideBar } = useContext(context);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 1000) {
        setsideBar(false);
      } else {
        setsideBar(true);
      }
    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // disable the window scroll when click is true

  function disableScroll() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    let scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
    window.onscroll = function () {
      window.scrollTo(scrollLeft, scrollTop);
    };
  }

  function enableScroll() {
    window.onscroll = function () {};
  }

  sideBar && disableScroll();
  sideBar === false && enableScroll();

  //// jsx

  return (
    <>
      {sideBar && (
        <div className="sb-big">
          <div className="home">
            <NavLink to={"/"} className="sidebar-link" activeClassName="active">
              <i className="fa-solid fa-house"></i> Home
            </NavLink>
            <NavLink
              to={"/explore"}
              className="sidebar-link"
              activeClassName="active"
            >
              <i className="fa-solid fa-globe"></i> Explore
            </NavLink>
          </div>

          <div className="explore">
            <h4>Explore</h4>
            <NavLink
              to={"/gaming"}
              className="sidebar-link"
              activeClassName="active"
            >
              <i className="fa-solid fa-gamepad"></i> Gaming
            </NavLink>
            <NavLink
              to={"/beauty"}
              className="sidebar-link"
              activeClassName="active"
            >
              <i className="fa-solid fa-vest"></i> Fashion & Beauty
            </NavLink>
            <NavLink
              to={"/learning"}
              className="sidebar-link"
              activeClassName="active"
            >
              <i className="fa-solid fa-graduation-cap"></i> Learning
            </NavLink>
            <NavLink
              to={"/sports"}
              className="sidebar-link"
              activeClassName="active"
            >
              <i className="fa-solid fa-medal"></i> Sports
            </NavLink>
          </div>

          <div className="explore">
            <h4>More From YouTube </h4>
            <a
              href="https://studio.youtube.com/"
              className="sidebar-link"
              target={"_blank"}
            >
              <img src={studio} alt="youtube studio" /> Creator Studio
            </a>
            <a
              href="https://music.youtube.com/"
              className="sidebar-link"
              target={"_blank"}
            >
              <img src={music} alt="youtube music" /> YouTube Music
            </a>
            <a
              href="https://www.youtube.com/kids/"
              className="sidebar-link"
              target={"_blank"}
            >
              <img src={kids} alt="youtube kids" /> YouTube Kids
            </a>
            <a
              href="https://tv.youtube.com/welcome/?utm_source=youtube_web&utm_medium=ep&utm_campaign=home&ve=34273&utm_servlet=prod"
              className="sidebar-link"
              target={"_blank"}
            >
              <img src={TV} alt="youtube TV" /> YouTube TV
            </a>
          </div>
        </div>
      )}
      {!sideBar && <div className="sb-small"> Side Bar Small </div>}
    </>
  );
};

export default SideBar;
