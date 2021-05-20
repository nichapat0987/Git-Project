import React,{useEffect, useState,useContext} from 'react';
import {View} from 'react-native';
import coinGecko from '../apis/coinGecko';
import { WatchListContext } from '../context/watchListContext';
import Coin from "./Coin"

const CoinList = () => {
    const [coins, setCoins] = useState([]);
    const {watchList} = useContext(WatchListContext)
    const [isLoading, setIsLoading] = useState(false)
    console.log(watchList);
   
    useEffect(()=> {
        const fetchData = async () => {
            setIsLoading(true)
            const response = await coinGecko.get("/coins/markets", {
                params: {
                    vs_currency: "usd",
                    ids: watchList.join(","),
                }
            })
            setCoins(response.data)
            setIsLoading(false)
        };
        fetchData()
    },[])
    
    const renderCoins = () => {
        if(isLoading){
            return
            <Text>Loading ...</Text> 
        }
        return (
            <View>
            {coins.map(coin => {
                return <Coin key={coin.id} coin={coin}/>
            })}
            </View>
        )
    }
    return (
        <View>
            {renderCoins()}
        </View>
    )
}

export default CoinList;