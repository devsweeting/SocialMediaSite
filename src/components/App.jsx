import React from "react";
import Header from "./Header";
import Bio from "./Bio";
import Friends from "./Friends";
import News from "./News";
import Profile from "./Profile";



class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      numberOfTweetsForUser: 0,
      numberOfFollowers: 0
    };
    this.handleAddingTotalNumberOfTweets = this.handleAddingTotalNumberOfTweets.bind(this);
    this.handleAddingTotalFollowers = this.handleAddingTotalFollowers.bind(this);
  }

  handleAddingTotalNumberOfTweets(numberOfTweets){
    let newTweetValue = numberOfTweets;
    this.setState({numberOfTweetsForUser: newTweetValue});
  }

  handleAddingTotalFollowers(){
    let newFollowerTotal = this.state.numberOfFollowers + 1 ;
    this.setState({numberOfFollowers: newFollowerTotal})
  }

render(){
  return (
    <div className="myStyledComponentStyles">
      <style jsx>{`
        .myStyledComponentStyles {
          display: grid;
          grid-gap: 1em;
          gridTemplate-columns: 1fr 1fr 1fr;
          font-family: arial;
        }
        .headerStyle {
          grid-column: 1 / 4;
          grid-row: 1;
        }
        .profileStyle {
          grid-column: 1;
          grid-row: 2;
        }
        .bioStyle {
          grid-column: 1;
          grid-row: 3;
        }
        .newsStyle {
          grid-column: 2;
          grid-row: 2 / 4;
        }
        .friendsStyle {
          grid-column: 3;
          grid-row: 2 / 4;
        }
          `}
      </style>
      <div className="headerStyle">
        <Header/>
      </div>
      <div className="profileStyle">
        <Profile totalTweets={this.state.numberOfTweetsForUser} totalFollowers={this.state.numberOfFollowers}/>
      </div>
      <div className="bioStyle">
        <Bio/>
      </div>
      <div className="newsStyle">
        <News onAddingTotalNumberOfTweets={this.handleAddingTotalNumberOfTweets}/>
      </div>
      <div className="friendsStyle">
        <Friends onAddingTotalFollowers={this.handleAddingTotalFollowers}/>
      </div>
    </div>
  );

}
}

export default App;
