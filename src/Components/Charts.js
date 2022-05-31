import React from "react";
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme, VictoryStack} from "victory";

function Charts(props) {
    return (
      <div className="charts-container">
        <VictoryChart
        padding={{bottom: 80, top: -25, left: 25, right: 10}}
        width={800}
        height={200}
        theme={VictoryTheme.material}
        >
        <VictoryAxis
        style={{ tickLabels: { angle: -45, fontSize: 8, textAnchor: "end", color: "black", fontWeight: "bolder" } }}
        tickValues={props.values}
        tickFormat={props.format}
        />
        <VictoryBar
        style={{ data: { fill: "black" } }}
        data={props.dataDiff}
        alignment="end"
        barRatio={0.33}
        />
        <VictoryAxis
        dependentAxis
        style={{ tickLabels: { fontSize: 5 } }}
        tickValues={[ 1, 2, 3, 4, 5]}
        tickFormat={["1", "2", "3", "4", "5"]}   
        />
        <VictoryBar
        style={{ data: { fill: "green" } }}
        data={props.dataFun}
        alignment="start"
        barRatio={0.33}
        />
        <VictoryStack
        colorScale={"warm"}
        >
        </VictoryStack>
      </VictoryChart>
      </div>
    )
} 

export default Charts