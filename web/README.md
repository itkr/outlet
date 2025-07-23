# Web アプリケーション

Outlet プロジェクトのフロントエンドアプリケーションです。Next.js 15 と React 19 を使用したモダンなウェブアプリケーションで、チャット機能とサイドバーナビゲーションを備えています。

## 技術スタック

- **Next.js 15.3.1** - React フレームワーク (App Router)
- **React 19** - UI ライブラリ
- **TypeScript** - 型安全な開発
- **Tailwind CSS v4** - ユーティリティファーストCSS
- **shadcn/ui** - 再利用可能なUIコンポーネント
- **Radix UI** - アクセシブルなUIプリミティブ
- **Lucide React** - アイコンライブラリ

## 開始方法

### 前提条件

- Node.js 18 以上
- npm, yarn, pnpm, または bun

### 開発サーバーの起動

```bash
npm run dev
# または
yarn dev
# または
pnpm dev
# または
bun dev
```

[http://localhost:3000](http://localhost:3000) をブラウザで開いて結果を確認してください。

`src/app/page.tsx` を編集してページの内容を変更できます。ファイルを編集すると自動的にページが更新されます。

## プロジェクト構成

```
src/
├── app/                    # Next.js App Router
│   ├── page.tsx           # ホームページ
│   ├── layout.tsx         # ルートレイアウト
│   └── top/               # /top ルート
├── components/
│   ├── ui/                # 基本UIコンポーネント
│   │   ├── button.tsx
│   │   ├── sidebar.tsx
│   │   └── chat/          # チャット関連コンポーネント
│   │       ├── chat-bubble.tsx
│   │       ├── chat-input.tsx
│   │       ├── chat-message-list.tsx
│   │       └── expandable-chat.tsx
│   └── app-sidebar.tsx    # アプリケーションサイドバー
├── hooks/                 # カスタムフック
└── lib/                   # ユーティリティ関数
```

## 主な機能

### チャット機能
- リアルタイムチャットUI
- メッセージバブル表示
- 展開可能なチャットインターフェース
- ローディング状態の表示

### ユーザーインターフェース
- レスポンシブデザイン
- ダークモード対応
- アクセシブルなコンポーネント
- サイドバーナビゲーション

## スクリプト

```bash
npm run dev      # 開発サーバー起動 (Turbopack使用)
npm run build    # プロダクションビルド
npm run start    # プロダクションサーバー起動
npm run lint     # ESLint実行
npm run format   # Prettier実行
```

## コンポーネント設計

このプロジェクトは shadcn/ui の "new-york" スタイルを採用し、再利用可能なコンポーネントアーキテクチャを採用しています。

- **基本コンポーネント**: `src/components/ui/` 内の汎用的なUIコンポーネント
- **機能別コンポーネント**: `src/components/ui/chat/` のような機能特化コンポーネント
- **レイアウトコンポーネント**: アプリケーション全体のレイアウト管理

## デプロイ

### Vercel

最も簡単なデプロイ方法は [Vercel Platform](https://vercel.com/new) を使用することです。

詳細については [Next.js デプロイメントドキュメント](https://nextjs.org/docs/app/building-your-application/deploying) を参照してください。

## 開発ガイドライン

- TypeScript の型定義を適切に使用してください
- コンポーネントは可能な限り再利用可能な設計にしてください
- Tailwind CSS のユーティリティクラスを活用してください
- アクセシビリティを考慮したコンポーネント設計を心がけてください
