import React from 'react'
import BackgroundContainer from '../components/BackgroundContainer'
import Header from '../components/Header'

export default function Home(props: any) {
    return (
        <BackgroundContainer>
            <Header goNotification={() => props.navigation.navigate('Notification')} />
        </BackgroundContainer>
    )
}
