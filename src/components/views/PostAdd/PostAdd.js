import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './PostAdd.module.scss';

const Component = ({className, children}) => (
  <div className={clsx(className, styles.root)}>
    <div className={styles.post_wrapper}>
      <h2>Add your ad</h2>
      <form>
        <label>TITLE</label>
        <input type="text" ></input>
        <label>CONTENT</label>
        <textarea ></textarea>
        <label>AUTHOR</label>
        <input type="text"></input>
        <label>YOUR EMAIL</label>
        <input type="email"></input>
        <label>PHONE NUMBER</label>
        <input type="number"></input>
        <label>LOCATION</label>
        <input type="text"></input>
        <label>PRICE</label>
        <input type="number"></input>
        <label htmlFor="file" className={styles.custom_file}>Choose a photo</label>
        <div className={styles.input_file}><input type="file" id="file" accept="image/*" multiple></input> </div>
        <button type="submit"> Publish </button>
      </form>
    </div>
    {children}
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
  Component as PostAdd,
  // Container as PostAdd,
  Component as PostAddComponent,
};
