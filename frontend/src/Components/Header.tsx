import { Link } from "react-router"

function Header(){
    return <header className="flex flex-col items-end justify-center pr-3">
        <Link to="/history" className="font-bold text-gray-600 hover:text-gray-800 font-outfit underline">
            Your History
        </Link>
    </header>   
}   
export default Header