  <script src="assets/js/query.min.js"></script>
  <script src="assets/js/bootstrap.min.js"></script>
  <script src="assets/js/slick.js"></script>
  <script src="assets/js/fontawesome.min.js"></script>
  <script src="assets/js/fancybox.min.js"></script>
  <script src="assets/js/wow.min.js"></script>
  <script src="assets/js/custom.js"></script>
  <script async>
      var dtm = window.parent.document.createElement('script');
      dtm.type = "text/javascript";
      dtm.id = 'ze-snippet';
      dtm.src = 'https://static.zdassets.com/ekr/snippet.js?key=88db6ce9-49cd-4fcd-b878-74e4608d1203';
      var d = window.parent.document.getElementsByTagName('head')[0];
      d.appendChild(dtm);
      var dtmf = window.parent.document.createElement('script');
      dtmf.type = "text/javascript";
      dtmf.id = '_adobe_dtm_script_footer_tag';
      dtmf.text = '_satellite.pageBottom();';
      var bd = window.parent.document.getElementsByTagName('body')[0];
      bd.appendChild(dtmf);

      function setButtonURL() {
          $zopim.livechat.window.show();
      }

      function setButtonURL() {
          $zopim.livechat.window.toggle();
      }

      window.$zopim || function(a, d) {
              var b = $zopim = function(a) {
                      b._.push(a)
                  },
                  c = b.s = a.createElement(d);
              a = a.getElementsByTagName(d)[0];
              b.set = function(a) {
                  b.set._.push(a)
              };
              b._ = [];
              b.set._ = [];
              c.async = !0;
              c.setAttribute("charset", "utf-8");
              c.src = "";
              b.t = +new Date;
              c.type = "text/javascript";
              a.parentNode.insertBefore(c, a)
          }
          (document, "script");

      $zopim(function() {
          function a(a) {
              1 <= a && $zopim.livechat.window.show()
          }
          $zopim.livechat.setOnUnreadMsgs(a)
      });
  </script>
  <script>
      function setButtonURL() {
          $('.chat').click(function() {
              $zopim.livechat.window.toggle();
          });
      }
  </script>
  <script>
      $(".open-popup").click(function() {
          $("#input-box").html(""), null != $(this).data("price") && ($("#input-box").append(
                  '<input type="hidden" name="customers_meta[price]" value="' + $(this).data("price") + '">'),
              $("#input-box").append('<input type="hidden" name="customers_meta[name]" value="' + $(this)
                  .data("name") + '">')), $("#entry-popup").css("display", "flex").fadeIn()
      });
      $("#entry-box_close").click(function() {
          $("#entry-popup").fadeOut()
      });
  </script>