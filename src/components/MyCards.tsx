import React, { useState } from 'react'
import { Dimensions, FlatList, Image, ImageBackground, StyleSheet, Text, View } from 'react-native'

export default function MyCards() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const dumpData = [{ id: 1, status: true }, { id: 2, status: false }];
    const CardBackground = (props: { cardNumber: string, cardBalance: number, favoriteCard: boolean }) => {
        return (
            <ImageBackground source={require('../../images/Bank.png')} resizeMode="contain"
                style={{ height: 200, width: Dimensions.get('screen').width - 120, marginLeft: 25, zIndex: 2 }}>
                {
                    props.favoriteCard &&
                    <View style={styles.favoriteCard}>
                        <Text style={styles.favoriteCardText}>Favori Kartım</Text>
                    </View>
                }
                <View style={styles.cardFooterInfo}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={styles.cardTitle}>Favori Kartım</Text>
                        <Text style={styles.cardBalance}>₺{props.cardBalance}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 5 }}>
                        <Text style={styles.cardNumber}>{props.cardNumber}</Text>
                        <Text style={styles.cardNumber}>Toplam Limit</Text>
                    </View>
                </View>
            </ImageBackground>
        )
    }
    return (
        <View style={{ flexDirection: 'column' }}>
            <View style={{ height: 200, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginLeft: 20 }}>
                <FlatList
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}
                    onScroll={(event) => {
                        setCurrentIndex(Math.round(event.nativeEvent.contentOffset.x / (Dimensions.get('screen').width - 120)));
                        console.log(event.nativeEvent.contentOffset.x / (Dimensions.get('window').width - 120 - 20));
                    }}
                    data={dumpData}
                    horizontal={true}
                    style={{ marginRight: 25 }}
                    bounces={false}
                    snapToInterval={Dimensions.get('screen').width}
                    renderItem={({ item }) => {
                        return <CardBackground key={item.id} favoriteCard={item.status} cardNumber='5121 **** **** 3060' cardBalance={900} />
                    }}
                />

            </View>
            <View style={{ justifyContent: 'center', alignItems: 'center', marginBottom: 10, flexDirection: 'row' }}>
                {
                    dumpData.map((item, index) => {
                        return currentIndex === index ?
                            <View key={index} style={{ width: 20, height: 5, backgroundColor: '#fff', borderRadius: 5, marginRight: 5 }}></View>
                            :
                            <View key={index} style={{ width: 5, height: 5, backgroundColor: '#fff', borderRadius: 5, marginRight: 5 }}></View>
                    })
                }
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    cardFooterInfo: {
        height: 70,
        padding: 10,
        position: 'absolute', bottom: 20,
        backgroundColor: '#FFF7E6',
        left: 5, right: 5,
        width: Dimensions.get('screen').width - 130,
        borderBottomLeftRadius: 10, borderBottomRightRadius: 10,
        flexDirection: 'column',
    },
    cardTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#141414',
    },
    cardBalance: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#141414',
    },
    cardNumber: {
        fontSize: 14,
        fontWeight: '400',
        color: '#727272',
    },
    favoriteCard: {
        backgroundColor: '#02BDD0',
        paddingLeft: 10, paddingRight: 10,
        position: 'absolute',
        right: 10, top: 25,
        borderRadius: 13, height: 30,
        justifyContent: 'center', alignItems: 'center'
    },
    favoriteCardText: {
        color: '#fff',
        fontSize: 14,
        fontWeight: 'bold'
    }
})