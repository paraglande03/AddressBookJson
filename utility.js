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
        console.log(dataFj["Person"]);
        let input = readline.question(" 1.find by firstName \n 2.find by PhoneNumber \n 3.Find by city \n 4.find by state ")
        if (input == 1) {
            let firstName = readline.question("First name: ")
            let count = dataFj["Person"].filter(find => find.firstname === firstName)
            console.log(count);

            console.log("No of persons of this name is " + count.length)



        } else if (input == 2) {
            let PhoneNumber = readline.question("Phone Number: ")
            console.log(dataFj["Person"].filter(find => find.phoneNumber === PhoneNumber));
            console.log("no of persons having this phone is " + dataFj["Person"].filter(find => find.phoneNumber === PhoneNumber).length);

        } else if (input == 3) {
            let city = readline.question("city name: ")
            console.log(dataFj["Person"].filter(find => find.city === city));
            console.log("number of persons in this city: " + dataFj["Person"].filter(find => find.city === city).length);

        } else if (input == 4) {
            let state = readline.question("State name: ")
            console.log(dataFj["Person"].filter(find => find.state === state));
            console.log("number of persons in this state: " + dataFj["Person"].filter(find => find.state === state).length);
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

    sortByName = () => {
        console.log(dataFj["Person"].sort(this.sortPersonByName));
    }

    sortPersonByName = (a, b) => {
        let nameA = a.firstname
        let nameB = b.firstname
        if (nameA < nameB) {
            return -1;
        }
        if (nameA > nameB) {
            return 1;
        }
        // names must be equal
        return 0;
    };
    sortByZip = () => {

        console.log(dataFj["Person"].sort(this.sortPersonByZip));
    }
    sortPersonByZip = (a, b) => {
        let zipA = a.zipcode;
        let zipB = b.zipcode
        if (zipA < zipB) {
            return -1;
        }
        if (zipA > zipB) {
            return 1;
        }
        return 0;
    }
    sortByCity = () => {

        console.log(dataFj["Person"].sort(this.sortPersonByCity));
    }
    sortPersonByCity = (a, b) => {
        let CityA = a.City
        let CityB = b.City
        if (CityA < CityB) {
            return -1;
        }
        if (CityA > CityB) {
            return 1;
        }
        return 0;
    }
    Sort_by_FirstName_City_ZipCode = () => {
        console.log("\n1.Sort Details by firstname:\n", "2.Sort Details by zipCode:\n", "3.Sort Details by City:\n");
        let input = readline.questionInt('Enter your choice->');
        switch (input) {
            case 1:
                this.sortByName();
                break;
            case 2:
                this.sortByZip();
                break;
            case 3:
                this.sortByCity();
                break;

            default:
                break;
        }
    }


}
module.exports = new AddressBook();