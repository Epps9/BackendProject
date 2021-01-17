import React from 'react';
import PropTypes from 'prop-types';
import { ShortPost } from '../../features/ShortPost/ShortPost';

import clsx from 'clsx';

import { connect } from 'react-redux';
import { getAllPublished } from '../../../redux/postsRedux.js';

import styles from './Homepage.module.scss';

const Component = ({className, posts}) => (
  <div className={clsx(className, styles.root)}>
    <div className={styles.btn_wrapper}>
      <button className={styles.btn}>+ Add new ad</button>
    </div>
    <div className={styles.adds_wrapper}>
      {posts.map(post => (
        <ShortPost key={post.key} {...post}/>
      ))}
    </div>
  </div>
);

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

const mapStateToProps = state => ({
 posts: getAllPublished(state),
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
