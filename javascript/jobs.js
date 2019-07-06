$(document).on("click", ".search-btn", function () {
    event.preventDefault();
    $('#jobs').empty();
    let city = $("#search").val().trim()
    const queryURL = "https://api.adzuna.com:443/v1/api/jobs/us/search/1?app_id=3c9055a0&app_key=b277b839fa391e86d53c328291a45814&results_per_page=15&where=" + city + " &distance=16.0934&sort_by=date&full_time=1" // Place names or postal codes may be used.


    console.log(city);

    $.ajax({
        url: queryURL,
        method: "GET"

    })
        .then(function (response) {

console.log(response)//testing response...it works and pulls info from api

//now for the rest...

//creating variable for job results
// const jobResults = response.results[0].title; //yay!!! the little wins :) 
// console.log(jobResults);

// $("#jobs").append(jobResults);

let results = response.results;
console.log(results);

for(let i = 0; i < results.length; i++) {
    
    const localJobs = $("<ul>");
    const jobUrl = results[i].redirect_url;
    console.log(jobUrl); //displays the response.results[i].title
    
    const jobSite = $("<a>").text(results[i].title).attr("href", jobUrl);
    localJobs.append(jobSite);
    $("#jobs").append(localJobs);
    // results.attr(); 

}


// console.log(jobDiv);

// jobDiv.append("#job-tab");
// localJobs.append(jobDiv);

})
    
                    
    // }
}); 
    
// });
