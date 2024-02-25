import React, { useEffect, useState } from 'react'
import './indicator.css';
import axios from 'axios';


export default function Indicator() {

  const [negativeItems, setNegativeItems] = useState([]);
  const [positiveItems, setPositiveItems] = useState([]);
  const [neutralItems, setNeutralItems] = useState([]);

  useEffect(() => {
    // Function to fetch data from the API
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/indicators/s6bh');
        setNegativeItems(response.data.data.negative);
        setPositiveItems(response.data.data.positive);
        setNeutralItems(response.data.data.neutral);
        console.log(response.data.data); // Assuming the response.data is an array of items
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    
console.log();
    // Call the fetchData function when the component mounts
    fetchData();

    // Cleanup function to cancel any pending requests when the component unmounts
    return () => {
      // Cancel any pending requests here if needed
    };
  }, []); // 
  return (
    <div id='indicator' class='overview_section p-3 mt-4 pb-4'>
    <div class='overview_section_heading d-flex justify-content-space-between align-items-center'>
      <h1 class='overview_sub_heading'>Indicators</h1>
      <div class='calendar_subheading'></div>
    </div>
    <div class='box_wrapper_indicator'>
      <div class='indicator_box indicator_box_three'>
        <div class='indicator_box_heading'>
          <span>Postives</span>
          <svg
            width='24'
            height='25'
            viewBox='0 0 24 25'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M6.6001 11.3H4.2001C4.04097 11.3 3.88836 11.3633 3.77583 11.4758C3.66331 11.5883 3.6001 11.7409 3.6001 11.9L3.6001 20.9C3.6001 21.0592 3.66331 21.2118 3.77583 21.3243C3.88836 21.4368 4.04097 21.5 4.2001 21.5H6.6001L6.6001 11.3Z'
              fill='#1DD75B'
            />
            <path
              d='M7.7998 21.5L16.9678 21.5C17.5279 21.4995 18.0703 21.303 18.5008 20.9447C18.9313 20.5864 19.223 20.0888 19.3252 19.538L20.3896 13.8098C20.3963 13.7736 20.3997 13.7369 20.3998 13.7V13.1C20.3998 12.4635 20.1469 11.8531 19.6969 11.403C19.2468 10.9529 18.6363 10.7 17.9998 10.7L12.5998 10.7L12.5998 5.30002C12.5998 4.6635 12.3469 4.05306 11.8969 3.60297C11.4468 3.15288 10.8363 2.90002 10.1998 2.90002C10.0624 2.90001 9.92924 2.94713 9.82244 3.03351C9.71564 3.11989 9.64171 3.2403 9.613 3.37462L7.7998 11.3L7.7998 21.5Z'
              fill='#1DD75B'
            />
          </svg>
        </div>
        <div class='row justify-content-center'>
         {
            positiveItems.map((item,index)=>{
              return <div key={index} class='singleTag postives  mt-2 mr-2 col-5'>{item}</div>
            })
          }
          
         
        </div>
       
      </div>
      <div class='indicator_box indicator_box_four'>
        <div class='indicator_box_heading'>
          <span>Negatives</span>
          <svg
            width='24'
            height='25'
            viewBox='0 0 24 25'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M6.6001 13.7H4.2001C4.04097 13.7 3.88836 13.6368 3.77583 13.5243C3.66331 13.4117 3.6001 13.2591 3.6001 13.1L3.6001 4.1C3.6001 3.94087 3.66331 3.78826 3.77583 3.67574C3.88836 3.56321 4.04097 3.5 4.2001 3.5L6.6001 3.5L6.6001 13.7Z'
              fill='#DE3B40'
            />
            <path
              d='M7.7998 3.5L16.9678 3.5C17.5279 3.50054 18.0703 3.69698 18.5008 4.05531C18.9313 4.41363 19.223 4.91126 19.3252 5.462L20.3896 11.1902C20.3963 11.2264 20.3997 11.2632 20.3998 11.3V11.9C20.3998 12.5365 20.1469 13.147 19.6969 13.5971C19.2468 14.0471 18.6363 14.3 17.9998 14.3H12.5998V19.7C12.5998 20.3365 12.3469 20.947 11.8969 21.3971C11.4468 21.8471 10.8363 22.1 10.1998 22.1C10.0623 22.1001 9.929 22.0531 9.82207 21.9667C9.71515 21.8803 9.64113 21.7598 9.6124 21.6254L7.7998 13.7L7.7998 3.5Z'
              fill='#DE3B40'
            />
          </svg>
        </div>
        <div class='row justify-content-center '>
        {
            negativeItems.map((item,index)=>{
              return <div  key={index} class='singleTag negative mt-2 mr-2 col-5'>{item}</div>

            })
          }
          
        </div>
      </div>
      <div class='indicator_box indicator_box_four'>
        <div class='indicator_box_heading'>
          <span>Neutral</span>

          <svg
            width='24'
            height='25'
            viewBox='0 0 24 25'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M6.6001 13.7H4.2001C4.04097 13.7 3.88836 13.6368 3.77583 13.5243C3.66331 13.4117 3.6001 13.2591 3.6001 13.1L3.6001 4.1C3.6001 3.94087 3.66331 3.78826 3.77583 3.67574C3.88836 3.56321 4.04097 3.5 4.2001 3.5L6.6001 3.5L6.6001 13.7Z'
              fill='#DE3B40'
            />
            <path
              d='M7.7998 3.5L16.9678 3.5C17.5279 3.50054 18.0703 3.69698 18.5008 4.05531C18.9313 4.41363 19.223 4.91126 19.3252 5.462L20.3896 11.1902C20.3963 11.2264 20.3997 11.2632 20.3998 11.3V11.9C20.3998 12.5365 20.1469 13.147 19.6969 13.5971C19.2468 14.0471 18.6363 14.3 17.9998 14.3H12.5998V19.7C12.5998 20.3365 12.3469 20.947 11.8969 21.3971C11.4468 21.8471 10.8363 22.1 10.1998 22.1C10.0623 22.1001 9.929 22.0531 9.82207 21.9667C9.71515 21.8803 9.64113 21.7598 9.6124 21.6254L7.7998 13.7L7.7998 3.5Z'
              fill='#DE3B40'
            />
          </svg>
        </div>
        <div class='row justify-content-center'>
        {
            neutralItems.map((item,index)=>{
              return<div key={index} class='singleTag neutral mt-2 mr-2 col-5'>{item}</div>

            })
          }
          
          
        </div>
      </div>
    </div>

    <div></div>
  </div>
  )
}
