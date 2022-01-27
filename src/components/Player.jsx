import React, {useEffect, useState} from 'react';
import axios from 'axios';

export default function Player() {

    const [state, setstate] = useState();

    useEffect(() => {
        var options = {
            method: 'GET',
            url: 'https://free-nba.p.rapidapi.com/players',
            params: {page: '0', per_page: '25'},
            headers: {
              'x-rapidapi-host': 'free-nba.p.rapidapi.com',
              'x-rapidapi-key': '38e4232f19msh07c40a70d913576p1640d7jsn7cc597f9716e'
            }
          };
          axios
          .request(options)
          .then((response)=>{
              console.log("response", response.data.data);
              setstate(response.data.data);
          }).catch((error)=>{
              console.error(error);
          },[]);
          console.log(state,"player state checking");
       
      
        return () => {
          
        }});
        return(
            <div className="container">
                {state?.map((detail,index)=>{
                    // <h1>{detail.first_name}</h1>
                    return (
                        
                        <ul className="list-group">
                            <li className="list-group-item">ID: {detail.id}</li>
                            <li className="list-group-item">First Name: {detail.first_name}</li>
                            <li className="list-group-item">Last Name: {detail.last_name}</li>
                            <li className="list-group-item">Height: {detail.Height}</li>
                            <li className="list-group-item">City: {detail.team.city}</li>
                        </ul>
                            
                            
                    )
                })}
            </div>
        )
        }




// axios.request(options).then(function (response) {
// 	console.log(response.data.data);
// }).catch(function (error) {
// 	console.error(error);
// });


//   return <div className="container">
//        {/* <h1>This is Player Page</h1> */}
//         {/* {state.map((details,index)=>{
         
//           <ul className="list-group">
//             <li className="list-group-item">{details.id}</li> */}
//             {/* <li className="list-group-item">A second item</li>
//             <li className="list-group-item">A third item</li>
//             <li className="list-group-item">A fourth item</li>
//             <li className="list-group-item">And a fifth one</li> */}
//           {/* </ul> */}
//       {/* })} */}
      

//   </div>;
// }
