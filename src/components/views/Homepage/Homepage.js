import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './Homepage.module.scss';

const Component = ({className, children}) => (
  <div className={clsx(className, styles.root)}>
    <div className={styles.btn_wrapper}>
      <button className={styles.btn}>+ Add new ad</button>
    </div>
    <div className={styles.adds_wrapper}>
      <div className={styles.add}>
        <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h1>
        <h2>01-01-2020</h2>
      </div>
      <div className={styles.add}>
        <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h1>
        <h2>01-01-2020</h2>
      </div>
      <div className={styles.add}>
        <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h1>
        <h2>01-01-2020</h2>
      </div>
      <div className={styles.add}>
        <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h1>
        <h2>01-01-2020</h2>
      </div>
      <div className={styles.add}>
        <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h1>
        <h2>01-01-2020</h2>
      </div>
      <div className={styles.add}>
        <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h1>
        <h2>01-01-2020</h2>
      </div>
      <div className={styles.add}>
        <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h1>
        <h2>01-01-2020</h2>
      </div>
      <div className={styles.add}>
        <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h1>
        <h2>01-01-2020</h2>
      </div>
    </div>
  </div>
);

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

// const mapStateToProps = state => ({
//   someProp: reduxSelector(state),
// });

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Component as Homepage,
  // Container as Homepage,
  Component as HomepageComponent,
};
