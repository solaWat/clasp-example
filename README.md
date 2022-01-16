## INFO

https://github.com/google/clasp

## PREPARE

```
npm install -g @google/clasp
yarn install
clasp login
```

## USAGE

1. [参考記事](https://creators-note.chatwork.com/entry/gas-google-form)を読みながら手順を実行します。
   - フォームへの登録項目は適宜変更ください
1.  `env.ts.sample`ファイルを`env.ts`にリネームし、内容を取得した値に書き換えます
1. 「Google Apps Scriptの作成」したスクリプト IDで`.clasp.json`の「scriptId」を書き換えます

## DEPLOY

```
clasp push
clasp open
```

デプロイ後は、プロジェクトで一度、Configの「setProperties」関数を実行します。

## TEST

```
yarn test
```
