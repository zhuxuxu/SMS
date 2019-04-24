<template>
  <div class="customers container">
    <alert :message="alert" v-if="alert"></alert>
    <h1 class="page-header">用户管理系统</h1>
    <input type="text" class="form-control" placeholder="请输入姓名搜索" v-model="filterIput">

    <table class="table table-striped">
      <thead>
        <tr>
          <th>姓名</th>
          <th>电话</th>
          <th>邮箱</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="customer in filterBy(customers,filterIput)" :key="customer.aaa">
          <td>{{customer.name}}</td>
          <td>{{customer.phone}}</td>
          <td>{{customer.email}}</td>
          <td><router-link class="btn btn-default" :to="'/customers/'+customer.id">详情</router-link></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import alert from './alert'
export default {
  name: 'customers',
  data () {
    return {
      customers:[],
      alert:"",
      filterIput:""
    }
  },
  methods: {
    fetchCustomers(){
      this.$http.get("http://localhost:3005/users").then((response)=>{
        //console.log(response)
        this.customers = response.data
      })
    },
    filterBy(customers,value){
      return customers.filter(function(customer){
        return customer.name.match(value)
      })
    }
  },
  created(){
    if (this.$route.query.alert) {
      this.alert=this.$route.query.alert
    } else {

    }
    this.fetchCustomers()
  },
  updated(){
    this.fetchCustomers()
  },
  components:{
    alert
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
