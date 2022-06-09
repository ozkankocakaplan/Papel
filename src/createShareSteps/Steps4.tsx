import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'

export default function Steps4(props: { navigation: any, handleFormCheck: (data: boolean) => void }) {
    return (
        <View style={styles.container}>
            <Text style={styles.headerTitle}>Bölüş hesabı için size para gönderecek kişileri seçin.</Text>
            <View>
                <FontAwesomeIcon style={styles.searchIcon} color="#b8b8b8" size={15} icon={faSearch} />
                <TextInput placeholder='Kişi Ara' style={styles.textInput} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        marginLeft: 10, marginRight: 10,
    },
    headerTitle: {
        marginTop: 20, marginBottom: 30,
        lineHeight: 18,
        fontWeight: '400',
        fontSize: 16,
        color: '#141414',
        textAlign: 'center'
    },
    searchIcon: {
        position: 'absolute',
        left: 15,
        top: 12
    },
    textInput: {
        height: 40,
        borderWidth: 1, borderColor: '#e7e7e7',
        borderRadius: 10,
        color: '#141414',
        paddingLeft: 35, paddingRight: 50,
        fontSize: 14,
        fontWeight: '400'
    }
})