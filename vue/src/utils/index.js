export const findMaxStrLength = (columnData,tableData,baseWidth) => {
    columnData.forEach(td =>{
      let arr = [];
      tableData.forEach(d => {
          //此处需要更改表头的key
        let str = d[td.key] + '';
       
        let strArr = str.split("");
        let lengthNum = strArr.length;
        arr.push(lengthNum);
      })
      //此处需要更改表头的title
      let columnStr = td.value;
      let columnStrArr = columnStr.split("");
      arr.push(columnStrArr.length+2);
      //找到arr中的max，填充到columndata
      let max = Math.max.apply(null,arr);
      td.maxLength = max;
      td.width = max * baseWidth;
    })

    //  判断如果列数之和< tbale的宽度，宽度平分
    let tableWidth = document.querySelector(".table_scroll_container .title").offsetWidth;
    let colWidth = 0;
    columnData.forEach( col => {
      colWidth += col.width;
    })
    if(colWidth < tableWidth){
      let colLength = columnData.length;
      let width = tableWidth - colWidth;
      let w = width/colLength;
      columnData.forEach( col => {
        col.width += w;
      })
    }
    //console.log(columnData);

    return columnData;
  }