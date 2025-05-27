import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import { useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import Contact from './components/sections/contact/Contact';
import Experience from './components/sections/experience/Experience';
import Footer from './components/sections/footer/Footer';
import Header from './components/sections/header/Header';
import Introduction from './components/sections/introduction/Introduction';
import Projects from './components/sections/projects/Projects';
import Modal from './components/ui/modals/Modal';
import { useColorPicker } from './context/ColorPickerContext';

function App() {
  const { loadColorSettings } = useColorPicker();

  useEffect(() => {
    loadColorSettings();
  }, [loadColorSettings]);

  return (
    <>
      <div className="App">
        <Header />
        <main className="main-content">
          <Introduction />
          <Experience />
          <Projects />
          <Contact />
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
    </>
  );
}

export default App;
