import React from 'react'
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import { useSelector } from 'react-redux'
import { AppState } from '../store'
import { UserCard } from './Steps2'
import { CostCard } from '../screens/ShareDetails'
import { footerButonStyles } from '../screens/CreateShare'
import Button from '../components/Button'
export default function Steps4(props: { navigation: any, goStep: () => void, handleGoStep?: (data: number) => void }) {
    const { shareAccount, selectedExpense } = useSelector((state: AppState) => state.expenses)
    return (
        <View style={styles.container}>
            <Text style={styles.headerTitle}>Bilgileri onaylamanız halinde bölüş hesabı oluşturulacaktır.</Text>
            <ScrollView
                key={"currentStep"}
                showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false} contentInset={{ bottom: 30 }}>
                <ShareSummary type='EDIT' goStep={props.handleGoStep} />
            </ScrollView>
            <View style={footerButonStyles.footerButonContainer}>
                <Button
                    onPress={props.goStep}
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
export const ShareSummary = (props: { type: 'EDIT' | 'VIEW', goStep?: (step: number) => void }) => {
    const { shareAccount, selectedExpense } = useSelector((state: AppState) => state.expenses)
    return (
        <View style={styles.infoContainer}>
            <View style={styles.infoHeader}>
                <Text style={styles.infoTitle}>Bölüştür Bilgileri</Text>
                {props.type === 'EDIT' && <TouchableOpacity
                    onPress={() => props.goStep && props.goStep(0)}
                    activeOpacity={.7}
                    style={styles.infoHeaderRow}>
                    <FontAwesomeIcon style={styles.infoEditIcon} icon={faPencilAlt} color="#3D21A2" />
                    <Text style={styles.infoEditText}>Düzenle</Text>
                </TouchableOpacity>
                }
            </View>
            <View style={styles.infoBody}>
                <Text style={styles.mainSubTitle}>BÖLÜŞTÜR HESABI ADI</Text>
                <Text style={styles.mainText}>{shareAccount.accountName}</Text>
            </View>
            <View style={[styles.infoBody, { marginTop: 20 }]}>
                <Text style={styles.mainSubTitle}>BÖLÜŞTÜR HESABI ADI</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={styles.mainAccountText}>Ana Hesabım</Text>
                    <Text style={styles.pnrAccountText}>PNR: {"12345678"}</Text>
                </View>
            </View>
            <View style={[styles.infoBody, { marginTop: 20 }]}>
                <Text style={styles.mainSubTitle}>HARCAMA SEÇİMİ</Text>
            </View>
            <View>
                {
                    selectedExpense.length != 0 &&
                    selectedExpense.map((item) => {
                        return <CostCard
                            extraStyle={{ backgroundColor: '#fff' }}
                            key={item.id}
                            costCategory={item.category}
                            costName={item.name}
                            costDate={new Date()}
                            processPrice={"100,00"}
                            processType={false}
                        />
                    })
                }
            </View>
            <View style={[styles.infoHeader, { marginTop: 25 }]}>
                <Text style={styles.infoTitle}>Kişi Seçimi</Text>
                {props.type === 'EDIT' && <TouchableOpacity
                    onPress={() => props.goStep && props.goStep(1)}
                    activeOpacity={.7}
                    style={styles.infoHeaderRow}>
                    <FontAwesomeIcon style={styles.infoEditIcon} icon={faPencilAlt} color="#3D21A2" />
                    <Text style={styles.infoEditText}>Düzenle</Text>
                </TouchableOpacity>}
            </View>
            <View>
                {
                    shareAccount.personList.length != 0 &&
                    shareAccount.personList.map((item) => {
                        return <UserCard userName={item.name} key={item.id} />
                    })
                }
            </View>
            <View style={[styles.infoHeader, { marginTop: 25 }]}>
                <Text style={styles.infoTitle}>Ödeme Bilgileri</Text>
                {props.type === 'EDIT' && <TouchableOpacity
                    onPress={() => props.goStep && props.goStep(2)}
                    activeOpacity={.7}
                    style={styles.infoHeaderRow}>
                    <FontAwesomeIcon style={styles.infoEditIcon} icon={faPencilAlt} color="#3D21A2" />
                    <Text style={styles.infoEditText}>Düzenle</Text>
                </TouchableOpacity>}
            </View>
            <View>
                <Text style={[styles.mainSubTitle, { marginBottom: 10 }]}>PARA TOPLANACAK HESAP</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={styles.mainAccountText}>Ana Hesabım</Text>
                    <Text style={styles.pnrAccountText}>PNR: {"12345678"}</Text>
                </View>
                <Text style={[styles.mainSubTitle, { marginTop: 20 }]}>HARCAMA LİMİTİ</Text>
                <Text style={styles.priceText}>₺{shareAccount.totalPrice.masked}</Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
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
    infoContainer: {
        backgroundColor: '#fbfbfb',
        borderWidth: 1, borderColor: '#e7e7e7',
        borderRadius: 10,
        padding: 15,
        marginBottom: Platform.OS == "android" ? 25 : 0
    },
    infoHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center', marginBottom: 15
    },
    infoHeaderRow: {
        flexDirection: 'row'
    },
    infoEditText: {
        color: '#3D21A2',
        fontWeight: 'bold',
        fontSize: 15,
        paddingLeft: 5
    },
    infoEditIcon: {
        top: 2
    },
    infoTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#141414',
    },
    infoBody: {
        flexDirection: 'column'
    },
    mainSubTitle: {
        color: '#727272',
        fontSize: 14,
        fontWeight: 'bold'
    },
    mainText: {
        color: '#141414',
        lineHeight: 28,
        fontSize: 16,
        fontWeight: '400'
    },
    mainAccountText: {
        lineHeight: 28,
        color: '#141414',
        fontWeight: 'bold',
        fontSize: 15,
    },
    priceText: {
        lineHeight: 28,
        color: '#141414',
        fontWeight: 'bold',
        fontSize: 15,
    },
    pnrAccountText: {
        paddingLeft: 5,
        color: '#727272',
        fontSize: 15,
        fontWeight: '500'
    }
})