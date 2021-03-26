const fs = require('fs');
const readline = require('readline-sync');
let dataFromJson = fs.readFileSync('storeAddressBookDetails.json');
let dataFj = JSON.parse(dataFromJson);


class AddressBook {
    addDetails = () => {
        let firstname = readline.question('enter first name: ');
        let lastname = readline.question('enter last name: ');
        let city = readline.question('enter city name: ');
        let state = readline.question('enter state name');
        let zipcode = readline.question('enter zipcode:');
        let phoneNumber = readline.question('enter phone number');
        let email = readline.question('enter email');

        dataFj.Person.push({
            firstname: firstname,
            lastname: lastname,
            city: city,
            state: state,
            zipcode: zipcode,
            phoneNumber: phoneNumber,
            email: email
        })
        console.log(dataFj["Person"]);


        console.log(dataFj)
        const DataTj = JSON.stringify(dataFj);

        function writeIntoFile(DataTj, success, fail) {

            var fs = require('fs');
            fs.writeFile('storeAddressBookDetails.json', DataTj, function(error) {
                if (error) {
                    console.log('[writing contact to json file]: ' + err);
                    if (fail)
                        fail(error);
                } else {
                    console.log('[writing contact to json file]: success');
                    if (success)
                        success();
                }
            });
        }
        writeIntoFile(DataTj)

    }



}
module.exports = new AddressBook();