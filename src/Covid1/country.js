import React from 'react';
import CustomMap from "./customMap"
import CountryAllCases from "./allCasesOfCountry"

class CountryPage extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      countryDetails:[],
    }
    this.countryName=this.props.match.params.name.split(".").join(" ");
  }
  
  componentDidMount () {
    let name=this.countryName.toLowerCase()
    fetch(`https://api.covid19api.com/country/${name}`)
    .then((resp) => resp.json()).then((data) => this.setState({countryDetails: data}))
  }


  render(){
      return (
        <div className="country-page">
          <h1>{this.countryName}</h1>
        <div className = "wrapper">
            <div className="countryleftmenu">
              <div>
              {
                this.state.countryDetails && this.state.countryDetails[0] && 
              <CountryAllCases data={this.state.countryDetails}/>
              }
              </div>
            </div>
          <div className="map">
              {
                this.state.countryDetails && this.state.countryDetails[0] && 
                <CustomMap lat={this.state.countryDetails[0].Lat} long={this.state.countryDetails[0].Lon}/>
              }
            </div>
        </div>
        </div>
      );
    }
  }

export default CountryPage;