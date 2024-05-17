import { useEffect, useState } from "react";
import { Link, useLocation, Navigate } from "react-router-dom";

function SystemPage() {
    const[json, setJson] = useState()

    useEffect(()=>{
        const thing = async() => {
            const res = await fetch('https://pathbuilder2e.com/json.php?id=249504');
            const body = await res.json();
            setJson(body);
        }
        thing();
    }, []);

    const location = useLocation();
    const systems = {PF2e: 'Pathfinder 2e', PF1e: 'Pathfinder 1e'}
    if(!systems[location.pathname.slice(8)]){
       return <Navigate to="/404"/>;  
    }
    const system = systems[location.pathname.slice(8)];
    function text(){
        if(system === 'Pathfinder 2e'){
            return (<>
                    <h1>Import from Pathbuilder</h1>
                    <label>Pathbuilder Export Code</label><input />
                    <button>Import</button>
                </>)
        } else if(system === 'PF1e'){
            
        }
    }
    
    function character(){
        const {build} = json;
        console.log(build)
        return (
            json?.success ? <>
                    <div>
                        <h1>{build.name}</h1>
                        <div>
                            <h1>{build.class}</h1>
                            <h1>{build.level}</h1>
                        </div>
                    </div>
                    <div>
                        <h2>{build.alignment}</h2>
                        <h2>{build.sizeName}</h2>
                        <h2>{build.ancestry}</h2>
                        <h2>{build.heritage}</h2>
                        {/* special tag like plant*/}
                    </div>
                    
                </> :
                <>
                    <h1>Bad Code</h1>
                </>
        )
    }
    return (
        <>
            <h1 className="text-3xl font-bold underline">
                {`${system} System`}
            </h1>
            {text()}
            {json && character()}
            <button>
                <Link to='/'>Go to Home Page</Link>
            </button>
        </>
    )
  }
  
  export default SystemPage;