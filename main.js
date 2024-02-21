// Function to be executed when the button is clicked
document.addEventListener('DOMContentLoaded', function(){
        function buttonClick(event) {

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
                // currentDay = 20;
                // currentMonth = 5
                if (currentMonth === 2 && currentDay === 14) {
                        // Show a specific message for February 14th
                        var nextMonthIndex = (currentDate.getMonth()) % 12; // Calculate the index of the next month
                        var nextMonthName = pages[nextMonthIndex]; // Get the name of current month from the array                       
                        window.location.href = nextMonthName;//"valentine.html";

                } else if ( currentDay === 20) {
                        var nextMonthName = pages[currentMonth - 1]; // Get the name of current month from the array
                        window.location.href = nextMonthName;

                        
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
                        if (currentMonth === 5){
                                message = `There are ${daysRemaining} days remaining until you BIRTHDAY 🥳 
                                I am so excited about it 🥰 You know that
                                your birthday and our anniversary
                                is the same day omg 🤭🥰.`
                        }

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

                        var images = [
                                "img1.gif",
                                "img2.gif",
                                "img3.gif",
                                "img4.gif",
                                "img5.gif",
                                "img6.gif",
                                "img7.gif"
                        ]
                        // Get a random index to select a message from the array
                        let random_gif = Math.floor(Math.random() * images.length);
                        gif = images[random_gif];

                        // let gifElement = document.getElementById("img");
                        // gifElement.src = `img/${gif}`;
                        // gifElement.classList.add("gif-class");
                        // document.getElementById("gifContainer").appendChild(gifElement);
                        let gifElement = document.querySelector(".gif-class");
                        gifElement.src = `img/${gif}`
                }
                // add audio
                let audioElement = document.createElement("audio");
                audioElement.src = "src/ifitsnotu.mp3";
                audioElement.classList.add("audio-class");
                audioElement.setAttribute("autoplay", "");
                document.getElementById("audioContainer").appendChild(audioElement);


                document.getElementById("defaultContainer").style.display = "none";
                let containers = document.getElementsByClassName("container");
                for (let i = 0; i < containers.length; i++) {
                containers[i].removeAttribute("hidden");
                }
                defMessage.style.fontSize = "15px"
                defMessage.innerText = message;
                defMessage.style.textAlign = 'center';
                
                defQuote.style.fontSize = "20px"
                defQuote.innerText = `"${quote}"`;
                document.querySelector("audio").autoplay = true;


                
                var gifContainer = document.getElementById("gifContainer");
                gifContainer.style.cursor = "pointer";
                gifContainer.addEventListener("click", buttonClick);
                var heartIcon = document.createElement("span");
                heartIcon.innerHTML = "&#10084;"; // Código HTML del corazón, puedes usar una imagen o una clase de icono en lugar de un caracter especial
               
                // Ajustar estilos del corazón
                heartIcon.style.position = "absolute";
                heartIcon.style.top = (event.clientY-400) + "px"; // Posición vertical del corazón según la posición del clic
                heartIcon.style.left = (event.clientX) + "px"; // Posición horizontal del corazón según la posición del clic
                heartIcon.style.color = "red"; // Color del corazón
                // heartIcon.style.opacity = '20%'
                heartIcon.style.fontSize ='20px'
                heartIcon.style.pointerEvents = "none"; // Evita que el corazón reciba eventos de clic para no interferir con el contenedor de GIF
        
                // Añadir el corazón al contenedor de GIF
                gifContainer.append(heartIcon);
        }
            // Get the button element by its ID
        var button = document.getElementById("click_me");
            // Add event listener to the button, listening for "click" event
        button.addEventListener("click", buttonClick);
})
