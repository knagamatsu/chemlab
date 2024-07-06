import React from 'react';
import { BeakerIcon, LockClosedIcon, GlobeAsiaAustraliaIcon, UserGroupIcon, DocumentTextIcon, ArrowTrendingUpIcon } from '@heroicons/react/24/outline';
import Sidebar from './Sidebar';

const DatasetCard = ({ title, author, updatedAt, size, type, visibility, challenges }) => {
  const getIcon = (type) => {
    switch (type) {
      case 'experiment':
        return <BeakerIcon className="h-6 w-6 text-blue-500" />;
      case 'literature':
        return <DocumentTextIcon className="h-6 w-6 text-green-500" />;
      case 'patent':
        return <DocumentTextIcon className="h-6 w-6 text-yellow-500" />;
      default:
        return null;
    }
  };

  const getVisibilityIcon = (visibility) => {
    switch (visibility) {
      case 'private':
        return <LockClosedIcon className="h-4 w-4 text-red-500" />;
      case 'team':
        return <UserGroupIcon className="h-4 w-4 text-yellow-500" />;
      case 'public':
        return <GlobeAsiaAustraliaIcon className="h-4 w-4 text-green-500" />;
      default:
        return null;
    }
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border border-primary-100">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center">
          {getIcon(type)}
          <h3 className="text-lg font-semibold ml-2 text-primary-700 hover:text-primary-800">{title}</h3>
        </div>
        {getVisibilityIcon(visibility)}
      </div>
      <p className="text-sm text-secondary-600 mb-2">{author} • {updatedAt}に更新</p>
      <p className="text-sm text-secondary-500">
        <span className="mr-3">{size}</span>
        <span className="flex items-center">
          <ArrowTrendingUpIcon className="h-4 w-4 mr-1 text-indigo-500" />
          {challenges} チャレンジ
        </span>
      </p>
    </div>
  );
};

const Home = () => {
  return (
    <div className="flex bg-secondary-50 min-h-screen">
      {/* <Sidebar activePage="home" /> */}
      <div className="flex-1 p-8">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-primary-800 mb-2">ホーム</h1>
          <p className="text-secondary-600">
            ChemLab DBへようこそ。最新のデータセットをチェックし、チャレンジに参加しましょう。
          </p>
        </header>
        
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4 text-primary-700">注目のデータセット</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <DatasetCard
              title="有機合成反応データベース 2024"
              author="田中 化学"
              updatedAt="3時間前"
              size="2.3 GB"
              type="experiment"
              visibility="team"
              challenges="5"
            />
            <DatasetCard
              title="新規触媒特性評価"
              author="鈴木 研究室"
              updatedAt="2日前"
              size="1.5 GB"
              type="experiment"
              visibility="private"
              challenges="2"
            />
            <DatasetCard
              title="バイオプラスチック関連特許"
              author="佐藤 知財部"
              updatedAt="1週間前"
              size="3.7 GB"
              type="patent"
              visibility="public"
              challenges="8"
            />
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4 text-primary-700">最近のアクティビティ</h2>
          <ul className="space-y-2">
            <li className="text-secondary-600">山田さんが「有機合成反応データベース 2024」にチャレンジしました</li>
            <li className="text-secondary-600">鈴木さんが新しいデータセット「高分子材料の熱特性データ」をアップロードしました</li>
            <li className="text-secondary-600">佐藤さんの「新規触媒特性評価」チャレンジが完了しました</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;