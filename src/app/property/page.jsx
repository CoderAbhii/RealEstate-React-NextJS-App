"use client";

import { Button, Form } from "react-bootstrap";
import dynamic from "next/dynamic";
const Select = dynamic(() => import("react-select"), { ssr: false });
import useReactSelectCustomStyle from "@/hooks/reactSelectCustomStyleHook";
import { useEffect, useState } from "react";
import { IoMdSearch } from "react-icons/io";
import { LiaTapeSolid } from "react-icons/lia";
import { LuBath } from "react-icons/lu";
import { IoBedOutline } from "react-icons/io5";
import { FaMapLocationDot } from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { getAllPropertyDataFunction } from "@/redux-toolkit/features/properties/propertySlice";
import Loading from "@/gifs/homeLoading.gif";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";

export default function Property() {
  const selectBoxCustomStyles = useReactSelectCustomStyle();

  // Select For Property Type
  const cityOptions = [
    { value: "Dehradun", label: "Dehradun" },
    { value: "Delhi", label: "Delhi" },
    { value: "Pune", label: "Pune" },
    { value: "Mumbai", label: "Mumbai" },
    { value: "Chandigarh", label: "Chandigarh" },
  ];
  const [selectedCity, setSelectedCity] = useState("");
  const [city, setCity] = useState("");

  // Get All Properties Start
  const dispatch = useDispatch();
  const allProperties = useSelector((state) => state.propertyData);
  const { isLoading, isError, data } = allProperties;
  // Get All Properties End

  const [page, setPage] = useState(1);
  const handleNextPage = () => {
    setPage(page + 1);
  };
  const handlePreviousPage = () => {
    setPage(page - 1);
  };

  // Select For Property Type
  const propertyOptions = [
    { value: "House", label: "House" },
    { value: "Flat", label: "Flat" },
    { value: "Banglow", label: "Banglow" },
  ];
  const [selectedPropertyType, setSelectedPropertyType] = useState("");
  const [propertyType, setPropertyType] = useState('');

  
  const handleFilterProperty = () => {
    setPropertyType(selectedPropertyType.value === undefined ? '': selectedPropertyType.value);
    setCity(selectedCity.value === undefined ? '': selectedCity.value)
  };

  const handleRemoveFilters = (e) => {
    e.preventDefault();
    setPropertyType("");
    setCity("");
  };

  useEffect(() => {
    dispatch(getAllPropertyDataFunction({page, propertyType, city}));
    window.scrollTo({ top: 0, behavior: 'smooth', });
  }, [dispatch, page, propertyType, city]);


  
  return (
    <>
      <div className="page-section properties-page">
        <div className="container-fluid">
          <div className="filter">
            <div className="filter-form">
              <Form>
                <div className="row">
                  <div className="col-lg-9">
                    <div className="filters">
                      <div className="row">
                        <div className="col-lg-4">
                          <Select
                            defaultValue={selectedPropertyType}
                            onChange={setSelectedPropertyType}
                            options={propertyOptions}
                            styles={selectBoxCustomStyles}
                            placeholder="Select property type"
                          />
                        </div>

                        <div className="col-lg-4">
                          <Select
                            defaultValue={selectedCity}
                            onChange={setSelectedCity}
                            options={cityOptions}
                            styles={selectBoxCustomStyles}
                            placeholder="Select city"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <div className="d-flex justify-content-end">
                    <button className="btn custom-btn text-white me-2" onClick={handleRemoveFilters}>Remove Filter</button>
                    <div className="search-btn">
                      <Button
                        className="custom-btn"
                        onClick={handleFilterProperty}
                      >
                        Search{" "}
                        <span className="ms-1">
                          <IoMdSearch />
                        </span>
                      </Button>
                    </div>
                    </div>
                  </div>
                </div>
              </Form>
            </div>
          </div>

          {isLoading ? (
            <div className="home-loading">
              <Image src={Loading} width={50} height={50} alt="loading-image" />
            </div>
          ) : (
            <div>

{
                data.properties.length === 0 ? <h3 className="fw-bold mb-4 text-center">No property found</h3> : 
                
                <div className="row">
                <div className="col-lg-12">
                  <div className="section-title">
                    <h1>All Properties</h1>
                  </div>
                  <div className="section-sub-title">
                    <h5>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Integer vel lobortis justo
                    </h5>
                  </div>
                </div>
  
                <div className="col-lg-12">
                  <div className="property-list">
                    <div className="row">
                      {data.properties.map((data, index) => (
                        <div className="col-lg-3" key={index}>
                          <Link href={`/property/${data._id}-${data.name}`}>
                            <div className="card mb-4">
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
                                <h3>₹ {data.price}</h3>
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
                                      Sqft: <span>
                                        {data.squareBuiltUpArea}
                                      </span>{" "}
                                    </p>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </Link>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
  
                <div className="col-lg-12">
                  <div className="paging-area">
                    {
                      data.currentPage > 1 ? <button className="next-button me-2" onClick={handlePreviousPage}> <FaLongArrowAltLeft /> </button> : null
                    }
                    {
                      data.currentPage < data.totalPages ? <button className="next-button" onClick={handleNextPage}> Next Page <FaLongArrowAltRight /> </button> :  null
                    }
                  </div>
                </div>
              </div>

              }
            </div>


          )}
        </div>
      </div>
    </>
  );
}