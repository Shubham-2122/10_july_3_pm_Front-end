import React, { useEffect } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

function Header() {

    const redirect = useNavigate()

    useEffect(()=>{
        if(!localStorage.getItem("Uid"))
        {
            redirect("/login")
        }
    })

    const logout=()=>{
        localStorage.removeItem("Uid")
        localStorage.removeItem("Uname")
        redirect("/login")
        toast.success('logout successfully..');

    }

    return (
        <div>
            <header id="header" className="header sticky-top">
                <div className="topbar d-flex align-items-center dark-background">
                    <div className="container d-flex justify-content-center justify-content-md-between">
                        <div className="contact-info d-flex align-items-center">
                            <i className="bi bi-envelope d-flex align-items-center"><a href="mailto:contact@example.com">contact@example.com</a></i>
                            <i className="bi bi-phone d-flex align-items-center ms-4"><span>+1 5589 55488 55</span></i>
                        </div>
                        <div className="social-links d-none d-md-flex align-items-center">
                            <a href="#" className="twitter"><i className="bi bi-twitter-x" /></a>
                            <a href="#" className="facebook"><i className="bi bi-facebook" /></a>
                            <a href="#" className="instagram"><i className="bi bi-instagram" /></a>
                            <a href="#" className="linkedin"><i className="bi bi-linkedin" /></a>
                        </div>
                    </div>
                </div>{/* End Top Bar */}
                <div className="branding d-flex align-items-cente">
                    <div className="container position-relative d-flex align-items-center justify-content-between">
                        <NavLink to="/" className="logo d-flex align-items-center">
                            {/* Uncomment the line below if you also wish to use an image logo */}
                            {/* <img src="assets/img/logo.webp" alt=""> */}
                            <h1 className="sitename">Grandoria</h1>
                        </NavLink>
                        <nav id="navmenu" className="navmenu">
                            <ul>
                                <li><NavLink to="/">Home</NavLink></li>
                                <li><NavLink to="/about" className="">About</NavLink></li>
                                <li><NavLink to="/room">Rooms</NavLink></li>
                                <li><NavLink  to="/ame">Amenities</NavLink></li>
                                <li><NavLink to="/location">Location</NavLink></li>
                                <li className="dropdown"><a href="#"><span>Pages</span> <i className="bi bi-chevron-down toggle-dropdown" /></a>
                                    <ul>
                                    
                                        <li><NavLink to="/rest">Restaurant</NavLink></li>
                                        <li><NavLink to="/offer" >Offers</NavLink></li>
                                    
                                        <li><NavLink to="/book">Booking</NavLink></li>
                                       
                                    </ul>
                                </li>
                                <li><NavLink to="/contact">Contact</NavLink></li>
                                {(()=>{
                                    if(localStorage.getItem("Uid")){
                                        return(
                                            <li><Link to="/edit">{localStorage.getItem("Uname")}</Link> </li>
                                        )
                                    }
                                })()}
                                {(()=>{
                                    if(localStorage.getItem("Uid")){
                                        return(
                                             <li><Link onClick={logout}>Logout</Link> </li>
                                        )
                                    }
                                    else{
                                        return(
                                            <li><Link >login</Link> </li>
                                        )
                                    }
                                })()}
                            </ul>
                            <i className="mobile-nav-toggle d-xl-none bi bi-list" />
                        </nav>
                    </div>
                </div>
            </header>


        </div>
    )
}

export default Header
