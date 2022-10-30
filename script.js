//https://codepen.io/brendinventer/pen/NWxBQvG?editors=1010

function submitAndDisplayForm(event) {
  event.preventDefault();
  let formData = [
    document.getElementById("entryTitle").value,
    document.getElementById("entryText").value,
  ];

  if (formData[0] == "") {
    alert("Your Entry must contain at least a title!");
  }

  //console.log(formData);

  let displayTitle = document.createElement("p");
  let displayText = document.createElement("p");
  let displayDate = document.createElement("p");
  let displayLine = document.createElement("hr");

  displayTitle.innerHTML = formData[0];
  displayText.innerHTML = formData[1];

  document.getElementById("userEntry").appendChild(displayTitle);
  document.getElementById("userEntry").appendChild(displayText);

  let currentDate = new Date().toDateString();
  let currentHour = new Date().getHours();
  let currentMinute = new Date().getMinutes();

  let timeString = `Posted on ${currentDate} at ${currentHour}:${currentMinute}`;

  //console.log(currentHour);

  displayTitle.style.color = "black";
  displayTitle.style.fontWeight = "bolder";
  displayTitle.style.fontSize = "25px";
  displayText.style.color = "black";
  displayText.style.fontSize = "19px";

  if (document.getElementById("dateCatch").checked) {
    displayDate.innerHTML = timeString; //`Posted on ${currentDate} at ${currentHour}:${currentMinute}`;
    document.getElementById("userEntry").appendChild(displayDate);
  }

  displayDate.style.color = "rgb(1, 110, 134)";

  document.getElementById("userEntry").appendChild(displayLine);
}
