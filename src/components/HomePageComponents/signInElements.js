import styled from 'styled-components'
import { Link } from 'gatsby'

export const Container = styled.div`
    min-height: 692px;
    position: fixed; 
    bottom: 0;
    left: 0;
    right: 0; 
    top: 0;
    z-index: 0;
    overflow: hidden; 
    background: linear-gradient(108 deg, rgba(1,147,86,1) 0%, rgba(10,201,122,1) 100%);

`

export const FormWrap = styled.div`
    height: 100%;
    display: flex; 
    flex-direction: column; 
    
    @media screen and (max-wdith: 400px){
        height: 80%
    }
`
export const Icon = styled(Link)`
    margin-left: 32px;
    margin-top: 32px;
    text-decoration: none; 
    color: #D3494E; 
    font-weight: 700; 
    font-size: 32px;
    height: 60px;

    @media screen and (max-width: 480px) {
        margin-left: 16px; 
        margin-top: 8px; 
    }
`

export const FormContent = styled.div`
    height: 100%; 
    display: flex; 
    position: relative;
    flex-direction: column; 
    left: 20rem;
    top: 4rem;

    @media screen and (max-width: 480px){
        padding: 10px;
    }
`

export const Form = styled.form`
    background: #D3494E; 
    max-width: 400px;
    height: auto; 
    width: 100%;
    z-index: 1;
    display: grid; 
    margin: 0 auto; 
    padding: 80px 32px; 
    border-radius: 20px; 
    box-shadow: 0 1px 3px rgba(0,0,0,0.9); 


    @media screen and (max-width: 400px) {
        padding: 32px 32px; 
    }
`

export const FormH1 = styled.h1`
    margin-bottom: 40px;
    color: #fff;
    font-size: 20px;
    font-weight: 400; 
    text-align: center;
`

export const FormLabel = styled.label`
    margin-bottom: 8px;
    font-size: 14px;
    color: #fff; 
`

export const FormInput = styled.input`
    padding: 16px 16px; 
    margin-bottom: 32px;
    border: none; 
    border-radius: 4px; 
`

export const FormButton = styled.button`
    background: white; 
    padding: 16px 0; 
    border: none; 
    border-radius: 4px; 
    color: black; 
    font-size: 15px; 
    cursor: pointer; 
    
`

export const Text = styled.span`
    text-align: center;
    margin-top: 24px;
    color: #fff; 
    font-size: 14px; 
`

export const SubText = styled.i`
    margin-left: 32px;
    text-decoration: none; 
    color: black; 
    font-weight: 400; 
    font-size: 20px;
    width: 100%;
    height: 20px;

    @media screen and (max-width: 480px) {
        margin-left: 16px; 
        margin-top: 8px; 
    }
    `