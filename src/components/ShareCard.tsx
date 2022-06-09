import { faAngleRight, faCircleExclamation, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React from 'react'
import { FlatList, StyleSheet, Text, TouchableOpacity, TouchableOpacityProps, View } from 'react-native';
import SimpleGradientProgressbarView from 'react-native-simple-gradient-progressbar-view';
import UserPhoto from './UserPhoto';

interface SharedCardProps extends TouchableOpacityProps {
    isPaid: boolean,
    title: string,
    totalBalance: any,
    availableBalance: any,
    progressBar: any,

}

const ShareCard: React.FC<SharedCardProps> = ({ isPaid, title, totalBalance, availableBalance, progressBar, ...res }) => {
    return (
        <TouchableOpacity {...res} style={{ ...shareCardstyles.shareCard, height: !isPaid ? 190 : 150 }}>
            <View style={shareCardstyles.cardHeader}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={shareCardstyles.shareCardHeaderTitle}>{title}</Text>
                    <FontAwesomeIcon icon={faAngleRight} color="#3D21A2" />
                </View>
                <Text style={shareCardstyles.shareCardHeaderPrice}>₺{availableBalance}</Text>
            </View>
            {isPaid ? <SimpleGradientProgressbarView
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
            {!isPaid && <View style={shareCardstyles.orderInfo}>
                <View style={{ paddingLeft: 5 }}>
                    <FontAwesomeIcon icon={faCircleExclamation} color="#934C29" />
                </View>
                <Text style={shareCardstyles.orderInfoText}>Ödemelerin Tamamlanması Bekleniyor!</Text>
            </View>}
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
        padding: 5
    },
    orderInfoText: {
        color: '#934C29',
        fontSize: 12,
        fontWeight: '400',
        paddingLeft: 5,
    }
})
export default ShareCard;