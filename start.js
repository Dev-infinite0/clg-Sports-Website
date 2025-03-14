// Function to show the popup after 30 seconds
function showPopup() {
    $('#popup').modal('show');
}
//hide after direct
$('#goto-section').on('click', function() {
      closePopup();
  });
// Set timeout to show the popup after 30 seconds
setTimeout(showPopup, 5000); // 30 seconds = 30000 milliseconds