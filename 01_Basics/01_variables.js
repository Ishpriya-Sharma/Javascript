const accountId = 144553
let accountEmail = "ishpriya@gmail.com"
var accountPassword = "1234"
accountCity = "Patna"

//accountId = 2 // not allowed
// Updating value
accountEmail = "hc@hc.com"
accountPassword = "8234865"
accountCity = "jaipur"

console.log(accountId);
/*
prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail ,accountPassword, accountCity]);