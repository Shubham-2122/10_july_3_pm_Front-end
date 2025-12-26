import React, { useEffect } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

function Aheader() {

    const redirect = useNavigate()

    useEffect(()=>{
        if(!localStorage.getItem("Aid")){
            redirect("/alogin")
        }
    })

    const logout=()=>{
        localStorage.removeItem("Aid");
        localStorage.removeItem("Aname");
        console.log("logout Successfully");
        toast.success('logout Succesfully')
        redirect("/alogin");
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
                        <NavLink to="/dash" className="logo d-flex align-items-center">
                            {/* Uncomment the line below if you also wish to use an image logo */}
                            {/* <img src="assets/img/logo.webp" alt=""> */}
                            <h1 className="sitename">Dashboard</h1>
                        </NavLink>
                        <nav id="navmenu" className="navmenu">
                            <ul>
                                <li><NavLink to="/about" className="">About</NavLink></li>
                                 <li className="dropdown"><a href="#"><span>Room</span> <i className="bi bi-chevron-down toggle-dropdown" /></a>
                                    <ul>
                                        <li><NavLink to="/roommage">Room Manage</NavLink></li>
                                        <li><NavLink to="/roomadd" >Room Add</NavLink></li>
                                       
                                    </ul>
                                </li>
                                 <li className="dropdown"><a href="#"><span>Aminities</span> <i className="bi bi-chevron-down toggle-dropdown" /></a>
                                    <ul>
                                        <li><NavLink to="/amitimange">Aminities Manage</NavLink></li>
                                        <li><NavLink to="/amitiAdd" >Aminities Add</NavLink></li>
                                       
                                    </ul>
                                </li>
                                    {(()=>{
                                        if(localStorage.getItem("Aid")){
                                            return(
                                                <li><Link>hello {localStorage.getItem("Aname")}</Link></li>
                                            )
                                        }
                                    })()}  

                                    {(()=>{
                                        if(localStorage.getItem("Aid")){
                                            return(
                                                <li><Link onClick={logout}>logout</Link></li>
                                            )
                                        }
                                        else{
                                            return(
                                                 <li><Link to="/alogin">Alogin</Link></li>
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

export default Aheader
