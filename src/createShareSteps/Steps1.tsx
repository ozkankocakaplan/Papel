import React, { useEffect, useState } from 'react'
import { faAngleRight, faCircleXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'

import { useSelector, useDispatch } from 'react-redux'
import { AppState } from '../store'
import { CostCard } from '../screens/ShareDetails'
import Option from '../components/Option'
import actionTypes from '../store/redux/actions/actionTypes'
import Button from '../components/Button'
import { footerButonStyles } from '../screens/CreateShare'
import { ScrollView } from 'react-native-gesture-handler'
export default function Steps1(props: { navigation: any, goStep: () => void }) {
    const { selectedExpense, shareAccount } = useSelector((state: AppState) => state.expenses);
    const dispatch = useDispatch();


    const goButon = () => {
        if (shareAccount.accountName.length != 0 && shareAccount.accountName.length <= 52) {
            if (!shareAccount.expenseType && selectedExpense.length != 0) {
                props.goStep();
            }
            else {
                if (shareAccount.expenseType) {
                    props.goStep();
                }
                else {
                    // alert
                }
            }
        }
        else {
            //alert
        }
    }
    const clearExpenses = () => {
        dispatch({ type: actionTypes.CLEAR_EXPENSE })
    }
    return (
        <View style={styles.container}>
            <ScrollView
                key={"currentStep"}
                showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false} contentInset={{ bottom: 30 }}>
                <View style={{ flex: 1 }}>
                    <Text style={styles.headerTitle}>Bölüş hesabı oluşturmak için hesabı ve harcama detayını seçiniz.</Text>
                    <Text style={styles.col1Title}>Bölüş Hesabı Bilgileri</Text>
                    <View>
                        <Text style={styles.inputLabel}>Bölüştür Hesabı Adı</Text>
                        <TextInput
                            value={shareAccount.accountName}
                            onChangeText={(text) => {
                                if (text.length <= 52) {
                                    dispatch({ type: actionTypes.UPDATE_SHAREACCOUNT, payload: { ...shareAccount, accountName: text } })
                                }
                            }}
                            focusable={false} style={styles.textInput} />
                        <Text style={styles.inputLength}>{`${shareAccount.accountName.length}/52`}</Text>
                    </View>
                    <SelectedAccount handlePress={() => console.log("a")} />
                    <Text style={styles.col2Title}>Harcama Seçimi</Text>
                    {
                        selectedExpense.length === 0 ?
                            <TouchableOpacity
                                onPress={() => {
                                    dispatch({ type: actionTypes.UPDATE_SHAREACCOUNT, payload: { ...shareAccount, expenseType: false } })
                                    props.navigation.navigate('Expenses')
                                }}
                                activeOpacity={.7}
                                style={styles.expensesContainer}>
                                <Text style={{ fontWeight: '400', color: '#141414', fontSize: 18 }}>Harcama Seç</Text>
                                <FontAwesomeIcon size={20} color="#e7e7e7" icon={faAngleRight} />
                            </TouchableOpacity>
                            :
                            <>
                                <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10, justifyContent: 'space-between' }}>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Option extraStyle={{ marginRight: 10 }} selected={true} />
                                        <Text style={{ fontWeight: '400', color: '#141414', fontSize: 18 }}>Harcama Seç</Text>
                                    </View>
                                    <TouchableOpacity
                                        onPress={clearExpenses}
                                        activeOpacity={.7}
                                        style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <Text style={{ color: '#D63333', fontWeight: 'bold', fontSize: 15, paddingRight: 5 }}>Kaldır</Text>
                                        <FontAwesomeIcon icon={faCircleXmark} color="#D63333" size={18} />
                                    </TouchableOpacity>
                                </View>
                                {
                                    selectedExpense.map((item) => {
                                        return <CostCard
                                            key={item.id}
                                            costCategory={item.category}
                                            costName={item.name}
                                            costDate={new Date()}
                                            processPrice={"100,00"}
                                            processType={false}
                                        />
                                    })
                                }
                            </>
                    }
                    <TouchableOpacity
                        onPress={() => {
                            if (!shareAccount.expenseType) {
                                clearExpenses();
                            }
                            dispatch({ type: actionTypes.UPDATE_SHAREACCOUNT, payload: { ...shareAccount, expenseType: !shareAccount.expenseType } })
                        }}
                        activeOpacity={.7}
                        style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20, marginBottom: 25 }}>
                        <Option selected={shareAccount.expenseType} extraStyle={{ marginRight: 10 }} />
                        <Text style={{ fontSize: 18, fontWeight: '400', color: '#141414' }}>Harcama Yapmadan Önce Oluştur</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
            <View style={footerButonStyles.footerButonContainer}>
                <Button
                    onPress={goButon}
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
export const SelectedAccount = (props: { handlePress: () => void }) => {
    return (
        <TouchableOpacity
            onPress={props.handlePress}
            activeOpacity={.7}
            style={styles.moneyAccountContainer}>
            <View style={{ flexDirection: 'column', padding: 10 }}>
                <Text style={styles.moneyAccountHeaderTitle}>PARANIN YATIRILACAĞI HESAP</Text>
                <View style={styles.moneyAccountCol1}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={styles.mainAccountText}>Ana Hesabım</Text>
                        <Text style={styles.pnrAccountText}>PNR: {"12345678"}</Text>
                    </View>
                    <View>
                        <FontAwesomeIcon size={20} color="#3D21A2" icon={faAngleRight} />
                    </View>
                </View>
            </View>
            <View style={styles.moneyAccountCol2}>
                <Text style={styles.moneyAccountLimitText}>Limit: ₺{"950,00"}</Text>
            </View>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        marginLeft: 10, marginRight: 10,

        flex: 1,
    },
    headerTitle: {
        marginTop: 20, marginBottom: 30,
        lineHeight: 18,
        fontWeight: '400',
        fontSize: 16,
        color: '#141414',
        textAlign: 'center'
    },
    col1Title: {
        color: '#141414',
        fontWeight: 'bold',
        fontSize: 18, marginBottom: 20
    },
    col2Title: {
        color: '#141414',
        fontWeight: 'bold',
        fontSize: 18,
        marginTop: 20,
        marginBottom: 20
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
        height: Platform.OS === 'ios' ? 50 : 60,
        borderWidth: 1, borderColor: '#e7e7e7',
        borderRadius: 10,
        paddingTop: Platform.OS === "ios" ? 15 : 21,
        paddingLeft: 15, paddingRight: 50,
        fontSize: 16,
        color: '#141414',
        fontWeight: '400'
    },
    moneyAccountContainer: {
        marginTop: 20,
        borderWidth: 1, borderColor: '#DED2FA',
        borderRadius: 10,
        flexDirection: 'column'
    },
    moneyAccountHeaderTitle: {
        color: '#727272',
        fontWeight: 'bold',
        fontSize: 11,
    },
    moneyAccountCol1: {
        marginTop: 5,
        marginBottom: 7,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    mainAccountText: {
        color: '#141414',
        fontSize: 16,
        fontWeight: 'bold'
    },
    pnrAccountText: {
        paddingLeft: 5,
        color: '#727272',
        fontSize: 14,
        fontWeight: '500'
    },
    moneyAccountCol2: {
        backgroundColor: '#FAF6FE',
        padding: 10,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10
    },
    moneyAccountLimitText: {
        fontSize: 16,
        fontWeight: '400',
        color: '#141414'
    },
    expensesContainer: {
        paddingBottom: 15,
        borderBottomColor: '#e7e7e7', borderBottomWidth: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    inputLength: {
        position: 'absolute',
        right: 10,
        top: 25,
        color: '#727272',
        fontSize: 14,
        fontWeight: '400'
    }
})