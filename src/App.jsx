import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import Experience from './components/sections/experience/Experience';
import Footer from './components/sections/footer/Footer';
import Header from './components/sections/header/Header';
import Introduction from './components/sections/introduction/Introduction';
import Projects from './components/sections/projects/Projects';
import { ColorPickerProvider } from './context/ColorPickerContext';
import { LocationProvider } from './context/LocationContext';
import { SectionProvider } from './context/SectionContext';
import Modal from './components/ui/modals/Modal';
import { Toaster } from 'react-hot-toast';
import Contact from './components/sections/contact/Contact';

function App() {
  return (
    <SectionProvider>
      <ColorPickerProvider>
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
        <Modal />
      </ColorPickerProvider>
    </SectionProvider>
  );
}

export default App;
