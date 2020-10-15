# Objective
> Provide a simple setup steps that can fit in one page.

# environment

nodebrew,nodist,nodenvなどを使ってnodeのバージョン管理をしてください.

- node 12.11.0
- npm 6.11.3

このチュートリアルでは
- React
- TypeScript
- emotion(Reactでstylesheetをイイ感じに扱うためのライブラリ)

を使います.

ReactのComponentは、なんらかの事情がない限りFunctional Componentで記述します.

emotionをつかってスタイルを当てる場合は、ファイルの冒頭に
```
/** @jsx jsx */
```
というコメントを追加してください. これが無いとemotionのスタイルのコンパイルに失敗します.

# How to use 

```
git clone path/to/repository
npm install
npm start
```
Visit http://localhost:8080
