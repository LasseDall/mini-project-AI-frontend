import {handleHttpErrors, sanitizeStringWithTableRows} from "../../utils.js";

document.getElementById("btn-write-song").onclick = writeSong()

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

    try {
        const response = await fetch("http://localhost:8080/api/song/write", options).then(res => res.json())
        document.getElementById("song-box").innerText = response.text;
    }catch (err) {
        console.log(err)
    }
}