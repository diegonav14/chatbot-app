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
            const templateReplay = `<div class="bot-inbox inbox">
            <div class="icon">
                <i class="bi bi-chat-left"></i>
            </div>
            <div class="msg-header">
                <p class="mb-0">${response}</p>
            </div>
        </div>`;
        $('.form').append(templateReplay);
        $('.form').scrollTop($('.form')[0].scrollHeight);
        }
    });

  });
});
