$(document).ready(function() {
  // Attach event listener to each color picker
  $('.color-picker').change(function() {
    var lightId = $(this).data('light-id');
    var color = $(this).val();
    
    // Perform backend functionality here (e.g., send color data to server)
    
    // Update the background color of the corresponding light
    $('#' + lightId).css('background-color', color);
  });
});
