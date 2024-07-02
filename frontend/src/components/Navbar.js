import React, { useState } from 'react';
import { BeakerIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const NavItem = ({ href, children }) => (
  <a
    href={href}
    className="text-gray-700 hover:bg-gray-100 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
  >
    {children}
  </a>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <BeakerIcon className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-2xl font-bold text-gray-900">ChemLab DB</span>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <NavItem href="/">ホーム</NavItem>
              <NavItem href="/datasets">データセット</NavItem>
              <NavItem href="/competitions">コンペティション</NavItem>
              <NavItem href="/collaborators">コラボレーター</NavItem>
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <NavItem href="/settings">設定</NavItem>
            <NavItem href="/mypage">マイページ</NavItem>
            <button className="ml-3 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
              ログイン
            </button>
          </div>
          <div className="-mr-2 flex items-center sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            >
              <span className="sr-only">メニューを開く</span>
              {isOpen ? (
                <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="sm:hidden">
          <div className="pt-2 pb-3 space-y-1">
            <NavItem href="/">ホーム</NavItem>
            <NavItem href="/datasets">データセット</NavItem>
            <NavItem href="/competitions">コンペティション</NavItem>
            <NavItem href="/collaborators">コラボレーター</NavItem>
            <NavItem href="/settings">設定</NavItem>
            <NavItem href="/mypage">マイページ</NavItem>
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200">
            <button className="w-full flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
              ログイン
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;