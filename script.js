var day = '';
var time = '';
var task = '';

$(document).text(function () {
    //Save day, time & task to footer.

    
    $("#saveButton").on("click", function () {
        
        day = $("#day").val();
        time = $("#time").val();
        task = $("#task").val();
        $("#inputData").append("<li>" + day +
            " | " + time + " | " + task +
            " | " + "<buton class='btn btn-success edit>Edit</button>" + 
            "<button class='btn btn-danger delete'>Delete</button><br>"
            + "</li>");
    });
});


    //options for day & time along with task string cannot be null

    //if day, time and string are filled, add inputed information 
    // to #inputData
        // Let each 



