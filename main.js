$(function () {
  $("#send-btn").on("click", function () {
    const value = $("#data").val();
    const templateMsg = `<div class="user-inbox inbox">
        <div class="msg-header">
            <p class="mb-0">${value}</p>
        </div>
    </div>`;
    $('.form').append(templateMsg);
    $('#data').val('');

    //AJAX
    $.ajax({
        type: "POST",
        url: "message.php",
        data: {value},
        success: function (response) {
            console.log(response);
        }
    });

  });
});
