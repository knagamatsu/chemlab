import React from 'react';
import { MagnifyingGlassIcon, PlusIcon, BeakerIcon, CubeIcon, ChartBarIcon, DocumentTextIcon, AdjustmentsHorizontalIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

const DatasetCard = ({ id, title, author, updatedAt, size, fileCount, type, usability, votes }) => {
  const getIcon = (type) => {
    switch (type) {
      case 'chemical': return <BeakerIcon className="h-8 w-8 text-blue-500" />;
      case 'material': return <CubeIcon className="h-8 w-8 text-green-500" />;
      case 'analysis': return <ChartBarIcon className="h-8 w-8 text-purple-500" />;
      default: return <DocumentTextIcon className="h-8 w-8 text-gray-500" />;
    }
  };

  return (
    <Link to={`/datasets/${id}`} className="block">
      <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-primary-100 hover:border-primary-200 transition-duration-300">
        <div className="flex items-center mb-2">
          {getIcon(type)}
          <h3 className="text-lg font-semibold ml-2 text-primary-600 hover:text-primary-700">{title}</h3>
        </div>
        <p className="text-sm text-secondary-600 mb-2">{author} • {updatedAt}に更新</p>
        <p className="text-sm text-secondary-500">
          <span className="mr-3">{size}</span>
          <span>{fileCount} ファイル</span>
        </p>
        <div className="mt-2 flex justify-between items-center">
          <span className="text-sm font-semibold text-blue-600 bg-blue-100 rounded-full px-2 py-1">
            Usability {usability}
          </span>
          <span className="text-sm text-gray-500 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
              <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
            </svg>
            {votes}
          </span>
        </div>
      </div>
    </Link>
  );
};

const Datasets = () => {
  return (
    <div className="flex bg-secondary-50 min-h-screen">
      <div className="flex-1 p-8">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-secondary-800 mb-2">データセット</h1>
          <p className="text-secondary-600">
            質の高いデータを探索、分析、共有しましょう。
            <a href="/learn-more" className="text-primary-600 hover:underline">データ型、作成、コラボレーションについて詳しく学ぶ</a>
          </p>
        </header>
        
        <div className="mb-8 flex space-x-4">
          <div className="relative flex-1">
            <input
              type="text"
              placeholder="データセットを検索"
              className="w-full pl-10 pr-10 py-2 border border-secondary-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
            <MagnifyingGlassIcon className="absolute left-3 top-2.5 h-5 w-5 text-secondary-400" />
            <AdjustmentsHorizontalIcon className="absolute right-3 top-2.5 h-5 w-5 text-secondary-400 cursor-pointer" />
          </div>
          <button className="px-4 py-2 bg-primary-500 text-white rounded-md hover:bg-primary-600 transition-colors duration-300 flex items-center">
            <PlusIcon className="h-5 w-5 mr-2" />
            新規データセット
          </button>
        </div>

        <div className="mb-4 flex flex-wrap gap-2">
          <button className="px-3 py-1 bg-secondary-200 text-secondary-700 rounded-full text-sm">全て</button>
          <button className="px-3 py-1 bg-white border border-secondary-300 text-secondary-700 rounded-full text-sm">化学</button>
          <button className="px-3 py-1 bg-white border border-secondary-300 text-secondary-700 rounded-full text-sm">材料科学</button>
          <button className="px-3 py-1 bg-white border border-secondary-300 text-secondary-700 rounded-full text-sm">生化学</button>
          <button className="px-3 py-1 bg-white border border-secondary-300 text-secondary-700 rounded-full text-sm">環境科学</button>
          <button className="px-3 py-1 bg-white border border-secondary-300 text-secondary-700 rounded-full text-sm">医薬品開発</button>
          <button className="px-3 py-1 bg-white border border-secondary-300 text-secondary-700 rounded-full text-sm">分析化学</button>
        </div>

        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-secondary-700">トレンドデータセット</h2>
            <Link to="/datasets" className="text-primary-600 hover:text-primary-700">
              全て見る
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <DatasetCard
              id="1"
              title="有機合成反応データベース 2024"
              author="田中 化学"
              updatedAt="3時間前"
              size="2.3 GB"
              fileCount="3"
              type="chemical"
              usability="10.0"
              votes="19"
            />
            <DatasetCard
              id="2"
              title="無機材料物性データ"
              author="鈴木 研究室"
              updatedAt="2日前"
              size="1.5 GB"
              fileCount="5"
              type="material"
              usability="9.8"
              votes="12"
            />
            <DatasetCard
              id="3"
              title="タンパク質構造解析結果"
              author="佐藤 生化学"
              updatedAt="1週間前"
              size="3.7 GB"
              fileCount="2"
              type="analysis"
              usability="9.5"
              votes="8"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Datasets;