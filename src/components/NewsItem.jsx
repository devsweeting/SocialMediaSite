import React from "react";




function NewsItem(props) {
  var myStyledComponentStyles = {
    border: '1px lightgrey solid',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  }
  var imgStyle = {
    borderRadius: '20px',
    border: '3px white solid',
    marginTop: '10px',
    marginLeft: '10px',
    marginRight: '10px',
    backgroundColor: 'lightblue',
    width: '40px'
  }
  var itemImage = {
    padding: '10px',

  }
  var itemContent = {
    padding: '10px',
  }

  return (
    <div style={myStyledComponentStyles}>
      <div style={itemImage}>
        <img style={imgStyle} src="http://files.softicons.com/download/business-icons/flatastic-icons-part-4-by-custom-icon-design/png/72x72/user-blue.png"></img>
      </div>
      <hr/>
      <div style={itemContent}>
        <p><em>Title</em></p>
          <hr/>
          <p>ContentContentContent</p>
      </div>
    </div>

  );
}

export default NewsItem;
