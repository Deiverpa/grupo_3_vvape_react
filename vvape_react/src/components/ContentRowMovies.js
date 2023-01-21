import React from 'react';
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

let totalUsers = {
    title:' Total users', 
    color:'success', 
    cuantity: '79',
    icon:'fa-award'
}

/* <!-- categories quantity --> */

let categoriesQuantity = {
    title:'Categories Quantity' ,
    color:'warning',
    cuantity:'49',
    icon:'fa-user-check'
}

let cartProps = [TotalProducts, totalUsers, categoriesQuantity];

function ContentRowMovies(){
    
    return (
    
        <div className="row">
            
            {cartProps.map( (movie, i) => {

                return <SmallCard {...movie} key={i}/>
            
            })}

        </div>
    )
}

export default ContentRowMovies;