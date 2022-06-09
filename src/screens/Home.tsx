import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { StyleSheet, TouchableOpacity, View, Text, ScrollView, Image } from 'react-native'
import { faCircleMinus, faInfoCircle, faPaperPlane, faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'

import BackgroundContainer, { BackgroundBlur } from '../components/BackgroundContainer'
import Container, { Notch } from '../components/Container'
import Header from '../components/Header'
import QuickProcess, { QuickProcessHeader } from '../components/QuickProcess'
import LastAction from '../components/LastAction'
import MyCards from '../components/MyCards'
import BottomSheet, { BottomSheetScrollView, BottomSheetView } from '@gorhom/bottom-sheet'
export default function Home(props: any) {
    const sheetRef = useRef<BottomSheet>(null);
    const [blur, setBlur] = useState<boolean>(false);
    const snapPoints = ["45%", "70%"];
    const [isItVerifed, setIsItVerifed] = useState<boolean>(true);
    useEffect(() => {
        props.navigation.addListener('focus', () => {
            // do something
        })
    }, [])
    const ShortCut = () => {
        return (
            <View style={styles.shortCutContainer}>
                <TouchableOpacity
                    activeOpacity={.7}
                    style={styles.shortCutButon}>
                    <FontAwesomeIcon icon={faCircleMinus} color="#fff" size={20} />
                    <Text style={styles.shortCutButonText}>Çek</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    activeOpacity={.7}
                    style={styles.shortCutButon}>
                    <FontAwesomeIcon icon={faPaperPlane} color="#fff" size={20} />
                    <Text style={styles.shortCutButonText}>Gönder</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    activeOpacity={.7}
                    style={styles.shortCutButon}>
                    <FontAwesomeIcon icon={faPlusCircle} color="#fff" size={20} />
                    <Text style={styles.shortCutButonText}>Talep Et</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    activeOpacity={.7}
                    style={styles.shortCutButon}>
                    <FontAwesomeIcon icon={faPlusCircle} color="#fff" size={20} />
                    <Text style={styles.shortCutButonText}>Yatır</Text>
                </TouchableOpacity>
            </View>
        )
    }
    return (
        <BackgroundContainer>
            <Header goNotification={() => props.navigation.navigate('Notification')} />
            <ScrollView contentContainerStyle={{ flex: 1 }} showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>
                {
                    isItVerifed ?
                        <View style={{ marginTop: 10 }}>
                            <BalanceInfo balance={"1.136,97"} body="TOPLAM BAKİYE" />
                            <ShortCut />
                            <MyCards />
                        </View>
                        :
                        <>
                            <UnverifedAccountInfo />
                            <BalanceInfo balance={"20,00"} body="TOPLAM BAKİYE" />
                            <NotFoundCardInfo />
                        </>
                }
            </ScrollView>
            {
                isItVerifed ?
                    <BottomSheet
                        containerStyle={{ zIndex: 11, position: 'relative' }}
                        ref={sheetRef}
                        enablePanDownToClose={false}
                        snapPoints={snapPoints}
                        onChange={(state) => {
                            if (state === 0) {
                                setBlur(false)
                            }
                            else {
                                setBlur(true)
                            }

                        }}
                    >
                        <BottomSheetView style={{ margin: 10 }} >
                            <QuickProcessHeader />
                            <QuickProcess />
                            <LastAction />
                        </BottomSheetView>
                    </BottomSheet>
                    :
                    <Container valueHeight={2.3}>
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
                            <Image source={require('../../images/creditcard.png')} />
                            <Text style={{ fontWeight: 'bold', fontSize: 16, color: '#141414', marginTop: 30, marginBottom: 70, }}>Henüz burada gösterilecek bir şey yok!</Text>
                        </View>
                    </Container>

            }
            {blur && <BackgroundBlur />}
        </BackgroundContainer >
    )
}

const UnverifedAccountInfo = () => {
    return (
        <View style={styles.unverifedAccountInfoContainer}>
            <View style={{ flexDirection: 'column', marginLeft: 15, marginRight: 15, marginTop: 15, marginBottom: 20 }}>
                <View style={{ flexDirection: 'row' }}>
                    <FontAwesomeIcon icon={faInfoCircle} color="#fff" />
                    <Text style={styles.infoText}>Hesap Doğrulaması Gerekli!</Text>
                </View>
                <View style={{ marginLeft: 25, marginTop: 5 }}>
                    <Text style={styles.infoBodyText}>
                        Papel hesabını kullanabilmek için öncelikle üyeliğini doğrulaman gerekiyor.
                    </Text>
                </View>
            </View>

            <TouchableOpacity
                activeOpacity={.7}
                style={styles.confirmButon}>
                <Text style={styles.confirmText}>Üyeliğini Doğrula</Text>
            </TouchableOpacity>
        </View>
    )
}
const NotFoundCardInfo = () => {
    return (
        <View style={styles.notFoundCardInfoContainer}>
            <Text style={styles.notFoundCardTitle}>Henüz bir kartın bulunmuyor!</Text>
            <Text style={styles.notFoundCardBody}>Hesap doğrulaması ardından hemen kart başvurusu yapabilir ve Papel ayrıcalıklarından yararlanabilirsin.</Text>
        </View>
    )
}



const styles = StyleSheet.create({
    notFoundCardInfoContainer: {
        height: 85,
        margin: 15,
        padding: 10,
        backgroundColor: 'rgba(112, 96, 171, 1)',
        borderRadius: 10,
        shadowColor: 'rgba(255, 255, 255, 0.2)',
        shadowOffset: {
            width: 1,
            height: 1,
        },
        shadowRadius: 5,
        shadowOpacity: .1,
        elevation: 5,
        flexDirection: 'column',
    },
    notFoundCardTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff'
    },
    notFoundCardBody: {
        marginTop: 7,
        fontSize: 14,
        fontWeight: '400',
        lineHeight: 16,
        color: '#fff'
    },
    unverifedAccountInfoContainer: {
        height: 160,
        margin: 15,
        padding: 10,
        backgroundColor: 'rgba(112, 96, 171, 1)',
        borderRadius: 10,
        shadowColor: 'rgba(255, 255, 255, 0.2)',
        shadowOffset: {
            width: 1,
            height: 1,
        },
        shadowRadius: 5,
        shadowOpacity: .1,
        elevation: 5,
        flexDirection: 'column',
    },
    confirmButon: {
        height: 50,

        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: '#48BF24',
    },
    confirmText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        letterSpacing: 0,
    },
    infoText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
        left: 10,
        lineHeight: 17,
        letterSpacing: 0,
    },
    infoBodyText: {
        fontSize: 14,
        lineHeight: 16,
        color: '#fff',
        fontWeight: '400'
    },
    shortCutContainer: {
        flexDirection: 'row',
        margin: 15,
        justifyContent: 'center',
        alignItems: 'center'
    },
    shortCutButon: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    },
    shortCutButonText: {
        marginTop: 10,
        fontSize: 16,
        color: '#fff',
        fontWeight: 'bold'
    },

})

export const BalanceInfo = (props: { balance: string, body: string }) => {
    return (
        <View style={balanceStyles.container}>
            <Text style={balanceStyles.balanceText}>{`₺${props.balance}`}</Text>
            <Text style={balanceStyles.balanceInfoText}>{props.body}</Text>
        </View>
    )
}
const balanceStyles = StyleSheet.create({
    container: {
        height: 55,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    },
    balanceText: {
        fontSize: 30,
        marginTop: 5,
        color: '#fff',
        fontWeight: 'bold'
    },
    balanceInfoText: {
        fontSize: 14,
        fontWeight: '500',
        lineHeight: 20,
        color: '#BDA7F5',
        textTransform: 'uppercase',

    }
});