import React, {Component} from 'react';
import '../assets/css/font.css';

let LastProduct = {
    name:'', 
    description:'primary', 
    price: '',
    img: ''
}


class LastProductInDb extends Component {
    constructor(props){
        super(props);
        this.state = {
            LastProductInDb: ''
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
        let LastProductCreated = data.data.slice(-1)
        // console.log(LastProductCreated);
        let lastName = LastProductCreated[0].name
        let lastDescription = LastProductCreated[0].description
        let lastPrice = LastProductCreated[0].price
        let lastImg = LastProductCreated[0].img
        LastProduct.name = lastName;
        LastProduct.description = lastDescription;
        LastProduct.price = lastPrice;
        LastProduct.img = lastImg;


        this.setState(
            {
                products: data.count,
            }

        )
    }
    componentDidUpdate(){
        // console.log('mecambié');
        alert('Response from Data Base')
    }
    render(){
        // console.log('esotyrenderizando');
        let contenido;
        if(this.state.LastProductInDb == ''){
            contenido = <p>cargando</p>
        }else{
            contenido = <p>{this.state.LastProductInDb}</p>
        }
    return(
        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h5 className="m-0 font-weight-bold text-gray-800">LAST PRODUCT IN DB: {LastProduct.name}</h5>
                </div>
                <div className="card-body">
                    <div className="text-center">
                        <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 40 +'rem'}} src={'http://localhost:3001/images/'+LastProduct.img} alt="lastproduct"/>
                    </div>
                    <p><b>Description:</b> {LastProduct.description}</p>
                    <p><b>Price:</b> {LastProduct.price}</p>
                </div>
            </div>
        </div>
    )
}
}

export default LastProductInDb;
