import React from "react";
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme, VictoryStack, VictoryZoomContainer } from "victory";



function Charts(props) {
    return (
        <VictoryChart
        width={550}
        height={200}
        domainPadding={{ x: 100 }}
      >
        <VictoryAxis
          style={{ tickLabels: { angle: -65, fontSize: 4, textAnchor: "end"} }}
          tickValues={props.values}
          tickFormat={props.format}
        />
        <VictoryBar
        style={{ data: { fill: "#c43a31" } }}
        data={props.dataDiff}
        alignment="end"
        barRatio={0.3}
        />
        <VictoryAxis
          dependentAxis
          style={{ tickLabels: { fontSize: 5 } }}
          tickValues={[ 1, 2, 3, 4, 5]}
          tickFormat={["1", "2", "3", "4", "5"]}   
        />
        <VictoryBar
        style={{ data: { fill: "black" } }}
        data={props.dataFun}
        alignment="start"
        barRatio={0.3}
        />
        <VictoryStack
          colorScale={"warm"}
        >
        </VictoryStack>
      </VictoryChart>

    )
} 

export default Charts