import AstronautContenxtProvider from './store/astronaut-context'
import Layout from './components/UI/Layout';

const App = () => {
  return (
    <AstronautContenxtProvider>
      <Layout>
      </Layout>
    </AstronautContenxtProvider>
  );
}

export default App;
