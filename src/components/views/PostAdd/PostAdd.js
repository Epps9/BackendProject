import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './PostAdd.module.scss';

const Component = ({className, postAdd}) => (
  <div className={clsx(className, styles.root)}>
    <div className={styles.post_wrapper}>
      <h2>{postAdd.headTitle}</h2>
      <form>
        <label>{postAdd.title}</label>
        <input type="text" ></input>
        <label>{postAdd.content}</label>
        <textarea ></textarea>
        <label>{postAdd.author}</label>
        <input type="text"></input>
        <label>YOUR {postAdd.email}</label>
        <input type="email"></input>
        <label>{postAdd.phone}</label>
        <input type="number"></input>
        <label>{postAdd.location}</label>
        <input type="text"></input>
        <label>{postAdd.price}</label>
        <input type="number"></input>
        <label htmlFor="file" className={styles.custom_file}>{postAdd.choosePhoto}</label>
        <div className={styles.input_file}><input type="file" id="file" accept="image/*" multiple></input> </div>
        <button type="submit"> {postAdd.submitButtonText} </button>
      </form>
    </div>
  </div>
);

Component.propTypes = {
  className: PropTypes.string,
  postAdd: PropTypes.node,
};

const mapStateToProps = state => ({
  postAdd: state.postAdd,
});

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

const Container = connect(mapStateToProps)(Component);

export {
  //Component as PostAdd,
  Container as PostAdd,
  Component as PostAddComponent,
};
