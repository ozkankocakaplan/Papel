import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import BackgroundContainer from '../components/BackgroundContainer'
import Button from '../components/Button'
import Container from '../components/Container'
import HeaderTabs from '../components/HeaderTabs'
import MainHeader from '../components/MainHeader'
import Steps1 from '../createShareSteps/Steps1'



export default function CreateShare(props: any) {
    return (
        <BackgroundContainer style={{ justifyContent: 'flex-end' }}>
            <MainHeader
                title='Bölüş Hesabı Oluştur'
                icon2={faInfoCircle}
                leftonPress={() => props.navigation.goBack()}
                rightonPress={() => console.log("a")}
            />
            <Container valueHeight={1.16}>
                <HeaderTabs HeaderTabList={["Bölüştür Bilgileri", "Kişi Seç", "Ödeme Bilgileri", "Özet"]} currentTabIndex={0} />
                <ScrollView showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false} contentInset={{ bottom: 20 }}>
                    <Steps1 navigation={props.navigation} />
                </ScrollView>
                <View style={styles.footerButonContainer}>
                    <Button
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
            </Container>

        </BackgroundContainer>
    )
}
const styles = StyleSheet.create({
    footerButonContainer: {
        margin: -10,
        padding: 15,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: .24,
        shadowRadius: 3.84,
        elevation: 5
    }
})