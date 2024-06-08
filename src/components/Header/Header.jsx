'use client'

import Image from "next/image";
import Logo from '@/images/logo.png';
import Link from "next/link";
import { Button, Offcanvas } from "react-bootstrap";
import { FaCircleUser } from "react-icons/fa6";
import { useState } from "react";
import { CgMenuRightAlt } from "react-icons/cg";

export default function Header() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <div className="header-area">
                <div className="container-fluid">
                    <div className="row">

                        <div className="col-lg-3">
                            <div className="logo">
                                <Link href={"/"}> <Image src={Logo} width={200} height={50} alt="logo" /> </Link>
                            </div>
                        </div>

                        <div className="sidebar-menu" onClick={handleShow}>
                            <CgMenuRightAlt />
                        </div>

                        <div className="col-lg-6">
                            <ul className="nav-area">
                                <li className="nav-item"> <Link href={'/'}>Home</Link></li>
                                <li className="nav-item"> <Link href={'/about'}>About</Link></li>
                                <li className="nav-item"> <Link href={'/property'}>Properties</Link></li>
                                <li className="nav-item"> <Link href={'/'}>Brokers</Link></li>
                                <li className="nav-item"> <Link href={'/'}>Sellers</Link></li>
                                <li className="nav-item"> <Link href={'/'}>Buyers</Link></li>
                            </ul>
                        <Offcanvas show={show} onHide={handleClose} className='sidebar-header-area'>
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title>Offcanvas</Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <ul className="nav-area">
                                    <li className="nav-item"> <Link href={'/'}>Home</Link></li>
                                    <li className="nav-item"> <Link href={'/about'}>About</Link></li>
                                    <li className="nav-item"> <Link href={'/property'}>Properties</Link></li>
                                    <li className="nav-item"> <Link href={'/'}>Brokers</Link></li>
                                    <li className="nav-item"> <Link href={'/'}>Sellers</Link></li>
                                    <li className="nav-item"> <Link href={'/'}>Buyers</Link></li>
                                </ul>
                            </Offcanvas.Body>
                        </Offcanvas>
                        </div>

                        <div className="col-lg-3">
                            <div className="auth-area">
                                <Button className="custom-btn">
                                    <span className="me-1"><FaCircleUser /> </span>Login/Signup
                                </Button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>




        </>
    )
}