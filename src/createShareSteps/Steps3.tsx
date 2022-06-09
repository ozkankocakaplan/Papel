import { faCircleExclamation, faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import DropDown from '../components/DropDown'
import { SelectedAccount } from './Steps1'

export default function Steps3(props: { navigation: any, handleFormCheck: (data: boolean) => void }) {
    return (
        <View style={styles.container}>
            <Text style={styles.headerTitle}>Bölüş hesabı için size para gönderecek kişileri seçin.</Text>
            {/* <View>
                <FontAwesomeIcon style={styles.searchIcon} color="#b8b8b8" size={15} icon={faSearch} />
                <TextInput placeholder='Harcama Ara' style={styles.textInput} />
            </View> */}
            <Text style={styles.col1Title}>Hesap Seçimi</Text>
            <SelectedAccount handlePress={() => console.log("step3")} />
            <Text style={styles.col2Title}>Tutar Bilgisi</Text>
            <View style={styles.orderInfo}>
                <View style={{ paddingLeft: 5 }}>
                    <FontAwesomeIcon icon={faCircleExclamation} color="#934C29" />
                </View>
                <Text style={styles.orderInfoText}>Kişilerin ödeyecekleri miktarı girin.</Text>
            </View>
            <View style={{ flexDirection: 'row', marginTop: 20 }}>
                <View style={{ flex: .5 }}>
                    <DropDown title='' selectedData={"TRY"} data={["TRY"]} handleChangeData={() => console.log("a")} />
                </View>
                <View style={{ flex: 1 }}></View>
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
    },
    col1Title: {
        color: '#141414',
        fontWeight: 'bold',
        fontSize: 18,
    },
    col2Title: {
        marginTop: 30,
        color: '#141414',
        fontWeight: 'bold',
        fontSize: 18,
    },
    orderInfo: {
        borderRadius: 5,
        alignItems: 'center',
        backgroundColor: '#FFECCD',
        height: 30,
        flexDirection: 'row',
        padding: 5,
        marginTop: 10,
    },
    orderInfoText: {
        color: '#934C29',
        fontSize: 12,
        fontWeight: '400',
        paddingLeft: 5,
    }
})