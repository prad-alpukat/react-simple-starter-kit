import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
    return (
        <nav>
            <div className="container flex justify-between py-5">
                <h3>Logo</h3>

                <NavLink to="/add-product">
                    <button>
                        Add Products
                    </button>
                </NavLink>
            </div>
        </nav>
    )
}
