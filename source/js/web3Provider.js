/*set Provider*/
function setProvider(){
    // Checking if Web3 has been injected by the browser (Mist/MetaMask)
    if (typeof web3 !== 'undefined')
        // Use Mist/MetaMask's provider
        web3 = new Web3(web3.currentProvider);
    else
    // Handle the case where the user doesn't have web3.
    // Show them a message telling them to install Metamask in
    // order to use our app.
        alert("You need to use the plug in MetaMask or the browser Mist in order to access the page");
        /* //set the provider you want from Web3.providers
          web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));*/

    web3.eth.defaultAccount = web3.eth.accounts[0];
    return web3;
}

function getContract(){
    return BuyTicketAbi.at('0x14e6a299fbdaae5e2bb4f7efaf6d0cd653075487'); // <- address of my contract after deployment
}
