'use client'

import Image from "next/image";
import { FaMapLocationDot } from "react-icons/fa6";
import { IoBedOutline } from "react-icons/io5";
import { LiaTapeSolid } from "react-icons/lia";
import { LuBath } from "react-icons/lu";
import {
  MdBalcony,
  MdEmail,
  MdMessage,
  MdOutlineGarage,
  MdOutlineMeetingRoom,
} from "react-icons/md";
import { GoDotFill } from "react-icons/go";
import { SlCalender } from "react-icons/sl";
import { SiClickhouse } from "react-icons/si";
import { Button, Form } from "react-bootstrap";
import { useParams } from "next/navigation";
import { getPropertyDetailFunction } from "@/redux-toolkit/features/properties/propertySlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Loading from "@/gifs/homeLoading.gif";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
  Autoplay,
} from "swiper/modules";

export default function PropertyDetails() {
  // Get Property Details
  const params = useParams();
  const propertyId = params.slug.split('-')[0];
  const dispatch = useDispatch();
  const propertyDeatils = useSelector((state) => state.propertyDetailsData);
  const { isLoading, isError, data } = propertyDeatils;
  useEffect(() => {
    dispatch(getPropertyDetailFunction(propertyId));
  }, [dispatch, propertyId]);


  return (
    <>
      <div className="page-section property-detail-page">
        <div className="container-fluid">
          {isLoading ? (
            <div className="home-loading">
              <Image src={Loading} width={50} height={50} alt="loading-image" />
            </div>
          ) : (
            <div className="row">
              <div className="col-lg-12">
                <div className="property-name-location-price">
                  <div className="name relative">
                    <h1>{data.property.name}</h1>
                  </div>
                  <div className="location relative">
                    <div className="icon me-1">
                      <FaMapLocationDot />
                    </div>
                    <h5>
                      {data.property.address}, {data.property.city}, {data.property.state}
                    </h5>
                  </div>
                  <div className="price relative">
                    <p>
                      <span className="price-symbol me-1">₹</span> {data.property.price}
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-12">
                <div className="property-images-detail">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="property-images">
                        <div className="image mb-3">
                          <Image
                            src={data.property.images[0]}
                            width={500}
                            height={500}
                            alt="banner-image"
                          />
                        </div>
                        <div className="other-images"></div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="property-details">
                        <h5 className="relative">Overview</h5>
                        <div className="info">
                          <div className="detail mb-3">
                            <div className="icon">
                              <MdOutlineMeetingRoom />
                            </div>
                            <div className="title">{data.property.room} Rooms</div>
                          </div>

                          <div className="detail mb-3">
                            <div className="icon">
                              <LuBath />
                            </div>
                            <div className="title">{data.property.baths} Baths</div>
                          </div>

                          <div className="detail mb-3">
                            <div className="icon">
                              <IoBedOutline />
                            </div>
                            <div className="title">{data.property.beds} Beds</div>
                          </div>

                          <div className="detail mb-3">
                            <div className="icon">
                              <MdBalcony />
                            </div>
                            <div className="title">{data.property.balconies} Balcony</div>
                          </div>

                          <div className="detail mb-3">
                            <div className="icon">
                              <MdOutlineGarage />
                            </div>
                            <div className="title">{data.property.parking} Parking</div>
                          </div>

                          <div className="detail mb-3">
                            <div className="icon">
                              <LiaTapeSolid />
                            </div>
                            <div className="title">{data.property.squareBuiltUpArea} Sq Ft</div>
                          </div>

                          <div className="detail mb-3">
                            <div className="icon">
                              <SlCalender />
                            </div>
                            <div className="title">Year Built: {data.property.builtInYear}</div>
                          </div>

                          <div className="detail mb-3">
                            <div className="icon">
                              <SiClickhouse />
                            </div>
                            <div className="title">Property Type: {data.property.propertyType}</div>
                          </div>
                        </div>
                      </div>

                      <div className="property-details mt-2">
                        <h5 className="relative">Property details</h5>
                        <div className="property-details-overview">
                          <div className="row">
                            <div className="col-lg-12">
                              <div className="propert-details">
                                <p className="title"> Developer: </p>
                                <p className="description">
                                  {data.property.developer}
                                </p>
                              </div>
                            </div>

                            <div className="col-lg-12">
                              <div className="propert-details">
                                <p className="title"> Floor: </p>
                                <p className="description">
                                  {data.property.floor}
                                </p>
                              </div>
                            </div>

                            <div className="col-lg-12">
                              <div className="propert-details">
                                <p className="title"> Status: </p>
                                <p className="description"> {data.property.status}</p>
                              </div>
                            </div>

                            <div className="col-lg-12">
                              <div className="propert-details">
                                <p className="title"> Facing: </p>
                                <p className="description"> {data.property.facing} </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="property-details mt-4">
                        <h5 className="relative">Amenities</h5>
                        <div className="property-details-overview">
                          <div className="row">
                            <div className="col-lg-12">
                              <div className="propert-details">
                                <p className="amenities"> {data.property.amenities} </p>
                              </div>
                            </div>

                          </div>
                        </div>
                      </div>

                    </div>
                    <div className="col-lg-12">
                      <div className="more-details">
                        <div className="row">

                          <div className="col-lg-8">
                            <div className="more-details-property">
                              <div className="info">
                                <h5 className="relative">
                                  Property description
                                </h5>
                                <p>
                                  {data.property.description}
                                </p>
                              </div>
                              <div className="info-other">
                                <div className="row">
                                  <div className="col-lg-3">
                                    <div className="icon-titles mb-3">
                                      <div className="icon">
                                        <GoDotFill />
                                      </div>
                                      <p className="relative">
                                        <span>Additional Room: </span> {data.property.additionalRooms}
                                      </p>
                                    </div>
                                  </div>

                                  <div className="col-lg-2">
                                    <div className="icon-titles mb-3">
                                      <div className="icon">
                                        <GoDotFill />
                                      </div>
                                      <p className="relative">
                                        <span>Lift: </span> {data.property.lifts}
                                      </p>
                                    </div>
                                  </div>

                                  <div className="col-lg-4">
                                    <div className="icon-titles mb-3">
                                      <div className="icon">
                                        <GoDotFill />
                                      </div>
                                      <p className="relative">
                                        <span>Furnishing: </span>{data.property.furnishing}
                                      </p>
                                    </div>
                                  </div>

                                  <div className="col-lg-3">
                                    <div className="icon-titles mb-3">
                                      <div className="icon">
                                        <GoDotFill />
                                      </div>
                                      <p className="relative">
                                        <span>City: </span>{data.property.city}
                                      </p>
                                    </div>
                                  </div>

                                  <div className="col-lg-4">
                                    <div className="icon-titles mb-3">
                                      <div className="icon">
                                        <GoDotFill />
                                      </div>
                                      <p className="relative">
                                        <span>Type of owner: </span>{data.property.typeOfOwner}
                                      </p>
                                    </div>
                                  </div>

                                  <div className="col-lg-8">
                                    <div className="icon-titles mb-3">
                                      <div className="icon">
                                        <GoDotFill />
                                      </div>
                                      <p className="relative">
                                        <span>Overlooking: </span>{data.property.overlooking}
                                      </p>
                                    </div>
                                  </div>

                                </div>
                              </div>
                            </div>
                            {
                              data.relatedProperties.length>0 ? 
                              <div className="related-properties">

                              <div className="section-title">
                                <h1>Similar Properties</h1>
                              </div>

                              <div className="row">
                                <Swiper
                                  slidesPerView={3}
                                  autoplay={{ delay: 2000 }}
                                  cssMode={true}
                                  navigation={true}
                                  pagination={true}
                                  mousewheel={true}
                                  keyboard={true}
                                  modules={[
                                    Navigation,
                                    Pagination,
                                    Mousewheel,
                                    Keyboard,
                                    Autoplay,
                                  ]}
                                  className="mySwiper"
                                >
                                  {data.relatedProperties.map((data, index) => (
                                    <SwiperSlide key={index}>
                                      <Link href={`/property/${data._id}-${data.name}`}>
                                        <div className="card m-2">
                                          <div className="image mb-3">
                                            <Image
                                              src={data.images[0]}
                                              width={282}
                                              height={170}
                                              alt="banner-image"
                                            />
                                          </div>
                                          <div className="title mb-2">
                                            <h4 className="overflowedTextFixer">
                                              {data.name}
                                            </h4>
                                          </div>
                                          <div className="location mb-2">
                                            <div className="icon me-1">
                                              <FaMapLocationDot />
                                            </div>
                                            <h5 className="overflowedTextFixer">
                                            {data.address}, {data.city}, {data.state}
                                            </h5>
                                          </div>
                                          <div className="price mb-2">
                                            <h3>$ {data.price}</h3>
                                          </div>
                                          <div className="features pt-2">
                                            <ul>
                                              <li>
                                                <div className="icon me-2">
                                                  <IoBedOutline />
                                                </div>
                                                <p>
                                                  {" "}
                                                  Beds: <span>{data.beds}</span>{" "}
                                                </p>
                                              </li>

                                              <li>
                                                <div className="icon me-2">
                                                  <LuBath />
                                                </div>
                                                <p>
                                                  {" "}
                                                  Baths: <span>{data.baths}</span>{" "}
                                                </p>
                                              </li>

                                              <li>
                                                <div className="icon me-2">
                                                  <LiaTapeSolid />
                                                </div>
                                                <p>
                                                  {" "}
                                                  Sqft:{" "}
                                                  <span>{data.squareBuiltUpArea}</span>{" "}
                                                </p>
                                              </li>
                                            </ul>
                                          </div>
                                        </div>
                                      </Link>
                                    </SwiperSlide>
                                  ))}
                                </Swiper>
                              </div>
                            </div> 
                              : null
                            }


                          </div>

                          <div className="col-lg-4">
                            <div className="seller-info">
                              <div className="title">
                                <h5>Contact seller</h5>
                              </div>
                              <div className="avatar-info">
                                <div className="row">
                                  <div className="col-lg-3">
                                    <div className="avatar">
                                      <div className="image">
                                        <Image
                                          src={
                                            "https://img.freepik.com/free-photo/3d-house-model-with-modern-architecture_23-2151004030.jpg?t=st=1709186232~exp=1709189832~hmac=48e1ec9c556bffd5bd7716cd33605049efe43775e3b5eb3bb5327df80fa4c596&w=1380"
                                          }
                                          width={50}
                                          height={50}
                                          alt="banner-image"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-lg-9">
                                    <div className="info">
                                      <p className="name">Cameron Williamson</p>
                                      <p className="contact">
                                        (405) 555-000-999
                                      </p>
                                      <p className="email">
                                        cameronwilliamson@gmail.com
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <div className="seller-form">
                                <Form>
                                  <div className="row">
                                    <div className="col-lg-12">
                                      <Form.Control
                                        type="text"
                                        placeholder="Full name*"
                                      />
                                    </div>
                                    <div className="col-lg-12">
                                      <Form.Control
                                        type="text"
                                        placeholder="Phone number*"
                                      />
                                    </div>
                                    <div className="col-lg-12">
                                      <Form.Control
                                        type="email"
                                        placeholder="Email address*"
                                      />
                                    </div>
                                    <div className="col-lg-12">
                                      <Form.Control
                                        as="textarea"
                                        placeholder="Your message"
                                        rows={3}
                                      />
                                    </div>
                                    <div className="col-lg-12">
                                      <div className="row">
                                        <div className="col-lg-7">
                                          <Button className="custom-btn">
                                            Send Message{" "}
                                            <span className="ms-1">
                                              <MdMessage />
                                            </span>
                                          </Button>
                                        </div>
                                        <div className="col-lg-5 d-flex justify-content-end">
                                          <Button className="email-btn">
                                            Email{" "}
                                            <span className="ms-1">
                                              <MdEmail />
                                            </span>
                                          </Button>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </Form>
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
          )}
        </div>
      </div>
    </>
  );
}