import React from 'react';
import { MagnifyingGlassIcon, PlusIcon } from '@heroicons/react/24/outline';
import Sidebar from './Sidebar';

const DatasetCard = ({ title, author, updatedAt, size, fileCount }) => (
  <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
    <h3 className="text-lg font-semibold mb-2 text-primary-600 hover:text-primary-700">{title}</h3>
    <p className="text-sm text-secondary-600 mb-2">{author} • {updatedAt}に更新</p>
    <p className="text-sm text-secondary-500">
      <span className="mr-3">{size}</span>
      <span>{fileCount} ファイル</span>
    </p>
  </div>
);

const Datasets = () => {
  return (
    <div className="flex bg-secondary-50 min-h-screen">
      {/* <Sidebar activePage="datasets" /> */}
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
              className="w-full pl-10 pr-4 py-2 border border-secondary-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
            <MagnifyingGlassIcon className="absolute left-3 top-2.5 h-5 w-5 text-secondary-400" />
          </div>
          <button className="px-4 py-2 bg-primary-500 text-white rounded-md hover:bg-primary-600 transition-colors duration-300 flex items-center">
            <PlusIcon className="h-5 w-5 mr-2" />
            新規データセット
          </button>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4 text-secondary-700">トレンドデータセット</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <DatasetCard
              title="有機合成反応データベース 2024"
              author="田中 化学"
              updatedAt="3時間前"
              size="2.3 GB"
              fileCount="3"
            />
            <DatasetCard
              title="無機材料物性データ"
              author="鈴木 研究室"
              updatedAt="2日前"
              size="1.5 GB"
              fileCount="5"
            />
            <DatasetCard
              title="タンパク質構造解析結果"
              author="佐藤 生化学"
              updatedAt="1週間前"
              size="3.7 GB"
              fileCount="2"
            />
            <DatasetCard
              title="環境汚染物質モニタリングデータ"
              author="環境化学研究所"
              updatedAt="2週間前"
              size="1.8 GB"
              fileCount="10"
            />
            <DatasetCard
              title="新規医薬品候補化合物ライブラリ"
              author="製薬研究チーム"
              updatedAt="1ヶ月前"
              size="5.2 GB"
              fileCount="7"
            />
            <DatasetCard
              title="材料科学シミュレーション結果"
              author="計算化学グループ"
              updatedAt="2ヶ月前"
              size="8.9 GB"
              fileCount="15"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Datasets;