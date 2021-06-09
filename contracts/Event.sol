pragma solidity ^0.4.24;
import "./UserType.sol";
import "./safemath.sol";

contract Event is UserType {
    uint eventUniqueId = 0; // id for each event
    using SafeMath for uint256;

    event NewEvent(uint eventId, address _account, bytes32 _title, string _details, string _picture, uint32 _ticketToSale, uint32 _price);

    // Model an Event
    struct EventDetails{
        address owner;
        bytes32 title;
        string description;
        string picture;
        uint32 ticketsToSale;
        uint32 price;
        bool allowResale;
        uint id; // eventUniqueId
    }
    // Store events
    EventDetails[] public eventArray; //

    mapping (uint => address) public eventToOwner;// Keeps track of the address that owns an event
    mapping (address => uint) public eventOwnerCount; //Keeps track of how many events a manager has

    function createEvent( bytes32 _title, string _details, string _picture, uint32 _ticketsToSale, uint32 _price, bool _allowResale) external{
        require(users[msg.sender].accountType == 2); // only event managers can create events
        uint id = eventArray.push(EventDetails(msg.sender, _title, _details, _picture, _ticketsToSale, _price, _allowResale, eventUniqueId)) - 1;
        eventToOwner[id] = msg.sender;
        eventUniqueId = eventUniqueId.add(1);
        eventOwnerCount[msg.sender] = eventOwnerCount[msg.sender].add(1);
        emit NewEvent(id, msg.sender, _title, _details, _picture, _ticketsToSale, _price);
    }
    function getEventArraySize() external view returns (uint){
        return eventArray.length;
    }

    modifier onlyEventOwner(uint _id) {
        require(msg.sender == eventToOwner[_id], "Only the owner can do this.");
        _;
    }
    // could make to return boolean ?
    function modifyEventTitle(uint _id, bytes32 _title) external onlyEventOwner(_id){
        eventArray[_id].title = _title;
    }
    function modifyEventDescription(uint _id, string _description) external onlyEventOwner(_id){
        eventArray[_id].description = _description;
    }
    function modifyEventPicture(uint _id, string _picture) external onlyEventOwner(_id){
        eventArray[_id].picture = _picture;
    }
    function modifyEventNoTickets(uint _id, uint32 _ticketsToSale) external onlyEventOwner(_id){
        eventArray[_id].ticketsToSale = _ticketsToSale;
    }
    function modifyEventPrice(uint _id, uint32 _price) external onlyEventOwner(_id){
        eventArray[_id].price = _price;
    }

    // return array of indexes of owner's events
/*    function getEventsByOwner(address _owner) external view returns(uint[]) {
        uint[] memory result = new uint[](eventOwnerCount[_owner]);
        uint counter = 0;
        for (uint i = 0; i < eventArray.length; i++) {
            if (eventToOwner[i] == _owner) {   // BUG
                result[counter] = i;
                counter++;
            }
        }
        return result;
    }*/
}
