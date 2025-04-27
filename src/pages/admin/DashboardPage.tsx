import React from 'react';
import { Link } from 'react-router-dom';
import {
  BarChart as ChartIcon,
  Package,
  Users,
  ShoppingBag,
  DollarSign,
  TrendingUp,
  AlertTriangle,
} from 'lucide-react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const DashboardPage: React.FC = () => {
  // Dummy data for demonstration
  const salesData = [
    { name: 'Jan', sales: 4000 },
    { name: 'Feb', sales: 3000 },
    { name: 'Mar', sales: 5000 },
    { name: 'Apr', sales: 4500 },
    { name: 'May', sales: 6000 },
    { name: 'Jun', sales: 5500 },
  ];

  const stats = [
    {
      title: 'Total Sales',
      value: '$24,500',
      change: '+12%',
      icon: <DollarSign className="h-6 w-6" />,
      trend: 'up',
    },
    {
      title: 'Total Orders',
      value: '156',
      change: '+8%',
      icon: <ShoppingBag className="h-6 w-6" />,
      trend: 'up',
    },
    {
      title: 'Total Products',
      value: '48',
      change: '0%',
      icon: <Package className="h-6 w-6" />,
      trend: 'neutral',
    },
    {
      title: 'Active Customers',
      value: '892',
      change: '+15%',
      icon: <Users className="h-6 w-6" />,
      trend: 'up',
    },
  ];

  const lowStockProducts = [
    { id: '1', name: 'Cozy Classics Leather Loafers', stock: 3 },
    { id: '2', name: 'Everyday Comfort Boots', stock: 2 },
    { id: '5', name: 'Elegant Evening Heels', stock: 4 },
  ];

  const recentOrders = [
    {
      id: 'ORD001',
      customer: 'John Doe',
      date: '2024-03-10',
      status: 'Processing',
      amount: 129.99,
    },
    {
      id: 'ORD002',
      customer: 'Jane Smith',
      date: '2024-03-09',
      status: 'Completed',
      amount: 249.98,
    },
    {
      id: 'ORD003',
      customer: 'Mike Johnson',
      date: '2024-03-09',
      status: 'Processing',
      amount: 89.99,
    },
  ];

  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className="font-serif font-bold text-2xl text-brown-dark mb-2">
          Dashboard Overview
        </h1>
        <p className="font-sans text-brown-medium">
          Welcome back! Here's what's happening with your store today.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-sm p-6 animate-fade-in"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="font-sans text-brown-medium mb-1">{stat.title}</p>
                <h3 className="font-serif font-bold text-2xl text-brown-dark">
                  {stat.value}
                </h3>
              </div>
              <div className={`p-2 rounded-full bg-brown-light bg-opacity-10`}>
                {stat.icon}
              </div>
            </div>
            <div className="mt-4">
              <span
                className={`text-sm font-medium ${
                  stat.trend === 'up'
                    ? 'text-green-600'
                    : stat.trend === 'down'
                    ? 'text-red-600'
                    : 'text-brown-medium'
                }`}
              >
                {stat.change}
              </span>
              <span className="text-sm text-brown-light ml-1">vs last month</span>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="lg:col-span-2 bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-serif font-semibold text-xl text-brown-dark">
              Sales Overview
            </h2>
            <div className="flex items-center text-brown-medium">
              <ChartIcon className="h-5 w-5 mr-2" />
              <span className="font-sans text-sm">Last 6 months</span>
            </div>
          </div>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={salesData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="sales" fill="#6D4C41" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-serif font-semibold text-xl text-brown-dark">
              Low Stock Alert
            </h2>
            <AlertTriangle className="h-5 w-5 text-amber-500" />
          </div>
          <div className="space-y-4">
            {lowStockProducts.map((product) => (
              <div
                key={product.id}
                className="flex items-center justify-between p-3 bg-cream rounded-md"
              >
                <div>
                  <h3 className="font-sans font-medium text-brown-dark mb-1">
                    {product.name}
                  </h3>
                  <p className="text-sm text-brown-medium">
                    Only {product.stock} left in stock
                  </p>
                </div>
                <Link
                  to={`/admin/products/${product.id}`}
                  className="text-brown-medium hover:text-brown-dark"
                >
                  <Package className="h-5 w-5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-serif font-semibold text-xl text-brown-dark">
            Recent Orders
          </h2>
          <Link
            to="/admin/orders"
            className="text-brown-medium hover:text-brown-dark font-sans text-sm flex items-center"
          >
            View all
            <TrendingUp className="h-4 w-4 ml-1" />
          </Link>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-brown-light">
                <th className="text-left py-3 px-4 font-sans font-medium text-brown-dark">
                  Order ID
                </th>
                <th className="text-left py-3 px-4 font-sans font-medium text-brown-dark">
                  Customer
                </th>
                <th className="text-left py-3 px-4 font-sans font-medium text-brown-dark">
                  Date
                </th>
                <th className="text-left py-3 px-4 font-sans font-medium text-brown-dark">
                  Status
                </th>
                <th className="text-right py-3 px-4 font-sans font-medium text-brown-dark">
                  Amount
                </th>
              </tr>
            </thead>
            <tbody>
              {recentOrders.map((order) => (
                <tr
                  key={order.id}
                  className="border-b border-brown-light last:border-0"
                >
                  <td className="py-3 px-4 font-sans text-brown-dark">
                    {order.id}
                  </td>
                  <td className="py-3 px-4 font-sans text-brown-dark">
                    {order.customer}
                  </td>
                  <td className="py-3 px-4 font-sans text-brown-medium">
                    {order.date}
                  </td>
                  <td className="py-3 px-4">
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        order.status === 'Completed'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-amber-100 text-amber-800'
                      }`}
                    >
                      {order.status}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-right font-sans font-medium text-brown-dark">
                    ${order.amount.toFixed(2)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;