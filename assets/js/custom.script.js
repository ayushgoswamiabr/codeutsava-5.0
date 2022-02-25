(function ($) {
  "use strict";

  $(document).ready(function () {
    /*=========================================================================
         ===  MENU SCROLL FIXED
         ========================================================================== */
    var s = $(".nit-header-position");
    var pos = s.position();

    // $(window).on('scroll', function () {
    //     var windowpos = $(window).scrollTop();
    //     if (windowpos >= pos.top) {
    //         s.addClass("menu-onscroll");
    //     } else {
    //         s.removeClass("menu-onscroll");
    //     }
    // });

    /*=========================================================================
         ===  MENU SCROLL FIXED END
         ========================================================================== */

    /*=========================================================================
         ===  Circular CountDown
         ========================================================================== */
    // if ($("#circular-countdown").length) {
    //   $("#circular-countdown").TimeCircles({
    //     animation: "smooth",
    //     bg_width: 1.0,
    //     fg_width: 0.1,
    //     circle_bg_color: "#ddd",
    //     time: {
    //       Days: {
    //         text: "Days",
    //         color: "#ec398b",
    //         show: true,
    //       },
    //       Hours: {
    //         text: "Hours",
    //         color: "#fac400",
    //         show: true,
    //       },
    //       Minutes: {
    //         text: "Minutes",
    //         color: "#00acee",
    //         show: true,
    //       },
    //       Seconds: {
    //         text: "Seconds",
    //         color: "#483fa1",
    //         show: true,
    //       },
    //     },
    //   });
    // }
    /*=========================================================================
         ===  Circular CountDown End
         ========================================================================== */

    /*=========================================================================
         ===  // SITE PATH
         ========================================================================== */
    var nit_path = window.location.protocol + "//" + window.location.host;
    var pathArray = window.location.pathname.split("/");
    for (var i = 1; i < pathArray.length - 1; i++) {
      nit_path += "/";
      nit_path += pathArray[i];
    }

    /*=========================================================================
         ===  // SITE PATH END
         ========================================================================== */

    /*=========================================================================
         ===  COUNTER START
         ========================================================================== */
    var nitCounter = $(".nit-counter");
    if (nitCounter.length) {
      nitCounter.counterUp({
        delay: 10,
        time: 1000,
      });
    }
    /*=========================================================================
         ===  COUNTER END
         ========================================================================== */

    /*=========================================================================
         ===  Modal Video
         ========================================================================== */
    /* Get iframe src attribute value i.e. YouTube video url
         and store it in a variable */
    var url = $("#modalvideo").attr("src");

    /* Remove iframe src attribute on page load to
         prevent autoplay in background */
    $("#modalvideo").attr("src", "");

    /* Assign the initially stored url back to the iframe src
         attribute when modal is displayed */
    $("#nit-modal").on("shown.bs.modal", function () {
      $("#modalvideo").attr("src", url);
    });

    /* Assign empty url value to the iframe src attribute when
         modal hide, which stop the video playing */
    $("#nit-modal").on("hide.bs.modal", function () {
      $("#modalvideo").attr("src", "");
    });
    /*=========================================================================
         ===  Modal Video END
         ========================================================================== */

    /*=========================================================================
         ===  countdown
         ========================================================================== */
    if ($("#nit-countdown").length) {
      var dataTime = $("#nit-countdown").data("date"); // Date Format : Y/m/d

      $("#nit-countdown").countdown(dataTime, function (event) {
        var $this = $(this).html(
          event.strftime(
            "" +
              /*+ '<span class="nit-weecks">%w <i> weeks </i></span> '*/
              '<span class="nit-days">%D <i> Days </i></span> ' +
              '<span class="nit-hr">%H <i> Hour </i></span> ' +
              '<span class="nit-min">%M <i> Min </i></span> ' +
              '<span class="nit-sec">%S <i> Sec </i></span>'
          )
        );
      });
    }

    /*=========================================================================
         ===  countdown END
         ========================================================================== */

    /*=========================================================================
         ===  SMOOTH SCROLL - REQUIRES JQUERY EASING PLUGIN
         ========================================================================== */

    $("a.nit-scroll").on("click", function (event) {
      var $anchor = $(this);
      var topTo = $($anchor.attr("href")).offset().top;

      if (window.innerWidth < 768) {
        topTo = topTo - 90;
      }

      $("html, body").stop().animate(
        {
          scrollTop: topTo,
        },
        1500,
        "easeInOutExpo"
      );
      event.preventDefault();
      return false;
    });

    /*=========================================================================
         ===  SMOOTH SCROLL END
         ========================================================================== */

    /*=========================================================================
         ===  magnific popup
         ========================================================================== */
    $(".nit-gallery-popup").magnificPopup({
      delegate: "a", // child items selector, by clicking on it popup will open
      type: "image",
      gallery: {
        enabled: true,
      },
      image: {
        titleSrc: "title",
      },
      // other options
    });
    /*=========================================================================
         ===  magnific popup END
         ========================================================================== */

    if ($("#instafeed").length) {
      var userFeed = new Instafeed({
        get: "user",
        userId: "623597756",
        clientId: "02b47e1b98ce4f04adc271ffbd26611d",
        accessToken: "623597756.02b47e1.3dbf3cb6dc3f4dccbc5b1b5ae8c74a72",
        resolution: "standard_resolution",
        template:
          '<a href="{{link}}" target="_blank" id="{{id}}"><img src="{{image}}" /></a>',
        sortBy: "most-recent",
        limit: 8,
        links: false,
      });
      userFeed.run();
    }

    /*=========================================================================
         ===  HOME PAGE Slider
         ========================================================================== */
    if ($("#nit-main-slider").length) {
      $("#nit-main-slider").owlCarousel({
        margin: 0,
        items: 1,
        loop: true,
        animateOut: "fadeOut",
        autoplay: true,
        dots: false,
        navText: [
          '<i class="fa fa-angle-left"></i>',
          '<i class="fa fa-angle-right"></i>',
        ],
        autoplayTimeout: 5000,
        autoplaySpeed: 500,
        nav: true,
        addClassActive: true,
      });
    }

    /*=========================================================================
         ===  HOME PAGE Slider END
         ========================================================================== */

    /*=========================================================================
         ===  gallery SLIDER
         ========================================================================== */
    if ($("#nit-owlgallery").length) {
      $("#nit-owlgallery").owlCarousel({
        margin: 0,
        items: 3,
        loop: true,
        autoplay: true,
        dots: false,
        navText: [
          "<img src='./assets/img/arrow-left.png'>",
          "<img src='./assets/img/arrow-right.png'>",
        ],
        autoplayTimeout: 5000,
        autoplaySpeed: 500,
        nav: true,
        addClassActive: true,
        responsive: {
          0: {
            items: 1,
          },
          480: {
            items: 2,
          },
          992: {
            items: 3,
          },
        },
      });
    }
    /*=========================================================================
         ===  gallery SLIDER END
         ========================================================================== */

    /*=========================================================================
         ===  HOME PAGE Slider
         ========================================================================== */
    if ($("#nit-slider-center").length) {
      $("#nit-slider-center").owlCarousel({
        margin: 0,
        center: true,
        items: 1,
        loop: true,
        //animateOut: 'fadeOut',
        autoplay: true,
        dots: false,
        navText: [
          '<i class="fa fa-angle-left"></i>',
          '<i class="fa fa-angle-right"></i>',
        ],
        autoplayTimeout: 5000,
        autoplaySpeed: 500,
        nav: true,
        addClassActive: true,
        responsive: {
          991: {
            items: 2,
          },
        },
      });
    }
    /*=========================================================================
         ===  HOME PAGE Slider END
         ========================================================================== */

    /*=========================================================================
         ===  TESTIMONIAL SLIDER
         ========================================================================== */
    if ($("#nit-owltestimonial").length) {
      $("#nit-owltestimonial").owlCarousel({
        margin: 0,
        items: 2,
        loop: true,
        autoplay: true,
        dots: true,
        navText: [
          "<img src='./assets/img/arrow-left-ash.png'>",
          "<img src='./assets/img/arrow-right-ash.png'>",
        ],
        autoplayTimeout: 5000,
        autoplaySpeed: 500,
        nav: true,
        addClassActive: true,
        responsive: {
          0: {
            items: 1,
          },
          787: {
            items: 1,
          },
        },
      });
    }

    /*=========================================================================
         ===  TESTIMONIAL SLIDER END
         ========================================================================== */

    // HEADER DISPLAY FLEX ISSUE
    if ($(window).width() < 787) {
      $("#navbar").removeClass("nit-collapse");
    }

    /*=========================================================================
         ===  Typed Animation START
         ========================================================================== */
    if ($("#nit-typed-string").length) {
      $("#nit-typed-string").typed({
        strings: [
          "UX Conference 2019",
          "UI Conference 2019",
          "You learn Advance",
        ],
        // typing speed
        typeSpeed: 10,
        // time before typing starts
        startDelay: 0,
        // backspacing speed
        backSpeed: 0,
        // shuffle the strings
        shuffle: false,
        // time before backspacing
        backDelay: 500,
        // loop
        loop: true,
        // false = infinite
        loopCount: false,
        // show cursor
        showCursor: true,
        // character for cursor
        cursorChar: "|",
        // either html or text
        contentType: "html",
      });
    }

    /*=========================================================================
         ===  Typed Animation END
         ========================================================================== */

    /*=========================================================================
         ===  Typed Animation START
         ========================================================================== */
    if ($("#nit-typed-center").length) {
      $("#nit-typed-center").typed({
        strings: ["Festival", "World", "Event"],
        // typing speed
        typeSpeed: 100,
        // time before typing starts
        startDelay: 0,
        // backspacing speed
        backSpeed: 0,
        // shuffle the strings
        shuffle: false,
        // time before backspacing
        backDelay: 500,
        // loop
        loop: true,
        // false = infinite
        loopCount: false,
        // show cursor
        showCursor: true,
        // character for cursor
        cursorChar: "|",
        // either html or text
        contentType: "html",
      });
    }

    /*=========================================================================
         ===  Typed Animation END
         ========================================================================== */

    /*=========================================================================
         ===  GOOGLE MAP
         ========================================================================== */
    if (typeof google != "undefined") {
      //for Default  map
      if ($(".map-canvas-default").length) {
        $(".map-canvas-default").googleMap({
          zoom: 8, // Initial zoom level (optiona
          coords: [40.7127, 74.0059], // Map center (optional)
          type: "ROADMAP", // Map type (optional),
          mouseZoom: false,
        });

        //for marker
        $(".map-canvas-default").addMarker({
          coords: [40.7127, 74.0059], // GPS coords
          title: "Eventpoint",
          text: "121 King St, Melbourne VIC 3000, Australia",
          icon: nit_path + "/assets/img/map/map-icon.png",
        });
      }

      // FOR DARK MAP
      if ($(".map-canvas-dark").length) {
        $(".map-canvas-dark").googleMap({
          zoom: 8, // Initial zoom level (optiona
          coords: [40.7127, 74.0059], // Map center (optional)
          type: "HYBRID", // Map type (optional),
          mouseZoom: false,
        });

        //for marker
        $(".map-canvas-dark").addMarker({
          coords: [40.7127, 74.0059], // GPS coords
          title: "Eventpoint",
          text: "121 King St, Melbourne VIC 3000, Australia",
          icon: nit_path + "/assets/img/map/map-icon.png",
        });
      }
    }

    /*=========================================================================
         ===  //GOOGLE MAP END
         ========================================================================== */

    /* ==========================================================================
         SUBSCRIPTION & AJAX SUBMISSION
         ========================================================================== */

    var isEmail = function (email) {
      var regex =
        /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
      return regex.test(email);
    };

    $("form.nit-subscribe-form").on("submit", function (evnt) {
      evnt.preventDefault();
      //  console.log(nit_path);
      // console.log('subs submit');
      var $subform = $(this);
      var emailInput = $("form.nit-subscribe-form").find("input#subscribe");
      if (isEmail(emailInput.val())) {
        // console.log('ok');
        $.ajax({
          url: nit_path + "/assets/php/subscribe.php",
          type: "post",
          data: { email: emailInput.val().toLowerCase() },
          beforeSubmit: function (argument) {
            // body...
          },
          success: function (ajaxResponse) {
            var ajaxResponse = $.parseJSON(ajaxResponse);
            // console.log(ajaxResponse);

            $("#nit-subalert")
              .addClass("alert alert-success nit-sub-alert")
              .html(ajaxResponse.message);

            try {
              var ajaxResponse = $.parseJSON(ajaxResponse);
              if (!ajaxResponse.error) {
                emailInput.css("color", "#0f0");
              } else {
                emailInput.removeAttr("style"); //css('color', '#f00');
                throw ajaxResponse.message;
              }
              //alert( ajaxResponse.message );
            } catch (e) {
              // e.message;
              // alert(e.message );
            }
          },
          error: function (argument) {
            var ajaxResponse = $.parseJSON(ajaxResponse);
            $("#nit-subalert")
              .addClass("alert alert-danger nit-sub-alert")
              .html(ajaxResponse.message);
            // body...
          },
        });
        $subform[0].reset();
      } else {
        emailInput.css("color", "#f00");
        return false;
      }
    });

    $("form.subscribe-form input#subscribe").on("keyup", function (evnt) {
      var regex =
        /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
      this.style.color = isEmail($(this).val()) ? "#f5832b" : "#f00";
    });

    /* ==========================================================================
         SUBSCRIPTION & AJAX SUBMISSION
         ========================================================================== */

    /*=========================================================================
         ===  Start Contact Form Validation And Ajax Submission
         ========================================================================== */

    var alertInterval; //store the timeout interval ID

    //clear interval for alert message window
    $("#nit-form-modal").on("hide.bs.modal", function (ev) {
      clearInterval(alertInterval);
    });

    var $contactForm = $("form.nit-contactform");
    $contactForm.validate({
      submitHandler: function (form) {
        //console.log(form);
        var $form = $(form);
        //console.log($form.serialize());
        $.ajax({
          url: nit_path + "/assets/php/contact.php",
          type: "post",
          data: $form.serialize(),
          beforeSubmit: function (argument) {
            //ajax loading icon
          },
          success: function (ajaxResponse) {
            try {
              var ajaxResponse = $.parseJSON(ajaxResponse);
              if (ajaxResponse.error) {
                //for field error
                //console.log(ajaxResponse.error_field);
                for (var i = 0; i < ajaxResponse.error_field.length; i++) {
                  if ($("p#" + ajaxResponse.error_field[i] + "-error").length) {
                    $("p#" + ajaxResponse.error_field[i] + "-error").text(
                      ajaxResponse.message[ajaxResponse.error_field[i]]
                    );
                  } else {
                    $("#" + ajaxResponse.error_field[i]).after(
                      '<p id="' +
                        ajaxResponse.error_field[i] +
                        '-error" class="help-block">' +
                        ajaxResponse.message[ajaxResponse.error_field[i]] +
                        "</p>"
                    );
                  }
                }
              } else {
                $(".nit-form-msg")
                  .removeClass("alert-danger")
                  .addClass("alert-success")
                  .text(ajaxResponse.message);
                $("#nit-form-modal").modal("show");
                alertInterval = setInterval(function () {
                  $("#nit-form-modal").modal("hide");
                }, 5000);
                $form[0].reset();
              }
            } catch (e) {
              $(".nit-form-msg")
                .removeClass("alert-success")
                .addClass("alert-danger")
                .text(
                  "Sorry, we are failed to contact with you. Please reload the page and try again."
                );
              $("#nit-form-modal").modal("show");
              alertInterval = setInterval(function () {
                $("#nit-form-modal").modal("hide");
              }, 5000);
            }
          },
          error: function (argument) {
            $(".nit-form-msg")
              .removeClass("alert-success")
              .addClass("alert-danger")
              .text(
                "Sorry, we can not communicate with you. Please make sure you are connected with internet."
              );
            $("#nit-form-modal").modal("show");
            alertInterval = setInterval(function () {
              $("#nit-form-modal").modal("hide");
            }, 5000);
          },
          complete: function () {},
        });

        return false;
      },
      errorElement: "p",
      errorClass: "help-block",
      rules: {
        nitname: {
          required: true,
          minlength: 3,
        },

        nitemail: {
          required: true,
          email: true,
        },

        nitsubject: {
          required: true,
          minlength: 5,
        },

        nitmessage: {
          required: true,
          minlength: 5,
        },
      },
    });

    /*=========================================================================
         ===  Start Contact Form Validation And Ajax Submission END
         ========================================================================== */
  }); //DOM READY
})(jQuery);
