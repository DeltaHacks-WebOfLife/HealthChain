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
          <Icon to ='/' >HealthChain <StaticImage
                    src="../../images/healthChainLogo.png"
                    alt="healthChainLogo"
                    placeholder="transparent"
                    width={200}
                    height={200}
                    style={{position: 'relative', right: '5rem', bottom: '4.5rem'}}
                    />
            </Icon>

            
            <h3>
              Welcome back Doctor. 
              <br/> Please Upload File
            </h3>

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
    font-family: "Lato", sans-serif;
    display: flex;
    justify-content: center;
    align-items: center; 
    flex-direction: column;
  `

  const Icon = styled(Link)`
    margin-left: 32px;
    text-decoration: none; 
    color: #D3494E; 
    position: relative;
    top: 2rem;
    font-weight: 700; 
    font-size: 32px;

    @media screen and (max-width: 480px) {
        margin-left: 16px; 
        margin-top: 8px; 
    }
`