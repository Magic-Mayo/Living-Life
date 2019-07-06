$(document).on("click", ".search-btn", function () {
    event.preventDefault();
    $("#jobs").empty();

    let city = $("#search").val().trim()
    const queryURL = "https://api.adzuna.com:443/v1/api/jobs/us/search/1?app_id=3c9055a0&app_key=b277b839fa391e86d53c328291a45814&results_per_page=15&where=" + city + " &distance=16.0934&sort_by=date&full_time=1" // Place names or postal codes may be used.


    console.log(city);

    $.ajax({
        url: queryURL,
        method: "GET"

    })
        .then(function (response) {

console.log(response)//testing response...it works and pulls info from api

//new variable to use
let results = response.results;
console.log(results);

//looping the results
for(let i = 0; i < results.length; i++) {
    
    const localJobs = $("<ul>").addClass("jobList");
    const jobUrl = results[i].redirect_url;
    console.log(jobUrl); //displays the website in the results
    
    const jobDiv = $("<div>").addClass("jobDiv");
    const jobInfo = results[i].description;
    jobDiv.append(jobInfo);
    console.log(jobInfo); //will provide job details if you're interested
    

    const jobSite = $("<div>").text(results[i].title).addClass("jobSite"); //variable to give the localJobs **removed .attr("href", jobUrl);
    localJobs.append(jobSite).append(jobDiv);
    
    $("#jobs").append(localJobs);

    
}
const coll = $(".jobSite");
//jobSite is our "collapsible", jobInfo is our "content"

for(let i = 0; i < coll.length; i++){
    $('.jobDiv').css("display", "none");
    coll[i].addEventListener("click", function(){
        this.classList.toggle("active");
        const content = this.nextElementSibling;
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    })
}



})

})