<template>
  <div class="footer-wrapper">
    <footer>
      <el-row class="info-list">
        <el-col :span="6" :offset="1">
          <h5>闲云旅游网</h5>
          <p>上亿旅行者共同打造的"旅行神器"</p>
          <p>
            <span>6000</span> 个细分目的地新玩法
          </p>
          <p>
            <span>600,000</span> 全球多个旅游的目的地
          </p>
          <p>
            <span>7000,55,66</span> 次攻略下载
          </p>
          <p>
            <span>388840</span>个旅游产品供应商
          </p>
        </el-col>
        <el-col :span="5">
          <h5>关于我们</h5>
          <p>隐私政策 商标声明</p>
          <p>服务协议 游记协议</p>
          <p>商城平台服务协议</p>
          <p>网络信息侵权通知指引</p>
          <p>闲云旅游旅游网服务监督员</p>
          <p>网站地图加入闲云旅游</p>
        </el-col>
        <el-col :span="5">
          <h5>旅行服务</h5>
          <p>旅游攻略 酒店预订</p>
          <p>旅游特价 国际租车</p>
          <p>旅游问答 旅游保险</p>
          <p>旅游指南 订火车票</p>
          <p>旅游资讯 APP下载</p>
        </el-col>
        <el-col :span="6" class="scan">
          <p>
            <img src="http://157.122.54.189:9093/images/1556522965.png" alt />
          </p>关注我们
        </el-col>
      </el-row>
      <div
        class="licence"
      >京ICP备08001421号 京公网安备110108007702 Copyright © 2016-2019 闲云旅游 All Rights Reserved</div>
    </footer>
  </div>
</template>
<script>
export default {};
</script>

<style lang="less" scoped>
.footer-wrapper {
  background: #333;
  color: #ccc;
  min-width: 1000px;
}
.info-list {
  h5 {
    font-weight: normal;
    font-size: 15px;
    margin-bottom: 10px;
    margin-top: 20px;
  }
  p {
    font-size: 12px;
    line-height: 1.8;
    span {
      color: orange;
    }
  }
  .scan {
    margin-top: 20px;
    text-align: center;
    img {
      width: 140px;
      height: 140px;
      margin-bottom: 5px;
    }
    font-size: 0.75px;
  }
}

.licence {
  border-top: 1px #666 solid;
  margin-top: 20px;
  padding: 50px 0;
  text-align: center;
  font-size: 0.75rem;
}
</style>
