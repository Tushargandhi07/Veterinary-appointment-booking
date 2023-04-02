const navbar = () => {
  return `
  <nav class="navbar navbar-expand-lg fixed-top navbar-scroll" style="background-color: #544dcf; padding: 0 40px; display: flex; justify-content: space-between;">
  <div class="flex">
      <img src="https://mdbootstrap.com/img/Photos/new-templates/animal-shelter/logo.png" height="70" alt=""
          loading="lazy" id="logo" style="cursor:pointer;"/>
      <div class="navbar-collapse" id="navbarExample01">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0 flex-row" id="navUL">
              <li class="nav-item active">
                  <a class="nav-link" aria-current="page"  id="navredirect"  style="color: #fff;">Book Appointment</a>
              </li>
              <li class="nav-item">
                  <a class="nav-link" aria-current="page" href="appointment_list.html" style="color: #fff;">View Appointment</a>
              </li>
              <li class="nav-item">
                  <a class="nav-link" aria-current="page" href="./videosharing/frontend/index.html" style="color: #fff;">Connect</a>
              </li>
              <li class="nav-item">
                  <a class="nav-link" aria-current="page" href="#about" style="color: #fff;">About us</a>
              </li>
          </ul>
          <div class="btn-position" style="position: absolute; right: 20px;" id="Show">
              <ul class="navbar-nav flex-row">
                  <li class="nav-item">
                      <a href="javascript:void(0)" id="loginbtn" class="btn" style="background-color: #e54391; padding: 6px 20px; color: #fff; margin: 0 10px;">Log in</a>
                  </li>
                  <li class="nav-item">
                      <a href="user_profile.html" class="btn"><i class="fa-solid fa-user" style="font-size: 24px; color:#fff"></i></a>
                  </li>
                  <li class="nav-item">
                  <a href="#" id="user" class="btn" style="font-size: 18px; color:#fff;">User</a>
                  </li>
              </ul>
          </div>
      </div>
  </div>
</nav>
    `;
};

const footer = () => {
  return `
    <!-- Remove the container if you want to extend the Footer to full width. -->
    <footer class="text-center text-lg-start text-white mt-5" style="background-color: #42389d;">
        <!-- Grid container -->
        <div class="p-4" style="text-align: left;">
            <!--Grid row-->
            <div class="row my-4">
                <!--Grid column-->
                <div class="col-lg-3 col-md-6 mb-4 mb-md-0">

                    <div class="rounded-circle bg-white shadow-1-strong d-flex align-items-center justify-content-center mb-4 mx-auto"
                        style="width: 150px; height: 150px;">
                        <img src="https://mdbootstrap.com/img/Photos/new-templates/animal-shelter/logo.png" height="70"
                            alt="" loading="lazy" />
                    </div>

                    <p class="text-center">Homless animal shelter The budgetary unit of the Capital City of Warsaw</p>

                    <ul class="list-unstyled d-flex flex-row justify-content-center">
                        <li>
                            <a class="text-white px-2" href="#!">
                                <i class="fab fa-facebook-square"></i>
                            </a>
                        </li>
                        <li>
                            <a class="text-white px-2" href="#!">
                                <i class="fab fa-instagram"></i>
                            </a>
                        </li>
                        <li>
                            <a class="text-white ps-2" href="#!">
                                <i class="fab fa-youtube"></i>
                            </a>
                        </li>
                    </ul>

                </div>
                <!--Grid column-->

                <!--Grid column-->
                <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
                    <h5 class="text-uppercase mb-4">VetCare</h5>

                    <ul class="list-unstyled">
                        <li class="mb-2">
                            <a href="#!" class="text-white"><i class="fas fa-paw pe-3 mr-2"></i>When your pet is
                                missing</a>
                        </li>
                        <li class="mb-2">
                            <a href="#!" class="text-white"><i class="fas fa-paw pe-3 mr-2"></i>Recently found</a>
                        </li>
                        <li class="mb-2">
                            <a href="#!" class="text-white"><i class="fas fa-paw pe-3 mr-2"></i>How to adopt?</a>
                        </li>
                        <li class="mb-2">
                            <a href="#!" class="text-white"><i class="fas fa-paw pe-3 mr-2"></i>Pets for adoption</a>
                        </li>
                        <li class="mb-2">
                            <a href="#!" class="text-white"><i class="fas fa-paw pe-3 mr-2"></i>Material gifts</a>
                        </li>
                        <li class="mb-2">
                            <a href="#!" class="text-white"><i class="fas fa-paw pe-3 mr-2"></i>Help with walks</a>
                        </li>
                        <li class="mb-2">
                            <a href="#!" class="text-white"><i class="fas fa-paw pe-3 mr-2"></i>Volunteer activities</a>
                        </li>
                    </ul>
                </div>
                <!--Grid column-->

                <!--Grid column-->
                <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
                    <h5 class="text-uppercase mb-4">Animals</h5>

                    <ul class="list-unstyled">
                        <li class="mb-2">
                            <a href="#!" class="text-white"><i class="fas fa-paw pe-3 mr-2"></i>General information</a>
                        </li>
                        <li class="mb-2">
                            <a href="#!" class="text-white"><i class="fas fa-paw pe-3 mr-2"></i>About the shelter</a>
                        </li>
                        <li class="mb-2">
                            <a href="#!" class="text-white"><i class="fas fa-paw pe-3 mr-2"></i>Statistic data</a>
                        </li>
                        <li class="mb-2">
                            <a href="#!" class="text-white"><i class="fas fa-paw pe-3 mr-2"></i>Job</a>
                        </li>
                        <li class="mb-2">
                            <a href="#!" class="text-white"><i class="fas fa-paw pe-3 mr-2"></i>Tenders</a>
                        </li>
                        <li class="mb-2">
                            <a href="#!" class="text-white"><i class="fas fa-paw pe-3 mr-2"></i>Contact</a>
                        </li>
                    </ul>
                </div>
                <!--Grid column-->

                <!--Grid column-->
                <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
                    <h5 class="text-uppercase mb-4">Contact</h5>

                    <ul class="list-unstyled">
                        <li>
                            <p><i class="fas fa-map-marker-alt pe-2 mr-2"></i>Warsaw, 57 Street, Poland</p>
                        </li>
                        <li>
                            <p><i class="fas fa-phone pe-2 mr-2"></i>+ 01 234 567 89</p>
                        </li>
                        <li>
                            <p><i class="fas fa-envelope pe-2 mb-0 mr-2"></i>vetcare@gmail.com</p>
                        </li>
                    </ul>
                </div>
                <!--Grid column-->
            </div>
            <!--Grid row-->
        </div>
        <!-- Grid container -->

        <!-- Copyright -->
        <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2)">
            © 2023 Copyright:
            <a class="text-white" href="#">Vetcare.com</a>
        </div>
        <!-- Copyright -->
    </footer>
    `;
};

export { navbar, footer };
