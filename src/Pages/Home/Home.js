import React from 'react';
import { Outlet } from 'react-router-dom';
import HomeMid from '../HomeMid/HomeMid';
import Menu from '../Menu/Menu';

const Home = () => {
    return (
        <div className='lg:grid grid-cols-3 '>
            <div className='hidden lg:block '>
                <Menu></Menu>
            </div>
            <div className=''>
                <Outlet></Outlet>
            </div>
            <div className='hidden lg:block '>
                <p>right side</p>
            </div>
        </div>
    );
};

export default Home;