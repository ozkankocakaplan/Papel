import React, { useState } from 'react'
import { FlatList, Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import BackgroundContainer from '../components/BackgroundContainer'
import Container from '../components/Container'
import MainHeader from '../components/MainHeader';
interface NotificationModels {
    id: number;
    title: string;
    body: string;
}
export default function Notifications(props: any) {
    const [notificationsList, setNotificationsList] = useState<Array<NotificationModels>>([{ id: 1, title: "test", body: "test" }]);
    // const [notificationsList, setNotificationsList] = useState<Array<NotificationModels>>([]);
    const NotificationCount = (props: { count: number }) => {
        return (
            <View style={styles.notificationCountContainer}>
                <Text style={styles.notificationText}><Text style={styles.notificationCountText}>{props.count} yeni bildiriminiz</Text> bulunuyor</Text>
            </View>
        )
    }
    const NotificationDate = (props: { value: string }) => {
        return (
            <View style={styles.notificationDateContainer}>
                <Text style={styles.notificationDateText}>{props.value}</Text>
            </View>
        )
    }
    const ThumpUser = (props: { zIndex: number, right: number }) => {
        return (
            <Image style={{ ...styles.cardUserProfil, right: props.right, zIndex: props.zIndex }} source={require('../../images/Photo.png')} />
        )
    }
    const Card = (props: { process: string, ThumpList: number[], isItold: boolean, body: string }) => {
        return (
            <View style={{ ...styles.cardContainer, backgroundColor: props.isItold ? '#fff' : '#CAFCF0' }}>
                <View style={styles.cardHeader}>
                    <Text style={styles.cardHeaderText}>{props.process}</Text>
                    <View style={styles.cardHeaderRightUsers}>
                        {
                            props.ThumpList.map((item, index) => <ThumpUser key={index} right={(15 * index)} zIndex={index + 1} />)
                        }
                    </View>
                </View>
                <Text style={styles.cardBodyText} numberOfLines={2}>{props.body}</Text>
            </View>
        )
    }
    return (
        <BackgroundContainer style={{ justifyContent: 'flex-end' }}>
            <MainHeader
                title='Bildirimler'
                leftonPress={() => props.navigation.goBack()}
                rightonPress={() => console.log("settings")}
            />
            <Container valueHeight={1.16}>
                {
                    notificationsList.length > 0 ?
                        <>
                            <NotificationCount count={3} />
                            <ScrollView showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>
                                <NotificationDate value={"11 NİSAN 2022"} />
                                <Card process={"Gelen Transfer"} ThumpList={[1]} isItold={false} body="Certe, inquam, pertinax non recusandae itaque aiunt hanc quasi naturalem." />
                                <Card process={"Bölüş"} ThumpList={[1, 2, 3,]} isItold={false} body="Certe, inquam, pertinax non recusandae itaque aiunt hanc quasi naturalem." />
                                <Card process={"Bölüş"} ThumpList={[1, 2, 3,]} isItold={false} body="Lorem Ipsum bölüşü için belirlenen ₺ 1.800,00 tamamlandı." />
                                <NotificationDate value={"9 NİSAN 2021"} />
                                <Card process={"Para Çekimi"} ThumpList={[]} isItold={true} body="Lorem ipsum dolor sit amet, ₺ 500,00 consectetur adipiscing elit, sed do eiusmod tempor incididunt." />
                                <Card process={"Para Çekimi"} ThumpList={[1, 2, 3]} isItold={true} body="Lorem ipsum dolor sit amet, ₺ 500,00 consectetur." />
                                <NotificationDate value={"21 ARALIK 2020"} />
                                <Card process={"Para Çekimi"} ThumpList={[]} isItold={true} body="Lorem ipsum dolor sit amet." />
                            </ScrollView>
                        </>
                        : <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <Image source={require('../../images/notificationsBg.png')} />
                            <Text style={{ fontWeight: 'bold', fontSize: 16, color: '#141414', marginTop: 30 }}>Gösterilecek bir bildirim bulunmuyor!</Text>
                        </View>
                }
            </Container>
        </BackgroundContainer>
    )
}
const styles = StyleSheet.create({
    notificationCountContainer: {
        marginTop: 20, marginBottom: 15,
        marginLeft: 5, marginRight: 5,
    },
    notificationText: {
        fontWeight: '400', fontSize: 14, color: '#141414'
    },
    notificationCountText: {
        fontWeight: 'bold', fontSize: 14, color: '#141414'
    },
    notificationDateContainer: {
        marginTop: 20, marginBottom: 15,
        marginLeft: 5, marginRight: 5,
    },
    notificationDateText: {
        fontSize: 14,
        color: '#727272',
        fontWeight: '500'
    },
    cardContainer: {
        marginBottom: 15,
        marginLeft: 5, marginRight: 5,
        flexDirection: 'column',
        padding: 10,
        height: 92,
        borderRadius: 10,
        shadowColor: 'RGBA(0, 0, 0, 0.05)',
        shadowOffset: {
            height: 0,
            width: 0,
        },
        shadowOpacity: .1,
        shadowRadius: 3.14,
        elevation: 5
    },
    cardHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    cardHeaderText: {
        fontSize: 14,
        lineHeight: 25,
        color: '#141414',
        fontWeight: '500'
    },
    cardHeaderRightUsers: {
        flexDirection: 'row',
    },
    cardUserProfil: {
        position: 'absolute',
        right: 0,
        width: 25, height: 25, borderRadius: 100,
    },
    cardBodyText: {
        marginTop: 5,
        fontWeight: '400',
        fontSize: 14,
        color: '#727272',
        lineHeight: 16
    }
})
