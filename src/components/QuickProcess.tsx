import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import React from 'react'
import { FlatList, TouchableOpacity, View, Text, StyleSheet } from 'react-native'


const QuickProcess = () => {
    const RequestButonContainer = (props: { request: string }) => {
        return (
            <TouchableOpacity
                activeOpacity={.7}
                style={requestStyle.requestButonContainer}>
                <View style={{ flexDirection: 'column', marginRight: 20 }}>
                    <Text style={requestStyle.requestButonTextTitle}>{props.request}</Text>
                    <Text style={requestStyle.requestButonTextBody}>Talep Et</Text>
                </View>
                <FontAwesomeIcon icon={faAngleRight} color="#3D21A2" size={18} />
            </TouchableOpacity>
        )
    }
    return (
        <FlatList
            key={"1"}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            horizontal={true}
            data={["Para İste", "Abimden Para İste", "Ablamdan Para İste"]}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item, index }) => <RequestButonContainer request={item} key={index} />}
        />
    )
}
export const QuickProcessHeader = () => {
    return (
        <View style={requestStyle.quickProcessHeaderContainer}>
            <Text style={requestStyle.quickProcessText}>Hızlı İşlemler</Text>
            <TouchableOpacity
                activeOpacity={.7}
            >
                <Text style={requestStyle.allButonText}>Tümünü Gör</Text>
            </TouchableOpacity>
        </View>
    )
}

const requestStyle = StyleSheet.create({
    requestButonContainer: {
        borderWidth: 1,
        borderColor: '#DED2FA',
        borderRadius: 8,
        padding: 10,
        height: 66,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row', marginRight: 15
    },
    requestButonTextTitle: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#141414'
    },
    requestButonTextBody: {
        fontSize: 12,
        fontWeight: '400',
        color: '#727272'
    },
    quickProcessHeaderContainer: {
        margin: 5,
        paddingTop: 15, paddingBottom: 15,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    quickProcessText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#141414'
    },
    allButonText: {
        color: '#3D21A2',
        fontSize: 15,
        fontWeight: 'bold',
    },
})
export default QuickProcess;