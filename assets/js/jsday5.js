var phoneBook = [];
var nameBox, numBox;
var name, number;

var contactObject = {
    contactName: '',
    contactNumber: 0,
};

function addContact (userName,userNumber){
    contactObject = {
        contactName: userName,
        contactNumber: userNumber,
    };
    phoneBook.push(contactObject);
};

function submitContact() {
    nameBox = document.getElementById('userName');
    numBox = document.getElementById('userNumber');
    name = nameBox.value;
    number = numBox.value;

    console.log(name, number);
    if (name.length == 0 || number.length == 0) {
        alert('Both fields are required');
    } else {
        addContact(name,number);
        alert('Contact added, phonebook updated');
        // Clear textboxes after
        nameBox.value = '';
        numBox.value = '';
    }
};

function viewContacts() {
    // Console log
    for (var count = 0; count < phoneBook.length; count++) {
        console.log(phoneBook[count].contactName);
        console.log(phoneBook[count].contactNumber);
    }
    // Display on HTML
    content = document.getElementById('contactsDiv');
    for (var count = 0; count < phoneBook.length; count++) {
        // Line break where :(())
        content.innerHTML = content.innerHTML.concat('Contact # ', count + 1, '\n');
        content.innerHTML = content.innerHTML.concat('Name: ' + phoneBook[count].contactName + '\n');
        content.innerHTML = content.innerHTML.concat('Number: ' + phoneBook[count].contactNumber + '\n');
        content.innerHTML = content.innerHTML.concat('\n');
    }
    
};