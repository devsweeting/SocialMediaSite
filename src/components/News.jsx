import React from "react";
import NewsItem from "./NewsItem";
import NewsHeader from "./NewsHeader";

function News(props) {
  var myStyledComponentStyles = {
    border: '2px lightgrey solid',
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

    <NewsItem/>

    <NewsItem/>

    </div>

  );
}

export default News;
