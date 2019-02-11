import React from "react";
import NewsItem from "./NewsItem";
import NewsHeader from "./NewsHeader";
import PropTypes from "prop-types";

function News() {
  var myStyledComponentStyles = {
    border: '1px lightblue solid',
    fontFamily: 'arial',
  }
  var postStyle = {
    border: '1px grey solid',
    backgroundColor: 'red',
  }
  var itemStyle = {
    backgroundColor: 'grey',
  }


  return (
    <div style={myStyledComponentStyles}>

    <NewsHeader/>

    <NewsItem image="http://files.softicons.com/download/business-icons/flatastic-icons-part-4-by-custom-icon-design/png/72x72/user-blue.png"/>
    <NewsItem image="http://files.softicons.com/download/business-icons/flatastic-icons-part-4-by-custom-icon-design/png/72x72/user-blue.png"/>
    <NewsItem image="http://files.softicons.com/download/business-icons/flatastic-icons-part-4-by-custom-icon-design/png/72x72/user-blue.png"/>

    </div>

  );
}

export default News;
