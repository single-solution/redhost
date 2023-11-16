/* eslint-disable react/no-unescaped-entities */
"use client";
import AOS from "aos";
import Link from "next/link";
import React, { useEffect } from "react";

const Footer = () => {
	useEffect(() => {
		AOS.init({
			easing: "ease-in-out",
			duration: 800,
			once: true,
		});
	}, []);

	return (
		<>
			<footer className="footer ">
				<img
					src="/assets/img/footer-layer.svg"
					alt="curve shape"
					className="w-100 "
					style={{
						position: "relative",
						top: "30px",
					}}
				/>
				<div className="h5-footer position-relative z-index-1 overflow-hidden">
					<div className="container position-relative " style={{ zIndex: 22 }}>
						<div className="row">
							<div className="col-lg-3 col-sm-6">
								<div className="footer-widget footer-widget-1">
									<Link href="/" className="footer-logo">
										<img src="/assets/img/logo-white.png" className="" style={{ maxWidth: "200px" }} alt="logo" />
									</Link>
									<div className="footer-social mt-5">
										<ul className="social-nav mt-3">
											<li>
												<a
													href="#"
													className="rounded-circle overflow-hidden position-relative d-flex align-items-center justify-content-center ">
													<i className="fab text-white fa-facebook-f"></i>
												</a>
											</li>
											<li>
												<a
													href="#"
													className="rounded-circle overflow-hidden position-relative d-flex align-items-center justify-content-center ">
													<i className="fab text-white fa-twitter"></i>
												</a>
											</li>
										</ul>
									</div>
								</div>
							</div>
							<div className="col-lg-3  col-sm-6">
								<div className="footer-widget footer-widget-2 mt-2">
									<h5 className=" position-relative mb-5 widget-title">Quick Links</h5>
									<ul className="footer-nav">
										<li>
											<Link href="/">Home</Link>
										</li>
										<li>
											<Link href="/about">About Us</Link>
										</li>
										<li>
											<Link href="/contact">Contact Us</Link>
										</li>
										<li>
											<Link href="/ghid-de-utilizare">Ghid de utilizare</Link>
										</li>
										<li>
											<Link href="/date-personale">Date Personale</Link>
										</li>
										<li>
											<Link href="/conditii-de-utilizare">Conditii de utilizare </Link>
										</li>
									</ul>
								</div>
							</div>
							<div className="col-lg-3 col-sm-6">
								<div className="footer-widget footer-widget-3 mt-2">
									<h5 className=" position-relative mb-5 widget-title">Servicii</h5>
									<ul className="footer-nav">
										<li className="d-flex">
											<Link href="/gazduire-web-ssd">
												<span className="pe-2">
													<svg
														style={{ width: "30px" }}
														preserveAspectRatio="xMinYMin meet"
														viewBox="0 0 32.36 32.36">
														<g data-name="Layer 2">
															<g>
																<path
																	fill="#ff0000 "
																	d="M30.72,11.12a4.93,4.93,0,0,1,1.64,3.67v2.78a4.91,4.91,0,0,1-1.64,3.67,4.89,4.89,0,0,1,1.64,3.66v2.53a1.27,1.27,0,1,1-2.53,0V24.9a2.4,2.4,0,0,0-2.4-2.4,1.27,1.27,0,0,1,0-2.53,2.39,2.39,0,0,0,2.4-2.4V14.79a2.4,2.4,0,0,0-2.4-2.4,1.27,1.27,0,0,1,0-2.53,2.4,2.4,0,0,0,2.4-2.4V4.93a2.4,2.4,0,0,0-2.4-2.4H4.93a2.41,2.41,0,0,0-2.4,2.4V7.46a2.41,2.41,0,0,0,2.4,2.4H21.11a1.27,1.27,0,1,1,0,2.53h-16a2.53,2.53,0,0,0-2.53,2.53v2.65A2.4,2.4,0,0,0,4.93,20H21.11a1.27,1.27,0,1,1,0,2.53H4.93a2.41,2.41,0,0,0-2.4,2.4v2.53a2.4,2.4,0,0,0,2.4,2.4h22.5a1.27,1.27,0,1,1,0,2.53H4.93A4.93,4.93,0,0,1,0,27.43V24.9a4.89,4.89,0,0,1,1.64-3.66A4.91,4.91,0,0,1,0,17.57V14.92a5.05,5.05,0,0,1,1.68-3.76A4.93,4.93,0,0,1,0,7.46V4.93A4.93,4.93,0,0,1,4.93,0h22.5a4.93,4.93,0,0,1,4.93,4.93V7.46a4.89,4.89,0,0,1-1.64,3.66ZM5.06,26.17A1.26,1.26,0,1,0,6.32,24.9a1.25,1.25,0,0,0-1.26,1.27Zm0-10a1.26,1.26,0,1,0,1.26-1.27,1.25,1.25,0,0,0-1.26,1.27Zm0-9.93A1.26,1.26,0,1,0,6.32,4.93,1.26,1.26,0,0,0,5.06,6.19Zm4.42,20a1.27,1.27,0,1,0,1.27-1.27,1.26,1.26,0,0,0-1.27,1.27Zm0-10a1.27,1.27,0,1,0,1.27-1.27,1.26,1.26,0,0,0-1.27,1.27Zm0-9.93a1.27,1.27,0,1,0,1.27-1.26A1.27,1.27,0,0,0,9.48,6.19Z"></path>
															</g>
														</g>
													</svg>
												</span>
												Gazduire Web SSD
											</Link>
										</li>
										<li>
											<Link href="/domenii">
												<span className="pe-2">
													<svg style={{ width: "30px" }} preserveAspectRatio="xMinYMin meet" viewBox="0 0 33.2 33.2">
														<g data-name="Layer 2">
															<g>
																<path
																	fill="#ff0000 "
																	d="M20.88,0A12.32,12.32,0,0,0,11.3,20.06L9.13,22.23a6.09,6.09,0,0,0-3.42,1,30.94,30.94,0,0,0-4.5,3.27l0,0,0,0A3.89,3.89,0,0,0,3.89,33.2a3.83,3.83,0,0,0,2.75-1.14L6.7,32A33.08,33.08,0,0,0,10,27.64c.38-.63,1.35-2.26,1.05-3.66l2.09-2.08A12.34,12.34,0,0,0,26,23.52a1.3,1.3,0,0,0-1.09-2.36,9.58,9.58,0,0,1-4.06.89,9.73,9.73,0,1,1,8.46-4.92,1.3,1.3,0,1,0,2.25,1.29A12.33,12.33,0,0,0,20.88,0ZM4.78,30.25a1.27,1.27,0,0,1-.89.36,1.3,1.3,0,0,1-1.3-1.3A1.29,1.29,0,0,1,3,28.42,28.89,28.89,0,0,1,6.5,25.76a6.83,6.83,0,0,1,2-.92C8.28,25.54,7.42,27.23,4.78,30.25ZM27.36,12.32a1.3,1.3,0,0,1-1.29,1.3H22.18v3.89a1.3,1.3,0,1,1-2.6,0V13.62H15.69a1.3,1.3,0,0,1,0-2.6h3.89V7.13a1.3,1.3,0,0,1,2.6,0V11h3.89A1.3,1.3,0,0,1,27.36,12.32Z"></path>
															</g>
														</g>
													</svg>
												</span>
												Domenii
											</Link>
										</li>
										<li>
											<Link href="/reseller-hosting">
												<span className="pe-2">
													<svg
														style={{ width: "30px" }}
														preserveAspectRatio="xMinYMin meet"
														viewBox="0 0 33.54 33.54">
														<g data-name="Layer 2">
															<g>
																<path
																	fill="#ff0000 "
																	d="M29.61,21.09a3.8,3.8,0,0,0-1.31.23l-3.54-4.4a10.35,10.35,0,1,0-16,0L5.22,21.31A3.92,3.92,0,0,0,0,25,3.93,3.93,0,0,0,3.93,29a1.31,1.31,0,0,0,0-2.62A1.31,1.31,0,1,1,5.24,25a1.31,1.31,0,0,0,2.62,0A3.86,3.86,0,0,0,7.26,23l3.4-4.25a10.37,10.37,0,0,0,4.8,1.92v5.29a3.93,3.93,0,0,0,1.31,7.63,1.31,1.31,0,1,0,0-2.62,1.31,1.31,0,1,1,1.31-1.31,1.31,1.31,0,0,0,2.62,0,3.93,3.93,0,0,0-2.62-3.7V20.62a10.34,10.34,0,0,0,4.76-1.9L26.26,23a3.93,3.93,0,0,0,3.35,6,1.31,1.31,0,1,0,0-2.62A1.31,1.31,0,1,1,30.92,25a1.31,1.31,0,0,0,2.62,0,3.94,3.94,0,0,0-3.93-3.93Zm-12.84-3A7.62,7.62,0,0,1,12.84,17v-.71a.94.94,0,0,1,.31-.71,5.3,5.3,0,0,1,3.62-1.34,5.3,5.3,0,0,1,3.62,1.34.94.94,0,0,1,.31.71V17a7.62,7.62,0,0,1-3.93,1.08Zm0-6.48a1.71,1.71,0,1,1,1.7-1.71,1.71,1.71,0,0,1-1.7,1.71Zm0-9A7.73,7.73,0,0,1,23,14.88a3.52,3.52,0,0,0-.9-1.26,7.62,7.62,0,0,0-1.84-1.22,4.27,4.27,0,0,0,.8-2.51,4.32,4.32,0,0,0-8.64,0,4.27,4.27,0,0,0,.8,2.51,7.62,7.62,0,0,0-1.84,1.22,3.51,3.51,0,0,0-.86,1.17l-.07,0A7.63,7.63,0,0,1,9,10.35a7.74,7.74,0,0,1,7.73-7.73Z"></path>
															</g>
														</g>
													</svg>
												</span>
												Reseller Hosting
											</Link>
										</li>
										<li>
											<Link href="/hosting">
												<span className="pe-2">
													<svg style={{ width: "30px" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 41.7 32.11">
														<g data-name="Layer 2">
															<g className="svg" data-name="Layer 1">
																<path
																	fill="#ff0000 "
																	d="M41.59,9.1c-.65-1.67-4-2.35-11.67-2.35C9.92,6.75,5.51,5.74.4,0L0,.3c.23.37.45.77.68,1.2,2,3.64,5,9.14,23.57,8.84,7.21-.11,11,.52,11.66,1.94.56,1.24-1.27,3.26-3.2,5.39A29.17,29.17,0,0,0,28.59,23l-.75,1.39L29,23.27c1.81-1.73,3.57-3.32,5.12-4.72C39.07,14,42.35,11.07,41.59,9.1Z"></path>
																<path
																	fill="#ff0000 "
																	d="M11.13,25.32a3.4,3.4,0,0,0,0,6.79,3.4,3.4,0,0,0,0-6.79Z"></path>
																<path
																	fill="#ff0000 "
																	d="M24.55,25.32a3.4,3.4,0,1,0,3.19,3.4A3.31,3.31,0,0,0,24.55,25.32Z"></path>
															</g>
														</g>
													</svg>
												</span>
												Servere virtuale (VPS)
											</Link>
										</li>
										<li>
											<Link href="/servere-dedicate">
												<span className="pe-2">
													<svg style={{ width: "30px" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28">
														<g data-name="Layer 2">
															<g data-name="MENIU 2">
																<path
																	fill="#ff0000 "
																	d="M20.73,15.38V15h3.79A1.91,1.91,0,0,0,28,13.94a1.91,1.91,0,0,0-3.48-1.1H20.73v-.33a3.23,3.23,0,0,0-.84-2.17l.19-.23H23.9a1.06,1.06,0,0,0,.77-.32L26.86,7.6a1.1,1.1,0,0,0,.32-.77V3.48A1.89,1.89,0,0,0,28,1.91a1.92,1.92,0,1,0-3,1.57v2.9L23.45,7.92H20.73V5.29A3.29,3.29,0,0,0,17.45,2H3.28A3.28,3.28,0,0,0,0,5.29V8.16a3.29,3.29,0,0,0,.83,2.18A3.27,3.27,0,0,0,0,12.51v2.87a3.25,3.25,0,0,0,.84,2.18A3.25,3.25,0,0,0,0,19.74v2.85a3.28,3.28,0,0,0,3.28,3.28H12a1.1,1.1,0,0,0,0-2.19H3.28a1.09,1.09,0,0,1-1.09-1.09V19.74a1.09,1.09,0,0,1,1.09-1.09h4.6v2.57a1.09,1.09,0,1,0,2.18,0V18.65h7.39a1.09,1.09,0,0,1,1.09,1.09v2.85a1.09,1.09,0,0,1-1.09,1.09,1.1,1.1,0,1,0,0,2.19,3.29,3.29,0,0,0,3.28-3.28V20H23.5l1.55,1.55v3a1.91,1.91,0,1,0,2.18.07v-3.5a1.1,1.1,0,0,0-.32-.78l-2.18-2.18a1.1,1.1,0,0,0-.78-.32H20.06a1.2,1.2,0,0,0-.17-.21A3.25,3.25,0,0,0,20.73,15.38ZM2.19,5.29A1.09,1.09,0,0,1,3.28,4.21h4.6V6.73a1.09,1.09,0,0,0,2.18,0V4.21h7.39a1.09,1.09,0,0,1,1.09,1.08V8.16a1.08,1.08,0,0,1-1.09,1.08H3.28A1.08,1.08,0,0,1,2.19,8.16ZM3.28,16.46a1.08,1.08,0,0,1-1.09-1.08V12.51a1.08,1.08,0,0,1,1.09-1.08h4.6V14a1.09,1.09,0,1,0,2.18,0V11.43h7.39a1.08,1.08,0,0,1,1.09,1.08v2.87a1.08,1.08,0,0,1-1.09,1.08ZM4,6.73a1.1,1.1,0,1,1,1.1,1.09A1.1,1.1,0,0,1,4,6.73ZM6.18,14a1.1,1.1,0,1,1-1.09-1.09A1.09,1.09,0,0,1,6.18,14Zm-1,6.13a1.09,1.09,0,1,1-1.09,1.09A1.09,1.09,0,0,1,5.14,20.13Z"></path>
															</g>
														</g>
													</svg>
												</span>
												Servere Dedicate
											</Link>
										</li>
									</ul>
								</div>
							</div>
							<div className="col-lg-3  col-sm-6">
								<div className="footer-widget footer-widget-3 mt-2">
									<h5 className=" position-relative mb-5 widget-title">Contact Info</h5>
									<ul className="contac-1">
										<li>
											<div className="text">
												<div className="d-flex">
													<div className="icon">
														<i className="fa fa-home"></i>
													</div>
													<h4> Address</h4>
												</div>
												<p>
													<strong style={{ color: "#E81F30" }}>ABC City, Country</strong>
												</p>
											</div>
										</li>
										<li>
											<div className="text">
												<div className="d-flex">
													<div className="icon">
														<i className="fa fa-envelope"></i>
													</div>
													<h4>Email</h4>
												</div>
												<p>
													<a href="mailto:info@gmail.com">info@gmail.com</a>
												</p>
											</div>
										</li>
										<li>
											<div className="text">
												<div className="d-flex">
													<div className="icon">
														<i className="fa fa-phone"></i>
													</div>
													<h4>Phone</h4>
												</div>
												<p>
													<a href="tel:+00123456789">(+00) 123 456 789</a>
												</p>
											</div>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
					<div className="row my-2">
						<div className="d-flex top-bottom-gap align-items-center justify-content-center flex-column flex-sm-row">
							<div className="image" style={{ maxWidth: "300px" }}>
								<a href="https://anpc.ro/ce-este-sal/" target="_blank">
									<img className="w-100" src="/assets/img/redhostro.png" alt="" />
								</a>
							</div>
							<div className="image" style={{ maxWidth: "300px" }}>
								<a
									href="https://ec.europa.eu/consumers/odr/main/index.cfm?event=main.home.chooseLanguage"
									target="_blank">
									<img className="w-100" src="/assets/img/redhostro_1.png" alt="" />
								</a>
							</div>
						</div>
					</div>
				</div>
				<div className="footer-copyright">
					<div className="container">
						<div className="row align-items-center">
							<div className="col-md-12 text-center">
								<p className=" m-0 py-2 copyright-txt  fw-800" style={{ color: "#fff", fontWeight: "700" }}>
									Copyright © 2023 By{" "}
									<a style={{ textDecoration: "underline", color: "#fff" }} href="https://single-solution.com/">
										Single Solution
									</a>
									. All rights reserved.
								</p>
							</div>
						</div>
					</div>
				</div>
			</footer>
		</>
	);
};

export default Footer;
