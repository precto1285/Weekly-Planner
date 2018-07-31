var day = '';
var time = '';
var task = '';

//Save day, time & task to footer.
 $("#saveButton").on("click",function(){
     console.log("hello world");
     day = $("#day").val();
     console.log(day);
     time = $("#time").val();
     console.log(time);
     task = $("#task").val();
     console.log(task);
     $(document).text(function(){
        $("#inputData").append(day +" | " + time + " | " + task + " | " + "<button class='btn btn-success edit'>Edit</button>" + " | " + "<button class='btn btn-danger delete'>Delete</button><br>");
    });
 });
    //options for day & time along with task string cannot be null

    //if day, time and string are filled, add inputed information 
    // to #inputData
        // Let each 
    

//Edit specified day, time & task in footer.

    //When button to edit is selected

//Delete specified day, time & task in footer.
