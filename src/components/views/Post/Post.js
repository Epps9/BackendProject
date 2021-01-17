import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import { connect } from 'react-redux';
import { getAllPublished } from '../../../redux/postsRedux';

import styles from './Post.module.scss';

const Component = ({className, children}) => (
  <div className={clsx(className, styles.root)}>
    <div className={styles.post_wrapper}>
      <h2>Lorem ipsum title</h2>
      <button href="#">EDIT YOUR ADD</button>
      <div className={styles.dates}>
        <p className={styles.dates_title}>Published:</p>
        <p>01-01-2021 /</p>
        <p className={styles.dates_title}>Last modified:</p>
        <p>03-01-2021</p>
      </div>
      <p className={styles.add_content}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
      <div className={styles.price}>
        <h3>Price:</h3>
        <h3>50$</h3>
      </div>
      <div className={styles.contact}>
        <h3>Contact</h3>
        <p>EMAIL:</p>
        <p>emailemail@email.com</p>
        <p>PHONE:</p>
        <p>1234555555</p>
        <p>LOCATION:</p>
        <p>Warsaw</p>
      </div>
    </div>

  </div>
);

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

const mapStateToProps = state => ({
  posts: getAllPublished (state),
});

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

const Container = connect(mapStateToProps)(Component);

export {
  //Component as Post,
  Container as Post,
  Component as PostComponent,
};
