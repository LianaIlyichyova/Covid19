import React from "react";
import { Fragment } from 'react';

import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';


export default class InfectedsChart extends React.Component {
    render () {
        return (
            <Fragment>
                <div>
                {
                    this.props.data && <InfectedsFilter data={this.props.data}/>
                }
                </div>
            </Fragment>
        );
    }
}


class InfectedsFilter extends React.Component{
    constructor (props) {
        super(props);
        this.sorting = this.sorting.bind(this.sorting)
    }

    sorting(data){ 
        let filtered=[...data]
        filtered.sort((a,b)=>b.TotalConfirmed-a.TotalConfirmed);
        filtered.length = 5;
        return filtered;
    }

    render () {
        return (
                <div>
                    <MyPieInfectedsChart data={this.sorting(this.props.data.Countries)}/>
                </div>
        );
    }
    }

    


    class MyPieInfectedsChart extends React.Component {
        COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#AF19FF'];
    
        pieData = this.props.data;
    
        CustomTooltip = ({ active, payload }) => {
            if (active) {
                return (
                    <div style={{ backgroundColor: '#ffff', padding: '5px', border: '1px solid #cccc'}}>
                        <label>{`${payload[0].name} : ${payload[0].value}`}</label>
                    </div>
                );
            }
    
            return null;
        };
    
        render() {
            return (
                <PieChart width={250} height={240} className="pie">
                    <Pie data={this.pieData} color="#000000" dataKey="TotalConfirmed" nameKey="Country" cx="50%" cy="50%" outerRadius={80} fill="#8884d8" >
                        {
                            this.pieData.map((entry, index) => <Cell key={`cell-${index}`} fill={this.COLORS[index % this.COLORS.length]} />)
                        }
                    </Pie>
                    <Tooltip content={<this.CustomTooltip/>}  />
                    <Legend />
                </PieChart>
            )
        };
    }
