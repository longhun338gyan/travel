<template>
  <div>
    <Header />
    <nuxt />
    <Footer />
  </div>
</template>

<script>
// 导入头部组件,文件扩展名可以省略
import Header  from "@/components/header";
import Footer from "@/components/footer";
export default {
  //注册组件
  components: {
    Header,
    Footer
  }
};
</script>

<style lang="less">
// 公共样式 不要加scoped
* {
  margin: 0;
  padding: 0;
}
html,
body,
h1,
h2,
h3,
h4,
h5,
h6,
div,
img,
input,
span,
ul,
li,
ol,
dl,
dt,
dd,
p,
a {
  padding: 0;
  margin: 0;
}
/*让所有斜体 不倾斜*/
em,
i {
  font-style: normal;
}
/*去掉列表前面的小点*/
li {
  list-style: none;
}
/*图片没有边框   去掉图片底侧的空白缝隙*/
img {
  border: 0; /*ie6*/
  vertical-align: middle;
}
/*让button 按钮 变成小手*/
button {
  cursor: pointer;
}
/*取消链接的下划线*/
a {
  color: #666;
  text-decoration: none;
}

a:hover {
  color: #e33333;
}

input,
img,
textarea {
  border: none;
  outline: none;
}
</style>
