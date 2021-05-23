import './App.css';
import React from 'react';
/* icons from fontawesome -- https://fontawesome.com/license/free */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretRight } from '@fortawesome/free-solid-svg-icons'

// the circles in the header part of the teacher screen
function Circle() {
  return (
    <div className="circle"></div>
  )
}

// tiny dots in header area; shows which screen out of four that you're on
function LevelDot(props) {
  return (
    <div className={"dot" + (props.on ? " dot-on" : "")}></div>
  )
}

// the words in the footer area of the teacher screen
function FooterText(props) {
  return (
    <div className={"footer-text" + (props.on ? " footer-text-on" : "")} onClick={props.onClick}>
      {props.word.toUpperCase()}
    </div>
  )
}

// the arrows in the footer area of the teacher screen 
function RightArrow(props) {
  return (
    <div className={"right-arrow" + (props.on ? " right-arrow-on" : "")}>
      <FontAwesomeIcon icon={faCaretRight} />
    </div>
  )
}

// this is the whole box for the teacher screen 
class TeacherView extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      level: 0,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  // this function changes which of the four screens you're on 
  handleClick(i) {
    this.setState({
      level: i,
    });
  }

  render() {
    const level = this.state.level; 
    const levelArr = ["School", "Teacher", "Class", "Student"];
    var levelDots = []; 

    // these are the four little dots below the heading
    for (let i = 0; i < 4; i++) {
      levelDots.push(<LevelDot on={i === level} />)
    }

    return (
      <div className="teacher-box">
        <div className="teacher-main-header">
          <div className="teacher-main-header-center">
            <div className="teacher-main-header-left-div">
              <div className="teacher-main-header-dots">{levelDots}</div>
              <div className="teacher-main-header-text">
                <p>{levelArr[level] + " Level Detail"}</p>
              </div>
              <Circle /> 
            </div>
            <div className="teacher-main-header-right-div">
              <Circle /> 
              <Circle /> 
              <Circle /> 
            </div>
          </div>
        </div>
        <div className="teacher-main-screen"></div>
        <div className="teacher-side-bar">
          <div className="teacher-side-bar-spacer"></div>
          <div className="teacher-side-bar-content">
            <div className="teacher-side-video">explainer video</div>
            <form className="teacher-side-comment-form">
              <textarea className="teacher-side-comment-area">Questions? Comments? Reach out!</textarea>
              <button className="teacher-side-comment-button" type="button">Submit</button>
            </form>
            <div className="teacher-side-credentials">
              <div className="circle side-bar-circle"></div>
              Darin Singh 
              <br></br>
              Founder + CEO
            </div>
            <button className="teacher-side-how">HOW THIS WORKS</button>
          </div>
        </div>
        <div className="teacher-footer">
          <div className="teacher-footer-center">
            {/* these are the four words & three arrows in the footer. 
            you can click on a word to change to that screen. */}
            <FooterText word={levelArr[0]} on={level === 0} onClick={() => this.handleClick(0)} />
            <RightArrow on={level === 0} />
            <FooterText word={levelArr[1]} on={level === 1} onClick={() => this.handleClick(1)} />
            <RightArrow on={level === 1} />
            <FooterText word={levelArr[2]} on={level === 2} onClick={() => this.handleClick(2)} />
            <RightArrow on={level === 2} />
            <FooterText word={levelArr[3]} on={level === 3} onClick={() => this.handleClick(3)} />
          </div>
        </div>
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <header className="header">
          <div className="header-center">
            <p className="prepfactory">prepfactory</p>
          </div>
        </header>
        <div className="main-body">
          <TeacherView />
        </div>
      </div>
    );
  }
}

export default App;
