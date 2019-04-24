<template>
  <div id="app">
    <nav class="navbar navbar-default">
      <div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="#">用户管理系统</a>
        </div>
        <div id="navbar" class="collapse navbar-collapse">
          <ul class="nav navbar-nav">
            <li><router-link to="/">主页</router-link></li>
            <li><router-link to="/about">关于</router-link></li>
          </ul>
          <ul class="nav navbar-nav navbar-right">
            <li><router-link to="/add">添加用户</router-link></li>
          </ul>
        </div>
      </div>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
//使用json-server创建本地数据接口:https://github.com/typicode/json-server
//jsonPlaceholder的数据变为本地数据：json-server http://jsonplaceholder.typicode.com/db (package.json里面配置)
//post / delete / patch借助工具：POSTman
export default {
  name: 'App'
}
</script>

<style>

</style>
