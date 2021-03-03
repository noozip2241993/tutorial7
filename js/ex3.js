const changingBackground = () => { const paragraphElement = Array.from(document.getElementsByTagName("p"));
paragraphElement.forEach(element => {
 console.log(element.style.backgroundColor = "yellow");
});
}

changingBackground();
