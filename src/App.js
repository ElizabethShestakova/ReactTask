import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Loader from './Loader/Loader';
import Table from './Table/Table';
import DetailRowView from './Table/DetailRowView';
import ModeSelector from './Table/ModeSelector';
import _ from 'lodash';

class App extends Component {

  state = {
    isModeSelected: false,
    isLoading: false,
    data: [],
    sort: 'asc', //'desc'
    sortField: 'id',
    row: null,
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
    const sortType = this.state.sort === 'asc' ? 'desc' : 'asc';//определить направление сортировки
    const orderedData = _.orderBy(cloneData, sortField, sortType);//получим отсортированные данные
    //меняем состояние компонента this.setState
    this.setState({
      data: orderedData,
      sort: sortType,
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

  render() {
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
          data = {this.state.data} 
          onSort = {this.onSort}
          sort = {this.state.sort}
          sortField = {this.state.sortField}
          onRowSelect = {this.onRowSelect}/>
      }
            {
        this.state.row ? <DetailRowView person={this.state.row} /> : null
      }
      </div>
      
    );
  }

}

export default App;

