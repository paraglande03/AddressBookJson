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
                    console.log('[updating json file]: ' + err);
                    if (fail)
                        fail(error);
                } else {
                    console.log('[updating json file]: success');
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

    findPerson = () => {
        let input = readline.question('1. find by first name  2. find by phone number ')
        if (input == 1) {
            let firstname = readline.question('Enter name: ')
            console.log(dataFj["Person"].filter(find => find.firstname === firstname))
        } else if (input == 2) {
            let phoneNumber = readline.question('enter phone number: ')
            console.log(dataFj["Person"].filter(find => find.phoneNumber === phoneNumber))
        }
    }

    getcount = () => {
        let count = Object.keys(dataFj["Person"]).length

        console.log("There Are " + count + " contacts present in addressbook")
    }

    deleteContact = () => {
        let name = readline.question("Enter name of person to delete: ")
        let tempArray = [];
        tempArray = dataFj["Person"]
        let index = tempArray.map((item) => {
            return item.firstname
        }).indexOf(name);
        console.log(index)
        dataFj["Person"].splice(index, 1)
        let dataTj = dataFj["Person"]
        console.log(dataTj)



    }


}
module.exports = new AddressBook();