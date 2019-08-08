<template>
  <div class="container">
    <el-row type="flex" justify="space-between">
      <div class="flights-content">
        <!-- 过滤条件 -->
        <FlightsFilters :data="cacheFlightsData" @getDataList="getDataList" />
        <!-- 航班头部布局 -->
        <FlightsListHead />
        <!-- 航班信息 -->
        <div>
          <FlightsItem v-for="(item,index) in dataList" :key="index" :data="item" />

          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="pageIndex"
            :page-sizes="[2, 4, 6, 8]"
            :page-size="pageSize"
            layout="total, sizes, prev, pager, next, jumper"
            :total="total"
          ></el-pagination>
        </div>
      </div>
      <!-- 侧边栏 -->
      <div class="aside">
        <!-- 侧边组件 -->
        <FlightsAside />
      </div>
    </el-row>
  </div>
</template>
<script>
//引入组件
import FlightsListHead from "@/components/air/flightsListHead";
import FlightsItem from "@/components/air/flightsItem";
import FlightsFilters from "@/components/air/flightsFilters";
import FlightsAside from "@/components/air/flightsAside";
export default {
  data() {
    return {
      //显示的条数
      pageSize: 2,
      //显示的页数
      pageIndex: 1,
      //总条数
      total: 0,
      //后台返回的数据列表
      flightsData: {
        info: {},
        options: {}
      },
      cacheFlightsData: {
        info: {},
        options: {}
      },
      //保存当前的数据列表
      dataList: []
    };
  },
  // 注册组件
  components: {
    FlightsListHead,
    FlightsItem,
    FlightsFilters,
    FlightsAside
  },
  watch: {
    $route() {
      this.pageIndex = 1;
      this.getData();
    }
  },
  methods: {
       //修改页数的时候触发
    handleSizeChange(val) {
      //修改分页条数
      this.pageSize = val;
      // 获取分页的数据
      this.getDataList();
      console.log(`每页 ${val} 条`);
    },
    //切换页数时触发
    handleCurrentChange(val) {
      //修改页数
      this.pageIndex = val;
      //获取分页的数据
      this.getDataList();
      console.log(`当前页: ${val}`);
    },
      //获取分页的数据
    getDataList(arr) {
      if (arr) {
        this.flightsData.flights = arr;
        this.total = arr.length;
      }
      //修改dataLsit的数据 0|2  2|4
      this.dataList = this.flightsData.flights.slice(
        (this.pageIndex - 1) * this.pageSize,
        (this.pageIndex - 1) * this.pageSize + this.pageSize
      );
    },
    getData() {
      this.$axios({
        url: "/airs",
        method: "GET",
        params: this.$route.query
      }).then(res => {
        // console.log(res.data);
        //保存中的数据
        this.flightsData = res.data;

        this.cacheFlightsData = { ...res.data };
        // 总条数
        this.total = this.flightsData.flights.length;
        //切割出当前页面显示的数据
        this.dataList = this.flightsData.flights.slice(0, 2);
      });
    }
  },
  mounted() {
    // console.log(this.$route.query)
    //请求列表数据
    this.getData();
  }
};
</script>
<style lang="less" scoped>
.container {
  width: 1000px;
  margin: 20px auto;
}
.flights-content {
  width: 745px;
  font-size: 14px;
}
.aside {
  width: 240px;
}
</style>
