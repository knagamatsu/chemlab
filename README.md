# ChemLab DB: 化学メーカーの社内データセット管理アプリ

![chemlab](./dataset_app.gif)
ChemLab DBは、化学メーカー向けの社内データセット管理アプリケーションです。
Kaggleライクなインターフェースを採用し、データセットの登録、公開、および社内コンペティションの開催を可能にします。

## 主な機能

1. **データセット管理**
   - データセットの登録と公開
   - メタデータの追加と編集
   - バージョン管理
   - アクセス権限の設定

2. **データセット検索・閲覧**
   - 高度な検索機能
   - カテゴリ別ブラウジング
   - データプレビュー

3. **社内コンペティション**
   - コンペティションの作成と管理
   - 参加者の募集と管理
   - 評価指標の設定
   - リーダーボードの表示

4. **コラボレーション機能**
   - チーム作成と管理
   - ディスカッションフォーラム
   - ノートブック共有

5. **ダッシュボード**
   - 個人活動サマリー
   - トレンドデータセットとコンペティションの表示

## 技術スタック

- フロントエンド: React, Tailwind CSS
- バックエンド: FastAPI
- データベース: MongoDB
- 認証: JWT

## セットアップ

1. リポジトリのクローン:
   ```
   git clone https://github.com/your-organization/chemlab-db.git
   cd chemlab-db
   ```

2. 環境変数の設定:
   `.env` ファイルを作成し、必要な環境変数を設定してください。

3. バックエンドのセットアップ:
   ```
   cd backend
   pip install -r requirements.txt
   uvicorn main:app --reload
   ```

4. フロントエンドのセットアップ:
   ```
   cd frontend
   npm install
   npm start
   ```

5. ブラウザで `http://localhost:3000` にアクセスしてアプリケーションを開きます。

## 使用方法

1. アカウントを作成またはログインします。
2. ダッシュボードから、データセットの登録やコンペティションへの参加が可能です。
3. データセットをアップロードし、必要なメタデータを入力します。
4. コンペティションを作成する場合は、「コンペティションを主催」ボタンから新規コンペティションを設定できます。
5. 他のユーザーのデータセットを閲覧したり、進行中のコンペティションに参加したりすることができます。
s