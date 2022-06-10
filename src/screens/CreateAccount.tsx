import React, { useState } from 'react'
import { ScrollView } from 'react-native'
import { useSelector } from 'react-redux'
import BackgroundContainer from '../components/BackgroundContainer'
import Container from '../components/Container'
import HeaderTabs from '../components/HeaderTabs'
import MainHeader from '../components/MainHeader'
import Steps1 from '../createAccountSteps/Steps1'
import Steps2 from '../createAccountSteps/Steps2'
import { AppState } from '../store'

const tabList = ["Hesap Bilgileri", "Özet"];
export default function CreateAccount(props: any) {
    const { account } = useSelector((state: AppState) => state.expenses)
    const [currentStep, setCurrentStep] = useState(0);
    const RenderStep = () => {
        switch (currentStep) {
            case 0:
                return <Steps1 navigation={props.navigation} handleGoStep={() => goStep(1)} />
            case 1:
                return <Steps2 navigation={props.navigation} goEdit={() => goStep(0)} />
            default:
                break;
        }
    }
    const goStep = (stepIndex: number) => {
        setCurrentStep(stepIndex);
    }
    return (
        <BackgroundContainer style={{ justifyContent: 'flex-end' }}>
            <MainHeader
                title={`Yeni ${account.accountCurrency} Hesabı Aç`}
            />
            <Container valueHeight={1.16}>
                <HeaderTabs currentTabIndex={currentStep} HeaderTabList={tabList} />
                {RenderStep()}
            </Container>
        </BackgroundContainer>
    )
}
