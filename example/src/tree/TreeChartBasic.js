

'use strict'

import React, { Component } from 'react';
import { View, Text, Navigator } from 'react-native';

import { Tree } from 'react-native-pathjs-charts'

class TreeChartBasic extends Component {
  render() {
    let data = {
      "name": "Root",
      "children": [{
        "name": "Santa Catarina",
        "children": [{
          "name": "Tromp"
        }, {
          "name": "Thompson"
        }, {
          "name": "Ryan"
        }
        , {
            "name": "David"
          }]
      }, {
        "name": "Acre",
        "children": [{
          "name": "Dicki"
        }, {
          "name": "Armstrong"
        }, {
          "name": "Nitzsche"
        }, {
            "name": "Williams"
          }]
      }]
    }

    let options = {
      margin: {
        top: 20,
        left: 50,
        right: 80,
        bottom: 20
      },
      width: 200,
      height: 200,
      fill: "red",
      stroke: "red",
      r: 2,
      animate: {
        type: 'oneByOne',
        duration: 200,
        fillTransition: 3
      },
      label: {
        fontFamily: 'Arial',
        fontSize: 14,
        fontWeight: true,
        fill: 'red'
      }
    }

    return (
      <View>
        <Tree data={data} options={options}  />
      </View>
    )
  }
}

export default TreeChartBasic;
