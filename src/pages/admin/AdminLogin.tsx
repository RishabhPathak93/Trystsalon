import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {
  const [passkey, setPasskey] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would be a secure authentication process
    // For demo purposes, using a simple passkey
    if (passkey === 'tryst2024') {
      localStorage.setItem('isAdminAuthenticated', 'true');
      navigate('/admin/blog');
    } else {
      setError('Invalid passkey');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-salon-purple">Admin Login</h2>
          <p className="mt-2 text-sm text-gray-600">Enter your passkey to continue</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="passkey" className="block text-sm font-medium text-gray-700">
              Passkey
            </label>
            <input
              type="password"
              id="passkey"
              value={passkey}
              onChange={(e) => setPasskey(e.target.value)}
              className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-salon-purple focus:border-salon-purple"
              required
            />
          </div>

          {error && (
            <p className="text-sm text-red-600">{error}</p>
          )}

          <button
            type="submit"
            className="w-full px-4 py-2 text-sm font-medium text-white transition-colors rounded-md bg-salon-purple hover:bg-dark-green"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin; 