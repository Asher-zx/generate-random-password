const pageContainer = document.createElement('div')
pageContainer.classList.add('page-container')
document.body.appendChild(pageContainer)

const generateContainer = document.createElement('div')
generateContainer.classList.add('generate-container')
pageContainer.appendChild(generateContainer)

const genrateTitle = document.createElement('p')
genrateTitle.classList.add('generate-title')
genrateTitle.textContent = 'Generate a'
generateContainer.appendChild(genrateTitle)

const genrateTitleSecond = document.createElement('p')
genrateTitleSecond.classList.add('generate-title-second')
genrateTitleSecond.textContent = 'random password'
generateContainer.appendChild(genrateTitleSecond)

const genrateContentWord = document.createElement('p')
genrateContentWord.classList.add('generate-content-word')
genrateContentWord.textContent = 'Never use an insecure password again.'
generateContainer.appendChild(genrateContentWord)

const generateBtn = document.createElement('button')
generateBtn.classList.add('generate-btn')
generateBtn.textContent = 'Generate passwords'
generateContainer.appendChild(generateBtn)

const line = document.createElement('line')
line.classList.add('line')
pageContainer.appendChild(line)

const buttonContainer = document.createElement('div')
buttonContainer.classList.add('button-container')
pageContainer.appendChild(buttonContainer)

const passwordBtn1 = document.createElement('span')
passwordBtn1.classList.add('password-btn-1')
passwordBtn1.textContent = ""
buttonContainer.appendChild(passwordBtn1)

const passwordBtn2 = document.createElement('span')
passwordBtn2.classList.add('password-btn-2')
passwordBtn2.textContent = ""
buttonContainer.appendChild(passwordBtn2)

const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passwordLength = 12
function getRandomCharacter() {
    let randomChar = Math.floor(Math.random() * characters.length);
    return characters[randomChar];
}

function generateRandomPassword() {
    let randomPassword = ""
    for (let i = 0; i < passwordLength; i++) {
        randomPassword += getRandomCharacter();
    }
    return randomPassword;
}

generateBtn.addEventListener('click', () => {
    passwordBtn1.textContent = generateRandomPassword()
    passwordBtn2.textContent = generateRandomPassword()
});

passwordBtn1.addEventListener('click', () => {
    copyToClipboard(passwordBtn1.textContent);
    
    alert('copied: ' + passwordBtn1.textContent);
});
passwordBtn2.addEventListener('click', () => {
    copyToClipboard(passwordBtn2.textContent);

    alert('copied: ' + passwordBtn2.textContent);
});

function copyToClipboard(text) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
}