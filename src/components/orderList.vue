<template>
  <div id="dad">
    <Hrader :name="name"></Hrader>
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column type="expand">
        <template slot-scope="props">
          <el-form label-position="left" inline class="demo-table-expand">
            <el-form-item label="商品名称">
              <span>{{ props.row.name }}</span>
            </el-form-item>
            <el-form-item label="所属店铺">
              <span>{{ props.row.shop }}</span>
            </el-form-item>
            <el-form-item label="商品 ID">
              <span>{{ props.row.id }}</span>
            </el-form-item>
            <el-form-item label="店铺 ID">
              <span>{{ props.row.shopId }}</span>
            </el-form-item>
            <el-form-item label="商品分类">
              <span>{{ props.row.category }}</span>
            </el-form-item>
            <el-form-item label="店铺地址">
              <span>{{ props.row.address }}</span>
            </el-form-item>
            <el-form-item label="商品描述">
              <span>{{ props.row.desc }}</span>
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>
      <el-table-column
        label="订单 ID"
        property="id">
      </el-table-column>
      <el-table-column
        label="总价格"
        property="total_amount"
      >
      </el-table-column>
      <el-table-column
        label="订单状态"
        property="status_bar.title">
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
    components:{
      Hrader
    },
    created() {
      axios.get("https://elm.cangdu.org/bos/orders?offset=0&limit=20&restaurant_id=undefined").then(item => {
        console.log(item.data);
        this.tableData = item.data;
      });
      // console.log(this.table)
      this.list = this.$route.params.headername;
      this.name=this.$route.params.username

    },
  }


</script>
<style>
  .demo-table-expand {
    font-size: 0;
  }
  .demo-table-expand label {
    width: 90px;
    color: #99a9bf;
  }
  .demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
  }
  #dad{
    width: 100%;
    overflow: auto;
  }
</style>
