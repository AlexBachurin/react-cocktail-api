import React from 'react'
import { Link } from 'react-router-dom'
import { useGlobalContext } from '../context'
const Navbar = () => {
    const { resetOnHome } = useGlobalContext();
    return (
        <nav className="navbar">
            <div className="nav-center">
                <Link onClick={resetOnHome} to='/'>
                    <img src="https://res.cloudinary.com/dljezd6qv/image/upload/v1631944288/react-cocktails/logo.9a3d2645_unyia5.svg" alt="cocktails" />
                </Link>
                <ul className="nav-links">
                    <li>
                        <Link onClick={resetOnHome} to='/'>Home
                        </Link>
                    </li>
                    <li>
                        <Link to='/About' >
                            About
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
