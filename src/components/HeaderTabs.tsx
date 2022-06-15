import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React, { useState } from 'react'
import { StyleSheet, View, Text } from 'react-native';
import { Notch } from './Container';

const HeaderTabs = (props: { currentTabIndex: number, HeaderTabList: any }) => {
    var counterTab = 0;
    const NumberContainer = (props: { stepCount: number, isSuccess: boolean }) => {
        return (
            <View style={{ ...styles.numberContainer, backgroundColor: props.isSuccess ? "#02BDD0" : "#f3f3f3" }}>
                {
                    props.isSuccess
                        ?
                        <FontAwesomeIcon icon={faCheck} color="#fff" />
                        :
                        <Text style={styles.numberText}>{props.stepCount}</Text>
                }
            </View>
        )
    }
    const CurrentContainer = (props: { currentValue: string }) => {
        return (
            <View style={styles.currentContainer}>
                <Text style={styles.currentText}>{props.currentValue}</Text>
            </View>
        )
    }
    return (
        <View style={styles.container}>
            {
                props.HeaderTabList.map((item: any, index: number) => {
                    counterTab++;
                    if (props.currentTabIndex === index) {
                        return <View key={index} style={{ flexDirection: 'row' }}>
                            <CurrentContainer currentValue={item} />
                            {
                                counterTab !== props.HeaderTabList.length && <Notch width={10} extraStyle={{ marginLeft: 4, marginRight: 4 }} />
                            }
                        </View>
                    }
                    else {
                        if (counterTab === props.HeaderTabList.length) {
                            return <NumberContainer isSuccess={props.currentTabIndex > index} key={index} stepCount={(index + 1)} />
                        }
                        else {
                            return <View key={index} style={{ flexDirection: 'row' }}>
                                <NumberContainer isSuccess={props.currentTabIndex > index} stepCount={(index + 1)} />
                                <Notch width={10} extraStyle={{ marginLeft: 4, marginRight: 4 }} />
                            </View>

                        }
                    }
                })
            }
        </View>
    )
}
export default HeaderTabs;
const styles = StyleSheet.create({
    container: {
        
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
    },
    currentContainer: {
        backgroundColor: '#fff',
        paddingBottom: 5, paddingTop: 5,
        paddingLeft: 15, paddingRight: 15,
        borderRadius: 18,
        borderColor: '#02BDD0', borderWidth: 1,
        justifyContent: 'center', alignItems: 'center'
    },
    numberContainer: {
        height: 30, width: 30,
        borderRadius: 100,
        justifyContent: 'center', alignItems: 'center'
    },
    numberText: {
        color: '#B8B8B8',
        fontSize: 14,
        fontWeight: '400'
    },
    currentText: {
        color: '#02BDD0',
        fontSize: 14,
        fontWeight: 'bold'
    },
})