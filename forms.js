$(document).ready(function() {
    var array = [];
    $('#employeeinfo').on('submit', function(event) {
      event.preventDefault();

      // initialize a new variable as an empty object
      var values = {};

      // convert the form inputs into an array
      var fields = $('#employeeinfo').serializeArray();

      // iterate over the array and transfer each index into a new property on an object with the value of what was entered.
      fields.forEach(function(element, index, array) {
        // review index notation vs. dot notation on objects
        // here, dot notation wouldn't work
        values[element.name] = element.value;
      });

      console.log(values);

      //creating function for monthly salary output
      // function monthlySalaryOutput(){
      //   var salary = 0;
      //   for (var i = 0; i < values.length; i++) {
      //     var employee = values[i];
      //     salary += parseInt(empInfo.salary) / 12;
      //   }
      // }

      //monthlySalaryOutput(); //calling monthlySalaryOutput gave me no real number

      // clear out inputs
      $('#employeeinfo').find('input[type=text]').val('');

      // append to DOM
      appendDom(values);
    });

    function appendDom(empInfo) {
      $('#container').append('<div class="person"></div>');
      var $el = $('#container').children().last();

      $el.append('<ul>' + '<li>' + empInfo.employeefirstname + '</li>' +
      '<li>' + empInfo.employeelastname + '</li>' +
      '<li>' + empInfo.idnumber + '</li>' +
      '<li>' + empInfo.jobtitle  + '</li>' +
      '<li>' + empInfo.salary  + '</li>' + '</ul>' );

      $el.append('<button class="fired">ur fired</button>'); //adding delete button

      // function monthlySalaryOutput(){
      //   var combinedSalary = 0;
      //   combinedSalary += parseInt(empInfo.salary);
      //   var monthlySalary = combinedSalary / 12;
      //   return monthlySalary
      //   }
      // }
      //
      // monthlySalaryOutput(); //calling monthlySalaryOutput

      $('#monthlysalary').text('You pay your employees ' + salary + ' dollars per month.');

    }

//create function for clicking delete button
    function fireThem(){
      $(this).parent().remove();
    }
//applying event
    $('#container').on('click', '.fired', fireThem);

});

//creating function for monthly salary output
// function monthlySalaryOutput(){
//   var salary = 0;
//   for (var i = 0; i < values.length; i++) {
//     var employee = values[i];
//     salary += parseInt(employee.salary) / 12;
//   }
// }
