import { faAngleRight, faCheck, faShoppingBasket } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import moment from 'moment-with-locales-es6';
import React from 'react'
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, TouchableOpacityProps, View } from 'react-native'
import SimpleGradientProgressbarView from 'react-native-simple-gradient-progressbar-view'
import BackgroundContainer from '../components/BackgroundContainer'
import Container from '../components/Container'
import MainHeader from '../components/MainHeader'
moment.locale("tr");
//#region style
export const costCardStyles = StyleSheet.create({
    iconContainer: {
        justifyContent: 'center', alignItems: 'center', height: 40, width: 40,
        backgroundColor: '#f3f3f3', borderRadius: 100
    },
    container: {
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#e7e7e7',
        height: 70,
        marginTop: 10,
        padding: 15,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    cardContainer: {
        height: 70,
        borderBottomColor: '#e7e7e7',
        borderBottomWidth: 1,
        paddingBottom: 15, paddingTop: 15,
        flexDirection: 'row',
    },
    userInfo: {
        flex: 2,
        flexDirection: 'row',
    },
    userBalanceInfo: {
        flex: 1.5,
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'flex-end',
    },
    userNameText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#141414'
    },
    userProcessText: {
        fontSize: 13,
        color: '#727272',
        fontWeight: '400'
    },
    userBalanceText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    userProcessDate: {
        fontSize: 13,
        color: '#727272',
        fontWeight: '400'
    }

})
const styles = StyleSheet.create({
    progressBar: {
        backgroundColor: '#E7E7E7',
        height: 5,
        marginTop: 15,
        borderRadius: 10,
    },
    shareDetailsCol1: {
        padding: 10
    },
    col1Title: {
        color: '#141414',
        fontWeight: 'bold',
        fontSize: 18
    },
    col2Title: {
        marginTop: 30,
        color: '#141414',
        fontWeight: 'bold',
        fontSize: 18
    },
    col3Title: {
        marginTop: 30,
        color: '#141414',
        fontWeight: 'bold',
        fontSize: 18, marginBottom: 5,
    },
    col4Title: {
        marginTop: 30,
        color: '#141414',
        fontWeight: 'bold',
        fontSize: 18
    },
    totalBalanceTitle: {
        color: '#141414',
        fontWeight: '400',
        fontSize: 16
    },
    totalBalance: {
        color: '#141414',
        fontWeight: 'bold',
        fontSize: 16
    },
    costActionButonContainer: {
        marginTop: 40,
        flexDirection: 'column',
    },
    costActionButons: {
        flexDirection: 'column',
        paddingBottom: 15, paddingTop: 15, borderBottomColor: '#e7e7e7', borderBottomWidth: 1,
    },
    costActionButonText: {
        color: '#D63333',
        fontSize: 16,
        fontWeight: '500'
    }

})
export const userCardStyles = StyleSheet.create({
    cardContainer: {
        height: 70,
        borderBottomColor: '#e7e7e7',
        borderBottomWidth: 1,
        paddingBottom: 15, paddingTop: 15,
        flexDirection: 'row',
    },
    userInfo: {
        flex: 2,
        flexDirection: 'row',
    },
    costStatus: {
        flex: 1.5,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    userNameText: {
        fontSize: 17,
        fontWeight: '400',
        color: '#141414'
    },
    iconContainer: {
        height: 15, width: 15,
        backgroundColor: '#48BF24',
        justifyContent: 'center', alignItems: 'center', borderRadius: 100,
    },
    isntIconContainer: {
        height: 15, width: 15,
        backgroundColor: '#D63333',
        justifyContent: 'center', alignItems: 'center', borderRadius: 100,
    },
    isPaidText: {
        color: '#48BF24',
        fontSize: 15,
        fontWeight: 'bold',
        paddingLeft: 15,
        textAlign: 'center'
    },
    isntPaidText: {
        color: '#D63333',
        fontSize: 15,
        fontWeight: 'bold',
        paddingLeft: 15,
        textAlign: 'center'
    }
});
//#endregion

export default function ShareDetails(props: any) {
    const { shareID } = props.route.params;//Bu sayfaya Gelince shareID parametresi gelir.Apiye istek gönderirken shareID parametresi ile gönderilir.
    const CostActionButons = () => {
        return (
            <View style={styles.costActionButonContainer}>
                <TouchableOpacity style={styles.costActionButons}>
                    <Text style={styles.costActionButonText}>Bilgileri Düzenle</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.costActionButons}>
                    <Text style={styles.costActionButonText}>Bölüş Hesabını Sil</Text>
                </TouchableOpacity>
            </View>
        )
    }
    return (
        <BackgroundContainer style={{ justifyContent: 'flex-end' }}>
            <MainHeader
                title='Bölüş Hesabı Detayı'
                leftonPress={() => props.navigation.goBack()}
            />
            <Container valueHeight={1.16}>
                <ScrollView showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false} contentContainerStyle={{ flexGrow: 1 }} contentInset={{ bottom: 20 }}>
                    <View style={styles.shareDetailsCol1}>
                        <Text style={styles.col1Title}>Doğum Günü Yemeği</Text>
                        <Text style={styles.col2Title}>Bölüş Hesap Tutarı</Text>
                        <View>
                            <SimpleGradientProgressbarView
                                style={styles.progressBar}
                                fromColor="#D63333"
                                toColor="#48BF24"
                                progress={.8}
                                cornerRadius={1}
                            />
                            <View style={{ flexDirection: 'column', marginTop: 5 }}>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <Text style={styles.totalBalanceTitle}>Bölüş Tutarı</Text>
                                    <Text style={styles.totalBalanceTitle}>Toplam Tutar</Text>
                                </View>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <Text style={styles.totalBalance}>155.00</Text>
                                    <Text style={styles.totalBalance}>620.00</Text>
                                </View>
                            </View>
                        </View>
                        <Text style={styles.col3Title}>Seçili Harcama</Text>
                        <CostCard
                            costCategory={["Giyim", "Aksesuar"]}
                            costName='Amazon'
                            costDate={new Date()}
                            processPrice={"100,00"}
                            processType={false}
                        />
                        <CostCard
                            costCategory={["Giyim"]}
                            costName='Amazon'
                            costDate={new Date()}
                            processPrice={"100,00"}
                            processType={true}
                        />
                        <CostCard
                            costCategory={["Giyim", "Aksesuar"]}
                            costName='Amazon'
                            costDate={new Date()}
                            processPrice={"100,00"}
                            processType={false}
                        />
                        <Text style={styles.col4Title}>Kişiler</Text>
                        <UserCard
                            activeOpacity={.7}
                            isMe={true}
                            isPaid={true}
                            userName='Sen'
                        />
                        <UserCard
                            activeOpacity={.7}
                            isMe={false}
                            isPaid={true}
                            userName='Şengül Armağan'
                        />
                        <UserCard
                            activeOpacity={.7}
                            isMe={false}
                            isPaid={true}
                            userName='Zeki Aslan'
                        />
                        <CostActionButons />
                    </View>

                </ScrollView>

            </Container>
        </BackgroundContainer>
    )
}

export const CostCard = (props: { costName: string, costCategory: string[], costDate: Date, processType: boolean, processPrice: any }) => {
    let counter = 0;
    return (
        <View style={costCardStyles.container}>
            <View style={costCardStyles.userInfo}>
                <View style={costCardStyles.iconContainer}>
                    <FontAwesomeIcon icon={faShoppingBasket} />
                </View>
                <View style={{ flexDirection: 'column', justifyContent: 'space-around', marginLeft: 10 }}>
                    <Text style={costCardStyles.userNameText} numberOfLines={1}>{props.costName}</Text>
                    <Text style={costCardStyles.userProcessText}>{
                        props.costCategory.map((item: string) => {
                            counter++;
                            return counter === props.costCategory.length ? item : item + ' / '

                        })
                    }</Text>
                </View>
            </View>
            <View style={costCardStyles.userBalanceInfo}>
                <Text style={{ ...costCardStyles.userBalanceText, color: props.processType ? "#48BF24" : "#D63333" }}>{`${props.processType ? "+" : "-"}₺${props.processPrice}`}</Text>
                <Text style={costCardStyles.userProcessDate}>{moment(props.costDate).format('DD.MMM dd, HH:mm')}</Text>
            </View>
        </View>
    )
}
interface UserCardProps extends TouchableOpacityProps {
    userName: string,
    userImage?: string,
    isPaid: true | false,
    isMe: true | false,
}
const UserCard: React.FC<UserCardProps> = ({ userImage, userName, isMe, isPaid, ...res }) => {
    return (
        <TouchableOpacity {...res} style={userCardStyles.cardContainer}>
            <View style={userCardStyles.userInfo}>
                <Image source={userImage != null ? { uri: userImage } : require('../../images/UserPhoto.png')} style={{ height: 40, width: 40 }} />
                <View style={{ flexDirection: 'column', justifyContent: 'space-around', marginLeft: 10 }}>
                    <Text style={userCardStyles.userNameText}>{userName}</Text>
                </View>
            </View>
            <View style={{ ...userCardStyles.costStatus, flex: isMe && !isPaid ? 1.5 : 1, justifyContent: !isMe ? 'flex-end' : 'center' }}>
                {
                    isMe ?
                        isPaid ?
                            <>
                                <View style={userCardStyles.iconContainer}>
                                    <FontAwesomeIcon icon={faCheck} color="#fff" size={10} />
                                </View>
                                <Text style={userCardStyles.isPaidText}>Payını Ödedin</Text>
                            </>
                            :
                            <>
                                <View style={userCardStyles.isntIconContainer}>
                                    <FontAwesomeIcon icon={faCheck} color="#fff" size={10} />
                                </View>
                                <Text style={userCardStyles.isntPaidText}>Payını Ödemedin</Text>
                            </>
                        :
                        <TouchableOpacity {...res} style={{ paddingRight: 10 }}>
                            <FontAwesomeIcon icon={faAngleRight} color={"#e7e7e7"} size={20} />
                        </TouchableOpacity>
                }
            </View>
        </TouchableOpacity>
    )
}
