// Get reference to DOM elements
const body = document.querySelector("body"),
  hourHand = document.querySelector(".hour"),
  minuteHand = document.querySelector(".minute"),
  secondHand = document.querySelector(".second"),
  modeSwitch = document.querySelector(".mode-switch");

// Check if the mode is already set to "Dark Mode" in localStorage
if (localStorage.getItem("mode") === "Dark Mode") {
  // Add "dark" class to body and set modeSwitch text to "Light Mode"
  body.classList.add("dark");
  modeSwitch.textContent = "Light Mode";
}

// Add a clock event listener to modeSwitch
modeSwitch.addEventListener("click", () => {
  // Toggle the "dark" class on the body element
  body.classList.toggle("dark");

  // Check if the "dark" class is present on the body element
  const isDarkMode = body.classList.contains("dark");

  // Set modeSwitch text based on "dark" class presence
  modeSwitch.textContent = isDarkMode ? "Light Mode" : "Dark Mode";

  // Set localStorage "mode" item based on "dark" class presence
  localStorage.setItem("mode", isDarkMode ? "Dark Mode" : "Light Mode");
});

const updateTime = () => {
  // Get current time
  const date = new Date();

  // Calculate degrees for each hand
  const seconds = date.getSeconds();
  const minutes = date.getMinutes();
  const hours = date.getHours();

  const secToDeg = (seconds / 60) * 360;
  const minToDeg = ((minutes + seconds / 60) / 60) * 360;
  const hrToDeg = ((hours % 12 + minutes / 60 + seconds / 3600) / 12) * 360;

  // Rotate the clock hands to the appropriate degree based on the current time
  secondHand.style.transform = `rotate(${secToDeg}deg)`;
  minuteHand.style.transform = `rotate(${minToDeg}deg)`;
  hourHand.style.transform = `rotate(${hrToDeg}deg)`;
};


// Call updateTime to set clock hands every second one
setInterval(updateTime, 1000);

// Call updateTime function on page load
updateTime();
