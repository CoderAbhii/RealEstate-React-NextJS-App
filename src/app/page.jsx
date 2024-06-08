"use client";

import Image from "next/image";
import BannerImage from "@/images/home-banner-image.png";
import BannerSideImage from "@/images/banner-side-image.png";
import { Button, Form } from "react-bootstrap";
import dynamic from "next/dynamic";
const Select = dynamic(() => import("react-select"), { ssr: false });
import useReactSelectCustomStyle from "@/hooks/reactSelectCustomStyleHook";
import { useEffect, useState } from "react";
import { IoMdSearch } from "react-icons/io";
import { IoBedOutline } from "react-icons/io5";
import { LuBath } from "react-icons/lu";
import { LiaTapeSolid } from "react-icons/lia";
import { FaMapLocationDot } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { getAllPropertyDataFunction } from "@/redux-toolkit/features/properties/propertySlice";
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
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

export default function Home() {
  const selectBoxCustomStyles = useReactSelectCustomStyle();

  const router = useRouter();

  // Select For City
  const cityOptions = [
    { value: "", label: "Select property type", isDisabled: true },
    { value: "Dehradun", label: "Dehradun" },
    { value: "Delhi", label: "Delhi" },
    { value: "Mumbai", label: "Mumbai" },
    { value: "Chandigarh", label: "Chandigarh" },
  ];
  const [selectedCity, setSelectedCity] = useState(null);

  // Select For Property Type
  const propertyOptons = [
    { value: "", label: "Select property type", isDisabled: true },
    { value: 1, label: "1 Bhk" },
    { value: 2, label: "2 Bhk" },
    { value: 3, label: "3 Bhk" },
  ];
  const [selectedPropertyType, setSelectedPropertyType] = useState(null);

  // Select For Budget
  const budgetOptions = [
    { value: "", label: "Select property type", isDisabled: true },
    { value: "5000-7000", label: "5000-7000" },
    { value: "7000-9000", label: "7000-9000" },
    { value: "10000-12000", label: "10000-12000" },
  ];
  const [selectedBudget, setSelectedBudget] = useState(null);

  // Get All Properties
  const dispatch = useDispatch();
  const allProperties = useSelector((state) => state.propertyData);
  const { isLoading, isError, data } = allProperties;

  useEffect(() => {
    dispatch(getAllPropertyDataFunction({}));
  }, [dispatch]);

  const searchProperty = () => {
    if (selectedCity === null) {
      toast.error("Select a city");
    } else if (selectedPropertyType === null) {
      toast.error("Select a property type");
    } else if (selectedBudget === null) {
      toast.error("Select a budget");
    } else {
      localStorage.setItem("search", selectedCity.value);
      localStorage.setItem("bhk", selectedPropertyType.value);
      localStorage.setItem("priceRange", selectedBudget.value);

      router.push("/property");
    }
  };

  return (
    <>
      <div className="home-banner-section">
        <div className="banner-image">
          <Image src={BannerImage} alt="banner-image" />
        </div>

        <div className="banner-content">
          <div className="title">
            <h1>We will find a perfect home for you</h1>
          </div>
          <div className="sub-title">
            <p>
              Find a variety of properties that suit you very easily, forget all
              difficulties in finding a residence for you
            </p>
          </div>

          <div className="search-property-form">
            <Form>
              <div className="row">
                <div className="col-lg-4 mb-3">
                  <Select
                    defaultValue={selectedCity}
                    onChange={setSelectedCity}
                    options={cityOptions}
                    styles={selectBoxCustomStyles}
                    placeholder="Choose city..."
                  />
                </div>

                <div className="col-lg-3 mb-3">
                  <Select
                    defaultValue={selectedPropertyType}
                    onChange={setSelectedPropertyType}
                    options={propertyOptons}
                    styles={selectBoxCustomStyles}
                    placeholder="Select property type"
                  />
                </div>

                <div className="col-lg-3 mb-3">
                  <Select
                    defaultValue={selectedBudget}
                    onChange={setSelectedBudget}
                    options={budgetOptions}
                    styles={selectBoxCustomStyles}
                    placeholder="Select budget"
                  />
                </div>

                <div className="col-lg-2">
                  <Button className="custom-btn" onClick={searchProperty}>
                    Search{" "}
                    <span className="ms-1">
                      <IoMdSearch />
                    </span>
                  </Button>
                </div>
              </div>
            </Form>
          </div>
        </div>

        <div className="banner-side-image">
          <Image src={BannerSideImage} alt="banner-image" />
        </div>
      </div>

      <div className="trending-properties-section">
        <div className="container-fluid">
          {isLoading ? (
            <div className="home-loading">
              <Image src={Loading} width={50} height={50} alt="loading-image" />
            </div>
          ) : (
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title">
                  <h1>Recommended For You</h1>
                </div>
                <div className="section-sub-title">
                  <h5>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer vel lobortis justo
                  </h5>
                </div>
              </div>

              <div className="col-lg-12">
                <div className="property-filter-tabs">
                  <ul className="d-flex">
                    <li className="active">House</li>
                    <li>Villa</li>
                    <li>Flat</li>
                    <li>Apartment</li>
                    <li>Office</li>
                    <li>Bungalow</li>
                  </ul>
                </div>

                <div className="property-list">
                  <div className="row">
                    <Swiper
                      slidesPerView={1}
                      breakpoints={{
                        640: {
                          slidesPerView: 1,
                        },
                        768: {
                          slidesPerView: 2, 
                        },
                        1024: {
                          slidesPerView: 3, 
                        },
                        1200: {
                          slidesPerView: 4, 
                        },
                      }}
                      autoplay={{ delay: 2000 }}
                      loop={true}
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
                      {data.properties.map((property, index) => (
                        <SwiperSlide key={index}>
                          <Link
                            href={`/property/${property._id}-${property.name}`}
                          >
                            <div className="card m-2">
                              <div className="image mb-3">
                                <Image
                                  src={property.images[0]}
                                  width={282}
                                  height={170}
                                  alt="property-image"
                                />
                              </div>
                              <div className="title mb-2">
                                <h4 className="overflowedTextFixer">
                                  {property.name}
                                </h4>
                              </div>
                              <div className="location mb-2">
                                <div className="icon me-1">
                                  <FaMapLocationDot />
                                </div>
                                <h5 className="overflowedTextFixer">
                                  {property.address}, {property.city},{" "}
                                  {property.state}
                                </h5>
                              </div>
                              <div className="price mb-2">
                                <h3>₹ {property.price}</h3>
                              </div>
                              <div className="features pt-2">
                                <ul>
                                  <li>
                                    <div className="icon me-2">
                                      <IoBedOutline />
                                    </div>
                                    <p>
                                      Beds: <span>{property.beds}</span>
                                    </p>
                                  </li>
                                  <li>
                                    <div className="icon me-2">
                                      <LuBath />
                                    </div>
                                    <p>
                                      Baths: <span>{property.baths}</span>
                                    </p>
                                  </li>
                                  <li>
                                    <div className="icon me-2">
                                      <LiaTapeSolid />
                                    </div>
                                    <p>
                                      Sqft:{" "}
                                      <span>{property.squareBuiltUpArea}</span>
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
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="top-localities-section">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title">
                <h1>Explore Top Localities</h1>
              </div>
              <div className="section-sub-title">
                <h5>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer vel lobortis justo
                </h5>
              </div>
            </div>

            <div className="col-lg-12">
              <div className="localities-box mt-4">
                <div className="row">
                  <div className="col-lg-3">
                    <div className="city">
                      <div className="image">
                        <Image
                          src={
                            "https://img.freepik.com/free-photo/mumbai-skyline-seen-from-marine-drive-south-mumbai_469504-11.jpg?w=1380&t=st=1709187477~exp=1709188077~hmac=37a28559334e7434a52e137f8cb44483d612dc84cfc3b4bd4fd42137f4074100"
                          }
                          width={282}
                          height={170}
                          alt="banner-image"
                        />
                      </div>
                      <div className="content">
                        <h4 className="text-white">Dehradun</h4>
                        <h5 className="text-white">5 Property listed</h5>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-3">
                    <div className="city">
                      <div className="image">
                        <Image
                          src={
                            "https://img.freepik.com/free-photo/los-angeles-downtown-buildings-night_649448-298.jpg?t=st=1709187505~exp=1709191105~hmac=7120db353c0555351dcf3b8821e561f05994c59e957619c867627753a403a12a&w=1380"
                          }
                          width={282}
                          height={170}
                          alt="banner-image"
                        />
                      </div>
                      <div className="content">
                        <h4 className="text-white">Chandigrah</h4>
                        <h5 className="text-white">5 Property listed</h5>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-3">
                    <div className="city">
                      <div className="image">
                        <Image
                          src={
                            "https://img.freepik.com/free-photo/complex-aerial-view-city_23-2148975282.jpg?t=st=1709187526~exp=1709191126~hmac=53effe52636973e55d739a4b60e5bf974cfd212d737a21ac64ce086d77ab17de&w=1060"
                          }
                          width={282}
                          height={170}
                          alt="banner-image"
                        />
                      </div>
                      <div className="content">
                        <h4 className="text-white">Pune</h4>
                        <h5 className="text-white">5 Property listed</h5>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-3">
                    <div className="city">
                      <div className="image">
                        <Image
                          src={
                            "https://img.freepik.com/free-photo/cityscape-night-bangkok-thailand_335224-1020.jpg?t=st=1709187547~exp=1709191147~hmac=2917548323109723761afe94dffff4ad6b23bc6930f59e6555d5f4384d217940&w=1380"
                          }
                          width={282}
                          height={170}
                          alt="banner-image"
                        />
                      </div>
                      <div className="content">
                        <h4 className="text-white">Delhi</h4>
                        <h5 className="text-white">5 Property listed</h5>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-3">
                    <div className="city">
                      <div className="image">
                        <Image
                          src={
                            "https://img.freepik.com/free-photo/mumbai-skyline-seen-from-marine-drive-south-mumbai_469504-11.jpg?w=1380&t=st=1709187477~exp=1709188077~hmac=37a28559334e7434a52e137f8cb44483d612dc84cfc3b4bd4fd42137f4074100"
                          }
                          width={282}
                          height={170}
                          alt="banner-image"
                        />
                      </div>
                      <div className="content">
                        <h4 className="text-white">Dehradun</h4>
                        <h5 className="text-white">5 Property listed</h5>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-3">
                    <div className="city">
                      <div className="image">
                        <Image
                          src={
                            "https://img.freepik.com/free-photo/los-angeles-downtown-buildings-night_649448-298.jpg?t=st=1709187505~exp=1709191105~hmac=7120db353c0555351dcf3b8821e561f05994c59e957619c867627753a403a12a&w=1380"
                          }
                          width={282}
                          height={170}
                          alt="banner-image"
                        />
                      </div>
                      <div className="content">
                        <h4 className="text-white">Chandigrah</h4>
                        <h5 className="text-white">5 Property listed</h5>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-3">
                    <div className="city">
                      <div className="image">
                        <Image
                          src={
                            "https://img.freepik.com/free-photo/complex-aerial-view-city_23-2148975282.jpg?t=st=1709187526~exp=1709191126~hmac=53effe52636973e55d739a4b60e5bf974cfd212d737a21ac64ce086d77ab17de&w=1060"
                          }
                          width={282}
                          height={170}
                          alt="banner-image"
                        />
                      </div>
                      <div className="content">
                        <h4 className="text-white">Pune</h4>
                        <h5 className="text-white">5 Property listed</h5>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-3">
                    <div className="city">
                      <div className="image">
                        <Image
                          src={
                            "https://img.freepik.com/free-photo/cityscape-night-bangkok-thailand_335224-1020.jpg?t=st=1709187547~exp=1709191147~hmac=2917548323109723761afe94dffff4ad6b23bc6930f59e6555d5f4384d217940&w=1380"
                          }
                          width={282}
                          height={170}
                          alt="banner-image"
                        />
                      </div>
                      <div className="content">
                        <h4 className="text-white">Delhi</h4>
                        <h5 className="text-white">5 Property listed</h5>
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
