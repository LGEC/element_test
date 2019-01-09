<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

/*reset*/
html{background: #fff;}
article,aside,dialog,footer,header,section,footer,nav,figure,menu{display:block}
body, div, dl, dt, dd, ul, ol, li, h1, h2, h3, h4, h5, h6, pre, code, form, fieldset, figure, section, legend, textarea, p, blockquote, th, td, input, select, textarea, button { margin: 0; padding: 0 }
fieldset, img { border: 0 none }
img{display: block;width: 100%;height: auto;}
body{font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;}
h1,h2,h3,h4,h5,h6{font-size:100%;font-weight: normal;}
table{border-collapse:collapse;border-spacing:0}
ul,ol,dd,dt,dl{list-style-type:none;}
a{color:#333;text-decoration: none;-webkit-touch-callout: none;-webkit-user-select: none;}
a,input,select{-webkit-tap-highlight-color: transparent;-webkit-appearance: none;-webkit-border-radius: 0;}
input,img{border:none;}
i,em{font-style:normal;}
:focus{outline: none}
select{ border: none; }
/*常用*/
.clear { clear: both; }
.clear:after { display: block; clear: both; visibility: hidden; height: 0; overflow: hidden; content: "."; }
.auto { overflow: hidden; }
.none{display: none;}
.last {
	margin-right: 0 !important;
}
/*浮动*/
.fl{float: left;}
.fr{float: right;}
/*文字超出省略*/
.ellipsis {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    display: block;
}
.ellipsis2{
	overflow:hidden; 
	text-overflow:ellipsis;
	display:-webkit-box; 
	-webkit-box-orient:vertical;
	-webkit-line-clamp:2; 
}
</style>
