import React from 'react'
import { ImageBackground, StyleSheet, Dimensions, View } from 'react-native'

interface ContainerProps {
    children: React.ReactNode,
    style?: any
}

export default function BackgroundContainer(props: ContainerProps) {
    return (
        <ImageBackground style={[styles.bgContainer, props.style]} source={require('../../images/bg.png')}>
            {props.children}
        </ImageBackground>
    )
}
export const BackgroundBlur = () => {
    return (
        <View style={{ position: 'absolute', backgroundColor: 'rgba(0,0,0,0.5)', left: 0, right: 0, bottom: 0, top: 0, zIndex: 8, elevation: 8 }}>

        </View>

    )
}
const styles = StyleSheet.create({
    bgContainer: {
        zIndex: -3, elevation: -3,
        height: Dimensions.get('screen').height,
        width: Dimensions.get('screen').width,
    }
})