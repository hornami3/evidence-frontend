import React, { Fragment } from 'react';
import classes from './Layout.module.css';

const Layout: React.FC = props => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Evidence astronautů</h1>
      </header>
      <main className={classes.main}>
        {props.children}
      </main>
    </Fragment>
  );
};

export default Layout;