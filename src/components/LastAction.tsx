import React from 'react'
import moment from 'moment-with-locales-es6'
import { StyleSheet, View, Text, Image, ScrollView } from 'react-native'
moment.locale('tr')
const dumpData = [1, 2, 3, 4, 5, 6, 7]
export default function LastAction() {
    return (
        <View>
            <Text style={styles.lastActionText}>Son Hareketler</Text>

            <ScrollView
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                contentInset={{ bottom: 27 * dumpData.length }}
            >
                {
                    dumpData.map((item) => {
                        return <ActionCard
                            key={item}
                            userName='Cansu Ural'
                            processName='Giden Transfer'
                            processPrice={"100,00"}
                            processDate={new Date()}
                            processType={true}
                        />
                    })
                }
            </ScrollView>

        </View>
    )
}
const ActionCard = (props: { userImage?: string, userName: string, processName: string, processPrice: any, processType: boolean, processDate: Date }) => {
    return (
        <View style={styles.cardContainer}>
            <View style={styles.userInfo}>
                <Image source={props.userImage != null ? { uri: props.userImage } : require('../../images/UserPhoto.png')} style={{ height: 40, width: 40 }} />
                <View style={{ flexDirection: 'column', justifyContent: 'space-around', marginLeft: 10 }}>
                    <Text style={styles.userNameText}>{props.userName}</Text>
                    <Text style={styles.userProcessText}>{props.processName}</Text>
                </View>
            </View>
            <View style={styles.userBalanceInfo}>
                <Text style={{ ...styles.userBalanceText, color: props.processType ? "#48BF24" : "#D63333" }}>{`${props.processType ? "+" : "-"}₺${props.processPrice}`}</Text>
                <Text style={styles.userProcessDate}>{moment(props.processDate).format('DD.MMM dd, HH:mm')}</Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    lastActionText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#141414'
    },
    cardContainer: {
        height: 70,
        borderBottomColor: '#e7e7e7',
        borderBottomWidth: 1,
        paddingBottom: 15, paddingTop: 15,
        flexDirection: 'row',
    },
    userInfo: {
        flex: 2,
        flexDirection: 'row',
    },
    userBalanceInfo: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'flex-end',
    },
    userNameText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#141414'
    },
    userProcessText: {
        fontSize: 13,
        color: '#727272',
        fontWeight: '400'
    },
    userBalanceText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    userProcessDate: {
        fontSize: 13,
        color: '#727272',
        fontWeight: '400'
    }
})
