const day = 'Thursday';

switch (day) {
  case 'Sunday': // strict equality
    console.log('You should study more before the week end!');
    break;

  case 'Friday':
    console.log("It's time to pray finely");
    break;

  case 'Saturday':
  case 'Monday':
  case 'Tuesday':
    console.log('Work Hard!');
    break;
  default:
    console.log('Do nothing...');
}
