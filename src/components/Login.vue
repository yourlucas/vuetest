<template>
<div class="all">
    <!-- <div class="title">登录</div> -->
    <img class="logo" src="../assets/logo.png" alt="">
    <div class="info">
        <div class="username"> 
           <span class="left">用户名:</span>
          <input v-model="username" class="right" type="text">
     </div>
     <div class="password"> 
        <span class="left">密&nbsp;&nbsp;&nbsp;&nbsp;码:</span>
        <input v-model="password" class="right" type="password">
     </div>
    </div>
    
    <button @click="login">登录</button>
</div>
</template>
<script>
export default {
    name:'Login',
    data(){
        return{
            username,
            password
        }
    },
    methods:{
        login(){
            alert(this.username+"的密码是"+this.password);
        }
    }
}
</script>
<style scoped>
    .logo{
        width: 30%;
        margin-top: 130px;
        margin-bottom: 60px;
    }
    .title{
        background: #ee80d6;
        padding-top: 40px;
    }
    .username .left,.password .left{
        width: 30%;
    }
    .username .right,.password .right{
        width: 70%;
    }
    .password{
        margin-top: 10px;
    }

    button{
        margin-top: 50px;
        width: 90%;
        height: 30px;
        border: solid #ff0000 1px;
        background: rgb(64, 64, 209);
        color: white;
        font-size: 19px;
        border-radius: 3px;
    }

    .info{
        padding:10px 20px;
        border: #ee80d6 solid 2px;
        border-radius: 5px;
    }

</style>