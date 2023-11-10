import Head from "next/head";
import Script from "next/script";
import { Inter } from "next/font/google";

import "aos/dist/aos.css";
import "assets/css/main.css";
import "assets/css/custom.css";
import "assets/css/vebdor/dataTables.bootstrap5.min.css";
import "assets/css/vebdor/responsive.bootstrap.min.css";
import "assets/css/vebdor/buttons.dataTables.min.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = { title: "RedHost", description: "RedHost Hosting Service" };

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<Head />

			<body className={inter.className}>
				<Header />
				{children}
				<Footer />
			</body>

			<Script defer src="assets/js/vendors/jquery.min.js" />
			<Script defer src="assets/js/app.js" />
			<Script defer src="assets/js/vendors/popper.min.js" />
			<Script defer src="assets/js/vendors/bootstrap.min.js" />
			<Script defer src="assets/js/vendors/easing.min.js" />
			<Script defer src="assets/js/vendors/swiper.min.js" />
			<Script defer src="assets/js/vendors/masonry.min.js" />
			<Script defer src="assets/js/vendors/bootstrap-slider.js" />
			<Script defer src="assets/js/vendors/magnific-popup.js" />
			<Script defer src="assets/js/vendors/waypoints.js" />
			<Script defer src="assets/js/vendors/counterup.js" />
			<Script defer src="assets/js/vendors/isotop.pkgd.min.js" />
			<Script defer src="assets/js/vendors/countdown.min.js" />
			<Script defer src="assets/js/vendors/jquery.dataTables.min.js" />
			<Script defer src="assets/js/vendors/dataTables.bootstrap5.min.js" />
			<Script defer src="assets/js/vendors/dataTables.responsive.min.js" />
			<Script defer src="assets/js/vendors/dataTables.buttons.min.js" />
			<Script defer src="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.js" />
		</html>
	);
}
