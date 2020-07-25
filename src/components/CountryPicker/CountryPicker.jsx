import React,{useState,useEffect} from 'react'
import{NativeSelect,FormControl} from '@material-ui/core'
import './CountryPicker.css'
import {fetchCountries} from '../../api/index'


const CountryPicker =({handleChange})=>{
    const [fetchedCountries,setFetchCountries]=useState([])
    

    useEffect(()=>{
        const fetchAPI=async()=>{
            setFetchCountries(await fetchCountries())
        }
        fetchAPI()
    },[setFetchCountries])//we put array of setFetchCountries to make it called when setFetchCountries changed only
    
    return(
    <FormControl className='formControl'>
        {/* sending the country up to app.js using onChange method */}
        <NativeSelect defaultValue='' onChange={(e)=>{handleChange(e.target.value)}}>
            <option value=''>Global</option>
            {fetchedCountries.map((country,i)=>(<option key={i} value={country}>{country}</option>))}
        </NativeSelect>
    </FormControl>
)}

export default CountryPicker