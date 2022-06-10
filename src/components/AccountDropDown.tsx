import { faAngleDown, faAngleRight, faCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import React, { useState } from 'react'
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native'

const AccountDropDown = (props: { data: any, selectedData: any, handleChangeData: (item: any) => void }) => {

    const [dropDownShow, setDropDownShow] = useState<boolean>(false);
    return (
        <View style={{ zIndex: 12, elevation: 12, }}>
            <TouchableOpacity
                onPress={() => setDropDownShow(!dropDownShow)}
                activeOpacity={.7}
                style={styles.filtreDropDown}>
                <Text style={styles.selectedText2}>{props.selectedData}</Text>
                <FontAwesomeIcon style={styles.filtreIcon} size={20} color="#fff" icon={faAngleDown} />
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
export default AccountDropDown;
const styles = StyleSheet.create({
    filtreDropDown: {
        fontWeight: '500',
        borderRadius: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',

    },
    dropDownContainer: {

        backgroundColor: '#fff',
        position: 'absolute',
        top: 30, left: 0, right: 0,
        shadowColor: 'rgba(0, 0, 0, 0.2)',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 10,
        shadowRadius: 3.14,

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
        color: '#fff', fontWeight: 'bold', lineHeight: 24, fontSize: 20,
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
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold'
    },


})