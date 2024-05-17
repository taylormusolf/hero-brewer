import { Link, useLocation, Navigate } from "react-router-dom";

function SystemPage() {
    const location = useLocation();
    const systems = {PF2e: 'Pathfinder 2e', PF1e: 'Pathfinder 1e'}
    if(!systems[location.pathname.slice(8)]){
        console.log(!systems[location.pathname.slice(8)])
       return <Navigate to="/404"/>;  
    } 
    return (
        <>
            <h1 className="text-3xl font-bold underline">
                {`${systems[location.pathname.slice(8)]} System`}
            </h1>
            <button>
                <Link to='/'>Go to Home Page</Link>
            </button>
        </>
    )
  }
  
  export default SystemPage;