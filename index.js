/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

let createEmployeeRecord = function(arr){
  let obj = {
    firstName: arr[0],
    familyName: arr[1],
    title: arr[2],
    payPerHour: arr[3],
    timeInEvents: [],
    timeOutEvents: []
  }
  return obj
}

let createEmployeeRecords = function(arr){
  return arr.map(el => createEmployeeRecord(el))
}

let createTimeInEvent = function(dateStamp){
  let [date, hour] = dateStamp.split(' ')
  this.timeInEvents.push({
    type: "TimeIn",
    hour: parseInt(hour, 10),
    date
  })
  return this
}

let createTimeOutEvent = function(dateStamp){
  let [date, hour] = dateStamp.split(' ')
  this.timeOutEvents.push({
    type: "TimeOut",
    hour: parseInt(hour, 10),
    date
  })
  return this
}

let hoursWorkedOnDate = function(date) {
    let clockIn = this.timeInEvents.find(el =>
      el.date === date)
    let clockOut = this.timeOutEvents.find(el =>
      el.date === date)
    return (clockOut.hour - clockIn.hour) / 100
  }

let wagesEarnedOnDate = function(date){
  let wages = hoursWorkedOnDate.call(this, date) * this.payPerHour
  return wages
}

let payrollExpense = function(){
  
}

let allWagesFor = function () {
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

const findEmployeeByFirstName = function (srcArray, firstName) {
      return srcArray.find(el => el.firstName === firstName)
  }
  
  const calculatePayroll = function(recArr) {
    return recArr.reduce((memo, rec) => memo + allWagesFor.call(rec), 0)
  }