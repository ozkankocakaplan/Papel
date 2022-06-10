import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React from 'react'
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useSelector } from 'react-redux';
import Button from '../components/Button';
import { AppState } from '../store';

export default function Steps2(props: { navigation: any, goEdit: () => void }) {
    const { account } = useSelector((state: AppState) => state.expenses);

    return (
        <View style={{ flex: 1 }}>
            <View style={{ marginTop: 15, justifyContent: 'center' }}>
                <Text style={styles.headerTitle}>Aşağıdaki bilgileri onayladığınızda hesabınız açılacaktır.</Text>
            </View>
            <ScrollView contentContainerStyle={{ justifyContent: 'flex-start', flex: 1, padding: 5 }}
                key={"currentStep"}
                showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false} contentInset={{ bottom: 30 }}>
                <View style={styles.infoContainer}>
                    <View style={styles.infoHeader}>
                        <Text style={styles.infoTitle}>Hesap Bilgileri</Text>
                        <TouchableOpacity
                            onPress={props.goEdit}
                            activeOpacity={.7}
                            style={styles.infoHeaderRow}>
                            <FontAwesomeIcon style={styles.infoEditIcon} icon={faPencilAlt} color="#3D21A2" />
                            <Text style={styles.infoEditText}>Düzenle</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.infoBody}>
                        <Text style={styles.mainSubTitle}>PARA BİRİMİ</Text>
                        <Text style={styles.mainText}>{account.accountCurrency === "TRY" ? "Türk Lirasi " : "Amerikan Doları "}({account.accountCurrency})</Text>
                    </View>
                    <View style={styles.infoBody}>
                        <Text style={styles.mainSubTitle}>HESAP ADI</Text>
                        <Text style={styles.mainText}>{account.accountName}</Text>
                    </View>
                    <View style={styles.infoBody}>
                        <Text style={styles.mainSubTitle}>HESAP AÇILIŞ AMACI</Text>
                        <Text style={styles.mainText}>{account.accountType}</Text>
                    </View>
                </View>
            </ScrollView>

            <View style={styles.footerButonContainer}>
                <Button
                    activeOpacity={.7}
                    butonStyle={{ marginBottom: 20, backgroundColor: '#3D21A2' }}
                    textStyle={{ color: '#fff' }}
                    title="Hesabı Aç"
                />
                <Button
                    onPress={() => props.navigation.goBack()}
                    activeOpacity={.7}
                    butonStyle={{ marginBottom: 20 }}
                    title="Vazgeç"
                />
            </View>
        </View>

    )
}
const styles = StyleSheet.create({
    headerTitle: {
        fontSize: 15,
        lineHeight: 18,
        fontWeight: '400',
        textAlign: 'center',
        color: '#141414',
    },
    footerButonContainer: {
        padding: 15,
        backgroundColor: '#fff',
    },
    infoContainer: {
        marginTop: 25,
        backgroundColor: '#fbfbfb',
        borderWidth: 1, borderColor: '#e7e7e7',
        borderRadius: 10,
        padding: 15,
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
        flexDirection: 'column',
        marginBottom: 20,
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
})
