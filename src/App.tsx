import AstronautContenxtProvider from './store/astronaut-context'
import Layout from './components/UI/Layout';
import AddAstronaut from './components/Astronaut/AddAstronaut';

const App = () => {
  return (
    <AstronautContenxtProvider>
      <Layout>
        <AddAstronaut />
      </Layout>
    </AstronautContenxtProvider>
  );
}

export default App;
