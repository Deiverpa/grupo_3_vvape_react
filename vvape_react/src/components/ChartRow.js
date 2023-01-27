import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


function ChartRow(props){
    return (
                <tr>
                    {Array.isArray(props.Category) &&
                        <td>
                            <ul>
                                {props.Category.map( (category,i) => 
                                    <li key={`category ${i}`}>{category}</li>
                                )}
                            </ul>
                        </td>
                    }
                    {Array.isArray(props.Quantity) &&
                        <td>
                            <ul>
                                {props.Quantity.map( (quantity,i) => 
                                    <li key={`quantity ${i}`}>{quantity}</li>
                                )}
                            </ul>
                        </td>
                    }
                </tr>
            )
}
    
        

export default ChartRow;