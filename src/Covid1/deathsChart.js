import React from "react";
import { Fragment } from 'react';

import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';


export default class DeathsChart extends React.Component {
    render () {
        return (
            <Fragment>
                <div>
                {
                    this.props.data && <DeathsFilter data={this.props.data}/>
                }
                </div>
            </Fragment>
        );
    }
}


class DeathsFilter extends React.Component{
    constructor (props) {
        super(props);
        this.sorting = this.sorting.bind(this.sorting)
    }

    sorting(data){ 
        let filtered=[...data];
        filtered.sort((a,b)=>b.TotalDeaths-a.TotalDeaths);
        filtered.length = 10;
        return filtered;
    }

    render () {
        return (
                <div>
                    <MyPieChart data={this.sorting(this.props.data.Countries)}/>
                </div>
        );
    }
    }

    


    class MyPieChart extends React.Component {
        COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#AF19FF',"#FFBB28",
        '#00C49F','#FF8042','#0088FE','#FFBB28'];
    
        pieData = this.props.data;
    
        CustomTooltip = ({ active, payload }) => {
            if (active) {
                return (
                    <div className="custom-tooltip" style={{ backgroundColor: '#ffff', padding: '5px', border: '1px solid #cccc'}}>
                        <label>{`${payload[0].name} : ${payload[0].value}`}</label>
                    </div>
                );
            }
    
            return null;
        };
    
        render() {
            return (
                <PieChart width={250} height={275} className="pie">
                    <Pie data={this.pieData} color="#000000" dataKey="TotalDeaths" nameKey="Country" cx="50%" cy="50%" outerRadius={80} fill="#8884d8" >
                        {
                            this.pieData.map((entry, index) => <Cell key={`cell-${index}`} fill={this.COLORS[index % this.COLORS.length]} />)
                        }
                    </Pie>
                    <Tooltip content={<this.CustomTooltip />} />
                    <Legend />
                </PieChart>
            )
        };
    }
