import React from "react";




function NewsItem(props) {
  var myStyledComponentStyles = {
    border: '1px lightblue solid',
  }
  var imgStyle = {
    borderRadius: '20px',
    border: '3px white solid',
    marginTop: '10px',
    marginLeft: '10px',
    marginRight: '10px',
    backgroundColor: 'lightblue',
    width: '30px'
  }

  return (
    <div style={myStyledComponentStyles}>
      <img style={imgStyle} src="http://files.softicons.com/download/business-icons/flatastic-icons-part-4-by-custom-icon-design/png/72x72/user-blue.png"></img>

    </div>

  );
}

export default NewsItem;
