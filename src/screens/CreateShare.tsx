import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import React, { useState, useCallback } from 'react'
import { Dimensions, Platform, SafeAreaView, ScrollView, StyleSheet, View } from 'react-native'
import BackgroundContainer from '../components/BackgroundContainer'
import Button from '../components/Button'
import Container from '../components/Container'
import HeaderTabs from '../components/HeaderTabs'
import MainHeader from '../components/MainHeader'
import Steps1 from '../createShareSteps/Steps1'
import Steps2 from '../createShareSteps/Steps2'
import Steps3 from '../createShareSteps/Steps3'
import Steps4 from '../createShareSteps/Steps4'
import Steps5 from '../createShareSteps/Steps5'



export default function CreateShare(props: any) {
    const [currentStep, setCurrentStep] = useState(0);
    const [stepFormCheck, setStepFormCheck] = useState({ step1: false, step2: false, step3: false, step4: false });
    const RenderStep = () => {
        switch (currentStep) {
            case 0:
                return <Steps1 goStep={() => setCurrentStep(1)} navigation={props.navigation} />;
            case 1:
                return <Steps2 goStep={() => setCurrentStep(2)} navigation={props.navigation} />;
            case 2:
                return <Steps3 goStep={() => setCurrentStep(3)} navigation={props.navigation} />;
            case 3:
                return <Steps4 goStep={() => setCurrentStep(4)} handleGoStep={(data: number) => editGoStep(data)} navigation={props.navigation} />;
            case 4:
                return <Steps5 navigation={props.navigation} />;
            default:
                break;
        }
    }
    const goStep = () => {
        if (currentStep === 0 && stepFormCheck.step1) {
            setCurrentStep(1);
        }
        if (currentStep === 1 && stepFormCheck.step2) {
            setCurrentStep(2);
        }
        if (currentStep === 2 && stepFormCheck.step3) {
            setCurrentStep(3);
        }
        if (currentStep === 3) {
            setCurrentStep(4);
        }
    }
    const editGoStep = (stepIndex: number) => {
        setCurrentStep(stepIndex);
    }
    const goBack = () => {
        if (currentStep === 3) {
            setCurrentStep(2);
        }
        if (currentStep === 2) {
            setCurrentStep(1);
        }
        if (currentStep === 1) {
            setCurrentStep(0);
        }
        if (currentStep === 0) {
            props.navigation.goBack();
        }
    }
    return (
        <BackgroundContainer style={{ justifyContent: 'flex-end' }}>
            {currentStep != 4 ? <MainHeader
                title='Bölüş Hesabı Oluştur'
                icon2={faInfoCircle}
                leftonPress={goBack}
                rightonPress={() => console.log("a")}
            />
                :
                <MainHeader
                    title='Bölüş Hesabı Oluştur'
                    titleStyle={{ fontSize: 18 }}
                    // leftonPress={() => props.navigation.goBack()}
                />
            }
            <Container valueHeight={1.16}>
                {currentStep !== 4 && <HeaderTabs HeaderTabList={["Bölüştür Bilgileri", "Kişi Seç", "Ödeme Bilgileri", "Özet"]} currentTabIndex={currentStep} />}
                {RenderStep()}
            </Container>

        </BackgroundContainer>
    )
}
export const footerButonStyles = StyleSheet.create({
    footerButonContainer: {

        height: Platform.OS === "ios" ? 160 : 230,
        margin: -20,
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
    }
})