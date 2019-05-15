(function() {
    'use strict';
    const noteDocument = $(document)
    const createButton = $('#add-team-btn')
    const notesList    = $('.list-group.list-group-flush')

    const helpers = {
        /**
         * On click, create a new note and redirect to it...
         */
        createTeamAndRedirect: evt => {
            var teamName = prompt("Please enter your team name with no spaces!")
            teamName = teamName.replace(' ', '')
            if(teamName != null){
            teamName = teamName.replace(' ', '')
                axios.post('/teams/' + teamName)
                //.then(response => (window.location = '/notes/'+response.data.data.Slug))
            }
        },

        /**
         * Load the notes to the page...
         */
        loadNotes: evt => {
            axios.get('/api/notes').then(response => {
                const notes = response.data.data

                for (const key in notes) {
                    if (notes.hasOwnProperty(key)) {
                        notesList.append(
                            `<a href="/notes/${notes[key].Slug}" class="list-group-item list-group-item-action">
                                ${notes[key].Title}
                            </a>`
                        )
                    }
                }
            })
        }
    }

    // noteDocument.ready(helpers.loadNotes)
    createButton.click(helpers.createTeamAndRedirect)
}())
