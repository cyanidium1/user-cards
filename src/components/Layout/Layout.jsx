import React, { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import styles from './Layout.module.css';
import styled from 'styled-components';
const StyledNav = styled(NavLink)`
  &.active {
    background-color: orange;
  }
`;

const Layout = () => {
  return (
    <>
      <nav className={styles.nav}>
        <StyledNav className={styles.item} to="/">
          Home page
        </StyledNav>
        <StyledNav className={styles.item} to="/tweets">
          Tweets
        </StyledNav>
      </nav>
      <Suspense fallback={<div>Loading tweets</div>}>
        <main>
          <Outlet />
        </main>
      </Suspense>
    </>
  );
};

export default Layout;
