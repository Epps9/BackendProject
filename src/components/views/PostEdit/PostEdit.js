import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './PostEdit.module.scss';

const Component = ({className, children}) => (
  <div className={clsx(className, styles.root)}>
    <div className={styles.post_wrapper}>
      <h2>Edit your ad</h2>
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
        <div className={styles.photos}> your photos</div>
        <input type="file" id="file" accept="image/*" multiple></input>
        <label htmlFor="file" className={styles.custom_file}>Choose a photo</label>
        <button type="submit"> Edit </button>
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
  Component as PostEdit,
  // Container as PostAdd,
  Component as PostEditComponent,
};
