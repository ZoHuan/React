/*
    1.该文件是用于创建一个为Count组件服务的reducer，reducer的本质就是一个函数
    2.reducer函数接收两个参数，分别为：之前的状态(preState),动作对象(action)
*/

// 初始化状态
const initState = 0;
export default function countReducer(preState = initState, action) {
  if (preState === undefined) preState = 0;
  // 从action中对象中获取：type、data
  const { type, data } = action;
  // 根据type决定如何加工数据
  switch (type) {
    case "increment":
      return preState + data;
    case "decrement":
      return preState - data;
    default:
      return preState;
  }
}
