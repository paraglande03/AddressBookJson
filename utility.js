const fs = require('fs');
const readline = require('readline-sync');
let dataFromJson = fs.readFileSync('storeAddressBookDetails.json');
let dataFj = JSON.parse(dataFromJson);


class AddressBook {
    firstnameValidator = () => {
        let namePattern = new RegExp("^[A-Z]{1}[a-z]{2,}$")
        let fname = readline.question('ENter first name: ')
        if (namePattern.test(fname)) {
            console.log("valid first name. Adding...")

        } else {
            console.log("Invalid first name. plz try again")
            this.firstnameValidator();
        }
        return firstname
    }
    lastnameValidator = () => {
        let namePattern = new RegExp("^[A-Z]{1}[a-z]{2,}$")
        let lname = readline.question('ENter last name: ')
        if (namePattern.test(lname)) {
            console.log("valid last name. Adding...")

        } else {
            console.log("Invalid last name. plz try again")
            this.lastnameValidator();
        }
        return lname
    }
    citynameValidator = () => {
        let namePattern = new RegExp("^[A-Z]{1}[a-z]{3,}$")
        let cityname = readline.question('ENter city name: ')
        if (namePattern.test(cityname)) {
            console.log("valid city name. Adding...")

        } else {
            console.log("Invalid city name. plz try again")
            this.citynameValidator();
        }
        return cityname
    }

    statenameValidator = () => {
        let namePattern = new RegExp("^[A-Z]{1}[a-z]{3,}$")
        let statename = readline.question('ENter state name: ')
        if (namePattern.test(statename)) {
            console.log("valid state name. Adding...")

        } else {
            console.log("Invalid state name. plz try again")
            this.statenameValidator();
        }
        return statename
    }

    zipCodeValidator = () => {
        let ZIP_CODE_PATTERN = new RegExp("^[0-9]{6}$");
        let zip = readline.question("Enter valid zipcode: ")
        if (ZIP_CODE_PATTERN.test(zip)) {
            console.log("valid zip: ", zip);
        } else {
            console.log("Invalid zipcode ");
            this.zipCodeValidator();
        }
        return zip;
    }
    emailValidator = () => {
        let EMAIL_PATTERN = new RegExp("^[a-zA-Z0-9]+([.][a-zA-Z0-9]+)?@[a-zA-Z0-9]+.[a-zA-Z]{2,4}([.][a-zA-Z]{2})?$");
        let email = readline.question("Enter valid email : ");
        if (EMAIL_PATTERN.test(email)) {
            console.log("valid Email ", email);
        } else {
            console.log("Invalid Email ");
            this.emailValidator();
        }
        return email;
    }
    phoneValidator = () => {
        let PHONE_NUMBER_PATTERN = new RegExp("^91[ ]?[6-9]{1}[0-9]{9}$");
        let phoneNumber = readline.question("Enter valid Phone Number ");
        if (PHONE_NUMBER_PATTERN.test(phoneNumber)) {
            console.log("valid Phone Number ", phoneNumber);
        } else {
            console.log("Invalid Phone Number ");
            this.phoneValidator();
        }
        return phoneNumber;
    }



    addDetails = () => {

        let firstname = this.firstnameValidator();
        let lastname = this.lastnameValidator();
        let city = this.citynameValidator();
        let state = this.statenameValidator();
        let zipcode = this.zipCodeValidator();
        let phoneNumber = this.phoneValidator();
        let email = this.emailValidator();


        dataFj.Person.push({
            firstname: firstname,
            lastname: lastname,
            city: city,
            state: state,
            zipcode: zipcode,
            phoneNumber: phoneNumber,
            email: email
        })




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
    displayContact = () => {
        console.log(dataFj["Person"]);
    }


}
module.exports = new AddressBook();