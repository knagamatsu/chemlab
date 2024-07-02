import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HomeIcon, FolderIcon, TrophyIcon, UsersIcon, Cog6ToothIcon, UserCircleIcon } from '@heroicons/react/24/outline';

const NavItem = ({ icon: Icon, label, to, active }) => (
  <li className={`px-2 py-3 rounded-lg mb-2 ${active ? 'bg-primary-100 text-primary-700' : 'text-secondary-600 hover:bg-primary-50 hover:text-primary-600'}`}>
    <Link to={to} className="flex items-center space-x-3">
      <Icon className="h-6 w-6" />
      <span className="font-medium">{label}</span>
    </Link>
  </li>
);

const Sidebar = () => {
  const location = useLocation();
  const activeRoute = location.pathname;

  return (
    <div className="bg-white w-64 min-h-screen p-4 border-r border-primary-100">
      <div className="flex items-center mb-8">
        {/* <img src="/logo.png" alt="ChemLab DB Logo" className="h-8 w-8 mr-2" /> */}
        <span className="text-2xl font-bold text-primary-800">ChemLab DB</span>
      </div>
      <nav>
        <ul>
          <NavItem icon={HomeIcon} label="ホーム" to="/" active={activeRoute === '/'} />
          <NavItem icon={FolderIcon} label="データセット" to="/datasets" active={activeRoute === '/datasets'} />
          <NavItem icon={TrophyIcon} label="コンペティション" to="/competitions" active={activeRoute === '/competitions'} />
          <NavItem icon={UsersIcon} label="コラボレーター" to="/collaborators" active={activeRoute === '/collaborators'} />
          <NavItem icon={Cog6ToothIcon} label="設定" to="/settings" active={activeRoute === '/settings'} />
          <NavItem icon={UserCircleIcon} label="マイページ" to="/mypage" active={activeRoute === '/mypage'} />
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;