'use strict'

import React, { Component } from 'react'
import { View, } from 'react-native'
import { StockLine } from 'react-native-pathjs-charts'
import moment from 'moment'

class StockLineChartDynamicTickLabels extends Component {
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
      }]
    ]
    let options = {
      width: 425,
      height: 425,
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
        tickValues: [],
        labelFunction: ((v) => {
          let d = moment('2016-10-08 14:00','HH:mm')
          return d.add((v * 2),'hours').format('[\n]h:mm A')
        }),
        label: {
          fontFamily: 'Tahoma',
          fontSize: 10,
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
          fontFamily: 'Tahoma',
          fontSize: 10,
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

export default StockLineChartDynamicTickLabels;
