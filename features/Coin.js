import React from 'react'
import {View,Image,Text,Button,StyleSheet} from 'react-native';

const Coin = ({coin}) => {
    
    return (
        <View>
            <Image
                source={{
                    uri: 'https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579'
                }}
            />
            <View style={styles.fontid}>
                <Text style={{textAlign: 'center'}}>{coin.id}</Text>
            </View>
            <Text>Current price :  ${coin.current_price}</Text>
            <Text style={{
                color: coin.price_change_percentage_24h >= 0 ? "green" : "red",
                textAlign: 'center'
                }}>{coin.price_change_percentage_24h}%</Text>
            
        </View>
        )
}

const styles = StyleSheet.create({
    fontid: {
        alignItems: 'center'
        
    },
})

export default Coin;