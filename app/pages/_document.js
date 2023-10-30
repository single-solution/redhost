import { Html, Head, Main, NextScript } from "next/document";
export default function Document() {
	return (
		<Html lang="en">
			<Head />
			<body>
				<Main />
				<NextScript />
				<script async src="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.js"></script>
				<script async src="https://unpkg.com/aos@next/dist/aos.js"></script>
				<script async src="assets/js/vendors/jquery.min.js"></script>
				<script async src="assets/js/vendors/popper.min.js"></script>
				<script async src="assets/js/vendors/bootstrap.min.js"></script>
				<script async src="assets/js/vendors/easing.min.js"></script>
				<script async src="assets/js/vendors/swiper.min.js"></script>
				<script async src="assets/js/vendors/massonry.min.js"></script>
				<script async src="assets/js/vendors/bootstrap-slider.js"></script>
				<script async src="assets/js/vendors/magnific-popup.js"></script>
				<script async src="assets/js/vendors/waypoints.js"></script>
				<script async src="assets/js/vendors/counterup.js"></script>
				<script async src="assets/js/vendors/isotop.pkgd.min.js"></script>
				<script async src="assets/js/vendors/countdown.min.js"></script>
				<script async src="assets/js/vendors/jquery.dataTables.min.js"></script>
				<script async src="assets/js/vendors/dataTables.bootstrap5.min.js"></script>
				<script async src="assets/js/vendors/dataTables.responsive.min.js"></script>
				<script async src="assets/js/vendors/dataTables.buttons.min.js"></script>
				<script async src="assets/js/vendors/datatables.init.js"></script>
				<script async src="assets/js/app.js"></script>
				<script>AOS.init({{ easing: "ease-in-out", duration: 800 }});</script>
			</body>
		</Html>
	);
}
