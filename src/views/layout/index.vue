<template>
  <div id="layout-box">
     <!-- 路由出口 -->
     <router-view></router-view>
    <!-- 下方导肮页 -->
    <van-tabbar route>
      <van-tabbar-item icon="home-o" replace to="/">首页</van-tabbar-item>
      <van-tabbar-item icon="comment-o" replace to="/qa">问答</van-tabbar-item>
      <van-tabbar-item icon="video-o" replace to="/video">视频</van-tabbar-item>
      <van-tabbar-item icon="user-o" replace to="/my">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  
};
</script>

<style></style>
