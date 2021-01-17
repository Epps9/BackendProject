import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import clsx from 'clsx';

import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './NotFound.module.scss';

const Component = ({className, notFound}) => (
  <div className={clsx(className, styles.root)}>
    <div className={styles.wrapper}>
      <h2>{notFound.titleText}</h2>
      <Link to='/'> <button>{notFound.buttonText}</button></Link>
    </div>
  </div>
);

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

const mapStateToProps = state => ({
  notFound: state.notFound,
});

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

const Container = connect(mapStateToProps)(Component);

export {
  //Component as NotFound,
  Container as NotFound,
  Component as NotFoundComponent,
};
