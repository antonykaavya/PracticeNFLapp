import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class AFCTeam extends React.Component {
  render() {
    return (
      <a href={this.props.link} class="button" id="AFC">
        {this.props.value}
      </a>
    );
  }
}

class NFCTeam extends React.Component {
  render() {
    return (
      <a href={this.props.link} class="button" id="NFC">
        {this.props.value}
      </a>
    );
  }
}

class NFL extends React.Component {
  renderAFCTeam(i,j) {
    return <AFCTeam value={i} link={j}/>;
  }

  renderNFCTeam(i, j) {
    return <NFCTeam value={i} link={j}/>;
  }

  render() {

    return (
      <div >
      <h1> NFL Teams </h1>
      
      <div class="row">

        <div class="column">

          <h2> AFC East </h2> 
            {this.renderAFCTeam("Patriots", "https://nfl.com/patriots")}
            {this.renderAFCTeam("Bills", "https://nfl.com/bills")}
            {this.renderAFCTeam("Dolphins", "https://nfl.com/Dolphins")}
            {this.renderAFCTeam("Jets", "https://nfl.com/jets")}
          
          <h2> AFC West </h2> 
            {this.renderAFCTeam("Broncos", "https://nfl.com/Broncos")}
            {this.renderAFCTeam("Chargers", "https://nfl.com/Chargers")}
            {this.renderAFCTeam("Raiders", "https://nfl.com/Raiders")}
            {this.renderAFCTeam('Chiefs', "https://nfl.com/Chiefs")}

          <h2> AFC North </h2> 
            {this.renderAFCTeam("Steelers", "https://nfl.com/Steelers")}
            {this.renderAFCTeam("Bengals", "https://nfl.com/Bengals")}
            {this.renderAFCTeam("Ravens", "https://nfl.com/Ravens")}
            {this.renderAFCTeam("Browns", "https://nfl.com/Browns")}

          <h2> AFC South </h2> 
            {this.renderAFCTeam("Colts", "https://nfl.com/Colts")}
            {this.renderAFCTeam("Texans", "https://nfl.com/Texans")}
            {this.renderAFCTeam("Jaguars", "https://nfl.com/Jaguars")}
            {this.renderAFCTeam("Titans", "https://nfl.com/Titans")}
        
        </div>

        <div class="column">

          <h2> NFC East </h2> 
            {this.renderNFCTeam("Cowboys", "https://nfl.com/Cowboys")}
            {this.renderNFCTeam("Redskins", "https://nfl.com/Redskins")}
            {this.renderNFCTeam("Giants", "https://nfl.com/Giants")}
            {this.renderNFCTeam("Eagles", "https://nfl.com/Eagles")}
        
          <h2> NFC West </h2> 
            {this.renderNFCTeam("Packers", "https://nfl.com/Packers")}
            {this.renderNFCTeam("Vikings", "https://nfl.com/Vikings")}
            {this.renderNFCTeam("Bears", "https://nfl.com/Bears")}
            {this.renderNFCTeam('Lions', "https://nfl.com/Lions")}

          <h2> NFC North </h2> 
            {this.renderNFCTeam("Panthers", "https://nfl.com/Panthers")}
            {this.renderNFCTeam("Buccaneers", "https://nfl.com/Buccaneers")}
            {this.renderNFCTeam("Saints", "https://nfl.com/Saints")}
            {this.renderNFCTeam("Falcons", "https://nfl.com/Falcons")}

          <h2> NFC South </h2> 
            {this.renderNFCTeam("Seahawks", "https://nfl.com/Seahawks")}
            {this.renderNFCTeam("Cardinals", "https://nfl.com/Cardinals")}
            {this.renderNFCTeam("49ers", "https://nfl.com/49ers")}
            {this.renderNFCTeam("Rams", "https://nfl.com/Rams")}

        </div>

      </div>
      </div> 
    );
  }
}

// ========================================

ReactDOM.render(
  <NFL />,
  document.getElementById('root')
);
