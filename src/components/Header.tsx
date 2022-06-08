import React from 'react'
import { faBell, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { Image, Platform, SafeAreaView, StyleSheet, Text, TouchableOpacity } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

export default function Header(props: { goNotification: () => void }) {
    const insets = useSafeAreaInsets();
    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity style={styles.profilButton}>
                <Image source={require('../../images/Photo.png')} />
            </TouchableOpacity>
            <Image source={require('../../images/logo.png')} />
            <TouchableOpacity style={styles.searchButon}>
                <FontAwesomeIcon icon={faSearch} color="#fff" size={23} />
            </TouchableOpacity>
            <TouchableOpacity onPress={props.goNotification} style={styles.notificationButon}>
                <FontAwesomeIcon icon={faBell} color="#fff" size={23} />
            </TouchableOpacity>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        height: Platform.OS === "ios" ? 100 : 65,
        justifyContent: 'center', alignItems: 'center',
        flexDirection: 'row'
    },
    profilButton: {
        position: 'absolute',
        left: 20,
        bottom: 10,
        height: 35,
        width: 35,
        borderRadius: 100,
    },
    searchButon: {
        position: 'absolute',
        bottom: 15,
        right: 55
    },
    notificationButon: {
        position: 'absolute',
        bottom: 15,
        right: 10
    }
})