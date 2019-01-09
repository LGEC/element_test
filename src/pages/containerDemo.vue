<template>
  <div class="containerDemo">
    <el-container>
			<el-header height="40px">Header</el-header>
			<el-main>
				<router-link to="containerCase">
					Container 布局容器实例入口
				</router-link>
		</el-main>
		</el-container>

		<el-container direction="horizontal">
			<el-header>Header</el-header>
			<el-main>Main</el-main>
			<el-footer>Footer</el-footer>
		</el-container>

		<el-container>
			<el-aside width="200px">Aside</el-aside>
			<el-main>Main</el-main>
		</el-container>

		<el-container>
			<el-header>Header</el-header>
			<el-container>
				<el-aside width="200px">Aside</el-aside>
				<el-main>Main</el-main>
			</el-container>
		</el-container>

		<el-container>
			<el-header>Header</el-header>
			<el-container>
				<el-aside width="200px">Aside</el-aside>
				<el-container>
					<el-main>Main</el-main>
					<el-footer>Footer</el-footer>
				</el-container>
			</el-container>
		</el-container>

		<el-container>
			<el-aside width="200px">Aside</el-aside>
			<el-container>
				<el-header>Header</el-header>
				<el-main>Main</el-main>
			</el-container>
		</el-container>

		<el-container>
			<el-aside width="200px">Aside</el-aside>
			<el-container>
				<el-header>Header</el-header>
				<el-main>Main</el-main>
				<el-footer>Footer</el-footer>
			</el-container>
		</el-container>
  </div>
</template>
<script>
export default {
  name: 'containerDemo',
  data () {
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	a {
		color: #42b983;
	}
	.cont{
		height: 500px;
		background: #ccc;
	}
	.el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>
