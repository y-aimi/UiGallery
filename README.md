# アプリ説明
## 概要
UIギャラリー  
https://ui-gallery-one.vercel.app/

Nuxt.jsを使用した様々なUIコンポーネントのギャラリーサイトです。  
HTMLとCSSが編集とコピペが可能なため気になったコンポーネントを簡単に利用できます。  

レスポンシブ対応済み。  
PWA対応済み。

## 動作確認
MacBook Pro

# 環境構築手順

## 前提条件

VSCodeのExtensionでDev Containerをインストールする。  
https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers

## 手順①：dockerビルド

docker-compose.ymlファイルがあるディレクトリ（rootディレクトリ）に移動し、  
下記コマンドでdockerビルドを実行。  

```
docker compose up --build
```

## 手順②：リポジトリをVSCodeで起動し、コンテナで起動する

Dev Containerの機能を使い、「コンテナーで再度開く」をクリック  
画像のように左下に「開発コンテナー」と出ていれば成功

![image](https://github.com/user-attachments/assets/86d411d0-2362-4b94-9365-ab156bc71431)
