import './App.css';
import Navbar from './NavBar/Navbar';
import HomeSection from './Sections/HomeSection';
import CelebrateSection from './Sections/CelebrateSection';
import SellingCardSection from './Sections/SellingCardSection';
import StartingSection from './Sections/StartingSection';
import HorizontalCards from './Sections/HorizontalCards';
import NextThisWeek from './Sections/NewThisWeek';
import BigCards from './Sections/BigCards';
import LoadMore from './Sections/LoadMore';
import Footer from './Sections/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HomeSection />
      <hr style={{ marginTop: '20px' }} />
      <CelebrateSection />
      <SellingCardSection />
      <StartingSection />
      <HorizontalCards />
      <NextThisWeek />
      <BigCards />
      <LoadMore />
      <Footer />
    </div>
  );
}

export default App;
