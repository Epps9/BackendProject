import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import { connect } from 'react-redux';
//import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './Homepage.module.scss';

const Component = ({className, data}) => (
  <div className={clsx(className, styles.root)}>
    <div className={styles.btn_wrapper}>
      <button className={styles.btn}>+ Add new ad</button>
    </div>
    <div className={styles.adds_wrapper}>
      <div className={styles.add}>
        <h1>{data.title}</h1>
        <h2>{data.date}</h2>
      </div>
      <div className={styles.add}>
        <h1>{data.title}</h1>
        <h2>{data.date}</h2>
      </div>
      <div className={styles.add}>
        <h1>{data.title}</h1>
        <h2>{data.date}</h2>
      </div>
      <div className={styles.add}>
        <h1>{data.title}</h1>
        <h2>{data.date}</h2>
      </div>
      <div className={styles.add}>
        <h1>{data.title}</h1>
        <h2>{data.date}</h2>
      </div>
      <div className={styles.add}>
        <h1>{data.title}</h1>
        <h2>{data.date}</h2>
      </div>
      <div className={styles.add}>
        <h1>{data.title}</h1>
        <h2>{data.date}</h2>
      </div>
      <div className={styles.add}>
        <h1>{data.title}</h1>
        <h2>{data.date}</h2>
      </div>
    </div>
  </div>
);

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

const mapStateToProps = state => ({
 data: state.posts.data,
});

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

const Container = connect(mapStateToProps)(Component);

export {
  //Component as Homepage,
  Container as Homepage,
  Component as HomepageComponent,
};
