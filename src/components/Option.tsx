import React from 'react'
import { StyleSheet, TouchableOpacity, TouchableOpacityProps, View } from 'react-native'

interface OptionProps extends TouchableOpacityProps {
    selected: boolean,
    extraStyle?: any
}

const Option: React.FC<OptionProps> = ({ extraStyle, selected, ...res }) => {
    return (
        <TouchableOpacity {...res} style={[!selected ? styles.optionContainer : styles.activeOptionContainer, extraStyle]}></TouchableOpacity>
    )
}
export default Option;
const styles = StyleSheet.create({
    optionContainer: {
        marginRight: 20,
        borderWidth: 1, borderColor: '#e7e7e7',
        backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center',
        height: 20, width: 20, borderRadius: 100,
    },
    activeOptionContainer: {
        marginRight: 20,
        borderWidth: 6, borderColor: '#3D21A2',
        backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center',
        height: 20, width: 20, borderRadius: 100,
    },
})
