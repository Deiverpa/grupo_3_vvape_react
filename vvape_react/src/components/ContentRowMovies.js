import React, {Component} from 'react';
import SmallCard from './SmallCard';

/*  Cada set de datos es un objeto literal */

/* <!-- TotalProducts in DB --> */


let TotalProducts = {
    title: 'Total Products',
    color: 'primary', 
    cuantity: 21,
    icon: 'fa-clipboard-list'
}

/* <!-- totalUsers --> */

// let totalUsers = {
//     title:' Total users', 
//     color:'success', 
//     cuantity: '79',
//     icon:'fa-award'
// }

/* <!-- categories quantity --> */

let categoriesQuantity = {
    title:'Categories Quantity' ,
    color:'primary',
    cuantity:0,
    icon:'fa-user-check'
}

let cartProps = [TotalProducts, categoriesQuantity];

class ContentRowMovies extends Component {
    constructor(props){
        super(props);
        this.state = {
            ContentRowMovies: ''
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
        // console.log(data);
        TotalProducts.cuantity= data.data.length;
        const categories = Object.keys(data.countByCategory);
        // console.log(categories);
         let kategoriesQuantity = categories.length
        // console.log(kategoriesQuantity);
        categoriesQuantity.cuantity = kategoriesQuantity;

        TotalProducts.cuantity= data.data.length;

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
        // console.log('esotyrenderizando');
        let contenido;
        if(this.state.ContentRowMovies == ''){
            contenido = <p>cargando</p>
        }else{
            contenido = <p>{this.state.ContentRowMovies}</p>
        }
        return(
            <div className="row">
            
            {cartProps.map( (product, i) => {

                return <SmallCard {...product} key={i}/>
                
            })}
        </div>

        )
    }
}


export default ContentRowMovies;