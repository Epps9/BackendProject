import React from 'react';
import PropTypes from 'prop-types';
import { ShortPost } from '../../features/ShortPost/ShortPost';

import clsx from 'clsx';

import { connect } from 'react-redux';
import { getAllPublished, fetchPosts } from '../../../redux/postsRedux.js';

import styles from './Homepage.module.scss';



class Component extends React.Component { 

  componentDidMount () {
    this.props.fetchPosts();
  };

  render() {
    console.log(this.props.posts)
    return (
      <div className={clsx(this.props.className, styles.root)}>
        <div className={styles.btn_wrapper}>
          <button className={styles.btn}>+ Add new ad</button>
        </div>
        <div className={styles.adds_wrapper}>
          {this.props.posts.map(post => (
            <ShortPost key={post._id} {...post}/>
          ))}
        </div>
      </div>
    );
  }
 }

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

const mapStateToProps = state => ({
 posts: getAllPublished(state),
});

const mapDispatchToProps = dispatch => ({
  fetchPosts: () => dispatch(fetchPosts()),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  //Component as Homepage,
  Container as Homepage,
  Component as HomepageComponent,
};
