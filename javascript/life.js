$(document).on("click", ".search-btn", function () {
    event.preventDefault();

    let city = $("#search").val().trim()
    const queryURL = "https://api.adzuna.com/v1/api/jobs/us/search/1?app_id=3c9055a0&app_key=b277b839fa391e86d53c328291a45814&where=" + city // Place names or postal codes may be used.


    $.ajax({
        url: queryURL,
        method: "GET"
    })
        .then(function (response) {

console.log(response)//testing response...it works and pulls info from api

//now for the rest...

const jobResults = response.results;

for(let i = 0; i < jobResults; i++) {
// let results = jobResults[i];
let jobDiv = $("<div>"); 
// let localJobs = $("<ul>").text(jobResults[i]); 
jobDiv.attr("data-type", jobResults[i]);
// jobDiv.append("#job-tab");


console.log(jobDiv);

// jobDiv.append("#job-tab");
// localJobs.append(jobDiv);

}

// const results = response[0];
// console.log(results); 

//         // Looping over every result item
//         for (let i = 0; i < results.length; i++) {
    
    
    //                 // Creating a div for the job results
    //                 const jobDiv = $("<div>");
    
    //                 // Storing the result items 
    //                 const localJobs = results[i];
    
    //                 // Creating a list tag with the results job
    //                 const list = $("<ul>").text(localJobs);
    
    //                 jobDiv.append(list);
    
    
    //                 console.log(response);
    
                    $("#search").val(" ");
    // }
}); 
    
});
