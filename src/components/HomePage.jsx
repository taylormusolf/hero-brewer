import { Link } from "react-router-dom";

function HomePage() {

    return (
      <>
        <h1>Statblock Exchange</h1>
        <h2>Share your PC and NPC builds with the world</h2>
        <div className="card">
          <h2>Choose an RPG system</h2>
          <Link to='/system/PF1e'>Pathfinder 1e</Link>
          <Link to='/system/PF2e'>Pathfinder 2e</Link>
          <button>D&D 5e</button>
          <button>Marvel Multiverse RPG</button>
          <button>Starfinder 2e</button>
          <button>Vampire: The Masquerade</button>
          <button>Avatar Legends RPG</button>
          <button>Delta Green</button>
          <button>Call of Cthulhu 7e</button>
        </div>
      </>
    )
  }
  
  export default HomePage;
  