import React from 'react';
import Container from './components/Container/Container';
import { constructProfile, decodeProfile, profile } from './parse/profile';
import { getProfileFromURL } from './parse/url';
import Armorsmith from './templates/blacksmithing/Armorsmith';

// const profile = decodeProfile(getProfileFromURL());

const App = () => {
  console.log(constructProfile(profile));


  return (
    <main>
      {/* <Armorsmith /> */}
    </main>
  );
};

export default App;
