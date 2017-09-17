// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on friendList etc.
// ===============================================================================


var friendListData = require("../data/friends");


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
    // API GET Requests
    // Below code handles when users "visit" a page.
    // In each of the below cases when a user visits a link
    // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
    // ---------------------------------------------------------------------------

    app.get("/api/friends", function(req, res) {
        res.json(friendListData);
    });



    // API POST Requests
    // Below code handles when a user submits a form and thus submits data to the server.
    // In each of the below cases, when a user submits form data (a JSON object)
    // ...the JSON is pushed to the appropriate JavaScript array
    // (ex. User fills out a reservation request... this data is then sent to the server...
    // Then the server saves the data to the tableData array)
    // ---------------------------------------------------------------------------

    app.post("/api/friends", function(req, res) {
        // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
        // It will do this by sending out the value "true" have a table

        //console.log(req.body.name);
        //console.log(req.body.photo);
        //console.log(req.body.scores);
        var bestFriendDifference = 0;
        var bestFriend = {name: "", photo: ""};

        for (var i = 0; i < friendListData.length; i++) {
            var totalDifference = 0;

            for (var j = 0; j < friendListData[i].scores.length; j++) {
                totalDifference += Math.abs(req.body.scores[j] - friendListData[i].scores[j]);

            }

            if (i == 0 || totalDifference < bestFriendDifference) {
                bestFriendDifference = totalDifference;
                bestFriend.name = friendListData[i].name;
                bestFriend.photo = friendListData[i].photo;
            }
        }

        friendListData.push(req.body);

        //console.log(bestFriendName);
        //console.log(bestFriendPhoto);

//console.log(req.body);
//console.log(bestFriend);

        res.json(bestFriend);
        //console.log(friendListData);


    });

    // ---------------------------------------------------------------------------
    // I added this below code so you could clear out the table while working with the functionality.
    // Don"t worry about it!

    app.post("/api/clear", function() {
        // Empty out the arrays of data
        friendListData = [];


        console.log(friendListData);
    });
};
