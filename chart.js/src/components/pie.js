import React, { useEffect, useState } from "react";
import { Doughnut, Chart, Line, Pie } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

export default function ChartPie() {
  const [data1, setData] = useState([]);
 
  let baseUrl = "https://api.coinranking.com/v2/coins/?limit=10";
  let apiKey = "coinranking61e127443d6ebacdd2029e840cc940a34960b2b7f0ec54ac";
  let proxy = "https://cors-anywhere.herokuapp.com/";
  useEffect(() => {
    fetch(`${proxy}${baseUrl}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'x-access-token': `${apiKey}`,
          'Access-Control-Allow-Origin': "*"
        }
      })
        .then((response) => {
          if (response.ok) {
            response.json().then((json) => {
              console.log(json.data);
              setData([...data1,json.data])
            });
            
          }
        }).catch((error) => {
          console.log(error);
        });
   
  }, [])
console.log(data1);

  return (
    <div className="doughnut" style={{width:'35%'}}>
     {data1.length>0 ? <Pie
        // width={50}
        height={10}
        datasetIdKey="id"
        data={{
          labels:  data1[0].coins.map((x) =>x.name
          ),
          datasets: [
            {
              label:  `${data1[0].coins.length} Coins Available`,
              data: data1[0].coins.map((x) =>x.price
              ),
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
                  size: 25,
                },
              },
            },
          },
        }}
      />:''}
    </div>
  );
}
