
async function Player(id){

    await fetch(`https://free-nba.p.rapidapi.com/players/1`, {method: 'GET',
    headers: {
        'X-RapidAPI-Key': '9fa7b755efmshbc9f15a9fe07af2p1ebd85jsne111195ece24',
        'X-RapidAPI-Host': 'free-nba.p.rapidapi.com'
    }})

    // .then(response => response.json())
    .then(response => {
        document.getElementById('fname').innerHTML = response.first_name;
        document.getElementById('lname').innerHTML = response.last_name;
    })
}
export default Player;