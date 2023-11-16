/* eslint-disable react/no-unescaped-entities */
"use client";
import AOS from "aos";
import Link from "next/link";
import React from "react";

export default function OrderHosting() {
	useEffect(() => {
		AOS.init({
			easing: "ease-in-out",
			duration: 800,
			once: true,
		});
	}, []);

	return (
		<>
			<section className="breadcrumb-area bg-primary-gradient">
				<div className="container">
					<div className="breadcrumb-content text-center">
						<h2 className="mb-3">Choose Hosting</h2>
						<nav>
							<ol className="breadcrumb">
								<li className="breadcrumb-item">
									<Link href="/">Home</Link>
								</li>
								<li className="breadcrumb-item active">Domain Reservation</li>
							</ol>
						</nav>
					</div>
				</div>
			</section>
			<section className=" mt-0   pb-40 pt-60 position-relative zindex-1 overflow-hidden" style={{ background: "#fff" }}>
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-lg-8">
							<div className="section-heading text-center">
								<h2>PACHET GAZDUIRE (HOSTING)</h2>
							</div>
						</div>
					</div>
					<div className="pricing-wrapper position-relative zindex-1">
						<div className="row g-4 justify-content-center mt-4">
							<div className="col-lg-8 d-flex ">
								<div className="pricing-column p-3 overflow-hidden position-relative bg-white rounded-10 deep-shadow">
									<div className="row">
										<div className="col-md-6">
											<h3 className="h5 text-dark ">PACHET GAZDUIRE (HOSTING)</h3>
											<h3 className="h5 pt-3 ">blister</h3>
											<span className="pricing-label d-block mt-4">Pret</span>
											<h4 className="h2 mt-2 monthly-price">
												{" "}
												1.75€<span>/luna</span>
											</h4>
											<p className="mt-4 fw-bold ">Price/month:</p>
											<ul className="feature-list my-4" style={{ height: "auto" }}>
												<li>
													<span className="me-2">
														<i className="fa-solid fa-check" />
													</span>
													la plata anuala: <span className="fw-bold">1,99€</span>
												</li>
												<li>
													<span className="me-2">
														<i className="fa-solid fa-check" />
													</span>
													la perioada mai mica de 12 luni:
													<span className="fw-bold">2,39€</span>
												</li>
											</ul>
										</div>
										<div className="col-md-6">
											<ul className="feature-list my-4" style={{ height: "auto" }}>
												<li className="d-flex">
													<span className="me-2">
														<i className="fa-solid fa-rocket" />
													</span>
													Spatiu: 10B
												</li>
												<li className="d-flex">
													<span className="me-2">
														<i className="fa-solid fa-database" />
													</span>
													Conturi e-mail: 10
												</li>
												<li className="d-flex">
													<span className="me-2">
														<i className="fa-solid fa-globe" />
													</span>
													1 domeniu gazduit
												</li>
												<li className="d-flex">
													<span className="me-2">
														<i className="fa-solid fa-gears" />
													</span>
													Recomandat pentru management zona DNS
												</li>
												<li>
													<span className="me-2">
														<i className="fa-solid fa-briefcase" />
													</span>
													trafic foarte redus
												</li>
												<li className="d-flex">
													<span className="me-2">
														<i className="fa-solid fa-network-wired" />
													</span>
													e-mail cu trafic redus Recomandat pentru mici site-uri de prezentare
												</li>
											</ul>
										</div>
									</div>
									<p style={{ fontWeight: 700 }}>
										Payment periods for the hosting package : 12 months (20% discount compared to shorter periods) or 6
										months
									</p>
								</div>
							</div>
							<div className="col-lg-4 d-flex ">
								<div className="pricing-column p-3 overflow-hidden position-relative bg-white rounded-10 deep-shadow w-100">
									<h3 className="h5 text-dark ">COSTUL SERVICIILOR</h3>
									<div className="row mt-3">
										<div className="col-sm-6 col-6">
											<p className="fw-bold text-dark">Servicii</p>
											<p>Gazduire Starter fghf.ro</p>
											<p>Discount gazduire fghf.ro</p>
											<p>Inregistrare RO fghf.ro</p>
											<p>Discount inregistrare fghf.ro</p>
										</div>
										<div className="col-sm-3 col-6">
											<p className="fw-bold text-dark">Perioada</p>
											<p>12 luni</p>
											<p>-</p>
											<p>12 luni</p>
											<p>-</p>
										</div>
										<div className="col-sm-3 col-6">
											<p className="fw-bold text-dark">Cost</p>
											<p>35.88€</p>
											<p>-7.18€</p>
											<p>8.49€</p>
											<p>-8.49€</p>
										</div>
										<div className="col-12">
											<p className="text-dark fw-bold ">Total fara TVA: 28.7€</p>
										</div>
										<div className="col-12">
											<p className="text-dark fw-bold ">Total de plata TVA inclus: 169.66 lei </p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section
				className="hm-contact-area position-relative pb-4 overflow-hidden bg-white zindex-1"
				style={{ background: "#fff" }}>
				<div className="container">
					<div className="hm-contact-form mt-5" id="contact">
						<div className="col-12 pb-3 message-box d-none">
							<div className="alert alert-danger" />
						</div>
						<form action="" method="POST" id="contactForm" className="contact-us-form">
							<div className="row ">
								<div className="col-lg-12">
									<div className="row g-4">
										<div className="col-md-6">
											<p className="fw-bold pb-3 ms-3">ALEGEREA PACHETULUI DE GAZDUIRE (HOSTING)</p>
											<div className="input-field">
												<label htmlFor="name">Pachet hosting ales</label>
												<select
													id="name"
													className="form-select rounded-5"
													style={{
														width: "100%",
														padding: "22px 20px 18px 20px",
														fontSize: 14,
														color: "#656565",
														border: "1px solid #e7e7e7",
														borderRadius: 6,
														backgroundColor: "#fff",
														marginBottom: 10,
														boxShadow: "none",
													}}>
													<option value={1}>blister</option>
													<option value={1}>Stater</option>
													<option value={1}>Balanced</option>
													<option value={1}>SmartPlus</option>
													<option value={1}>ProPlus</option>
													<option value={1}>no hostinh</option>
												</select>
											</div>
										</div>
										<div className="col-md-6">
											<p className="fw-bold pb-3 ms-3">ALEGEREA PERIOADEI DE PLATA</p>
											<div className="input-field">
												<label htmlFor="name">Perioada de plata</label>
												<select
													id="name"
													className="form-select rounded-5"
													style={{
														width: "100%",
														padding: "22px 20px 18px 20px",
														fontSize: 14,
														color: "#656565",
														border: "1px solid #e7e7e7",
														borderRadius: 6,
														backgroundColor: "#fff",
														marginBottom: 10,
														boxShadow: "none",
													}}>
													<option value={1}>Anual</option>
													<option value={1}>Semestrial</option>
												</select>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="submit-btn text-start mt-4">
								<Link href="/checkout" className="template-btn primary-btn border-0 rounded-pill">
									Continuare comanda: ultimul pas
									<i className="fa-solid fa-chevron-right ms-2" />
								</Link>
							</div>
						</form>
					</div>
				</div>
			</section>
		</>
	);
}
