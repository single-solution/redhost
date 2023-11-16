/* eslint-disable react/no-unescaped-entities */
"use client";
import AOS from "aos";
import Link from "next/link";
import React from "react";

export default function Contact() {
	useEffect(() => {
		AOS.init({
			easing: "ease-in-out",
			duration: 800,
			once: true,
		});
	}, []);

	return (
		<>
			&lt;&gt;
			<section className="breadcrumb-area bg-primary-gradient">
				<div className="container">
					<div className="breadcrumb-content text-center">
						<h2 className="mb-3">Contact us</h2>
						<nav>
							<ol className="breadcrumb">
								<li className="breadcrumb-item">
									<Link href="/">Home</Link>
								</li>
								<li className="breadcrumb-item active">Contact Us</li>
							</ol>
						</nav>
					</div>
				</div>
			</section>
			<section className="vps-about-section ptb-120" style={{ background: "whitesmoke" }}>
				<div className="container">
					<div className="row align-items-center mb-5">
						<div className="col-xxl-12 col-xl-12">
							<div className="section-title text-center text-xl-center">
								<h2>Contact RedHost</h2>
							</div>
						</div>
					</div>
					<div className="row g-4">
						<div className="col-lg-6">
							<div className="vps-about-item d-flex align-items-center flex-column flex-sm-row bg-white deep-shadow position-relative zindex-1 overflow-hidden">
								<img
									src="assets/img/shapes/vps-about-shape.png"
									alt="not found"
									className="position-absolute right-bottom"
								/>
								<div className="vps-about-item-content mt-4 mt-sm-0 ms-sm-3 text-center text-sm-start">
									<h4 className="mb-20">Company Data</h4>
									<ul>
										<li className="py-2">
											<strong>SC EUROWEB SRL</strong>
										</li>
										<li className="py-2">
											<strong>Fiscal code:</strong> RO22621599
										</li>
										<li>
											<strong>Reg Com:</strong>J17/1826/2007
										</li>
										<li className="py-2">
											<strong>Share capital:</strong> 200 lei
										</li>
										<li className="py-2">
											<strong>Registered office:</strong> Gradina Veche, 88
										</li>
										<li className="py-2">
											<strong>City:</strong> Galati
										</li>
										<li className="py-2">
											<strong>County:</strong> Galati
										</li>
										<li className="py-2">
											<strong>Postal code:</strong> 800142
										</li>
									</ul>
								</div>
							</div>
						</div>
						<div className="col-lg-6">
							<div className="vps-about-item d-flex align-items-center flex-column flex-sm-row bg-white deep-shadow position-relative zindex-1 overflow-hidden">
								<img
									src="assets/img/shapes/vps-about-shape.png"
									alt="not found"
									className="position-absolute right-bottom"
								/>
								<div className="vps-about-item-content mt-4 mt-sm-0 ms-sm-3 text-center text-sm-start">
									<h4 className="mb-20">Bank Accounts</h4>
									<p className=" my-4 fw-bold text-uppercase">
										<strong>For cash payments</strong>
									</p>
									<ul>
										<li>
											<strong>BRD Agency Piata Mare Account: SV32065501800</strong>
										</li>
									</ul>
									<p className=" my-4 fw-bold text-uppercase">
										<strong>For payments with Payment Order (transfer)</strong>
									</p>
									<ul>
										<li>
											<strong>GarantiBank Galati</strong>
										</li>
										<li>
											<strong>RO25 UGBI 0000 1520 0642 4RON</strong>
										</li>
									</ul>
									<p className=" my-4 fw-bold text-uppercase">
										<strong>Treasury of the Municipality of Galati</strong>
									</p>
									<ul>
										<li>
											<strong>(exclusively for budgetary institutions)</strong>
										</li>
										<li>
											<strong>RO65 TREZ 3065 069X XX00 9358</strong>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section
				className="hm-contact-area position-relative pt-60 pb-120 overflow-hidden bg-white zindex-1 "
				style={{ backgroundColor: "whitesmoke" }}>
				<img src="assets/img/contact-bg-left.png" alt="bg" className="position-absolute left-bottom" />
				<img src="assets/img/contact-bg-right.png" alt="bg" className="position-absolute right-bottom" />
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-lg-5">
							<div className="ct-section-title text-center">
								<h2>Get In Touch</h2>
							</div>
						</div>
					</div>
					<div className="hm-contact-form mt-5" id="contact">
						<div className="col-12 pb-3 message-box d-none">
							<div className="alert alert-danger" />
						</div>
						<form action="" method="POST" id="contactForm" className="contact-us-form">
							<div className="row justify-content-center">
								<div className="col-lg-6">
									<div className="row g-4">
										<div className="col-md-12">
											<div className="input-field">
												<label htmlFor="name">Name</label>
												<input
													type="text"
													className=""
													name="name"
													id="name"
													placeholder="Enter name"
													required="required"
												/>
											</div>
										</div>
										<div className="col-md-12">
											<div className="input-field">
												<label htmlFor="email">Email</label>
												<input
													type="email"
													className=""
													name="email"
													id="email"
													placeholder="Enter email"
													required="required"
												/>
											</div>
										</div>
										<div className="col-md-12">
											<div className="input-field">
												<label htmlFor="phone">Phone</label>
												<input
													type="text"
													className=""
													name="phone"
													id="phone"
													placeholder="Enter phone"
													required="required"
												/>
											</div>
										</div>
										<div className="col-md-12">
											<div className="input-field">
												<label htmlFor="subject">Subject</label>
												<input
													type="text"
													className=""
													name="subject"
													id="subject"
													placeholder="Enter subject"
													required="required"
												/>
											</div>
										</div>
										<div className="col-md-12">
											<div className="input-field">
												<label htmlFor="message">Message</label>
												<textarea
													placeholder="Write Message"
													rows={5}
													name="message"
													id="message"
													defaultValue={""}
												/>
											</div>
										</div>
										<div className="submit-btn text-center mt-4">
											<button type="submit" className="template-btn primary-btn border-0 rounded-pill">
												Send Message
												<i className="fa-solid fa-chevron-right ms-2" />
											</button>
										</div>
									</div>
								</div>
								<div className="col-lg-6">
									<h4 className="mb-30">Recommended method of contacting support: e-mail ( office@redhost.ro )</h4>
									<div className="hm-ct-info-wrapper rounded">
										<span className="icon-wrapper rounded-circle d-inline-flex align-items-center justify-content-center">
											<i className="fa-solid fa-envelope" />
										</span>
										<div className="info-content mt-4">
											<h4>Email</h4>
											<span>
												<a href="mailto:office@redhost.ro">office@redhost.ro</a>
											</span>
										</div>
									</div>
									<div className="hm-ct-info-wrapper rounded">
										<span className="icon-wrapper rounded-circle d-inline-flex align-items-center justify-content-center">
											<i className="fa-solid fa-phone" />
										</span>
										<div className="info-content mt-4">
											<h4>phone</h4>
											<div>
												<span>
													<a href="tel:0236418473">0236/418.473</a> (Monday - Friday: 09:00-17:00)
												</span>
											</div>
											<span>
												<a href="tel:0748030656">0748/030.656</a> (Monday - Friday: 09:00-17:00)
											</span>
										</div>
									</div>
									<div className="hm-ct-info-wrapper rounded">
										<span className="icon-wrapper rounded-circle d-inline-flex align-items-center justify-content-center">
											<i className="fa-solid fa-clock" />
										</span>
										<div className="info-content mt-4">
											<p>Technical assistance (exclusively by email at office@redhost.ro )</p>
											<div>
												<span>Monday - Friday (09:00-17:00)</span>
											</div>
											<div>
												<span>Urgent: Monday - Sunday 09:00-23:00 00</span>
											</div>
										</div>
									</div>
								</div>
							</div>
						</form>
					</div>
				</div>
			</section>
		</>
	);
}
