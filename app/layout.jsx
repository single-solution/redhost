import { Inter } from "next/font/google";
import Layout from "./components/Layout";

import Head from "next/head";
import "assets/css/main.css";
import "assets/css/custom.css";
import "assets/css/vebdor/dataTables.bootstrap5.min.css";
import "assets/css/vebdor/responsive.bootstrap.min.css";
import "assets/css/vebdor/buttons.dataTables.min.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "RedHost",
	description: "RedHost Hosting Service",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<Head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />

				<meta name="twitter:site" content="" />
				<meta name="twitter:creator" content="" />
				<meta name="twitter:card" content="" />
				<meta name="twitter:title" content="" />
				<meta name="twitter:description" content="." />
				<meta name="twitter:image" content="#" />

				<meta property="og:url" content="#" />
				<meta name="twitter:title" content="" />
				<meta property="og:description" content="" />
				<meta property="og:image" content="#" />
				<meta property="og:image:secure_url" content="#" />
				<meta property="og:image:type" content="image/png" />
				<meta property="og:image:width" content="1200" />
				<meta property="og:image:height" content="600" />

				<meta name="description" content="" />
				<meta name="author" content="" />

				<title>RedHost Hosting Service</title>

				<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" />
				<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.css" />
				<link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
				<link rel="stylesheet" href="https://cdn.datatables.net/responsive/2.2.3/css/responsive.bootstrap.css" />
				{/* <link href="css2?family=Mulish:wght@400;500;600;700&family=Urbanist:wght@600;700&display=swap" rel="stylesheet" /> */}
				{/* <style>
					 @media screen and (min-width: 320px) and (max-width: 992px) {
							.mble_screen_scroll{
								overflow:scroll!important;
							}
						}
						#example_filter{
							text-align: end!important;
						}
						
						@media only screen and (max-width:992px) {
							.top-gap-everywhere{
									margin-top:30px;
							}
						} 
				</style> */}
			</Head>
			<body className={inter.className}>
				<Layout>{children}</Layout>
			</body>
		</html>
	);
}
