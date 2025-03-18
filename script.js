function calculateBMI (){
  const weight = document.getElementById('weight').value;
  const height = document.getElementById('height').value;
  const result = document.getElementById('result');
  const bmi = (weight / (height * height));

  if(weight === '' || height === ''){
    result.innerText = 'Please enter a valid height and weight'
    result.classList += ' danger ';
    result.classList.remove('warnig');
    result.classList.remove('normal');
    return;
  } else if(height < 1 || weight < 1){
    result.innerText = `Height or weight can't be less than 1`;
    result.classList += ' danger '
    result.classList.remove('warning');
    result.classList.remove('normal');
    return;
  }

  switch (bmi) {
    case  bmi < 18.5:
      result.innerText = ` ${bmi.toFixed(2)} Underweight`;
      result.classList += ' danger ';
      result.classList.remove('warning');
      result.classList.remove('normal');
      break;
    case bmi > 18.4 <= 24.9: 
    result.innerText = `${(bmi.toFixed(2))} Optimum range`
    result.classList += ' normal ';
    result.classList.remove('danger');
    result.classList.remove('warning');
    break;
    case bmi >= 25 && bmi <=29.9:
      result.innerText = `${(bmi.toFixed(2))} Overweight`
      result.classList += ' danger ';
      result.classList.remove('normal');
      result.classList.remove('warning');
      break
    case bmi >= 30 && bmi <=34.9 :
      result.innerText = `${(bmi.toFixed(2))} Class I obesity`
      result.classList += ' warning ';
      result.classList.remove('danger');
      result.classList.remove('normal');
      break;
    case bmi >= 35 && bmi <=39.9 :
      result.innerText = `${(bmi.toFixed(2))} Class II Obesity`
      result.classList += ' danger ';
      result.classList.remove('warning');
      result.classList.remove('normal');
      break;
    case bmi >= 40 :
      result.innerText = `${(bmi.toFixed(2))} Class III Obesity`
      result.classList += ' danger ';
      result.classList.remove('warning');
      result.classList.remove('normal');
      break;

    default:
      return;
  }
}

document.getElementById('calculate').addEventListener('click', (e) =>{
  e.preventDefault();
  calculateBMI();
});