const navbar = () => {
  return `
    <nav class="navbar navbar-expand-lg fixed-top navbar-scroll">
        <div class="flex">
            <img src="https://mdbootstrap.com/img/Photos/new-templates/animal-shelter/logo.png" height="70" alt=""
                loading="lazy" />
            <button class="navbar-toggler ps-0" type="button" data-mdb-toggle="collapse"
                data-mdb-target="#navbarExample01" aria-controls="navbarExample01" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon d-flex justify-content-start align-items-center">
                    <i class="fas fa-bars"></i>
                </span>
            </button>
            <div class="collapse navbar-collapse" id="navbarExample01">
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li class="nav-item active">
                        <a class="nav-link" aria-current="page" href="#news" style="color: #fff;">News</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" aria-current="page" href="#pets" style="color: #fff;">Pets</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" aria-current="page" href="#adoptions" style="color: #fff;">Adoptions</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" aria-current="page" href="#foundation" style="color: #fff;">Foundation</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" aria-current="page" href="#help" style="color: #fff;">How can I help?</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" aria-current="page" href="#education" style="color: #fff;">Education</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" aria-current="page" href="#about" style="color: #fff;">About us</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" aria-current="page" href="#contact" style="color: #fff;">Contact</a>
                    </li>
                </ul>
                <div class="collapse navbar-collapse btn-position">
                    <ul class="navbar-nav flex-row">
                        <li class="nav-item">
                            <a href="./login.html" class="btn">Log in</a>
                        </li>
                        <li class="nav-item">
                            <a href="./signup.html" class="btn">Sign Up</a>
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
                    <h5 class="text-uppercase mb-4">Animals</h5>

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
                            <p><i class="fas fa-envelope pe-2 mb-0 mr-2"></i>contact@example.com</p>
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