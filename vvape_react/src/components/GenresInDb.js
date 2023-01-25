import React, {Component} from "react";

let productsArray = []


class productsInDb extends Component {
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

      // // productsArray.push(data.data);
      
      let nuevoArray = data.data.map(function(product){
        return product.name
      });
      
      this.setState(
        {nuevoArray}
      );
      console.log(nuevoArray);
      productsArray.push(nuevoArray)

  }
  componentDidUpdate(){
      // console.log('mecambié');
      // alert('Response from Data Base')
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
          <h5 className="m-0 font-weight-bold text-gray-800">
            Products in Data Base
          </h5>
        </div>
        
        <div className="card-body">
          <div className="row d-flex justify-content-center mb-4">
            <div className="col-lg-6 mb-4">
              <div className="card bg-dark text-white shadow mt-4">
              {this.state.nuevoArray && this.state.nuevoArray.map((item) => (
              <div className="card-body d-flex justify-content-center" key={item}>{item}</div>
              ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
}

export default productsInDb;



// function LastMovieInDb() {
//   return (
//     <div className="col-lg-6 mb-4">
//       <div className="card shadow mb-4">
//         <div className="card-header py-3">
//           <h5 className="m-0 font-weight-bold text-gray-800">
//             Products in Data Base
//           </h5>
//         </div>
//         <div className="card-body">
//           <div className="row">
//             <div className="col-lg-6 mb-4">
//               <div className="card bg-dark text-white shadow">
//                 <div className="card-body">Acción</div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


