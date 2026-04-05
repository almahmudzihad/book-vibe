import React from 'react'
import Navbar from '../Component/Share/Navbar'
import { Outlet } from 'react-router'

function MainLayout() {
    return (
        <div>
            <Navbar />
            <Outlet></Outlet>
        </div>
    )
}

export default MainLayout
