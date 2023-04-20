
document.getElementById("btn-write-song").onclick = writeSong;


document.getElementById("btn-change-song").onclick = changeSong;


async function changeSong() {

    const song = localStorage.getItem("song");
    const melody = localStorage.getItem("melody");
    const comment = document.getElementById("changes-input").value

    const changeDTO = {
        song: song,
        melody: melody,
        comment: comment
    }

    const options = {
        method: "POST",
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify(changeDTO)
    }

    try {
        const response = await fetch("https://mini-project-ai.azurewebsites.net/api/song/change", options).then(res => res.json())
        document.getElementById("melody-box").innerText = "Melodi: " + response.melody;
        document.getElementById("song-box").innerText = response.text;
        localStorage.setItem("song", response.text)
        localStorage.setItem("melody", response.melody)
    }catch (err) {
        console.log(err)
    }
}

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
        const response = await fetch("https://mini-project-ai.azurewebsites.net/api/song/write", options).then(res => res.json())
        document.getElementById("melody-box").innerText = "Melodi: " + response.melody;
        document.getElementById("song-box").innerText = response.text;
        localStorage.setItem("song", response.text)
        localStorage.setItem("melody", response.melody)
        document.getElementById("changes").style.display = "block"
    }catch (err) {
        console.log(err)
    }
}