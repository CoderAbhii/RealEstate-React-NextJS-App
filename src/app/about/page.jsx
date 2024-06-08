import Image from "next/image";
import AboutImage from "@/images/about-page/about-image-1.jpg";
import AboutImageFounder from "@/images/about-page/about-image-founder.png";
import { IoPeopleSharp } from "react-icons/io5";
import { MdRealEstateAgent } from "react-icons/md";
import WhyChooseUsImg1 from '@/images/about-page/about-why-choose-1.jpg';
import WhyChooseUsImg2 from '@/images/about-page/about-why-choose-2.jpg';
import WhyChooseUsImg3 from '@/images/about-page/about-why-choose-3.jpg';
import Link from "next/link";
import { FaMobileScreenButton } from "react-icons/fa6";
import { BiSupport } from "react-icons/bi";

export default function About() {
    return (
        <>
            <div className="page-section about-page">
                <div className="about-top-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-5">
                                <div className="left-area relative">
                                    <div className="about-image">
                                        <Image
                                            src={AboutImage}
                                            width={500}
                                            height={500}
                                            alt="about-image"
                                        />
                                    </div>
                                    <div className="founder-image">
                                        <Image
                                            src={AboutImageFounder}
                                            width={300}
                                            height={300}
                                            alt="about-image"
                                        />
                                        <div className="name">
                                            <h1 className="relative">Hosena Divan</h1>
                                            <h4 className="relative">CEO & Founder</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-7">
                                <div className="right-area relative">
                                    <div className="title">
                                        <h1>About Homez</h1>
                                    </div>
                                    <div className="sub-title">
                                        <h5>Have done some Coo Stuff with common users</h5>
                                    </div>
                                    <div className="description">
                                        <p>
                                            {
                                                "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
                                            }
                                            {
                                                "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
                                            }
                                        </p>
                                    </div>
                                    <div className="sub-description">
                                        <p>
                                            Over 20 years’ experience providing top quality house
                                            Booking in to the rant and sell for your Amazing Dream &
                                            Make you Happy Over 20 years’ experience providing top
                                            quality house Booking in to the rant and sell for your
                                            Amazing Dream & Make you Happy.
                                        </p>
                                    </div>
                                    <div className="our-customer-agents-area">
                                        <div className="customer child">
                                            <div className="icon">
                                                <IoPeopleSharp />
                                            </div>
                                            <div className="title">
                                                <h3>200 + Happy Customers</h3>
                                            </div>
                                            <div className="sub-title">
                                                <h5>Over 20,000 House Sell</h5>
                                            </div>
                                        </div>
                                        <div className="agent child">
                                            <div className="icon">
                                                <MdRealEstateAgent />
                                            </div>
                                            <div className="title">
                                                <h3>20 + Active Agents</h3>
                                            </div>
                                            <div className="sub-title">
                                                <h5>Over 10,000 Agents In India</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="why-choose-us-section">
                    <div className="container">
                        <div className="row">

                            <div className="col-lg-12">
                                <div className="col-lg-12">
                                    <div className="section-title">
                                        <h1>Why Choose Us</h1>
                                    </div>
                                    <div className="section-sub-title">
                                        <h5>
                                            Save your time and effort with our tools
                                        </h5>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-12">
                                <div className="why-choose-us-card">
                                    <div className="row">

                                        <div className="col-lg-4">
                                            <div className="card">
                                                <div className="icon">
                                                    <MdRealEstateAgent />
                                                </div>
                                                <div className="title">
                                                    <h1>Thousands of property posts every day</h1>
                                                </div>
                                                <div className="image">
                                                    <Image src={WhyChooseUsImg1} width={500} height={500} alt="why-choose-us-image" />
                                                </div>
                                                <div className="description">
                                                    <p>The lists are always refreshed and updated constantly, you will never miss</p>
                                                </div>
                                                <div className="link">
                                                    <Link href={'/'}>Check Properties</Link>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-lg-4">
                                            <div className="card">
                                                <div className="icon">
                                                <FaMobileScreenButton />
                                                </div>
                                                <div className="title">
                                                    <h1>All device friendly ui</h1>
                                                </div>
                                                <div className="image">
                                                    <Image src={WhyChooseUsImg2} width={500} height={500} alt="why-choose-us-image" />
                                                </div>
                                                <div className="description">
                                                    <p>The lists are always refreshed and updated constantly, you will never miss</p>
                                                </div>
                                                <div className="link">
                                                    <Link href={'/'}>Check Properties</Link>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-lg-4">
                                            <div className="card">
                                                <div className="icon">
                                                    <BiSupport />
                                                </div>
                                                <div className="title">
                                                    <h1>24/7 Customer support every time</h1>
                                                </div>
                                                <div className="image">
                                                    <Image src={WhyChooseUsImg3} width={500} height={500} alt="why-choose-us-image" />
                                                </div>
                                                <div className="description">
                                                    <p>The lists are always refreshed and updated constantly, you will never miss</p>
                                                </div>
                                                <div className="link">
                                                    <Link href={'/'}>Check Properties</Link>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
