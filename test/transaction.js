var PriceOracle = artifacts.require("./PriceOracle.sol");

// It injects the accounts we are using (Ganache)
contract("PriceOracle", function (accounts){
    var eventInstance;


    it("initializes with one event with the correct values", function(){
        return PriceOracle.deployed().then(function(instance){
            eventInstance = instance;
            return eventInstance.eventList(0);
        }).then(function(event){
            assert.equal(event[0], '0x0f9352a0638e65e1cb58c91ac9d63f9c71d88c07', "contains the correct address");
            assert.equal(event[1], "Tomorrowland", "contains the correct name");
            assert.equal(event[2], "Tomorrowland is an electronic dance music festival .. ");
            assert.equal(event[3], "picture", "contains the correct picture");
            assert.equal(event[4], 150000, "contains the correct number of tickets");
            assert.equal(event[5], 349, "contains the correct ticket price");
        });
    });
    it("creates an event", function(){
        return PriceOracle.deployed().then(function(instance){
            eventInstance = instance;
            eventInstance._createEvent("TedX", "In the mind of a procrastinator", "link", 34, 22);
            return eventInstance.eventList(2);
        }).then(function(event){
            assert.equal(event[0], '0x0f9352a0638e65e1cb58c91ac9d63f9c71d88c07', "contains the correct address");
            assert.equal(event[1], "TedX", "contains the correct name");
            assert.equal(event[2], "In the mind of a procrastinator");
            assert.equal(event[3], "link", "contains the correct picture");
            assert.equal(event[4], 34, "contains the correct number of tickets");
            assert.equal(event[5], 22, "contains the correct ticket price");
        });
    });
    it("updates the price of USD", function(){
        return PriceOracle.deployed().then(function(instance) {
            return instance.ETHUSD();
        }).then(function(ETHUSD){
            assert.notEqual(ETHUSD, null);
            });
        });
/*    it("buy a ticket", function(){
        return PriceOracle.deployed().then(function(instance){
            eventInstance = instance;
            eventInstance._createEvent("TedX", "In the mind of a procrastinator", "link", 34, 22);
            return eventInstance.eventList(0);
        }).then(function(event){

            assert.notEqual(ETHUSD, null);
        });
    });*/
    });

