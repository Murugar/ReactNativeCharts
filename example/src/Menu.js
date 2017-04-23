
'use strict'

import React, { Component } from 'react';
import {
  Dimensions,
  StyleSheet,
  ScrollView,
  View,
  Image,
  Text,
} from 'react-native';

const window = Dimensions.get('window');

const styles = StyleSheet.create({
  menu: {
    flex: 1,
    width: window.width,
    height: window.height,
    backgroundColor: '#ffe7e7',
    padding: 20,
    paddingTop: 40,
  },
  group: {
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    paddingTop: 5,
    marginTop: 10,
  },
  item: {
    fontSize: 14,
    fontWeight: '300',
    color: '#0000ff',
    paddingTop: 5,
  },
  subitem: {
    fontSize: 12,
    fontWeight: '300',
    color: '#ff00bb',
    paddingTop: 5,
    paddingLeft: 20,
  },
});

class Menu extends Component {
  static propTypes = {
    onItemSelected: React.PropTypes.func.isRequired,
  };

  render() {
    return (
      <ScrollView scrollsToTop={false} style={styles.menu}>
        <Text
          onPress={() => this.props.onItemSelected('Home')}
          style={styles.item}>
          Home
        </Text>

        {/*Start Bar Charts*/}
        <View style={styles.group}>
          <Text style={styles.item}>
            Bar Charts
          </Text>
          <Text
            onPress={() => this.props.onItemSelected('BarChartColumnBasic')}
            style={styles.subitem}>
            Basic Bar Chart
          </Text>
        </View>
        {/*End Bar Charts*/}

        {/*Start Pie Charts*/}
        <View style={styles.group}>
          <Text style={styles.item}>
            Pie Charts
          </Text>
          <Text
            onPress={() => this.props.onItemSelected('PieChartBasic')}
            style={styles.subitem}>
            Basic Pie
          </Text>
        </View>
        {/*End Pie Charts*/}

        {/*Start StockLine Charts*/}
        <View style={styles.group}>
          <Text style={styles.item}>
            StockLine Charts
          </Text>
          <Text
            onPress={() => this.props.onItemSelected('StockLineChartBasic')}
            style={styles.subitem}>
            Basic StockLine
          </Text>
          <Text
            onPress={() => this.props.onItemSelected('StockLineChartStaticTickLabels')}
            style={styles.subitem}>
            StockLine w/Static Tick Labels
          </Text>
          <Text
            onPress={() => this.props.onItemSelected('StockLineChartDynamicTickLabels')}
            style={styles.subitem}>
            StockLine w/Dynamic Tick Labels
          </Text>
        </View>
        {/*End StockLine Charts*/}

        {/*Start SmoothLine Charts*/}
        <View style={styles.group}>
          <Text style={styles.item}>
            SmoothLine Charts
          </Text>
          <Text
            onPress={() => this.props.onItemSelected('SmoothLineChartBasic')}
            style={styles.subitem}>
            Basic SmoothLine
          </Text>
          <Text
            onPress={() => this.props.onItemSelected('SmoothLineChartRegions')}
            style={styles.subitem}>
            SmoothLine w/Region Bands
          </Text>
          <Text
            onPress={() => this.props.onItemSelected('SmoothLineChartRegionsExtended')}
            style={styles.subitem}>
            Extended SmoothLine w/Region Bands
          </Text>
        </View>
        {/*End SmoothLine Charts*/}

        {/*Start Scatterplot Charts*/}
        <View style={styles.group}>
          <Text style={styles.item}>
            Scatterplot Charts
          </Text>
          <Text
            onPress={() => this.props.onItemSelected('ScatterplotChartBasic')}
            style={styles.subitem}>
            Basic Scatterplot
          </Text>
        </View>
        {/*End Scatterplot Charts*/}

        {/*Start Radar Charts*/}
        <View style={styles.group}>
          <Text style={styles.item}>
            Radar Charts
          </Text>
          <Text
            onPress={() => this.props.onItemSelected('RadarChartBasic')}
            style={styles.subitem}>
            Basic Radar
          </Text>
        </View>
        {/*End Radar Charts*/}

        {/*Start Tree Charts*/}
        <View style={styles.group}>
          <Text style={styles.item}>
            Tree Charts
          </Text>
          <Text
            onPress={() => this.props.onItemSelected('TreeChartBasic')}
            style={styles.subitem}>
            Basic Tree
          </Text>
        </View>
        {/*End Tree Charts*/}
      </ScrollView>
    );
  }
}

export default Menu;
