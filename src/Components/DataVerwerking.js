import React from "react";
import Students from "../Data/Students.json"
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme, VictoryStack, VictoryZoomContainer } from "victory";
import { toHaveStyle } from "@testing-library/jest-dom/dist/matchers";

// data workarounds \\

const fullData = Students.students.map(x => x)
const uniqueNames = [...new Set(fullData.map(x => x.naam))]
const uniqueTasks = [...new Set(fullData.map(x => x.opdracht))]
let totalDiff = []
let totalFun = []



// people data \\
const evelynData = fullData.filter(x => x.naam === "Evelyn")
let evelynDiff = []
let evelynFun = []
const arankaData = fullData.filter(x => x.naam === "Aranka")
let arankaDiff = []
let arankaFun = []
const florisData = fullData.filter(x => x.naam === "Floris")
let florisDiff = []
let florisFun = []
const hectorData = fullData.filter(x => x.naam === "Hector")
let hectorDiff = []
let hectorFun = []
const martinaData = fullData.filter(x => x.naam === "Martina")
let martinaDiff = []
let martinaFun = []
const mauritsData = fullData.filter(x => x.naam === "Maurits")
let mauritsDiff = []
let mauritsFun = []
const rahimaData = fullData.filter(x => x.naam === "Rahima")
let rahimaDiff = []
let rahimaFun = []
const sandraData = fullData.filter(x => x.naam === "Sandra")
let sandraDiff = []
let sandraFun = []
const wietskeData = fullData.filter(x => x.naam === "Wietske")
let wietskeDiff = []
let wietskeFun = []
const stormData = fullData.filter(x => x.naam === "Storm")
let stormDiff = []
let stormFun = []
for (var i = 0; i < uniqueTasks.length; i++) {
  evelynDiff.push(evelynData[i].diff)
  evelynFun.push(evelynData[i].fun)
  arankaDiff.push(arankaData[i].diff)
  arankaFun.push(arankaData[i].fun)
  florisDiff.push(florisData[i].diff)
  florisFun.push(florisData[i].fun)
  hectorDiff.push(hectorData[i].diff)
  hectorFun.push(hectorData[i].fun)
  martinaDiff.push(martinaData[i].diff)
  martinaFun.push(martinaData[i].fun)
  mauritsDiff.push(mauritsData[i].diff)
  mauritsFun.push(mauritsData[i].fun)
  rahimaDiff.push(rahimaData[i].diff)
  rahimaFun.push(rahimaData[i].fun)
  sandraDiff.push(sandraData[i].diff)
  sandraFun.push(sandraData[i].fun)
  wietskeDiff.push(wietskeData[i].diff)
  wietskeFun.push(wietskeData[i].fun)
  stormDiff.push(stormData[i].diff)
  stormFun.push(stormData[i].fun)
} 

for (i = 0; i < uniqueTasks.length; i++) {
  totalDiff.push(evelynDiff[i] + arankaDiff[i] + florisDiff[i] + hectorDiff[i] + martinaDiff[i] + mauritsDiff[i] + rahimaDiff[i] + sandraDiff[i] + wietskeDiff[i] + stormDiff[i])
  totalFun.push(evelynFun[i] + arankaFun[i] + florisFun[i] + hectorFun[i] + martinaFun[i] + mauritsFun[i] + rahimaFun[i] + sandraFun[i] + wietskeFun[i] + stormFun[i])
}
const moderateDiff = totalDiff.map(x => x/10)
const moderateFun = totalFun.map(x => x/10)


// hardcoded bs \\
const thikValueLength = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55]




class DataVerwerking extends React.Component {

  constructor() {
    super();
    this.state = {};
  }


  render() {
    console.log(fullData)
    return (
        <VictoryChart
        width={550}
        height={200}
        domainPadding={{ x: 100 }}
      >
        <VictoryAxis
          style={{ tickLabels: { angle: -65, fontSize: 4, textAnchor: "end"} }}
          tickValues={thikValueLength}
          tickFormat={fullData.map(x => x.opdracht)}
        />
        <VictoryBar
        style={{ data: { fill: "#c43a31" } }}
        data={moderateDiff}
        alignment="end"
        barRatio={0.3}
        />
        <VictoryAxis
          dependentAxis
          // tickFormat specifies how ticks should be displayed
          style={{ tickLabels: { fontSize: 5 } }}
          tickValues={[ 1, 2, 3, 4, 5]}
          tickFormat={["1", "2", "3", "4", "5"]}   
        />
        <VictoryBar
        style={{ data: { fill: "black" } }}
        data={moderateFun}
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
}

export default DataVerwerking

