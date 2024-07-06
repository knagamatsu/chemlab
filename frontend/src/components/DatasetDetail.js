import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const DatasetDetail = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState('data');

  // この部分は実際のデータに置き換える必要があります
  const dataset = {
    id: "1",
    title: "有機合成反応データベース 2024",
    author: "田中 化学",
    updatedAt: "3時間前",
    size: "2.3 GB",
    fileCount: "3",
    type: "chemical",
    usability: "10.0",
    votes: "19",
    description: "この有機合成反応データベースは、2024年までに報告された最新の有機合成反応をまとめたものです。新しい触媒システム、環境にやさしい反応条件、および高効率な合成ルートに焦点を当てています。",
    license: "CC BY-NC-SA 4.0",
    updateFrequency: "四半期ごと",
    data: [
      { id: 1, 反応名: 'Suzuki-Miyauraカップリング', 収率: 95, 反応時間: 2, 温度: 80 },
      { id: 2, 反応名: 'Buchwald-Hartwig アミノ化', 収率: 88, 反応時間: 4, 温度: 100 },
      { id: 3, 反応名: 'Click反応', 収率: 99, 反応時間: 1, 温度: 25 },
      { id: 4, 反応名: 'Diels-Alder反応', 収率: 85, 反応時間: 6, 温度: 60 },
      { id: 5, 反応名: 'Grignard反応', 収率: 92, 反応時間: 3, 温度: 0 },
    ]
  };

  return (
    <div className="container mx-auto p-8">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">{dataset.title}</h1>
        <p className="text-gray-600">
          {dataset.author} • {dataset.updatedAt}に更新
        </p>
      </header>

      <div className="mb-8 flex space-x-4">
        <button className="px-4 py-2 bg-blue-500 text-white rounded-md">新規ノートブック</button>
        <button className="px-4 py-2 bg-gray-800 text-white rounded-md">ダウンロード ({dataset.size})</button>
      </div>

      <div className="mb-8">
        <nav className="flex border-b">
          <button
            className={`mr-4 py-2 ${activeTab === 'data' ? 'border-b-2 border-blue-500' : ''}`}
            onClick={() => setActiveTab('data')}
          >
            データカード
          </button>
          <button
            className={`mr-4 py-2 ${activeTab === 'code' ? 'border-b-2 border-blue-500' : ''}`}
            onClick={() => setActiveTab('code')}
          >
            コード (8)
          </button>
          <button
            className={`mr-4 py-2 ${activeTab === 'discussion' ? 'border-b-2 border-blue-500' : ''}`}
            onClick={() => setActiveTab('discussion')}
          >
            ディスカッション (2)
          </button>
          <button
            className={`mr-4 py-2 ${activeTab === 'suggestions' ? 'border-b-2 border-blue-500' : ''}`}
            onClick={() => setActiveTab('suggestions')}
          >
            提案 (0)
          </button>
        </nav>
      </div>

      {activeTab === 'data' && (
        <div className="grid grid-cols-3 gap-8">
          <div className="col-span-2">
            <h2 className="text-2xl font-semibold mb-4">データセットについて</h2>
            <p className="mb-4">{dataset.description}</p>
            
            <h3 className="text-xl font-semibold mb-2">データプレビュー</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white">
                <thead>
                  <tr>
                    {Object.keys(dataset.data[0]).map((key) => (
                      <th key={key} className="px-4 py-2 border">{key}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {dataset.data.map((row) => (
                    <tr key={row.id}>
                      {Object.values(row).map((value, i) => (
                        <td key={i} className="px-4 py-2 border">{value}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h3 className="text-xl font-semibold my-4">データ可視化</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={dataset.data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="反応名" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="収率" stroke="#8884d8" />
                <Line type="monotone" dataKey="反応時間" stroke="#82ca9d" />
                <Line type="monotone" dataKey="温度" stroke="#ffc658" />
              </LineChart>
            </ResponsiveContainer>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">データセット情報</h3>
            <div className="bg-gray-100 p-4 rounded-lg">
              <p className="mb-2"><strong>使用性スコア:</strong> {dataset.usability}</p>
              <p className="mb-2"><strong>ライセンス:</strong> {dataset.license}</p>
              <p className="mb-2"><strong>更新頻度:</strong> {dataset.updateFrequency}</p>
              <p className="mb-2"><strong>ファイル数:</strong> {dataset.fileCount}</p>
              <p className="mb-2"><strong>投票数:</strong> {dataset.votes}</p>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'code' && <div>コードコンテンツがここに表示されます</div>}
      {activeTab === 'discussion' && <div>ディスカッションコンテンツがここに表示されます</div>}
      {activeTab === 'suggestions' && <div>提案コンテンツがここに表示されます</div>}
    </div>
  );
};

export default DatasetDetail;