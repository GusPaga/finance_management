import { Footer } from './Footer';
import { NavBar } from './NavBar';

export const Layout = (props) => {
	return (
		<div>
			<NavBar />
			{props.children}
			<Footer />
		</div>
	);
};
