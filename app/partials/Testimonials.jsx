"use client";

import React, { useState } from "react";

function Testimonials() {
	const [currentActiveSlide, setCurrentActiveSlide] = useState(1);

	return (
		<section className="hm2-feedback pt-120 pb-120 overflow-hidden">
			<div className="container position-relative zindex-1">
				<img
					src="/assets/img/shapes/feedback-circle.svg"
					alt="circle"
					className="position-absolute feedback-circle d-none d-md-block"
				/>
				<div className="row justify-content-center my-5 text-uppercase">
					<div className="col-xl-12">
						<div className="hm7-title text-center" data-aos="fade-right">
							<h5 className="hm7-subtitle fw-semibold mb-2">
								<span className="me-1">
									<svg width="62" height="12" viewBox="0 0 62 12" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M62 6H8" stroke="#E71F31" strokeWidth="2"></path>
										<path d="M7.86805e-07 6L9 0.803849L9 11.1962L7.86805e-07 6Z" fill="#E71F31"></path>
									</svg>
								</span>
								Testimonials
							</h5>
							<h2 className="mb-0">what our Customers Says about us.</h2>
						</div>
					</div>
				</div>
				<div className="row justify-content-center align-items-center">
					<div className="col-xl-8">
						<div className="hm7-feedback-wrapper mb-4" data-aos="fade-up">
							<div className="hm7-feedback-slider swiper">
								<div className="">
									{currentActiveSlide === 1 && (
										<div className="hm7-feedback-single border rounded d-flex align-items-center bg-white swiper-slide">
											<div className="clients_info text-center flex-shrink-0">
												<h5 className="mt-3 mb-0">NEOVAL SRL Sibiu</h5>
												<span className="fs-sm">client din Ianuarie 2003</span>
											</div>
											<div className="clients_feedback">
												<span className="rating_star">
													<p className="mb-0 mt-3">
														Colaborarea cu RedHost.ro am inceput-o de mai bine de 3 ani de zile, timp in care
														site-ul si afacera noastra www.stocuri.com a crescut de la stadiul de joaca, la o
														afacere serioasa si profitabila care deserveste cateva zeci de mii de firme lunar.
														Deasemenea au crescut si cerintele pentru hosting, in momentul de fata fiind nevoie de o
														solutie profesionala care sa ne asigure stabilitate in fata clientilor nostri. Firma
														ne-a fost alaturi si ne-a sustinut in tot acest timp, cu solutii tehnice adecvate.
														Punctul forte al celor de la RedHost este suportul tehnic ireprosabil, orice problema
														aparuta sau orice solicitare a noastra rezolvandu-se in timp record. Seriozitatea si
														promtitudinea si nu in ultimul rand calitatea serviciilor, celor de la RedHost sunt
														principalele argumente care ne fac sa continuam aceasta colaborare, speram pe un termen
														cat mai lung.
													</p>
												</span>
											</div>
										</div>
									)}
									{currentActiveSlide === 2 && (
										<div className="hm7-feedback-single border rounded d-flex align-items-center bg-white swiper-slide">
											<div className="clients_info text-center flex-shrink-0">
												<h5 className="mt-3 mb-0">Dipson SRL Bucuresti</h5>
												<span className="fs-sm">client din Feb 2008</span>
											</div>
											<div className="clients_feedback">
												<span className="rating_star">
													<p className="mb-0 mt-3">
														RedHost.ro = Profesionalism si cand spun profesionalism ma gandesc la seriozitatea,
														promptitudinea, suportul tehnic si calitatea serviciilor ireprosabile. Sfaturile utile,
														operativitatea si rabdarea le-am gasit aici din momentul in care am inceput colaborarea
														cu dl. Banu. In cateva cuvinte am scapat de grija web hosting-ului.
													</p>
													<hr />
													<div className="d-flex justify-content-start">
														<div className="mt-2">
															<p className="fw-bold m-0">Mircea Serbu</p>
															<p>
																<a href="https://www.stocuri.com/">www.stocuri.com</a>
															</p>
														</div>
													</div>
												</span>
											</div>
										</div>
									)}
									{currentActiveSlide === 3 && (
										<div className="hm7-feedback-single border rounded d-flex align-items-center bg-white swiper-slide">
											<div className="clients_info text-center flex-shrink-0">
												<h5 className="mt-3 mb-0">Dipson SRL Bucuresti</h5>
												<span className="fs-sm">client din Feb 2008</span>
											</div>
											<div className="clients_feedback">
												<span className="rating_star">
													<p className="mb-0 mt-3">
														RedHost.ro = Profesionalism si cand spun profesionalism ma gandesc la seriozitatea,
														promptitudinea, suportul tehnic si calitatea serviciilor ireprosabile. Sfaturile utile,
														operativitatea si rabdarea le-am gasit aici din momentul in care am inceput colaborarea
														cu dl. Banu. In cateva cuvinte am scapat de grija web hosting-ului.
													</p>
													<hr />
													<div className="d-flex justify-content-start">
														<div className="mt-2">
															<p className="fw-bold m-0">Mircea Serbu</p>
															<p>
																<a href="https://www.stocuri.com/">www.stocuri.com</a>
															</p>
														</div>
													</div>
												</span>
											</div>
										</div>
									)}
									{currentActiveSlide === 4 && (
										<div className="hm7-feedback-single border rounded d-flex align-items-center bg-white swiper-slide">
											<div className="clients_info text-center flex-shrink-0">
												<h5 className="mt-3 mb-0">Prof. Andrei Dobre</h5>
												<span className="fs-sm">client din Iunie 2007</span>
											</div>
											<div className="clients_feedback">
												<span className="rating_star">
													<p className="mb-0 mt-3">
														Multumesc site-ului RedHost.ro pentru sustinerea proiectului MateInfo.ro ! In cei 3 ani
														de cand colaboram au dovedit ca sunt adevarati PROFESIONISTI iar acum, prin sprijinul
														lor, suntem cel mai bun site de Matematica din Romania !{" "}
													</p>
													<hr />
													<div className="d-flex justify-content-start">
														<div className="mt-2">
															<p className="fw-bold m-0">Dragos Preda</p>
															<p className="fw-bold m-0">Dipson SRL</p>
															<p>
																<a href="https://www.shop-virtual.ro /">www.shop-virtual.ro </a>
															</p>
														</div>
													</div>
												</span>
											</div>
										</div>
									)}
									{currentActiveSlide === 5 && (
										<div className="hm7-feedback-single border rounded d-flex align-items-center bg-white swiper-slide">
											<div className="clients_info text-center flex-shrink-0">
												<h5 className="mt-3 mb-0">Echipa GeoMobila Srl</h5>
												<span className="fs-sm">client din Ian 2009 </span>
											</div>
											<div className="clients_feedback">
												<span className="rating_star">
													<p className="mb-0 mt-3">
														Cu perseverenta si calitatea serviciilor REDHOST site-ul Geomobila.ro a ajuns pe primul
														loc si cel mai bine vazut site pentru -mobila din pal-.Colaborarea noastra cu echipa
														REDHOST a fost si va ramane una dintre legaturile de baza a afacerii noastre, caci fara
														un site bun, o gazduire buna si o echipa perseverenta in spate nu putem fi cei mai buni.
														Geomobila s.r.l sustine si promoveaza serviciile REDHOST ! Raspunsurile promte la
														inrebarile noastre si accesul non-stop la serviciile dumneavoastra ne aduc satisfactie
														si nu ne face decat sa va uram mult succes si in viitorii ani!
													</p>
													<hr />
													<div className="d-flex justify-content-start">
														<div className="mt-2">
															<p>
																<a href="https://www.geomobila.com/">www.geomobila.com</a>
															</p>
														</div>
													</div>
												</span>
											</div>
										</div>
									)}
									{currentActiveSlide === 6 && (
										<div className="hm7-feedback-single border rounded d-flex align-items-center bg-white swiper-slide">
											<div className="clients_info text-center flex-shrink-0">
												<h5 className="mt-3 mb-0">DANUBE CONTAINER TRANSPORT SRL Galati </h5>
												<span className="fs-sm">client din August 2005 </span>
											</div>
											<div className="clients_feedback">
												<span className="rating_star">
													<p className="mb-0 mt-3">
														Our experiences with RedHost are very good, trustworthy and a quick service. The company
														fullfilled our wishes in a pleasant way and in a short time. Mr. Banu knows the business
														very well and also the service afterwards is very good. In RedHost we have found a
														reliable company to do business with. If you are looking for a webdesigner we can
														recommend this firm.
													</p>
													<hr />
													<div className="d-flex justify-content-start">
														<div className="mt-2">
															<p className="m-0">Helma Zaat</p>
															<p className="m-0">
																<a href="https://www.dacotra.ro/">www.dacotra.ro</a>
															</p>
														</div>
													</div>
												</span>
											</div>
										</div>
									)}
								</div>
							</div>
							{currentActiveSlide > 1 && (
								<button
									className="hm7-feedback-prev hm7-feedback-slide-control"
									onClick={() => setCurrentActiveSlide((prevState) => prevState - 1)}>
									<i className="fas fa-arrow-left"></i>
								</button>
							)}
							{currentActiveSlide < 6 && (
								<button
									className="hm7-feedback-next hm7-feedback-slide-control"
									onClick={() => setCurrentActiveSlide((prevState) => prevState + 1)}>
									<i className="fas fa-arrow-right"></i>
								</button>
							)}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Testimonials;
