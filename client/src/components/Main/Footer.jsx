import React from "react";
import { Link } from "react-router-dom";


const Footer = () => {
    return (
        <footer className="footer">
            <section>
                <footer className="text-center text-white" style={{ backgroundColor: '#343a40' }}>
                    <div className="container p-4 pb-0">
                        <section>
                            <p className="d-flex justify-content-center align-items-center">
                                <span className="me-3">Join the Movie Tracker community</span>
                                <Link to={"/"}><button type="button" className="btn btn-outline-light btn-rounded">
                                    Sign up for free!
                                </button></Link>

                            </p>
                        </section>

                        {/* <section className="mb-4">
                            <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
                                <i className="fab fa-facebook-f"></i>
                            </a>

                            <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
                                <i className="fab fa-twitter"></i>
                            </a>

                            <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
                                <i className="fab fa-instagram"></i>
                            </a>
                        </section> */}
                    </div>

                    <div className="container p-4">
                        <div className="row">
                            <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
                                <h5 className="text-uppercase">Movie Tracker App</h5>

                                <p>
                                    Discover new movies, track your watchlist, and share ratings with friends.
                                </p>
                            </div>

                            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                                <h5 className="text-uppercase">Quick Links</h5>

                                <ul className="list-unstyled mb-0">
                                    <li>
                                        <a href="#!" className="text-white">About Us</a>
                                    </li>
                                    <li>
                                        <a href="#!" className="text-white">Contact</a>
                                    </li>
                                    <li>
                                        <a href="#!" className="text-white">Support</a>
                                    </li>
                                </ul>
                            </div>

                            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                                <h5 className="text-uppercase">Legal</h5>

                                <ul className="list-unstyled mb-0">
                                    <li>
                                        <a href="#!" className="text-white">Privacy Policy</a>
                                    </li>
                                    <li>
                                        <a href="#!" className="text-white">Terms of Use</a>
                                    </li>
                                    <li>
                                        <a href="#!" className="text-white">Cookie Policy</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                        © 2024 Movie Tracker. All Rights Reserved.
                    </div>
                </footer>
            </section>
        </footer>
    );
};

export default Footer;
