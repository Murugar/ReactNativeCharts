'use strict'

import React, { Component } from 'react';
import { View, Text, Navigator } from 'react-native';

import { StockLine } from 'react-native-pathjs-charts'

class StockLineChartStaticTickLabels extends Component {
  render() {
    let data = [
      [{
        "x": 0,
        "y": 47782
      }, {
        "x": 1,
        "y": 48497
      }, {
        "x": 2,
        "y": 77128
      }, {
        "x": 3,
        "y": 73413
      }, {
        "x": 4,
        "y": 58257
      }, {
        "x": 5,
        "y": 40579
      }, {
        "x": 6,
        "y": 72893
      }]
    ]
    let options = {
      width: 400,
      height: 400,
      color: '#2980B9',
      margin: {
        top: 10,
        left: 35,
        bottom: 30,
        right: 10
      },
      animate: {
        type: 'delayed',
        duration: 200
      },
      axisX: {
        showAxis: true,
        showLines: true,
        showLabels: true,
        showTicks: true,
        zeroAxis: false,
        orient: 'bottom',
        tickValues: [
          {value:'name1'},
          {value:'name2'},
          {value:'name3'},
          {value:'name4'},
          {value:'name5'},
          {value:'name6'},
          {value:'name7'}
        ],
        label: {
          fontFamily: 'Tahoma',
          fontSize: 12,
          fontWeight: true,
          fill: 'red'
        }
      },
      axisY: {
        showAxis: true,
        showLines: true,
        showLabels: true,
        showTicks: true,
        zeroAxis: false,
        orient: 'left',
        tickValues: [],
        label: {
          fontFamily: 'Arial',
          fontSize: 12,
          fontWeight: true,
          fill: 'red'
        }
      }
    }

    return (
      <View>
        <StockLine data={data} options={options} xKey='x' yKey='y' />
      </View>
    )
  }
}

export default StockLineChartStaticTickLabels;
