import { Link, Outlet, Navigate } from 'react-router-dom';

const AdminLayout = () => {
  const isAuthenticated = localStorage.getItem('isAdminAuthenticated') === 'true';

  if (!isAuthenticated) {
    return <Navigate to="/admin/login" replace />;
  }

  const handleLogout = () => {
    localStorage.removeItem('isAdminAuthenticated');
    window.location.href = '/';
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Admin Header */}
      <header className="bg-white shadow">
        <div className="container px-4 mx-auto">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link to="/admin" className="text-xl font-bold text-salon-purple">
                Tryst Admin
              </Link>
            </div>
            <nav className="flex items-center space-x-4">
              <Link
                to="/admin/blog"
                className="px-3 py-2 text-sm font-medium text-gray-700 rounded-md hover:text-salon-purple hover:bg-gray-100"
              >
                Manage Blogs
              </Link>
              <Link
                to="/"
                className="px-3 py-2 text-sm font-medium text-gray-700 rounded-md hover:text-salon-purple hover:bg-gray-100"
              >
                View Site
              </Link>
              <button
                onClick={handleLogout}
                className="px-3 py-2 text-sm font-medium text-red-600 rounded-md hover:text-red-800 hover:bg-red-50"
              >
                Logout
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container px-4 py-8 mx-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout; 