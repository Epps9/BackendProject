import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import { connect } from 'react-redux';
import { getOneById, fetchOne } from '../../../redux/postsRedux';

import styles from './Post.module.scss';

class Component extends React.Component { 

  componentDidMount () {
    this.props.fetchOnePost();
  };

  render() {

    const {post} = this.props;

    console.log('this is post', post)
    return (
      <div className={clsx(this.props.className, styles.root)}>
    <div className={styles.post_wrapper}>
      <h2>{post.title}</h2>
      <button href="#">EDIT YOUR ADD</button>
      <div className={styles.dates}>
        <p className={styles.dates_title}>Published:</p>
        <p>{this.props.post.created} /</p>
        <p className={styles.dates_title}>Last modified:</p>
        <p>{this.props.post.updated}</p>
      </div>
      <p className={styles.add_content}>{post.text}
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
  }
 }


Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

const mapStateToProps = state => ({
  post: getOneById(state),
});

const mapDispatchToProps = (dispatch, state) => ({
    fetchOnePost: (id) => dispatch(fetchOne(state, id)),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  //Component as Post,
  Container as Post,
  Component as PostComponent,
};
