import React, { Component } from 'react'
import {
  Link,
  BrowserRouter as router
} from 'react-router-dom';
export class NavBar extends Component {
  constructor() {
    super();
    this.state = {
      data: ""
    }
    this.searchQueryHandler = this.searchQueryHandler.bind(this);
    this.InputData = this.InputData.bind(this);
  }
  searchQueryHandler(event) {
    event.preventDefault();
    console.log(this.state.data);
  }
  InputData(event) {
    this.setState({
      data: event.target.value
    });
  }
  render() {
    return (
      <div>
        <nav class="navbar navbar-expand-lg bg-light">
          <div class="container-fluid">
            <Link className="navbar-brand" to="/">NewsApp</Link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li class="nav-item">
                  <a className="nav-link" href="#">Contact Us</a>
                </li>
                <li class="nav-item">
                  <Link exact className="nav-link" to="/business">Business</Link>
                </li>
                <li class="nav-item">
                  <Link className="nav-link" to="/sports">Sports</Link>
                </li>
                <li class="nav-item">
                  <Link className="nav-link" to="/entertainment">entertainment</Link>
                </li>
                <li class="nav-item">
                  <Link className="nav-link" to="/general">General</Link>
                </li>
                <li class="nav-item">
                  <Link className="nav-link" to="/health">Health</Link>
                </li>
                <li class="nav-item">
                  <Link className="nav-link" to="/science">Science</Link>
                </li>
                <li class="nav-item">
                  <Link className="nav-link" to="/technology">technology</Link>
                </li>





              </ul>
              <form class="d-flex" role="search" onSubmit={this.searchQueryHandler}>
                <input class="form-control me-2" type="search" placeholder="Search News" onChange={this.InputData} aria-label="Search" />
                <button class="btn btn-outline-success" type="submit">Search</button>
              </form>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}

export default NavBar