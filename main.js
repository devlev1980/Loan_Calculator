

var form = document.querySelector('#form');


//Listen for Submit

form.addEventListener('submit',function(e){
  //Hide the results
  document.getElementById('results').style.display='none';
 //Show Loader
 document.getElementById('loading').style.display='block';

 setTimeout(calculateResults,2000);
  e.preventDefault();
});

function calculateResults() {
  //UI Variables

  const amount = document.getElementById('amount');
  const interest = document.getElementById('interest');
  const years = document.getElementById('years');

  // console.log(amount.value);
  // console.log(interest.value)
  // console.log(years.value);

  const monthlyPayment = document.getElementById('monthly-payment');
  const totalPayment = document.getElementById('total-payment');
  const totalInterest = document.getElementById('total-interest');

  const principal = parseFloat(amount.value);
  const calculatedInterest = parseFloat(interest.value)/100/12;
  const calculatedPayments = parseFloat(years.value)*12;

  //Compute Monthly Payments
  const x = Math.pow(1 + calculatedInterest,calculatedPayments);
  const monthly = (principal*x*calculatedInterest)/(x-1);

  if (isFinite(monthly)) {
    monthlyPayment.value=monthly.toFixed(2);
    totalPayment.value = (monthly*calculatedPayments).toFixed(2);
    totalInterest.value = ((monthly*calculatedPayments)-principal).toFixed(2);

    //Show results
    document.getElementById('results').style.display='block';

    //Hide the spinner
    document.getElementById('loading').style.display='none';


  }
  else{
    showError('Please check your numbers');
    // console.log('Please check your numbers')
  }



  // console.log('Calculating...')
}
function showError(error) {
  //Hide results
  document.getElementById('results').style.display='none';
  //Hide Loader
  document.getElementById('loading').style.display='none';
  // e.preventDefault();
  //create a div
  const errorDiv = document.createElement('div');

  //Get elelmemnts of the DOM
  const card = document.querySelector('.card')
  const heading = document.querySelector('.heading')

  // add class
  errorDiv.className = 'alert alert-danger';

  //Create Text Node 
  errorDiv.appendChild(document.createTextNode(error));

  //insert error above heading
  card.insertBefore(errorDiv,heading);

  //clear error

  setTimeout(clearError,3000);

}
function clearError() {
  // document.querySelector('.alert').style.display= 'none';
  // document.getElementById('loading').style.display='none';
    document.querySelector('.alert').remove();
   
}