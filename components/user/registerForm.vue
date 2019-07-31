<template>
  <el-form :model="form" status-icon :rules="rules" ref="form" l class="form">
    <el-form-item class="form-item" prop="username">
      <el-input placeholder="用户名" v-model="form.username" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item class="form-item" prop="password">
      <el-input placeholder="密码" v-model="form.password" autocomplete="off" type="password"></el-input>
    </el-form-item>
    <el-form-item class="form-item" prop="checkPassword">
      <el-input placeholder="确认密码" v-model="form.checkPassword" autocomplete="off" type="password"></el-input>
    </el-form-item>
    <el-form-item class="form-item" prop="nickname">
      <el-input placeholder="输入昵称" v-model="form.nickname" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item class="form-item" prop="captcha">
      <el-input placeholder="验证码" v-model="form.captcha" autocomplete="off">
        <template slot="append">
          <el-button @click="handleSendCaptcha">发送验证码</el-button>
        </template>
      </el-input>
    </el-form-item>

    <el-form-item>
      <el-button class="submit" type="primary" @click="handleRegSubmit">注册</el-button>
    </el-form-item>
  </el-form>
</template>
<script>
export default {
  data() {
    const validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.form.password) {
        callback(new Error("两次密码不一致"));
      } else {
        callback();
      }
    };
    return {
      //表单数据
      form: {
        username: "",
        captcha: "",  //验证码
        nickname: "",  //昵称
        password: "",
        checkPassword: ""  //确认密码
      },
      //表单规则
      rules: {
        username: [
          { required: true, message: "用户名不能为空", trigger: "blur" }
        ],
        captcha: [
          { required: true, message: "验证码不能为空", trigger: "blur" }
        ],
        nickname: [
          { required: true, message: "昵称不能为空", trigger: "blur" }
        ],
        password: [
          { required: true, message: "密码不能为空", trigger: "blur" }
        ],

        // 自定义校验规则
        // https://element.eleme.cn/#/zh-CN/component/form#zi-ding-yi-xiao-yan-gui-ze
        checkPassword: [{ validator: validatePass, trigger: "blur" }]
      }
    };
  },
  methods: {
    //发送验证码
    handleSendCaptcha() {
      //判断手机号码是否为空
      if (!this.form.username) {
        this.$message.warning("手机号码不能为空");
        return;
      }
      this.$axios({
        url: "/captchas",
        method: "POST",
        data: {
          tel: this.form.username
        }
      }).then(res => {
        const { code } = res.data;
        this.$alert(`模拟验证码为:${code}`, "提示", { type: "warning" });
      });
    },

    // 注册
    handleRegSubmit() {
      this.$refs.form.validate(valid => {
        if (valid) {
          const { checkPassword, ...props } = this.form;
          this.$axios({
            url: "/accounts/register",
            method: "POST",
            data: props
          }).then(res => {
            //注册完成实现自动登录
            this.$store.commit("user/setUserInfo", res.data);
            this.$router.push("/");
          });
        }
      });
    }
  }
};
</script>
<style lang="less" scoped>
.form {
  padding: 25px;
}

.form-item {
  margin-bottom: 20px;
}

.form-text {
  font-size: 12px;
  color: #409eff;
  text-align: right;
  line-height: 1;
}

.submit {
  width: 100%;
  margin-top: 10px;
}
</style>
