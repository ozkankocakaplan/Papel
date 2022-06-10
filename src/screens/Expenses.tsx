import React, { useState } from 'react'
import { faSearch, faShoppingBasket } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { Platform, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, TouchableOpacityProps, View } from 'react-native'
import { useSelector, useDispatch } from 'react-redux';

import { costCardStyles } from './ShareDetails'
import { AppState } from '../store/index'
import moment from 'moment-with-locales-es6'
import BackgroundContainer from '../components/BackgroundContainer'
import Button from '../components/Button'
import Container from '../components/Container'
import DropDown from '../components/DropDown'
import MainHeader from '../components/MainHeader'
import Option from '../components/Option'
import actionTypes from '../store/redux/actions/actionTypes';
moment.locale('tr')
const dumpDate = ["2022-06-09T11:23:41.846Z", "2022-06-08T11:23:41.846Z"];
const dumpData = [
    {
        id: 1,
        name: "Amazon",
        category: ["Giyim", "Aksesuar"],
        date: "2022-06-09T11:23:41.846Z"
    },
    {
        id: 2,
        name: "Getir Perakende Lojistik",
        category: ["Diğer"],
        date: "2022-06-09T11:23:41.846Z"
    },
    {
        id: 3,
        name: "Kardeşler Şarküteri",
        category: ["Market"],
        date: "2022-06-08T11:23:41.846Z"
    },
    {
        id: 4,
        name: "Starbucks",
        category: ["Yiyecek", "İçeçek"],
        date: "2022-06-08T11:23:41.846Z"
    },
    {
        id: 5,
        name: "Starbucks",
        category: ["Yiyecek", "İçeçek"],
        date: "2022-06-08T11:23:41.846Z"
    }
    ,
    {
        id: 6,
        name: "Starbucks",
        category: ["Yiyecek", "İçeçek"],
        date: "2022-06-08T11:23:41.846Z"
    }

]
export default function Expenses(props: any) {
    const { selectedExpense } = useSelector((state: AppState) => state.expenses);
    const dispatch = useDispatch();

    const [selectedDateFilter, setSelectedDateFilter] = useState<string>('');
    const [selectedExpensesType, setSelectedExpensesType] = useState<string>('');
    const [searchText, setSearchText] = useState<string>('');//SearchText
    return (
        <BackgroundContainer style={{ justifyContent: 'flex-end' }}>
            <MainHeader
                title='Harcama Seç'
                leftonPress={() => props.navigation.goBack()}
            />
            <Container valueHeight={1.16}>
                <View style={styles.textInputContainer}>
                    <FontAwesomeIcon style={styles.iconContainer} size={14} color="#b8b8b8" icon={faSearch} />
                    <TextInput
                        value={searchText}
                        onChangeText={(text) => setSearchText(text)}
                        focusable={false} placeholder='Harcama Ara' style={styles.textInput} />
                </View>
                <View style={styles.filtreContainer}>
                    <View style={{ flex: 1, marginRight: 15 }}>
                        <DropDown
                            title='Tarih Aralığı'
                            selectedData={selectedDateFilter}
                            handleChangeData={(data) => setSelectedDateFilter(data)}
                            data={["Son 7 Gün"]} />
                    </View>
                    <View style={{ flex: 1 }}>
                        <DropDown
                            title='Harcama Tipi'
                            selectedData={selectedExpensesType}
                            handleChangeData={(data) => setSelectedExpensesType(data)}
                            data={["Tümü"]} />
                    </View>
                </View>
                <ScrollView

                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ marginLeft: 15, marginRight: 15 }} contentInset={{ bottom: 10 }}>
                    {
                        dumpDate.map((item) => {
                            return <View key={new Date(item).getDate()}>
                                <Text style={styles.dateTitle}>{moment(item).format("DD MMMM")}</Text>
                                {
                                    dumpData.filter((x) => new Date(x.date).getDate() === new Date(item).getDate()).map((data) => {
                                        let check = selectedExpense.length != 0 && selectedExpense.find(x => x.id === data.id);
                                        return <OptionCostCard
                                            key={data.id}
                                            icon={faShoppingBasket}
                                            onPress={() => {
                                                if (!check) {
                                                    dispatch({ type: actionTypes.ADD_EXPENSES, payload: data })
                                                }
                                                else {
                                                    dispatch({ type: actionTypes.DELETE_EXPENSES, payload: data.id })
                                                }
                                            }}
                                            activeOpacity={.7}
                                            selected={!!check}
                                            costCategory={data.category}
                                            costName={data.name}
                                            costDate={new Date()}
                                            processPrice={"768,00"}
                                            processType={false}
                                        />
                                    })
                                }
                            </View>
                        })
                    }
                </ScrollView>
                <View style={styles.footerButonContainer}>
                    <Button
                        onPress={() => props.navigation.goBack()}
                        activeOpacity={.7}
                        butonStyle={{ marginBottom: 20, backgroundColor: '#3D21A2' }}
                        textStyle={{ color: '#fff' }}
                        title="Harcamayı Seç"
                    />
                </View>
            </Container>
        </BackgroundContainer>
    )
}
const styles = StyleSheet.create({
    footerButonContainer: {
        height: Platform.OS === "android" ? 150 : 100,
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
    },
    filtreContainer: {
        marginLeft: 5, marginRight: 5,
        marginTop: 10,
        justifyContent: 'space-between',
        flexDirection: 'row',
        padding: 5,
        height: 50,
        zIndex: 12, elevation: 12
    },
    textInputContainer: {
        marginTop: 15,
        marginLeft: 10, marginRight: 10,
    },
    iconContainer: {
        position: 'absolute',
        top: 15,
        left: 10,
    },
    textInput: {
        borderWidth: 1, borderColor: '#e7e7e7',
        paddingTop: 10, paddingBottom: 10, paddingLeft: 30,
        borderRadius: 5,
        fontSize: 16,
        color: '#b8b8b8',
        fontWeight: '500'
    },
    dateTitle: {
        marginTop: 25,
        color: '#141414',
        fontWeight: 'bold',
        fontSize: 18,
    },
    optionCostCardContainer: {
        borderWidth: 0, paddingLeft: 0,
    }
})
interface OptionCostCardProps extends TouchableOpacityProps {
    selected: boolean,
    costName: string,
    costCategory: string[],
    costDate: Date,
    processType: boolean,
    processPrice: any,
    icon: any,
}
const OptionCostCard: React.FC<OptionCostCardProps> = ({ icon, selected, costName, costCategory, costDate, processType, processPrice, ...res }) => {
    let counter = 0;
    return (
        <TouchableOpacity {...res} style={[costCardStyles.container, styles.optionCostCardContainer]}>
            <Option selected={selected} />
            <View style={{ borderBottomWidth: 1, borderBottomColor: '#e7e7e7', paddingBottom: 15, flex: 1, flexDirection: 'row' }}>
                <View style={costCardStyles.userInfo}>
                    <View style={costCardStyles.iconContainer}>
                        <FontAwesomeIcon icon={icon} />
                    </View>
                    <View style={{ flexDirection: 'column', justifyContent: 'space-around', marginLeft: 10 }}>
                        <Text style={costCardStyles.userNameText} numberOfLines={1}>{costName}</Text>
                        <Text style={costCardStyles.userProcessText}>{
                            costCategory.map((item: string) => {
                                counter++;
                                return counter === costCategory.length ? item : item + ' / '

                            })
                        }</Text>
                    </View>
                </View>
                <View style={costCardStyles.userBalanceInfo}>
                    <Text style={{ ...costCardStyles.userBalanceText, color: processType ? "#48BF24" : "#D63333" }}>{`${processType ? "+" : "-"}₺${processPrice}`}</Text>
                    <Text style={costCardStyles.userProcessDate}>{moment(costDate).format('DD.MMM dd, HH:mm')}</Text>
                </View>
            </View>

        </TouchableOpacity>
    )
}