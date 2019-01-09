<template>
	<div class="home">
		<h2>Demo</h2>
		<ul>
			<li>
				<router-link to="layoutDemo">
					Layout 布局
				</router-link>
			</li>
			<li></li>
			<li></li>
			<li></li>
		</ul>
	</div>
</template>

<script>
	export default {
		name: 'home',
		data() {
			return {
				msg: 'Welcome to Your Vue.js App'
			}
		},
		methods: {
			gotest() {
				this.$router.push({
					name: 'layoutDemo',
					query: {
						data: '你好',
						mjtype: 2
					}
				});
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	h1,
	h2 {
		font-weight: normal;
	}

	ul {
		list-style-type: none;
		padding: 0;
	}

	li {
		padding: 0 20px;
		height: 50px;
		line-height: 50px;
		margin-bottom: 3px;
		background: #f4f4f4;
	}

	a {
		text-decoration: none;
		color: #42b983;
		display: block;
		text-align: left;
	}
</style>
