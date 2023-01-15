import React from 'react'
import{
    Container, 
    FormWrap,
    Icon, 
    FormContent,
    Form,
    FormH1,
    FormLabel, 
    FormInput,
    FormButton,
    Text,
    SubText,
} from './signInElements'
import { StaticImage } from "gatsby-plugin-image"


const HomePage = () => {
    return (<>
        <Container>
            <FormWrap>
                <Icon to ='/' >HealthChain <StaticImage
                    src="../../images/healthChainLogo.png"
                    alt="healthChainLogo"
                    placeholder="transparent"
                    width={200}
                    height={200}
                    style={{position: 'relative', right: '5rem', bottom: '4.5rem'}}
                    />
                </Icon>
                <SubText>Improving the security of healthcare one chain at a time</SubText>
                <FormContent>
                    <Form action ='/submit'>
                        <FormH1>Sign in to your account</FormH1>
                        <FormLabel htmlFor = 'for'>Email</FormLabel>
                        <FormInput type='email' required />
                        <FormLabel htmlFor='for'>Password</FormLabel>
                        <FormInput type='password' required />
                        <FormButton type='submit'>Sign In</FormButton>
                        <Text>Forgot Password</Text>
                    </Form>
                </FormContent>

                

            </FormWrap>

            <StaticImage
                    src="../../images/doctors.png"
                    alt="doctors"
                    placeholder="transparent"
                    width={600}
                    height={600}
                    quality = {100}
                    style ={{position: 'relative', bottom: '35rem', left: '10rem'}}
                />


        </Container>
    </>)}


export default HomePage