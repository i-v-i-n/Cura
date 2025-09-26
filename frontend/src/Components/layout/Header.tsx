import { Link } from "react-router"

function Header(){
    return <header className="flex flex-col items-end justify-center pr-3 text-xl">
        <Link to="/history" className="font-bold text-gray-600 hover:text-gray-800 font-outfit underline">
            Your History belongs Here.
        </Link>
    </header>   
}   
export default Header