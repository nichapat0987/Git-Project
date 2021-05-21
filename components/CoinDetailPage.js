import React,{ useEffect,useState,route } from 'react'
import {View,Text,Dimensions,Button,StyleSheet,ImageBackground} from 'react-native'
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
import CoinList from '../features/CoinList'
import bgimage from '../picture/Pastel-Sky.jpeg'

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
        <ImageBackground source={bgimage} style={styles.image}>
        <View style={styles.container}>
            <View style={styles.header}>
                <Card>
                    <CoinList/>
                </Card>
            </View>

            <View style={styles.Graph}>
                <View style={styles.Graphblock}>
                <HistoryChart data={coinData}/>
                </View>
            </View>

            {/* <View style = {styles.graphcontainer}>
                <HistoryChart data={coinData}/>
            </View> */}

        </View>
        </ImageBackground>
    )
}

const styles= StyleSheet.create({
    header: {
        paddingTop: '20%',
    },
    container: {
        flex: 1,
        alignItems: 'center',
        paddingBottom: '100%'
    },
    graphcontainer: {
        flex: 1,
        alignItems: 'center',
        paddingLeft: 10
    },
    image: {
        justifyContent: 'center',
        width: '100%',
        height: '100%'
    },
    Graph: {
        borderRadius: 50,
        elevation: 3,
        backgroundColor: '#fff',
        shadowOffset: {width: 1, height: 1},
        shadowOpacity: 0.3,
        shadowRadius: 2,
        marginHorizontal: 4,
        marginVertical: '20%',
        opacity: 0.8,
    },
    Graphblock: {
        marginHorizontal: 18,
        marginVertical: 10,
    }
})

export default CoinDetailPage;