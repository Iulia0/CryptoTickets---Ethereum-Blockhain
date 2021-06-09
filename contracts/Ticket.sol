pragma solidity ^0.4.24;
import "./UserType.sol";
import "./safemath.sol";
import "./Event.sol";

contract Ticket is UserType, Event{
    uint ticketId = 0;
    using SafeMath for uint256;

    struct TicketDetails{
        address owner;
        address hash;// unique identifier
        uint price;
        bool forSale;
        uint ticketId;
        uint eventId; // same as id in the EventDetails struct
    }

    TicketDetails[] public ticketsArray; //for event managers to have access a database of all ticket hashes

    mapping (uint => address) public ticketToOwner; // Keeps track of the address that owns a ticket
    mapping (address => uint) public ticketOwnerCount; //Keeps track of how many tickets a user has

    constructor() public {
        /*createTicket( 22, 1);*/
    }

    function createTicket(uint _price, uint _eventId) internal{
        uint id = ticketsArray.push(TicketDetails(msg.sender, generateUniqueId(), _price, false, ticketId, _eventId)) - 1;
        ticketToOwner[id] = msg.sender;
        ticketOwnerCount[msg.sender] = ticketOwnerCount[msg.sender].add(1);
        ticketId = ticketId.add(1);
    }

    //Generate a unique ID that looks like an Ethereum address
    function generateUniqueId() internal view returns (address) {
        uint randNonce = 0;
        bytes20 random = bytes2(keccak256(abi.encodePacked(msg.sender, now, randNonce)));
        randNonce++;
        uint addr = 0;
        for (uint index = random.length-1; index+1 > 0; index--) {
            addr += uint(random[index]) * ( 16 ** ((random.length - index - 1) * 2));
        }
        return address(addr);
    }

    modifier onlyTicketOwner(uint _ticketId){
        require(msg.sender == ticketToOwner[_ticketId], "Only the owner can do this.");
        _;
    }
    function getTicketsArraySize() external view returns (uint){
        return ticketsArray.length;
    }

    function setTicketForSale(uint _ticketId, bool _forSale, uint _newSellingPrice) external onlyTicketOwner(_ticketId){
        require(eventArray[ticketsArray[_ticketId].eventId].allowResale == true);
        if(ticketsArray[_ticketId].forSale == true){
            require(_forSale == false);
            ticketsArray[_ticketId].forSale = _forSale;
        }
        else if(ticketsArray[_ticketId].forSale == false){
            require(_forSale == true);
            ticketsArray[_ticketId].forSale = _forSale;
            setTicketNewPrice(_ticketId, _newSellingPrice);
        }
    }

    function setTicketNewPrice(uint _ticketId, uint _newSellingPrice) private onlyTicketOwner(_ticketId){
        uint price = ticketsArray[_ticketId].price;
        uint maxPrice = (price + ((price * 10) / 100));
        require(_newSellingPrice <= maxPrice); // the price cannot be higher than the initial price * 10%
        ticketsArray[_ticketId].price = _newSellingPrice;
    }

    // return array of indexes of user's tickets
/*    function getTicketsByOwner(address _owner) external view returns(uint[]) {
        uint[] memory result = new uint[](ticketOwnerCount[_owner]);
        uint counter = 0;
        for (uint i = 0; i < ticketsArray.length; i++) {
            if (ticketToOwner[i] == _owner) {  // BUG
                result[counter] = i;
                counter++;
            }
        }
        return result;
    }*/
}


