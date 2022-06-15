import React, { useState } from 'react'
import { Dimensions, Platform, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { BalanceInfo, ShortCut } from './Home'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { ActionCard } from '../components/LastAction'

import BackgroundContainer from '../components/BackgroundContainer'
import MainHeader from '../components/MainHeader'
import Container from '../components/Container'
import DropDown from '../components/DropDown'
import AccountDropDown from '../components/AccountDropDown'
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
    accountHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: 10,
    },
    accountHeaderText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#141414'
    },
    filtreContainer: {
        marginTop: 10,
        justifyContent: 'space-between',
        flexDirection: 'row',

        height: 55,
        zIndex: 12, elevation: 12
    },
    searchIcon: {
        position: 'absolute',
        color: '#B8B8B8',
        left: 10,
        top: 18
    },
    searchText: {
        fontSize: 16,
        color: '#B8B8B8',
        paddingLeft: 35,
        fontWeight: '500',
        borderRadius: 10,
        borderWidth: 1,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#e7e7e7',
    },
    notificationCountContainer: {
        marginTop: 20, marginBottom: 10,
        marginLeft: 5, marginRight: 5,
    },
    notificationText: {
        fontWeight: '400', fontSize: 14, color: '#141414'
    },
    notificationCountText: {
        fontWeight: 'bold', fontSize: 14, color: '#141414'
    },
    zindex: { zIndex: -1, elevation: -1 }
})
//#endregion
const accountsData = ["Ana Hesabım", "Diğer Hesabım", "Alışveriş Hesabım", "Yurt Dışı Hesabım"];
const dateFilter = ["Son 7 Gün", "Son 30 Gün"];
const filter = ["Giden Transfer", "Gelen Transfer"];
const dumpData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26];
export default function Account(props: any) {
    const [searchText, setSearchText] = useState<string>('');
    const [selectedDateFilter, setSelectedDateFilter] = useState<string>('');
    const [selectedFilter, setSelectedFilter] = useState<string>('');
    const [selectedAccount, setSelectedAccount] = useState<string>('Ana Hesabım');
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
            <View style={{ justifyContent: 'center', alignItems: 'center', marginBottom: 15, zIndex: 12, elevation: 12 }}>
                <AccountDropDown selectedData={selectedAccount} data={accountsData} handleChangeData={(data) => setSelectedAccount(data)} />
                <Text style={[{ color: '#BDA7F5', fontSize: 14, fontWeight: 'bold', lineHeight: 30 }]}>PNR: 12345678</Text>
            </View>
            <View style={{ marginBottom: 10 }}>
                <BalanceInfo balance={"1.136,97"} body="KULLANILABİLİR LİMİT" />
            </View>
            <View style={{ marginBottom: 15 }}>
                <ShortCut />
            </View>
            <Container valueHeight={1}>
                <View style={{ height: '50%', maxHeight: Dimensions.get('screen').height }}>
                    <ScrollView
                        showsVerticalScrollIndicator={false}
                        showsHorizontalScrollIndicator={false}
                        nestedScrollEnabled={true}
                        contentContainerStyle={{ padding: 5 }}
                    >
                        <View style={{ marginBottom: 10 }}>
                            <View style={styles.accountHeader}>
                                <Text style={styles.accountHeaderText}>Hesap Hareketleri</Text>
                            </View>
                        </View>
                        <View style={{ height: 50, marginBottom: 10 }}>
                            <FontAwesomeIcon style={styles.searchIcon} icon={faSearch} size={15} />
                            <TextInput
                                value={searchText}
                                onChangeText={(text) => setSearchText(text)}
                                style={styles.searchText} placeholder="Ara" />
                        </View>
                        <View style={styles.filtreContainer}>
                            <View style={{ flex: 1, marginRight: 15, }}>
                                <DropDown
                                    height={60}
                                    title='Tarih Aralığı'
                                    selectedData={selectedDateFilter}
                                    handleChangeData={(data) => setSelectedDateFilter(data)}
                                    data={dateFilter} />
                            </View>
                            <DropDown
                                height={60}
                                title='Filtrele'
                                selectedData={selectedFilter}
                                handleChangeData={(data) => setSelectedFilter(data)}
                                data={filter} />
                        </View>
                        <View style={styles.notificationCountContainer}>
                            <Text style={styles.notificationText}><Text style={styles.notificationCountText}>{3} adet</Text> hareket listeleniyor.</Text>
                        </View>
                        {
                            dumpData.map((item) => {
                                return <ActionCard
                                    key={item}
                                    userName='Cansu Ural'
                                    processName='Giden Transfer'
                                    processPrice={item}
                                    processDate={new Date()}
                                    processType={true}
                                />
                            })
                        }
                    </ScrollView>
                </View>
            </Container>
        </BackgroundContainer>
    )
}
