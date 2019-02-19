import React from "react";
import PropTypes from 'prop-types';
import { v4 } from 'uuid';

function NewsForm(props) {

  let _userName = null;
  let _content = null;

  function handleNewNewsItemFormSubmission(event) {
    event.preventDefault();
    props.onAddingNewNewsItemToMasterNewsItemList({userName: _userName.value, content: _content.value, id: v4()});
    _userName.value = '';
    _content.value = '';
  }

  return (
    <div className="myStyledComponentStyles">
      <style jsx>{`
          button {
            border: 1px blue solid;
            padding: 10px;
            border-radius: 10px;
            background-color: blue;
            color: white;
            padding-right: 20px;
            padding-left: 20px;

          }

          input, textarea{
            border: 1px blue solid;
            padding: 5px;
            border-radius: 10px;
          }

          .myStyledComponentStyles {

          }

          .inputStyle {
            backgroundColor: lightblue;
            color: blue;
            display: flex;
            flexDirection: row;
            justifyContent: center;
            alignItems: center;
            padding: 15px;
          }
          .userBlockStyle {
            borderRadius: 3px;
            height: 40px;
            width: 40px;
            marginRight: 15px;
            backgroundColor: darkred;
          }
          .inputBoxStyle {

          }
            `}</style>
      <form onSubmit={handleNewNewsItemFormSubmission}>
        <div className="inputStyle">
          <div className="userBlockStyle">
          </div>
          <div className="inputBoxStyle"><p></p>
            <input
              type="text"
              placeholder="userName"
              ref={(input) => {_userName = input;}} /><p></p>
            <textarea
              type='text'
              placeholder="What's Happening?"
              ref={(textarea) => {_content = textarea;}} />
          </div>
          <button type="submit">Tweet</button>
        </div>
      </form>
    </div>

  );
}

NewsForm.propTypes ={
  onAddingNewNewsItemToMasterNewsItemList: PropTypes.func,
  testInputThingy: PropTypes.string
}

export default NewsForm;
