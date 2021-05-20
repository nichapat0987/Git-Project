import React,{ useEffect,useState,route } from 'react'
import {View,Text,Dimensions,Button,StyleSheet} from 'react-native'
import coinGecko  from '../apis/coinGecko'
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart 
  } from "react-native-chart-kit";
import HistoryChart from '../features/HistoryChart';
import Card from '../features/Card'
import Crypto from './Crypto'
const CoinDetailPage = () => {
    const [coinData, setCoinData] =useState([])

     const formatData = results => {
         return results.map(el => {
             return {
                 t: el[0],
                 y: el[1],
             }
         })
     }

    useEffect (() => {
        const fetchData = async () => {
            const resultsDay = await coinGecko.get(`/coins/bitcoin/market_chart/`,{
                params: {
                    vs_currency: "usd",
                    days: "1",
                }
            })
           const results = resultsDay.data.prices
            setCoinData({
                day: formatData(results),
            });
            console.log(formatData(results))
        }
        fetchData();
    },[])

    return(
        <View style={styles.container}>
            <Card>
            <Text style={styles.header}> Bitcoin Chart</Text>
            <HistoryChart data={coinData}/>
            </Card>
        </View>
    )
}

const styles= StyleSheet.create({
    header: {
        paddingTop: '20%',
        fontSize: 25,
        paddingLeft: '27%'
    },
    container: {
        flex: 1,
        alignItems: 'center',
        paddingBottom: '100%'
    },
})

export default CoinDetailPage;