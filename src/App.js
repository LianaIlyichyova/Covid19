import React, { Component } from 'react';
import './App.css'

import { BrowserRouter, Route } from 'react-router-dom';
import {createBrowserHistory} from 'history';
import DeathsChart from './Covid1/deathsChart';
import InfectedsChart from './Covid1/infectedCountries';
import NewConfirmesChart from './Covid1/newConfirmsChart';
import DataTable from './Covid1/dataTable';
import CountryPage from './Covid1/country';


const history = createBrowserHistory();


export default class App extends React.Component{
  render(){
    return( 
      <BrowserRouter history={history}>
      <div>
          <Route exact path="/" component={MainPage} />
          <Route path={`/country/:name`} component={CountryPage}/>
          </div>
          </BrowserRouter>
    );
    }
  }

class MainPage extends Component {
  constructor (props) {
    super(props);
    this.state = { 
      countryList: null,
    }
}

componentDidMount () {
    fetch(`https://api.covid19api.com/summary`)
    .then((resp) => resp.json()).then((data) => this.setState({ countryList: data }));
 }

    render() {
    return (
        <div id = "body">
            <h1>Covid 19 data</h1>
          <div className='wrapper'>
            <div className='left-menu'>
            <div id="newConfirmes">
              <p>NewConfirmes</p>
            <NewConfirmesChart data={this.state.countryList}/>
            </div>
            <div>
              <p>Deaths</p>
              <DeathsChart data={this.state.countryList}/>
            </div>
            <div>
              <p>Infecteds</p>
              <InfectedsChart data={this.state.countryList}/>
            </div>
            </div>
            <div className="right-menu">
            <p>Countries data</p>
              <DataTable data={this.state.countryList}/>
            </div>
          </div>
        </div>
    );
  }
};
