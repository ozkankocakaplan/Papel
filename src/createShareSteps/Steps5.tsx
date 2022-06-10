import { faCheck } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { ShareSummary } from './Steps4'

import Button from '../components/Button'
import ShareCard from '../components/ShareCard'
import { CommonActions } from '@react-navigation/native'

export default function Steps5(props: { navigation: any }) {

    return (
        <View style={styles.container}>
            <View style={styles.subContainer}>
                <View style={styles.iconContainer}>
                    <FontAwesomeIcon icon={faCheck} color="#fff" size={40} />
                </View>
                <Text style={styles.successText}>Tebrikler, Bölüştür Hesabı Oluşturuldu!</Text>
                <Text style={styles.descriptionText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</Text>
            </View>
            <View style={{ height: 185 }}>
                <ShareCard
                    cardType='MyCreated'
                    isSuccess={true}

                    activeOpacity={1}
                    title={"Altın Günü Yemeği"}
                    totalBalance={"381,00"}
                    availableBalance="127,00"
                    progressBar={0}
                    isPaid={true}
                />
            </View>
            <View style={styles.footerButonContainer}>
                <Button
                    onPress={() => props.navigation.goBack()}
                    activeOpacity={.7}
                    butonStyle={{ marginBottom: 20, backgroundColor: '#3D21A2' }}
                    textStyle={{ color: '#fff' }}
                    title="Bölüş'e Dön"
                />
                <Button
                    onPress={() => {
                        props.navigation.dispatch(
                            CommonActions.reset({
                                index: 0,
                                routes: [
                                    { name: 'Home' },
                                ],
                            })
                        )
                    }}
                    activeOpacity={.7}
                    butonStyle={{ marginBottom: 20 }}
                    title="Ana Sayfaya Dön"
                />
            </View>
            <ShareSummary type='VIEW' />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        marginLeft: 10, marginRight: 10,
    },
    footerButonContainer: {
        margin: -15,
        padding: 15,
    },
    subContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        marginTop: 20, marginBottom: 20
    },
    iconContainer: {
        height: 60, width: 60, backgroundColor: '#48BF24', borderRadius: 100, justifyContent: 'center', alignItems: 'center'
    },
    successText: {
        fontSize: 20,
        color: '#141414',
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 10,
        lineHeight: 26
    },
    descriptionText: {
        fontSize: 15,
        lineHeight: 18,
        fontWeight: '400',
        color: '#727272',
        marginTop: 20, marginBottom: 20,
        textAlign: 'center'
    }
})