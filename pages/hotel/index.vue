<template>
  <div class="container">
    <div class="hotel">
      <!-- 面包屑 -->
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">酒店</el-breadcrumb-item>
        <el-breadcrumb-item>喜来登酒店预约</el-breadcrumb-item>
      </el-breadcrumb>
      <div class="stayHotel">
        <el-row :gutter="10" >
          <el-col :span="6">
            <!-- 酒店城市选择 -->
            <el-select v-model="value" filterable placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-col>
          <el-col :span="10">
            <el-date-picker
              v-model="value1"
              type="daterange"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
            ></el-date-picker>
          </el-col>
          <el-col :span="4">
            <el-select v-model="value" filterable placeholder="人数设定">
              <el-option
                v-for="item in options1"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-col>
          <el-col :span="4">
            <el-button type="primary">查看价格</el-button>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value1: "",
      options: [{ value: "广州" }, { value: "北京" }],

       options1: [{ value: "1" }, { value: "2" },{ value: "3" },{ value: "4" },{ value: "5" },{ value: "6" },{ value: "7" }]
    }
     
   
  }
};
</script>
<style lang="less" scoped>
.container {
  width: 1000px;
  margin: 20px auto;
  .el-icon-arrow-right {
    color: #606266;
    .stayHotel{
      el-col{
        margin-left: 10px;
      }
    }
  }
}
</style>
