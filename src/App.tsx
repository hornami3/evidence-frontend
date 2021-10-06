import AstronautContenxtProvider from './store/astronaut-context'
import AstrounautTable from './components/Astronaut/AstronautTable'
import Layout from './components/UI/Layout';
import AddAstronaut from './components/Astronaut/AddAstronaut';

const App = () => {
  return (
    <AstronautContenxtProvider>
      <Layout>
        <AddAstronaut />
        <AstrounautTable />
      </Layout>
    </AstronautContenxtProvider>
  );
}

export default App;
