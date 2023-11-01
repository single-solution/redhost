/* eslint-disable react/no-unescaped-entities */
const Checkout = () => {
	return (
		<>
			<section className="breadcrumb-area bg-primary-gradient">
				<div className="container">
					<div className="breadcrumb-content text-center">
						<h2 className="mb-3">Datele Dumneavoastra</h2>
						<nav>
							<ol className="breadcrumb">
								<li className="breadcrumb-item">
									<a href="index.php">Home</a>
								</li>
								<li className="breadcrumb-item active">Datele Dumneavoastra</li>
							</ol>
						</nav>
					</div>
				</div>
			</section>

			<section className="hm-contact-area position-relative pt-60 pb-120 overflow-hidden bg-white zindex-1">
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-lg-8">
							<div className="ct-section-title text-center">
								<h2>DATELE DUMNEAVOASTRA</h2>
							</div>
						</div>
					</div>
					<div className="hm-contact-form mt-5" id="contact">
						<div className="col-12 pb-3 message-box d-none">
							<div className="alert alert-danger"></div>
						</div>
						<form action="" method="POST" id="contactForm" className="contact-us-form">
							<div className="row justify-content-center">
								<div className="col-lg-12">
									<div className="row g-4">
										<div className="col-md-6">
											<div className="input-field">
												<label htmlFor="customer-type">Customer type</label>

												<select
													id="customer-type"
													className="form-select"
													style={{
														width: "100%",
														padding: "22px 20px 18px 20px",
														fontSize: "14px",
														color: "#656565",
														border: "1px solid #e7e7e7",
														borderRadius: "6px",
														backgroundColor: "#fff",
														marginBottom: "10px",
														boxShadow: "none",
													}}>
													<option value="" selected="">
														Va rugam alegeti
													</option>
													<option value="p">Persoana fizica</option>
													<option value="c">Societate comerciala</option>
													<option value="ap">Persoana fizica autorizata</option>
													<option value="pi">Institutie publica</option>
													<option value="gi">Institutie guvernamentala</option>
													<option value="nc">ONG</option>
													<option value="o">Altele</option>
												</select>
											</div>
										</div>
										<div className="col-md-6">
											<div className="input-field">
												<label htmlFor="name">Nume Firma/Institutie</label>
												<input
													type="text"
													className=""
													name="name"
													id="name"
													placeholder="persoanele fizice nu completeaza acest camp"
													required="required"
												/>
											</div>
										</div>
										<div className="col-md-6">
											<div className="input-field">
												<label htmlFor="natural-person">Nume persoana fizica (sau reprezentant)</label>
												<input
													type="text"
													className=""
													name="natural-person"
													id="natural-person"
													placeholder="Nu omiteti! Specificati in ordinea: Prenume Nume"
													required="required"
												/>
											</div>
										</div>
										<div className="col-md-6">
											<div className="input-field">
												<label htmlFor="email">Adresa email</label>
												<input
													type="email"
													className=""
													name="email"
													id="email"
													placeholder="pe aceasta adresa veti primi o copie a proformei si datele de logare"
													required="required"
												/>
											</div>
										</div>
										<div className="col-md-6">
											<div className="input-field">
												<label htmlFor="phone">Telefon</label>
												<input
													type="phone"
													className=""
													name="phone"
													id="phone"
													placeholder="intra in telefon"
													required="required"
												/>
											</div>
										</div>
										<div className="col-md-6">
											<div className="input-field">
												<label htmlFor="mob">Mobil</label>
												<input
													type="phone"
													className=""
													name="mob"
													id="mob"
													placeholder="intra in mobil"
													required="required"
												/>
											</div>
										</div>
										<div className="col-md-6">
											<div className="input-field">
												<label htmlFor="address">Adresa</label>
												<input
													type="text"
													className=""
													name="address"
													id="address"
													placeholder="Strada, numar (obligatoriu scara si ap. daca exista)"
													required="required"
												/>
											</div>
										</div>
										<div className="col-md-6">
											<div className="input-field">
												<label htmlFor="post">Cod postal</label>
												<input
													type="text"
													className=""
													name="post"
													id="post"
													placeholder="Noul cod postal (poate fi gasit la www.coduripostale.ro)"
													required="required"
												/>
											</div>
										</div>
										<div className="col-md-6">
											<div className="input-field">
												<label htmlFor="location">Localitate</label>
												<input
													type="text"
													className=""
													name="location"
													id="location"
													placeholder="intra in Localitate"
													required="required"
												/>
											</div>
										</div>
										<div className="col-md-6">
											<div className="input-field">
												<label htmlFor="judet">Judet</label>
												<input type="text" className="" name="judet" id="judet" placeholder="judet" />
											</div>
										</div>

										<div className="col-md-6">
											<div className="input-field">
												<label htmlFor="fiscal">Cod fiscal / CNP</label>
												<input
													type="text"
													className=""
													name="fiscal"
													id="fiscal"
													placeholder="Persoanele fizice completeaza CNP-ul din buletin doar in cazul comenzilor care implica inregistrarea de domenii .ro (registrul roman de domenii, solicita CNP-ul pentru inregistrarea domeniilor .ro inregistrate de persoane fizice)."
													required="required"
												/>
											</div>
										</div>
										<div className="col-md-6">
											<div className="input-field">
												<label htmlFor="inreg">Nr. Inreg. la Registrul Comertului</label>
												<input
													type="text"
													className=""
													name="inreg"
													id="inreg"
													placeholder="persoanele fizice nu completeaza acest camp"
													required="required"
												/>
											</div>
										</div>
									</div>
								</div>
							</div>

							<div className="row mt-4">
								<div className="col-md-12">
									<div className="ct-section-title text-start">
										<h5>Va rugam frumos sa ne spuneti cum ati aflat despre RedHost</h5>
									</div>
								</div>
								<div className="col-md-6 mt-4">
									<div className="input-field">
										<label htmlFor="customer-type">alegeti ceea ce se potriveste mai bine</label>

										<select
											id="customer-type"
											className="form-select"
											style={{
												width: "100%",
												padding: "22px 20px 18px 20px",
												fontSize: "14px",
												color: "#656565",
												border: "1px solid #e7e7e7",
												borderRadius: "6px",
												backgroundColor: "#fff",
												marginBottom: "10px",
												boxShadow: "none",
											}}>
											<option value="ask">Va rugam alegeti</option>
											<option value="google">Google</option>
											<option value="alt_motor">Alt motor de cautare</option>
											<option value="friend">Printr-o cunostinta</option>
											<option value="bydesigner">Prin intermediul unui designer web</option>
											<option value="designer">Sunt un web designer</option>
											<option value="client">Sunt deja sau am fost client RedHost</option>
										</select>
									</div>
								</div>
							</div>

							<div className="row mt-4">
								<div className="col-md-12">
									<div className="ct-section-title text-start">
										<h5>DATE INFORMATIVE DESPRE COMANDA</h5>
									</div>
								</div>
								<div className="col-sm-4 col-lg-2 mt-3">
									<p className="text-dark fw-bold ">DOMENIUL ALES</p>
								</div>
								<div className="col-sm-8 col-lg-8 mt-3">
									<p>
										Ati ales domeniul www.abc.ro. Daca trebuie sa modificati adresa NU apasati butonul Back al
										broserului. Modificare domeniu.
									</p>
								</div>
							</div>
							<div className="row">
								<div className="col-sm-4 col-lg-2">
									<p className="text-dark fw-bold ">PACHETUL ALES</p>
								</div>
								<div className="col-sm-8 col-lg-8">
									<p className="text-dark fw-bold ">Basic.</p>
								</div>
							</div>

							<div className="row mt-4">
								<div className="col-md-12">
									<div className="ct-section-title text-start">
										<h5>CONDITII PENTRU EFECTUAREA COMENZII</h5>
									</div>
								</div>
								<div className="col-12 mt-3">
									<p className="">
										Prin apasarea butonului 'Trimitere comanda' declarati ca ati citit
										<strong>politica de prelucrare date cu caracter personal</strong> Euroweb Srl publicata la adresa
										<br />{" "}
										<span>
											<a href="">www.redhost.ro/confidentialitate.php</a>
										</span>
										.
									</p>
									<p className="">
										Prin apasarea butonului 'Trimitere comanda' declarati ca ati citit si sunteti de acord cu
										<strong>termenii de utilizare</strong> RedHost.ro publicati la adresa
										<br />{" "}
										<span>
											<a href="">www.redhost.ro/conditii.php.</a>
										</span>
										.
									</p>
									<p className="">
										Prin continuarea comenzii si efectuarea platii unei comenzi{" "}
										<strong>care include si inregistrarea unui domeniu .ro,</strong>declarati ca ati citit si ca sunteti
										de acord cu
										<strong>Regulile de Inregistrare si cu Contractul de Inregistrare</strong> pentru domenii .ro,
										documente prezente pe site-ul ROTLD (www.rotld.ro).
									</p>
								</div>

								<div className="col-12">
									<div className="form-check">
										<input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
										<label className="form-check-label" htmlFor="flexCheckDefault">
											Va rugam sa bifati daca sunteti de acord sa va transmitem din cand in cand comunicari comerciale
											cum ar fi <strong>ocazii speciale si promotii.</strong>
											Nu aveti obligatia de a bifa acest camp si puteti retrage oricand acest acord.
										</label>
									</div>
								</div>
							</div>
						</form>

						<div className="submit-btn mt-4">
							<button type="submit" className="template-btn primary-btn border-0 rounded-pill">
								Trimitere comanda<i className="fa-solid fa-chevron-right ms-2"></i>
							</button>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Checkout;
