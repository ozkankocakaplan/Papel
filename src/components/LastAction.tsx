import React from 'react'
import moment from 'moment-with-locales-es6'
import { StyleSheet, View, Text, Image } from 'react-native'
moment.locale('tr')
export default function LastAction() {
    return (
        <View style={styles.container}>
            <Text style={styles.lastActionText}>Son Hareketler</Text>
            <ActionCard
                userName='Cansu Ural'
                processName='Giden Transfer'
                processPrice={100}
                processDate={new Date()}
                processType={true}
            />
            <ActionCard
                userName='Cansu Ural'
                processName='Giden Transfer'
                processPrice={100}
                processDate={new Date()}
                processType={false}
            />
            <ActionCard
                userName='Cansu Ural'
                processName='Giden Transfer'
                processPrice={100}
                processDate={new Date()}
                processType={true}
            />
            <ActionCard
                userName='Cansu Ural'
                processName='Giden Transfer'
                processPrice={100}
                processDate={new Date()}
                processType={true}
            />
        </View>
    )
}
const ActionCard = (props: { userName: string, processName: string, processPrice: number, processType: boolean, processDate: Date }) => {
    return (
        <View style={styles.cardContainer}>
            <View style={styles.userInfo}>
                <Image source={require('../../images/UserPhoto.png')} style={{ height: 40, width: 40 }} />
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
    container: {
        flex: 1,
        marginTop: 20, marginBottom: 20,
    },
    lastActionText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#141414'
    },
    cardContainer: {
        flex: 1,
        height: 70,
        borderBottomColor: '#e7e7e7',
        borderBottomWidth: 1,
        paddingTop: 15, paddingBottom: 15,
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
