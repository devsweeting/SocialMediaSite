import React from "react";

function Profile(props) {
  var myStyledComponentStyles = {
    border: '2px lightgrey solid',
  }
  var profileTopDiv = {
    padding: '30px',
    backgroundColor: 'lightblue'
    // border: '1px red solid'
  }
  var imgStyle = {
    borderRadius: '20px',
    border: '3px white solid',
    marginTop: '20px',
    marginLeft: '30px',
    marginRight: '10px',
    float: 'left',
    backgroundColor: 'lightblue',
    maxWidth:'80px'
  }
  var nameStyle = {
    paddingBottom: '10px',
    marginTop: '0px',
    fontFamily: 'arial',
    paddingLeft: '10px'
  }
  var aStyle ={
    marginLeft: '5px',
    marginRight: '5px'
  }

  return (
    <div style={myStyledComponentStyles}>
      <div>
        <img style={imgStyle}  src="https://cdn3.iconfinder.com/data/icons/black-easy/512/538642-user_512x512.png"></img>
        <div style={profileTopDiv}></div>
        <h5 style={nameStyle}>Charley McGowan</h5>
      </div>
      <div>
        <a style={aStyle}>TWEETS</a>
        <a style={aStyle}>FOLLOWING</a>
        <a style={aStyle}>FOLLOWERS</a>
      </div>

    </div>

  );
}

export default Profile;
