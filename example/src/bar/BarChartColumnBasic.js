'use strict'

import React, { Component } from 'react';
import { View, Text, Navigator } from 'react-native';

import { Bar } from 'react-native-pathjs-charts'

class BarChartColumnBasic extends Component {
  render() {
    let data = [
      [{
        "v": 49,
        "name": "apple"
      }, {
        "v": 42,
        "name": "apple"
      }],
      [{
        "v": 69,
        "name": "banana"
      }, {
        "v": 62,
        "name": "banana"
      }],
      [{
        "v": 29,
        "name": "grape"
      }, {
        "v": 15,
        "name": "grape"
      }]
    ]

    let options = {
      width: 400,
      height: 400,
      margin: {
        top: 20,
        left: 25,
        bottom: 50,
        right: 20
      },
      color: '#4980B9',
      gutter: 20,
      animate: {
        type: 'oneByOne',
        duration: 200,
        fillTransition: 3
      },
      axisX: {
        showAxis: true,
        showLines: true,
        showLabels: true,
        showTicks: true,
        zeroAxis: false,
        orient: 'bottom',
        label: {
          fontFamily: 'Arial',
          fontSize: 14,
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
        label: {
          fontFamily: 'Arial',
          fontSize: 14,
          fontWeight: true,
          fill: 'red'
        }
      }
    }

    return (
      <View>
        <Bar data={data} options={options} accessorKey='v'/>
      </View>
    )
  }
}

export default BarChartColumnBasic;
