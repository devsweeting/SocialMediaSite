import React from "react";
import PropTypes from "prop-types";

class FriendSuggestion extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        userFollowedClicked: false
    };
    this.handleUserFollow = this.handleUserFollow.bind(this)
  }


  handleUserFollow(){
    this.setState({userFollowedClicked: true});
  }

  render(){
    let visibleContent = null;
    if (this.state.userFollowedClicked){
      visibleContent = <button className="buttonStyle"> Followed </button>
      } else {
      visibleContent = <button onClick={(event) => {this.props.onAddingTotalFollowers(); this.handleUserFollow()}} className="buttonStyle"> Follow+ </button>
    }

    return(
    <div className="myStyledComponentStyles">
        <style jsx>{`
          .myStyledComponentStyles {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
          }

          .imgStyle {
            border-radius: 20px;
            border: 3px white solid;
            margin-top: 10px;
            margin-left: 10px;
            margin-right: 10px;
            background-color: lightblue;
            width: 40px;
          }

          .itemImage {
            width: 50px !important;
          }

          .buttonStyle {
            align-item: "center";
            margin-top: 20px;
            padding: 5px;
          }
            `}
        </style>
      <div className="itemImage">
        <div >
          <img className="imgStyle" src="https://cdn3.iconfinder.com/data/icons/black-easy/512/538642-user_512x512.png" />
        </div>
      </div>

      <div>
        <h4>Friend</h4>
      </div>

      <div>
        {visibleContent}
      </div>
    </div>
  );
}
}

FriendSuggestion.propTypes ={
  onAddingTotalFollowers: PropTypes.func
}

export default FriendSuggestion;
