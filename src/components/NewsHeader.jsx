import React from "react";




function NewsHeader(props) {
  var myStyledComponentStyles = {

  }
  var inputStyle = {
    backgroundColor: 'lightblue',
    color: 'blue',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '15px',
  }
  var imgStyle = {
    borderRadius: "10px",
  }
  var inputBoxStyle = {

  }

  return (
    <div style={myStyledComponentStyles}>
      <div style={inputStyle}>
        <div style={imgStyle}>
          <img src="https://leftonsgroup.com/wp-content/uploads/2018/03/SMALL-RED-SQUARE.jpg" style={{height:'40px', paddingRight: '15px'}}></img>
        </div>
        <div style={inputBoxStyle}>
          <input placeholder="What's Happening?" />
        </div>
      </div>
    </div>

  );
}

export default NewsHeader;
