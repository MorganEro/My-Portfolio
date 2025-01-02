import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Toaster } from 'react-hot-toast';
import Introduction from './sections/Introduction';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import Header from './sections/Header';
import Footer from './sections/Footer';
import { SectionProvider } from './context/SectionProvider';
import { LocationProvider } from './context/LocationProvider';

function App() {
  return (
    <SectionProvider>
      <div className="App">
        <Header />
        <main className="main-content">
          <Introduction />
          <Experience />
          <Projects />
          <LocationProvider>
            <Contact />
          </LocationProvider>
        </main>
        <Footer />
      </div>
      <Toaster
        position="bottom-center"
        gutter={12}
        containerStyle={{ margin: '8px' }}
        toastOptions={{
          success: {
            duration: 7000,
            style: {
              background: '#f8efde',
              color: '#802f00',
            },
          },
          error: {
            duration: 7000,
            icon: '',
            style: {
              background: 'red',
              color: '#f8efde',
            },
          },
          style: {
            fontSize: '.8rem',
            maxWidth: '80%',
            padding: '1rem 1.5rem',
            borderRadius: '0.3rem',
          },
        }}
      />
    </SectionProvider>
  );
}

export default App;
