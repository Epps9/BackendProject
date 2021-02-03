import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import { connect } from 'react-redux';
import { getOneById, fetchPosts } from '../../../redux/postsRedux';

import styles from './Post.module.scss';

class Component extends React.Component { 

  componentDidMount () {
    this.props.fetchOnePost(this.props.match.params.id);
  };

  render() {

    const {post} = this.props;

    if (!post) {
      return <div>nie ma posta</div>
    }
    console.log('this is post', post)
    return (
      <div className={clsx(this.props.className, styles.root)}>
    <div className={styles.post_wrapper}>
      <h2>{this.props.post.title}</h2>
      <button href="#">EDIT YOUR ADD</button>
      <div className={styles.dates}>
        <p className={styles.dates_title}>Published:</p>
        <p>{this.props.post.created} /</p>
        <p className={styles.dates_title}>Last modified:</p>
        <p>{this.props.post.updated}</p>
      </div>
      <p className={styles.add_content}>{this.props.post.text}
      </p>
      <div className={styles.price}>
        <h3>Price:</h3>
        <h3>{this.props.post.price}</h3>
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

const mapStateToProps = (state, props) => {
  console.log(props.match.params.id);
  return ({
  post:  getOneById(state, props.match.params.id),
})};

const mapDispatchToProps = (dispatch, state) => ({
    fetchOnePost: (id) => dispatch(fetchPosts()),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  //Component as Post,
  Container as Post,
  Component as PostComponent,
};
