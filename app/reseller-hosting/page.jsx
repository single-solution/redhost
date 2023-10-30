import React from "react";

export default function ResellerHosting() {
	return (
		<>
			&lt;&gt;
			<section className="breadcrumb-area bg-primary-gradient">
				<div className="container">
					<div className="breadcrumb-content text-center">
						<h2 className="mb-3">Reseller Hosting</h2>
						<nav>
							<ol className="breadcrumb">
								<li className="breadcrumb-item">
									<a href="index.php">Home</a>
								</li>
								<li className="breadcrumb-item active">Reseller Hosting</li>
							</ol>
						</nav>
					</div>
				</div>
			</section>
			<section
				className="pb-120 mn-feature-and-data-center ds-light position-relative zindex-1"
				style={{ backgroundColor: "white !important" }}>
				<div className="container">
					<div className="mn-data-center pt-120 position-relative zindex-1">
						<div className="row align-items-center g-5">
							<div className="col-lg-6" data-aos="fade-right">
								<div className="mn-title-2 mn-data-center-content">
									<h2 className="mb-3">
										Reseller{" "}
										<span className="position-relative " style={{ color: "#EB0606" }}>
											Hosting
										</span>
									</h2>
									<p>
										{" "}
										Reseller hosting packages allow you to become a hosting reseller without having to maintain your own
										hosting servers. You can create whatever packages you want. You sell these packages as you see fit
										(as long as you do it legally). RedHost will not initiate any contact with your customers.
									</p>
									<p className="text-capitalize">So a reseller hosting contract is indicated if:</p>
									<ul className="h5-feature-list mb-5">
										<li className="d-flex align-items-center">
											<span
												className="icon-wrapper d-inline-flex align-items-center justify-content-center flex-shrink-0"
												style={{ backgroundColor: "#EB0606" }}>
												{" "}
												<i className="fa-solid text-white fa-check" />
											</span>
											<p className="mb-0 ms-3">
												You want to offer hosting under your own name under conditions decided by you;
											</p>
										</li>
										<li className="d-flex align-items-center">
											<span
												className="icon-wrapper d-inline-flex align-items-center justify-content-center flex-shrink-0"
												style={{ backgroundColor: "#EB0606" }}>
												<i className="fa-solid text-white fa-check" />
											</span>
											<p className="mb-0 ms-3">
												You are a design company and you want to offer hosting to your clients;
											</p>
										</li>
										<li className="d-flex align-items-center">
											<span
												className="icon-wrapper d-inline-flex align-items-center justify-content-center flex-shrink-0"
												style={{ backgroundColor: "#EB0606" }}>
												<i className="fa-solid text-white fa-check" />
											</span>
											<p className="mb-0 ms-3">You represent a group that needs to host a larger number of sites.</p>
										</li>
									</ul>
								</div>
							</div>
							<div className="col-lg-6" data-aos="fade-left">
								<div className="mn-data-center position-relative">
									<div className="image">
										<img src="./assets/img/shapes/reseller.svg" className="w-100" alt="" />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="cd-plan-table  pb-120 pt-120" style={{ backgroundColor: "whitesmoke !important" }}>
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-lg-7">
							<div className="cd-title text-center">
								<h2 data-aos="fade-right" className="mb-3">
									VPS-uri KVM
								</h2>
								<p className="mb-0">
									Recomandate pentru majoritatea aplicatiilor uzuale, VPS-urile KVM se remarca printr-o viteza de regula
									foarte buna si o izolare mult mai buna intre VPS-uri (la nivel de alocari de resurse). Alocarile de
									resurse de sistem sunt garantate. Infrastructura pe SSD-uri asamblate in matrice RAID-10 asigura o
									performanta foarte buna. Pe VPS-urile KVM se poate instala si Windows.
								</p>
							</div>
						</div>
					</div>
					<div className="col-sm-12 my-4   p-4 bg-white box-shadow-border " id="show_table" data-aos="fade-up">
						<table
							id="fixed-header"
							className="table m-0 rs-head-table  dt-responsive nowrap  align-middle dataTable no-footer dtr-inline"
							style={{ width: "100%" }}
							aria-describedby="fixed-header_info">
							<thead>
								<tr style={{ backgroundColor: "whitesmoke" }}>
									<th />
									<th>Start</th>
									<th>Addition</th>
									<th>Pro</th>
									<th>Ultra</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>Space-bar</td>
									<td>30GB</td>
									<td>60GB</td>
									<td>90GB</td>
									<td>120GB</td>
								</tr>
								<tr>
									<td>Traffic</td>
									<td>Unlimited</td>
									<td>Unlimited</td>
									<td>Unlimited</td>
									<td>Unlimited</td>
								</tr>
								<tr>
									<td>Areas</td>
									<td>Unlimited</td>
									<td>Unlimited</td>
									<td>Unlimited</td>
									<td>Unlimited</td>
								</tr>
								<tr>
									<td>Hosting accounts</td>
									<td>20</td>
									<td>45</td>
									<td>70</td>
									<td>100</td>
								</tr>
								<tr>
									<td>Allotment</td>
									<td>Unlimited 1</td>
									<td>Unlimited 1</td>
									<td>Unlimited 1</td>
									<td>Unlimited 1</td>
								</tr>
								<tr>
									<td>cPanel/WHM 2</td>
									<td>Yes</td>
									<td>Yes</td>
									<td>Yes</td>
									<td>Yes</td>
								</tr>
								<tr>
									<td>Dedicated IPs</td>
									<td>1</td>
									<td>1</td>
									<td>2</td>
									<td>3</td>
								</tr>
								<tr>
									<td>Private nameservers</td>
									<td>Yes</td>
									<td>Yes</td>
									<td>Yes</td>
									<td>Yes</td>
								</tr>
								<tr>
									<td>Monthly price 3</td>
									<td>9.9 euros</td>
									<td>19 euros</td>
									<td>28 euros</td>
									<td>37 euros</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</section>
			<section className="dd-about-section   ptb-120 dd-section-bg" style={{ backgroundColor: "white !important" }}>
				<div className="container">
					<div className="row justify-content-center align-items-center">
						<div className="col-xl-6 col-lg-6">
							<div className="dd-about-content" data-aos="fade-left">
								<h2 className="mb-30">Notes</h2>
								<p className="mb-40">
									Alocarile se refera la urmatoarele tipuri de resurse: trafic lunar, adrese email, baze de date, domenii
									parcate si toate celelalte dotatari specifice hostingului de tip cPanel{" "}
									<strong> cu exceptia spatiului</strong>. Acestea sunt nelimitate in sensul ca resellerul poate folosi o
									cantitate rezonabila, nemonitorizata in mod implicit de catre noi. Cu toate acestea serviciul nu poate
									fi de exemplu folosit pentru oferirea de servicii gratuite de hosting sau email si nici pentru a gazdui
									site-uri prea mari pentru shared hosting (portaluri, bloguri foarte vizitate etc). In asemenea cazuri
									aveti nevoie de <a href="./servere-dedicate.php">dedicated servers </a> .
								</p>
								<p>
									{" "}
									Web Hosting Manager (WHM) va fi folosit de catre reseller la adaugarea conturilor de gazduire,
									specificarea alocarilor (conturi email, baze de date, spatiu, trafic lunar etc) iar cPanel permite
									utilizarea contului de gazduire (definirea conturilor de mail, administrare bazelor de date, multe
									altele) de catre clientul final.
								</p>
								<p>Preturile mentionate NU includ TVA.</p>
								<div className="row g-4" />
							</div>
						</div>
						<div className="col-xl-6 col-lg-6 text-center" data-aos="fade-right">
							<div className="image-wrapper mt-5 mt-xl-0">
								<img src="assets/img/sponsor/bg-somewhere.png" alt="desk" className="img-fluid" />
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
