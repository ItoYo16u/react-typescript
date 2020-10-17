# 状態管理について

## グローバルな状態管理の必要性

- Reactは基本的にデータが上から下へ一方向に流れる
  - この制約のおかげで多人数で大規模な開発をしてもコードに秩序が保たれやすい

- 一方で複数のコンポーネントにまたがる値のPropsのバケツリレーがつらい

## Reactのグローバルな状態管理

### 前提条件
- 状態の更新があちこちで行われるのを避けたい
  - コードを複雑にしないため
  - ロジックをあちこちに散らばらせないため

デファクトの状態管理はReduxおよびそれをサポートする`Redux toolkit`というライブラリ

小規模なアプリを作る場合は、`Context API`を利用する
