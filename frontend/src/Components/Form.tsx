import { Link } from "react-router";

function Form({ type }: { type: 'login' | 'signup' }) {
    function handleSubmit(event: React.FormEvent) {
        event.preventDefault();

    }
    return (
        <div className="p-8 rounded-lg w-96 font-outfit">
            <p className="text-2xl font-bold">
                {type === 'signup' ?
                    'Sign up for guidance, clarity, and peace of mind.'
                    : 'Welcome back! Your health, just a click away.'}
            </p>
            <br />
            <form>

                {type === 'login' && <div className="flex flex-col gap-2">
                    <label htmlFor="name">your name?</label>
                    <input type="text" placeholder="John Doe" id="name" name="name" className="border border-gray-300 p-2 rounded-md" />
                </div>}

                <div className="flex flex-col gap-2">
                    <label htmlFor="username">{type === 'signup' ? 'pick a username' : 'username'}</label>
                    <input type="text" placeholder="john.doe_" id="username" name="username" className="border border-gray-300 p-2 rounded-md" />
                </div>

                {type === 'login' && <div className="flex flex-col gap-2">
                    <label htmlFor="email">email</label>
                    <input type="email" placeholder="john.doe@example.com" id="email" name="email" className="border border-gray-300 p-2 rounded-md" />
                </div>}

                <div className="flex flex-col gap-2">
                    <label htmlFor="password">password</label>
                    <input type="password" placeholder="********" id="password" name="password" className="border border-gray-300 p-2 rounded-md" />
                </div>
                <p>{type == 'login' ? 'Don\'t have an account? ' : 'Already have an account? '}<Link className="text-blue-800 hover:text-red-500 underline" to={type === 'login' ? '/signup' : '/login'}>{type === 'login' ? 'Sign up' : 'Log in'}</Link></p>
                <button className="p-3 bg-gray-700 text-white w-full rounded-md mt-2.5" onClick={handleSubmit}>{type === 'login' ? 'Log in' : 'Sign up'}</button>
            </form>
        </div>
    );
}
export default Form;  
