
import React from 'react';
import { AgGridColumn, AgGridReact } from 'ag-grid-react';
import { Link } from 'react-router-dom'; 

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';


class DataTable extends React.Component{      
    constructor(props) {
        super(props)
        this.state = {
          rowData: [],
        }
        this.countriesFilter=this.countriesFilter.bind(this);
      }

      componentDidMount () {
        fetch(`https://api.covid19api.com/summary`)
        .then((resp) => resp.json()).then((data) => this.setState({ rowData: data.Countries }));
     }
     countriesFilter(){
        let countries=[];
        this.state.rowData.map((el)=>countries.push(el.Country));
        console.log(countries);
            return countries;
    }

    render(){   
        return (
            <div className="ag-theme-alpine" style={{ height: 890, width: 920 }}>
                <AgGridReact
                reactNext={true}
                defaultColDef={{
                    width: 129.6,
                   sortable: true,
                   resizable: true,
                   fontSize:'10px',
                   className : "ag-header-cell",
                   cellRendererFramework: (params) => {
                    let country = Object.assign({}, params);
                       if(this.countriesFilter().includes(params.value)){
                        return (
                             <Link to={`/country/${country.value.split(" ").join(".")}`}>{params.value}</Link>)
                       }else{
                        return <span>{params.value}</span>
                       }     
                    },
                   }}
                    rowData={this.state.rowData}>
                    <AgGridColumn field="Country" className="column"></AgGridColumn>
                    <AgGridColumn field="NewConfirmed"></AgGridColumn>
                    <AgGridColumn field="TotalConfirmed"></AgGridColumn>
                    <AgGridColumn field="NewDeaths"></AgGridColumn>
                    <AgGridColumn field="TotalDeaths" ></AgGridColumn>
                    <AgGridColumn field="NewRecovered"></AgGridColumn>
                    <AgGridColumn field="TotalRecovered"></AgGridColumn>
                </AgGridReact>
            </div>
        );
    }
 
};

export default DataTable;





