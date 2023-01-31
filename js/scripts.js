$(document).ready(function(){
    
    // GLOBAL VARIABLES
    var editActive = false;
    var disableBtn = false;

    // FORM PREVENT DEFAULT
    $("form").submit(function(event){
        event.preventDefault();
      });

    // CLEAR TEXT INPUT
    $("#todo-input-box").val("");
    $("#todo-input-box").focus();

    // COMPLETED TASK BUTTON
    function doneBtn(){
        if (disableBtn == true)
            return;
        $(this).parent().toggleClass("completed-task");
    }

    // EDIT TASK BUTTON
    function editBtn(){
        if (disableBtn == true)
        return;
        editActive = true;
        disableBtn = true;

        $(this).parent().attr('id', 'activeTask');
        var taskText = $(this).parent().text();
        $("#todo-input-box").css("background-color", "#ffaeae");
        $("#todo-input-box").val(taskText);
        $(this).parent().css("color", "#ffe0d8");
        $('#submit-btn').css("border", "5px solid red");
        $("#todo-input-box").focus();
    }

    // DELETE TASK BUTTON
    function deleteBtn(){
        if (disableBtn == true)
            return;
        $(this).parent().remove();
    }

    // === PLUGIN BTN ===
    $("#print-btn").click(function(){
        $("ul").printList();
    });

    // ====== ADD A TASK SUBMIT BUTTON | + | =======
    $("#submit-btn").click(function(){
        var newListItem = $("#todo-input-box").val();

        if (editActive == true){

            $("#activeTask").html("<img src='./img/checkmark.png' class='done-btn'>"  
            + newListItem 
            + "<img src='./img/edit.png' class='edit-btn'>"
            + "<img src='./img/delete.png' class='delete-btn'>");

            $("#activeTask").find('img.done-btn').click(doneBtn);
            $("#activeTask").find('img.edit-btn').click(editBtn);
            $("#activeTask").find('img.delete-btn').click(deleteBtn);

            $("#todo-input-box").val("");
            $("#todo-input-box").css("background-color", "#ffffff");
            $('#submit-btn').css("border", "none");
            $("#activeTask").css("color", "#000000");
            $("#activeTask").removeAttr('id');
            editActive = false;
            disableBtn = false;

        } else if(newListItem.length > 0){

            $("#task-list").append("<li>" + "<img src='./img/checkmark.png' class='done-btn'>"  
            + newListItem 
            + "<img src='./img/edit.png' class='edit-btn'>"
            + "<img src='./img/delete.png' class='delete-btn'>"
            + "</li>");

            $('li:last').find('img.done-btn').click(doneBtn);
            $('li:last').find('img.edit-btn').click(editBtn);
            $('li:last').find('img.delete-btn').click(deleteBtn);

            // CLEAR TEXT INPUT
            $("#todo-input-box").val("");

        } else {
            alert("Please write a task first.");
        }
    }); // end submit-btn click function

    // USE ENTER KEY CALL ADD A TASK BUTTON
    $('#todo-input-box').keypress(function(e){
        if(e.keyCode==13)
        $('#submit-btn').click();
      });

}); // end document ready