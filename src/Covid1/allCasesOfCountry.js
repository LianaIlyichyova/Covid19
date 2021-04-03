import React from 'react';


export default class CountryAllCases extends React.Component{
    render(){
        return (
            <div>
                <h3>Confirmed</h3>
                    <h5>{this.props.data[this.props.data.length-1].Confirmed}</h5>
                <h3>Deaths</h3>
                    <h5>{this.props.data[this.props.data.length-1].Deaths}</h5>
                <h3>Recovered</h3>
                    <h5>{this.props.data[this.props.data.length-1].Recovered}</h5>
                <h3>Active</h3>
                    <h5>{this.props.data[this.props.data.length-1].Active}</h5>
            </div>
        )
    }
}