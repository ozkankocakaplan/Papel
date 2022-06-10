import React, { useEffect } from 'react'
import { StyleSheet, Text, View, TextInput, Platform, Dimensions } from 'react-native'
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'

import { SelectedAccount } from './Steps1'
import CurrencyDropDown from '../components/CurrencyDropDown'


import { useSelector, useDispatch } from 'react-redux';
import { AppState } from '../store'
import actionTypes from '../store/redux/actions/actionTypes'
import MaskInput, { createNumberMask } from 'react-native-mask-input'
import FormContainer from '../components/FormContainer'
import { ScrollView } from 'react-native-gesture-handler'
import { footerButonStyles } from '../screens/CreateShare'
import Button from '../components/Button'
const currencyData = ["TRY", "USD", "EUR"]
export default function Steps3(props: { navigation: any, goStep: () => void }) {
    const { shareAccount } = useSelector((state: AppState) => state.expenses)
    const dispatch = useDispatch();
    const tlMask = createNumberMask({
        prefix: [''],
        delimiter: '.',
        separator: ',',
        precision: 2,
    })
    useEffect(() => {

    }, [dispatch, shareAccount])
    const goButton = () => {
        if (shareAccount.totalPrice.unmasked != 0) {
            props.goStep();
        }
        else {
            //
        }
    }
    return (
        <View style={styles.container}>
            <ScrollView
                key={"currentStep"}
                showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false} contentInset={{ bottom: 30 }}>
                <View style={{ flex: 1 }}>
                    <FormContainer>

                        <Text style={styles.headerTitle}>Bölüş hesabı için size para gönderecek kişileri seçin.</Text>
                        {/* <View>
        <FontAwesomeIcon style={styles.searchIcon} color="#b8b8b8" size={15} icon={faSearch} />
        <TextInput placeholder='Harcama Ara' style={styles.textInput} />
    </View> */}
                        <Text style={styles.col1Title}>Hesap Seçimi</Text>
                        <SelectedAccount handlePress={() => console.log("step3")} />
                        <Text style={styles.col2Title}>Tutar Bilgisi</Text>
                        <View style={[styles.orderInfo, { zIndex: -1, elevation: -1 }]}>
                            <View style={{ paddingLeft: 5 }}>
                                <FontAwesomeIcon icon={faCircleExclamation} color="#934C29" />
                            </View>
                            <Text style={styles.orderInfoText}>Kişilerin ödeyecekleri miktarı girin.</Text>
                        </View>
                        <View style={styles.priceContainer}>
                            <View style={{ flex: .4, borderRightWidth: 1, borderRightColor: '#e7e7e7' }}>
                                <CurrencyDropDown title='Currency' selectedData={shareAccount.currencyFormat} data={currencyData} handleChangeData={(data) => {
                                    dispatch({ type: actionTypes.UPDATE_SHAREACCOUNT, payload: { ...shareAccount, currencyFormat: data } })
                                }} />
                            </View>
                            <View style={{ flex: 1 }}>
                                <Text style={styles.inputLabel}>Tutar</Text>
                                <MaskInput
                                    style={styles.textInput}
                                    value={shareAccount.totalPrice.masked}
                                    mask={tlMask}
                                    onChangeText={(masked, unmasked) => {
                                        dispatch({ type: actionTypes.UPDATE_SHAREACCOUNT, payload: { ...shareAccount, totalPrice: { masked, unmasked } } })
                                    }}
                                />
                            </View>
                        </View>

                    </FormContainer>
                </View>
            </ScrollView>
            <View style={footerButonStyles.footerButonContainer}>
                <Button
                    onPress={goButton}
                    activeOpacity={.7}
                    butonStyle={{ marginBottom: 20, backgroundColor: '#3D21A2' }}
                    textStyle={{ color: '#fff' }}
                    title="Devam Et"
                />
                <Button
                    activeOpacity={.7}
                    butonStyle={{ marginBottom: 20 }}
                    title="Vazgeç"
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    priceContainer: {
        borderWidth: 1,
        borderColor: '#e7e7e7',
        borderRadius: 5,
        flexDirection: 'row',
        marginTop: 20,
        height: 50
    },
    container: {
        flex: 1,
        flexDirection: 'column',
        marginLeft: 10, marginRight: 10,
        marginBottom: Platform.OS === 'android' ? 30 : 0
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
    inputLabel: {
        color: '#3D21A2',
        fontSize: 13,
        letterSpacing: 0,
        fontWeight: '400',
        position: 'absolute',
        left: 15, top: 5,
    },
    textInput: {
        height: 50,
        paddingTop: 15,
        paddingLeft: 15, paddingRight: 50,
        fontSize: 16,
        color: '#141414',
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
    },

})