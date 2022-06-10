import React, { useState } from 'react'
import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import AccountDropDown from '../components/AccountDropDown'
import Button from '../components/Button'
import Checkbox from '../components/Checkbox'

import { useSelector, useDispatch } from 'react-redux';
import { AppState } from '../store'
import actionTypes from '../store/redux/actions/actionTypes'
import DropDown from '../components/DropDown'
const accountData = ["Birikim", "Alışveriş"];
export default function Steps1(props: { navigation: any, handleGoStep: () => void }) {
    const { account } = useSelector((state: AppState) => state.expenses);
    const [checked, setChecked] = useState<boolean>(false);

    const dispatch = useDispatch();
    const handleCheck = () => {
        return checked && account.accountType.length != 0 && account.accountName.length != 0 ? true : false
    }
    return (
        <View style={{ flex: 1 }}>
            <View style={{ height: 50, justifyContent: 'center' }}>
                <Text style={styles.headerTitle}>Yeni hesap açmak için aşağıdaki bilgileri doldurun.</Text>
            </View>
            <ScrollView contentContainerStyle={{ justifyContent: 'flex-start', flex: 1, padding: 5 }}
                key={"currentStep"}
                showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false} contentInset={{ bottom: 30 }}>
                <View style={styles.currencyInputInfo}>
                    <Text style={styles.currencyInfoText}>Para Birimi</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        {/* <Image style={{ height: 20, width: 20 }} source={require('../../images/Photo.png')} /> */}
                        {/* <Text>🇹🇷</Text> */}
                        <Text style={styles.currencyText}>{account.accountCurrency === "TRY" ? "Türk Lirasi" : "Amerikan Doları"} ({account.accountCurrency})</Text>
                    </View>
                </View>
                <TextInput
                    value={account.accountName}
                    onChangeText={(text) => {
                        dispatch({ type: actionTypes.UPDATE_ACCOUNT, payload: { ...account, accountName: text } })
                    }}
                    placeholder='Hesap Adı' style={styles.textInput} />
                <View style={{ marginTop: 15, height: 50 }}>
                    <DropDown height={55} data={accountData} title="Hesap Açılış Amacı (opsiyonel)" selectedData={account.accountType}
                        handleChangeData={(data) => {
                            dispatch({ type: actionTypes.UPDATE_ACCOUNT, payload: { ...account, accountType: data } })
                        }} />
                </View>
            </ScrollView>
            <View style={{ margin: 15 }}>
                <Checkbox checkhed={checked} onPress={() => setChecked(!checked)} activeOpacity={.7} />
            </View>
            <View style={styles.footerButonContainer}>
                <Button
                    onPress={() => {
                        if (handleCheck()) {
                            props.handleGoStep()
                        }
                    }}
                    activeOpacity={.7}
                    butonStyle={{ marginBottom: 20, backgroundColor: '#3D21A2' }}
                    textStyle={{ color: '#fff' }}
                    title="Devam Et"
                />
                <Button
                    onPress={() => props.navigation.goBack()}
                    activeOpacity={.7}
                    butonStyle={{ marginBottom: 20 }}
                    title="Vazgeç"
                />
            </View>
        </View>

    )
}
const styles = StyleSheet.create({
    currencyInputInfo: {
        height: 50,
        backgroundColor: '#f3f3f3',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row', marginBottom: 15,
    },
    currencyInfoText: {
        fontSize: 15,
        fontWeight: '400',
        color: '#727272'
    },
    currencyText: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#141414',
        paddingLeft: 5
    },
    textInput: {
        borderWidth: 1, borderColor: '#e7e7e7',
        borderRadius: 10,
        fontSize: 16,
        color: '#141414',
        padding: 15
    },
    headerTitle: {
        fontSize: 15,
        lineHeight: 18,
        fontWeight: '400',
        textAlign: 'center',
        color: '#141414',
    },
    footerButonContainer: {
        padding: 15,
        backgroundColor: '#fff',

    }
})
