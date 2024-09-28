import React, { useState } from 'react';

function LoginForm() {
 
  return (
    <form className="mt-6" >
            <div>
              <label className="block text-gray-700">Correo electronico</label>
              <input type="email" name="" id="" placeholder="Escribe tu email" className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" autoFocus autoComplete="email" required />
            </div>
    
            <div className="mt-4">
              <label className="block text-gray-700">Contraseña</label>
              <input type="password" name="" id="" placeholder="Escribe tu contraseña" minLength="6" className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" required />
            </div>
    
            <div className="text-right mt-2">
              <a href="#" className="text-sm font-semibold text-gray-700 hover:text-blue-700 focus:text-blue-700">Olvidaste tu contraseña?</a>
            </div>
    
            <button type="submit" className="w-full block bg-blue-500 hover:bg-blue-400 focus:bg-blue-400 text-white font-semibold rounded-lg px-4 py-3 mt-6">Log In</button>
          </form>
  );
}

export default LoginForm;


