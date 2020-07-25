import React ,{useState,useEffect} from 'react'
import {fetchDailyData} from '../../api/index'
import './Chart.css'
import {Bar,Line} from 'react-chartjs-2'



const Chart =({data,country})=>{
    const [dailyData,setDailyData]=useState([])//like setState in class component

    useEffect(()=>{
        const fetchAPI =async ()=>{
            setDailyData(await fetchDailyData()) //setDailyData like setState
        }
        
        fetchAPI()
        
    },[])

   
    const lineChart=(
        dailyData.length ?
        (<Line
        data={{
            labels:dailyData.map(({date})=>date),
            datasets:[{
                data:dailyData.map(({confirmed})=>confirmed),
                label:'infected',
                borderColor:'#3333ff',
                fill:true
            },{
                data:dailyData.map(({deaths})=>deaths),
                label:'infected',
                borderColor:'red',
                backgroundColor:"rgba(255,0,0,0.5)",
                fill:true
            }]//two for infected and deaths
        }}
        />):null
    )

    const barChart =(
        data.confirmed?(
            <Bar
            data={{
                labels:['Infected', 'Recovered', 'Deaths'],
                datasets:[{
                    label:'people',
                    backgroundColor:['rgba(0,0,255,0.5)','rgba(0,255,0,0.5)','rgba(255,0,0,0.5)'],
                    data:[data.confirmed.value,data.recovered.value,data.deaths.value]
                }]
            }}
            options={{
                legend:{display:false},
                title:{display:true, text:`current state in ${country}`}
            }}
            />
        ):null
    )
    

    return(
   <div className="container">
      { country
      ?barChart
      :lineChart}
   </div>
)
}
export default Chart