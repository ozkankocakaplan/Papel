import { faAngleRight, faCheckCircle, faCircleExclamation, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React from 'react'
import { FlatList, StyleSheet, Text, TouchableOpacity, TouchableOpacityProps, View } from 'react-native';
import SimpleGradientProgressbarView from 'react-native-simple-gradient-progressbar-view';
import Button from './Button';
import UserPhoto from './UserPhoto';

interface SharedCardProps extends TouchableOpacityProps {
    isSuccess: boolean;
    isPaid: boolean,
    title: string,
    totalBalance: any,
    availableBalance: any,
    progressBar: any,
    cardType: 'MyInvitations' | 'MyCreated'

}
//isSuccess Değişkeni MyCreated İçin Kullanılıyor False Gelirse Ödeme Tamamlanması Bekleniyor Uyarısını Gösteriyor
//isPaid Değişkeni MyInvitations İçin Kullanılıyor False Gelirse Öde Uyarısını Gösteriyor True Gelirse Payını Ödedin
const ShareCard: React.FC<SharedCardProps> = ({ isSuccess, cardType, isPaid, title, totalBalance, availableBalance, progressBar, ...res }) => {
    return (
        <TouchableOpacity {...res} style={{ ...shareCardstyles.shareCard }}>
            <View style={shareCardstyles.cardHeader}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={shareCardstyles.shareCardHeaderTitle}>{title}</Text>
                    <FontAwesomeIcon icon={faAngleRight} color="#3D21A2" />
                </View>
                <Text style={shareCardstyles.shareCardHeaderPrice}>₺{availableBalance}</Text>
            </View>
            {isSuccess ? <SimpleGradientProgressbarView
                style={shareCardstyles.progressBar}
                fromColor="#48BF24"
                toColor="#48BF24"
                progress={progressBar}
                cornerRadius={1}
            />
                : <SimpleGradientProgressbarView
                    style={shareCardstyles.progressBar}
                    fromColor="#D63333"
                    toColor="#48BF24"
                    progress={progressBar}
                    cornerRadius={1}
                />
            }
            <View style={{ justifyContent: 'center', alignItems: 'flex-end' }}>
                <Text style={shareCardstyles.priceText}>₺{availableBalance} / ₺{totalBalance}</Text>
            </View>
            <FlatList
                data={[true, true, true, false].sort((a, b) => a === b ? 0 : a ? -1 : 1)}
                key="1"
                bounces={false}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => <UserPhoto activeOpacity={.7} isPaid={item} local={true} />}
            />
            {!isSuccess && cardType === 'MyCreated' && <View style={shareCardstyles.orderInfo}>
                <View style={{ paddingLeft: 5 }}>
                    <FontAwesomeIcon icon={faCircleExclamation} color="#934C29" />
                </View>
                <Text style={shareCardstyles.orderInfoText}>Ödemelerin Tamamlanması Bekleniyor!</Text>
            </View>}
            {
                cardType === 'MyInvitations' ?
                    isPaid ?
                        <Button
                            activeOpacity={1}
                            textStyle={{ color: '#48BF24' }}
                            icon={faCheckCircle}
                            iconProperty={{ size: 17, color: '#48BF24' }}
                            butonStyle={{ height: 35, backgroundColor: '#CCF8A7', marginTop: 10 }}
                            title="Payını Ödedin"
                        />
                        :
                        <Button
                            onPress={() => console.log("öde")}
                            activeOpacity={.7}
                            textStyle={{ color: '#fff' }}
                            butonStyle={{ height: 35, backgroundColor: '#48BF24', marginTop: 10 }}
                            title="₺55,90 Öde"
                        />
                    : null
            }
        </TouchableOpacity>
    )
}
const shareCardstyles = StyleSheet.create({
    shareCard: {
        padding: 15,
        backgroundColor: '#fff',
        borderRadius: 10,
        marginBottom: 10,
        shadowColor: 'rgba(0, 0, 0, 0.2)',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 10,
        shadowRadius: 3.14,
        flexDirection: 'column',
    },
    cardHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    shareCardHeaderTitle: {
        color: '#141414',
        fontWeight: 'bold',
        fontSize: 16
    },
    shareCardHeaderPrice: {
        color: '#141414',
        fontWeight: 'bold',
        fontSize: 16
    },
    priceText: {
        color: '#141414',
        fontWeight: '400',
        fontSize: 14,
        marginVertical: 5,
    },
    progressBar: {
        backgroundColor: '#E7E7E7',
        height: 5,
        marginTop: 15,
        borderRadius: 10,
    },
    orderInfo: {
        borderRadius: 5,
        alignItems: 'center',
        backgroundColor: '#FFECCD',
        height: 30,
        flexDirection: 'row',
        padding: 5,
        marginTop: 10,
    },
    orderInfoText: {
        color: '#934C29',
        fontSize: 12,
        fontWeight: '400',
        paddingLeft: 5,
    }
})
export default ShareCard;