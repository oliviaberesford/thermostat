## Thermostat Challenge

A makers academy set class challenge - 

Specification:

- Use Jasmine to Test-Drive Development of a thermostat
- Thermostat starts at 20 degrees
- You can increase the temperature with an up function
- You can decrease the temperature with a down function
- The minimum temperature is 10 degrees
- If power saving mode is on, the maximum temperature is 25 degrees
- If power saving mode is off, the maximum temperature is 32 degrees
- Power saving mode is on by default
- You can reset the temperature to 20 with a reset function
- You can ask about the thermostat's current energy usage: < 18 is low-usage, < 25 is medium-usage, anything else is high-usage.
- Build the skeleton of a UI, so that you can then start interacting with your underlying logic on the web using HTML/CSS.
- Learn how to manipuate the Document Object Model (DOM) using JavaScript and jQuery.
- Add a feature to display the weather in a city selected by the user.
- Create a remote API that the thermostat can talk to. (hint: you can build your own web server to provide this API using Sinatra!).
- Update your UI so that the thermostat communicates changes to the API. For example, it could make a POST request to localhost:4567/temperature, with the new temperature. On page refresh, the thermostat could make a GET request to localhost:4567/temperature to get the temperature.
- Save the selected city information using the API too.
