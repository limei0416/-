<template>
  <div id="guan">
    <Hrader :name="name"></Hrader>
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        property="user_name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        property="create_time"
        label="注册日期"
        width="180">
      </el-table-column>
      <el-table-column
        property="city"
        label="地址">
      </el-table-column>
      <el-table-column
        property="admin"
        label="权限">
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
        :total="38172"
      ></el-pagination>
    </div>
  </div>
</template>

<script>
  import Hrader from './hrader'
  import axios from "axios";
  export default {
    data() {
      return {
        tableData: [

        ],
        currentRow: null,
        list: "",
        currentPage1: 1,
        num:0
      };
    },
    created() {
      axios.get("https://elm.cangdu.org/admin/all?offset=0&limit=20").then(res => {
        console.log(res.data.data);
        this.tableData = res.data.data;
      });
      // console.log(this.tableData)
      this.list = this.$route.params.headername;
      this.name=this.$route.params.username
    },
    components:{
      Hrader
    },
    methods:{
      setCurrent(row) {
        this.$refs.singleTable.setCurrentRow(row);
      },
      handleCurrentChange(val) {
        this.currentRow = val;
      },
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
        this.num=val-1
        axios.get("https://elm.cangdu.org/v1/users/list?offset"+"="+this.num*20+"&limit=20").then(item => {
          console.log(item.data);
          this.tableData=item.data
        });
      }
    }

  }
</script>

<style scoped>
#guan{
overflow: auto;
  width: 100%;
}
</style>
