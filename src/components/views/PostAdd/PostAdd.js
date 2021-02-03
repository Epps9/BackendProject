import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import { connect } from 'react-redux';
import { postOne } from '../../../redux/postsRedux.js';

import styles from './PostAdd.module.scss';

class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        title: '',
        author: '',
        text: '',
        email: '',
        location: '',
        price: '',
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }


  handleInputChange = (event) => {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  componentDidMount(){
    console.log('wpisuje sobie', this.state)
  }

  render() {
    const {author, title, text, email, location, phone, price } = this.props;
    return (
      <div className={clsx(this.props.className, styles.root)}>
        <div className={styles.post_wrapper}>
          <h2>{this.props.postAdd.headTitle}</h2>
          <form >
            <label>{this.props.postAdd.title}</label>
            <input type="text" name="title" onChange={this.handleInputChange}></input>
            <label>{this.props.postAdd.text}</label>
            <textarea type="text" name="text" onChange={this.handleInputChange}></textarea>
            <label>{this.props.postAdd.author}</label>
            <input type="text" name="author" onChange={this.handleInputChange}></input>
            <label>YOUR {this.props.postAdd.email}</label>
            <input type="email" name="email" onChange={this.handleInputChange}></input>
            <label>{this.props.postAdd.phone}</label>
            <input type="number" name="phone" onChange={this.handleInputChange}></input>
            <label>{this.props.postAdd.location}</label>
            <input type="text" name="location" onChange={this.handleInputChange}></input>
            <label>{this.props.postAdd.price}</label>
            <input type="number" name="price" onChange={this.handleInputChange}></input>
            <label htmlFor="file" className={styles.custom_file}>{this.props.postAdd.choosePhoto}</label>
            <div className={styles.input_file}><input type="file" id="file" accept="image/*" multiple></input> </div>
            <button type="submit" onClick={this.props.postOnePost}> {this.props.postAdd.submitButtonText} </button>
          </form>
        </div>
      </div>
    );

  }

}

Component.propTypes = {
  className: PropTypes.string,
  postAdd: PropTypes.node,
};

const mapStateToProps = state => ({
  postAdd: state.postAdd,
});

const mapDispatchToProps = dispatch => ({
  postOnePost: post => dispatch(postOne(post)),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  //Component as PostAdd,
  Container as PostAdd,
  Component as PostAddComponent,
};
