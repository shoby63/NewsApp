import React, { Component } from 'react'
import './project2.css'
export default class Contact extends Component {
     FormHandler=(e)=>{
         e.preventDefault();
         alert(" Thank you for taking the time to help us improve the platform")
    }
    render() {
        return (
               <div className='Form-Container'>
                <div className="heading">
                    <h1 id="title">Contact Us</h1>
                    </div>
                <form action="subit" id="survey-form" onSubmit={this.FormHandler}>
                    <div id="content1">
                    <input id="name" type="text" placeholder="Enter Your name" className="box" required/><br />
                        <label id="email-label" name="E-mail">E-mail</label><br /><br />
                        <input id="email" type="email" placeholder="Enter Your e-mail" className="box" required/><br />
                            <label name="Age" id="number-label">Age<span className="small"> (optional)</span></label><br /><br />
                            <input id="number" type="number" min="19" max="99" placeholder="Enter Your Age" className="box" required/><br />
                                <label id="select" name="selectoption">Which option best describes your current role?</label><br />

                                <div id="option1">
                                    <select id="dropdown" required>
                                        <option name="Select your role">Select your role</option>
                                        <option className="option" id="choice1" value="student">student</option>
                                        <option className="option" id="choice2" value="Full time job">Full time job</option>
                                        <option className="option" id="choice3" value="Full time learner">Full time learner</option>
                                        <option className="option" id="choice4" value="Prefer not to say">Prefer not to say</option>
                                    </select>
                                    <br />
                                    <br />
                                    <label htmlFor="feature" >What is your favorite feature of freeCodeCamp?
                                        <select id="head1">
                                            <option name="Select your role">Select your role</option>
                                            <option className="option" id="choose1" value="Select an option">Select an option</option>
                                            <option className="option" id="choose2" value="Challenges">Challenges</option>
                                            <option className="option" id="choose3" value="Projects">Projects</option>
                                            <option className="option" id="choose4" value="Community">Community</option>
                                            <option className="option" id="choose4" value="Open Source">Open Source</option>
                                        </select>
                                    </label><br />
                                </div>

                                <br />
                                <p id="ques" >
                                    would you recommend freecodecamp to a freind</p><br />
                                <label>
                                    <input name="user-recommend" type="radio" className="check-radio" value="definitely" />Definitely
                                </label><br />
                                <label>
                                    <input name="user-recommend" type="radio" className="check-radio" value="maybe" />Maybe
                                </label><br />
                                <label>
                                    <input name="user-recommend" type="radio" className="check-radio" value="not-sure" />Not sure
                                </label><br />
                                <p id="ques2">
                                    What would you like to see improved?<span>(Check all that apply)</span></p><br />
                                <label>
                                    <input name="improved" type="checkbox" className="check-radio2" value="Front-end" />Front-end</label><br />
                                <label>
                                    <input name="improved" type="checkbox" className="check-radio2" value="Back-end Projects" />Back-end Projects</label><br />
                                <label>
                                    <input name="improved" type="checkbox" className="check-radio2" value="Data Visualization" />Data Visualization
                                </label><br />
                                <label>
                                    <input name="improved" type="checkbox" className="check-radio2" value="Challenges" />Challenges
                                </label><br></br><label>
                                    <input name="improved" type="checkbox" className="check-radio2" value="Open Source Community" />Open Source Community
                                </label><br />
                                <label>
                                    <input name="improved" type="checkbox" className="check-radio2" value="Gitter help rooms" />Gitter help rooms
                                </label><br />
                                <label>
                                    <input name="improved" type="checkbox" className="check-radio2" value="Videos" />Videos
                                </label><br />
                                <label>
                                    <input name="improved" type="checkbox" className="check-radio2" value="City Meetups" />City Meetups
                                </label><br /><label>
                                    <input name="improved" type="checkbox" className="check-radio2" value="Wiki" />Wiki
                                </label><br />
                                <label>
                                    <input name="improved" type="checkbox" className="check-radio2" value="Forum" />Forum
                                </label><br /><label>
                                    <input name="improved" type="checkbox" className="check-radio2" value="Additional Courses" />Additional Courses
                                </label><br />
                                <p style={{
                                    marginTop:"20px", textAlign: "left", fontWeight: "bold"
                                }
                            }> any comments or suggestions</p><br />
                                <br /> <textarea id="comments"
                                    className="input-textarea"
                                    name="comment"
                                    placeholder="Enter your comment here..."></textarea>
                                <button type="submit" id="submit">Submit</button>
                            </div>
                        </form>
                    </div>
                            )
  }
}
