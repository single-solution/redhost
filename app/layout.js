import { Inter } from "next/font/google";
import "./assets/css/main.css";
import "./assets/css/custom.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "RedHost",
	description: "RedHost Hosting Service",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={inter.className}>{children}</body>
		</html>
	);
}
