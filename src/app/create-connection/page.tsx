"use client"
import React, { useState, ChangeEvent, FormEvent } from 'react';
import Navbar from '@/layout/Navbar';
import Footer from '@/layout/Footer';

interface FormData {
  host: string;
  port: string;
  username: string;
  password: string;
  database: string;
  ssl: boolean;
}

type Status = 'idle' | 'testing' | 'success' | 'error';

const databases = [
  {
    id: 'postgresql',
    name: 'PostgreSQL',
    description:
      'Connect your PostgreSQL database and create powerful dashboards with AI-generated insights.',
    available: true,
    recommended: true,
    iconColor: 'text-blue-600',
    bgColor: 'bg-blue-100',
  },
  {
    id: 'mysql',
    name: 'MySQL',
    description:
      'MySQL support is coming soon. Connect your MySQL database for dashboard creation.',
    available: false,
    recommended: false,
    iconColor: 'text-orange-600',
    bgColor: 'bg-orange-100',
  },
  {
    id: 'mongodb',
    name: 'MongoDB',
    description:
      'MongoDB support is in development. Connect your NoSQL database for advanced analytics.',
    available: false,
    recommended: false,
    iconColor: 'text-green-600',
    bgColor: 'bg-green-100',
  },
];

const DatabaseConnection: React.FC = () => {
  const [step, setStep] = useState<number>(1);
  const [selectedDb, setSelectedDb] = useState<string>('');
  const [formData, setFormData] = useState<FormData>({
    host: '',
    port: '5432',
    username: '',
    password: '',
    database: '',
    ssl: true,
  });
  const [status, setStatus] = useState<Status>('idle');
  const [error, setError] = useState<string>('');

  const handleSelect = (db: string) => {
    setSelectedDb(db);
    setStep(2);
    setStatus('idle');
    setError('');
  };

  const handleBack = () => {
    setStep(1);
    setStatus('idle');
    setError('');
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleTest = () => {
    // basic validation
    if (!formData.host || !formData.username || !formData.database) {
      setError('Please fill in all required fields.');
      setStatus('error');
      return;
    }
    setStatus('testing');
    setError('');
    // simulate API call
    setTimeout(() => {
      // here you'd actually call your API
      setStatus('success');
    }, 1000);
  };

  const handleCreate = () => {
    if (status !== 'success') {
      setError('Please test the connection first.');
      setStatus('error');
      return;
    }
    alert('Connection saved! Redirecting to dashboard builder...');
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-grow max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 my-12">
        {/* Progress Indicator */}
        <div className="flex items-center justify-center mb-8">
          <div className="flex items-center">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center ${
                step === 1
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-200 text-gray-600'
              }`}
            >
              1
            </div>
            <span className="ml-2 text-sm font-medium text-gray-700">
              Select DB
            </span>
          </div>
          <div className="flex w-30 h-px bg-gray-300 mx-4" />
          <div className="flex items-center">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center ${
                step === 2
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-200 text-gray-600'
              }`}
            >
              2
            </div>
            <span className="ml-2 text-sm font-medium text-gray-700">
              Connect
            </span>
          </div>
        </div>

        {/* Step 1: Database Selection */}
        {step === 1 && (
          <div>
            <div className="text-center mb-12">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                Connect Your Database
              </h1>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Choose your database type to start creating AI-powered
                dashboards with ByteLoom. Your data stays secure with
                enterprise-grade encryption.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {databases.map((db) => (
                <div
                  key={db.id}
                  onClick={() =>
                    db.available && handleSelect(db.id)
                  }
                  className={`relative cursor-pointer border p-6 rounded-lg transition-all duration-200 ${
                    db.available
                      ? 'hover:shadow-lg border-blue-200'
                      : 'opacity-75 border-gray-200 hover:border-gray-300'
                  }`}
                >
                  {db.recommended && (
                    <span className="absolute top-2 right-2 bg-blue-500 text-white text-xs font-medium px-2 py-1 rounded">
                      Recommended
                    </span>
                  )}
                  <div className="flex items-center space-x-4 mb-4">
                    <div
                      className={`${db.bgColor} w-12 h-16 rounded-lg flex items-center justify-center`}
                    >
                      {/* Simple inline "database" icon */}
                      <svg
                        className={`w-8 h-8 ${db.iconColor}`}
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2C7.03 2 3 3.79 3 6v3c0 2.21 4.03 4 9 4s9-1.79 9-4V6c0-2.21-4.03-4-9-4zm0 5c-4.4 0-7-1.12-7-2s2.6-2 7-2 7 1.12 7 2-2.6 2-7 2zm-7 5c0 2.21 4.03 4 9 4s9-1.79 9-4v3c0 2.21-4.03 4-9 4s-9-1.79-9-4v-3zm9 2c-4.4 0-7-1.12-7-2s2.6-2 7-2 7 1.12 7 2-2.6 2-7 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">
                        {db.name}
                      </h3>
                      <p className="text-sm text-gray-500">
                        {db.available
                          ? db.recommended
                            ? 'Most Popular'
                            : 'Available'
                          : 'Coming Soon'}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">
                    {db.description}
                  </p>
                  <div className="flex items-center justify-between text-sm font-medium">
                    <span
                      className={
                        db.available
                          ? 'text-blue-600'
                          : 'text-gray-400'
                      }
                    >
                      {db.available
                        ? 'Get Started →'
                        : 'Coming Soon'}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            {/* Security Notice */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <div className="flex items-start">
                <svg
                  className="w-5 h-5 text-blue-400 mr-3"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <div>
                  <h4 className="text-sm font-medium text-blue-800">
                    Enterprise Security
                  </h4>
                  <p className="text-sm text-blue-700 mt-1">
                    Your database credentials are encrypted with
                    AES-256 and never stored in plain text. We only
                    read your schema, not your actual data.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Step 2: Connection Form */}
        {step >= 2 && (
          <div
            className={`rounded-xl p-6 transition-opacity duration-300 min-w-[700px] ${
              step === 2
                ? 'bg-white border border-gray-200 shadow-sm'
                : 'opacity-50'
            }`}
          >
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              {selectedDb === 'postgresql'
                ? 'PostgreSQL Connection'
                : 'Connection Details'}
            </h2>
            <form
              onSubmit={(e: FormEvent) => e.preventDefault()}
              className="space-y-4"
            >
              <div>
                <label
                  htmlFor="host"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Host
                </label>
                <input
                  id="host"
                  name="host"
                  type="text"
                  value={formData.host}
                  onChange={handleChange}
                  placeholder="localhost"
                  className="w-full border border-gray-300 rounded p-2"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="port"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Port
                </label>
                <input
                  id="port"
                  name="port"
                  type="number"
                  value={formData.port}
                  onChange={handleChange}
                  placeholder="5432"
                  className="w-full border border-gray-300 rounded p-2"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="username"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Username
                </label>
                <input
                  id="username"
                  name="username"
                  type="text"
                  value={formData.username}
                  onChange={handleChange}
                  placeholder="postgres"
                  className="w-full border border-gray-300 rounded p-2"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  className="w-full border border-gray-300 rounded p-2"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="database"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Database Name
                </label>
                <input
                  id="database"
                  name="database"
                  type="text"
                  value={formData.database}
                  onChange={handleChange}
                  placeholder="myapp_production"
                  className="w-full border border-gray-300 rounded p-2"
                  required
                />
              </div>

              <div className="flex items-center space-x-2">
                <input
                  id="ssl"
                  name="ssl"
                  type="checkbox"
                  checked={formData.ssl}
                  onChange={handleChange}
                  className="h-4 w-4 text-blue-600 border-gray-300 rounded"
                />
                <label
                  htmlFor="ssl"
                  className="text-sm font-medium text-gray-700"
                >
                  Enable SSL Connection
                </label>
              </div>

              <div className="flex justify-between mt-6">
                <button
                  type="button"
                  onClick={handleBack}
                  className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
                >
                  Back
                </button>
                <button
                  type="button"
                  onClick={handleTest}
                  className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                  {status === 'testing'
                    ? 'Testing...'
                    : 'Test Connection'}
                </button>
              </div>

              {status === 'success' && (
                <div className="mt-4 flex justify-end">
                  <button
                    type="button"
                    onClick={handleCreate}
                    className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                  >
                    Create Connection
                  </button>
                </div>
              )}

              {status === 'error' && (
                <div className="mt-4 text-red-600">{error}</div>
              )}
            </form>
          </div>
        )}
      </main>

      {/* Footer */}
      <Footer />

     
    </div>
  );
};

export default DatabaseConnection;
