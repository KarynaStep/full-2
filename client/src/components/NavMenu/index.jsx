import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './NavMenu.module.scss';

const NavMenu = () => {
  return (
    <nav>
      <ul className={styles.menu}>
        <li className={styles.item}>
          <NavLink to="/">home</NavLink>
        </li>
        <li className={styles.item}>
          <NavLink to="/todo">to do</NavLink>
        </li>
        <li className={styles.item}>
          <NavLink to="/users">users</NavLink>
        </li>
        <li className={styles.item}>
          <NavLink to="/sign-up">registration</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavMenu;
