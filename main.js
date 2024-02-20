// Function to be executed when the button is clicked
document.addEventListener('DOMContentLoaded', function(){
        function buttonClick() {

                var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
                var pages = ["january.html", "february.html", "March", "April", "birthday.html", "June", "July", "August", "September", "October", "November", "December"];

                let defMessage = document.getElementById("default_msg");
                let defQuote = document.getElementById("default_quote");
                let message = '';
                let quote = '';
                let gif = '';
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
                

                        var messages = [
                                "You are my today and all of my tomorrows.",
                                "Your love is like a melody, it lingers on my mind and dances in my heart.",
                                "I fell in love with the way you touched me without using your hands.",
                                "I want to be your favorite hello and your hardest goodbye",
                                "Loving you is like breathing; I just can't stop.",
                                "I've never craved someone's presence, the way I crave yours.",
                                // Add more messages as needed
                                ];
                                //Get a random index to select a message from the array
                        var randomIndex = Math.floor(Math.random() * messages.length);
                        quote = messages[randomIndex];

                        var imagenes = [
                                "img1.gif",
                                "img2.gif",
                                "img3.gif",
                                "img4.gif",
                                "img5.gif",
                                "img6.gif",
                                "img7.gif"
                        ]
                        // Get a random index to select a message from the array
                        var randomgif = Math.floor(Math.random() * imagenes.length);
                        gif = imagenes[randomgif];

                        var gifElement = document.createElement("img");
                        // Establecer la fuente del GIF
                        gifElement.src = `img/${gif}`;
                        // Agregar una clase (opcional)
                        gifElement.classList.add("gif-class");
                        // Insertar el elemento de imagen en el contenedor
                        document.getElementById("gifContainer").appendChild(gifElement);

                        
                }
                document.getElementById("defaultContainer").remove()
                document.getElementById("randomContainer").removeAttribute("hidden")
                defMessage.style.fontSize = "30px"
                defMessage.innerText = message;
                defQuote.innerText = `"${quote}"`;


        }
            
            // Get the button element by its ID
        var button = document.getElementById("clickme");
            
            // Add event listener to the button, listening for "click" event
        button.addEventListener("click", buttonClick);
})
