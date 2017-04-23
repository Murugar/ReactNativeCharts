'use strict'

import React, { Component } from 'react';
import { View, Text, Navigator } from 'react-native';

import { Pie } from 'react-native-pathjs-charts'

class PieChartBasic extends Component {
  render() {
    let data = [{
      "name": "Washington",
      "population": 7694980
      ,
      "color": {
        'r': 223,
        'g': 100,
        'b': 100
      }
    }, {
      "name": "Oregon",
      "population": 5584160
    }, {
      "name": "Minnesota",
      "population": 6590667,
      "color": {
        'r': 223,
        'g': 154,
        'b': 20
      }
    }, {
      "name": "Alaska",
      "population": 7284698
    }, {
      "name": "Utah",
      "population": 7284698
    }, {
      "name": "San Francisco",
      "population": 7284698
    }, {
        "name": "Los Angeles",
        "population": 7284698
      }]

    let options = {
      margin: {
        top: 20,
        left: 20,
        right: 20,
        bottom: 20
      },
      width: 500,
      height: 500,
      color: '#2980B9',
      r: 50,
      R: 150,
      legendPosition: 'topLeft',
      animate: {
        type: 'oneByOne',
        duration: 200,
        fillTransition: 3
      },
      label: {
        fontFamily: 'Arial',
        fontSize: 12,
        fontWeight: true,
        color: '#ECF0F1'
      }
    }

    return (
      <View>
        <Pie data={data}
      options={options}
      accessorKey="population"
      margin={{
        top: 20,
        left: 20,
        right: 20,
        bottom: 20
      }}
      color="#2980B9"
      pallete={
      [
        {
          'r': 25,
          'g': 99,
          'b': 201
        },
        {
          'r': 24,
          'g': 175,
          'b': 35
        },
        {
          'r': 190,
          'g': 31,
          'b': 69
        },
        {
          'r': 100,
          'g': 36,
          'b': 199
        },
        {
          'r': 214,
          'g': 207,
          'b': 32
        },
        {
          'r': 198,
          'g': 84,
          'b': 45
        }
      ]
      }
      r={50}
      R={200}
      legendPosition="topLeft"
      label={{
        fontFamily: 'Arial',
        fontSize: 10,
        fontWeight: true,
        color: '#ECF0F1'
      }}
      />
      </View>
    )
  }
}

export default PieChartBasic;
