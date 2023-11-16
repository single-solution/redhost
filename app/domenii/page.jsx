/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useEffect } from "react";
import AOS from "aos";

export default function Domenii() {
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
						<h2 className="mb-3">Domenii</h2>
						<nav>
							<ol className="breadcrumb">
								<li className="breadcrumb-item">
									<a href="index.php">Home</a>
								</li>
								<li className="breadcrumb-item active">Domenii</li>
							</ol>
						</nav>
					</div>
				</div>
			</section>
			<section className="dm-about-section ptb-120 position-relative zindex-1 overflow-hidden">
				<img src="assets/img/shapes/dm-about-bg.png" alt="shape" className="position-absolute right-bottom" />
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-lg-6">
							<div className="section-title text-center">
								<h2>Inregistrare Domenii</h2>
							</div>
						</div>
					</div>
					<div className="row mt-5 align-items-center justify-content-between">
						<div className="col-lg-6" data-aos="fade-right">
							<div className="dm-about-img">
								<img src="assets/img/about.jpg.svg" alt="man" className="img-fluid" />
							</div>
						</div>
						<div className="col-lg-6" data-aos="fade-left">
							<div className="dm-about-content mt-40 mt-lg-0">
								<h3 className="mb-4">Domenii gratuite via RedHost</h3>
								<p>
									Inregistrarea gratuita de domeniu este un beneficiu pe care-l primiti in mod automat cu pachetele de
									gazduire RedHost platite pe 12 luni. Este insa important sa plasati comanda pentru un domeniu liber.
								</p>
								<ul className=" mb-2 feature-list">
									<li>
										<b>1.</b> La Start va oferim gratuit la alegere pe numele dvs un domeniu .ro sau .eu in primul an.
									</li>
									<li>
										<b>2.</b> La Balance va oferim gratuit la alegere un domeniu .ro, .eu, .com pe numele dvs pe
										perioada intregii colaborari.
									</li>
									<li>
										<b>3.</b> La Smart si Pro va oferim gratuit la alegere un domeniu .ro, .eu, .com, net, .org, .biz
										(inclusiv .info la Pro), pe numele dvs pe perioada intregii colaborari.
									</li>
								</ul>
								<p className="mb-2">
									Toate aceste pachete sunt prezentate in detaliu in pagina de <a href="index.php">gazduire web</a>
								</p>
								<p className="mb-0">
									<b>
										TOATE INREGISTRARILE DE DOMENII CUMPARATE DE LA FIRMA NOASTRA SE FAC DIRECT PE NUMELE CLIENTULUI.
										DOMENIILE POT FI TRANSFERATE ORICAND PE ORICE ALT SERVER DE GAZDUIRE.
									</b>
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="cd-plan-table ds-bg pb-120 pt-120">
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-lg-7">
							<div className="cd-title text-center" data-aos="fade-right">
								<h2 className="mb-3">Preturi inregistrare domenii</h2>
								<p className="mb-0">Preturi valabile incepand cu 14.02.2023</p>
							</div>
						</div>
					</div>
					<div
						className="col-sm-12 my-4 p-4 bg-white box-shadow-border"
						style={{ overflowX: "scroll" }}
						id="show_table"
						data-aos="fade-up">
						<table
							id="fixed-header"
							className="table m-0 rs-head-table  dt-responsive nowrap  align-middle dataTable no-footer dtr-inline"
							style={{ width: "100%" }}
							aria-describedby="fixed-header_info">
							<thead>
								<tr style={{ backgroundColor: "whitesmoke" }}>
									<th className="border-radius-top-bottom-start">Extensie</th>
									<th>
										<span className="plan-title">
											Pret domeniu <span style={{ color: "red" }}>achizitionat cu gazduire 12 luni*</span>
										</span>
									</th>
									<th>
										<span className="plan-title">
											Pret domeniu <span style={{ color: "red" }}>achizitionat cu gazduire</span>
											<span style={{ color: "red" }}>&lt; 12 luni**</span>
										</span>
									</th>
									<th>
										<span className="plan-title">
											Pret domeniu <span style={{ color: "red" }}>fara gazduire ***</span>
										</span>
									</th>
									<th>
										<span className="plan-title">Perioada valabilitate</span>
									</th>
									<th className="border-radius-top-bottom-end">
										<span className="plan-title">Scoatere din carantina**</span>
									</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>Comanda domeniu .RO</td>
									<td style={{ minWidth: 300 }}>
										<strong>
											GRATIS: cu gazduire Balance+
											<br />
											GRATIS: cu gazduire Start (1 an)
											<br />
											6.99€/an: cu gazduire Promo <br />
										</strong>
									</td>
									<td style={{ minWidth: 280 }}>
										<strong>6.99€/an</strong>
									</td>
									<td style={{ minWidth: 180 }}>
										{" "}
										<strong>8.49€/an</strong>
									</td>
									<td>
										<strong>1 an</strong>
									</td>
									<td>
										<strong>-</strong>
									</td>
								</tr>
								<tr>
									<td>Comanda domeniu .EU</td>
									<td>
										<strong>
											GRATIS: cu gazduire Start+
											<br />
											5.49€/an: cu gazduire Promo
										</strong>
									</td>
									<td>
										<strong>5.49€</strong>
									</td>
									<td>
										<strong>6.99€</strong>
									</td>
									<td>
										<strong>1 an</strong>
									</td>
									<td>
										<strong>45€</strong>
									</td>
								</tr>
								<tr>
									<td>Comanda domeniu .COM</td>
									<td>
										<strong>
											GRATIS: cu gazduire Balance+
											<br />
											9.99€/an: cu gazduire Promo-Start
										</strong>
									</td>
									<td>
										<strong>9.99€</strong>
									</td>
									<td>
										<strong>11.99€</strong>
									</td>
									<td>
										<strong>1 an</strong>
									</td>
									<td>
										<strong>80€</strong>
									</td>
								</tr>
								<tr>
									<td>Comanda domeniu .NET</td>
									<td>
										<strong>
											GRATIS: cu gazduire Smart+
											<br />
											11.99€ cu gazduire Promo - Balance
										</strong>
									</td>
									<td>
										<strong>11.99€</strong>
									</td>
									<td>
										<strong>12.99€</strong>
									</td>
									<td>
										<strong>1 an</strong>
									</td>
									<td>
										<strong>80€</strong>
									</td>
								</tr>
								<tr>
									<td>Comanda domeniu .ORG</td>
									<td>
										<strong>
											GRATIS: cu gazduire Smart+
											<br />
											11.49€ cu gazduire Promo - Balance
										</strong>
									</td>
									<td>
										<strong>11.49€</strong>
									</td>
									<td>
										<strong>12.99€</strong>
									</td>
									<td>
										<strong>1 an</strong>
									</td>
									<td>
										<strong>80€</strong>
									</td>
								</tr>
								<tr>
									<td>Comanda domeniu .INFO</td>
									<td>
										<strong>
											GRATIS cu gazduire Pro
											<br />
											16.99€ cu gazduire Promo - Smart
										</strong>
									</td>
									<td>
										<strong>16.99€</strong>
									</td>
									<td>
										<strong>18.99€</strong>
									</td>
									<td>
										<strong>1 an</strong>
									</td>
									<td>
										<strong>80€</strong>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</section>
			<section className="dm-support bg-primary-gradient">
				<div className="container">
					<div className="row justify-content-between">
						<div className="col-xl-12 col-lg-12 align-self-center">
							<div className="dm-support-left">
								<h2 className="mb-30">
									Need Some Help?
									<br />
									Call our Award-Winning Support Team.
								</h2>
								<p className="mb-30" style={{ textAlign: "center", fontSize: 20 }} data-aos="fade-up">
									Toate notatiile cu semnul "+" de mai sus semnifica faptul ca beneficiul este disponibil pentru acel
									pachet si toate pachetele superioare.
									<br />
									* Preturi pentru un singur domeniu achizitionat impreuna cu un pachet de gazduire anual (doar pe
									aceeasi factura, un singur domeniu gratuit).
									<br />
									** Preturi pentru domenii achizitionate cu oricare dintre pachetele de gazduire pe o perioada mai mica
									de 12 luni sau perioade de 12+ luni in cazul in care nu exista o oferta specifica in coloana din stanga
									sau pentru domenii suplimentare pe langa cel gratuit conform ofertei (doar pe aceeasi factura).
									<br />
									*** Preturi pentru domenii achizitionate fara gazduire RedHost pe aceeasi factura.
								</p>
								<div className="dm-support-info">
									<a href="tel:+88987456456" className="me-4">
										<i className="fa-solid fa-square-phone" />
										+88 0145 789 456
									</a>
									<a href="mailto:someone@mail.com">
										<i className="fa-brands fa-rocketchat" />
										Chat Now.
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="dm-faq-section ptb-120 position-relative zindex-1" style={{ backgroundColor: "#fff" }}>
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-lg-7">
							<div className="section-title text-center" data-aos="fade-down">
								<h2>Precizari importante</h2>
							</div>
						</div>
					</div>
					<div className="row mt-5">
						<div className="col-lg-12">
							<div className="dm-faq-left">
								<div className="accordion dm-accordion" id="dm_accordion">
									<div className="accordion-item" data-aos="fade-down">
										<div className="accordion-header">
											<a href="#dm_item_one" data-bs-toggle="collapse">
												Introducere taxa anuala de mentenanta pentru toate domeniile .ro
											</a>
										</div>
										<div className="accordion-collapse" id="dm_item_one" data-bs-parent="#dm_accordion">
											<div className="accordion-body">
												<p className="mb-0">
													Domeniile .ro sunt administrate prin lege* de catre{" "}
													<b>Institutul Național de Cercetare Dezvoltare în Informatica (ICI-Bucuresti)</b>. Pe
													parcursul anului 2017, <b>Ministerul Comunicatiilor si Societatii Informationale (MCSI)</b>{" "}
													a mandatat <b>ICI Bucuresti</b> sa administreze un program de consultare publica pentru
													alinierea domeniilor .ro la practica defacto existenta in intreaga industrie online
													internationala si pentru asigurarea unui cadru normal de administrare pentru domeniile .ro.
													Ca urmare a consultarii publice, ICI Bucuresti a introdus incepand cu 1 Martie 2018 taxa
													anuala de mentenanta pentru toate domeniile .ro.
													<br />
													<br />
													<b>Precizari:</b>
													<br />
													<b>1. </b>Incepand cu 1 Martie 2018, toate domeniile .ro se inregistreaza sau se prelungesc
													pe o perioada cuprinsa intre 1 si 10 ani.
													<br />
													<b>2. </b>Domeniile .ro inregistrate inainte de 1 Martie 2018, vor fi valabile minim 5 ani
													de la momentul inregistrarii.
													<br />
													<b>3. </b>Domeniile mai vechi de 5 ani la data de 1 Martie 2018, se vor prelungi in
													perioada cuprinsa intre 1 Martie 2018 si 30 Noiembrie 2018.
													<br />
													<b>4. </b>Domeniile .ro vor incepe sa expire pe 1 Iunie 2018 pana pe 30 Noiembrie 2018 in
													functie de luna in care au fost inregistrate.
													<br />
													<b>5. </b>Puteti afla data de expirare pentru orice domeniu .ro pe site-ul ROTLD la adresa:
													.<br />
													<b>6. </b>Este esential sa inventariati toate domeniile .ro de care dispuneti si asupra
													carora doriti sa va pastrati drepturile de utilizare dupa data de expirare (puteti consulta
													data de expirare la ). Dupa expirare, domeniile .ro vor intra intr-o perioada de gratie de
													90 zile, perioada in care vor fi indisponibile dar in care titularul de pana atunci isi
													pastreaza drepturile de prelungire. Dupa perioada de gratie, domeniul este sters automat si
													poate fi reinregistrat de catre orice alt registrant.
													<br />
													<b>7. </b>RedHost.ro va oferi celor interesati servicii de prelungire pentru domeniile .ro
													incepand cu data de 12 Martie 2018.
													<br />
													<br />* HG 1621 din 23.12.2003, completata prin OUG nr. 22 din 11 martie 2009, art. 2
													litera A alin (1) lit. (o)
												</p>
											</div>
										</div>
									</div>
									<div className="accordion-item" data-aos="fade-down">
										<div className="accordion-header">
											<a href="#dm_item_seven" data-bs-toggle="collapse">
												Atat registrul (autoritatea care reglementeaza un anumit tip de domeniu)
											</a>
										</div>
										<div className="accordion-collapse collapse " id="dm_item_seven" data-bs-parent="#dm_accordion">
											<div className="accordion-body">
												<p className="mb-0">
													Atat registrul (autoritatea care reglementeaza un anumit tip de domeniu) cat si registrarul
													(entitatea care administreaza procesul de inregistrare) pot solicita de la titularul
													domeniului documente care sa probeze faptul ca titularul are dreptul sa inregistreze un
													anumit nume de domeniu (spre exemplu daca are un acord incheiat cu marca/marcile pe care le
													promoveaza) si/sau ca a solicitat inregistrarea cu buna credinta. Aceasta verificare poate
													fi facuta oricand in perioada de existenta a domeniului si in unele cazuri pe perioada de
													verificare domeniul poate fi suspendat pana la primirea documentelor solicitate plus un
													timp necesar pentru procesare. Firma noastra nu joaca niciun rol in acest proces si nu are
													abilitatea de a suspenda sau reactiva domeniile suspendate. Este necesar ca beneficiarul sa
													dea curs solicitarilor venite de la registrar sau registru. Firma noastra poate insa sa
													verifice in cazul in care ne solicitati acest lucru daca o solicitare venita prin mail este
													una legitima.
												</p>
											</div>
										</div>
									</div>
									<div className="accordion-item" data-aos="fade-down">
										<div className="accordion-header">
											<a href="#dm_item_two" data-bs-toggle="collapse">
												Pentru obtinerea unui domeniu
											</a>
										</div>
										<div className="accordion-collapse collapse " id="dm_item_two" data-bs-parent="#dm_accordion">
											<div className="accordion-body">
												<p className="mb-0">
													Pentru obtinerea unui domeniu nu este suficient sa efectuati plata. O serie de extensii (de
													exemplu .com si .net) necesita validarea adresei de mail apartinand titularului. Daca
													procedura de validare (veti primi un mail de la registrar cu un link de validare - este
													suficient sa-l accesati) nu este indeplinita cu succes, domeniul nu poate fi activat. Este
													deci extrem de important ca adresa de mail declarata la inregistrare sa fie corecta si
													accesibila.
												</p>
											</div>
										</div>
									</div>
									<div className="accordion-item" data-aos="fade-down">
										<div className="accordion-header">
											<a href="#dm_item_three" data-bs-toggle="collapse">
												Pentru transferul unui domeniu
											</a>
										</div>
										<div className="accordion-collapse collapse " id="dm_item_three" data-bs-parent="#dm_accordion">
											<div className="accordion-body">
												<p className="mb-0">
													Pentru transferul unui domeniu .ro pe alt titular (operatiune cunoscuta sub numele de
													trade) se percepe o taxa de 10.99 Euro + TVA si aceasta include un an de valabilitate.
													Conform regulilor ROTLD, Procedura de transfer va reseta valabilitatea domeniului de la
													data la care transferul se finalizeaza si include un an de valabilitate. Ca atare este
													important sa nu faceti mai intai o prelungire si imediat dupa aceea un transfer pentru ca
													se pierde perioada prelungita anterior.
												</p>
											</div>
										</div>
									</div>
									<div className="accordion-item " data-aos="fade-down">
										<div className="accordion-header accordion-d-none-icon">
											<a href="#dm_item_four">
												In cazul in care plata domeniului se face dupa expirare dar inainte de intrarea in carantina,
												vom percepe o taxa de 10 Euro + TVA / domeniu.
											</a>
										</div>
									</div>
									<div className="accordion-item " data-aos="fade-down">
										<div className="accordion-header accordion-d-none-icon">
											<a href="#dm_item_four">
												In cazul in care plata domeniului se face dupa intrarea in carantina (domeniile .eu intra in
												carantina imediat dupa expirare), se va percepe taxa de scoatere din carantina din tabelul de
												mai sus.
											</a>
										</div>
									</div>
									<div className="accordion-item " data-aos="fade-down">
										<div className="accordion-header accordion-d-none-icon">
											<a href="#dm_item_four">
												Notiunea de rezervari domenii este identica cu notiunea de inregistrare. Nu se poate face o
												rezervare de domeniu in sensul obisnuit al cuvantului. Rezervarea domeniilor se face exclusiv
												dupa confirmarea platii pe extrasul nostru bancar.
											</a>
										</div>
									</div>
									<div className="accordion-item " data-aos="fade-down">
										<div className="accordion-header accordion-d-none-icon">
											<a href="#dm_item_four">
												Pentru mentinerea domeniilor dupa perioada initiala, clientul trebuie sa comande si sa
												plateasca o noua perioada inainte de expirarea perioadei curente.
											</a>
										</div>
									</div>
									<div className="accordion-item " data-aos="fade-down">
										<div className="accordion-header accordion-d-none-icon">
											<a href="#dm_item_four">
												Se ofera un singur domeniu gratuit pentru fiecare cont de gazduire (conform ofertei de
												gazduire web).
											</a>
										</div>
									</div>
									<div className="accordion-item " data-aos="fade-down">
										<div className="accordion-header accordion-d-none-icon">
											<a href="#dm_item_four">Preturile specificate pe site-ul www.redhost.ro nu includ TVA.</a>
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
