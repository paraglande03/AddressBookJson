const utility = require('./utility');
const readline = require('readline-sync');

console.log("Choose option to do operation on addressbook\n 1.Add Details:\n", "2.Display Details:\n", "3.Delete Details:\n", "4.search person:\n", "5.Sorting attributes:\n", "6. get count of all contacts");
let input = readline.questionInt('Enter your choice->');
switch (input) {
    case 1:
        utility.addDetails()
        break;
    case 2:
        utility.displayContact()
        break;
    case 3:
        utility.deleteContact()
        break;
    case 4:
        utility.findPerson()
        break;
    case 5:
        utility.Sort_by_FirstName_City_ZipCode()
        break
    case 6:
        utility.getcount()
        break;
    default:
        break;

}