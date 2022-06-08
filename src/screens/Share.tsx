import React from 'react'
import { Dimensions, ImageBackground, SafeAreaView } from 'react-native'

export default function Share() {
    return (
        <ImageBackground source={require("../../images/bg.png")}
            style={{ height: Dimensions.get('screen').height, width: Dimensions.get('screen').width }}>

        </ImageBackground>
    )
}
