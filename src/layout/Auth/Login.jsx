import React from 'react';

const Login = () => {
    return (
        <div>
            <head>
                <meta charSet="utf-8"/>
                <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
                <meta name="description" content=""/>
                <meta name="author" content=""/>
                <title>SB Admin 2 - Login</title>
                {/* Custom fonts for this template */}
                <link rel="stylesheet" type="text/css" href="vendor/fontawesome-free/css/all.min.css"/>
                <link
                    href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i"
                    rel="stylesheet"
                />
                {/* Custom styles for this template */}
                <link rel="stylesheet" type="text/css" href="css/sb-admin-2.min.css"/>
            </head>

            <body className="bg-gradient-primary">
            <div className="container">
                {/* Outer Row */}
                <div className="row justify-content-center">
                    <div className="col-xl-10 col-lg-12 col-md-9">
                        <div className="card o-hidden border-0 shadow-lg my-5">
                            <div className="card-body p-0">
                                {/* Nested Row within Card Body */}
                                <div className="row">
                                    <div className="col-lg-6 d-none d-lg-block bg-login-image"/>
                                    <div className="col-lg-6">
                                        <div className="p-5">
                                            <div className="text-center">
                                                <h1 className="h4 text-gray-900 mb-4">Welcome Back!</h1>
                                            </div>
                                            <form className="user">
                                                <div className="form-group">
                                                    <input
                                                        type="email"
                                                        className="form-control form-control-user"
                                                        id="exampleInputEmail"
                                                        aria-describedby="emailHelp"
                                                        placeholder="Enter Email Address..."
                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <input
                                                        type="password"
                                                        className="form-control form-control-user"
                                                        id="exampleInputPassword"
                                                        placeholder="Password"
                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <div className="custom-control custom-checkbox small">
                                                        <input
                                                            type="checkbox"
                                                            className="custom-control-input"
                                                            id="customCheck"
                                                        />
                                                        <label className="custom-control-label"
                                                               htmlFor="customCheck">
                                                            Remember Me
                                                        </label>
                                                    </div>
                                                </div>
                                                <a href="index.html" className="btn btn-primary btn-user btn-block">
                                                    Login
                                                </a>
                                                <hr/>
                                                <a href="index.html" className="btn btn-google btn-user btn-block">
                                                    <i className="fab fa-google fa-fw"/> Login with Google
                                                </a>
                                                <a href="index.html"
                                                   className="btn btn-facebook btn-user btn-block">
                                                    <i className="fab fa-facebook-f fa-fw"/> Login with Facebook
                                                </a>
                                            </form>
                                            <hr/>
                                            <div className="text-center">
                                                <a className="small" href="forgot-password.html">
                                                    Forgot Password?
                                                </a>
                                            </div>
                                            <div className="text-center">
                                                <a className="small" href="register.html">
                                                    Create an Account!
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Bootstrap core JavaScript */}
            <script src="vendor/jquery/jquery.min.js"></script>
            <script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
            {/* Core plugin JavaScript */}
            <script src="vendor/jquery-easing/jquery.easing.min.js"></script>
            {/* Custom scripts for all pages */}
            <script src="js/sb-admin-2.min.js"></script>
            </body>
        </div>
    );
};

export default Login;
