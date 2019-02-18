import React from "react";
import PropTypes from "prop-types";
import emptyHeart from "../assets/Heart_icon_red_hollow.svg";




function NewsItem(props) {

  let userName = '';
  let content = '';

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
      <style jsx> {`
          img {
            max-width: 20px;
          }
    `}
      </style>
      <div style={itemImage}>
        <img style={imgStyle} src="https://cdn3.iconfinder.com/data/icons/black-easy/512/538642-user_512x512.png"></img>
      </div>
      <hr/>
      <div style={itemContent}>
        <p><em>User Name: {props.userName} </em></p>
          <hr/>
          <p>{props.content}</p>
          <p>
            <img src={emptyHeart}></img>
          </p>
      </div>
    </div>

  );
}

NewsItem.propTypes = {
  userName: PropTypes.string,
  content: PropTypes.string
}

export default NewsItem;
