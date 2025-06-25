const accountId = 144553
let accountEmail = "ishpriya@gmail.com"
var accountPassword = "185xxx"
accountCity = "Patna"

//accountId = 2 // not allowed
// Updating value
accountEmail = "hc@hc.com"
accountPassword = "82xxxx"
accountCity = "jaipur"

console.log(accountId);
/*
prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail ,accountPassword, accountCity]);