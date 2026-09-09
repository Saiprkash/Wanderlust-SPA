import { useState } from "react";
const destinations = [
  {
    id: 1,
    name: "Ooty",
    country: "India",
    description:
      "A beautiful hill station in Tamil Nadu known for its cool climate, tea gardens, and scenic mountains.",
    rating: 4.7,
    category: "Nature",
    image: "/places/ooty.png",
  },
  {
    id: 2,
    name: "Goa",
    country: "India",
    description:
      "A tropical destination famous for its beaches, Portuguese architecture, and vibrant atmosphere.",
    rating: 4.8,
    category: "Beach",
    image: "/places/Goa.png",
  },
  {
    id: 3,
    name: "Jaipur",
    country: "India",
    description:
      "The Pink City, famous for its magnificent forts, palaces, colorful markets, and rich heritage.",
    rating: 4.7,
    category: "Heritage",
    image: "/places/Jaipur.jpeg",
  },
  {
    id: 4,
    name: "Manali",
    country: "India",
    description:
      "A Himalayan getaway surrounded by snow-capped mountains, forests, rivers, and adventure activities.",
    rating: 4.8,
    category: "Adventure",
    image: "/places/Manali.jpeg",
  },
  {
    id: 5,
    name: "Munnar",
    country: "India",
    description:
      "A peaceful hill destination famous for endless tea plantations, misty hills, and waterfalls.",
    rating: 4.8,
    category: "Nature",
    image: "/places/munnar.webp",
  },
  {
    id: 6,
    name: "Agra",
    country: "India",
    description:
      "A historic city home to the iconic Taj Mahal and several remarkable Mughal-era monuments.",
    rating: 4.6,
    category: "Heritage",
    image: "/places/Agra.jpg",
  },
  {
    id: 7,
    name: "Paris",
    country: "France",
    description:
      "The City of Light, celebrated for the Eiffel Tower, art, architecture, fashion, and cuisine.",
    rating: 4.9,
    category: "City",
    image: "/places/Paris.jpg",
  },
  {
    id: 8,
    name: "Tokyo",
    country: "Japan",
    description:
      "A fascinating blend of futuristic technology, traditional culture, incredible food, and city life.",
    rating: 4.9,
    category: "City",
    image: "/places/Tokyo.jpg",
  },
  {
    id: 9,
    name: "New York",
    country: "USA",
    description:
      "A vibrant global city famous for Times Square, Central Park, skyscrapers, museums, and diverse culture.",
    rating: 4.8,
    category: "City",
    image: "/places/Newyork.jpg",
  },
  {
    id: 10,
    name: "Bali",
    country: "Indonesia",
    description:
      "A tropical paradise known for beautiful beaches, temples, rice terraces, and lush landscapes.",
    rating: 4.9,
    category: "Beach",
    image: "/places/Bali.jpeg",
  },
  {
    id: 11,
    name: "Dubai",
    country: "United Arab Emirates(UAE)",
    description:
      "Modern skyscrapers, luxurious attractions, golden deserts, and vibrant city life make Dubai an unforgettable destination.",
    rating: 4.9,
    category: "City",
    image: "/places/Dubai.png",
  },
  {
    id: 12,
    name: "The Great Wall of China",
    country: "China",
    description:
      "A breathtaking historic landmark stretching across mountains, offering stunning views and a glimpse into China's rich history.",
    rating: 4.8,
    category: "Monument",
    image: "/places/china.png",
  },
];
console.log(destinations);

function App() {
  const [search, setSearch] = useState("");
  return (
    <>
      <Navbar />
      <Main search={search} setSearch={setSearch} />
      <DestinationList search={search} />
      <Footer />
    </>
  );
}
export default App;

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">🌍 Wanderlust</div>

      <div className="nav-links">
        <a href="#home">Home</a>
        <a href="#destinations">Destinations</a>
        <a href="#about">About</a>
      </div>

      <button className="favorite-btn">❤️ Favorites</button>
    </nav>
  );
}

function Main({ search, setSearch }) {
  return (
    <main className="main" id="home">
      <div className="main-content">
        <p className="main-tagline">✈️ EXPLORE • DREAM • DISCOVER</p>

        <h1>
          Discover Your
          <br />
          Next Adventure
        </h1>

        <p className="main-description">
          Explore breathtaking destinations, discover hidden gems, and create
          unforgettable memories around the world.
        </p>
        <div className="search-box">
          <span>🔍</span>
          <input
            type="text"
            placeholder="Search destinations..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          {search && <button onClick={() => setSearch("")}>✕</button>}
        </div>
      </div>
    </main>
  );
}
// function Search() {}
function DestinationList({ search }) {
  const [favorites, setFavorites] = useState([]);
  const filteredDestinations = destinations.filter((place) =>
    place.name.toLowerCase().includes(search.toLowerCase()),
  );
  return (
    <section className="destinations" id="destinations">
      <div className="section-heading">
        <p>EXPLORE THE WORLD</p>
        <h2>Popular Destinations</h2>
        <span>Find your next place to explore</span>
      </div>

      <div className="destination-grid">
        {filteredDestinations.map((place) => (
          <div className="destination-card" key={place.id}>
            <img src={place.image} alt={place.name} />

            <div className="card-content">
              <h3>{place.name}</h3>

              <p className="country">{place.country}</p>

              <p>{place.description}</p>

              <div className="card-bottom">
                <span>⭐️ {place.rating}</span>
                <button
                  onClick={() => {
                    favorites.includes(place.id)
                      ? setFavorites(favorites.filter((id) => id !== place.id))
                      : setFavorites([...favorites, place.id]);
                  }}
                >
                  {favorites.includes(place.id) ? "❤️ Saved" : "♡ Save"}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
function Footer() {
  return (
    <footer className="footer" id="about">
      <div className="footer-content">
        <div className="footer-brand">
          <h2>🌍 Wanderlust</h2>
          <p>
            Discover amazing places, plan your next adventure, and explore the
            world one destination at a time.
          </p>
        </div>

        <div className="footer-links">
          <h3>Explore</h3>
          <a href="#home">Home</a>
          <a href="#destinations">Destinations</a>
          <a href="#about">About</a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 Wanderlust. Made with love for explorers.</p>
      </div>
    </footer>
  );
}
