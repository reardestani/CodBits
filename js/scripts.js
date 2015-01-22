(function(){
  "use strict";
  
  // Get total downloads
  // -------------------------------------------------
    $.ajax({
      type: "POST",
      dataType: "json",
      url: "http://api.codbits.com/ajax.php",
      data: { fn : "get-total-downloads" }
    })

    .done(function( msg ) {
      if (msg) {
        $('.total-downloads').text(msg);
      } else {
        
      }
    }); // done

  // Subsciption
  // -------------------------------------------------
    $( ".form-subscription" ).submit(function( event ) {
   
      // Stop form from submitting normally
      event.preventDefault();
     
      // Get some values from elements on the page:
      var $form = $( this ),
        term = $form.find( "input[type='email']" ).val(),
        url = "http://api.codbits.com/ajax.php";

      $.ajax({
        type: "POST",
        url: url,
        data: { fn: "subscription", email: term },
        dataType: "json",
     
        success: function( responce ) {
          if (responce.status === 'success') {
            $('.form-group').addClass('has-success');
            $form.find( "input[type='email']" ).val(" ");
            $('.subscription-response').text('Thanks for subscribing to our website. You will be notified of new products and news.');
          } else {
            $('.form-group').addClass('has-error');
            $('.subscription-response').text('Due to our validation, your email address in not valid. Provide another one or check yours again, please.');
          }
        }, // success

        error: function( jqXHR, textStatus ) {
          
        } // error

      }); // ajax

    });
  
})();