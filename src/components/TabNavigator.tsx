import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCreditCard, faDiagramNext, faHome, faMessage, faMoneyBillTransfer } from '@fortawesome/free-solid-svg-icons';

import Home from '../screens/Home';
import Share from '../screens/Share';
import Message from '../screens/Message';
import Cards from '../screens/Cards';
import Transfer from '../screens/Transfer';


const Tab = createBottomTabNavigator();
export default function TabNavigator() {
    return (
        <Tab.Navigator>
            <Tab.Screen
                options={{
                    headerShown: false,
                    tabBarLabelStyle: { fontWeight: 'bold' },
                    tabBarActiveTintColor: '#39219D',
                    tabBarIcon: ({ focused }) => !focused
                        ?
                        <FontAwesomeIcon size={20} color='#B1B1B2' icon={faHome} />
                        :
                        <FontAwesomeIcon size={20} color='#39219D' icon={faHome} />
                }}
                name="Ana Sayfa" component={Home} />
            <Tab.Screen
                options={{
                    headerShown: false,
                    tabBarLabelStyle: { fontWeight: 'bold' },
                    tabBarActiveTintColor: '#39219D',
                    tabBarIcon: ({ focused }) =>
                        !focused ?
                            <FontAwesomeIcon size={20} color='#B1B1B2' icon={faDiagramNext} />
                            :
                            <FontAwesomeIcon size={20} color='#39219D' icon={faDiagramNext} />
                }}
                name="Bölüş" component={Share} />
            <Tab.Screen
                options={{
                    headerShown: false,
                    tabBarLabelStyle: { fontWeight: 'bold' },
                    tabBarActiveTintColor: '#39219D',
                    tabBarIcon: ({ focused }) =>
                        !focused
                            ?
                            <FontAwesomeIcon size={20} color='#B1B1B2' icon={faMoneyBillTransfer} />
                            :
                            <FontAwesomeIcon size={20} color='#39219D' icon={faMoneyBillTransfer} />

                }}
                name="Transfer" component={Transfer} />
            <Tab.Screen name="Mesajlar"
                options={{
                    headerShown: false,
                    tabBarLabelStyle: { fontWeight: 'bold' },
                    tabBarActiveTintColor: '#39219D',
                    tabBarIcon: ({ focused }) =>
                        !focused ?
                            <FontAwesomeIcon size={20} color='#B1B1B2' icon={faMessage} />
                            :
                            <FontAwesomeIcon size={20} color='#39219D' icon={faMessage} />
                }}
                component={Message} />
            <Tab.Screen name="Kartlar"
                options={{
                    headerShown: false,
                    tabBarLabelStyle: { fontWeight: 'bold' },
                    tabBarActiveTintColor: '#39219D',
                    tabBarIcon: ({ focused }) =>
                        !focused ?
                            <FontAwesomeIcon size={20} color='#B1B1B2' icon={faCreditCard} />
                            :
                            <FontAwesomeIcon size={20} color='#39219D' icon={faCreditCard} />
                }}
                component={Cards} />
        </Tab.Navigator>
    )
}
