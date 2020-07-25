import React from 'react';
import './App.css';

import Cards from './components/Cards/Cards'
import Chart from './components/Chart/Chart'
import CountryPicker from './components/CountryPicker/CountryPicker'
import {fetchData} from './api/index'
import image from './images/image.png'


class App extends React.Component {
//if you want to pass data from componentDidmount to Cards you use the state 
  
state={
  data:{},
  country:''
}

  async componentDidMount(){
    const fetchdata = await fetchData()
    this.setState({data:fetchdata})

  }

  handleChange=async(country)=>{
    //fetch the data 
    //set the state
    const fetchedData =await fetchData(country)
    this.setState({data:fetchedData, country})
    console.log(fetchedData)//fetching the data from countryPicker using onChange
  //then we put it in the state to move it to the components
  }

  render(){
    const {data,country}=this.state

    return (
      <div className="container">
        <img src={image} alt='coronaImage' className='image'/>
        <Cards data={data}/>
        <CountryPicker handleChange={this.handleChange} />
        <Chart data={data} country={country} />
      
      </div>
    );
  }
 
}

export default App;
