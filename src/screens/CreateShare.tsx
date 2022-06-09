import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import React, { useState, useCallback } from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import BackgroundContainer from '../components/BackgroundContainer'
import Button from '../components/Button'
import Container from '../components/Container'
import HeaderTabs from '../components/HeaderTabs'
import MainHeader from '../components/MainHeader'
import Steps1 from '../createShareSteps/Steps1'
import Steps2 from '../createShareSteps/Steps2'
import Steps3 from '../createShareSteps/Steps3'
import Steps4 from '../createShareSteps/Steps4'



export default function CreateShare(props: any) {
    const [currentStep, setCurrentStep] = useState(0);
    const [stepFormCheck, setStepFormCheck] = useState({ step1: false, step2: false, step3: false, step4: false });
    const renderStep = () => {
        switch (currentStep) {
            case 0:
                return <Steps1 handleFormCheck={(data) => setStepFormCheck({ ...stepFormCheck, step1: data })} navigation={props.navigation} />;
            case 1:
                return <Steps2 handleFormCheck={(data) => setStepFormCheck({ ...stepFormCheck, step2: data })} navigation={props.navigation} />;
            case 2:
                return <Steps3 handleFormCheck={(data) => setStepFormCheck({ ...stepFormCheck, step3: data })} navigation={props.navigation} />;
            case 3:
                return <Steps4 handleFormCheck={(data) => setStepFormCheck({ ...stepFormCheck, step4: data })} navigation={props.navigation} />;
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
            <MainHeader
                title='Bölüş Hesabı Oluştur'
                icon2={faInfoCircle}
                leftonPress={goBack}
                rightonPress={() => console.log("a")}
            />
            <Container valueHeight={1.16}>
                <HeaderTabs HeaderTabList={["Bölüştür Bilgileri", "Kişi Seç", "Ödeme Bilgileri", "Özet"]} currentTabIndex={currentStep} />
                <ScrollView
                    key={"currentStep"}
                    showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false} contentInset={{ bottom: 30 }}>
                    {renderStep()}
                </ScrollView>
                <View style={styles.footerButonContainer}>
                    <Button
                        onPress={goStep}
                        activeOpacity={.7}
                        butonStyle={{ marginBottom: 20, backgroundColor: '#3D21A2' }}
                        textStyle={{ color: '#fff' }}
                        title="Devam Et"
                    />
                    <Button
                        activeOpacity={.7}
                        butonStyle={{ marginBottom: 20 }}
                        title="Vazgeç"
                    />
                </View>
            </Container>

        </BackgroundContainer>
    )
}
const styles = StyleSheet.create({
    footerButonContainer: {
        margin: -10,
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