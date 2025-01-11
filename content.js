//doing it locally :pensive:
let blockedSites = ["stablediffusionweb.com", "craiyon.com"]




//we lookin at this
let mainDiv = "search";


//grabs the big div that loads (has all the individual links inside)
const searchResult = document.getElementById(mainDiv);

let lilDiv = searchResult.getElementsByClassName("MjjYud");



for (div of lilDiv) {
    let textArray = div.innerText.split("\n");
    for (line in textArray) {
        //me when i gets website :)
        if (textArray[line].startsWith("https://")) {
            if (compareToSiteList(textArray[line]) == true) {
                console.log("Blocked site: "+textArray[line]);
                div.remove();
            }
        }
    }
}


function compareToSiteList (websiteName) {
    for (site of blockedSites) {
        if (websiteName == "https://"+site) {
            return(true);
        }
    }
}

