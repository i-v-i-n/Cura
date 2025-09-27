interface NavbarProps {
    type:'auth'|'user';
}

function Navbar(props: NavbarProps) {
    const userData=localStorage.getItem("user")
    return <div className="w-full flex items-center justify-between p-4 font-outfit">
        <p className="font-bold text-xl">Cura</p>
        {props.type==='user' ? <div>
            <p className="text-xl">Hi,<span className="font-bold">{userData ? JSON.parse(userData).username : ''}!</span></p>
            </div> : <p>Your symptoms, <span className="font-bold">simplified.</span></p>
        }
        {props.type=='user'&&<div className="flex flex-row gap-2 items-center cursor-pointer font-bold font-outfit">
            <button className="hover:scale-105 transition-all duration-200 ease-in-out flex flex-row justify-center items-center" onClick={()=>{
                localStorage.removeItem("user")
                localStorage.removeItem("token")
                window.location.href="/"
            }}>
                <img src="logout.svg" alt="logout" className="w-10"/>
                <p>Logout</p>
            </button>
        </div>}
    </div>
}
export default Navbar;