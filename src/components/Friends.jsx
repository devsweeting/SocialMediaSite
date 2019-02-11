import React from "react";
import FriendSuggestion from './FriendSuggestion';



function Friends() {
  var myStyledComponentStyles = {
    border: '2px lightgrey solid',
  }

  return (
    <div style={myStyledComponentStyles}>
      <h2>Friends you may know:</h2>
        <FriendSuggestion image="http://files.softicons.com/download/business-icons/flatastic-icons-part-4-by-custom-icon-design/png/72x72/user-blue.png"/>
          <hr/>
        <FriendSuggestion image="http://files.softicons.com/download/business-icons/flatastic-icons-part-4-by-custom-icon-design/png/72x72/user-blue.png"/>
          <hr/>
        <FriendSuggestion image="http://files.softicons.com/download/business-icons/flatastic-icons-part-4-by-custom-icon-design/png/72x72/user-blue.png"/>
          <hr/>
    </div>

  );
}

export default Friends;
