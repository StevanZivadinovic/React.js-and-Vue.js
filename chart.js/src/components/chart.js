import React, { useEffect, useState } from "react";
import { Bar, Chart, Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

export default function Chart1() {
const [data, setData] = useState([])
    let baseUrl = 'https://api.coinranking.com/v2/coins/?limit=10';
    let apiKey = 'coinranking61e127443d6ebacdd2029e840cc940a34960b2b7f0ec54ac';
    let proxy = 'https://cors-anywhere.herokuapp.com/'
useEffect(() => {
    fetch(`${proxy}${baseUrl}`,{
        method:"GET",
        headers:{
        'Content-Type':'application/json',
        'x-access-token': `${apiKey} `,
        'Access-Control-Allow-Origin':`*`
         }
        
        }).then((response)=>{
        if (response.ok) {
            response.json().then((json)=>{
                console.log(json);
            })
        }
        else{
            console.log("error");
        }
        }).catch((error)=>{
        
        console.log(error);
        })

}, [])

   

  return (
    <div>
      <Bar
        datasetIdKey="id"
        data={{
          labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
          datasets: [
            {
              label: "# of Votes",

              data: [12, 19, 3, 5, 2, 5],
              backgroundColor: [
                "rgba(255, 99, 132, 0.2)",
                "rgba(54, 162, 235, 0.2)",
                "rgba(255, 206, 86, 0.2)",
                "rgba(75, 192, 192, 0.2)",
                "rgba(153, 102, 255, 0.2)",
                "rgba(255, 159, 64, 0.2)",
              ],
              borderColor: [
                "rgba(255, 99, 132, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
                "rgba(75, 192, 192, 1)",
                "rgba(153, 102, 255, 1)",
                "rgba(255, 159, 64, 1)",
              ],
              borderWidth: 1,
            },
          ],
        }}
        options={{
          maintainAspectRatio: true,
          scales: {
            y: {
              beginAtZero: true,
            },
          },
          plugins: {
            legend: {
                labels: {
                    // This more specific font property overrides the global property
                    font: {
                        size: 25
                    }
                }
            }
        }
        }}
      />
    </div>
  );
}
