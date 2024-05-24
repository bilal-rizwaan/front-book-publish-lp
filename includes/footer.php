  <section class="footer">
      <div class="container">
          <div class="row align-items-center">
              <div class="col-12 col-lg-7">
                  <div class="left-content">
                      <h3 class="f-40 fw-700 text-white">Contact us today to receive a free consultation</h3>
                      <p class="text-white pt-3 pb-2">Meet The Brains Behind Front Line Writers.. With Years Of Experience In The Design Industry,
                          Our Expertise Make Sure Your Business With Us Goes Smooth And You Designs Bring A Smile On
                          Your Face.</p>
                      <div class="d-block align-items-center gap-3 my-4">
                          <a href="tel:<?php echo $number ?>" class="call-wrap">
                              <i class="fa-solid fa-user"></i>
                              <div>
                                  <p> TALK TO AN EXPERT</p>
                                  <?php echo $number ?>
                              </div>
                          </a>
                          <a href="tel:<?php echo $number ?>" class="call-wrap">
                              <i class="fa-solid fa-message"></i>
                              <div>
                                  <p>EMAIL US</p>
                                  <span>
                                      <?php echo $email ?>
                                  </span>
                              </div>
                          </a>
                      </div>
                  </div>
              </div>
              <div class="col-12 col-lg-5">
                  <img src="assets/images/book-right.png" class="my-lg-0 my-3" alt="footer img">
              </div>
          </div>
      </div>
  </section>
  <div class="sec-footer py-4 bg-black text-white">
      <ul class="d-flex justify-content-evenly">
          <li>All rights reserved Front Line Writers</li>
          <li><a href="https://frontlinewriters.com/terms-and-condition">Terms & Condition</a> | <a href="https://frontlinewriters.com/privacy-policy">Privacy Policy</a></li>
  </div>

  <div id="entry-popup">
      <div class="container">
          <div class="entry-box" data-form-type="popup_form">
              <a href="javascript:;" id="entry-box_close" class="closed"><i class="fa fa-times"></i></a>
              <form action="https://leads.infinityprojectmanager.com/brand/frontlinewriters/lead" method="GET" class="validate-popupform">
                  <input type="hidden" name="brand_name" value="frontlinewriters.com">
                  <input type="hidden" id="lead_area" name="lead_area" value="http://frontlinewriters.com">

                  <div class="col-sm-12 entry-right">
                      <div class="text-1">
                          <h4><span class="red">Just Few Details First</span> Become Best Seller Author
                          </h4>
                      </div>
                      <div class="form-group">
                          <input type="text" class="form-control" name="name" aria-describedby="name" placeholder="Your Name" required="">
                      </div>
                      <div class="form-group">
                          <input type="email" class="form-control" name="name" aria-describedby="email" placeholder="Email Address" required="">
                      </div>
                      <div class="form-group">
                          <input type="tel" class="form-control" name="phone" maxlength="10" aria-describedby="phone" placeholder="Phone" required="">
                      </div>
                      <div class="form-group">
                          <input type="text" class="form-control" name="msg" placeholder="Message" required="">
                      </div>

                      <div class="form-group form-btn mt-3">
                          <button type="submit" class="entery-submit" value="1" name="signupForm">
                              Submit
                          </button>
                      </div>
                  </div>
              </form>
          </div>
      </div>
  </div>

  <?php include "includes/scripts.php" ?>
  </body>

  </html>