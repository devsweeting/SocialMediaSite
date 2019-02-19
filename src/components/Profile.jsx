import React from "react";
import PropTypes from "prop-types";

function Profile(props) {


  return (
    <div className="myStyledComponentStyles">
      <style jsx>{`
          .myStyledComponentStyles {
            border: 2px lightgrey solid,
          }
          .profileTopDiv {
            padding: 30px,
            background-color: lightblue;
            // border: 1px red solid;
          }
          .imgStyle {
            border-radius: 20px;
            border: 3px white solid;
            margin-top: 20px;
            margin-left: 30px;
            margin-right: 10px;
            float: left;
            background-color: lightblue;
            max-width:80px;
          }
          .nameStyle {
            padding-bottom: 10px;
            margin-top: 0px;
            font-family: arial;
            padding-left: 10px;
          }
          .aStyle {
            margin-left: 5px;
            margin-right: 5px
          }
          .profileStyle {
            display: flex;
            justify-content: "space-around";
          }
        `}

      </style>
      <div>
        <img className="imgStyle"  src="https://cdn3.iconfinder.com/data/icons/black-easy/512/538642-user_512x512.png"></img>
        <div className="profileTopDiv"></div>
        <h5 className="nameStyle">Charley McGowan</h5>
      </div>
      <div className="profileStyle">
        <a className="aStyle">TWEETS</a>
        <a className="aStyle">FOLLOWING</a>
        <a className="aStyle">FOLLOWERS</a>
      </div>
      <div className="profileStyle">
        <a className="aStyle">{props.totalTweets}</a>
        <a className="aStyle">{props.totalFollowers}</a>
        <a className="aStyle">420</a>
      </div>

    </div>

  );
}

Profile.propTypes ={
  totalTweets: PropTypes.number,
  totalFollowers: PropTypes.number
}

export default Profile;
