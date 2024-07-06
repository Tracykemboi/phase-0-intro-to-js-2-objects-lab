// Write your solution in this file!
const employee=[]
employee.name=David
employee.streetAddress=nairobi
function updateEmployeeWithKeyAndValue(employee, key, value) {
   const newObj={...employee}
    newObj[key]= value
    return newObj
  }
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value
    return employee
  }
  function deleteFromEmployeeByKey(employee,key,value) {
   const newEmployeeObj= {...employee}
    delete newEmployeeObj[key]
    return newEmployeeObj
  }
  function destructivelyDeleteFromEmployeeByKey(employee,key,value) {
    delete employee[key]
    return employee
  }