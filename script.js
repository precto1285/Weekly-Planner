var day = '';
var time = '';
var task = '';

$(document).text(function () {
    //Save day, time & task to footer.

    
    $("#saveButton").on("click", function () {
        if(task === ''){
            alert("Please enter a task");
        }
        else{
        day = $("#day").val();
        time = $("#time").val();
        task = $("#task").val();
        $("#inputData").append("<li>" + day +
            " | " + time + " | " + task +
            " | " +
            "<button class='btn btn-danger delete'>Delete</button><br>"
            + "</li>");
        }
    });
});


    //options for day & time along with task string cannot be null

    //if day, time and string are filled, add inputed information 
    // to #inputData
        // Let each 



