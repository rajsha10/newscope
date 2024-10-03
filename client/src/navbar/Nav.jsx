import React from 'react'
import { navs } from '../assets/data'
import { FaInstagram,FaFacebook, FaYoutube, FaXTwitter, FaTelegram } from "react-icons/fa6";
import './navbar.css'

export default function Nav() {
  return (
    <div>
        <nav id="navbar" className="navbar">
            <a href="/">
              <img src="/images/logoNav.png" alt="logo" />
            </a>
            <ul>
              {navs.map((nav) => (
                  <li key={nav.id}>
                  <a href={nav.link}>
                      {nav.name}
                  </a>
                  </li>
              ))}
            </ul>
            <div className="apply-host">
              <button>
                <a href="/apply">Apply as an Author</a>
              </button>
            </div>
            <div className="social-icons">
              <a href="#"><FaInstagram color='white' /></a>
              <a href="#"><FaFacebook color='white' /></a>
              <a href="#"><FaYoutube  color='white' /></a>
              <a href="#"><FaXTwitter   color='white' /></a>
              <a href="#"><FaTelegram   color='white' /></a>
            </div>
        </nav>
    </div>
  )
}
