/* eslint-disable react/no-unescaped-entities */
"use client";
import AOS from "aos";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function PricingPlans() {
	const [isCurrentPlanMonthly, setIsCurrentPlanMonthly] = useState(false);
	const [isFeature1Expanded, setIsFeature1Expanded] = useState(false);
	const [isFeature2Expanded, setIsFeature2Expanded] = useState(false);
	const [isFeature3Expanded, setIsFeature3Expanded] = useState(false);
	const [isFeature4Expanded, setIsFeature4Expanded] = useState(false);
	const [isFeature5Expanded, setIsFeature5Expanded] = useState(false);

	useEffect(() => {
		AOS.init({
			easing: "ease-in-out",
			duration: 800,
			once: true,
		});
	}, []);

	return (
		<section className="pricing-tab-section minimal-hero pt-0 bg-white position-relative zindex-1 overflow-hidden pricing-details-page">
			<img
				src="/assets/img/shapes/line-red-top.png"
				alt="line shape"
				className="position-absolute right-top d-none d-lg-block"
			/>
			<img src="/assets/img/shapes/line-red.svg" alt="line shape" className="position-absolute left-bottom" />
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-lg-12">
						<div className="section-heading text-center mb-30">
							<div className="tab-switch-btn d-inline-flex align-items-center justify-content-center position-relative mt-4">
								<span className="monthly fw-bold">Monthly Plan</span>
								<input
									type="checkbox"
									className="switch-input position-absolute"
									onChange={() => setIsCurrentPlanMonthly((prevState) => !prevState)}
								/>
								<span className="toggle-switch-btn rounded-pill position-relative"></span>
								<span className="yearly fw-bold">Yearly Plan</span>
							</div>
						</div>
					</div>
					<div className="col-md-4 col-lg-2 equal-width-columns" data-aos="fade-up">
						<div className="pricing-column overflow-hidden position-relative bg-white rounded-10 deep-shadow">
							<h3 className="h5">Promo</h3>
							<span className="pricing-label d-block mt-4">Form only</span>
							{isCurrentPlanMonthly ? (
								<h4 className="h2 mt-2">
									€20<span>/yr</span>
								</h4>
							) : (
								<h4 className="h2 mt-2">
									€1.99<span>/mo</span>
								</h4>
							)}
							<p className="mt-4">Packed with great features, such as oneclick software installs,24/7 support</p>
							<ul className="mt-4">
								<li>
									<span className="me-2">
										<i className="fa-solid fa-dot-circle"></i>
									</span>
									Gazduire 1 domeniu{" "}
								</li>
								<hr />
								<li>
									<span className="me-2">
										<i className="fa-solid fa-dot-circle"></i>
									</span>
									Inode-uri: 50.000{" "}
								</li>
								<li>
									<span className="me-2">
										<i className="fa-solid fa-dot-circle"></i>
									</span>
									Trafic nelimitat{" "}
								</li>
								<li>
									<span className="me-2">
										<i className="fa-solid fa-dot-circle"></i>
									</span>
									5 baze de date{" "}
								</li>
								<li>
									<span className="me-2">
										<i className="fa-solid fa-dot-circle"></i>
									</span>
									10 adrese e-mail{" "}
								</li>
								<li>
									<span className="me-2">
										<i className="fa-solid fa-dot-circle"></i>
									</span>
									Server web: Apache{" "}
								</li>
								<hr />
								{isFeature1Expanded && (
									<>
										<li>
											<span className="me-2">
												<i className="fa-solid fa-dot-circle"></i>
											</span>
											Imunify360 gratuit{" "}
										</li>
										<li>
											<span className="me-2">
												<i className="fa-solid fa-dot-circle"></i>
											</span>
											Certificat SSL gratuit{" "}
										</li>
										<li>
											<span className="me-2">
												<i className="fa-solid fa-dot-circle"></i>
											</span>
											Backup zilnic (30 zile){" "}
										</li>
										<hr />
										<li>
											<span className="me-2">
												<i className="fa-solid fa-dot-circle"></i>
											</span>
											CPU: 100% (3Ghz){" "}
										</li>
										<li>
											<span className="me-2">
												<i className="fa-solid fa-dot-circle"></i>
											</span>
											RAM fizic: 0.5GB{" "}
										</li>
										<li>
											<span className="me-2">
												<i className="fa-solid fa-dot-circle"></i>
											</span>
											Procese EP: 10{" "}
										</li>
										<hr />
										<li>
											<span className="me-2">
												<i className="fa-solid fa-dot-circle"></i>
											</span>
											Viteza / performanta:{" "}
										</li>
										<ul className="d-flex my-3 ">
											<li>
												<i className="fa-solid fa-rocasdket active-rocket"></i>
											</li>
											<li>
												<i className="fa-solid fa-rocket active-rocket"></i>
											</li>
											<li>
												<i className="fa-solid fa-rocket mt-0"></i>
											</li>
											<li>
												<i className="fa-solid fa-rocket mt-0"></i>
											</li>
											<li>
												<i className="fa-solid fa-rocket mt-0"></i>
											</li>
											<li>
												<i className="fa-solid fa-rocket mt-0 "></i>
											</li>
										</ul>
										<li>
											<span className="me-2">
												<i className="fa-solid fa-dot-circle"></i>
											</span>
											Pret / luna:{" "}
										</li>
										<li>
											la plata anuala: <strong>1,75€</strong>
										</li>
										<li>
											{" "}
											la perioada mai mica de 12 luni: <strong> 2,10€</strong>
										</li>
										<li></li>
									</>
								)}
							</ul>
							<button className="expand-btn mt-4" onClick={() => setIsFeature1Expanded((prevState) => !prevState)}>
								<i className="fa-solid fa-angle-down"></i>Expand Feature
							</button>

							<Link href="/domain-reservation" className="template-btn primary-btn w-100 mt-40 text-center">
								Purchase Plan
							</Link>
						</div>
					</div>
					<div className="col-md-4 col-lg-2 equal-width-columns" data-aos="fade-up">
						<div className="pricing-column overflow-hidden position-relative bg-white rounded-10 deep-shadow">
							<h3 className="h5">Start</h3>
							<span className="pricing-label d-block mt-4">Form only</span>
							{isCurrentPlanMonthly ? (
								<h4 className="h2 mt-2">
									€28<span>/yr</span>
								</h4>
							) : (
								<h4 className="h2 mt-2">
									€2.39<span>/mo</span>
								</h4>
							)}
							<p className="mt-4">Packed with great features, such as oneclick software installs,24/7 support</p>
							<ul className="mt-4">
								<li>
									<span className="me-2">
										<i className="fa-solid fa-dot-circle"></i>
									</span>
									Gazduire 3 domeniu{" "}
								</li>
								<hr />
								<li>
									<span className="me-2">
										<i className="fa-solid fa-dot-circle"></i>
									</span>
									Inode-uri: 120.000{" "}
								</li>
								<li>
									<span className="me-2">
										<i className="fa-solid fa-dot-circle"></i>
									</span>
									Trafic nelimitat{" "}
								</li>
								<li>
									<span className="me-2">
										<i className="fa-solid fa-dot-circle"></i>
									</span>
									10 baze de date{" "}
								</li>
								<li>
									<span className="me-2">
										<i className="fa-solid fa-dot-circle"></i>
									</span>
									20 adrese e-mail{" "}
								</li>
								<li>
									<span className="me-2">
										<i className="fa-solid fa-dot-circle"></i>
									</span>
									Server web: LiteSpeed{" "}
								</li>
								<hr />
								{isFeature2Expanded && (
									<>
										<li>
											<span className="me-2">
												<i className="fa-solid fa-dot-circle"></i>
											</span>
											Imunify360 gratuit{" "}
										</li>
										<li>
											<span className="me-2">
												<i className="fa-solid fa-dot-circle"></i>
											</span>
											Certificat SSL gratuit{" "}
										</li>
										<li>
											<span className="me-2">
												<i className="fa-solid fa-dot-circle"></i>
											</span>
											Backup zilnic (30 zile){" "}
										</li>
										<hr />
										<li>
											<span className="me-2">
												<i className="fa-solid fa-dot-circle"></i>
											</span>
											CPU: 150% (4.5Ghz){" "}
										</li>
										<li>
											<span className="me-2">
												<i className="fa-solid fa-dot-circle"></i>
											</span>
											RAM fizic: 2GB{" "}
										</li>
										<li>
											<span className="me-2">
												<i className="fa-solid fa-dot-circle"></i>
											</span>
											Procese EP: 20{" "}
										</li>
										<hr />
										<li>
											<span className="me-2">
												<i className="fa-solid fa-dot-circle"></i>
											</span>
											IP dedicat: 1€/luna{" "}
										</li>
										<li>
											<span className="me-2">
												<i className="fa-solid fa-dot-circle"></i>
											</span>
											<span>Inregistrare RO/EU GRATIS</span>
										</li>
										<li>
											<span className="me-2">
												<i className="fa-solid fa-dot-circle"></i>
											</span>
											(prelungire EU gratuita){" "}
										</li>
										<hr />
										<li>
											<span className="me-2">
												<i className="fa-solid fa-dot-circle"></i>
											</span>
											Viteza / performanta:{" "}
										</li>
										<ul className="d-flex my-3 ">
											<li>
												<i className="fa-solid fa-rocasdket active-rocket"></i>
											</li>
											<li>
												<i className="fa-solid fa-rocket active-rocket"></i>
											</li>
											<li>
												<i className="fa-solid fa-rocket active-rocket mt-0"></i>
											</li>
											<li>
												<i className="fa-solid fa-rocket mt-0"></i>
											</li>
											<li>
												<i className="fa-solid fa-rocket mt-0"></i>
											</li>
											<li>
												<i className="fa-solid fa-rocket mt-0 "></i>
											</li>
										</ul>
										<hr />
										<li>
											<span className="me-2"></span>Discount 20% in primul an: 2,75€ ➘ 2.2€/luna{" "}
										</li>
										<li>
											<span className="me-2">
												<i className="fa-solid fa-dot-circle"></i>
											</span>
											Pret / luna:{" "}
										</li>
										<li> in primul an (plata anuala): 2,20€</li>
										<li> ldin al doilea an (plata anuala): 2,75€ </li>
										<li>oricand (plati mai mici de 12 luni): 3,30€</li>
									</>
								)}
							</ul>
							<button className="expand-btn mt-4 active" onClick={() => setIsFeature2Expanded((prevState) => !prevState)}>
								<i className="fa-solid fa-angle-up"></i>Expand Feature
							</button>
							<Link href="/domain-reservation" className="template-btn primary-btn w-100 mt-40 text-center">
								Purchase Plan
							</Link>
						</div>
					</div>
					<div className="col-md-4 col-lg-2 equal-width-columns" data-aos="fade-up">
						<div className="pricing-column overflow-hidden position-relative bg-white rounded-10 deep-shadow">
							<h3 className="h5">Balance</h3>
							<span className="pricing-label d-block mt-4">Form only</span>
							{isCurrentPlanMonthly ? (
								<h4 className="h2 mt-2">
									€46<span>/yr</span>
								</h4>
							) : (
								<h4 className="h2 mt-2">
									€3.84<span>/mo</span>
								</h4>
							)}
							<p className="mt-4">Packed with great features, such as oneclick software installs,24/7 support</p>
							<ul className="mt-4">
								<li>
									<span className="me-2">
										<i className="fa-solid fa-dot-circle"></i>
									</span>
									Gazduire 6 domeniu{" "}
								</li>
								<hr />
								<li>
									<span className="me-2">
										<i className="fa-solid fa-dot-circle"></i>
									</span>
									Inode-uri: 200.000{" "}
								</li>
								<li>
									<span className="me-2">
										<i className="fa-solid fa-dot-circle"></i>
									</span>
									Trafic nelimitat{" "}
								</li>
								<li>
									<span className="me-2">
										<i className="fa-solid fa-dot-circle"></i>
									</span>
									20 baze de date{" "}
								</li>
								<li>
									<span className="me-2">
										<i className="fa-solid fa-dot-circle"></i>
									</span>
									50 adrese e-mail{" "}
								</li>
								<li>
									<span className="me-2">
										<i className="fa-solid fa-dot-circle"></i>
									</span>
									Server web: LiteSpeed{" "}
								</li>
								<hr />
								{isFeature3Expanded && (
									<>
										<li>
											<span className="me-2">
												<i className="fa-solid fa-dot-circle"></i>
											</span>
											Imunify360 gratuit{" "}
										</li>
										<li>
											<span className="me-2">
												<i className="fa-solid fa-dot-circle"></i>
											</span>
											Certificat SSL gratuit{" "}
										</li>
										<li>
											<span className="me-2">
												<i className="fa-solid fa-dot-circle"></i>
											</span>
											IP dedicat gratuit{" "}
										</li>
										<li>
											<span className="me-2">
												<i className="fa-solid fa-dot-circle"></i>
											</span>
											Acces SSH gratuit{" "}
										</li>
										<hr />
										<li>
											<span className="me-2">
												<i className="fa-solid fa-dot-circle"></i>
											</span>
											CPU: 200% (6Ghz){" "}
										</li>
										<li>
											<span className="me-2">
												<i className="fa-solid fa-dot-circle"></i>
											</span>
											RAM fizic: 3GB{" "}
										</li>
										<li>
											<span className="me-2">
												<i className="fa-solid fa-dot-circle"></i>
											</span>
											Procese EP: 30{" "}
										</li>
										<hr />
										<li>
											<span className="me-2">
												<i className="fa-solid fa-dot-circle"></i>
											</span>
											Domeniu RO/EU/COM GRATIS{" "}
										</li>
										<li>
											<span className="me-2">
												<i className="fa-solid fa-dot-circle"></i>
											</span>
											<span>(+ prelungire gratuita) (prelungire EU gratuita)</span>
										</li>
										<hr />
										<li>
											<span className="me-2">
												<i className="fa-solid fa-dot-circle"></i>
											</span>
											Viteza / performanta:{" "}
										</li>
										<ul className="d-flex my-3 ">
											<li>
												<i className="fa-solid fa-rocasdket active-rocket"></i>
											</li>
											<li>
												<i className="fa-solid fa-rocket active-rocket"></i>
											</li>
											<li>
												<i className="fa-solid fa-rocket active-rocket mt-0"></i>
											</li>
											<li>
												<i className="fa-solid fa-rocket active-rocket mt-0"></i>
											</li>
											<li>
												<i className="fa-solid fa-rocket mt-0"></i>
											</li>
											<li>
												<i className="fa-solid fa-rocket mt-0 "></i>
											</li>
										</ul>
										<hr />
										<li>
											<span className="me-2"></span>Discount <span>30%</span> in primul an: 4,95€ ➘ 3.47€/luna{" "}
										</li>
										<li>
											<span className="me-2">
												<i className="fa-solid fa-dot-circle"></i>
											</span>
											Pret / luna:{" "}
										</li>
										<li>in primul an (plata anuala): 3,47€</li>
										<li> din al doilea an (plata anuala): 4,95€ </li>
										<li>- oricand (plati mai mici de 12 luni): 5,94€</li>
									</>
								)}
							</ul>
							<button className="expand-btn mt-4 active" onClick={() => setIsFeature3Expanded((prevState) => !prevState)}>
								<i className="fa-solid fa-angle-up"></i>Expand Feature
							</button>
							<Link href="/domain-reservation" className="template-btn primary-btn w-100 mt-40 text-center">
								Purchase Plan
							</Link>
						</div>
					</div>
					<div className="col-md-4 col-lg-2 equal-width-columns" data-aos="fade-up">
						<div className="pricing-column overflow-hidden position-relative bg-white rounded-10 deep-shadow">
							<h3 className="h5">Smart</h3>
							<span className="pricing-label d-block mt-4">Form only</span>
							{isCurrentPlanMonthly ? (
								<h4 className="h2 mt-2">
									€64<span>/yr</span>
								</h4>
							) : (
								<h4 className="h2 mt-2">
									€5.39<span>/mo</span>
								</h4>
							)}
							<p className="mt-4">Packed with great features, such as oneclick software installs,24/7 support</p>
							<ul className="mt-4">
								<li>
									<span className="me-2">
										<i className="fa-solid fa-dot-circle"></i>
									</span>
									Gazduire 10 domeniu{" "}
								</li>
								<hr />
								<li>
									<span className="me-2">
										<i className="fa-solid fa-dot-circle"></i>
									</span>
									Inode-uri: 350.000{" "}
								</li>
								<li>
									<span className="me-2">
										<i className="fa-solid fa-dot-circle"></i>
									</span>
									Trafic nelimitat{" "}
								</li>
								<li>
									<span className="me-2">
										<i className="fa-solid fa-dot-circle"></i>
									</span>
									50 baze de date{" "}
								</li>
								<li>
									<span className="me-2">
										<i className="fa-solid fa-dot-circle"></i>
									</span>
									100 adrese e-mail{" "}
								</li>
								<li>
									<span className="me-2">
										<i className="fa-solid fa-dot-circle"></i>
									</span>
									Server web: LiteSpeed{" "}
								</li>
								<hr />
								{isFeature4Expanded && (
									<>
										<li>
											<span className="me-2">
												<i className="fa-solid fa-dot-circle"></i>
											</span>
											Imunify360 gratuit{" "}
										</li>
										<li>
											<span className="me-2">
												<i className="fa-solid fa-dot-circle"></i>
											</span>
											Certificat SSL gratuit{" "}
										</li>
										<li>
											<span className="me-2">
												<i className="fa-solid fa-dot-circle"></i>
											</span>
											IP dedicat gratuit{" "}
										</li>
										<li>
											<span className="me-2">
												<i className="fa-solid fa-dot-circle"></i>
											</span>
											Acces SSH gratuit{" "}
										</li>
										<hr />
										<li>
											<span className="me-2">
												<i className="fa-solid fa-dot-circle"></i>
											</span>
											CPU: 300% (9Ghz){" "}
										</li>
										<li>
											<span className="me-2">
												<i className="fa-solid fa-dot-circle"></i>
											</span>
											RAM fizic: 4GB{" "}
										</li>
										<li>
											<span className="me-2">
												<i className="fa-solid fa-dot-circle"></i>
											</span>
											Procese EP: 40{" "}
										</li>
										<hr />
										<li>
											<span className="me-2">
												<i className="fa-solid fa-dot-circle"></i>
											</span>
											Domeniu RO/COM/EU ORG/NET/INFO GRATIS{" "}
										</li>
										<li>
											<span className="me-2">
												<i className="fa-solid fa-dot-circle"></i>
											</span>
											<span>(+ prelungire gratuita) (prelungire EU gratuita)</span>
										</li>
										<hr />
										<li>
											<span className="me-2">
												<i className="fa-solid fa-dot-circle"></i>
											</span>
											Viteza / performanta:{" "}
										</li>
										<ul className="d-flex my-3 ">
											<li>
												<i className="fa-solid fa-rocasdket active-rocket"></i>
											</li>
											<li>
												<i className="fa-solid fa-rocket active-rocket"></i>
											</li>
											<li>
												<i className="fa-solid fa-rocke active-rockett mt-0"></i>
											</li>
											<li>
												<i className="fa-solid fa-rocket active-rocket mt-0"></i>
											</li>
											<li>
												<i className="fa-solid fa-rocket active-rocket mt-0"></i>
											</li>
											<li>
												<i className="fa-solid fa-rocket mt-0 "></i>
											</li>
										</ul>
										<hr />
										<li>
											<span className="me-2"></span>Discount <span> 50%</span> in primul an: 14,99€ ➘ 7.49€/luna{" "}
										</li>
										<li>
											<span className="me-2">
												<i className="fa-solid fa-dot-circle"></i>
											</span>
											Pret / luna:{" "}
										</li>
										<li>in primul an (plata anuala): 4,95€</li>
										<li> din al doilea an (plata anuala): 8,25€ </li>
										<li>oricand (plati mai mici de 12 luni): 9,90€ </li>
									</>
								)}
							</ul>
							<button className="expand-btn mt-4 active" onClick={() => setIsFeature4Expanded((prevState) => !prevState)}>
								<i className="fa-solid fa-angle-up"></i>Expand Feature
							</button>
							<Link href="/domain-reservation" className="template-btn primary-btn w-100 mt-40 text-center">
								Purchase Plan
							</Link>
						</div>
					</div>
					<div className="col-md-4 col-lg-2 equal-width-columns" data-aos="fade-up">
						<div className="pricing-column overflow-hidden position-relative bg-white rounded-10 deep-shadow">
							<h3 className="h5">Pro</h3>
							<span className="popular-badge position-absolute text-center fw-bold">Most Popular</span>
							<span className="pricing-label d-block mt-4">Form only</span>
							{isCurrentPlanMonthly ? (
								<h4 className="h2 mt-2">
									€99<span>/yr</span>
								</h4>
							) : (
								<h4 className="h2 mt-2">
									€8.25<span>/mo</span>
								</h4>
							)}
							<p className="mt-4">Packed with great features, such as oneclick software installs,24/7 support</p>
							<ul className="mt-4 ">
								<li>
									<span className="me-2">
										<i className="fa-solid fa-dot-circle"></i>
									</span>
									Gazduire 15 domeniu{" "}
								</li>
								<hr />
								<li>
									<span className="me-2">
										<i className="fa-solid fa-dot-circle"></i>
									</span>
									Inode-uri: 700.000{" "}
								</li>
								<li>
									<span className="me-2">
										<i className="fa-solid fa-dot-circle"></i>
									</span>
									Trafic nelimitat{" "}
								</li>
								<li>
									<span className="me-2">
										<i className="fa-solid fa-dot-circle"></i>
									</span>
									100 baze de date{" "}
								</li>
								<li>
									<span className="me-2">
										<i className="fa-solid fa-dot-circle"></i>
									</span>
									200 adrese e-mail{" "}
								</li>
								<li>
									<span className="me-2">
										<i className="fa-solid fa-dot-circle"></i>
									</span>
									Server web: LiteSpeed{" "}
								</li>
								<hr />
								{isFeature5Expanded && (
									<>
										<li>
											<span className="me-2">
												<i className="fa-solid fa-dot-circle"></i>
											</span>
											Imunify360 gratuit{" "}
										</li>
										<li>
											<span className="me-2">
												<i className="fa-solid fa-dot-circle"></i>
											</span>
											Certificat SSL gratuit{" "}
										</li>
										<li>
											<span className="me-2">
												<i className="fa-solid fa-dot-circle"></i>
											</span>
											IP dedicat gratuit{" "}
										</li>
										<li>
											<span className="me-2">
												<i className="fa-solid fa-dot-circle"></i>
											</span>
											Acces SSH gratuit{" "}
										</li>
										<li>
											<span className="me-2">
												<i className="fa-solid fa-dot-circle"></i>
											</span>
											Asistenta prioritara{" "}
										</li>
										<hr />
										<li>
											<span className="me-2">
												<i className="fa-solid fa-dot-circle"></i>
											</span>
											CPU: 400% (12Ghz){" "}
										</li>
										<li>
											<span className="me-2">
												<i className="fa-solid fa-dot-circle"></i>
											</span>
											RAM fizic: 5GB{" "}
										</li>
										<li>
											<span className="me-2">
												<i className="fa-solid fa-dot-circle"></i>
											</span>
											Procese EP: 40{" "}
										</li>
										<hr />
										<li>
											<span className="me-2">
												<i className="fa-solid fa-dot-circle"></i>
											</span>
											Domeniu RO/COM/EU ORG/NET/INFO GRATIS{" "}
										</li>
										<li>
											<span className="me-2">
												<i className="fa-solid fa-dot-circle"></i>
											</span>
											<span>(inclusiv prelungire gratuita)</span>
										</li>
										<hr />
										<li>
											<span className="me-2">
												<i className="fa-solid fa-dot-circle"></i>
											</span>
											Viteza / performanta:{" "}
										</li>
										<ul className="d-flex my-3 ">
											<li>
												<i className="fa-solid fa-rocasdket active-rocket"></i>
											</li>
											<li>
												<i className="fa-solid fa-rocket active-rocket"></i>
											</li>
											<li>
												<i className="fa-solid fa-rocket active-rocket mt-0"></i>
											</li>
											<li>
												<i className="fa-solid fa-rocket active-rocket mt-0"></i>
											</li>
											<li>
												<i className="fa-solid fa-rocket active-rocket mt-0"></i>
											</li>
											<li>
												<i className="fa-solid fa-rocket active-rocket mt-0 "></i>
											</li>
										</ul>
										<hr />
										<li>
											<span className="me-2"></span>Discount <span>50</span> % in primul an: 14,99€ ➘ 7.49€/luna{" "}
										</li>
										<li>
											<span className="me-2">
												<i className="fa-solid fa-dot-circle"></i>
											</span>
											Pret / luna:{" "}
										</li>
										<li>- in primul an (plata anuala): 7,49€ </li>
										<li> - din al doilea an (plata anuala): 14,99€ </li>
										<li>- oricand (plati mai mici de 12 luni): 17,99€ </li>
									</>
								)}
							</ul>
							<button className="expand-btn mt-4 active" onClick={() => setIsFeature5Expanded((prevState) => !prevState)}>
								<i className="fa-solid fa-angle-up"></i>Expand Feature
							</button>
							<Link href="/domain-reservation" className="template-btn primary-btn w-100 mt-40 text-center">
								Purchase Plan
							</Link>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
