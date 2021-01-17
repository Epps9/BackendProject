import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './ShortPost.module.scss';

const Component = ({className, data}) => (
      <div className={styles.add}>
        <h1>{data.title}</h1>
        <h2>{data.date}</h2>
      </div>
);

Component.propTypes = {
  data: PropTypes.node,
};

const mapStateToProps = state => ({
  data: state.posts.data,
});

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

const Container = connect(mapStateToProps)(Component);

export {
  //Component as ShortPost,
  Container as ShortPost,
  Component as ShortPostComponent,
};
