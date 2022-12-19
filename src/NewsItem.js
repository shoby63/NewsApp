import React, { Component } from 'react'
import App from './App';
import { useState } from 'react';
export class NewsItem extends Component {
  render() {
    let { urlToimg, url, title, description } = this.props;
    return (
      <div className='my-3'>
        <div className="card" style={{ width: "18rem" }}>
          <img src={urlToimg} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a href={url} className="btn btn-primary">Read More</a>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItem