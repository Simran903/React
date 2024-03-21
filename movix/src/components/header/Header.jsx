import React, { useState, useEffect } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { SlMenu } from "react-icons/sl";
import { VscChromeClose } from "react-icons/vsc";
import { useNavigate, useLocation } from "react-router-dom";
import "./style.scss";

import ContentWrapper from "../contentWrapper/ContentWrapper";
import logo from "../../assets/movix-logo.svg";

const Header = () => {
  const [show, setShow] = useState("top") // for scrolling effect
  const [lastScrollY, setLastScrollY] = useState(0) // for scrolling effect
  const [mobileMenu, setMobileMenu] = useState(false) // for menu in small screens
  const [query, setQuery] = useState("") // for search query
  const [showSearch, setShowSearch] = useState("") // for search query
  const navigate = useNavigate() // for navigation
  const location = useLocation() // for location

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location])


  useEffect(() => {
    window.addEventListener("scroll", controlNavbar)
    return () => {
      window.removeEventListener("scroll", controlNavbar)
    }
  }, [lastScrollY])

  const controlNavbar = () => {
    // console.log(window.scrollY)
    if (window.scrollY > 200) {
      if (window.scrollY > lastScrollY && !mobileMenu) {
        setShow("hide")
      } else {
        setShow("top")
      }
      setLastScrollY(window.scrollY)
    }
  }

  const openSearch = () => {
    setMobileMenu(false)
    setShowSearch(true)
  }
  const openMobileMenu = () => {
    setMobileMenu(true)
    setShowSearch(false)
  }
  const searchQueryHandler = (event) => {
    if (event.key === "Enter" && query.length > 0) {
      navigate(`/search/${query}`)
    }
    setTimeout(() => {
      setShowSearch(false)
    }, 1000);
  }

  const navigationHandler = (type) => {
    if (type === "movie") {
      navigate("/explore/movie")
    }
    else {
      navigate("/explore/tv")
    }
    setMobileMenu(false);
  }

  return (
    <header className={`header ${mobileMenu ? "mobileView" : ""} ${show}`}>
      <ContentWrapper>
        <div className="logo" onClick={() => navigate("/")}>
          <img src={logo} alt="logo" />
        </div>
        <ul className="menuItems">
          <li className="menuItem" onClick={() => navigationHandler("movie")}>MOVIES</li>
          <li className="menuItem" onClick={() => navigationHandler("tv")}>TV SHOWS</li>
          <li className="menuItem">
            <HiOutlineSearch onClick={openSearch} />
          </li>
        </ul>

        <div className="mobileMenuItems">
          <HiOutlineSearch onClick={openSearch} />
          {mobileMenu ? (<VscChromeClose onClick={() => setMobileMenu(false)} />) : (<SlMenu onClick={openMobileMenu} />)}


        </div>
      </ContentWrapper>
      {showSearch && <div className="searchBar">
        <ContentWrapper>
          <div className="searchInput">
            <input
              type="text"
              placeholder='Search for a movie or TV show...'
              onKeyUp={searchQueryHandler}
              onChange={(e) => setQuery((e.target.value))} />
            <VscChromeClose onClick={() => setShowSearch(false)} />
          </div>
        </ContentWrapper>
      </div>}
    </header>
  )
}

export default Header