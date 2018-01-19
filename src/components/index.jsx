import React from 'react';
import ReactDOM from 'react-dom';

import JqxDataTable from './jqwidgets-react/react_jqxdatatable.js';

class App extends React.Component{
    constructor(props) {
        super(props);
        this.cellsrenderer=this.cellsrenderer.bind(this)
        this.algo=this.algo.bind(this)
    }

    algo(){
        alert("Hola Mundo");
    }

    cellsrenderer(row, column, value, data, html){
        //return '<center>'+value+'<br><button onClick="console.log(this)" type="button">Agregar</button></center>';
        return '<center>'+value+'<br><button onClick={this.algo} type="button">Agregar</button></center>';
    };

render() {
        let source =
            {
                dataType: 'json',
                dataFields: [
                    { name: 'name', type: 'string' },
                    { name: 'type', type: 'string' },
                    { name: 'calories', type: 'int' },
                    { name: 'totalfat', type: 'string' },
                    { name: 'protein', type: 'string' }
                ],
                id: 'id',
                url: 'beverages.txt'
            };

        const $ = window.$;
        let dataAdapter = new $.jqx.dataAdapter(source);
        let columns =
            [
                { text: 'Name', dataField: 'name', width: 300 },
                { text: 'Beverage Type', dataField: 'type', width: 300 },
                { text: 'Calories', dataField: 'calories', width: 180 },
                { text: 'Total Fat', dataField: 'totalfat', width: 120 },
                { text: 'Protein', dataField: 'protein', cellsrenderer:this.cellsrenderer}
            ];
        return (
            <JqxDataTable
                width={1200} source={dataAdapter} columnsResize={true}
                pageable={true} pagerButtonsCount={10} columns={columns}
            />
        )
    }
}

export default App
