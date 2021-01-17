import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import { connect } from 'react-redux';

import styles from './Post.module.scss';

const Component = ({className, post}) => (
  <div className={clsx(className, styles.root)}>
    <div className={styles.post_wrapper}>
      <h2>{post.title}</h2>
      <button href="#">EDIT YOUR ADD</button>
      <div className={styles.dates}>
        <p className={styles.dates_title}>Published:</p>
        <p>{post.date} /</p>
        <p className={styles.dates_title}>Last modified:</p>
        <p>{post.dateModified}</p>
      </div>
      <p className={styles.add_content}>{post.content}
      </p>
      <div className={styles.price}>
        <h3>Price:</h3>
        <h3>{post.price}</h3>
      </div>
      <div className={styles.contact}>
        <h3>Contact</h3>
        <p>EMAIL:</p>
        <p>{post.email}</p>
        <p>PHONE:</p>
        <p>{post.phone}</p>
        <p>LOCATION:</p>
        <p>{post.location}</p>
      </div>
    </div>

  </div>
);

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

const mapStateToProps = state => ({
  post: state.posts.data[0],
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
