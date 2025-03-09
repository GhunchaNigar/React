import {useEffect, useState} from 'react'
const browser = window.browser || window.chrome;




function useCurrencyInfo(currency){
    const [data, setdata] = useState({})
    useEffect(()=>{
        fetch("https://openexchangerates.org/api/latest.jsoncurrencies.jsonhistorical/2013-02-16.json")
        .then((res)=>res.json)
        .then((res)=> setdata(res[currency]))
        console.log(data)
    },[currency])
    console.log(data)
    return data
}
export default useCurrencyInfo;