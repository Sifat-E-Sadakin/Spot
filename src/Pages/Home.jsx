import React from 'react';
import { Outlet } from 'react-router-dom';
import MemberList from '../Components/MemberList';
import SetStatus from '../Components/SetStatus';

const Home = () => {
    return (
        <div>
            <SetStatus></SetStatus>
            <MemberList></MemberList>
        </div>
    );
};

export default Home;