import React from 'react'
import { Link } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'

function Header() {
    return (
        <header className='header'>
            <nav className="navbar navbar-expand-lg">
                <div className="container">
                    <Link className="navbar-brand" to="/">E-Commerce</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon">
                            <FaBars size={25} color='var(--blue)' />
                        </span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">User</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/cart">Orders</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/registration">Logout</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/cart">Cart</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}
export default Header