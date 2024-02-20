// Function to be executed when the button is clicked
document.addEventListener('DOMContentLoaded', function(){
        function buttonClick() {

                var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
                var pages = ["january.html", "february.html", "March", "April", "birthday.html", "June", "July", "August", "September", "October", "November", "December"];

                let defMessage = document.getElementById("default");
                let message = '';
                let currentDate = new Date();
                // Get the day of the month
                var currentDay = currentDate.getDate();
                var currentMonth = currentDate.getMonth() + 1; // Months are zero-indexed, so we add 1
                currentDay = 20;
                if (currentMonth === 2 && currentDay === 14) {
                        // Show a specific message for February 14th
                        var nextMonthIndex = (currentDate.getMonth()) % 12; // Calculate the index of the next month
                        var nextMonthName = pages[nextMonthIndex]; // Get the name of current month from the array                       
                        window.location.href = "valentine.html";
                } else if ( currentDay === 20) {
                        var nextMonthIndex = (currentDate.getMonth()) % 12; // Calculate the index of the next month
                        var nextMonthName = pages[nextMonthIndex]; // Get the name of current month from the array
                       
                        window.location.href = nextMonthName;
                }else if (currentDay < 20) {
                        // Calculate the number of days remaining until the 20th
                        var daysRemaining = 20 - currentDay;
                        document.title = "Love is Beautifull"
                        message = `Owww I didn't know you will visit this page today. Sorry TT remaining ${daysRemaining} days until our anniversary.`;
                } else {
                        var nextMonthIndex = (currentDate.getMonth() + 1) % 12; // Calculate the index of the next month
                        var nextMonthName = monthNames[nextMonthIndex]; // Get the name of the next month from the array
                        var year = currentDate.getFullYear();
                        if (nextMonthIndex === 0) {
                            year++; // Increment the year if the next month is January
                        }
                        // Calculate the date of the 20th of the next month
                        var nextMonthDate = new Date(year, nextMonthIndex, 20);
                        // Calculate the difference in milliseconds between the current date and the 20th of the next month
                        var timeDifference = nextMonthDate.getTime() - currentDate.getTime();
                        // Convert milliseconds to days
                        var daysRemaining = Math.ceil(timeDifference / (1000 * 3600 * 24));
                        message = `There are ${daysRemaining} days remaining until next anniversary. Next anniversary is on ${nextMonthName} 20th.`;
                

                        // var messages = [
                        //         "Message 1",
                        //         "Message 2",
                        //         "Message 3",
                        //         // Add more messages as needed
                        //         ];
                        //     // Get a random index to select a message from the array
                        //     var randomIndex = Math.floor(Math.random() * messages.length);
                        //     message = messages[randomIndex];
                }
                document.getElementById("defaultContainer").remove()
                document.getElementById("randomContainer").removeAttribute("hidden")
                defMessage.style.fontSize = "50px"
                defMessage.innerText = message;
        }
            
            // Get the button element by its ID
        var button = document.getElementById("clickme");
            
            // Add event listener to the button, listening for "click" event
        button.addEventListener("click", buttonClick);
})
