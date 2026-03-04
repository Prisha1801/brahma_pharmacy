import { Routes, Route, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX } from 'react-icons/fi';
import Header from './components/Header/Header';

import Home from './pages/Home';
import Footer from './components/Footer/Footer';
import BoardMembers from './components/bviop/BoardMembers';
import PresidentDesk from './components/bviop/PresidentDesk';
import GeneralSecretary from './components/bviop/GeneralSecretary';
import VicePresident from './components/bviop/VicePresident';
import Principal from './components/bviop/Principal';
import LMC from './components/bviop/LMC';
import MissionVision from './components/bviop/MissionVision';
import Approvals from './components/bviop/Approvals';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';
import AdmissionForm from './components/Admission/AdmissionForm';
import EligibilityCriteria from './components/Admission/EligibilityCriteria';
import RequiredDocument from './components/Admission/RequiredDocument';
import AdmissionProcess from './components/Admission/AdmissionProcess';
import CollegeFlyers from './components/Admission/CollegeFlyers';
import FeesScholarship from './components/Admission/FeesScholarship';
import POPEO from './components/Academics/POPEO';
import Faculties from './components/Academics/Faculties';
import BPharm from './components/Courses/BPharm';
import Transport from './components/Facilities/Transport';
import Hostel from './components/Facilities/Hostel';
import Cafeteria from './components/Facilities/Cafeteria';
import Sports from './components/Facilities/Sports';
import Library from './components/Facilities/Library';
import Notice from './components/StudentCorner/Notice';
import Examination from './components/StudentCorner/Examination';
import RulesRegulation from './components/StudentCorner/RulesRegulation';
import StudentCouncilCommittee from './components/StudentCorner/StudentCouncilCommittee';
import Alumni from './components/StudentCorner/Alumni';
import Curriculam from './components/StudentCorner/Curriculam';
import CollegeDevCommittee from './components/Committee/CollegeDevCommittee';
import AntiRagging from './components/Committee/AntiRagging';
import Grievance from './components/Committee/Grievance';
import WomensCommittee from './components/Committee/WomensCommittee';

function App() {
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/board-members" element={<BoardMembers />} />
          <Route path="/president-desk" element={<PresidentDesk />} />
          <Route path="/general-secretary-desk" element={<GeneralSecretary />} />
          <Route path="/vice-president-desk" element={<VicePresident />} />
          <Route path="/principal-desk" element={<Principal />} />
          <Route path="/lmc" element={<LMC />} />
          <Route path="/vision-mission" element={<MissionVision />} />
          <Route path="/approvals-affiliations" element={<Approvals />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path='/admission/apply-now' element={<AdmissionForm />} />
          <Route path='/admission/eligibility-criteria' element={<EligibilityCriteria />} />
          <Route path='/admission/required-documents' element={<RequiredDocument />} />
          <Route path='/admission/admission-process' element={<AdmissionProcess />} />
          <Route path='/admission/college-flyers' element={<CollegeFlyers />} />
          <Route path='/admission/fees-scholarship' element={<FeesScholarship />} />
          <Route path='/academics/PO-PEO-PSO-CO' element={<POPEO />} />
          <Route path='/academics/faculties' element={<Faculties />} />
          <Route path='/courses/B.Pharm' element={<BPharm />} />
          <Route path='/facilities/transport' element={<Transport />} />
          <Route path='/facilities/hostel' element={<Hostel />} />
          <Route path='/facilities/cafeteria' element={<Cafeteria />} />
          <Route path='/facilities/sports' element={<Sports />} />
          <Route path='/facilities/library' element={<Library />} />
          <Route path='/student-corner/notice' element={<Notice />} />
          <Route path='/student-corner/examination' element={<Examination />} />
          <Route path='/student-corner/rules-regulations' element={<RulesRegulation />} />
          <Route path='/student-corner/student-council-committee' element={<StudentCouncilCommittee />} />
          <Route path='/student-corner/alumni' element={<Alumni />} />
          <Route path='/student-corner/curriculum' element={<Curriculam />} />
          <Route path='/committee/college-development-committee' element={<CollegeDevCommittee />} />
          <Route path='/committee/anti-ragging' element={<AntiRagging />} />
          <Route path='/committee/grievance-committee' element={<Grievance />} />
          <Route path='/committee/women-committee' element={<WomensCommittee />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;