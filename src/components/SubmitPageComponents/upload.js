import axios from 'axios';
import {Link} from 'gatsby'
import { StaticImage } from "gatsby-plugin-image"


import React,{Component} from 'react';
import styled from 'styled-components'


class App extends Component {
   
    state = {
  
      // Initially, no file is selected
      selectedFile: null
    };
     
    // On file select (from the pop up)
    onFileChange = event => {
     
      // Update the state
      this.setState({ selectedFile: event.target.files[0] });
     
    };
     
    // On file upload (click the upload button)
    onFileUpload = () => {
     
      // Create an object of formData
      const formData = new FormData();
     
      // Update the formData object
      formData.append(
        "myFile",
        this.state.selectedFile,
        this.state.selectedFile.name
      );
     
      // Details of the uploaded file
      console.log(this.state.selectedFile);
     
      // Request made to the backend api
      // Send formData object
      axios.post("api/uploadfile", formData);
    };
     
    // File content to be displayed after
    // file upload is complete
    fileData = () => {
     
      if (this.state.selectedFile) {
          
        return (
          <div>
            <h2>File Details:</h2>
            <p>File Name: {this.state.selectedFile.name}</p>
  
            <p>File Type: {this.state.selectedFile.type}</p>
  
            <p>
              Last Modified:{" "}
              {this.state.selectedFile.lastModifiedDate.toDateString()}
            </p>
  
          </div>
        );
      } else {
        return (
          <div>
            <br />
            <h4>Choose before Pressing the Upload button</h4>
          </div>
        );
      }
    };
     
    render() {
     
      return (
        <div>
          <TextContainer>
          <Icon to ='/' >HealthChain <StaticImage
                    src="../../images/healthChainLogo.png"
                    alt="healthChainLogo"
                    placeholder="transparent"
                    width={200}
                    height={200}
                    style={{position: 'relative', right: '5rem', bottom: '4.5rem'}}
                    />
            </Icon>


            <SubTitle>
              Welcome back Doctor. Please Upload a File
            </SubTitle>
            </TextContainer>

            <Container>
            <div>
                <input type="file" onChange={this.onFileChange} />
                <button onClick={this.onFileUpload}>
                  Upload!
                </button>
            </div>
          {this.fileData()}
          </Container>


        </div>
      );
    }
  }
  
  export default App;


  const Container = styled.div`
    background: #D3494E; 
    max-width: 400px;
    height: auto; 
    width: 100%;
    z-index: 1;
    display: grid; 
    margin: 0 auto; 
    padding: 80px 32px; 
    border-radius: 20px; 
    top: 8rem;
    position: relative;
    box-shadow: 0 1px 3px rgba(0,0,0,0.9); 

    @media screen and (max-width: 400px) {
        padding: 32px 32px; 
    }
  `

  const Icon = styled(Link)`
    margin-left: 32px;
    text-decoration: none; 
    color: #D3494E; 
    position: relative;
    top: 2rem;
    font-weight: 700; 
    font-size: 32px;
    height: 50px;

    @media screen and (max-width: 480px) {
        margin-left: 16px; 
        margin-top: 8px; 
    }
`

const SubTitle = styled.i`
  text-decoration: none; 
  color: black; 
  position: relative;
  top: 2rem;
  font-weight: 400; 
  font-size: 16px;
  margin-left: 32px;


  @media screen and (max-width: 480px) {
      margin-left: 16px; 
      margin-top: 8px; 
  }
`

const TextContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
`