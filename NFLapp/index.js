import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class AFCTeam extends React.Component {
  render() {
    return (
      <button className="button" id="AFC">
        {this.props.value}
      </button>
    );
  }
}

class NFCTeam extends React.Component {
  render() {
    return (
      <button className="button" id="NFC">
        {this.props.value}
      </button>
    );
  }
}

class NFL extends React.Component {
  renderAFCTeam(i) {
    return <AFCTeam value={i} />;
  }

  renderNFCTeam(i) {
    return <NFCTeam value={i} />;
  }

  render() {

    return (

      <div >
      <h1> NFL Teams </h1>
      
      <div class="row">

        <div class="column">

          <h2> AFC East </h2> 
            {this.renderAFCTeam("Patriots")}
            {this.renderAFCTeam("Bills")}
            {this.renderAFCTeam("Dolphins")}
            {this.renderAFCTeam("Jets")}
          
          <h2> AFC West </h2> 
            {this.renderAFCTeam("Broncos")}
            {this.renderAFCTeam("Chargers")}
            {this.renderAFCTeam("Raiders")}
            {this.renderAFCTeam('Chiefs')}

          <h2> AFC North </h2> 
            {this.renderAFCTeam("Steelers")}
            {this.renderAFCTeam("Bengals")}
            {this.renderAFCTeam("Ravens")}
            {this.renderAFCTeam("Browns")}

          <h2> AFC South </h2> 
            {this.renderAFCTeam("Colts")}
            {this.renderAFCTeam("Texans")}
            {this.renderAFCTeam("Jaguars")}
            {this.renderAFCTeam("Titans")}
        
        </div>

        <div class="column">

          <h2> NFC East </h2> 
            {this.renderNFCTeam("Cowboys")}
            {this.renderNFCTeam("Redskins")}
            {this.renderNFCTeam("Giants")}
            {this.renderNFCTeam("Eagles")}
        
          <h2> NFC West </h2> 
            {this.renderNFCTeam("Packers")}
            {this.renderNFCTeam("Vikings")}
            {this.renderNFCTeam("Bears")}
            {this.renderNFCTeam('Lions')}

          <h2> NFC North </h2> 
            {this.renderNFCTeam("Panthers")}
            {this.renderNFCTeam("Buccaneers")}
            {this.renderNFCTeam("Saints")}
            {this.renderNFCTeam("Falcons")}

          <h2> NFC South </h2> 
            {this.renderNFCTeam("Seahawks")}
            {this.renderNFCTeam("Cardinals")}
            {this.renderNFCTeam("49ers")}
            {this.renderNFCTeam("Rams")}

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
