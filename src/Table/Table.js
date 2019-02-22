import React from 'react';

class Table extends React.Component {

    props = {
        sortField: 'id',
        sort: 'asc',
      }

    sortImg = sort => {
        let src = 'https://maxcdn.icons8.com/iOS7/PNG/100/Arrows/sort_down_filled-100.png';
        if(sort === 'desc') {
            src = 'https://maxcdn.icons8.com/iOS7/PNG/100/Arrows/sort_up_filled-100.png';
        } 
        let result = <img src={src}></img>;
        return result;
    }  

    render() {
        return(
            <div className="dataTable">
            <table className="table">
                <thead>
                    <tr>
                        <th onClick = {this.props.onSort.bind(null, 'id')}>
                            ID {this.props.sortField === 'id'? this.sortImg(this.props.sort): null}
                        </th>
                        <th onClick = {this.props.onSort.bind(null, 'firstName')}>
                            First Name {this.props.sortField === 'firstName' ? this.sortImg(this.props.sort) : null}
                        </th>
                        <th onClick = {this.props.onSort.bind(null, 'lastName')}>
                            Last Name {this.props.sortField === 'lastName' ? this.sortImg(this.props.sort) : null}
                        </th>
                        <th onClick = {this.props.onSort.bind(null, 'email')}>
                            E-mail {this.props.sortField === 'email' ? this.sortImg(this.props.sort) : null}
                        </th>
                        <th onClick = {this.props.onSort.bind(null, 'phone')}>
                            Phone {this.props.sortField === 'phone' ? this.sortImg(this.props.sort) : null}
                        </th>
                    </tr>
                </thead>
                <tbody>
                    { this.props.data.map(item =>(
                        <tr key={item.id + item.phone} onClick = {this.props.onRowSelect.bind(null, item)}>
                            <td>{item.id}</td>
                            <td>{item.firstName}</td>
                            <td>{item.lastName}</td>
                            <td>{item.email}</td>
                            <td>{item.phone}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            </div> 
        )
    }
}

export default Table;
// export default props => (
//     <div className="dataTable">
//     <table className="table">
//         <thead>
//             <tr>
//                 <th onClick = {props.onSort.bind(null, 'id')}>
//                     ID {props.sortField === 'id'?  : null}
//                 </th>
//                 <th onClick = {props.onSort.bind(null, 'firstName')}>
//                     First Name {props.sortField === 'firstName' ? <small>{props.sort}</small> : null}
//                 </th>
//                 <th onClick = {props.onSort.bind(null, 'lastName')}>
//                     Last Name {props.sortField === 'lastName' ? <small>{props.sort}</small> : null}
//                 </th>
//                 <th onClick = {props.onSort.bind(null, 'email')}>
//                     E-mail {props.sortField === 'email' ? <small>{props.sort}</small> : null}
//                 </th>
//                 <th onClick = {props.onSort.bind(null, 'phone')}>
//                     Phone {props.sortField === 'phone' ? <small>{props.sort}</small> : null}
//                 </th>
//             </tr>
//         </thead>
//         <tbody>
//             { props.data.map(item =>(
//                 <tr key={item.id + item.phone}>
//                     <td>{item.id}</td>
//                     <td>{item.firstName}</td>
//                     <td>{item.lastName}</td>
//                     <td>{item.email}</td>
//                     <td>{item.phone}</td>
//                 </tr>
//             ))}
//         </tbody>
//     </table>
//     </div>
// )