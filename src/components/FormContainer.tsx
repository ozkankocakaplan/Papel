import React from 'react'
import { Dimensions, Platform } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
export default function FormContainer(props: { children: React.ReactNode }) {
    return (
        <KeyboardAwareScrollView
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            nestedScrollEnabled={true}

            style={{ height: Dimensions.get('screen').height - 200, }}
        >
            {props.children}
        </KeyboardAwareScrollView>

    )
}
