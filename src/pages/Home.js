import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Home = () => {

  return (
    <>
      {/* home의 children을 부르는 것  */}
      <Outlet />
    </>
  );
};

export default Home;
