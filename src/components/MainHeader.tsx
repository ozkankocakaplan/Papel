import { faAngleLeft, faGear } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'

interface ButtonProps {
    title: string,
    icon1?: any,
    icon2?: any,
    titleStyle?: any,
    leftonPress?: () => void,
    rightonPress?: () => void,
}

const MainHeader: React.FC<ButtonProps> = ({ title, icon1, icon2, titleStyle, leftonPress, rightonPress }) => {
    return (
        <View style={styles.container}>
            {leftonPress != null && <TouchableOpacity onPress={leftonPress} style={styles.iconLeftContainer}>
                <FontAwesomeIcon icon={icon1 === undefined ? faAngleLeft : icon1} color={'#fff'} size={35} />
            </TouchableOpacity>}
            <Text style={[styles.titleText, titleStyle]}>{title}</Text>
            {rightonPress != null && <TouchableOpacity onPress={rightonPress} style={styles.iconRightContainer}>
                <FontAwesomeIcon icon={icon2 === undefined ? faGear : icon2} color={'#fff'} size={28} />
            </TouchableOpacity>}
        </View>
    )
}
export default MainHeader;
const styles = StyleSheet.create({
    container: {
        height: 60,
        flexDirection: 'row',
        justifyContent: 'center', alignItems: 'center'
    },
    iconLeftContainer: {
        position: 'absolute',
        left: 20
    },
    iconRightContainer: {
        position: 'absolute',
        right: 20
    },
    titleText: {
        fontSize: 16,
        color: '#fff', fontWeight: 'bold'
    }
})