# HealthChain
> Fullstack application built using Gatsby and ExpressJS 

McMaster DeltaHacks IX winner for *"Best Creative use of Verbwire API* by Kenny Zhao, Roy Luo, Carl Wang, and Derek Wu

[<img src="https://img.shields.io/badge/Devpost-003E54?style=for-the-badge&logo=Devpost&logoColor=white" />](https://devpost.com/software/healthchain-hybn8i)

## Prerequisites
Install the required packages via NPM for the frontend
```
npm i
```
In one terminal, start the frontend
```
gatsby develop
```
In another terminal instance, install backend packages and start the ExpressJS server
```
cd back-end

npm i

node server.js
```

## How to Use
1. Login to the upload portal
1. Choose a document to upload, and hit confirm
1. Receive a link to the uploaded document on the IPFS blockchain

## Roadmap
- [ ] Improve frontend for IPFS link presentation
- [ ] Enhance account and file encryption
- [ ] Implement user database for ability to create accounts for login portal
