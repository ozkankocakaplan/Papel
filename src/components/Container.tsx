import React from 'react'
import { Dimensions, StyleSheet, View } from 'react-native'

export default function Container(props: { children: React.ReactNode, valueHeight: number }) {
    return (
        <View style={{ ...styles.container, height: Dimensions.get('screen').height / props.valueHeight, }}>
            {props.children}
        </View>
    )
}
export const Notch = (props: { width: number, extraStyle?: any }) => {
    return (
        <View style={{ justifyContent: 'center', alignItems: 'center', }}>
            <View style={[{ height: 2, backgroundColor: '#e7e7e7', borderRadius: 2, width: props.width }, props.extraStyle]}></View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        borderTopLeftRadius: 15, borderTopRightRadius: 15,
        padding: 10,
        width: Dimensions.get('screen').width
    }
})