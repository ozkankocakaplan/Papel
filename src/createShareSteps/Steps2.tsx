import { faCircleXmark, faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import React, { useEffect } from 'react'
import { FlatList, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { userCardStyles } from '../screens/ShareDetails'
import { useDispatch, useSelector } from 'react-redux';
import actionTypes from '../store/redux/actions/actionTypes'
import { AppState } from '../store'
const userData = [{ id: 1, name: "Buket Gül" }, { id: 2, name: "Faruk Demir" }, { id: 3, name: "Derya Öksüz" }]
export default function Steps2(props: { navigation: any, handleFormCheck: (data: boolean) => void }) {
    const { shareAccount } = useSelector((state: AppState) => state.expenses)
    const dispatch = useDispatch();
    useEffect(() => {
        if (shareAccount.personList.length != 0) {
            props.handleFormCheck(true)
        }
        else {
            props.handleFormCheck(false)
        }
    }, [dispatch, shareAccount])

    const SelectedUserCard = (props: { isMe: boolean, data: any, userImage?: string }) => {
        return (
            <View style={{
                flexDirection: 'row',
                backgroundColor: '#FAF6FE',
                borderTopLeftRadius: 10,
                borderBottomLeftRadius: 10,
                marginRight: 5, paddingRight: 10,
                position: 'relative', alignItems: 'center'
            }}>
                <Image source={props.userImage === undefined ? require('../../images/UserPhoto.png') : { uri: props.userImage }} style={{ height: 40, width: 40 }} />
                <Text style={{ paddingLeft: 5, color: '#141414', fontWeight: '400', fontSize: 16 }}>{
                    props.isMe ? "Ben" : props.data.name
                }</Text>
                {
                    !props.isMe &&
                    <TouchableOpacity
                        onPress={() => handleSelectUser(props.data)}
                        style={{ paddingLeft: 5 }}>
                        <FontAwesomeIcon icon={faCircleXmark} color="#3D21A2" size={20} />
                    </TouchableOpacity>
                }
            </View>
        )
    }
    const handleSelectUser = (item: any) => {
        dispatch({
            type: actionTypes.UPDATE_SHAREACCOUNT, payload: {
                ...shareAccount, personList: shareAccount.personList.find(x => x.id === item.id) === undefined ? [...shareAccount.personList, item]
                    : shareAccount.personList.filter(x => x.id !== item.id)
            }
        })
    }
    return (
        <View style={styles.container}>
            <Text style={styles.headerTitle}>Bölüş hesabı için size para gönderecek kişileri seçin.</Text>
            <View style={{ marginBottom: 20 }}>
                <FontAwesomeIcon style={styles.searchIcon} color="#b8b8b8" size={15} icon={faSearch} />
                <TextInput placeholder='Kişi Ara' style={styles.textInput} />
            </View>
            <View style={{ marginBottom: 20 }}>
                <Text style={styles.col1Title}>Seçilen Kişiler</Text>
                <FlatList
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}
                    listKey='2'
                    data={[{ id: 0, name: "Sen" }, ...shareAccount.personList]}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item, index }) => {
                        return index === 0 ?
                            <SelectedUserCard isMe={true} data={item} />
                            :
                            <SelectedUserCard isMe={false} data={item} />
                    }}
                />
            </View>
            <Text style={styles.col2Title}>Kişiler (4)</Text>
            {
                userData.map((item, index) => {
                    return <UserCard
                        key={index}
                        userName={item.name}
                        handleSelectUser={() => handleSelectUser(item)}
                    />
                })
            }
        </View>
    )
}
const UserCard = (props: { userName: string, userImage?: string, handleSelectUser: () => void }) => {
    return (
        <TouchableOpacity onPress={props.handleSelectUser}
            activeOpacity={0.7}
            style={userCardStyles.cardContainer}>
            <View style={userCardStyles.userInfo}>
                <Image source={props.userImage === undefined ? require('../../images/UserPhoto.png') : { uri: props.userImage }} style={{ height: 40, width: 40 }} />
                <View style={{ flexDirection: 'column', justifyContent: 'space-around', marginLeft: 10 }}>
                    <Text style={userCardStyles.userNameText}>{props.userName}</Text>
                </View>
            </View>
        </TouchableOpacity>
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
        fontSize: 18, marginBottom: 20,
    },
    col2Title: {
        color: '#141414',
        fontWeight: 'bold',
        fontSize: 18,
    },
})