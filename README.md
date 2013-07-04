PHP-Ajax-search
===============

A simple PHP/AJAX search

This simple web app uses PHP, MySQL, JavaScript and the Bootstrap framework.

I have a working demo located here:  http://brandanmajeske.com/PHP-Ajax-search/

Installation:

1. Copy files to local machine or test server. 
2. Create a database and use the 'locations.sql' file found in the 'assets' folder to complete the 'locations' table needed for the Search.php model. 
3. Alter the database config file found in the 'inc' folder to reflect parameters you've set for your database - database name, user, password, etc.
4. If you're able to connect to the database without error, you're ready to conduct a search! 

Info about this search tool:

The database table 'locations' contains 13,844 rows; That's a pretty good sized table, but with the search.js script the data can be searched and have matches displayed quickly. Here's whats going on:

Using PHP the database is accessed, all the table rows are returned, converted into JSON and then stored in the 'tmp' folder in a file called 'results.json'. When a user enters a search term a few things happen via the 'search.js' script. First, the script is listening for the 'keyup' event to fire on the search input field. When 'keyup' fires, a function called 'debounce' is used to slightly delay the rest of the script. Debounce listens for keyup events to stop before executing the subsequent function. This makes for a more pleasant user experience when typing long search strings. Next, the script checks what is being entered in the input field. Since searching for a single character, or a space would have undesireable results, the script checks for this and prevents the upcoming AJAX call from happening if undesired input is found. If two or more characters (that aren't spaces) are entered the AJAX call will execute. In the AJAX call a regular expression is used to compare the data in 'results.json' with the search terms entered by the user. The regex called myExp looks for name, city, state and zip matches. Matches are added to a variable called 'output', then output is set as the html content on a DOM element named 'update'. If no results are found, output will contain an error message. The results, or error, are then animated and displayed to the user. To conduct a new search the user simply needs to start deleting text from the search input field. The script is listening for the 'keyup' event to fire and will continue to compare the results.json file with the search terms until the input field contains less than two characters. On searches that return an extensive list of results, a back-to-top button is display in the lower-right side of the window. Pressing this button will scroll the window back up to the top.

Add'l info, credits and kudos:

This web app is "responsive" -  Thanks to Twitter Bootstrap for making this easy.
I based my idea on Lynda.com's 'JavaScript and AJAX' video series by Ray Villalobos - http://www.lynda.com/Developer-tutorials/JavaScript-and-AJAX/114900-2.html
jQuery Throttle/Debounce by Ben Alman - http://benalman.com/projects/jquery-throttle-debounce-plugin/

