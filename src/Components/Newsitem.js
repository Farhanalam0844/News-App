import React, { Component } from 'react'
// import PropTypes from 'prop-types'

export class Newsitem extends Component {
  render(props) {
        let {title,description,urlToImage,url,author,publishedAt,category}= this.props;    
        return (
<div className="card my-3" style={{width: "18rem;"}}>
  <img src={urlToImage} className="card-img-top" alt="Pic not available"/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <h6>By <span className="badge bg-primary">{!author?"Unknown":<b>{author}</b>}</span></h6>
    <h6><span className="badge bg-secondary">{new Date(publishedAt).toUTCString()}</span></h6>
    <a href={url} className="btn btn-primary">Read more</a>
  </div>
  </div>
    )
  }
};

export default Newsitem
