import React,{ useRef } from 'react'
import {View,Image,Text,Button,Dimensions,StyleSheet} from 'react-native';
import { max } from 'react-native-reanimated';
import { VictoryBar, VictoryChart, VictoryTheme, VictoryLine, VictoryLabel, VictoryAxis } from "victory-native";
import { HistoryStyles } from './HistoryStyles';
import Card from '../features/Card'

const HistoryChart = ({data}) => {
  const {day} = data;
  console.log(day)
  
    return (
      
        <View style={styles.container}>
        <VictoryChart  width={350} theme={HistoryStyles}>
          <VictoryLine data={day} x="t" y="y" />
          <VictoryAxis 
          dependentAxis tickFormat={(y) => y}
          />
          <VictoryAxis 
          tickFormat={(x) => new Date(x).getHours() + ':' + new Date(x).getMinutes()}
          />
        </VictoryChart>
        </View>
      
        )
  }
const styles = StyleSheet.create({
  container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
})

export default HistoryChart;