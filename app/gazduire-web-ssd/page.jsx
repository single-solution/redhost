/* eslint-disable react/no-unescaped-entities */
"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import Testimonials from "../partials/Testimonials";
import PricingPlans from "../partials/PricingPlans";
import Link from "next/link";

export default function GazduireWebSSD() {
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
						<h2 className="mb-3">Gazduire Web SSD</h2>
						<nav>
							<ol className="breadcrumb">
								<li className="breadcrumb-item">
									<Link href="/">Home</Link>
								</li>
								<li className="breadcrumb-item active"> Gazduire Web SSD</li>
							</ol>
						</nav>
					</div>
				</div>
			</section>

			<PricingPlans />
			<section className="hm2-service-section pt-80 pb-80 overflow-hidden position-relative zindex-1 bg-white ">
				<img
					src="/assets/img/home2/shape/service-left-circle.svg"
					alt="circle"
					className="hiding-overlaps position-absolute left-top opacity-75"
				/>
				<div className="container">
					<div className="row align-items-center">
						<div className="col-lg-12">
							<div className="service-right" data-aos="fade-up">
								<h4 className="my-4 hm2-title" data-aos="fade-left">
									We're Provide Web Hosting Solutions Agency.
								</h4>
								<p className="mt-3">
									Focus on your business and avoid all the web hosting managed hosting guarantees unmatched performance,
									reliability and choice with 24/7 support that acts as your extended team guarantees unmatched
									performance.
								</p>
								<div className="hm2-service-tab hm2-tab-font-size mt-30 mb-40">
									<ul className="nav nav-tabs de-margin" role="tablist">
										<li>
											<button
												className="active"
												data-bs-toggle="tab"
												data-bs-target="#hosting_service"
												type="button"
												aria-selected="true"
												role="tab">
												Servere & Uptime
											</button>
										</li>
										<li>
											<button
												data-bs-toggle="tab"
												data-bs-target="#hosting_service0"
												type="button"
												aria-selected="false"
												role="tab"
												className=""
												tabIndex="-1">
												Alegere domeniu
											</button>
										</li>
										<li>
											<button
												data-bs-toggle="tab"
												data-bs-target="#hosting_service1"
												type="button"
												aria-selected="false"
												role="tab"
												className=""
												tabIndex="-1">
												Cum comand?
											</button>
										</li>
										<li>
											<button
												data-bs-toggle="tab"
												data-bs-target="#hosting_service2"
												type="button"
												aria-selected="false"
												role="tab"
												className=""
												tabIndex="-1">
												Cum platesc?
											</button>
										</li>
										<li>
											<button
												data-bs-toggle="tab"
												data-bs-target="#hosting_service3"
												type="button"
												aria-selected="false"
												role="tab"
												className=""
												tabIndex="-1">
												Cat dureaza?
											</button>
										</li>
									</ul>
									<div className="tab-content mt-4">
										<div className="tab-pane fade active show p" id="hosting_service" role="tabpanel">
											<h3 className="mt-5" data-aos="fade-right">
												Servere si Uptime
											</h3>
											<div className="tab-content-main py-3 ms-5">
												<h4
													style={{
														background: "linear-gradient(95.45deg, #b11523 35.64%, #E71F31 98.23%)",
														color: "#fff",
														padding: "20px 10px",
														borderRadius: "10px",
													}}
													className="my-4">
													{" "}
													Servere hosting Romania{" "}
												</h4>
												<ul className="border-0">
													<li>
														<strong>Datacenter: </strong> GTS Telecom (centru de date profesional)
													</li>
													<li>
														<strong>Servere:</strong> Dell / HP / SuperMicro
													</li>
													<li>
														<strong> Procesoare:</strong> 2 x Intel Xeon E5-2680 (14 nuclee, 35MB cache){" "}
													</li>
													<li>
														<strong> Memorie: </strong>128GB RAM ECC DDR4
													</li>
													<li>
														<strong> HDD: </strong>Matrice Raid H/W Dell Perc H730+, SSD-uri profesionale
														(DataCenter edition) Intel si Samsung{" "}
													</li>
													<li>
														<strong>Sisteme de operare: </strong> CentOS 7 (64 biti)
													</li>
													<li>
														<strong>Control Panel:</strong> cPanel, LiteSpeed, JetBackup, Imunify360, Installatron,
														Softaculous{" "}
													</li>
													<li>
														<strong>Versiuni:</strong> Apache 2, PHP 5.3 - 8, MariaDB 10.3 / MySQL 5.7{" "}
													</li>
												</ul>
												<div>
													<h4
														style={{
															background: "linear-gradient(95.45deg, #b11523 35.64%, #E71F31 98.23%)",
															color: "#fff",
															padding: "20px 10px",
															borderRadius: "10px",
														}}
														className="my-4">
														Uptime gazduire web{" "}
													</h4>
													<p>
														Pentru a verifica cu ajutorul acestui binecunoscut serviciu de monitorizare, uptime-ul
														serverelor noastre de gazduire web va rugam sa accesati (verificare la fiecare 5 minute){" "}
														<a href="http://www.siteuptime.com/stat.php?UserId=93607" />{" "}
														http://www.siteuptime.com/stat.php?UserId=93607{" "}
													</p>
												</div>
												<h4
													style={{
														background: "linear-gradient(95.45deg, #b11523 35.64%, #E71F31 98.23%)",
														color: "#fff",
														padding: "20px 10px",
														borderRadius: "10px",
													}}
													className="my-4">
													Anunturi lucrari intretinere{" "}
												</h4>
												<p>Nu este planificata nicio lucrare de intretinere la acest moment. </p>
											</div>
										</div>
										<div className="tab-pane fade " id="hosting_service0" role="tabpane">
											<div className="tab-content-main py-3 ms-5">
												<h3 className="mt-2">Cum aleg un domeniu?</h3>
												<ul className="border-0" style={{ listStyle: "disc" }}>
													<li>
														domeniul trebuie sa reprezinte domeniul dvs, produsele, serviciile sau informatiile pe
														care doriti sa le prezentati. Domeniul poate fi si numele firmei/institutiei dvs{" "}
													</li>
													<li>Limitati-va la cel mai scurt si mai usor de retinut domeniu posibil.</li>
												</ul>
												<h4 className="my-4"> Atentie: </h4>
												<ul className="border-0" style={{ listStyle: "disc" }}>
													<li> domeniul nu poate contine spatii, puncte sau liniute de subliniere</li>
													<li>
														{" "}
														domeniul poate avea maxim 63 de caractere (desi in nici un caz nu ar trebui sa va
														apropiati vreodata de o asemenea dimensiune).{" "}
													</li>
												</ul>
												<ul className="border-0" style={{ listStyle: "disc" }}>
													<li>
														Daca atragerea de vizitatori prin motoare de cautare este importanta incercati sa
														introduceti in cadrul domeniului unul sau doua cuvinte cheie (asa cum ar fi ele cautate
														pe Google).{" "}
													</li>
													<li>
														Daca nu va puteti hotara intre 2 variante care se scriu si se citesc similar probabil ar
														trebui sa le luati pe amandoua ca eventualii vizitatori sa nu ajunga din greseala pe alt
														site.{" "}
													</li>
												</ul>
												<h4 className="my-4">Verificarea disponibilitatii </h4>
												<p>
													Dupa ce v-ati hotarat asupra unui pachet de gazduire, dati click pe linkul "Comanda"
													corespunzator acelui pachet. Urmatorul pas va fi sa verificati care din domeniile dorite
													sunt disponibile.{" "}
												</p>
												<h4 className="my-4">Anunturi lucrari intretinere </h4>
												<p>Nu este planificata nicio lucrare de intretinere la acest moment. </p>
												<p className="my-3">
													<strong>
														DUPA CE ATI GASIT UN DOMENIU BUN COMANDATI-L IMEDIAT. POATE FI LUAT IN ORICE CLIPA DE
														CATRE ALTCINEVA.{" "}
													</strong>
												</p>
											</div>
										</div>
										<div className="tab-pane fade " id="hosting_service1" role="tabpanel">
											<ul style={{ border: "none", listStyle: "disc" }}>
												<li>
													Alegeti un <a href="#"> pachet de gazduire</a>.
												</li>
												<li>Cautati un nume de domeniu (adresa web) disponibil.</li>
												<li>Completati datele dumneavoastra.</li>
												<li>
													La pasul urmator vi se va afisa o proforma. Proforma va fi trimisa automat si pe mail insa
													va rugam sa verificati si in Bulk/Spam daca aveti e-mail pe Yahoo sau alti provideri
													gratuiti.{" "}
												</li>
												<li>
													Dupa afisarea proformei, efectuati plata prin una din{" "}
													<Link href="/mod-plata">metodele de plata</Link> specificate.
												</li>
												<li>
													La intrarea banilor in contul nostru vom inregistra domeniul si vom crea contul de gazduire
													in cel mai scurt timp. Domeniile se propaga in mod normal in cateva ore insa in unele
													retele aceasta operatiune poate dura si cateva zile.{" "}
												</li>
												<li>Imediat dupa aceasta operatiune vi se trimit datele de logare pe e-mail.</li>
												<li>
													Ulterior va trimitem prin factura si un contract in 2 exemplare din care va rugam sa ne
													inapoiati unul semnat (si stampilat in cazul firmelor) in termen de 7 zile de la primire.{" "}
												</li>
											</ul>
										</div>
										<div className="tab-pane fade " id="hosting_service2" role="tabpanel">
											<h3>Cum platesc?</h3>
											<h3 className="mt-4">
												Exemplu de completare a foii de depunere -{" "}
												<span style={{ textDecoration: "underline" }}>dati click pe imagine pentru marire</span>
											</h3>
											<div className="text-center my-3 mx-auto" style={{ maxWidth: "520px" }}>
												<img className="w-100" src="./assets/images/depunere-mica-rh.gif" alt="" />
											</div>
											<h3 className="my-4">Daca reprezentati o SOCIETATE COMERCIALA</h3>
											<ul className="border-0" style={{ listStyle: "disc" }}>
												<li>
													prin Ordin de Plata (OP) in contul bancar deschis in GarantiBank Galati specificat pe
													proforma{" "}
												</li>
												<li>
													prin depunere numerar in contul de pe factura proforma la oricare filiala BRD (vedeti
													exemplul de foaie de depunere de la baza paginii). Lista completa a filialelor: <br />
													<a href="http://www.brd.ro/banca/retea-unitati/">http://www.brd.ro/banca/retea-unitati/</a>
												</li>
												<p className="my-2">
													Faceti click pe judetul dvs si vi se va prezenta o lista cu unitatile disponibile (cate 10
													pe o pagina - verificati daca nu sunt mai multe pagini). Pentru orice depunere de numerar
													in contul nostru aveti nevoie de numele firmei noastre, contul, banca, numarul proforma
													(pentru "Detalii operatiune") si CNP-ul dvs.{" "}
												</p>
												<li>prin card</li>
												<p className="my-2">
													Pentru a efectua plata prin card va trebui sa faceti click pe butonul "Plata prin card"
													prezent pe proformele afisate online (proformele pe care le primiti in mail nu contin
													butonul de plata cu cardul). Link-ul pentru afisarea proformei online il gasiti deasupra
													proformei in cazul mailurilor sau la baza proformei in cazul mailurilor de tip text. Nu
													exista un comision de procesare card!{" "}
												</p>
											</ul>
											<h3 className="my-4">Daca sunteti o PERSOANA FIZICA </h3>
											<ul className="border-0" style={{ listStyle: "disc" }}>
												<li>
													Puteti plati cu numerar la oricare filiala BRD (vedeti exemplul de foaie de depunere de la
													baza paginii). Lista completa a filialelor:{" "}
												</li>
												<br />
												<li>
													<a href="http://www.brd.ro/banca/retea-unitati/">http://www.brd.ro/banca/retea-unitati/</a>
												</li>
												<p className="my-2">
													(faceti click pe judetul dvs si vi se va prezenta o lista cu filiale din zona - cate 10 pe
													o pagina; verificati daca nu sunt mai multe pagini). Pentru orice depunere de numerar in
													contul nostru aveti nevoie de numele firmei noastre, contul, banca, numarul proforma
													(pentru "Detalii operatiune") si CNP-ul dvs.{" "}
												</p>
												<li>
													<strong>prin Ordin de Plata (OP)</strong> in contul bancar deschis in GarantiBank Galati
													specificat in proforma (daca aveti cont deschis intr-o banca comerciala){" "}
												</li>
												<p className="my-2">
													Pentru a efectua plata prin card va trebui sa faceti click pe butonul "Plata prin card"
													prezent pe proformele afisate online (proformele pe care le primiti in mail nu contin
													butonul de plata cu cardul). Link-ul pentru afisarea proformei online il gasiti deasupra
													proformei in cazul mailurilor sau la baza proformei in cazul mailurilor de tip text.{" "}
												</p>
												<p>
													<strong>Nu exista un comision de procesare card!</strong>
												</p>
												<li>
													Nu se accepta plata prin mandat postal datorita modului disfunctional in care opereaza
													aceasta institutie (banii sunt transmisi fara niciun fel de informatii legate de plata
													si/sau platitor ceea ce cauzeaza grave disfunctionalitati).{" "}
												</li>
											</ul>
											<h3 className="my-4 text-uppercase">Daca sunteti o INSTITUTIE BUGETARA</h3>
											<p className="my-3">
												Va rugam sa faceti plata in contul RO65 TREZ 3065 069X XX00 9358 deschis in Trezoreria
												Municipiului Galati.{" "}
												<strong>
													Este important sa notificati realizarea platii cat mai curand dupa efectuarea ei
												</strong>{" "}
												.{" "}
											</p>
											<p className="my-3">
												<strong>
													Puteti achizitiona serviciile noastre si prin intermediul Sistemului Electronic de
													Achizitii Publice (SICAP / SEAP).{" "}
												</strong>
											</p>
										</div>
										<div className="tab-pane fade " id="hosting_service3" role="tabpanel">
											<div className="tab-content-main py-3 ms-5">
												<h3 className="mt-2">Cat dureaza activarea serviciilor?</h3>
												<h4 className="my-3"> Plasarea comenzii </h4>
												<p>
													Dupa plasarea comenzii vi se va prezenta la ultimul pas proforma aferenta pe care o puteti
													plati pe loc cu cardul sau ulterior prin depunere numerar la orice agentie BRD sau prin
													Ordin de Plata din orice alta banca.{" "}
												</p>
												<h4 className="my-3"> Operarea comenzii </h4>
												<p>
													Dupa intrarea banilor in contul nostru (aceasta etapa dureaza maxim cateva ore lucratoare
													in cazul platilor prin card sau din BRD si pana la 1-2 zile lucratoare in cazul platilor
													din alte banci), in circa 15-30 minute va vom opera comanda (cu cateva exceptii; spre
													exemplu, nu se opereaza comenzi in afara programului normal de lucru).{" "}
												</p>
												<h4 className="my-3"> Propagare </h4>
												<p>
													De la momentul in care se inregistreaza sau se muta pe alt server un domeniu pana la
													momentul in care aceasta modificare devine activa se scurge un interval de timp numit
													perioada de propagare:{" "}
												</p>
												<ul className="border-0" style={{ listStyle: "disc" }}>
													<li>
														{" "}
														in cazul in care ati comandat un domeniu international acesta va deveni disponibil
														imediat dupa operare sau in maxim cateva ore;{" "}
													</li>
													<li>
														{" "}
														in cazul in care ati comandat un domeniu .ro se va propaga in mod uzual in cateva ore.{" "}
													</li>
												</ul>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<img
					src="/assets/img/home2/shape/service-right-bottom.svg"
					alt="wave"
					className="position-absolute right-bottom hiding-overlaps"
				/>
			</section>

			<Testimonials />
			<section className="h4-app-section  position-relative pb-80 ">
				<div className="container">
					<div className="row g-4">
						<div className="col-xl-12 ">
							<div className="h4-apps-slider swiper pb-5" data-aos-easing="ease-in-out" data-aos="fade-up">
								<div className="swiper-wrapper">
									<div className="swiper-slide ">
										<div className="h4-apps-box deep-shadow bg-white  rounded-2 text-center position-relative zindex-2 ">
											<span className="icon-bg orange-light rounded-circle p-3 d-inline-flex align-items-center justify-content-center">
												<img src="./assets/img/sponsor/sponsor.png" alt="" />
											</span>
											<h6 className="mb-0 mt-20 ">SitePad</h6>
										</div>
									</div>
									<div className="swiper-slide">
										<div className="h4-apps-box deep-shadow bg-white  rounded-2 text-center position-relative zindex-2 ">
											<span className="icon-bg light-blue rounded-circle p-3 d-inline-flex align-items-center justify-content-center">
												<img src="./assets/img/sponsor/sponsor2.png" alt="" />
											</span>
											<h6 className="mb-0 mt-20 ">Epyc Gen3 CPUs</h6>
										</div>
									</div>
									<div className="swiper-slide">
										<div className="h4-apps-box deep-shadow bg-white  rounded-2 text-center position-relative zindex-2 ">
											<span className="icon-bg light-blue rounded-circle p-3 d-inline-flex align-items-center justify-content-center">
												<img src="./assets/img/sponsor/sponsor3.png" alt="" />
											</span>
											<h6 className="mb-0 mt-20 ">NVMe Hosting</h6>
										</div>
									</div>
									<div className="swiper-slide">
										<div className="h4-apps-box deep-shadow bg-white  rounded-2 text-center position-relative zindex-2 ">
											<span className="icon-bg light-blue rounded-circle p-3 d-inline-flex align-items-center justify-content-center">
												<img src="./assets/img/sponsor/sponsor4.png" alt="" />
											</span>
											<h6 className="mb-0 mt-20 ">LiteSpeed</h6>
										</div>
									</div>
									<div className="swiper-slide">
										<div className="h4-apps-box deep-shadow bg-white  rounded-2 text-center position-relative zindex-2 ">
											<span className="icon-bg light-blue rounded-circle p-3 d-inline-flex align-items-center justify-content-center">
												<img src="./assets/img/sponsor/sponsor5.png" alt="" />
											</span>
											<h6 className="mb-0 mt-20 ">JetBackup</h6>
										</div>
									</div>
									<div className="swiper-slide">
										<div className="h4-apps-box deep-shadow bg-white  rounded-2 text-center position-relative zindex-2 ">
											<span className="icon-bg light-blue rounded-circle p-3 d-inline-flex align-items-center justify-content-center">
												<img src="./assets/img/sponsor/sponsor9.png" alt="" />
											</span>
											<h6 className="mb-0 mt-20 ">Cpanel</h6>
										</div>
									</div>
									<div className="swiper-slide">
										<div className="h4-apps-box deep-shadow bg-white  rounded-2 text-center position-relative zindex-2 ">
											<span className="icon-bg light-blue rounded-circle p-3 d-inline-flex align-items-center justify-content-center">
												<img src="./assets/img/sponsor/sponsor10.png" alt="" />
											</span>
											<h6 className="mb-0 mt-20 ">GTS</h6>
										</div>
									</div>
									<div className="swiper-slide">
										<div className="h4-apps-box deep-shadow bg-white  rounded-2 text-center position-relative zindex-2 ">
											<span className="icon-bg light-blue rounded-circle p-3 d-inline-flex align-items-center justify-content-center">
												<img src="./assets/img/sponsor/sponsor11.png" alt="" />
											</span>
											<h6 className="mb-0 mt-20 ">MultiPhp: 4.4-8.2</h6>
										</div>
									</div>
									<div className="swiper-slide">
										<div className="h4-apps-box deep-shadow bg-white  rounded-2 text-center position-relative zindex-2 ">
											<span className="icon-bg light-blue rounded-circle p-3 d-inline-flex align-items-center justify-content-center">
												<img src="./assets/img/sponsor/sponsor12.png" alt="" />
											</span>
											<h6 className="mb-0 mt-20 ">Softaculous</h6>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="sh-control-panel   pt-120 pb-120 position-relative overflow-hidden zindex-1">
				<img src="assets/img/shapes/app-shape.svg" alt="building" className="position-absolute building-shape" />
				<div className="container">
					<div className="row justify-content-center text-capitalize">
						<div className="col-lg-10">
							<div className="sh-section-title text-center" data-aos="fade-up">
								<h2>De ce RedHost? Cel putin 11 motive</h2>
							</div>
						</div>
					</div>
					<div className="row mt-5 align-items-center justify-content-around">
						<div className="col-lg-4" data-aos="fade-right">
							<div className="sh-cp-left position-relative zindex-1 mb-5 mb-lg-0">
								<div className="accordion cp-accordion" id="">
									<div className="accordion-single">
										<div className="accordion-header">
											<a href="#one" data-bs-toggle="collapse" className="collapsed" aria-expanded="false">
												<h6>Reseller &amp; Sub Account</h6>
											</a>
										</div>
										<div className="accordion-collapse collapse" id="one" data-bs-parent="#" style={{}}>
											<div className="accordion-body">
												<p>
													Over 100 of the very best applications, including WordPress, all ready to install with just
													a click of the mouse or the tap of the finger.
												</p>
												<a href="pricing">
													<i className="fa-solid fa-circle-arrow-right" /> Order Now
												</a>
											</div>
										</div>
									</div>
									<div className="accordion-single">
										<div className="accordion-header">
											<a href="#two" data-bs-toggle="collapse" aria-expanded="false" className="collapsed">
												<h6>Secure Shell (SSH) Access</h6>
											</a>
										</div>
										<div className="accordion-collapse collapse" id="two" data-bs-parent="#" style={{}}>
											<div className="accordion-body">
												<p>
													Over 100 of the very best applications, including WordPress, all ready to install with just
													a click of the mouse or the tap of the finger.
												</p>
												<a href="pricing">
													<i className="fa-solid fa-circle-arrow-right" /> Order Now
												</a>
											</div>
										</div>
									</div>
									<div className="accordion-single">
										<div className="accordion-header">
											<a href="#three" data-bs-toggle="collapse" className="collapsed" aria-expanded="false">
												<h6>IIPv6 Support</h6>
											</a>
										</div>
										<div className="accordion-collapse collapse" id="three" data-bs-parent="#">
											<div className="accordion-body">
												<p>
													Over 100 of the very best applications, including WordPress, all ready to install with just
													a click of the mouse or the tap of the finger.
												</p>
												<a href="pricing">
													<i className="fa-solid fa-circle-arrow-right" /> Order Now
												</a>
											</div>
										</div>
									</div>
									<div className="accordion-single">
										<div className="accordion-header">
											<a href="#three" data-bs-toggle="collapse" className="collapsed" aria-expanded="false">
												<h6>Rails, Python, Perl Support</h6>
											</a>
										</div>
										<div className="accordion-collapse collapse" id="three" data-bs-parent="#">
											<div className="accordion-body">
												<p>
													Over 100 of the very best applications, including WordPress, all ready to install with just
													a click of the mouse or the tap of the finger.
												</p>
												<a href="pricing">
													<i className="fa-solid fa-circle-arrow-right" /> Order Now
												</a>
											</div>
										</div>
									</div>
									<div className="accordion-single">
										<div className="accordion-header">
											<a href="#three" data-bs-toggle="collapse" className="collapsed" aria-expanded="false">
												<h6>Unlimited SFTP Users</h6>
											</a>
										</div>
										<div className="accordion-collapse collapse" id="three" data-bs-parent="#">
											<div className="accordion-body">
												<p>
													Over 100 of the very best applications, including WordPress, all ready to install with just
													a click of the mouse or the tap of the finger.
												</p>
												<a href="pricing">
													<i className="fa-solid fa-circle-arrow-right" /> Order Now
												</a>
											</div>
										</div>
									</div>
									<div className="accordion-single">
										<div className="accordion-header">
											<a href="#three" data-bs-toggle="collapse" className="collapsed" aria-expanded="false">
												<h6>Over 16 years of activity</h6>
											</a>
										</div>
										<div className="accordion-collapse collapse" id="three" data-bs-parent="#">
											<div className="accordion-body">
												<p>
													Over 100 of the very best applications, including WordPress, all ready to install with just
													a click of the mouse or the tap of the finger.
												</p>
												<a href="pricing">
													<i className="fa-solid fa-circle-arrow-right" /> Order Now
												</a>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-4" data-aos="fade-left">
							<div className="sh-cp-left position-relative zindex-1 mb-5 mb-lg-0">
								<div className="accordion cp-accordion" id="">
									<div className="accordion-single">
										<div className="accordion-header">
											<a href="#one" data-bs-toggle="collapse" className="collapsed" aria-expanded="false">
												<h6>Free cPanel account transfer</h6>
											</a>
										</div>
										<div className="accordion-collapse collapse" id="one" data-bs-parent="#" style={{}}>
											<div className="accordion-body">
												<p>
													Over 100 of the very best applications, including WordPress, all ready to install with just
													a click of the mouse or the tap of the finger.
												</p>
												<a href="pricing">
													<i className="fa-solid fa-circle-arrow-right" /> Order Now
												</a>
											</div>
										</div>
									</div>
									<div className="accordion-single">
										<div className="accordion-header">
											<a href="#two" data-bs-toggle="collapse" aria-expanded="false" className="collapsed">
												<h6>Professional datacenter (GTS)</h6>
											</a>
										</div>
										<div className="accordion-collapse collapse" id="two" data-bs-parent="#" style={{}}>
											<div className="accordion-body">
												<p>
													Over 100 of the very best applications, including WordPress, all ready to install with just
													a click of the mouse or the tap of the finger.
												</p>
												<a href="pricing">
													<i className="fa-solid fa-circle-arrow-right" /> Order Now
												</a>
											</div>
										</div>
									</div>
									<div className="accordion-single">
										<div className="accordion-header">
											<a href="#three" data-bs-toggle="collapse" className="collapsed" aria-expanded="false">
												<h6>100% SSD hosting</h6>
											</a>
										</div>
										<div className="accordion-collapse collapse" id="three" data-bs-parent="#">
											<div className="accordion-body">
												<p>
													Over 100 of the very best applications, including WordPress, all ready to install with just
													a click of the mouse or the tap of the finger.
												</p>
												<a href="pricing">
													<i className="fa-solid fa-circle-arrow-right" /> Order Now
												</a>
											</div>
										</div>
									</div>
									<div className="accordion-single">
										<div className="accordion-header">
											<a href="#three" data-bs-toggle="collapse" className="collapsed" aria-expanded="false">
												<h6>99.9% real uptime</h6>
											</a>
										</div>
										<div className="accordion-collapse collapse" id="three" data-bs-parent="#">
											<div className="accordion-body">
												<p>
													Over 100 of the very best applications, including WordPress, all ready to install with just
													a click of the mouse or the tap of the finger.
												</p>
												<a href="pricing">
													<i className="fa-solid fa-circle-arrow-right" /> Order Now
												</a>
											</div>
										</div>
									</div>
									<div className="accordion-single">
										<div className="accordion-header">
											<a href="#three" data-bs-toggle="collapse" className="collapsed" aria-expanded="false">
												<h6>Free domains in your name</h6>
											</a>
										</div>
										<div className="accordion-collapse collapse" id="three" data-bs-parent="#">
											<div className="accordion-body">
												<p>
													Over 100 of the very best applications, including WordPress, all ready to install with just
													a click of the mouse or the tap of the finger.
												</p>
												<a href="pricing">
													<i className="fa-solid fa-circle-arrow-right" /> Order Now
												</a>
											</div>
										</div>
									</div>
									<div className="accordion-single">
										<div className="accordion-header">
											<a href="#three" data-bs-toggle="collapse" className="collapsed" aria-expanded="false">
												<h6>Imunify360 protection</h6>
											</a>
										</div>
										<div className="accordion-collapse collapse" id="three" data-bs-parent="#">
											<div className="accordion-body">
												<p>
													Over 100 of the very best applications, including WordPress, all ready to install with just
													a click of the mouse or the tap of the finger.
												</p>
												<a href="pricing">
													<i className="fa-solid fa-circle-arrow-right" /> Order Now
												</a>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="vps-feature vps-card-height ptb-120">
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-lg-10 text-capitalize  " data-aos="fade-right">
							<div className="vps-feature-top text-center">
								<h2 className="mb-40">De ce RedHost? Cel putin 11 motive.</h2>
							</div>
						</div>
					</div>
					<div className="tab-content mt-5">
						<div className="tab-pane active show fade" id="vps_feature" role="tabpanel">
							<div className="row jusity-content-center g-4">
								<div className="col-lg-4 col-md-6" data-aos="fade-up">
									<div className="vps-feature-item bg-white deep-shadow position-relative zindex-1">
										<img
											src="assets/img/shapes/vps-feature-shape.png"
											alt="not found"
											className="position-absolute right-bottom"
										/>
										<div className="vps-ft-item-content mt-30">
											<h5 className="fs-4 pb-20">Gazduire SSD</h5>
											<p>
												RedHost ofera exclusiv gazduire SSD (inclusiv NVMe) care ofera o viteza considerabil crescuta
												fata de gazduirea pe servere cu HDD-uri (indiferent de tipul acestora). Folosim SSD-uri Intel
												si Samsung profesionale (Datacenter edition) in matrice RAID-10 hardware.
											</p>
										</div>
									</div>
								</div>
								<div className="col-lg-4 col-md-6" data-aos="fade-up">
									<div className="vps-feature-item bg-white deep-shadow position-relative zindex-1">
										<img
											src="assets/img/shapes/vps-feature-shape.png"
											alt="not found"
											className="position-absolute right-bottom"
										/>
										<div className="vps-ft-item-content mt-30">
											<h5 className="fs-4 pb-20">Observatii pachete gazduire </h5>
											<p>
												{" "}
												In cazul in care achizitia reprezinta un upgrade, pretul este cel corespunzator perioadei de
												plata mai mica de 12 luni (deci pretul cel mai mare). Pachetul Promo este disponibil doar
												pentru comanda fara operator.
											</p>
										</div>
									</div>
								</div>
								<div className="col-lg-4 col-md-6" data-aos="fade-up">
									<div className="vps-feature-item bg-white deep-shadow position-relative zindex-1">
										<img
											src="assets/img/shapes/vps-feature-shape.png"
											alt="not found"
											className="position-absolute right-bottom"
										/>
										<div className="vps-ft-item-content mt-30">
											<h5 className="fs-4 pb-20">Mutare site la RedHost </h5>
											<p>
												Va oferim mutarea gratuita a contului daca actualul server are cPanel. Putem efectua doar
												copierea ca atare a contului. Nu putem muta un cont in alt cont sau un addon in alt cont. In
												cazul in care actualul server nu are cPanel va rugam sa ne contactati.
											</p>
										</div>
									</div>
								</div>
								<div className="col-lg-4 col-md-6" data-aos="fade-up">
									<div className="vps-feature-item bg-white deep-shadow position-relative zindex-1">
										<img
											src="assets/img/shapes/vps-feature-shape.png"
											alt="not found"
											className="position-absolute right-bottom"
										/>
										<div className="vps-ft-item-content mt-30">
											<h5 className="fs-4 pb-20">Locatie servere </h5>
											<p>
												RedHost ofera <Link href="/gazduire-web-ssd">gazduire RO </Link> in GTS Telecom (DataCenter
												profesional din Bucuresti).
											</p>
										</div>
									</div>
								</div>
								<div className="col-lg-4 col-md-6" data-aos="fade-up">
									<div className="vps-feature-item bg-white deep-shadow position-relative zindex-1">
										<img
											src="assets/img/shapes/vps-feature-shape.png"
											alt="not found"
											className="position-absolute right-bottom"
										/>
										<div className="vps-ft-item-content mt-30">
											<h5 className="fs-4 pb-20">Versiuni software si limite </h5>
											<p>
												PHP 4.4, 5.1, 5.2, 5.3, 5.4, 5.5, 5.6, 7.1, 7.2, 7.3, 7.4, 8 MySQL 5.7, MariaDB 10.3 Limita
												memorie PHP (memory_limit): 256MB Limita upload PHP: 32MB
											</p>
										</div>
									</div>
								</div>
								<div className="col-lg-4 col-md-6 " data-aos="fade-up">
									<div className="vps-feature-item bg-white deep-shadow position-relative zindex-1">
										<img
											src="assets/img/shapes/vps-feature-shape.png"
											alt="not found"
											className="position-absolute right-bottom"
										/>
										<div className="vps-ft-item-content mt-30">
											<h5 className="fs-4 pb-20">Uptime</h5>
											<p>
												99.9% <a href="http://www.siteuptime.com/stat.php?UserId=93607">(vedeti uptime-ul)</a>{" "}
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="bg-white" style={{ backgroundColor: "#F6F9FF", padding: "120px 0px" }}>
				<div className="container">
					<div className="hm10-faq-tab">
						<div className="row">
							<div className="accordion hm2-accordion rounded-2 deep-shadow bg-white" id="accordion_1" data-aos="fade-up">
								<div className="accordion-item">
									<div className="accordion-header">
										<a href="#sh_1" data-bs-toggle="collapse">
											<span
												style={{
													color: "#e71f30",
													position: "absolute",
													top: -1,
													textShadow: "1px 1px 2px #e71f30",
												}}>
												01
											</span>
											<span style={{ marginLeft: 30, marginTop: 30 }}>Domenii</span>
										</a>
									</div>
									<div
										className="accordion-collapse collapse show"
										id="sh_1"
										data-bs-parent="#accordion_1"
										data-aos="fade-right">
										<div className="accordion-body">
											<p className="mb-20">
												LiteSpeed is the best commercial web server. The tests revealed a performance up to 9 times
												higher than other web servers and a PHP processing speed up to 50% higher.
											</p>
											<h6 className="mb-10" style={{ color: "#e71f30" }}>
												Titular domenii
											</h6>
											<p className="mb-10">
												Toate domeniile inregistrate prin RedHost (inclusiv cele obtinute gratuit impreuna cu un cont
												de gazduire), se inregistreaza doar pe numele clientului.
											</p>
											<h6 className="mb-10" style={{ color: "#e71f30" }}>
												Certificate SSL
											</h6>
											<p className="mb-10">
												Conturile de gazduire RedHost ofera in mod gratuit certificate SSL emise de cPanel si semnate
												de catre Comodo. Aceste certificate NU sunt de tip self-signed. Sunt certificate recunoscute
												similare cu certificatele SSL uzuale de la Comodo dar ofera subdomenii in plus. Instalarea
												acestor certificate se face automat de catre cPanel (AutoSSL).
											</p>
											<h6 className="mb-10" style={{ color: "#e71f30" }}>
												IP-uri dedicate
											</h6>
											<p className="mb-10">
												RedHost ofera IP-uri dedicate pentru conturile de gazduire fie contra-cost, fie gratuit (in
												functie de pachetul ales).Alocarea IP-urilor dedicate gratuite se face doar la cerere.
											</p>
											<h6 className="mb-10" style={{ color: "#e71f30" }}>
												Domenii gratuite
											</h6>
											<p className="mb-20">
												RedHost ofera domenii gratuite (domeniile oferite gratuit sunt identice cu cele platite) la
												pachetele de gazduire (cu exceptia pachetului Promo) platite anual.
											</p>
											<div id="hide_display" className="d-none">
												<h4 className="mb-10">Termene si conditii:</h4>
												<ul>
													<li>pNu oferim domenii gratuite la upgrade-uri.</li>
													<li>
														Domeniile gratuite se ofera doar impreuna cu pachetele de gazduire platite pentru 12
														luni
													</li>
													<li>
														Oferim un domeniu gratuit la alegere: RO/EU/COM pentru pachetul Balance,
														RO/EU/COM/NET/ORG/BIZ pentru Smart sau RO/EU/COM/NET/ORG/BIZ/INFO pentru Pro in fiecare
														an de gazduire.
													</li>
													<li>
														Domeniul gratuit se ofera doar impreuna cu pachetul de gazduire aferent (pe aceeasi
														factura si contract deci nu ulterior) si acolo unde este in mod obiectiv posibil, doar
														pentru domeniul principal al contului de gazduire.
													</li>
													<li>
														Domeniul gratuit va fi oferit la prelungire doar daca contul de gazduire se achita in
														termenul de plata.
													</li>
													<li>
														Domeniul international oferit gratuit va fi gazduit pe perioada de gratuitate doar pe
														serverele RedHost in contul de gazduire impreuna cu care a fost primit gratuit. Pentru
														achizitionarea de domenii suplimentare accesati oferta de inregistrare domenii.
													</li>
												</ul>
											</div>
											<button
												className="template-btn primary-btn border-0 mt-3 text-center"
												// onClick="toggleDisplay();"
											>
												Read More
											</button>
										</div>
									</div>
								</div>
								<div className="accordion-item">
									<div className="accordion-header">
										<a href="#sh_2" data-bs-toggle="collapse">
											<span
												style={{
													color: "#e71f30",
													position: "absolute",
													top: -1,
													textShadow: "1px 1px 2px #e71f30",
												}}>
												02
											</span>
											<span style={{ marginLeft: 30, marginTop: 30 }}>E-mail</span>
										</a>
									</div>
									<div className="accordion-collapse collapse" id="sh_2" data-bs-parent="#accordion_1">
										<div className="accordion-body">
											<p className="mb-20">
												JetBackup este solutia profesionala de backup folosita de RedHost. Backup-ul se face zilnic
												iar fisierele pot fi restaurate direct din cPanel.
											</p>
											<h6 className="mb-10" style={{ color: "#e71f30" }}>
												POP3, IMAP, SMTP, webmail
											</h6>
											<p className="mb-10">DA</p>
											<h6 className="mb-10" style={{ color: "#e71f30" }}>
												Conexiuni IMAP simultane
											</h6>
											<p className="mb-10">
												Conturile de gazduire shared pot utiliza simultan maxim 20 de conexiuni IMAP. Pentru conturile
												care depasesc acest numar de conexiuni simultane, putem oferi doar gazduire personalizata in
												functie de numarul de conexiuni IMAP mediu utilizat precum si de spatiul contractat.
											</p>
											<h6 className="mb-10" style={{ color: "#e71f30" }}>
												Anti SPAM
											</h6>
											<p className="mb-10">SpamAssassin</p>
											<h6 className="mb-10" style={{ color: "#e71f30" }}>
												Cota mailing
											</h6>
											<p className="mb-10">Conturile de gazduire au o limita de trimitere de 250 de mailuri pe ora.</p>
											<h6 className="mb-10" style={{ color: "#e71f30" }}>
												Forwardere
											</h6>
											<p className="mb-10">
												Se ofera un numar de forwardere egal cu numarul conturilor de mail. Nu este permisa setarea de
												forwardere catre servicii externe de mail (Yahoo, GMail) pentru ca aceste servicii vor vedea
												SPAM-urile pe care le primiti pe adresele de pe serverul nostru si forwardate automat ca fiind
												spam-uri trimise de pe domeniul Dvs si de pe serverul nostru. Este deci necesar ca
												forwarding-ul sa se faca doar catre adrese interne.
											</p>
										</div>
									</div>
								</div>
								<div className="accordion-item">
									<div className="accordion-header">
										<a href="#sh_3" data-bs-toggle="collapse" style={{ position: "relative" }}>
											<span
												style={{
													color: "#e71f30",
													position: "absolute",
													top: -1,
													textShadow: "1px 1px 2px #e71f30",
												}}>
												03
											</span>
											<span style={{ marginLeft: 30, marginTop: 30 }}>Management</span>
										</a>
									</div>
									<div className="accordion-collapse collapse" id="sh_3" data-bs-parent="#accordion_1">
										<div className="accordion-body">
											<p className="mb-20">
												CloudLinux este un kernel special destinat serverelor de hosting care asigura o izolare mult
												mai buna pentru site-urile gazduite. Astfel niciun site nu va monopoliza resursele serverului.
												Obtinem deci o performanta sporita si un uptime superior.
											</p>
											<h6 className="mb-10" style={{ color: "#e71f30" }}>
												Administrare
											</h6>
											<p className="mb-10">
												Conturile de <span style={{ color: "#e71f30" }}>gazduire web</span> sunt administrate din
												cPanel.
											</p>
											<h6 className="mb-10" style={{ color: "#e71f30" }}>
												Publicare site
											</h6>
											<p className="mb-10">
												Incarcarea site-ului pe contul de gazduire web se face prin SFTP sau FTPS.
											</p>
											<h6 className="mb-10" style={{ color: "#e71f30" }}>
												Acces SSH
											</h6>
											<p className="mb-10">
												Oferim acces SSH doar in cazurile in care este necesar si doar pentru pachetele Balance, Smart
												si Pro. Accesul SSH oferit este de tip JailedShell si nu se activeaza implicit. Se activeaza
												doar la cerere.
											</p>
											<h6 className="mb-10" style={{ color: "#e71f30" }}>
												Installatron (sute de aplicatii)
											</h6>
											<p className="mb-10">
												Puteti instala instantaneu: Drupal, Joomla, Magento, osCommerce, phpBB, SMF, Wordpress etc (in
												total sute de scripturi populare).
											</p>
											<h6 className="mb-10" style={{ color: "#e71f30" }}>
												.htaccess
											</h6>
											<p className="mb-10">Conturile de hosting ofera suport .htaccess.</p>
											<h6 className="mb-10" style={{ color: "#e71f30" }}>
												Cronjob
											</h6>
											<p className="mb-10">PDA (odata la 15 minute sau mai rar)</p>
											<h6 className="mb-10" style={{ color: "#e71f30" }}>
												Backup
											</h6>
											<p className="mb-10">Backup JetBackup zilnic, fisiere si baze de date, ultimele 15 zile</p>
											<h6 className="mb-10" style={{ color: "#e71f30" }}>
												Installatron (sute de aplicatii)
											</h6>
											<p className="mb-10">
												Puteti instala instantaneu: Drupal, Joomla, Magento, osCommerce, phpBB, SMF, Wordpress etc (in
												total sute de scripturi populare).
											</p>
											<h6 className="mb-10" style={{ color: "#e71f30" }}>
												.htaccess
											</h6>
											<p className="mb-10">Conturile de hosting ofera suport .htaccess.</p>
											<h6 className="mb-10" style={{ color: "#e71f30" }}>
												SICAP
											</h6>
											<p className="mb-10">Firma noastra este inscrisa in Sistemul Electronic de Achizitii Publice.</p>
											<h6 className="mb-10" style={{ color: "#e71f30" }}>
												Upgrade
											</h6>
											<p className="mb-10">
												Pentru upgrade-ul pachetului de gazduire web se plateste diferenta de pret raportata la
												perioada ramasa din contractul actual.
											</p>
											<h6 className="mb-10" style={{ color: "#e71f30" }}>
												Returnare plata in primele 30 de zile
											</h6>
											<p className="mb-10">
												In cazul unor nemultumiri ne puteti solicita restituirea sumei platite pe gazduire (se scad
												insa costurile domeniilor inregistrate pe care le veti pastra). Garantia de returnare se poate
												invoca doar in primele 30 de zile din prima perioada contractuala (nu se ofera cele 30 de zile
												de garantie si pentru prelungiri sau reluari de contract).
											</p>
											<h6 className="mb-10" style={{ color: "#e71f30" }}>
												TVA
											</h6>
											<p className="mb-10">Preturile specificate pe site-ul www.redhost.ro nu includ TVA.</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
