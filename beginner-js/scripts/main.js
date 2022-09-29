const myImage = document.querySelector('img');

myImage.onclick = () => {
    const mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/firefox-icon.png') {
        myImage.setAttribute('src', 'images/brokenImg.png');
    }  else {
        myImage.setAttribute('src', 'images/firefox-icon.png');
    }
};

const setUserName = () =>{
    const myName = prompt('Please enter name');
    if(!myName) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.textContent = `Mozilla FireFox is Cool, ${myName}`;
    }
    
    
};

const buttonElm = document.querySelector('button');
let myHeading = document.querySelector("h1");

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    const storedName = localStorage.getItem('name');
    myHeading.textContent = `Mozilla FireFox is Cool, ${storedName}`;
}

buttonElm.onclick = () => {
    setUserName();
}
