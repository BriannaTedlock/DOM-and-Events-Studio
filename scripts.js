// Write your JavaScript code here.
// Remember to pay attention to page loading!
 window.addEventListener("load", function() {
let takeOffbutton = document.getElementById("takeOff");

button.addEventListener("click", takeOff);
    target.style.backgroundColor = "blue";
}); 
 

    function myFunction() {
        alert("Are you sure shuttle is ready for takeoff.");
        let response = confirm("Confirm that shuttle is ready for takeoff");
        if (response) {
          console.log("Confirm that shuttle is ready for takeoff");
        } else {
          console.log("...");
        };
      };

      let button = document.getElementById("takeOff");
        button.addEventListener("click", takeOff);

        function takeOff() {
        document.getElementById("flightStatus").innerHTML = "Shuttle in flight";
          console.log("Shuttle in flight");
        }
        
      