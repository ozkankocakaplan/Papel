import React from 'react'
import { Dimensions, StyleSheet, View } from 'react-native'

export default function Container(props: { children: React.ReactNode }) {
    return (
        <View style={styles.container}>
            {props.children}
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        borderTopLeftRadius: 15, borderTopRightRadius: 15,
        padding: 10,
        height: Dimensions.get('screen').height / 1.2,
        width: Dimensions.get('screen').width
    }
})