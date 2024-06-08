import Image from "next/image";
import FooterImageOne from '@/images/footer-image-one.png';
import FooterImageTwo from '@/images/footer-image-two.png';
import Logo from '@/images/logo.png';
import { Button } from "react-bootstrap";
import { MdOutlineHome } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";


export default function Footer() {
    return (
        <>
            <footer className="footer">
                <div className="container-fluid">
                    <div className="footer-header">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="footer-highlither-box">
                                    <div className="image me-3">
                                        <Image src={FooterImageOne} alt="banner-image" />
                                    </div>
                                    <div className="content">
                                        <h1>You nedd a house</h1>
                                        <h5>Tell us your needs, we will give you thousands of suggestions for the dream home.</h5>
                                        <Button className="custom-btn"> <span className="me-2"><MdOutlineHome /></span> Search Property</Button>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <div className="footer-highlither-box">
                                    <div className="image me-3">
                                        <Image src={FooterImageTwo} alt="banner-image" />
                                    </div>
                                    <div className="content">
                                        <h1>Sell your house</h1>
                                        <h5>We will connect you to thousands of people who need to buy a home.</h5>
                                        <Button className="custom-btn"> Sell Property <span className="ms-2"><MdOutlineHome /></span> </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-bar">
                        <div className="row">

                            <div className="col-lg-3">
                                <div className="logo-desc-area">
                                    <div className="image mb-4">
                                        <Image src={Logo} alt="banner-image" />
                                    </div>
                                    <div className="description">
                                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae sunt asperiores quisquam nostrum, voluptas quo doloremque magnam neque iusto repellendus.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4">
                                <div className="link-area address-info">
                                    <div className="title">
                                        <h3>Office Address</h3>
                                    </div>
                                    <div>
                                        <div className="info">
                                            <h5>Head office:</h5>
                                            <p>2118 Thornridge Cir. Syracuse, Connecticut 35624</p>
                                        </div>
                                        <div className="info">
                                            <h5>Branch office:</h5>
                                            <p>2118 Thornridge Cir. Syracuse, Connecticut 35624</p>
                                        </div>
                                        <div className="info">
                                            <h5>Main office:</h5>
                                            <p>2118 Thornridge Cir. Syracuse, Connecticut 35624</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-2">
                                <div className="link-area">
                                    <div className="title">
                                        <h3>Properties</h3>
                                    </div>
                                    <div className="links">
                                        <h5>Commercial Properties</h5>
                                        <h5>Residentail Properties</h5>
                                        <h5>Office</h5>
                                        <h5>House</h5>
                                        <h5>Shop</h5>
                                        <h5>Industrial</h5>
                                    </div>
                                </div>
                            </div>


                            <div className="col-lg-3">
                                <div className="link-area">
                                    <div className="title">
                                        <h3>Contact Us</h3>
                                    </div>
                                    <div className="info mt-3">
                                        <h5>Contact No:</h5>
                                        <div className="contact-no">
                                            <p className="mb-0 me-2">+91 7865567890, </p>
                                            <p className="mb-0">+91 7865567890, </p>
                                        </div>
                                    </div>
                                    <div className="info mt-3">
                                        <h5>Email:</h5>
                                        <p>xyzproperty@gmail.com</p>
                                    </div>

                                    <div className="info mt-3">
                                        <h5>Open Hours:</h5>
                                        <p>MON-FRI 9AM-8PM</p>
                                    </div>

                                    <div className="info mt-3">
                                        <h5>Customer Support:</h5>
                                        <p>+91 9098786543</p>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                    <div className="footer-bottom">
                        <div className="copyright">
                            <p className="mb-0">Copyright © 2024. Designed & Developed by <span>aksoftsol</span>.</p>
                        </div>
                        <div className="social-media-icons">
                            <div className="icon">
                                <FaFacebookF />
                            </div>
                            <div className="icon">
                                <FaXTwitter />
                            </div>
                            <div className="icon">
                                <FaLinkedinIn />
                            </div>
                            <div className="icon">
                                <FaInstagram />
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}