// Write your solution in this file!
const employee=
{
    //Creating the object and declaring the keys
    name: "",
    streetAddress: "",
}

function updateEmployeeWithKeyAndValue(employee, key, value)
{
    const newEmployee={...employee};//Creating a copy of the original object
    newEmployee[key]=value;//Updating the key: value of the cloned object

    return newEmployee; //Returning the updated cloned object
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value)
{
    employee[key]=value; //Updating the key-value of the original employee object
    return employee; //Returning the updated object
}

function deleteFromEmployeeByKey(employee, key)
{
    const newEmployee={...employee}//Creating a copy of the original object
    delete newEmployee[key]//Deleting the key: value of the cloned object

    return newEmployee //Returning the updated cloned object
}

function destructivelyDeleteFromEmployeeByKey(employee, key)
{
    delete employee[key] //Deleting the key-value of the original employee object
    return employee //Returning the updated cloned object
}