import Login from './pages/login/login';
import Register from './pages/register/register';
import UsersList from'./pages/usersList/usersList';
import EditUserList from'./components/editUserList/editUserList';
import AddNewUser from'./components/addNewUser/addNewUser';
import AddNewStation from'./components/addNewStation/addNewStation';
import Sidebar from'./components/sidebar/sidebar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './contexts/authContext';
import HomePage from'./pages/homePage/homePage';
import StationsList from'./pages/stationsList/stationsList';
import StationCard from'./components/stationCard/stationCard';
import ServiceCard from'./components/serviceCard/serviceCard';
import Parallax from'./components/parallax/parallax';
import Navbar from'./components/navbar/navbar';
import Footer from'./components/footer/footer';
import StationDetail from'./components/stationDetail/stationDetail';
import StationPage from'./pages/stationPage/stationPage';
import EditStation from'./components/editStation/editStation';
import AdminNavbar from'./components/adminNavbar/adminNavbar';
import Contact from'./components/contact/contact';
import ServiceDetail from'./pages/serviceDetail/serviceDetail';
import ServiceList from'./pages/serviceList/serviceList';
import StationCardFake from'./static/stationCard/stationCard';
import StaticListStations from'./static/ListStaticStations/staticListStations';
function App() {
  return (
    <AuthProvider>
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/users" element={<UsersList />} />
          <Route path="/EditUserList" element={<EditUserList />} />
          <Route path="/adduser" element={<AddNewUser />} />
          <Route path="/addstation" element={<AddNewStation />} />
          <Route path="/sidebar" element={<Sidebar />} />
          <Route path="/homepage" element={<HomePage />} />
          <Route path="/stations" element={<StationCard />} />
          <Route path="/services" element={<ServiceCard />} />
          <Route path="/paralax" element={<Parallax />} />
          <Route path="/navbar" element={<Navbar />} />
          <Route path="/footer" element={<Footer />} />
          <Route path="/stationsdata" element={<StationsList />} />
          <Route path="/stations/:stationId" element={<StationDetail />} />
          <Route path="/services" element={<StationPage />} />
          <Route path="/editstation" element={<EditStation />} />
          <Route path="/servicedetail" element={<ServiceDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/servicesdata" element={<ServiceList />} />
          <Route path="/cardstations" element={<StationCardFake />} />
          <Route path="/staticstations" element={<StaticListStations />} />
        </Routes>
      </Router>
    </div>
    </AuthProvider>
  );
}
export default App;