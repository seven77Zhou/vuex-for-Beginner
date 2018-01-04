//使用常量替代 mutation 事件类型在各种 Flux 实现中是很常见的模式。
//这样可以使 linter 之类的工具发挥作用
//同时把这些常量放在单独的文件中可以让你的代码合作者对整个 app 包含的 mutation 一目了然
//用不用常量取决于你——在需要多人协作的大型项目中，这会很有帮助。但如果你不喜欢，你完全可以不这样做。

export const SOME_MUTATION = 'SOME_MUTATION';
export const ADD_STR = 'ADD_STR';
export const SET_CART_ITEMS = 'SET_CART_ITEMS';
export const SET_CHECKOUT_STATUS = 'SET_CHECKOUT_STATUS';