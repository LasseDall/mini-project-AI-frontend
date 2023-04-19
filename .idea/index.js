document.getElementById("btn-write-song").onclick = writeSong

async function writeSong() {

    const melody = document.getElementById("melody-input").value
    const numberOfVerses = document.getElementById("verses-input").value
    const cause = document.getElementById("cause-input").value
    const name = document.getElementById("name-input").value
    const adjectives = document.getElementById("adjectives-input").value
    const mood = document.getElementById("mood-input").value

    const songDTO = {
        melody: melody,
        numberOfVerses: numberOfVerses,
        cause: cause,
        name: name,
        adjectives: adjectives,
        mood: mood
    }

    const options = {
        method: "POST",
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify(songDTO)
    }

    await fetch("http://localhost:8080/api/song/", options)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log(data)
            localStorage.setItem(text, JSON.stringify(data.text));
            document.getElementById("song").innerText = JSON.stringify(data);
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
}