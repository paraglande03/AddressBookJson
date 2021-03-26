const fs = require('fs');
const readline = require('readline-sync');
let dataFromJson = fs.readFileSync('storeAddressBookDetails.json');
let data = JSON.parse(dataFromJson);


class AddressBook {
    addDetails = () => {
        let firstname = readline.question('enter first name: ');
        let lastname = readline.question('enter last name: ');
        let city = readline.question('enter city name: ');
        let state = readline.question('enter state name');
        let zipcode = readline.question('enter zipcode:');
        let phoneNumber = readline.question('enter phone number');
        let email = readline.question('enter email');

        data.Person.push({
            firstname: firstname,
            lastname: lastname,
            city: city,
            state: state,
            zipcode: zipcode,
            phoneNumber: phoneNumber,
            email: email
        })
        console.log(data["Person"]);
        const jsonData = JSON.stringify(data);

        console.log(jsonData)

        function writeIntoFile(jsonData, success, fail) {
            var fs = require('fs');
            fs.writeFile('storeAddressBookDetails.json', JSON.stringify(jsonData), function(error) {
                if (error) {
                    console.log('[write auth]: ' + err);
                    if (fail)
                        fail(error);
                } else {
                    console.log('[write auth]: success');
                    if (success)
                        success();
                }
            });
        }
        writeIntoFile(jsonData)

    }



}
module.exports = new AddressBook();