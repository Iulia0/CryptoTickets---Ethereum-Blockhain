//Application Binary Interface. Representation of my contracts' methods in JSON format
// that tells Web3.js how to format function calls in a way my contract will understand.
var BuyTicketAbi = web3.eth.contract(
    [
      {
        "constant": true,
        "inputs": [],
        "name": "ETHUSDSTRING",
        "outputs": [
          {
            "name": "",
            "type": "string"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "_accountType",
            "type": "uint8"
          },
          {
            "name": "_username",
            "type": "string"
          },
          {
            "name": "_email",
            "type": "bytes32"
          }
        ],
        "name": "registerNewUser",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [],
        "name": "getBalance",
        "outputs": [
          {
            "name": "_balance",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "getTicketsArraySize",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "myid",
            "type": "bytes32"
          },
          {
            "name": "result",
            "type": "string"
          }
        ],
        "name": "__callback",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "_id",
            "type": "uint256"
          },
          {
            "name": "_ticketsToSale",
            "type": "uint32"
          }
        ],
        "name": "modifyEventNoTickets",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "name": "ticketToOwner",
        "outputs": [
          {
            "name": "",
            "type": "address"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "_id",
            "type": "uint256"
          },
          {
            "name": "_price",
            "type": "uint32"
          }
        ],
        "name": "modifyEventPrice",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "_id",
            "type": "uint256"
          },
          {
            "name": "_picture",
            "type": "string"
          }
        ],
        "name": "modifyEventPicture",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "myid",
            "type": "bytes32"
          },
          {
            "name": "result",
            "type": "string"
          },
          {
            "name": "proof",
            "type": "bytes"
          }
        ],
        "name": "__callback",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "name": "eventToOwner",
        "outputs": [
          {
            "name": "",
            "type": "address"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [],
        "name": "updatePrice",
        "outputs": [],
        "payable": true,
        "stateMutability": "payable",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [
          {
            "name": "_owner",
            "type": "address"
          }
        ],
        "name": "getTicketsByOwner",
        "outputs": [
          {
            "name": "",
            "type": "uint256[]"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "getUsername",
        "outputs": [
          {
            "name": "",
            "type": "string"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [
          {
            "name": "_owner",
            "type": "address"
          }
        ],
        "name": "getEventsByOwner",
        "outputs": [
          {
            "name": "",
            "type": "uint256[]"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "hasAccount",
        "outputs": [
          {
            "name": "",
            "type": "bool"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [
          {
            "name": "",
            "type": "address"
          }
        ],
        "name": "ticketOwnerCount",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "accountType",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "_badUser",
            "type": "address"
          }
        ],
        "name": "removeUser",
        "outputs": [
          {
            "name": "success",
            "type": "bool"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "_id",
            "type": "uint256"
          },
          {
            "name": "_title",
            "type": "bytes32"
          }
        ],
        "name": "modifyEventTitle",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [
          {
            "name": "",
            "type": "address"
          }
        ],
        "name": "eventOwnerCount",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [
          {
            "name": "",
            "type": "address"
          }
        ],
        "name": "users",
        "outputs": [
          {
            "name": "owner",
            "type": "address"
          },
          {
            "name": "accountType",
            "type": "uint8"
          },
          {
            "name": "username",
            "type": "string"
          },
          {
            "name": "email",
            "type": "bytes32"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "_title",
            "type": "bytes32"
          },
          {
            "name": "_details",
            "type": "string"
          },
          {
            "name": "_picture",
            "type": "string"
          },
          {
            "name": "_ticketsToSale",
            "type": "uint32"
          },
          {
            "name": "_price",
            "type": "uint32"
          },
          {
            "name": "_allowResale",
            "type": "bool"
          }
        ],
        "name": "createEvent",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "name": "ticketsArray",
        "outputs": [
          {
            "name": "owner",
            "type": "address"
          },
          {
            "name": "hash",
            "type": "address"
          },
          {
            "name": "price",
            "type": "uint256"
          },
          {
            "name": "forSale",
            "type": "bool"
          },
          {
            "name": "ticketId",
            "type": "uint256"
          },
          {
            "name": "eventId",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "_ticketId",
            "type": "uint256"
          },
          {
            "name": "_forSale",
            "type": "bool"
          },
          {
            "name": "_newSellingPrice",
            "type": "uint256"
          }
        ],
        "name": "setTicketForSale",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "name": "eventArray",
        "outputs": [
          {
            "name": "owner",
            "type": "address"
          },
          {
            "name": "title",
            "type": "bytes32"
          },
          {
            "name": "description",
            "type": "string"
          },
          {
            "name": "picture",
            "type": "string"
          },
          {
            "name": "ticketsToSale",
            "type": "uint32"
          },
          {
            "name": "price",
            "type": "uint32"
          },
          {
            "name": "allowResale",
            "type": "bool"
          },
          {
            "name": "id",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "getEventArraySize",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "_id",
            "type": "uint256"
          },
          {
            "name": "_description",
            "type": "string"
          }
        ],
        "name": "modifyEventDescription",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [],
        "payable": true,
        "stateMutability": "payable",
        "type": "constructor"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "name": "noTickets",
            "type": "string"
          }
        ],
        "name": "NoTickets",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "name": "price",
            "type": "string"
          }
        ],
        "name": "LogPriceUpdated",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "name": "description",
            "type": "string"
          }
        ],
        "name": "LogNewOraclizeQuery",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "name": "_owner",
            "type": "address"
          },
          {
            "indexed": true,
            "name": "_balance",
            "type": "uint256"
          }
        ],
        "name": "LogUpdate",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "name": "eventId",
            "type": "uint256"
          },
          {
            "indexed": false,
            "name": "_account",
            "type": "address"
          },
          {
            "indexed": false,
            "name": "_title",
            "type": "bytes32"
          },
          {
            "indexed": false,
            "name": "_details",
            "type": "string"
          },
          {
            "indexed": false,
            "name": "_picture",
            "type": "string"
          },
          {
            "indexed": false,
            "name": "_ticketToSale",
            "type": "uint32"
          },
          {
            "indexed": false,
            "name": "_price",
            "type": "uint32"
          }
        ],
        "name": "NewEvent",
        "type": "event"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "_eventId",
            "type": "uint256"
          },
          {
            "name": "moneyToTransfer",
            "type": "uint256"
          }
        ],
        "name": "buyTicket",
        "outputs": [],
        "payable": true,
        "stateMutability": "payable",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "_ticketId",
            "type": "uint256"
          },
          {
            "name": "moneyToTransfer",
            "type": "uint256"
          }
        ],
        "name": "buyTicketForResale",
        "outputs": [],
        "payable": true,
        "stateMutability": "payable",
        "type": "function"
      }
    ]
);


