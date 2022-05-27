import './App.css';
import Cabinet from './Pages/Cabinet';
import Medicament from './Pages/Medicament';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Medecin from './Pages/Medecin';
import Rascan from './Pages/Rascan';
import Mutuelle from './Pages/Mutuelle';
import Utilisateur from './Pages/Utilisateur';
import Patient from './Pages/Patient';
import SalleAttente from './Pages/SalleAttente';
import TablePatient from './Components/Table/TablePatient';
import TableConsultPatien from './Components/Table/TableConsultPatien';
function App() {
  return (
    <Router>
      <Routes>
        <Route path='medecin'   element={<Medecin/>}>
          <Route path='cabinet' element={<Cabinet/>} />
          <Route path='medicament' element={<Medicament/>} />
          <Route path='rascan' element={<Rascan/>} />
          <Route path='mutuelle' element={<Mutuelle/>} />
          <Route path='user' element={<Utilisateur/>} />
          <Route path='patient' element={<Patient/>} >
            <Route path='' element={<TablePatient/>} />
            <Route path='consultations/id' element={<TableConsultPatien/>} />
          </Route>
          <Route path='salleAttente' element={<SalleAttente/>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
