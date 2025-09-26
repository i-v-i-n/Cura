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
        <div className="flex flex-row gap-2 items-center cursor-pointer font-bold font-outfit">
            <img src="info-button.png" alt="info" className="w-6"/>
            <p>info</p>
        </div>
    </div>
}
export default Navbar;