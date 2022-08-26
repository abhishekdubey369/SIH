import { Bar, Doughnut } from "react-chartjs-2";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { useRef, useState } from "react";
import data from "./data/2018/PMAYCITY2018.json";

Chart.register(CategoryScale);

const Graph = () => {
  const [stateName, setStateName] = useState({
    stateName: "JAMMU AND KASHMIR",
    year: 2018,
  });

  const enteredStateName = useRef(stateName.stateName);
  const enteredYear = useRef(stateName.year);

  const submitHandler = (e) => {
    e.preventDefault();
    const newStateName = enteredStateName.current.value;
    const newYear = enteredYear.current.value;

    setStateName((prevState) => {
      return {
        ...prevState,
        stateName: newStateName,
        year: newYear,
      };
    });
    console.log(
      data.filter((item) => {
        if (item["State Name"] === stateName.stateName) {
          return item;
        }
      })
    );
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        <label htmlFor="StateName">StateName</label>
        <br />
        <input
          type="text"
          id="StateName"
          name="Scope"
          value={stateName.stateName}
          ref={enteredStateName}
        />{" "}
        <br />
        <label htmlFor="Year">Year</label>
        <br />
        <input
          type="number"
          id="Year"
          name="Year"
          value={stateName.year}
          ref={enteredYear}
        />
        <br />
        <button type="submit">Show</button>
      </form>
      <Bar
        data={{
          labels: [
            "prior to 2012-2013",
            "2013-2014",
            "2014-2015",
            "2015-2016",
            "2016-2017",
            "2017-2018",
            "Total Houses completed in 2017-2018",
          ],
          datasets: [
            {
              label: "House Completed",
              data: [0, 0, 0, 0, 25444, 615, 26059],
              backgroundColor: [
                "rgba(255, 99, 132, 0.2)",
                "rgba(54, 162, 235, 0.2)",
                "rgba(255, 206, 86, 0.2)",
                "rgba(75, 192, 192, 0.2)",
                "rgba(153, 102, 255, 0.2)",
                "rgba(255, 159, 64, 0.2)",
                "rgba(0, 240, 0, 0.2)",
              ],
              borderColor: [
                "rgba(255, 99, 132, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
                "rgba(75, 192, 192, 1)",
                "rgba(153, 102, 255, 1)",
                "rgba(255, 159, 64, 1)",
                "rgba(0, 240, 0, 1)",
              ],
              borderWidth: 1,
            },
          ],
        }}
        height={200}
        width={600}
        options={{
          maintainAspectRatio: true,
        }}
      />
    </>
  );
};
export default Graph;
