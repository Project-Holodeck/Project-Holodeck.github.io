

<script type="text/javascript">
  $(document).ready(function() {
      // run once the page is ready
      var time = 2500;
      // get the image containers
      $im1 = $('#f-image-1');
      $im2 = $('#f-image-2');
      $im3 = $('#f-image-3');

      setInterval(function(){
        // call function every x milliseconds (defined in time variable above)
        changeImage();
      }, time);

      var currentImage = 1;

      function changeImage(){
        switch(currentImage) {
          case 1:
              // show image 2
            $im1.hide();
            $im2.show();
            $im3.hide();
              currentImage = 2;
              break;
          case 2:
            // show image 3
            $im1.hide();
            $im2.hide();
            $im3.show();
              currentImage = 3;
              break;
          default:
              // show image 1
            $im1.show();
            $im2.hide();
            $im3.hide();
              currentImage = 1;
      }
      }
  });
</script>
