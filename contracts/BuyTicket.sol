pragma solidity ^0.4.24;
import "./Event.sol";
import "./Ticket.sol";
import "./PriceOracle.sol";

contract BuyTicket is Event, Ticket, PriceOracle{
    event NoTickets (string noTickets);

    constructor() payable public{
        /* _buyTicket(0, 2555653192735794000);*/
    }

    function buyTicket(uint _eventId, uint moneyToTransfer) external payable {
        require(accountType() == 1);// only user can do this
        require(eventArray[_eventId].ticketsToSale > 0); // tickets are available
        require(msg.value == moneyToTransfer); // correct sum of eth sent
        eventArray[_eventId].owner.transfer(msg.value);
        eventArray[_eventId].ticketsToSale --;
        createTicket(eventArray[_eventId].price, _eventId );
    }

    function buyTicketForResale(uint _ticketId, uint moneyToTransfer) external payable {
        require(accountType() == 1); // only user can do this
        require(ticketsArray[_ticketId].owner != msg.sender); // can't buy your own tickets
        require(ticketsArray[_ticketId].forSale == true); // ticket must be on the 2nd market
        require(msg.value == moneyToTransfer);// correct sum of eth sent
        eventArray[ticketsArray[_ticketId].eventId].owner.transfer(uint256(5 * msg.value) / 100); // 5% of the price paid goes back to the initial owner
        ticketsArray[_ticketId].owner.transfer(msg.value);
        ticketsArray[_ticketId].owner = msg.sender;
        ticketsArray[_ticketId].forSale = false;
        ticketsArray[_ticketId].price = moneyToTransfer;
        ticketsArray[_ticketId].hash = generateUniqueId();
    }

}