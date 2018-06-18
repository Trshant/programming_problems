var restify = require('restify');
var builder = require('botbuilder');

// Setup Restify Server
var server = restify.createServer();
server.listen(process.env.port || process.env.PORT || 3978, function () {
   console.log('%s listening to %s', server.name, server.url); 
});

// Create chat connector for communicating with the Bot Framework Service
var connector = new builder.ChatConnector({
    appId: process.env.MicrosoftAppId,
    appPassword: process.env.MicrosoftAppPassword
});

// Listen for messages from users 
server.post('/api/messages', connector.listen());

var inMemoryStorage = new builder.MemoryBotStorage();

// This is a reservation bot that has a menu of offerings.
var bot = new builder.UniversalBot(connector, [
    function(session){
        session.send("Welcome to Contoso Hotel and Resort.");
        session.beginDialog("mainMenu");
    }
]).set('storage', inMemoryStorage); // Register in-memory storage 

// Main menu
var menuItems = { 
    "Dinner reservation": {
        item: "dinnerReservation"
    },
    "Cancel Dinner reservation": {
        item: "cancelReservation"
    },
    "Go Back to the mail menu": {
        item: "mainMenu"
    },
}


// Display the main menu and start a new request depending on user input.
bot.dialog("mainMenu", [
    function(session){
        builder.Prompts.choice(session, "Main Menu:", menuItems);
    },
    function(session, results){
        if(results.response){
            session.beginDialog(menuItems[results.response.entity].item);
        }
    }
])
.triggerAction({
    // The user can request this at any time.
    // Once triggered, it clears the stack and prompts the main menu again.
    matches: /^main menu$/i,
    confirmPrompt: "This will cancel your request. Are you sure?"
});

reservations = {};

// Display the main menu and start a new request depending on user input.
bot.dialog("dinnerReservation", [
    function (session) {
        session.send("Welcome to the dinner reservation.");
        builder.Prompts.time(session, "Please provide a reservation date and time (e.g.: June 6th at 5pm)");

    },
    function (session, results) {
        session.dialogData.reservation = {};
        session.dialogData.reservation.Date = builder.EntityRecognizer.resolveTime([results.response]);
        builder.Prompts.text(session, "How many people are in your party?");
    },
    function (session, results) {
        session.dialogData.reservation.partySize = results.response;
        builder.Prompts.text(session, "Whose name will this reservation be under?");
    },
    function (session, results) {
        session.dialogData.reservation.Name = results.response;
	    // Process request and display reservation details
	    res = `Date/Time: ${session.dialogData.reservation.Date} <br/>
        	Party size: ${session.dialogData.reservation.partySize} <br/>
        	Reservation name: ${session.dialogData.reservation.Name}`;

        reservations[res] ='' ;
        session.send('Reservation confirmed. Reservation details: <br/>'+res);
        session.beginDialog("mainMenu");
    }
])

cancel_choices = { "Yes":{},"No":{} } ;
// Display the main menu and start a new request depending on user input.
bot.dialog("cancelReservation", [
    function (session) {
        session.send("Do you want to cancel your dinner reservation.");
    	builder.Prompts.choice(session, '&nbsp;', cancel_choices );
    },
    function(session, results){
        if(results.response){
            if( results.response.entity == "Yes" ){
      			builder.Prompts.choice(session, '&nbsp;', reservations );      	
            } else {
            	session.beginDialog("mainMenu");
            }
        }
    },
    function(session, results){
        session.send("yeah right. LOL!");
        session.beginDialog("mainMenu");
    }
])