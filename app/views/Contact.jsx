import Image from "next/image";

const contact = () => {
	return (
		<>
			<section class="breadcrumb-area bg-primary-gradient">
				<div class="container">
					<div class="breadcrumb-content text-center">
						<h2 class="mb-3">Contact us</h2>
						<nav>
							<ol class="breadcrumb">
								<li class="breadcrumb-item">
									<a href="index.php">Home</a>
								</li>
								<li class="breadcrumb-item active">Contact Us</li>
							</ol>
						</nav>
					</div>
				</div>
			</section>
			<section class="vps-about-section ptb-120" style="background:whitesmoke">
				<div class="container">
					<div class="row align-items-center mb-5">
						<div class="col-xxl-12 col-xl-12">
							<div class="section-title text-center text-xl-center">
								<h2>Contact RedHost</h2>
							</div>
						</div>
					</div>
					<div class="row g-4">
						<div class="col-lg-6">
							<div class="vps-about-item d-flex align-items-center flex-column flex-sm-row bg-white deep-shadow position-relative zindex-1 overflow-hidden">
								<Image
									width={800}
									src="assets/img/shapes/vps-about-shape.png"
									alt="not found"
									class="position-absolute right-bottom"
								/>

								<div class="vps-about-item-content mt-4 mt-sm-0 ms-sm-3 text-center text-sm-start">
									<h4 class="mb-20">Company Data</h4>

									<ul>
										<li class="py-2">
											<strong>SC EUROWEB SRL</strong>
										</li>
										<li class="py-2">
											<strong>Fiscal code:</strong> RO22621599
										</li>
										<li>
											<strong>Reg Com:</strong>J17/1826/2007
										</li>
										<li class="py-2">
											<strong>Share capital:</strong> 200 lei
										</li>
										<li class="py-2">
											<strong>Registered office:</strong> Gradina Veche, 88
										</li>
										<li class="py-2">
											<strong>City:</strong> Galati
										</li>
										<li class="py-2">
											<strong>County:</strong> Galati
										</li>
										<li class="py-2">
											<strong>Postal code:</strong> 800142
										</li>
									</ul>
								</div>
							</div>
						</div>
						<div class="col-lg-6">
							<div class="vps-about-item d-flex align-items-center flex-column flex-sm-row bg-white deep-shadow position-relative zindex-1 overflow-hidden">
								<Image
									width={800}
									src="assets/img/shapes/vps-about-shape.png"
									alt="not found"
									class="position-absolute right-bottom"
								/>

								<div class="vps-about-item-content mt-4 mt-sm-0 ms-sm-3 text-center text-sm-start">
									<h4 class="mb-20">Bank Accounts</h4>

									<p class=" my-4 fw-bold text-uppercase">
										<strong>For cash payments</strong>
									</p>
									<ul>
										<li>
											<strong>BRD Agency Piata Mare Account: SV32065501800</strong>
										</li>
									</ul>

									<p class=" my-4 fw-bold text-uppercase">
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
									<p class=" my-4 fw-bold text-uppercase">
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
				class="hm-contact-area position-relative pt-60 pb-120 overflow-hidden bg-white zindex-1 "
				style="background-color: whitesmoke;">
				<Image width={800} src="assets/img/contact-bg-left.png" alt="bg" class="position-absolute left-bottom" />
				<Image width={800} src="assets/img/contact-bg-right.png" alt="bg" class="position-absolute right-bottom" />
				<div class="container">
					<div class="row justify-content-center">
						<div class="col-lg-5">
							<div class="ct-section-title text-center">
								<h2>Get In Touch</h2>
							</div>
						</div>
					</div>
					<div class="hm-contact-form mt-5" id="contact">
						<div class="col-12 pb-3 message-box d-none">
							<div class="alert alert-danger"></div>
						</div>
						<form action="" method="POST" id="contactForm" class="contact-us-form">
							<div class="row justify-content-center">
								<div class="col-lg-6">
									<div class="row g-4">
										<div class="col-md-12">
											<div class="input-field">
												<label for="name">Name</label>
												<input
													type="text"
													class=""
													name="name"
													id="name"
													placeholder="Enter name"
													required="required"
												/>
											</div>
										</div>
										<div class="col-md-12">
											<div class="input-field">
												<label for="email">Email</label>
												<input
													type="email"
													class=""
													name="email"
													id="email"
													placeholder="Enter email"
													required="required"
												/>
											</div>
										</div>
										<div class="col-md-12">
											<div class="input-field">
												<label for="phone">Phone</label>
												<input
													type="text"
													class=""
													name="phone"
													id="phone"
													placeholder="Enter phone"
													required="required"
												/>
											</div>
										</div>
										<div class="col-md-12">
											<div class="input-field">
												<label for="subject">Subject</label>
												<input
													type="text"
													class=""
													name="subject"
													id="subject"
													placeholder="Enter subject"
													required="required"
												/>
											</div>
										</div>
										<div class="col-md-12">
											<div class="input-field">
												<label for="message">Message</label>
												<textarea placeholder="Write Message" rows="5" name="message" id="message"></textarea>
											</div>
										</div>
										<div class="submit-btn text-center mt-4">
											<button type="submit" class="template-btn primary-btn border-0 rounded-pill">
												Send Message<i class="fa-solid fa-chevron-right ms-2"></i>
											</button>
										</div>
									</div>
								</div>
								<div class="col-lg-6">
									<h4 class="mb-30">Recommended method of contacting support: e-mail ( office@redhost.ro )</h4>
									<div class="hm-ct-info-wrapper rounded">
										<span class="icon-wrapper rounded-circle d-inline-flex align-items-center justify-content-center">
											<i class="fa-solid fa-envelope"></i>
										</span>
										<div class="info-content mt-4">
											<h4>Email</h4>
											<span>
												<a href="mailto:office@redhost.ro">office@redhost.ro</a>
											</span>
										</div>
									</div>
									<div class="hm-ct-info-wrapper rounded">
										<span class="icon-wrapper rounded-circle d-inline-flex align-items-center justify-content-center">
											<i class="fa-solid fa-phone"></i>
										</span>
										<div class="info-content mt-4">
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
									<div class="hm-ct-info-wrapper rounded">
										<span class="icon-wrapper rounded-circle d-inline-flex align-items-center justify-content-center">
											<i class="fa-solid fa-clock"></i>
										</span>
										<div class="info-content mt-4">
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
};

export default contact;
