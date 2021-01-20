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
    console.log('this is post',this.props.post)
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
      <p className={styles.add_content}>{this.props.post.email}
      </p>
      <div className={styles.price}>
        <h3>Price:</h3>
        <h3>{this.props.post.price}</h3>
      </div>
      <div className={styles.contact}>
        <h3>Contact</h3>
        <p>EMAIL:</p>
        <p>{this.props.post.email}</p>
        <p>PHONE:</p>
        <p>{this.props.post.phone}</p>
        <p>LOCATION:</p>
        <p>{this.props.post.location}</p>
      </div>
    </div>

  </div>
    );
  }
 }


Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  post: PropTypes.node,
};

const mapStateToProps = state => ({
  post: getOneById(state),
});

const mapDispatchToProps = (dispatch) => ({
    fetchOnePost: (state) => dispatch(fetchOne(state)),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  //Component as Post,
  Container as Post,
  Component as PostComponent,
};
