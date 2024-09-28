import { useEffect } from "react";
import { UserAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export function LoginUser() {
    const navigate = useNavigate();
    const { user, googleSignIn } = UserAuth();

    const iniciarSesion = async () => {
        try {
            await googleSignIn();
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        if (user && user.email) {
            const redirectUrl = localStorage.getItem('redirectUrl');
            
            if (redirectUrl) {
                navigate(redirectUrl);
                localStorage.removeItem('redirectUrl');
            } else {
                navigate("/blog/");
            }
        }
    }, [user, navigate]);

    return (
        <div className="max-w-xl mx-auto mt-10">
            <form className="mt-6">
                <div>
                    <label
                        htmlFor="username"
                        className="block text-sm text-gray-800 dark:text-gray-200"
                    >
                        Usuario
                    </label>
                    <input
                        type="text"
                        id="username"
                        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                </div>

                <div className="mt-4">
                    <div className="flex items-center justify-between">
                        <label
                            htmlFor="password"
                            className="block text-sm text-gray-800 dark:text-gray-200"
                        >
                            Contraseña
                        </label>
                    </div>
                    <input
                        type="password"
                        id="password"
                        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                </div>

                <div className="mt-6">
                    <button className="w-full px-6 py-2.5 text-sm font-medium tracking-wide bg-gray-800 rounded-lg text-white">
                        Iniciar sesión
                    </button>
                </div>

                <div className="flex items-center mt-6 -mx-2">
                    <button
                        onClick={iniciarSesion}
                        type="button"
                        className="flex items-center justify-center w-full px-6 py-2 mx-2 text-sm font-medium text-white transition-colors duration-300 transform bg-blue-500 rounded-lg"
                    >
                        <svg className="w-4 h-4 mx-2 fill-current" viewBox="0 0 24 24">
                            <path d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z"></path>
                        </svg>
                        <span className="hidden mx-2 sm:inline">Iniciar sesión con Google</span>
                    </button>
                </div>
            </form>
        </div>
    );
}

export default LoginUser;
