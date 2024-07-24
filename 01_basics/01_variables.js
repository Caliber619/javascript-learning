const accountId = 144553
let accountEmail = "kshitij@gmail.com"
var accountPassword = "12345"
accountCity = "jaipur"
let accountState;

// accountId = 2 //not allowed
accountEmail = "kd@gmail.com"
accountPassword = "1123"
accountCity = "jhansi"

console.log(accountId);

/*
prefer not to use "var" because of issue in block and functional scope
*/

console.table([accountId,accountEmail,accountPassword, accountCity, accountState]);
