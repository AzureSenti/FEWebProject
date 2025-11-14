import React from 'react';
import { Outlet, Link, NavLink } from 'react-router-dom';
import { Navbar } from './Navbar';
import { useAppSelector } from '../../store/hooks';



const PublicNavLinks = () => (
    <>
        <NavLink to="/" className="nav-link">Trang chủ</NavLink>
        <NavLink to="/products" className="nav-link">Sản phẩm</NavLink>
        {/* Thêm link "Thiết bị", "Phụ kiện" sau... */}
    </>
);



export const MainLayout: React.FC = () => {
    return (
        <div className="app-container">
            <Navbar links={<PublicNavLinks />}/>
            <main className="main-content">
                <Outlet />
            </main>
        </div>
    );
};