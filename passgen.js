var specialCharacters = [
    '@',
    '%',
    '+',
    
    '/',
    "'",
    '!',
    '#',
    '$',
    '^',
    '?',
    ':',
    ',',
    ')',
    '(',
    '}',
    '{',
    ']',
    '[',
    '~',
    '-',
    '_',
    '.'
  ];
  var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  
  var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

  var upperCasedCharacters = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z'
  ];

  function passwordChoice() {
    
    var length = parseInt(
      prompt('How many characters would you like your password to contain?')
    );
  
  
  
  if (isNaN(length) === true) {
    alert("The length must be a numerical value");
    return;
  }

  
  if (length < 8) {
    alert("Choose at least 8 characters for your password");
    return;
  }

  
  if (length > 128) {
    alert("Your password must be less than 128 characters");
    return;
  }

  var wantNumbers = confirm(
    "If you want to use numbers click OK"
  );

  var wantLowercase = confirm(
    "If you want to use lower-case letters click OK"
  );

  var wantUppercase = confirm(
    "If you want to use upper-case letters click OK"
  );

  var wantSpecials = confirm(
    "If you want to use special characters click OK"
  );

  

  
  if (
    wantNumbers === false &&
    wantLowercase === false &&
    wantUppercase === false &&
    wantSpecials === false
  ) {
    alert("Just pick at least one type of character for a password!");
    return;
  }

  
  var passwordObj = {
    length: length,
    wantNumbers: wantNumbers,
    wantLowercase: wantLowercase,
    wantUppercase: wantUppercase,
    wantSpecials: wantSpecials
    };
  
  return passwordObj;
}


function getRandom(arr) {
  var mixIndex = Math.floor(Math.random() * arr.length);
  var randElement = arr[mixIndex];

  return randElement;
}


function generatePassword(){
  var choices = passwordChoice();
  
  var final = [];

  
  var potentialOptions = [];

  
  var forSure = [];

  
  if (choices.wantNumbers) {
    potentialOptions = potentialOptions.concat(numericCharacters);
    forSure.push(getRandom(numericCharacters));
  }

  
  if (choices.wantLowercase) {
    potentialOptions = potentialOptions.concat(lowerCasedCharacters);
    forSure.push(getRandom(lowerCasedCharacters));
  }

  
  if (choices.wantUppercase) {
    potentialOptions = potentialOptions.concat(upperCasedCharacters);
    forSure.push(getRandom(upperCasedCharacters));
  }

  
  if (choices.wantSpecials) {
    potentialOptions = potentialOptions.concat(specialCharacters);
    forSure.push(getRandom(specialCharacters));
  }

  
  for (i = 0; i < choices.length; i++) {
    var potentialOption = getRandom(potentialOptions);

    final.push(potentialOption);
  }

  
  for (i = 0; i < forSure.length; i++) {
    final[i] = forSure[i];
  }

 
  return final.join('');
}


var generateBtn = document.querySelector("#generateonclick");


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#yourpassword");

  passwordText.value = password;
}


generateBtn.addEventListener("click", writePassword);



  
  
  