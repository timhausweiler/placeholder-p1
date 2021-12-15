async function replaceStory() {
  try {
    const url = `https://data.cityofnewyork.us/resource/gfqj-f768`;
    const res = await axios.get(url);

    let randomIndex = Math.round(Math.random() * res.data.length);
    let nextStory = res.data[randomIndex]; //selecting random story

    let hectare = nextStory.hectare;
    let shift = nextStory.shift;
    let tod = (shift === 'AM') ? "morning" : "afternoon";
    let day = nextStory.date.substring(2, 4);


  } catch (error) {
    console.log(error);
    document.querySelector(".headline").innerHTML = "Something went wront - please try again later";
    document.querySelector(".story").innerHTML = "";
  }
}

let button = document.querySelector("button");
button.addEventListener("click", replaceStory);