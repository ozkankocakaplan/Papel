import React from 'react'
import { ImageBackground, StyleSheet, Dimensions } from 'react-native'

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

const styles = StyleSheet.create({
    bgContainer: {

        height: Dimensions.get('screen').height,
        width: Dimensions.get('screen').width,
    }
})