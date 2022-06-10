import { faAngleDown, faAngleRight, faCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import React, { useState } from 'react'
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native'

const CurrencyDropDown = (props: { title: string, data: any, selectedData: any, handleChangeData: (item: any) => void }) => {

    const [dropDownShow, setDropDownShow] = useState<boolean>(false);
    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={() => setDropDownShow(!dropDownShow)}
                activeOpacity={.7}
                style={styles.filtreDropDown}>
                <View style={{ flexDirection: 'column' }}>
                    <Text style={styles.selectedText2}>{props.selectedData}</Text>
                </View>

                <FontAwesomeIcon style={styles.filtreIcon} color="#3D21A2" icon={faAngleDown} />
            </TouchableOpacity>
            {
                dropDownShow &&
                <View style={styles.dropDownContainer}>
                    {
                        props.data.map((item: any) => {
                            return <TouchableOpacity
                                onPress={() => {
                                    if (props.selectedData === item) {
                                        props.handleChangeData('')
                                    }
                                    else {
                                        props.handleChangeData(item)
                                    }

                                    setDropDownShow(false);
                                }}
                                key={item}
                                activeOpacity={.7}
                                style={styles.dropDownItem}>
                                <Text style={styles.itemText}>{item}</Text>
                                {
                                    props.selectedData === item &&
                                    <FontAwesomeIcon icon={faCheck} color="#48BF24" />
                                }
                            </TouchableOpacity>
                        })
                    }
                </View>
            }
        </View>

    )
}
export default CurrencyDropDown;
const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    filtreDropDown: {
        fontSize: 14,
        color: '#727272',
        fontWeight: '500',
        borderRadius: 10,
       
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',

    },
    dropDownContainer: {
        borderTopLeftRadius: 10, borderTopRightRadius: 10,
        borderBottomRightRadius: 5, borderBottomLeftRadius: 5,
        backgroundColor: '#fff',
        position: 'absolute',
        top: 50,
        shadowColor: 'rgba(0, 0, 0, 0.2)',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 10,
        shadowRadius: 3.14,
        width: '100%',
    },
    dropDownItem: {
        flexDirection: 'row',
        padding: 10, justifyContent: 'space-between',
    },
    itemText: {
        fontSize: 14,
        color: '#141414',
        fontWeight: '400'
    },
    filtreText: {
        color: '#141414',
        fontWeight: 'bold',
        fontSize: 14,
        paddingLeft: 20
    },
    filtreIcon: {
        paddingRight: 40
    },
    selectedText1: {
        paddingLeft: 10,
        color: '#3D21A2',
        fontSize: 12,
        fontWeight: '400'
    },
    selectedText2: {
        paddingLeft: 10,
        color: '#141414',
        fontSize: 16,
        fontWeight: '400'
    },


})