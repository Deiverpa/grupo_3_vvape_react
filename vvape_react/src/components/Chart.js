import React, {Component} from 'react';
import ChartRow from './ChartRow';
import 'bootstrap/dist/css/bootstrap.min.css';

let tableRowsData = [
    {
        Category: [],
        Quantity: [],
        // Products: [],
    }
    
]

let tableRowsDataProps = [tableRowsData];

class Chart extends Component{
    constructor(props){
        super(props);
        this.state = {
            Chart: ''
        }
    }

    apiCall(url,consec){
        fetch('http://localhost:3001/api/listProducts')
        .then(response => response.json())
        .then(data => consec(data))
        .catch(error => console.log(error))
    }
    componentDidMount(){
        // console.log('memonté');
        this.apiCall('http://localhost:3001/api/listProducts',this.ProductsInfo)
    }
    ProductsInfo = (data)=>{
        console.log(data);
        

        // categories
        const categories = Object.keys(data.countByCategory);
        tableRowsData.Category = categories
        console.log(tableRowsData.Category);
        // count
        const countByCategory = Object.values(data.countByCategory);
        console.log(countByCategory);
        tableRowsData.Quantity = countByCategory
        // products

        this.setState(
            {
                productos: data.count,
            }

        )
    }
    componentDidUpdate(){
        // console.log('mecambié');
        // alert('Recuperando info de Data Base')
    }
    render(){
    return (
        /* <!-- DataTales Example --> */
        <div className="card shadow mb-4">
            <div className="card-body">
                <div className="table-responsive">
                    <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                        <thead>
                            <tr>
                                <th>Category</th>
                                <th>Quantity</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                            tableRowsDataProps.map( ( row , i) => {
                                return <ChartRow { ...row} key={i}/>
                            })
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
    }
}

export default Chart;