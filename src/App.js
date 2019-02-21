import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Loader from './Loader/Loader';
import Table from './Table/Table';

class App extends Component {

  state = {
    isLoading: true,
    data: [],
  };

  async componentDidMount() {
    const response = await fetch ('http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}');    
    const data = await response.json();
    //  console.log(data)
    this.setState({
      isLoading: false,
      data //совпадают ключ и значение
    })
  }

  render() {
    return (
<div className="container">
      {
        this.state.isLoading ? <Loader /> : <Table data={this.state.data}/>
      }
      </div>
    );
  }

}

export default App;


// class App extends Component {
  
//   downloadSmallData() {
//     fetch('http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}')
//     .then( (response) => {        
//          let data =  response.json(); 
          

         
//     });
//   }

//   downloadBigData() {
    
//   }

//   makeTable() {

//   }

//   render() {
//     return(
//       <div>
//         <div className="buttons">        
//           <button onClick={this.downloadSmallData} className="btn smallData">Маленький объем данных</button>
//           <button onClick={this.downloadBigData} className="btn bigData">Большой объем данных</button>
//         </div>
//         <div className="table">
//           <table>
//             <tr>
//               <th>id</th>
//               <th>firstName</th>
//               <th>lastName</th>
//               <th>email</th>
//               <th>phone</th>
//             </tr>
            
//           </table>
//         </div>
//       </div>
//     );
//   }
// }

// export default App;

