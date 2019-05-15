module.exports = (app) => {
    const teams = require('../controllers/team.controller.js');

    // Create a new team
    app.post('/teams/:teamName', teams.create);

    // Retrieve all Teams
    app.get('/teams', teams.findAll);

    // Retrieve a single Note with noteId
    // app.get('/teams/:noteId', teams.findOne);

    // Update a team clickTime with tiimestamp
    app.put('/teams/:teamName/clickedBuzzer', teams.update);


    // Clear teams clickTime
    app.put('/teams/clearClickedTime', teams.clearClickTimeStamp);

    // Delete all teams
    app.delete('/teams/delete', teams.delete);
}