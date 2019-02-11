import React from "react";




function NewsHeader({image}) {
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
  var userBlockStyle = {
    borderRadius: "3px",
    height:'40px',
    width: '40px',
    marginRight: '15px',
    backgroundColor: 'darkred'
  }
  var inputBoxStyle = {

  }

  return (
    <div style={myStyledComponentStyles}>
      <div style={inputStyle}>
        <div style={userBlockStyle}>
        </div>
        <div style={inputBoxStyle}>
          <input placeholder="What's Happening?" />
        </div>
      </div>
    </div>

  );
}

export default NewsHeader;
