let trafficInterval; // Variable to store the traffic simulation interval
let clickInterval; // Variable to store the click simulation interval

function checkUrlType() {
    const url = document.getElementById('urlInput').value;
    const appPattern = /^(app|https?:\/\/.*\.(apk|ipa))/;
    const websitePattern = /^(https?:\/\/|www\.)/;
    const resultElement = document.getElementById('result');
    const sendBotButton = document.getElementById('sendBotButton');
    const stopBotButton = document.getElementById('stopBotButton');

    // Reset the button visibility on every check
    sendBotButton.style.display = "none";
    stopBotButton.style.display = "none";

    if (appPattern.test(url)) {
        resultElement.textContent = "This URL points to an app.";
        resultElement.style.color = "green";
        sendBotButton.style.display = "inline-block";  // Show the Send Bot button
    } else if (websitePattern.test(url)) {
        resultElement.textContent = "This URL points to a website.";
        resultElement.style.color = "blue";
        sendBotButton.style.display = "inline-block";  // Show the Send Bot button
    } else {
        resultElement.textContent = "Unknown URL type.";
        resultElement.style.color = "red";
    }
}

function sendBot() {
    const resultElement = document.getElementById('result');

    resultElement.textContent = `Simulating bot traffic...`;
    resultElement.style.color = "black";

    // Hide the Send Bot button and show the Stop button
    document.getElementById('sendBotButton').style.display = "none";
    document.getElementById('stopBotButton').style.display = "inline-block";

    // Start simulating traffic
    trafficInterval = setInterval(() => {
        resultElement.textContent += `\nBot traffic generated. (Simulation only)`;
        resultElement.style.color = "purple";
    }, 2000); // Simulate traffic every 2 seconds

    // Start random clicking
    clickInterval = setInterval(() => {
        randomClick();
    }, 1000); // Click every second
}

function stopBot() {
    clearInterval(trafficInterval); // Stop the traffic simulation
    clearInterval(clickInterval); // Stop the click simulation
    const resultElement = document.getElementById('result');
    
    // Show a message indicating the simulation has stopped
    resultElement.textContent += `\nTraffic simulation stopped.`;
    resultElement.style.color = "red";

    // Hide the Stop button and show the Send Bot button
    document.getElementById('stopBotButton').style.display = "none";
    document.getElementById('sendBotButton').style.display = "inline-block";
}

function randomClick() {
    // Get random coordinates within the window
    const x = Math.floor(Math.random() * window.innerWidth);
    const y = Math.floor(Math.random() * window.innerHeight);
    
    // Create a click event at the random position
    const clickEvent = new MouseEvent('click', {
        clientX: x,
        clientY: y,
        bubbles: true,
        cancelable: true
    });

    // Dispatch the event on the document
    document.dispatchEvent(clickEvent);
}
