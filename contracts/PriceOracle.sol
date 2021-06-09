pragma solidity ^0.4.24;

import "./usingOraclize.sol";

contract PriceOracle is usingOraclize {
    address owner;
    string public ETHUSDSTRING;

    event LogPriceUpdated(string price);
    event LogNewOraclizeQuery(string description);
    event LogUpdate(address indexed _owner, uint indexed _balance);

    //Constructor
    constructor() payable public{
        owner = msg.sender;
        emit LogUpdate(owner, address(this).balance);
        OAR = OraclizeAddrResolverI(0xE2b2C6e4E5E23B0132dC35EC7e3f763a7C2098fe);
        /*updatePrice();*/
    }

    function __callback(bytes32 myid, string result){
        if (msg.sender != oraclize_cbAddress()) revert();
        ETHUSDSTRING = result;
        emit LogPriceUpdated(result);
        /*        updatePrice();*/
    }

    function getBalance() external returns (uint _balance) {
        return address(this).balance;
    }

    // get current price of ETH in USD from kraken
    function updatePrice() external payable {
        if (oraclize_getPrice("URL") > address(this).balance) {
            emit LogNewOraclizeQuery("Oraclize query was NOT sent, please add some ETH to cover for the query fee");
        } else {
            emit LogNewOraclizeQuery("Oraclize query was sent, standing by for the answer..");
            oraclize_query("URL", "json(https://api.coinbase.com/v2/prices/ETH-USD/spot).data.amount");
        }
    }

}