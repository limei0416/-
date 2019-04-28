<template>
  <div id="box1">
    <Hrader :name="name"></Hrader>
    <el-table :data="table" style="width: 100%">
      <el-table-column label="" width="60" style="text-align: center">
        <i class="el-icon-arrow-right"></i>
      </el-table-column>
      <el-table-column label="店铺名称" width="280" property="name">

      </el-table-column>
      <el-table-column label="店铺地址" width="340" property="address">

      </el-table-column>
      <el-table-column label="店铺介绍" width="320" property="category">


      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
          >编辑</el-button
          >
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
          >添加商品</el-button
          >
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
          >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <div class="block">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page.sync="currentPage1"
        :page-size="100"
        background
        layout="total,prev, pager, next"
        :total="1000"
      ></el-pagination>
    </div>
  </div>
</template>



<script>
  import axios from "axios";
  import Hrader from './hrader'
  // import Header from "./header";
  export default {
    data() {
      return {
        table: [],
        list: "",
        currentPage1: 1
      };
    },
    // components: {
    //   Header
    // },
    created() {
      axios
        .get(
          "https://elm.cangdu.org/shopping/restaurants?latitude=39.90469&longitude=116.407173&offset=0&limit=20"
        )
        .then(item => {
          console.log(item.data);
          this.table = item.data;
        });
      // console.log(this.table)
      this.list = this.$route.params.headername;
      this.name=this.$route.params.username
    },

    components:{
      Hrader
    },
    methods: {
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      },
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
        axios.get("https://elm.cangdu.org/shopping/restaurants?latitude=39.90469&longitude=116.407173&offset"+"="+this.num*20+"&limit=20").then(item => {
          console.log(item.data);
          this.tableData=item.data
        });
      }
    }
  };
</script>



<style>
  #box1 {
    width: 100%;
    height: 100%;
    overflow: auto;
  }
</style>
