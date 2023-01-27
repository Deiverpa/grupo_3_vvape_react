import React, {Component} from 'react';
import SmallCard from './SmallCard';

/*  Cada set de datos es un objeto literal */

/* <!-- TotalProducts in DB --> */



/* <!-- totalUsers --> */

let totalUsers = {
    title:' Total users', 
    color:'primary', 
    cuantity: '0',
    icon:'fa-award'
}



let cartProps = [totalUsers];

class ContentRowProducts2 extends Component {
    constructor(props){
        super(props);
        this.state = {
            ContentRowProducts2: ''
        }
    }

    apiCall(url,consec){
        fetch('http://localhost:3001/users/api/listUsers')
        .then(response => response.json())
        .then(data => consec(data))
        .catch(error => console.log(error))
    }

    componentDidMount(){
        // console.log('memonté');
        this.apiCall('http://localhost:3001/users/api/listUsers',this.UsersInfo)
    }
    UsersInfo = (data)=>{
        // console.log(data);
        totalUsers.cuantity= data.data.length;

        this.setState(
            {
                users: data.count,
            }

        )
    }
    componentDidUpdate(){
        // console.log('mecambié');
        // alert('Response from Data Base')
    }
    render(){
        // console.log('esotyrenderizando');
        let contenido;
        if(this.state.ContentRowProducts2 == ''){
            contenido = <p>cargando</p>
        }else{
            contenido = <p>{this.state.ContentRowProducts2}</p>
        }
        return(
            <div className="row d-flex justify-content-center">
            
            {cartProps.map( (user, i) => {

                return <SmallCard {...user} key={i}/>
                
            })}
        </div>

        )
    }
}



export default ContentRowProducts2;