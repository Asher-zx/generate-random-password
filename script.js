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