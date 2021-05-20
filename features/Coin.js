import React from 'react'
import {View,Image,Text,Button} from 'react-native';

const Coin = ({coin}) => {
    return (
        <View>
            <Image
                source={{
                    uri: 'https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579'
                }}
            />
            <Text>{coin.id}</Text>
            <Text>Current price :{coin.current_price}</Text>
            <Text>Change Percentage :{coin.price_change_percentage_24h}</Text>
            
        </View>
        )
}

export default Coin;