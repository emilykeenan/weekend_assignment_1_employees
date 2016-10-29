$(document).ready(function() {
    var array = [];

    var monthlySal = 0; //declaring global monthly salary variable

    var combinedSalary = 0; //declaring combinedSalary variable

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
      function monthlySalaryOutput(){
        combinedSalary = combinedSalary + parseInt(values.salary);
        console.log(combinedSalary);
        monthlySal = Math.round(combinedSalary / 12);
        return monthlySal
      }

      // clear out inputs
      $('#employeeinfo').find('input[type=text]').val('');

      //calling monthly salary output function
      monthlySalaryOutput();

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

      $('#monthlysalary').text('You pay your employees ' + monthlySal + ' dollars per month.');

    }

//create function for clicking delete button
    function fireThem(){
      $(this).parent().remove();
    }

//applying fireThem event function to .fired
    $('#container').on('click', '.fired', fireThem);

});
