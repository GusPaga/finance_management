import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { Home } from './components/Pages/Home';
import { Layout } from './components/Layout';

function App() {
	return (
		<>
			<Layout>
				<Home />
			</Layout>
		</>
	);
}

export default App;
