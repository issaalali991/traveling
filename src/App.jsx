import { useState, useEffect } from "react";
import { createClient } from "contentful";
import DetailView from "./components/DetailView/DetailView";
import FeaturedTrips from "./components/LandingPage/FeaturedTrips";
import NavBar from "./components/Global/Navbar";
import Hero from "./components/LandingPage/Hero";
import Footer from "./components/Global/Footer";
import { BrowserRouter,Routes,Route } from "react-router-dom"
import NotFound from "./components/Global/NotFound";


const client = createClient({
  space: import.meta.env.VITE_SPACE,
  accessToken: import.meta.env.VITE_ACCESSTOKEN,
});

function App() {
  const [entries, setEntries] = useState([]);
  const [trip, setTrip] = useState(1);

  useEffect(() => {
    client
      .getEntries()
      .then((response) => {
       
       
        setEntries(response.items.map((item) => item));
        console.log(response.items.map((item) => item.fields.id));

      })
      .catch(console.error);
  }, []);

  const handleButtonClick = (val) => {
    setTrip(val)
  };

  if (entries == []) return <p>Loading...</p>;

  return (
    
     <div className="bg-gray-950">
      <div className="max-w-screen-xl mx-auto">
      
       <BrowserRouter>
       <NavBar/>
        <Routes>
        <Route path="/" element={<Hero trip={entries} handleButtonClick={handleButtonClick} />} />
        <Route path="/trip" element={<DetailView trip={entries[trip]} />} />
        <Route path="*" element={<NotFound/> } />
        </Routes>
        <Footer />
        </BrowserRouter>

       
        {/* <FeaturedTrips items={entries} /> */}
        
      
      </div>
    </div>
  );
}
export default App;
