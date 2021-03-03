
const displayText400 = () => { const exitingElements = Array.from(document.getElementsByClassName("400level"));
exitingElements.forEach(element => {
 console.log(element.textContent);
});
}

displayText400();
