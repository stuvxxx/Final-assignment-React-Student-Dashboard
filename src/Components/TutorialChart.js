import React from "react";
import tutorialData from "../Data/tutorialData";
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme, VictoryStack } from "victory";

const data = tutorialData

class TutorialChart extends React.Component {
  render() {
    return (
      <VictoryChart
        // adding the material theme provided with Victory
        // domainPadding will add space to each side of VictoryBar to
        // prevent it from overlapping the axis
        theme={VictoryTheme.material}
        domainPadding={20}
      >
        <VictoryAxis
          // tickValues specifies both the number of ticks and where
          // they are placed on the axis
          tickValues={[1, 2, 3, 4]}
          tickFormat={["Quarter 1", "Quarter 2", "Quarter 3", "Quarter 4"]}
        />
        <VictoryAxis
          dependentAxis
          // tickFormat specifies how ticks should be displayed
          tickFormat={(x) => (`$${x / 1000}k`)}
        />
        <VictoryStack
          colorScale={"warm"}
        >
          <VictoryBar
            data={data.data2012}
            x="quarter"
            y="earnings"
          />
          <VictoryBar
            data={data.data2013}
            x="quarter"
            y="earnings"
          />
          <VictoryBar
            data={data.data2014}
            x="quarter"
            y="earnings"
          />
          <VictoryBar
            data={data.data2015}
            x="quarter"
            y="earnings"
          />
        </VictoryStack>
      </VictoryChart>
    )
  }
}


export default TutorialChart;