// if the account is of a manager, display create event and my events pages
function accountType(Contract) { // BUG
    web3.eth.getAccounts(function (err, accounts) {
        var currentAccount;
        if (err) reject(err);
        else if (!accounts.length) reject('No Metamask accounts found');
        else {
            currentAccount = accounts[0];
            Contract.users(currentAccount, function (error, user) {
                console.log("user ID: " + parseInt(user[1]));
                if (!error) {
                    if (parseInt(user[1]) === 2) {
                        document.getElementById('manager').style = 'visible';
                        document.getElementById('eventPage').style = 'visible';
                    } else if (parseInt(user[1]) === 1) {
                        document.getElementById('user').style = 'visible';
                    }
                } else
                    console.error(error);
            });
        }
    });
}

// if has account display a welcoming message, if not ask the user to create one
function hasAccount(Contract, id) {
    var currentAccount;
    web3.eth.getAccounts(function (err, accounts) {
        if (err) reject(err);
        else if (!accounts.length) reject('No Metamask accounts found');
        else {
            currentAccount = accounts[0];
            Contract.users(currentAccount, function (error, userStruct) {
                console.log("Has account? " + parseInt(userStruct[1]) !== 0);
                if (!error) {
                    if (parseInt(userStruct[1]) !== 0) {
                        Contract.getUsername(function (error, userName) {
                            if (!error) {
                                document.getElementById(id).innerHTML = "Welcome back " + userName;
                            } else
                                console.error(error);
                        });
                    } else {
                        document.getElementById(id).innerHTML = "Welcome, if you wanna buy tickets or create events you must first create an account</br>";
                        var parent = document.getElementById(id);
                        var dropDownList = createDropDownList();
                        parent.appendChild(dropDownList);
                        parent.appendChild(document.createElement("br"));
                        createInput(parent, "Username", "username");
                        createInput(parent, "Email", "email");

                        var button = document.createElement("button");
                        button.innerHTML = "Submit";
                        button.id = "register";
                        parent.appendChild(button);


                        $("#register").click(function () {
                            console.log(dropDownList.options[dropDownList.selectedIndex].value);
                            Contract.registerNewUser(dropDownList.options[dropDownList.selectedIndex].value, $("#username").val(),
                                $("#email").val());
                        })
                    }
                } else
                    console.error(error);
            });
        }
    });
}


function createInput(data, value, id) {
    var input = document.createElement("input");
    input.placeholder = value;
    input.id = id;
    data.appendChild(input); //appendChild
}

function createDropDownList() {
    var select = document.createElement("select");
    select.id = "userType";
    select.name = "userType";

    var option1 = document.createElement("option");
    option1.value = 1;
    option1.selected = "";
    option1.innerHTML = "User";

    var option2 = document.createElement("option");
    option2.value = 2;
    option2.innerHTML = "Event Manager";

    select.appendChild(option1);
    select.appendChild(option2);
    return select;
}
