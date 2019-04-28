<template>
  <div class="hello">
    <Hrader :name="name"></Hrader>
      <el-table
        :data="tableData"
        style="width: 100%">
        <el-table-column type="index" width="120"> </el-table-column>
        <el-table-column
          property="registe_time"
          label="注册日期"
          width="180">
        </el-table-column>
        <el-table-column
          property="username"
          label="注册姓名"
          width="180">
        </el-table-column>
        <el-table-column
          property="city"
          label="注册地址">
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
import axios from 'axios'
import Hrader from './hrader'
export default {
  data() {
    return {
      tableData: [

      ],
      currentRow: null,
      name: "",
      currentPage1: 1,
      num:0
    };
  },
  created(){
    this.name=this.$route.params.username
  },
  components:{
    Hrader
  },
  mounted() {
    axios.get('https://elm.cangdu.org/v1/users/list?offset=0&limit=20').then((res)=>{
      console.log(res.data)
      this.tableData=res.data
    })
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
  },



}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  *{
    margin: 0;
    padding: 0;
  }
  html,body{
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    display: flex;
  }
  .hello{
    /*display: flex;*/
    width: 100%;
    height: 100%;
    overflow: auto;
    margin: 0;
    padding: 0;
  }

</style>
