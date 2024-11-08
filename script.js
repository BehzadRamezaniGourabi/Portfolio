$(document).ready(function () {
  // Smooth scrolling for navigation links
  $('a[href^="#"]').on('click', function (e) {
      e.preventDefault();
      $('html, body').animate({
          scrollTop: $(document).height() - $(window).height()
      }, 500);
  });

   // Fade-in effect for the contact form
   $('#contact').hide();
    $('.button').on('click', function () {
        $('#contact').fadeIn(1000);
    });

    // Add animation for social icons
    $('.social-icon').hover(
        function () {
            $(this).animate({ fontSize: '1.8rem' }, 200);
        },
        function () {
            $(this).animate({ fontSize: '1.5rem' }, 200);
        }
    );

     // Handle the form submission with JS and display success/error messages
     $('#contact-form').on('submit', function (e) {
        e.preventDefault(); // Prevent the form from submitting traditionally

        var formData = {
            name: $('input[name="name"]').val(),
            email: $('input[name="email"]').val(),
            message: $('textarea[name="message"]').val(),
        };

        $.ajax({
            url: 'submit_form.php',  // Current URL (for PHP file)
            type: 'POST',
            data: formData,
            success: function(response) {
                // Show success message
                showMessage('Message sent successfully!', 'success');
            },
            error: function(xhr, status, error) {
                // Show error message
                showMessage('Error: Unable to send message. Please try again later.', 'error');
            }
        });
    });

    // Function to display message
    function showMessage(message, type) {
        var messageBox = $('<div class="message-box"></div>').text(message);
        
        if (type === 'success') {
            messageBox.css('background-color', '#28a745'); // Green for success
        } else if (type === 'error') {
            messageBox.css('background-color', '#dc3545'); // Red for error
        }

        $('#contact-form').after(messageBox); // Append message box after the form
        messageBox.fadeIn(500).delay(3000).fadeOut(500); // Fade in, wait for 3 seconds, then fade out
    }
});