import React, { ReactNode, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {
  Shovel as Shoe,
  LayoutDashboard,
  Package,
  ShoppingBag,
  Users,
  Settings,
  LogOut,
  Menu,
  X,
} from 'lucide-react';

interface AdminLayoutProps {
  children: ReactNode;
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navigation = [
    {
      name: 'Dashboard',
      path: '/admin/dashboard',
      icon: <LayoutDashboard className="h-5 w-5" />,
    },
    {
      name: 'Products',
      path: '/admin/products',
      icon: <Package className="h-5 w-5" />,
    },
    {
      name: 'Orders',
      path: '/admin/orders',
      icon: <ShoppingBag className="h-5 w-5" />,
    },
    {
      name: 'Customers',
      path: '/admin/customers',
      icon: <Users className="h-5 w-5" />,
    },
    {
      name: 'Settings',
      path: '/admin/settings',
      icon: <Settings className="h-5 w-5" />,
    },
  ];

  const handleLogout = () => {
    // TODO: Implement logout logic
    navigate('/admin/login');
  };

  return (
    <div className="min-h-screen bg-cream">
      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-brown-dark transform transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0`}
      >
        <div className="h-full flex flex-col">
          <div className="flex items-center justify-between h-16 px-4 border-b border-brown-medium">
            <Link to="/admin/dashboard" className="flex items-center space-x-2">
              <Shoe className="h-8 w-8 text-cream" />
              <span className="font-serif font-bold text-xl text-cream">
                Footsy Admin
              </span>
            </Link>
            <button
              className="lg:hidden text-cream hover:text-peach"
              onClick={() => setIsSidebarOpen(false)}
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <nav className="flex-1 px-4 py-6 space-y-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`flex items-center px-4 py-3 rounded-md transition-colors ${
                  location.pathname === item.path
                    ? 'bg-brown-medium text-cream'
                    : 'text-brown-light hover:bg-brown-medium hover:text-cream'
                }`}
              >
                {item.icon}
                <span className="ml-3 font-sans">{item.name}</span>
              </Link>
            ))}
          </nav>

          <div className="p-4 border-t border-brown-medium">
            <button
              onClick={handleLogout}
              className="flex items-center w-full px-4 py-3 text-brown-light hover:bg-brown-medium hover:text-cream rounded-md transition-colors"
            >
              <LogOut className="h-5 w-5" />
              <span className="ml-3 font-sans">Logout</span>
            </button>
          </div>
        </div>
      </aside>

      {/* Main content */}
      <div className="lg:pl-64">
        {/* Top bar */}
        <header className="bg-white shadow-sm">
          <div className="flex items-center justify-between h-16 px-4">
            <button
              className="lg:hidden text-brown-dark hover:text-brown-medium"
              onClick={() => setIsSidebarOpen(true)}
            >
              <Menu className="h-6 w-6" />
            </button>
            <div className="flex items-center space-x-4">
              <span className="font-sans text-brown-medium">Admin User</span>
            </div>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1">{children}</main>
      </div>
    </div>
  );
};

export default AdminLayout;