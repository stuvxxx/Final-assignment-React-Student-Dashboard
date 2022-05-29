import React from "react";
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme, VictoryStack, VictoryZoomContainer, VictoryTooltip } from "victory";



function Charts(props) {
    return (
      <div className="charts-container">
        <VictoryChart
        padding={{bottom: 120, top: 10, left: 25, right: 10}}
        width={800}
        height={250}
        theme={VictoryTheme.material}

      >
        <VictoryAxis
          style={{ tickLabels: { angle: -45, fontSize: 8, textAnchor: "end", color: "black"} }}
          tickValues={props.values}
          tickFormat={props.format}
        />
        <VictoryBar
        labelComponent={      <VictoryTooltip
          cornerRadius={({ datum }) => datum.x > 6 ? 0 : 20}
          pointerLength={({ datum }) => datum.y > 0 ? 5 : 20}
          flyoutStyle={{
            stroke: ({ datum }) => datum.x === 10
              ? "tomato"
              : "black"
          }}
        />}
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
        labelComponent={      <VictoryTooltip
          cornerRadius={({ datum }) => datum.x > 6 ? 0 : 20}
          pointerLength={({ datum }) => datum.y > 0 ? 5 : 20}
          flyoutStyle={{
            stroke: ({ datum }) => datum.x === 10
              ? "tomato"
              : "black"
          }}
        />}
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