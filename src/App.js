import React from 'react';
import './App.css';

import VyrupaevaMAController from './components/VyrupaevaMA';
import PerederiyVAController from './components/PerederiyVA';
import PetrovSDController from './components/PetrovSD/PetrovSDController';
import MednyNYController from './components/MednyNY/MednyNYController';
import BekinaMPController from './components/BekinaMP/BekinaMPController';
import TarasovAAController from './components/TarasovAA/TarasovAAController';
import BurinISController from './components/BurinIS/BurinISController';
import KomarBGController from './components/KomarBG/KomarBGController';
import VeselayaEAController from './components/VeselayaEA/VeselayaEAController';
import KapyrinKAcontroller from './components/KapyrinKA/KapyrinKAcontroller';
import VelikanovKYController from './components/VelikanovKY/VelikanovKYController';
import ExampleController from './components/ExampleController';
import KuzminLOController from './components/KuzminLO/KuzminLOController';
import KorneevDSController from './components/KorneevDS';
import VesyolkinASController from './components/VesyolkinAS/VesyolkinASController';
import MurashevController from './components/MurashevAS/controller';
import KlevleevVRController from './components/KlevleevVR/KlevleevVRController';
import MiroshnikGKController from './components/MiroshnikGK/MiroshnikGKController';
import IvanovDSController from './components/IvanovDS/IvanovDSController';
import OleynikovAPController from './components/OleynikovAP/OleynikovAPController';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MednyNYController />

        <BekinaMPController />

        <VeselayaEAController />

        <VelikanovKYController />

        <BurinISController />

        <VyrupaevaMAController />

        <PetrovSDController />

        <TarasovAAController />

        <KomarBGController />

        <KuzminLOController />

        <KorneevDSController />

        <VesyolkinASController />

        <KapyrinKAcontroller />

        <MurashevController />

        <KlevleevVRController />

        <MiroshnikGKController />

        <IvanovDSController />

        <OleynikovAPController />

        <ExampleController />

      </header>
    </div>
  );
}

// Add only top-level component to the App

export default App;
