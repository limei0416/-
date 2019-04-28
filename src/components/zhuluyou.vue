<template>
  <div id="app" class="ba">
    <el-container style=" border: 1px solid #eee;">
      <el-aside width="274px" style="background-color: #545c64; height:750px;padding: 0;margin: 0">
        <el-menu  default-active="1"
                  class="el-menu-vertical-demo"
                  @open="handleOpen"
                  @close="handleClose"
                  background-color="#545c64"
                  text-color="#fff"
                  active-text-color="#ffd04b"	>

          <!-- //首页 -->
          <router-link tag="div"  :to="{ name: 'Shouye', params: { username: manage} }">
            <el-menu-item index="1">
              <i class="el-icon-menu"></i>

              <router-link tag="span" :to="{ name: 'Shouye', params: { username: manage} }" slot="title" >首页</router-link>
            </el-menu-item>
          </router-link>
          <el-submenu index="2">
            <!-- //数据管理 -->
            <template slot="title"><i class="el-icon-document"></i>数据管理</template>
            <el-menu-item-group>

              <el-menu-item index="2-1">
                <router-link tag="div" :to="{ name: 'Long', params: { username: list} }">用户列表</router-link>
              </el-menu-item>

              <el-menu-item index="2-2">
              <router-link tag="div" :to="{ name: 'Shop', params: { username: food} }">商家列表</router-link>
              </el-menu-item>

              <el-menu-item index="2-3">
              <router-link tag="div"  :to="{ name: 'Food', params: { username: shipin} }">食品列表</router-link>
              </el-menu-item>

              <el-menu-item index="2-4">
              <router-link tag="div"  :to="{ name: 'Order', params: { username: orderID} }">订单列表</router-link>
              </el-menu-item>

              <el-menu-item index="2-5">
              <router-link tag="div" :to="{ name: 'Admin', params: { username: listing} }">管理员列表</router-link>
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="3">
            <!-- // 添加数据 -->
            <template slot="title"><i class="el-icon-plus"></i>添加数据</template>
            <el-menu-item-group>
              <router-link tag="div"  to="/paging">
                <el-menu-item index="3-1">添加商鋪</el-menu-item>
              </router-link>
              <router-link tag="div"  to="/paging">
                <el-menu-item index="3-2">添加商品</el-menu-item>
              </router-link>
            </el-menu-item-group>
          </el-submenu> <el-submenu index="4">
          <!--  //图标 -->
          <template slot="title"><i class="el-icon-star-on"></i>图标</template>
          <el-menu-item-group>
            <router-link tag="div"  to="/paging">
              <el-menu-item index="4-1">用户分布</el-menu-item>
            </router-link>
          </el-menu-item-group>

        </el-submenu> <el-submenu index="5">
          <!-- //编辑 -->
          <template slot="title"><i class="el-icon-edit"></i>编辑</template>
          <el-menu-item-group>
            <router-link tag="div"  to="/paging">

              <el-menu-item index="5-1">文本编辑</el-menu-item>
            </router-link>
          </el-menu-item-group>

        </el-submenu> <el-submenu index="6">
          <!-- //设置 -->
          <template slot="title"><i class="el-icon-setting"></i>设置</template>
          <el-menu-item-group>
            <router-link tag="div"  to="/paging">
              <el-menu-item index="6-1">管理员设置</el-menu-item>
            </router-link>
          </el-menu-item-group>

        </el-submenu> <el-submenu index="7">
          <!-- 	//说明 -->
          <template slot="title"><i class="el-icon-warning-outline"></i>说明</template>
          <el-menu-item-group>
            <router-link tag="div"  to="/paging">
              <el-menu-item index="7-1">说明</el-menu-item>
            </router-link>
          </el-menu-item-group>
        </el-submenu>
        </el-menu>
      </el-aside>
      <el-container >
        <router-view/>
      </el-container>
    </el-container>

  </div>
</template>

<script>
  export default {
    data() {
      return {
        manage:"首页",
        list: "首页/数据管理/用户列表 ",
        food: "首页/数据管理/商家列表",
        shipin: "首页/数据管理/食品列表",
        orderID: "首页/数据管理/订单列表",
        listing: "首页/数据管理/管理员列表",
        addShop:"首页/数据管理/添加商铺",
      }
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }

  }
</script>

<style>
  html,body,#app{
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    display: flex;
  }
  /*.left{*/
    /*overflow: auto;*/
  /*}*/
  .ba{
    background: white;
    overflow: auto;
  }
</style>
