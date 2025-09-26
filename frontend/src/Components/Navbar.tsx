interface NavbarProps {
    username?: string;
    type:'auth'|'user';
}

function Navbar(props: NavbarProps) {
    return <div className="w-full flex items-center justify-between p-4 font-outfit">
        <p className="font-bold text-xl">Cura</p>
        {props.type==='user' ? <div>
            <p>Hi,<span className="font-bold">{props.username}!</span></p>
            </div> : <p>Your symptoms, <span className="font-bold">simplified.</span></p>
        }
        <div>
            <p>Profile</p>
        </div>
    </div>
}
export default Navbar;