import React, { Component } from 'react'
import NavBar from './ContactForm/NavBar'
import NewsItem from './NewsItem'
import NewsApp from './ContactForm/NewsApp'
import {
  Routes,
  Route,
  Link,
  BrowserRouter as Router
} from 'react-router-dom';
import Contact from './ContactForm/Contact';
class App extends Component {
  render() {
    console.log("this is app.js ");
    return (

      <div>
        <Router>
          <NavBar />
          <Routes>
            <Route exact path="/" element={<NewsApp key="general" category="general" pagesize={5} country="in" />} />
            <Route exact path="/general" element={<NewsApp key="general1" category="general" pagesize={5} country="in" />} />
            <Route exact path="/business" element={<NewsApp key="business" category="business" pagesize={5} country="in" />} />
            <Route exact path="/health" element={<NewsApp key="health" category="health" pagesize={5} country="in" />} />
            <Route exact path="/technology" element={<NewsApp key="technology" category="technology" pagesize={5} country="in" />} />
            <Route exact path="/science" element={<NewsApp key="science" category="science" pagesize={5} country="in" />} />
            <Route exact path="/sports" element={<NewsApp key="sports" category="sports" pagesize={5} country="in" />} />
            <Route exact path="/Contact" element={<Contact/>}/>
            <Route exact path="/entertainment" element={<NewsApp key="entertainment" category="entertainment" pagesize={5} country="in" />} />
          </Routes>
        </Router>
      </div>
    )
  }
}

export default App
