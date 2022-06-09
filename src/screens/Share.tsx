import React, { useState } from 'react'
import { faPlus, faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { StyleSheet, View, Text, TouchableOpacity, TextInput, ScrollView } from 'react-native'

import BackgroundContainer from '../components/BackgroundContainer'
import Button from '../components/Button'
import Container from '../components/Container'
import DropDown from '../components/DropDown'
import MainHeader from '../components/MainHeader'
import ShareCard from '../components/ShareCard'
//#region  styles
const creationStyles = StyleSheet.create({
    container: {
        flex: 1, flexDirection: 'column'
    },
    filtreContainer: {
        marginTop: 10,
        justifyContent: 'space-between',
        flexDirection: 'row',
        padding: 5,
        height: 50,
        zIndex: 12, elevation: 12
    },
    searchIcon: {
        position: 'absolute',
        color: '#B8B8B8',
        left: 10,
        top: 12
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
        marginTop: 10, marginBottom: 10,
        marginLeft: 5, marginRight: 5,
    },
    notificationText: {
        fontWeight: '400', fontSize: 14, color: '#141414'
    },
    notificationCountText: {
        fontWeight: 'bold', fontSize: 14, color: '#141414'
    },
})
const doubleButonstyles = StyleSheet.create({
    doubleButonContainer: {
        height: 45,
        backgroundColor: '#FAF6FE',
        borderRadius: 23,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 5,
        marginLeft: 20, marginRight: 20
    },
    doubleButon: {
        flex: 1, borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center'
    },
    activeButton: {
        backgroundColor: '#fff',
        shadowColor: 'rgba(0, 0, 0, 0.05)',
        shadowOffset: {
            height: 0, width: 0
        },
        shadowOpacity: .10,
        shadowRadius: 3.14,
    },
    doubleButonText: {
        color: '#BDA7F5',
        fontWeight: '400',
        fontSize: 14
    },
    activeButonText: {
        color: '#3D21A2',
        fontWeight: 'bold',
        fontSize: 14
    }
})
//#endregion

const FilterMenuData = ["Tümü", "Fiyat", "Tarih"]

export default function Share(props: any) {
    const [selectedMenu, setSelectedMenu] = useState<number>(0);//0: Oluşturduklarım, 1: Davet Edildiklerim
    const DoubleButonContainer = () => {
        return (
            <View style={doubleButonstyles.doubleButonContainer}>
                <TouchableOpacity
                    onPress={() => setSelectedMenu(0)}
                    activeOpacity={.7}
                    style={[doubleButonstyles.doubleButon, selectedMenu === 0 && doubleButonstyles.activeButton]}>
                    <Text style={[selectedMenu === 0 ? doubleButonstyles.activeButonText : doubleButonstyles.doubleButonText]}>Oluşturduklarım</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => setSelectedMenu(1)}
                    activeOpacity={.7}
                    style={[doubleButonstyles.doubleButon, selectedMenu === 1 && doubleButonstyles.activeButton]}>
                    <Text style={[selectedMenu === 1 ? doubleButonstyles.activeButonText : doubleButonstyles.doubleButonText]}>Davet Edildiklerim</Text>
                </TouchableOpacity>
            </View>

        )
    }
    return (
        <BackgroundContainer style={{ justifyContent: 'flex-end' }
        }>
            <MainHeader
                title='Bölüş'
            />
            <Container valueHeight={1.16}>
                <DoubleButonContainer />

                {
                    selectedMenu === 0 ?
                        <MyCreated navigation={props.navigation} count={5} />
                        : <MyInvitations count={3} />
                }
            </Container>
        </BackgroundContainer >
    )
}

const MyCreated = (props: { navigation: any, count: number }) => {
    const [selectedFiltre, setSetSelectedFiltre] = useState<string>(''); // Filtre
    const [searchText, setSearchText] = useState<string>('');//SearchText
    return (
        <View style={creationStyles.container}>
            <View style={{ flex: 1, padding: 5 }}>
                <View style={creationStyles.filtreContainer}>
                    <View style={{ flex: 1, marginRight: 15, }}>
                        <FontAwesomeIcon style={creationStyles.searchIcon} icon={faSearch} size={15} />
                        <TextInput
                            onChangeText={(text) => setSearchText(text)}
                            value={searchText}
                            style={creationStyles.searchText} placeholder="Ara" />
                    </View>
                    <DropDown
                        title='Filtrele'
                        selectedData={selectedFiltre}
                        handleChangeData={(data) => setSetSelectedFiltre(data)}
                        data={FilterMenuData} />
                </View>
                <View style={creationStyles.notificationCountContainer}>
                    <Text style={creationStyles.notificationText}><Text style={creationStyles.notificationCountText}>{props.count} adet</Text> hareket listeleniyor.</Text>
                </View>
                <Button
                    onPress={() => props.navigation.navigate('CreateShare')}
                    title='Yeni Bölüş Oluştur'
                    activeOpacity={.7}
                    icon={faPlus} iconProperty={{ size: 20, color: "#3D21A2" }}
                />
            </View>
            <View style={{ flex: 3, zIndex: -1, elevation: -1, position: 'relative' }}>
                <ScrollView
                    contentInset={{ bottom: 70 }}
                    style={{ padding: 5 }}
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}
                >
                    <ShareCard
                        cardType='MyCreated'
                        isSuccess={false}
                        onPress={() => props.navigation.navigate('ShareDetails', { shareID: 1 })}
                        activeOpacity={.7}
                        title="Altın Günü Yemeği"
                        totalBalance={"381,00"}
                        availableBalance="127,00"
                        progressBar={.6}
                        isPaid={false}
                    />
                    <ShareCard
                        cardType='MyCreated'
                        isSuccess={true}
                        onPress={() => props.navigation.navigate('ShareDetails', { shareID: 2 })}
                        activeOpacity={.7}
                        title="Altın Günü Yemeği"
                        totalBalance={"381,00"}
                        availableBalance="127,00"
                        progressBar={.6}
                        isPaid={true}
                    />
                </ScrollView>
            </View>
        </View>
    )
}
const MyInvitations = (props: { count: number }) => {
    const [selectedFiltre, setSetSelectedFiltre] = useState<string>(''); // Filtre
    const [searchText, setSearchText] = useState<string>('');//SearchText
    return (
        <View style={creationStyles.container}>
            <View style={{ flex: 1, padding: 5 }}>
                <View style={creationStyles.filtreContainer}>
                    <View style={{ flex: 1, marginRight: 15, }}>
                        <FontAwesomeIcon style={creationStyles.searchIcon} icon={faSearch} size={15} />
                        <TextInput
                            onChangeText={(text) => setSearchText(text)}
                            value={searchText}
                            style={creationStyles.searchText} placeholder="Ara" />
                    </View>
                    <DropDown
                        title='Filtrele'
                        selectedData={selectedFiltre}
                        handleChangeData={(data) => setSetSelectedFiltre(data)}
                        data={FilterMenuData} />
                </View>
                <View style={creationStyles.notificationCountContainer}>
                    <Text style={creationStyles.notificationText}><Text style={creationStyles.notificationCountText}>{props.count} adet</Text> bölüş listeleniyor.</Text>
                </View>
            </View>
            <View style={{ flex: 6, zIndex: -1, elevation: -1, position: 'relative' }}>
                <ScrollView
                    contentInset={{ bottom: 70 }}
                    style={{ padding: 5 }}
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}
                >
                    <ShareCard
                        cardType='MyInvitations'
                        isSuccess={false}
                        onPress={() => console.log("a")}
                        activeOpacity={.7}
                        title="Altın Günü Yemeği"
                        totalBalance={"381,00"}
                        availableBalance="127,00"
                        progressBar={.6}
                        isPaid={true}
                    />
                    <ShareCard
                        cardType='MyInvitations'
                        isSuccess={false}
                        onPress={() => console.log("a")}
                        activeOpacity={.7}
                        title="Altın Günü Yemeği"
                        totalBalance={"381,00"}
                        availableBalance="127,00"
                        progressBar={.6}
                        isPaid={false}
                    />

                </ScrollView>
            </View>
        </View>
    )
}




