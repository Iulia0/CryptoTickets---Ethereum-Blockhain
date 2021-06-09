pragma solidity ^0.4.24;

contract UserType {
    address admin;
    address contractAdmin;

    struct User {
        address owner;
        uint8 accountType; // 0 empty(no account), 1 for user, 2 for eventManager
        string username; // unique
        bytes32 email;
    }

    mapping(address => User) public users;
    mapping(string => bool) private usersNames;

    constructor() payable {// this is the CONSTRUCTOR (same name as contract) it gets called ONCE only when contract is first deployed
        contractAdmin = msg.sender;
        // just set the admin, so they can remove bad users or images if needed, but nobody else can
        /*registerNewUser(1,"Iulia","petria_iulia@yahoo.com");*/
    }

    function registerNewUser(uint8 _accountType, string _username, bytes32 _email) external {
        require(users[msg.sender].owner != msg.sender); // check if it has an account already
        if (bytes(users[msg.sender].username).length == 0 && bytes(_username).length != 0) {
            require(usersNames[_username] == false);
            users[msg.sender].owner = msg.sender;
            users[msg.sender].accountType = _accountType;
            users[msg.sender].username = _username;
            users[msg.sender].email = _email;
            usersNames[_username] = true;
        }
    }

    modifier onlyAdmin() {
        if (msg.sender != contractAdmin)
            throw;
        // "_;" will be replaced by the actual function body when the modifier is used.
        _;
    }

    modifier onlyUserOwner() {
        require(users[msg.sender].owner == msg.sender);
        _;
    }
    // admin of contract can remove users
    function removeUser(address _badUser) external onlyAdmin returns (bool success) {
        delete users[_badUser];
        return true;
    }

    function accountType() public view returns (uint){
        return users[msg.sender].accountType;
    }

    function hasAccount() external view returns (bool){
        bool value = true;
        if (accountType() == 0) {
            value = false;
        }
        return value;
    }

    function getUsername() external onlyUserOwner view returns (string){
        return users[msg.sender].username;
    }
}

