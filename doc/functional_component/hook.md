# hook

関数型コンポーネントで文脈をもつ値を扱うための機能

## 文脈の例
たとえば,
- DoMは mount(dom treeに追加される)/unmount(dom treeから除外される)という状態を持つ
- `Promise`は,`pending` => `(Success|Failure)`の文脈を持つ

## useState

関数型コンポーネントでstateを扱うための機能. stateを更新する関数を実行すると下位のツリーがリビルドされる

## useEffect

関数型コンポーネントでDomの mount/unmountのタイミングで実行すべき処理を扱うための機能. クラスコンポーネントの`componentDidMount`,`componentWillUnmount`に相当する.
