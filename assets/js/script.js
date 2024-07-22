$(document).ready(function() {
    console.log("Document ready!");
    // Agrega aquí tus scripts de jQuery adicionales si es necesario
});
/* activate the carousel */
$('#carouselExampleControls').ready({interval:false});

/* change modal title when slide changes */
$('#carouselExampleControls').on('slid.bs.carousel', function () {
  $('.carousel slide').html($(this).find('.active').attr("title"));
})
 
 var myModalEl = document.getElementById('myModal')
  $(document).ready(function(){
      $("a").on('click', function(event) {
      if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
      scrollTop: $(hash).offset().top
      }, 2000, function(){
      window.location.hash = hash;
      });
      }
      });
      });

   // Mostrar alerta al hacer clic en "Mensaje enviado"
$('#submit').click(function(){
    alert('El mensaje fue enviado correctamente...');
  }); 

  // Activar tooltip
$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();
    $('#submit').tooltip({title: "Presiona para enviar el mensaje", placement: "right"});
});

$(document).ready(function(){
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {
  
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
  
        // Store hash
        var hash = this.hash;
  
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
  
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } // End if
    });
  });
  $(function() {
    $('.item-Height').matchHeight(); //lo agregué porque no podía alinear las cards
});