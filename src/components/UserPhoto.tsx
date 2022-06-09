import { faCheck, faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import React from 'react'
import { Image, StyleSheet, TouchableOpacity, TouchableOpacityProps, View } from 'react-native'
interface UserPhotoProps extends TouchableOpacityProps {
    photo?: string,
    local: boolean,
    isPaid: boolean,
};
const UserPhoto: React.FC<UserPhotoProps> = ({ photo, local, isPaid, ...res }) => {
    return (
        <TouchableOpacity {...res} style={styles.container}>
            <Image source={local ? require("../../images/UserPhoto.png") : { uri: photo }} style={[styles.imageContainer, !isPaid && { opacity: 0.5, }]}></Image>
            {isPaid && <View style={styles.iconContainer}>
                <FontAwesomeIcon icon={faCheck} color="#fff" size={10} />
            </View>}
        </TouchableOpacity>

    )
}
export default UserPhoto;
const styles = StyleSheet.create({
    container: {
        height: 50, width: 50, borderRadius: 100, marginRight: 10,
    },
    imageContainer: {
        height: 50, width: 50,
        borderRadius: 100,
        resizeMode: 'contain',
    },
    iconContainer: {
        position: 'absolute',
        right: 0,
        bottom: 0,
        borderWidth: 2, borderColor: '#fff',
        borderRadius: 100,
        height: 20, width: 20, justifyContent: 'center', alignItems: 'center',
        backgroundColor: '#48BF24'
    }
})
