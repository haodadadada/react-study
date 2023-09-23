import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* history模式的组件 */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// BrowserRouter与HashRouter的区别
// 1、底层原理不一样
  // BrowserRouter使用的是history API
  // HashRouter使用的是URL的哈希值
// 2、path表现形式不一样
  // BrowserRouter的路径中没有#, 例如 localhost：3000/demo/test
  // HashRouter的路径包含#，例如 localhost：3000/#demo/test
// 3、刷新后对路由state参数的影响
  // (1).BrowserRouter没有任何影响 因为state保存在history对象中
  // (2).HashRouter刷新后会导致路由state参数的丢失
// 4、备注：HashRouter可以用于解决一些路径错误相关的问题

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
