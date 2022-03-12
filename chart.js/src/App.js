

import Chart1 from './components/chart';
import './App.css';
import ChartDoughnut from './components/chartDoughnut';
import LineChart from './components/line';
import ChartPie from './components/pie';






function App() {
 
  return (
    <div className="App" >
     
     <ChartPie></ChartPie>
     <ChartDoughnut></ChartDoughnut>
     <LineChart></LineChart>
     <Chart1></Chart1> 
    </div>
  );
}

export default App;
