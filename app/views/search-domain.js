<?php include('header.php') ?>

<section class="breadcrumb-area bg-primary-gradient">

	<div class="container">
		<div class="breadcrumb-content text-center">
			<h2 class="mb-3">Domain Reservation</h2>
			<nav>
				<ol class="breadcrumb">
					<li class="breadcrumb-item"><a href="index.php">Home</a></li>
					<li class="breadcrumb-item active">Domain Reservation</li>
				</ol>
			</nav>
		</div>
	</div>
</section>

<section class="sh-control-panel pt-80 pb-80 position-relative overflow-hidden zindex-1">
	<div class="container">
		<div class="row justify-content-center">
			<div class="col-lg-6">
				<div class="sh-section-title text-center">
					<h2>Relații Clienți</h2>
				</div>
			</div>
		</div>
		<div class="row mt-5 align-items-center">

			<div class="col-lg-6 d-none d-lg-block">
				<div class="h5-about-right">
					<img src="assets/img/home5/building.png" alt="not found" class="img-fluid">
				</div>
			</div>
			<div class="col-lg-6">
				<div class="sh-cp-left position-relative zindex-1 mb-5 mb-lg-0">
					<div class="accordion cp-accordion" id="cp_accordion">
						<div class="accordion-single">
							<div class="accordion-header">
								<a>
									<h6>Daca intampinati probleme sau aveti nelamuriri, nu ezitati sa ne contactati.</h6>
								</a>
							</div>

						</div>

						<div class="accordion-single">
							<div class="accordion-header">
								<a>
									<h6>Acest formular nu trebuie folosit pentru prelungirea sau modificarea contractelor! In
										aceste cazuri va rugam sa ne contactati.</h6>
								</a>
							</div>

						</div>

					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<section class="hm7-domain-section position-relative zindex-1 pt-120 pb-120">

	<div class="container">
		<div class="row justify-content-between">
			<div class="col-xl-6 col-lg-7">
				<div class="hm7-domain-content">
					<div class="hm7-title mb-40">
						<h5 class="hm7-subtitle fw-semibold mb-2">Search Domain
							<span class="ms-1">
								<svg width="71" height="12" viewBox="0 0 71 12" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M0.279053 6L62.2791 5.99999" stroke="#ff2c3f " stroke-width="2"></path>
									<path d="M70.2791 6L61.2791 11.1962L61.2791 0.803847L70.2791 6Z" fill="#ff2c3f "></path>
								</svg>
							</span>
						</h5>
						<h2 class="mb-3">numele de domeniu</h2>
						<p class="mb-0">Formularul permite si comandarea de domenii cu diacritice. <span class="fw-bold">
								Atentie: ROTLD permite doar
								inregistrarea de domenii cu diacritice Romanian-Standard, nu Romanian-Legacy. Daca nu aveti
								setata
								tastatura Romaneasca corespunzatoare rezultatul cautarii nu va fi valid pentru domeniile care
								contin caracterele ș si ț.</span></p>
					</div>
					<p>Introduceti adresa dorita <span class="fw-bold">(chiar daca detineti deja domeniul)</span></p>
					<form action="#"
						class="mn-hero-form mt-2 hm2-dm-search-form position-relative d-flex align-items-center justify-content-between mb-0">

						<input type="text" placeholder="www." style="border-color: #dfdfdf">
						<select class="form-select rounded-0" style="border-color: #dfdfdf">
							<option value="1">.ro</option>
							<option value="1">.eu</option>
							<option value="1">.com</option>
							<option value="1">.net</option>
							<option value="1">.org</option>
							<option value="1">.biz</option>
							<option value="1">.info</option>
						</select>
						<a id="showButton" class="template-btn primary-btn border-0 flex-shrink-0 rounded-right">Verificare
							domeniu</a>
					</form>
					<div class="hm7-title mt-3">
						<p id="hiddenText" class="mb-0">Introduceti domeniul dorit in casuta alaturata chiar daca l-ati
							inregistrat deja (nu
							uitati sa selectati extensia dorita) si apasati butonul de verificare.</p>

						<div id="hiddenContent" class="mt-3" style="display: none;">
							<p class="mb-0">Stare domeniu <strong class="text-dark">abc.ro</strong>: <span
									class="text-danger fw-bold ">LIBER</span> </p>
							<p class="mt-2">Puteti continua procedura de comanda.</p>
							<a href="./order-hosting.php" class="primary-btn template-btn px-3 py-2">Continuati cu Pasul 2 <i
									class="fa-solid fa-chevron-right ms-2"></i></a>
						</div>

					</div>
				</div>
			</div>
			<div class="col-xl-6 col-lg-5">
				<div class="img-wrapper">
					<img src="assets/img/icons/bg-main.svg" alt="not found" class="img-fluid">
				</div>
			</div>
			<div class="col-12">
				<p class="fw-bold text-dark">Observatie: rezervarea efectiva a domeniului va fi finalizata doar dupa efectuarea platii.
				</p>
			</div>
		</div>
	</div>
</section>
<script>
	document.getElementById("showButton").addEventListener("click", function() {
    var hiddenContent = document.getElementById("hiddenContent");
    var hiddenText = document.getElementById("hiddenText");
    
    if (hiddenContent.style.display === "none") {
        hiddenContent.style.display = "block";
        hiddenText.style.display = "none"; 
    }
});
</script>
<?php include('footer.php') ?>