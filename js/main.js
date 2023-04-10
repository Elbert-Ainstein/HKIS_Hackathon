(function($) {
  "use strict";
  var bostami = {
      m: function(e) {
          bostami.d();
          bostami.methods();
      },

      d: function(e) {
          (this._window = $(window)),
          (this._document = $(document)),
          (this._body = $("body")),
          (this._html = $("html"));
      },
      methods: function(e) {
          bostami.preloader_load();
          bostami.preloader_svg();
          bostami.mobileMenu();
          bostami.preloader();
          bostami.tabClick();
      },
      // preloader  function

      preloader: function() {
          $(window).on("load", function() {
              var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(
                      navigator.userAgent
                  ) ?
                  true :
                  false;
              var preloader = $("#preloader");

              if (!isMobile) {
                  setTimeout(function() {
                      preloader.addClass("preloaded");
                  }, 800);
                  setTimeout(function() {
                      preloader.remove();
                  }, 2000);
              } else {
                  preloader.remove();
              }
          });
      },

      preloader_load: function() {
          $(window).on("load", function() {
              var speed = 500;
              setTimeout(function() {
                  preloader();
              }, speed);
          });
      },
      preloader_svg: function() {
          $(window).on("load", function() {
              jQuery("img.svg").each(function() {
                  var jQueryimg = jQuery(this);
                  var imgClass = jQueryimg.attr("class");
                  var imgURL = jQueryimg.attr("src");

                  jQuery.get(
                      imgURL,
                      function(data) {
                          // Get the SVG tag, ignore the rest
                          var jQuerysvg = jQuery(data).find("svg");

                          // Add replaced image's classes to the new SVG
                          if (typeof imgClass !== "undefined") {
                              jQuerysvg = jQuerysvg.attr("class", imgClass + " replaced-svg");
                          }

                          // Remove any invalid XML tags as per http://validator.w3.org
                          jQuerysvg = jQuerysvg.removeAttr("xmlns:a");

                          // Replace image with new SVG
                          jQueryimg.replaceWith(jQuerysvg);
                      },
                      "xml"
                  );
              });
          });
      },

      // moblie method toggle button function

      mobileMenu: function() {
          $(window).on("load", function() {
            const open=  document.getElementById("open")
            const colse=  document.getElementById("colse")
            const menu=  document.getElementById("menu")
            
            open.addEventListener("click", ()=>{
                console.log("okk");
                menu.classList.add('invisible','opacity-100','scale-y-100')
                menu.classList.remove('invisible','opacity-0' ,'transform','scale-y-0')
                open.classList.remove('block')
                open.classList.add('hidden')
                colse.classList.add('block')
                colse.classList.remove('hidden')
            })
            colse.addEventListener("click", ()=>{
                console.log("okk");
                menu.classList.remove('invisible','opacity-100','scale-y-100')
                menu.classList.add('invisible','opacity-0' ,'transform','scale-y-0')
                open.classList.add('block')
                open.classList.remove('hidden')
                colse.classList.remove('block')
                colse.classList.add('hidden')
            })
            
          });
      },












     
  };
  bostami.m();
})(jQuery, window);