import React, { Fragment } from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

export default class NewConfirmesChart extends React.Component {
    render () {
        return (
            <Fragment>
                <div>
                {
                    this.props.data && <NewConfirmesFilter data={this.props.data}/>
                }
                </div>
            </Fragment>
        );
    }
}


class NewConfirmesFilter extends React.Component{
    constructor (props) {
        super(props);
        this.sorting = this.sorting.bind(this.sorting)
    }

    sorting(data){ 
      let filtered=[...data];
      filtered.sort((a,b)=>b.NewConfirmed-a.NewConfirmed);
      filtered.length = 10;
      return filtered;
    }

    render () {
        return (
                <div>
                    <MyBarChart data={this.sorting(this.props.data.Countries)}/>
                </div>
        );
    }
    }

    class MyBarChart extends React.Component{
        static jsfiddleUrl = 'https://jsfiddle.net/alidingling/30763kr7/';
      

    render() {
    return (
      <BarChart
        width={350}
        height={250}
        data={this.props.data}
        margin={{
          top: 5, right: 30, left:-18, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="Country"/>
        <YAxis/>
        <Tooltip/>
        <Legend/>
        <Bar dataKey="NewConfirmed" fill='#247ba0'/>
      </BarChart>
    );
  }
    }


