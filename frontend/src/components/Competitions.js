import React from 'react';
import { MagnifyingGlassIcon, PlusIcon } from '@heroicons/react/24/outline';
import Sidebar from './Sidebar';

const CompetitionCard = ({ title, description, prize, timeLeft, participants }) => (
  <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
    <h3 className="text-lg font-semibold mb-2 text-primary-600 hover:text-primary-700">{title}</h3>
    <p className="text-sm text-secondary-600 mb-2">{description}</p>
    <div className="flex justify-between items-center text-sm text-secondary-500">
      <span>賞金: {prize}</span>
      <span>{timeLeft}</span>
    </div>
    <div className="mt-2 text-sm text-secondary-500">
      参加者: {participants}
    </div>
  </div>
);

const Competitions = () => {
  return (
    <div className="flex bg-secondary-50 min-h-screen">
      <Sidebar activePage="competitions" />
      <div className="flex-1 p-8">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-secondary-800 mb-2">コンペティション</h1>
          <p className="text-secondary-600">
            最新のコンペティションに参加して、スキルを磨き、賞金を獲得しましょう。
            <a href="/competition-guidelines" className="text-primary-600 hover:underline">コンペティションのガイドラインを確認する</a>
          </p>
        </header>
        
        <div className="mb-8 flex space-x-4">
          <div className="relative flex-1">
            <input
              type="text"
              placeholder="コンペティションを検索"
              className="w-full pl-10 pr-4 py-2 border border-secondary-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
            <MagnifyingGlassIcon className="absolute left-3 top-2.5 h-5 w-5 text-secondary-400" />
          </div>
          <button className="px-4 py-2 bg-primary-500 text-white rounded-md hover:bg-primary-600 transition-colors duration-300 flex items-center">
            <PlusIcon className="h-5 w-5 mr-2" />
            コンペティションを主催
          </button>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4 text-secondary-700">進行中のコンペティション</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <CompetitionCard
              title="新規触媒設計チャレンジ 2024"
              description="効率的で環境にやさしい新しい触媒の設計"
              prize="100万円"
              timeLeft="残り30日"
              participants="156チーム"
            />
            <CompetitionCard
              title="タンパク質折りたたみ予測コンペ"
              description="AIを用いたタンパク質の3D構造予測"
              prize="50万円"
              timeLeft="残り45日"
              participants="89チーム"
            />
            <CompetitionCard
              title="グリーンケミストリーイノベーション"
              description="持続可能な化学プロセスの開発"
              prize="200万円"
              timeLeft="残り60日"
              participants="203チーム"
            />
            <CompetitionCard
              title="創薬AI最適化チャレンジ"
              description="AIを用いた新規医薬品候補化合物の設計"
              prize="150万円"
              timeLeft="残り20日"
              participants="178チーム"
            />
            <CompetitionCard
              title="材料科学シミュレーションコンペ"
              description="新規材料の特性予測モデルの開発"
              prize="80万円"
              timeLeft="残り40日"
              participants="112チーム"
            />
            <CompetitionCard
              title="環境モニタリングデータ解析"
              description="大気汚染予測モデルの構築"
              prize="70万円"
              timeLeft="残り15日"
              participants="95チーム"
            />
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4 text-secondary-700">近日開始のコンペティション</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <CompetitionCard
              title="バイオインフォマティクスチャレンジ"
              description="ゲノムデータの新しい解析手法の開発"
              prize="120万円"
              timeLeft="開始まで10日"
              participants="登録受付中"
            />
            <CompetitionCard
              title="量子化学計算コンペ"
              description="大規模分子系の高精度・高速計算手法の開発"
              prize="180万円"
              timeLeft="開始まで20日"
              participants="登録受付中"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Competitions;