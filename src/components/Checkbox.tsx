import React from 'react'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { StyleSheet, TouchableOpacity, TouchableOpacityProps, View, Text } from 'react-native'

interface CheckboxProps extends TouchableOpacityProps {
    checkhed: boolean
}
const Checkbox: React.FC<CheckboxProps> = ({ checkhed, ...res }) => {
    return (
        <View style={styles.container} {...res}>
            <TouchableOpacity {...res} style={{ ...styles.checkBox, backgroundColor: checkhed ? "#3D21A2" : "#fff" }} >
                {
                    checkhed && <FontAwesomeIcon icon={faCheck} color="#fff" />
                }
            </TouchableOpacity>
            <View style={{ paddingLeft: 20, width: '95%' }}>
                <Text style={styles.boldContractText}>Hesap Açma Sözleşmesini <Text style={styles.contractText}>okudum, onaylıyorum.</Text></Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    checkBox: {
        width: 25, height: 25, borderRadius: 5,
        borderWidth: 1,
        borderColor: '#e7e7e7',
        justifyContent: 'center', alignItems: 'center'
    },
    boldContractText: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#141414',
    },
    contractText: {
        fontSize: 14,
        fontWeight: '400',
        color: '#141414',
    }
})
export default Checkbox;