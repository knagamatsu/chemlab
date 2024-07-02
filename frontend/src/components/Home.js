import React from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import Sidebar from './Sidebar';

const DatasetCard = ({ title, author, updatedAt, size, fileCount }) => (
  <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border border-primary-100">
    <h3 className="text-lg font-semibold mb-2 text-primary-700 hover:text-primary-800">{title}</h3>
    <p className="text-sm text-secondary-600 mb-2">{author} • {updatedAt}に更新</p>
    <p className="text-sm text-secondary-500">
      <span className="mr-3">{size}</span>
      <span>{fileCount} ファイル</span>
    </p>
  </div>
);

const Home = () => {
  return (
    <div className="flex bg-secondary-50 min-h-screen">
      <Sidebar activePage="home" />
      <div className="flex-1 p-8">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-primary-800 mb-2">ホーム</h1>
          <p className="text-secondary-600">
            ChemLab DBへようこそ。最新のデータセットとコンペティションをチェックしましょう。
          </p>
        </header>
        
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4 text-primary-700">最新のデータセット</h2>
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
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4 text-primary-700">進行中のコンペティション</h2>
          {/* コンペティションのリストをここに追加 */}
        </div>
      </div>
    </div>
  );
};

export default Home;