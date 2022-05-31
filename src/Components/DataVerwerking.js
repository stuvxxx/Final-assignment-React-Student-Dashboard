import React from "react";
import Students from "../Data/Students.json"
import Charts from "./Charts";
import NamesList from "./Names";
import Checkboxes from "./Checkboxes";
import "./styles.css"


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

const studentDiffArray = [evelynDiff, arankaDiff, florisDiff, hectorDiff, martinaDiff, mauritsDiff, rahimaDiff, sandraDiff, wietskeDiff, stormDiff]
const studentFunArray = [evelynFun, arankaFun, florisFun, hectorFun, martinaFun, mauritsFun, rahimaFun, sandraFun, wietskeFun, stormFun]

const moderateDiff = totalDiff.map(x => x/10)
const moderateFun = totalFun.map(x => x/10)
const thikValueLength = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55]


class DataVerwerking extends React.Component {

  constructor() {
    super();
    this.state = {
                  diff: {what: moderateDiff, toShow: false}, 
                  fun:  {what: moderateFun, toShow: false},
                  boxes: [true, true, true, true, true, true ,true, true, true, true]

    };
    this.handleClick = this.handleClick.bind(this)
    this.handleFilterChange = this.handleFilterChange.bind(this)
    this.handleFilterChangeSelection = this.handleFilterChangeSelection.bind(this)
    this.handleLastBox = this.handleLastBox.bind(this)

  }

  handleClick(name) {
      const filteredData = fullData.filter(x => x.naam === name)
      const index = uniqueNames.indexOf(name)
      const newArray = [false, false, false, false, false, false ,false, false, false, false]
      let newValue = newArray[index] !== true
      newArray.splice(index, 1, newValue)
      let newDiff = []
      let newFun = []
      for (var i = 0; i < uniqueTasks.length; i++) {
        newDiff.push(filteredData[i].diff)
        newFun.push(filteredData[i].fun)
        this.setState({
          diff: {what: newDiff, toShow: false, notToShow: []}, 
          fun: {what: newFun, toShow: false, notToShow: []},
          boxes: newArray
        })
      }
  }

  handleChange(mode) {
    const savedDiff = this.state.diff.notToShow
    const savedFun = this.state.fun.notToShow
    mode === "diff" ? 
    !this.state.diff.toShow ? 
    this.setState(prevState => {
      return {
      diff: {what: [], toShow: true, notToShow: prevState.diff.what}}
    }) :
    this.setState({
      diff: {what: savedDiff, toShow: false, notToShow: []}
    }) : 
    !this.state.fun.toShow ? 
    this.setState(prevState => {
      return {
      fun: {what: [], toShow: true, notToShow: prevState.fun.what}}
    }) :
    this.setState({
      fun: {what: savedFun, toShow: false, notToShow: []}
    })
  }

  handleFilterChangeSelection(pos) {
    pos === "deselect" ? 
    this.setState({
      diff: {what: [], toShow: false}, 
      fun:  {what: [], toShow: false},
      boxes: [false, false, false, false, false, false ,false, false, false, false]
    }) :
    this.setState({
      diff: {what: moderateDiff, toShow: false}, 
      fun:  {what: moderateFun, toShow: false},
      boxes: [true, true, true, true, true, true ,true, true, true, true]
    }) 
  }
  
  handleFilterChange(pos) {
      const newArray = this.state.boxes
      let newValue = newArray[pos] !== true
      newArray.splice(pos, 1, newValue)
      let indicies = []
      newArray.forEach((x, index) => {
        if(x === true) {
          indicies.push(index)
        }
      })
      let newFunTotal = []
      let newDiffTotal = []
      let count = this.state.boxes.filter(Boolean).length
      if (count === 0) {
        this.setState({
          diff: {what: [], toShow: false}, 
          fun:  {what: [], toShow: false},
          boxes: [false, false, false, false, false, false ,false, false, false, false]
        }) 
      }
      for(i = 0; i < indicies.length; i++ ) {
        newDiffTotal.push(studentDiffArray[indicies[i]])
      }
      for(i = 0; i < indicies.length; i++ ) {
        newFunTotal.push(studentFunArray[indicies[i]])
      }

      const resultFun = newFunTotal.reduce((a, b) => a.map((c, i) => c + b[i]));
      if (resultFun.length === 1) {
        console.log("nu!")
      } 
      const newModerateFun = resultFun.map(x => x/(newFunTotal.length))
      const newModerateFunRounded = newModerateFun.map(x => Math.round(x * 10) / 10 )
      const resultDiff = newDiffTotal.reduce((a, b) => a.map((c, i) => c + b[i]));
      const newModerateDiff = resultDiff.map(x => x/(newDiffTotal.length))
      const newModerateDiffRounded = newModerateDiff.map(x => Math.round(x * 10) / 10 )
      this.setState({
        diff: {what: newModerateDiffRounded, toShow: false},
        fun: {what: newModerateFunRounded, toShow: false},
        boxes: newArray
      })
  }

  handleLastBox() {
    const checkValue = this.state.boxes.filter(Boolean).length
    if(checkValue === 1) {
      return true
    }
  }
 
  render() {
    return (
      <div className="wrapper">
        <NamesList 
        names={uniqueNames} 
        handleClick={this.handleClick} 
        handleFilterChange={this.handleFilterChange}
        handleFilterChangeSelection={this.handleFilterChangeSelection}
        />
        <div className="filter-container">
          <label>
            <div className="black-box"/>: DIFF | Don't show:
            <input 
            onChange={() => this.handleChange("diff")} 
            type="checkbox" 
            id="filterbox" 
            name="toShow" 
            checked={this.state.diff.toShow}
            />
            <br></br>
          </label>
          <label>
            <div className="green-box"/>: FUN | Don't show: 
            <input 
            onChange={() => this.handleChange("fun")} 
            type="checkbox" 
            id="filterbox" 
            name="toShow" 
            checked={this.state.fun.toShow}
            />
          </label>
        </div>
        <Charts 
        values={thikValueLength} 
        format={fullData.map(x => x.opdracht)}
        dataDiff={this.state.diff.what}
        dataFun={this.state.fun.what}
        />
        <Checkboxes 
        names={uniqueNames}
        boxes={this.state.boxes} 
        handleFilterChangeSelection={this.handleFilterChangeSelection} 
        handleFilterChange={this.handleFilterChange}
        checkValue={this.handleLastBox}
        />
      </div>
    )
}
}

export default DataVerwerking

