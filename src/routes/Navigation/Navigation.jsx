import { Fragment } from 'react';
import { Link, Outlet } from 'react-router-dom';

import './navigation.scss';
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";

export default function Navigation() {
    return (
      <Fragment>
        <div className="navigation">
            <Link to='/' className='logo-container'>
                <CrwnLogo className='logo' />
            </Link>
            <div className='nav-links-container'>
                <Link to='/shop' className='nav-link'>
                    Shop
                </Link>  
                <Link to='/sign-in' className='nav-link'>
                    Sign In
                </Link>  
            </div>
        </div>
        <Outlet />
      </Fragment>
    )
}