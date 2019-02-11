import React from "react";




function Profile(props) {
  var myStyledComponentStyles = {
    border: '1px lightblue solid',
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
    backgroundColor: 'lightblue'
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
        <img style={imgStyle} src="http://files.softicons.com/download/business-icons/flatastic-icons-part-4-by-custom-icon-design/png/72x72/user-blue.png"></img>
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
