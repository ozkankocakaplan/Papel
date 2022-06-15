import React from 'react'
import { Dimensions, Image, ScrollView, StyleSheet, Text, TouchableOpacity, TouchableOpacityProps, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { BalanceInfo } from './Home'

import BackgroundContainer from '../components/BackgroundContainer'
import MainHeader from '../components/MainHeader'
import Container from '../components/Container'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faAngleRight, faPlus } from '@fortawesome/free-solid-svg-icons'
import currencyMask from '../utils/currencyMask'
import { useDispatch, useSelector } from 'react-redux'
import { AppState } from '../store'
import actionTypes from '../store/redux/actions/actionTypes'
import BottomSheet, { BottomSheetScrollView } from '@gorhom/bottom-sheet'
//#region  style
const styles = StyleSheet.create({
    container: {
        paddingTop: 5, paddingBottom: 5, paddingLeft: 5, paddingRight: 25,
        backgroundColor: 'rgba(112, 96, 171, 1)',
        borderRadius: 35,
        shadowColor: 'rgba(255, 255, 255, 0.2)',
        shadowOffset: {
            width: 1,
            height: 1,
        },
        shadowRadius: 5,
        shadowOpacity: .1,
        elevation: 5,
        flexDirection: 'row',
        marginBottom: 30,
    },
    accountName: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
        lineHeight: 25
    },
    accountNumber: {
        color: '#BDA7F5',
        fontWeight: 'bold',
        fontSize: 14,
        lineHeight: 20,
    },
    accountHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: 10,
    },
    accountHeaderText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#141414'
    },
    accountOpenTitle: {
        color: '#3D21A2',
        fontSize: 14,
        fontWeight: 'bold',
        paddingLeft: 5,
    }
})
const accountCardStyles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 15,
        borderWidth: 1,
        borderColor: '#DED2FA',
        borderRadius: 10,
        marginTop: 15,
    },
    accountName: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#141414',
    },
    accountPnr: {
        fontSize: 14,
        fontWeight: '400',
        color: '#727272',
        lineHeight: 25
    },
    accountPrice: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#141414',
    },
})
//#endregion
export default function Accounts(props: any) {
    const { account } = useSelector((state: AppState) => state.expenses)
    const dispatch = useDispatch();
    const selectAccount = (currency: string) => {
        dispatch({ type: actionTypes.UPDATE_ACCOUNT, payload: { ...account, accountCurrency: currency } })
    }
    return (
        <BackgroundContainer>
            <SafeAreaView>
                <MainHeader
                    bgHeader={false}
                    title='Hesaplar'
                    titleStyle={{ fontSize: 18 }}
                    leftonPress={() => props.navigation.goBack()}
                    rightonPress={() => console.log("a")}
                />
            </SafeAreaView>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <AccountInfo />
            </View>
            <View style={{ marginBottom: 30 }}>
                <BalanceInfo balance={"1.136,97"} body="TOPLAM BAKİYE" />
            </View>
            <Container valueHeight={1}>
                <View style={{ height: '55%', maxHeight: Dimensions.get('screen').height }}>
                    <ScrollView
                        // contentContainerStyle={{ flexGrow: 1 }}
                        // style={{ height: Dimensions.get('screen').height }}
                        nestedScrollEnabled={true}
                        showsVerticalScrollIndicator={false}
                        showsHorizontalScrollIndicator={false}
                    >
                        <View style={{ marginBottom: 10 }}>
                            <View style={styles.accountHeader}>
                                <Text style={styles.accountHeaderText}>TL Hesapları</Text>
                                <TouchableOpacity
                                    onPress={() => {
                                        selectAccount("TRY");
                                        props.navigation.navigate("CreateAccount")
                                    }}
                                    activeOpacity={.7}
                                    style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <FontAwesomeIcon icon={faPlus} color="#3D21A2" />
                                    <Text style={styles.accountOpenTitle}>Yeni TL Hesap Aç</Text>
                                </TouchableOpacity>
                            </View>
                            <AccountCard accountPnr='12345678' accountName='Tatil' accountBalance={100} />
                            <AccountCard accountPnr='12345678' accountName='Tatil' accountBalance={100} />
                            <AccountCard accountPnr='12345678' accountName='Tatil' accountBalance={100} />
                        </View>
                        <View style={{ marginBottom: 10 }}>
                            <View style={styles.accountHeader}>
                                <Text style={styles.accountHeaderText}>USD Hesapları</Text>
                                <TouchableOpacity
                                    onPress={() => {
                                        selectAccount("USD");
                                        props.navigation.navigate("CreateAccount")
                                    }}
                                    activeOpacity={.7}
                                    style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <FontAwesomeIcon icon={faPlus} color="#3D21A2" />
                                    <Text style={styles.accountOpenTitle}>Yeni USD Hesap Aç</Text>
                                </TouchableOpacity>
                            </View>
                            <AccountCard accountPnr='12345678' accountName='Tatil' accountBalance={100} />
                            <AccountCard accountPnr='12345678' accountName='Tatil' accountBalance={100} />
                            <AccountCard accountPnr='12345678' accountName='Tatil' accountBalance={100} />
                        </View>

                    </ScrollView>
                </View>
            </Container>
        </BackgroundContainer>
    )
}
const AccountInfo = () => {
    return (
        <View style={styles.container}>
            <View style={{ height: 50, width: 50, borderWidth: 5, justifyContent: 'center', alignItems: 'center', borderColor: '#fff', borderRadius: 100 }}>
                <Image source={require('../../images/UserPhoto.png')} style={{ height: 45, width: 45, resizeMode: 'contain' }} />
            </View>
            <View style={{ justifyContent: 'center', flexDirection: 'column', paddingLeft: 10, }}>
                <Text style={styles.accountName}>Cansu Ural</Text>
                <Text style={styles.accountNumber}>Müşteri No: {"12345678"}</Text>
            </View>
        </View>
    )
}
interface AccountCardProps extends TouchableOpacityProps {
    accountName: string,
    accountPnr: string,
    accountBalance: any
}
const AccountCard: React.FC<AccountCardProps> = ({ accountName, accountPnr, accountBalance, ...res }) => {

    return (
        <TouchableOpacity style={accountCardStyles.container} {...res}>
            <View style={{ flex: 1.5, flexDirection: 'column', justifyContent: 'center' }}>
                <Text style={accountCardStyles.accountName}>{accountName}</Text>
                <Text style={accountCardStyles.accountPnr}>PNR: {accountPnr}</Text>
            </View>
            <View style={{ flex: .5, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                <Text style={accountCardStyles.accountPrice}>{currencyMask(accountBalance)}</Text>
                <FontAwesomeIcon icon={faAngleRight} size={20} color="#3D21A2" />
            </View>
        </TouchableOpacity>
    )
}
