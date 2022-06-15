import { faAngleLeft, faGear } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity, ImageBackground, Image, Dimensions, SafeAreaView } from 'react-native'

interface ButtonProps {
    title: string,
    icon1?: any,
    icon2?: any,
    titleStyle?: any,
    bgHeader?: any,
    leftonPress?: () => void,
    rightonPress?: () => void,
}

const MainHeader: React.FC<ButtonProps> = ({ title, icon1, icon2, titleStyle, bgHeader, leftonPress, rightonPress }) => {
    return (
        <SafeAreaView style={[styles.container, bgHeader == null  && { flex: 1 }]}>
            {
                bgHeader == null  &&
                <View style={{ position: 'absolute', left: 0, right: 0, top: 0, bottom: 0 }}>
                    <Image source={require('../../images/mainHeader.png')} style={{ resizeMode: 'contain' }} />
                </View>
            }
            {leftonPress != null && <TouchableOpacity onPress={leftonPress} style={[styles.iconLeftContainer, bgHeader == null &&  { bottom: 20 }]}>
                <FontAwesomeIcon icon={icon1 === undefined ? faAngleLeft : icon1} color={'#fff'} size={35} />
            </TouchableOpacity>}
            <Text style={[styles.titleText, titleStyle]}>{title}</Text>
            {rightonPress != null && <TouchableOpacity onPress={rightonPress} style={[styles.iconRightContainer, bgHeader == null && { bottom: 20 }]}>
                <FontAwesomeIcon icon={icon2 === undefined ? faGear : icon2} color={'#fff'} size={28} />
            </TouchableOpacity>}

        </SafeAreaView>
    )
}
export default MainHeader;
const styles = StyleSheet.create({
    container: {
        height: 60,
        flexDirection: 'row',
        justifyContent: 'center', alignItems: 'center',
    },
    iconLeftContainer: {
        position: 'absolute',
        left: 20
    },
    iconRightContainer: {
        position: 'absolute',
        right: 20,

    },
    titleText: {
        fontSize: 16,
        color: '#fff', fontWeight: 'bold'
    }
})