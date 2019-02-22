import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Loader from './Loader/Loader';
import Table from './Table/Table';
import DetailRowView from './Table/DetailRowView';
import ModeSelector from './Table/ModeSelector';
import _ from 'lodash'; //для сортировки данных
import ReactPaginate from 'react-paginate' //для отображения по 50 элементов на странице

class App extends Component {

  state = {
    isModeSelected: false,
    isLoading: false,
    data: [],
    sort: 'asc', //'desc'
    sortField: 'id',
    row: null,
    currentPage: 0,
  };

  async downloadData(link) {
    const response = await fetch(link);
    const data = await response.json();
    //  console.log(data)
    this.setState({
      isLoading: false,
      data: _.orderBy(data, this.state.sortField, this.state.sort)
    })
  }

  onSort = sortField => {
    // console.log(sortField)
    const cloneData = this.state.data.concat(); //копия массива
    const sort = this.state.sort === 'asc' ? 'desc' : 'asc';//определить направление сортировки
    const data = _.orderBy(cloneData, sortField, sort);//получим отсортированные данные
    //меняем состояние компонента this.setState
    this.setState({
      data,
      sort,
      sortField
    })

  }

  onRowSelect = row => {
    // console.log(row)
    this.setState({row})
  }

  modeSelectHandler = link => {
    // console.log(link)
    this.setState({
      isModeSelected: true,
      isLoading: true,
    })
    this.downloadData(link)
  }

  pageChangeHandler = ({selected}) => (
    // console.log(page)
    this.setState({currentPage: selected})

  )

  render() {
    const pageSize = 50;
    const displayData = _.chunk(this.state.data, pageSize)[this.state.currentPage]
    if (!this.state.isModeSelected) {
      return (
        <div className="container">
          <ModeSelector onSelect={this.modeSelectHandler}/>
        </div>
      )
    }
    return (
<div className="container">
      {
        this.state.isLoading 
        ? <Loader /> 
        : <Table 
          data = {displayData} 
          onSort = {this.onSort}
          sort = {this.state.sort}
          sortField = {this.state.sortField}
          onRowSelect = {this.onRowSelect}/>
      }
      {this.state.data.length > pageSize ? 
      <ReactPaginate
          previousLabel={<img src='http://image.flaticon.com/icons/png/512/259/259444.png'></img>}
          nextLabel={<img src='http://image.flaticon.com/icons/png/512/259/259418.png'></img>}
          breakLabel={'...'}
          breakClassName={'break-me'}
          pageCount={20}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={this.pageChangeHandler}
          containerClassName={'pagination'}
          activeClassName={'active'}
          pageClassName = 'page-item'
          pageLinkClassName = 'page-link'
          previousClassName = 'page-item'
          nextClassName = 'page-item'
          previousLinkClassName = 'page-link'
          nextLinkClassName = 'page-link'
        /> : null }
            {
        this.state.row ? <DetailRowView person={this.state.row} /> : null
      }
      </div>
      
    );
  }

}

export default App;

