<template>
    <div :style="`width:${minNum}px;height:${maxNum}px;`" class="wrap">
      <div :style="`width:${minNum}px;height:${maxNum}px;overflow:auto;position:relative;`" id="overflowBox">
        <div :style="`width:${tableRealHeight}px;height:${tableRealWidth + 10}px;position:relative;overflow:auto;`">  
          <!-- 用来占位 -->
          <div class="tableWrapSty"
          ref="tableWrapRef"
          :style="`height:${tableRealHeight}px;width:${tableRealWidth}px;`"
          >

            <table id="tableRef" class="tableSty">
              <tr>
                <th v-for="(item,index) in columnData" :key="index" :style="`textAlign:center;width:${item.width}px;font-weight:bold;`">{{item.title}}</th>
              </tr>
              <tr v-for="(item,index) in showTableData" :key="index">
                <td v-for="(dItem,dIndex) in columnData" :key="dIndex" >
                  <div :style="`textAlign:center;width:${dItem.width}px;overflow:hidden;color:${item[dItem.field].includes('+')?'#67c23a':'#7d7e80'}`">
                    {{item[dItem.field]}}
                  </div>
                </td>
              </tr>
            </table>
          </div>
        </div>
        
        
      </div>
      
    </div>
    
</template>
<script>
//https://github.com/huangshuwei/vue-easytable/blob/master/README-CN.md
import { mapState } from 'vuex';
export default {
  name:"TableShowPage",
  data(){
    return{
      tableRealWidth:0,
      tableRealHeight:0,
      maxNum:0,
      minNum:0,
      wrapOverflow:'hidden',
      columnData:[],
      //移动的距离
      marginNum:0,
      //窗口的宽高
      windowWidth:0,
      windowHeight:0,
      //表格的宽高
      showTableWidth:0,
      showTableHeight:0,
      screenStyle:'',
      showAcross:true
    }
  },
  computed:{
    ...mapState({
      windowInfo(state){
        return state.tableShow.windowInfo;
      },
      showTableData(state){
        return state.tableShow.showTableData;
      },
      showTableColumnData(state){
        return state.tableShow.showTableColumnData
      }
    })
  },
  methods:{
    findMax(){
      this.maxNum = this.windowInfo.width > this.windowInfo.height ? this.windowInfo.width : this.windowInfo.height;
      this.minNum = this.windowInfo.width < this.windowInfo.height ? this.windowInfo.width : this.windowInfo.height;
    },
    dealData(){
      const column = JSON.parse(JSON.stringify(this.showTableColumnData));
      this.findMaxStrLength(column,this.showTableData,10);
      let totalWidth = 0;
      column.forEach((td,index) => {
        td.field = td.key;
        td.title = td.value;
        td.titleAlign = 'center';
        td.columnAlign = 'center;'
        // td.width;
        totalWidth += (td.width + 2);
      });

      this.columnData = column;

      this.$nextTick(()=>{
        if(totalWidth > this.maxNum){
          this.tableRealWidth = this.maxNum;
        }else{
          this.tableRealWidth = totalWidth;
        }
        if(this.showTableColumnData.length > 5){
          this.$refs.tableWrapRef.style.transform = "rotate(90deg)";
          this.showAcross = true;
        }else{
          this.$refs.tableWrapRef.style.transform = "rotate(0deg)";
          this.showAcross = false;
        }

        this.wrapOverflow = 'auto';
      })
      

      // tableRealHeight

      // if(40 * (this.showTableData.lenght+1) > this.minNum){
      //   this.tableRealHeight = this.minNum - 20;
      // }else{
      //   this.tableRealHeight = 40 * (this.showTableData.lenght+1);
      // }      


    },
    goback(){
      this.$router.go(-1);
    },
    findMaxStrLength (columnData,tableData,baseWidth) {
      columnData.forEach((td,index) =>{
        let arr = [];
        tableData.forEach(d => {
            //此处需要更改表头的key
          let str = d[td.key] + '';
        
          let strArr = str.split("");
          let lengthNum = strArr.length;
          arr.push(lengthNum);
        })
        //此处需要更改表头的title
        // let columnStr = td.value;
        // let columnStrArr = columnStr.split("");
        // arr.push(columnStrArr.length+2);
        //找到arr中的max，填充到columndata
        let max = Math.max.apply(null,arr);
        td.maxLength = max;

        if(max > 5){
          td.width = baseWidth * max * 0.5;
        }else if(max > 2) {
          td.width = baseWidth * max * 0.8;
        }else{
          td.width = baseWidth * max * 1.5;
        }
      })

      // console.log(columnData);

      return columnData;
    },
    checkStyle(d){
      
      
    },
    deferFn(){
      const self = this;
      const tableRef = document.querySelector('#tableRef');
      const overflowBox = document.querySelector('#overflowBox');

      this.$nextTick(()=>{
      if(tableRef.offsetHeight < this.minNum){
        this.tableRealHeight = this.minNum;
      }else{
        this.tableRealHeight = tableRef.offsetHeight;
      }

      if(this.showAcross){
        this.$refs.tableWrapRef.style.top = (this.tableRealWidth - this.tableRealHeight) / 2 + 'px';
        this.$refs.tableWrapRef.style.left = -(this.tableRealWidth - this.tableRealHeight) / 2 + 'px';
      }else{
        this.$refs.tableWrapRef.style.top = '0px';
        this.$refs.tableWrapRef.style.left = '0px';
      }
      
      setTimeout(()=>{
        overflowBox.scrollLeft = self.tableRealHeight;
      },50)
    })
    }
  },
  mounted(){
    const self = this;

    const tableRef = document.querySelector('#tableRef');
    const overflowBox = document.querySelector('#overflowBox');
    // this.listenTouch()
    // console.log(window.history);
    //tableshow封版
    //转化数据格式
    this.findMax();
    this.dealData();
    
    this.windowWidth = document.documentElement.clientWidth;
    this.windowHeight = document.documentElement.clientHeight;

    this.checkStyle();

    //延迟处理
    this.deferFn()
  },
  watch:{}

  
}
</script>
<style scoped>
.wrap{
  overflow:hidden;
  position:relative;
}
.btnWrap{
  position: absolute;
  top:10px;
  left:10px;
  z-index:999;
  opacity: 0.4;
  width:20px;
  height: 20px;
}
.rotateTrue{
 
}
.rotateFalse{
  transform: rotate(0);
}
.tableWrapSty{
  /* transform: translate(50%,200%) rotate(90deg); */
  transform-origin: center center;
  position:absolute;
  top:0;
  left:0;
}
.tableWrapSty .td{
  border-right:1px solid rgba(221, 221, 221, 1);
}
.tableSty{
  font-size:8px;
  border-collapse: collapse;
}
.tableSty td,.tableSty th{
  border:1px solid #aaa;
  padding:0;
  background: #fff;
}

</style>
