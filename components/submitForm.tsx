import axios from 'axios'
import React from 'react'

// Take values and send api request
// Create an option for each way to send the request to the api
// There are total of 13

const url = 'http://api.aladhan.com/v1/calendarByCity?';



// This function will need to have its own file
export function submitForm (val:any) {

    // add & to the end of all val variables.

    return axios.get(`${url}city=${val.city}&country=${val.country}&method=${val.method}&month=${val.month}&year=${val.year}`)
  .then(function ({data}) {
    // handle success
    return data.data
    
  })
  .catch(function (error) {
    // handle error
   console.log(error);
   
  });

}

// Display the data 

export function displayDate() {
    
    // 
    // Gregorian: 
    // date updates
    // day updates
    // designation
    // // abbreviated
    // // expanded
    // format
    // month updates
    // // number updates
    // // en updates
    // weekday updates
    // // en
    // year updates

    // Hijri: 
    // date updates
    // day updates
    // designation
    // // abbreviated
    // // expanded
    // format
    // month updates
    // // number
    // // en
    // // ar
    // weekday updates
    // // en
    // // ar
    // year updates
    // holidays [] updates
    // readable unnessacary 
}
export function displayMeta( {meta}: any, setMetaData ) {

    // This data does not change
    setMetaData({...meta, "test": "This is a test"});
    // Grab the foreach from underscore.js for objects
    // Add each value to a state that will choose if the value is shown

    

    return (
      <>
        
      </>
    );

    // latitude number
    // latitudeAdjustmentMethod
    // longitude number
    // method
    // // id number
    // // params
    // // // Fajr num
    // // // Isha num
    // midnightMode
    // offset
    // // Asr num 
    // // Dhuhr num 
    // // Fajr num 
    // // Imsak num 
    // // Isha num 
    // // Maghrib num 
    // // Midnight num 
    // // Sunrise num 
    // // Sunset num 
    // school
    // timezone

    
}
export function displayTimings() {
    
    // This data updates with each obj

    // Asr
    // Dhuhr
    // Fajr
    // Firstthird
    // Imsak
    // Isha
    // Lastthird
    // Maghrib
    // Midnight
    // Sunrise
    // Sunset
}

// Create a customizable UI
// Create a way to print, share, display
// and save the data

// Create cookies so the data becomes 
// persistant.
