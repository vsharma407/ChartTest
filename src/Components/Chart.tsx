
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import {latencyData, bgArray} from "../Data/carrierData";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Daily DIFF",
    },
  },
};

const carrierList = ["HAPAG", "ACL"];



const keysArray = Object.keys(Object.values(latencyData)[0]);
console.log(keysArray);

let labels: any[] = keysArray;
// const bgArray = ["blue", "green", "red"];

const val:any = carrierList.map((carrier) => {
    for (const key in latencyData) {
      if (key === carrier) {
        const countObj = latencyData[key];
        let dataArr: number[] = [];
        for (const date in countObj) {
          dataArr.push(countObj[date]);
        }
        console.log(dataArr)
        let bg
        for(const carr in bgArray){
            if(carr === carrier)
            {
                bg = bgArray[carr];
            }
        }
  
        return {
          label: carrier,
          data: dataArr,
        //   backgroundColor: bg,
          borderColor: bg
        };
      }
    }
  })

export const data = {
    labels,
    datasets: val,
  };

const Chart = () => {
  return (
    
    <div className="w-3/4 mt-20 bg-green-300 border border-green-800">
            <Line options={options} data={data} />
    </div>
  );
};

export default Chart;
