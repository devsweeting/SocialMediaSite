import React from "react";
import Header from "./Header";
import Bio from "./Bio";
import Friends from "./Friends";
import News from "./News";
import Profile from "./Profile";



function App(props) {
  var myStyledComponentStyles = {
    display: 'grid',
    gridGap: '1em',
    gridTemplateColumns: '1fr 1fr 1fr',

  }
  var headerStyle = {
    gridColumn: '1 / 4',
    gridRow: '1',
  }
  var profileStyle = {
    gridColumn: '1 / 2',
    gridRow: '2',
  }
  var bioStyle = {
    gridColumn: '1',
    gridRow: '3',
  }
  var newsStyle = {
    gridColumn: '2',
    gridRow: '2 / 5',
  }
  var friendsStyle = {
    gridColumn: '3',
    gridRow: '2',
  }

  return (
    <div style={myStyledComponentStyles}>
      <div style={headerStyle}>
        <Header/>
      </div>
      <div style={profileStyle}>
        <Profile/>
      </div>
      <div style={bioStyle}>
        <Bio/>
      </div>
      <div style={newsStyle}>
        <News/>
      </div>
      <div style={friendsStyle}>
        <Friends/>
      </div>
    </div>
  );
}

export default App;
