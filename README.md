# ﻿CriptoTickets – online platform for selling/buying tickets on the blockchain

CryptoTickets is a distributed application (DApp) built on top of Ethereum. The platform can be used by event managers for adverstising events and selling tickets to consumers. With the blockchain used for recording transactions, this project aims to create a secure and trustless system where a store of value (tickets) can be transferred peer to peer, and where QR codes are used to uniquely identify each ticket and prevent fraudulent reselling.

## Prerequisites
Before any work can be done you need to install the following:

**npm:** For instructions on how to download an install npm [click here ](https://www.npmjs.com/get-npm).

**Ganache (formerly known as TestRPC):** You can download it [via this link ](https://truffleframework.com/ganache). For more instructions and information [see the documentation](https://truffleframework.com/ganache).

**MetaMask:** Firefox/ Opera/ Chrome Browser Extension — 
You can download it from the [MetaMask website](https://metamask.io//), which provides an [introductory video](https://www.youtube.com/watch?time_continue=126&v=6Gf_kRE4MJU ). For more information with regard to MetaMask and how to use it check their website.

**Truffle:** You can install truffle with npm using the following command: 
```
npm install -g truffle
```
**Ethereum-bridge:** To install via npm use the following command:
```
npm install -g ethereum-bridge
```
In case you run into errors, or for more information or other ways to install it visit https://github.com/oraclize/ethereum-bridge.

**You need a version of Jetbrains IntelliJ IDEA installed.** It is also recommended that you install the [solidity](https://plugins.jetbrains.com/plugin/9475-intellij-solidity) plugin.

## Getting Started 
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Download
```
git clone https://cseegit.essex.ac.uk/ce301/petria_i/capstone_project.git
```
#### Install libraries 
```
cd capstone_project
npm install
```
#### Edit the configuration file
Start Ganache, and change the following settings to match your requirements:
```
port number = 8545
network id= 5777
total accounts to generate = 15
mnemonic = "CryptoTickets"
```
![1](/uploads/e7b49b149ee965a70e6ce9c541e2f079/1.png)
![2](/uploads/46eebcd4f736283d4a536e0906e10109/2.png)
![3](/uploads/2fbdeb872b461d07ba61eddd0420a077/3.png)

### Run program 
1. Start Ganache
2. Open command line prompt using administrator rights and enter the following command:
```
ethereum-bridge -H localhost:8545 -a 14
```
![ethereum_bridge](/uploads/b7cf3d8ea9b5e64d7639d929abcc3e5b/ethereum_bridge.png)
3. Leave that open and open another command line and enter:
```
cd [location]\capstone_projects\contracts
truffle console
compile
first migartion : migrate
for any other attempt: migrate --reset
```
4. Get an instance of the contract:

`Transaction.deployed().then(inst => { instance = inst })
instance.function()`

5. Run the command `Transaction.address`, copy the address and open index.html, and change the address in var Transaction

![address](/uploads/9a5a0fc4fb8cdd38677993eb15c3e91a/address.png)
![Untitled](/uploads/b7a207a15ed26e72f512a8335bdbc5b8/Untitled.png)

#### To see the web page:
1. open index.html using IntellIj

![open](/uploads/b4edc827b375f272d6e235dcf9d3c53a/open.png)

2. Connect to localhost using MetaMask plug in

![metamask](/uploads/d156d695a87da130cfe84da40aeb4dd6/metamask.png)

3. Refresh the web page and you should now see this

![page](/uploads/d4f0c32aa02e3eee1f5cc40c328918dc/page.png)


You can use the following syntax: `instance.function()` in the truffle console to check that the event has been created using the web page

### Running Tests

```
cd [location]\capstone_projects\contracts
truffle console
test
```
## Authors
* Iulia Petria
