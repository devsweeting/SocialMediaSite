import React from "react";
import FriendSuggestion from './FriendSuggestion';



function Friends() {
  var myStyledComponentStyles = {
    border: '2px lightgrey solid',
  }

  return (
    <div style={myStyledComponentStyles}>
      <h2>Friends you may know:</h2>
        <FriendSuggestion image="https://cdn3.iconfinder.com/data/icons/black-easy/512/538642-user_512x512.png"/>
          <hr/>
        <FriendSuggestion image="https://cdn3.iconfinder.com/data/icons/black-easy/512/538642-user_512x512.png"/>
          <hr/>
        <FriendSuggestion image="https://cdn3.iconfinder.com/data/icons/black-easy/512/538642-user_512x512.png"/>
          <hr/>
    </div>

  );
}

export default Friends;
