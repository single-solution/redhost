"use client";
import { useEffect } from "react";
import Testimonials from "../partials/Testimonials";
import AOS from "aos";

/* eslint-disable react/no-unescaped-entities */
export default function About() {
	useEffect(() => {
		AOS.init({
			easing: "ease-in-out",
			duration: 800,
			once: true,
		});
	}, []);

	return (
		<>
			<section class="breadcrumb-area bg-primary-gradient">
				<div class="container">
					<div class="breadcrumb-content text-center">
						<h2 class="mb-3">About Us</h2>
						<nav>
							<ol class="breadcrumb">
								<li class="breadcrumb-item">
									<a href="index.php">Home</a>
								</li>
								<li class="breadcrumb-item active">About Us</li>
							</ol>
						</nav>
					</div>
				</div>
			</section>
			<section class="h5-about-section ds-bg ptb-120">
				<div class="container">
					<div class="row align-items-center justify-content-between">
						<div class="col-lg-6 order-2 order-lg-1" data-aos="fade-right">
							<div class="h5-about-left mt-5 mt-lg-0">
								<h2 class="mb-3">About Us</h2>
								<p class="mb-3">
									At RedHost.ro, we are more than just a hosting provider; we are your partners in optimizing online
									success. Our hosting packages offer more than just hosted space and domains; they provide essential
									performance and speed enhancements crucial for elevating your website's loading speed. We understand
									that website loading speed is a pivotal factor in search engine rankings, significantly impacting your
									site's overall success.
								</p>
								<p class="mb-0">
									Our hosting packages are more than just a place to store your website; they are designed to enhance
									your website's performance and speed. We believe that optimizing these factors is essential for
									elevating your website's loading speed, ensuring a seamless user experience. Our hosting solutions are
									meticulously crafted to cater to the specific needs of websites and businesses, helping them thrive in
									the competitive digital landscape.
								</p>
							</div>
						</div>
						<div class="col-lg-5 order-1 order-lg-2" data-aos="fade-left">
							<div class="h5-about-right">
								<img src="assets/img/home5/building.png" alt="not found" class="img-fluid" />
							</div>
						</div>
					</div>
				</div>
			</section>
			<section class="h5-application pt-120 pb-40 position-relative zindex-1  overflow-hidden ">
				<img
					src="assets/img/shapes/home5-curve-reverse.png"
					alt="not found"
					class="position-absolute  start-0 top-0 w-100 zindex-1 logo-black"
				/>
				<img
					src="assets/img/shapes/home5-curve-reverse-black.png"
					alt="not found"
					class="position-absolute start-0 top-0 w-100 zindex-1 logo-white"
				/>
				<img
					src="assets/img/shapes/home5-curve-bottom.png"
					alt="not found"
					class="position-absolute start-0 bottom-0 w-100 zindex-1 logo-black"
				/>
				<img
					src="assets/img/shapes/home5-curve-bottom-black.png"
					alt="not found"
					class="position-absolute start-0 bottom-0 w-100 zindex-1 logo-white"
				/>
				<div class="container">
					<div class="h5-apps-wrapper position-relative zindex-2">
						<div class="row justify-content-center">
							<div class="col-lg-6">
								<div class="text-center mb-5">
									<h2 class="mb-3 text-white">Why Choose Us</h2>
									<p class="mb-0 text-white">
										We believe that by providing hosting packages with performance and speed improvements at each level,
										we can help our clients achieve their full potential. We envision a digital ecosystem where websites
										load faster, perform better, and achieve higher search engine rankings.
									</p>
								</div>
							</div>
						</div>
						<div class="row g-4 justify-content-center " data-aos="fade-up">
							<div class="col-xl-3 col-lg-4 col-md-6 col-sm-10">
								<div class="hm2-app-item text-center bg-white deep-shadow rounded-2" style={{ minHeight: "330px" }}>
									<div class="app-content mt-4">
										<h3 style={{ color: "#dc3545" }} class="h6 mb-3">
											Performance-Driven Hosting
										</h3>

										<p class="mb-20">
											RedHost.ro offers hosting packages that are optimized for performance and speed. We understand
											the critical role loading speed plays in your website's success, and we provide solutions that
											make a tangible difference..
										</p>
									</div>
								</div>
							</div>
							<div class="col-xl-3 col-lg-4 col-md-6 col-sm-10">
								<div class="hm2-app-item text-center bg-white deep-shadow rounded-2" style={{ minHeight: "330px" }}>
									<div class="app-content mt-4">
										<h3 style={{ color: "#dc3545" }} class="h6 mb-3">
											Supportive Partnership
										</h3>

										<p class="mb-20">
											Our long-standing collaboration with MateInfo.ro is a testament to our commitment to nurturing
											and supporting projects from their inception to success. We prioritize building lasting
											partnerships that enable our clients to achieve their goals
										</p>
									</div>
								</div>
							</div>
							<div class="col-xl-3 col-lg-4 col-md-6 col-sm-10">
								<div class="hm2-app-item text-center bg-white deep-shadow rounded-2" style={{ minHeight: "330px" }}>
									<div class="app-content mt-4">
										<h3 style={{ color: "#dc3545" }} class="h6 mb-3">
											Exceptional Hosting Services
										</h3>

										<p class="mb-20">
											RedHost.ro offers top-tier hosting services designed to meet the specific needs of your website
											or project. We provide secure and efficient hosting solutions that ensure optimal performance,
											scalability, and reliability.
										</p>
									</div>
								</div>
							</div>
							<div class="col-xl-3 col-lg-4 col-md-6 col-sm-10">
								<div class="hm2-app-item text-center bg-white deep-shadow rounded-2" style={{ minHeight: "330px" }}>
									<div class="app-content mt-4">
										<h3 style={{ color: "#dc3545" }} class="h6 mb-3">
											Proven Track Record
										</h3>

										<p class="mb-20">
											Our track record speaks for itself, as MateInfo.ro's success story demonstrates. We have a
											history of delivering results and helping projects reach new heights.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section class="ds-bg ptb-120 overflow-hidden">
				<div class="container">
					<div class="row justify-content-center">
						<div class="col-xl-10 col-lg-10">
							<div class="text-center">
								<h2 class="mb-5">Innovate with Trust, Simplify Tomorrow</h2>
							</div>
						</div>
					</div>
					<div class="row  align-items-center">
						<div class="col-xl-6 col-lg-6" data-aos="fade-right">
							<div class="img-wrapper">
								<img src="assets/img/icons/bg-main.svg" alt="not found" class="img-fluid" />
							</div>
						</div>
						<div class="col-xl-6 col-lg-6" data-aos="fade-left">
							<div class="hm1-about-content">
								<div style={{ maxWidth: "100%" }} class="hm10-about-card d-flex align-items-center gap-4 p-4">
									<img src="assets/img/icons/magnify.svg" alt="magnify" class="img-fluid" />
									<div>
										<h5 class="mb-2">Our Values</h5>
										<p class="mb-0">
											At Redhost, we're all about trust, innovation, and customer-centricity. We understand that our
											success is built on the trust of our customers, and we take that responsibility seriously.
										</p>
									</div>
								</div>
								<div style={{ maxWidth: "100%" }} class="hm10-about-card d-flex align-items-center gap-4 p-4 mt-30">
									<img src="assets/img/icons/gear.svg" alt="magnify" class="img-fluid" />
									<div>
										<h5 class="mb-2">Our Vision</h5>
										<p class="mb-0">
											We aim to be at the forefront of the digital transformation, providing the tools and solutions
											that empower individuals and businesses to thrive in the ever-evolving digital landscape.{" "}
										</p>
									</div>
								</div>
								<div style={{ maxWidth: "100%" }} class="hm10-about-card d-flex align-items-center gap-4 p-4 mt-30">
									<img src="assets/img/icons/panel.svg" alt="magnify" class="img-fluid" />
									<div>
										<h5 class="mb-2">Mission</h5>
										<p class="mb-0">
											Our mission at Redhost is crystal clear: we're here to simplify the digital experience. We're
											committed to delivering secure, high-performance, and user-friendly solutions that enable our
											customers to navigate the digital world with ease.{" "}
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<Testimonials />
		</>
	);
}
