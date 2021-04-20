if(!!window.performance && window.performance.navigation.type == 2)
{
    window.location.reload();
}
$(document).ready(function () {
    $nav = $('.nav');
    $toggleCollapse = $('.toggle-collapse');

    /** click event on toggle menu */
    $toggleCollapse.click(function () {
        $nav.toggleClass('collapse');
    });
    var swiper = new Swiper('.a .swiper-container', {
      pagination: {
        el: '.a .swiper-pagination',
        dynamicBullets: true,
      },
      loop : true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
    });
    var swiper = new Swiper('.e .swiper-container', {
      slidesPerView: 3,
      spaceBetween: 30,
      loop: true,
      pagination: {
        el: '.e .swiper-pagination',
        clickable: true,
      },
      breakpoints:{
          900: {
              slidesPerView: 3,
              spaceBetween: 10
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 10
        },
          0: {
            slidesPerView: 1,
            spaceBetween: 10
        },
      }
    });
});

var a = 0;
$(window).scroll(function() {

  var oTop = $('#counter').offset().top - window.innerHeight;
  if (a == 0 && $(window).scrollTop() > oTop) {
    $('.counter-value').each(function() {
      var $this = $(this),
        countTo = $this.attr('data-count');
      $({
        countNum: $this.text()
      }).animate({
          countNum: countTo
        },

        {

          duration: 5000,
          easing: 'swing',
          step: function() {
            $this.text(Math.floor(this.countNum));
          },
          complete: function() {
            $this.text(this.countNum);
            //alert('finished');
          }

        });
    });
    a = 1;
  }

});
function postToGoogle() {
  var field1 = $("#name").val();
  var field2 = $("#email").val();
  var field3 = $("#sub").val();
  var field4 = $("#mess").val();
   
  if(field1 == ""){
    alert('Please Fill Your Name');
    document.getElementById("name").focus();
    return false;
}
if(field2 == ""){
    alert('Please Fill Your Email');
    document.getElementById("email").focus();
    return false;
}
  $.ajax({
      url: "https://docs.google.com/forms/u/1/d/e/1FAIpQLScLYOspvee85AyawjUQUNlRTy9BIimjgSnDn0pNchLxy_Z72Q/formResponse",
      data: {"entry.673588107": field1, "entry.1855552017": field2, "entry.1949952630": field3, "entry.687356682": field4},
      type: "POST",
      dataType: "xml",
      success: function(d)
      {
      },
      error: function(x, y, z)
          {
              $('#left').hide();
              document.getElementById('right').setAttribute("style", "width:100%")
              
          }
  });
  return false;
}

function postToGoogle2() {
  var field1 = $("#email2").val();
   
  if(field1 == ""){
      alert('Please Fill Your Email');
      document.getElementById("email2").focus();
      return false;
  }
  $.ajax({
      url: "https://docs.google.com/forms/u/1/d/e/1FAIpQLSdYItmwNfy1GNfxo4a4b6cuHuhT0rqc2jYKKQfz8Zebeu1_DA/formResponse",
      data: {"entry.627088285": field1},
      type: "POST",
      dataType: "xml",
      success: function(d){},
      error: function(x, y, z)
          {

            $('#form2').hide();
              
          }
  });
  return false;
}