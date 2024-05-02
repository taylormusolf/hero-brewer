import { Link } from "react-router-dom";

function SystemPage() {

    return (
        <>
            <h1 className="text-3xl font-bold underline">
                Hello world! From About Component
            </h1>
            <button>
                <Link to='/'>Go to Home Page</Link>
            </button>
        </>
    )
  }
  
  export default SystemPage;