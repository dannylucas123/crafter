import React from 'react';
import Container from './components/Container/Container';
import { decodeProfile } from './parse/profile';
import { getProfileFromURL } from './parse/url';
import Armorsmith from './templates/blacksmithing/Armorsmith';

const profile = decodeProfile(getProfileFromURL());

const App = () => {
  console.log(profile);


  return (
    <main>
      <Armorsmith />
    </main>
  );
};

export default App;
