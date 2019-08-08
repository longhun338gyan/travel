<template>
  <div class="container">
    <div class="wrapper">
      <el-row>
        <el-col :span="6">
          <div class="asideLeft">
            <p >热门城市 <i class="el-icon-arrow-right"></i></p>
            <p >推荐城市 <i class="el-icon-arrow-right"></i></p>
            <p >奔向海岛 <i class="el-icon-arrow-right"></i></p>
            <p >主题推荐 <i class="el-icon-arrow-right"></i></p>
            <div>
              
              <span>1</span>
              <a href="#">北京 </a>
              <a href="#">世界著名古都和现代化国际城市</a>
            </div>
          </div>


       
        </el-col>
        <el-col :span="18">
          <div class="asidelRight">
            <el-input placeholder="请输入你想要去的地方,比如'广州''" >
              <el-button slot="append" icon="el-icon-search"></el-button>
            </el-input>
            <p>大家对塞班岛总存在着这样的误解，知道它是美属地盘，就理所当然地觉得这里的花费一定很高，花费高有高的玩法，那如果只有6000块的预算呢？要怎么玩？关于旅行这件事，我们要让钱花得更有道理，收下这份攻略，带你6000块花式玩转塞班。图：塞班岛。 by第5季旅游一、怎样用6000块玩转塞班？大多数出境游客人不做预算或最</p>
          </div>
        </el-col>   
      </el-row>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: []
    };
  }
};
</script>
<style lang="less" scoped>
.wrapper {
  width: 1000px;
  margin: 0 auto;
  height: 700px;
  border: 1px solid #ccc;
  .asideLeft {
   width: 240px;
    height: 100px;
    background: wheat;
  }
  .asidelRight {  
    
  }
}
</style>
