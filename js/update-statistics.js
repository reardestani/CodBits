(function(){
  "use strict";

  // Update views
  // -------------------------------------------------
    var productViews	= $('.post'),
        fn        = productViews.data("fn"),
        id        = productViews.data("id");

    $.ajax({
      type: "POST",
      url: "http://api.codbits.com/ajax.php",
      data: { fn : fn, id : id }
    });

  // Update downloads
  // -------------------------------------------------
    $(document).on('click', '.btn-download', function(){

      // Variables
      var productDownloads = $(this),
          download         = productDownloads.data("download"),
          fn               = productDownloads.data("fn"),
          id               = productDownloads.data("id");

      // Send ajax request
      $.ajax({
        type: "POST",
        url: "http://api.codbits.com/ajax.php",
        data: { fn : fn, id : id }
      }).done(function() {

        var currentDownloads = $(".counter-downloads").text();
        var currentDownloads = parseInt(currentDownloads) + 1;
        $(".counter-downloads").text(currentDownloads);

      }); //.done

      // Download
      productDownloads.text('Downloading...')
      setTimeout( function() {
        window.location.href = download;
        productDownloads.text('Download');
      }, 500);

    });

  // Update downloads
  // -------------------------------------------------
    $(document).on('click', '.btn-purchase', function(){

      // Variables
      var productPurchase = $(this),
          purchase        = productPurchase.data("purchase"),
          fn              = productPurchase.data("fn"),
          id              = productPurchase.data("id");

      // Send ajax request
      $.ajax({
        type: "POST",
        url: "http://api.codbits.com/ajax.php",
        data: { fn : fn, id : id }
      }).done(function() {}); //.done

      // Purchase
      productPurchase.text('Redirecting...')
      setTimeout( function() {
        window.location.href = purchase;
      }, 500);

    });

  // Update likes
  // -------------------------------------------------
    $(document).on('click', '.btn-likes', function(){

      // Variables
      var productLikes = $(this),
          fn           = productLikes.data("fn"),
          id           = productLikes.data("id");

      productLikes.text('Liking...');

      // Send ajax request
      $.ajax({
        type: "POST",
        url: "http://api.codbits.com/ajax.php",
        data: { fn : fn, id : id }
      }).done(function() {

        var currentLikes = $(".counter-likes").text();
        var currentLikes = parseInt(currentLikes) + 1;
        $(".counter-likes").text(currentLikes);

        productLikes.text('Thanks').removeClass("btn-likes");

      }); //.done

    }); // update likes

})();