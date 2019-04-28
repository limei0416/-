<template>
  <div class="box">
    <div class="div1">
      <p>elem后台管理系统</p>
      <div class="div1-1">
        <input type="text" placeholder="用户名" v-model="name"><br>
        <input type="password" placeholder="密码" v-model="pass" class="div1-input"><br>
        <button @click="add()">登录</button>
        <p>温馨提示:</p>
        <span>未登录过的新用户，自动注册</span><br>
        <span>注册过的用户可凭账号密码登录</span>
      </div>
    </div>
  </div>



</template>



<script>
  import axios from "axios"
  export default {
    name: 'DengLu',
    data () {
      return {
        name:"",
        pass:""
      }

    },
    methods:{
      add(){
        let data={
          password: this.pass,
          user_name:this.name
        }
        // console.log(data)
        axios.post('https://elm.cangdu.org/admin/login',data).then((res)=>{
          console.log(res)
          if(res.data.status==1){
            this.$router.push("/shouye")
          }
        })
        axios.get("https://elm.cangdu.org/statis/admin/2019-04-24/count").then((item)=>{
          console.log(item.data)
        })
      }
    }
  }
</script>



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  *{
    margin: 0;
    padding: 0;
  }
  .box{
    width: 100%;
    height: 100%;
    background: #324057;
  }
  .div1{
    padding-top: 10%;
    width: 100%;
    height: 100%;
    text-align: center;



  }
  .div1 p{
    font-size: 35px;
    color: white;
  }
  .div1-1{
    margin: 50px auto;
    background: white;
    text-align: center;
    border-radius: 6px;
    width: 320px;
    height: 210px;
    padding: 20px;
  }
  .div1-1 input{
    width: 90%;
    height: 30px;
    border: 1px solid silver;
    border-radius: 5px;
    padding-left: 8px;



  }
  .div1-input{
    margin-top: 20px;
  }
  .div1-1 button{
    width: 90%;
    background: #20a0ff;
    height: 35px;
    border: none;
    margin-top: 20px;
    border-radius:3px;
    font-size: 16px;
    color: white;
  }
  .div1-1 p{
    margin-top: 15px;
    font-size: 13px;
    color: red;
  }
  .div1-1 span{
    padding: 0;
    color: red;
    font-size: 13px;
  }
</style>
