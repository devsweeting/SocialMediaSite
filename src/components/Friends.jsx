import React from "react";
import FriendSuggestion from './FriendSuggestion';
import PropTypes from "prop-types";



function Friends(props) {
  var myStyledComponentStyles = {
    border: '2px lightgrey solid',
  }

  return (
    <div className="myStyledComponentStyles">
      <style jsx>{`
              .myStyledComponentStyles {
                border: 2px lightgrey solid;
              }
            `}
      </style>
      <h2>Friends you may know:</h2>
        <FriendSuggestion onAddingTotalFollowers={props.onAddingTotalFollowers} />
          <hr/>
        <FriendSuggestion onAddingTotalFollowers={props.onAddingTotalFollowers} />
          <hr/>
        <FriendSuggestion onAddingTotalFollowers={props.onAddingTotalFollowers} />
          <hr/>
        <FriendSuggestion onAddingTotalFollowers={props.onAddingTotalFollowers} />
          <hr/>
    </div>

  );
}

Friends.propTypes ={
  onAddingTotalFollowers: PropTypes.func
}

export default Friends;
