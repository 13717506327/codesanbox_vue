<template>
  <div>
    <v-table
      :width="1100"
      :height="300"
      :columns="columns"
      :table-data="tableData"
      row-hover-color="#eee"
      :multiple-sort="false"
      row-click-color="#edf7ff"
      :cell-merge="cellMerge"
      @sort-change="sortChange"
    ></v-table>
  </div>
</template>

<script>
import Vue from "vue";
Vue.component("table-cell-merge", {
  template: `<span style="color:red">
               123
            </span>`,
  props: {
    rowData: {
      type: Object
    },
    field: {
      type: String
    },
    index: {
      type: Number
    }
  }
});

export default {
  name: "frozen-title-columns",
  data() {
    return {
      tableData: [
        {
          name: "赵伟",
          gender: "男",
          birthday: "1963-7-9",
          height: "183",
          email: "zhao@gmail.com",
          tel: "156*****1987",
          hobby: "钢琴、书法、唱歌",
          address: "上海市黄浦区金陵东路569号17楼"
        },
        {
          name: "李伟",
          gender: "男",
          birthday: "2003-12-7",
          height: "166",
          email: "li@gmail.com",
          tel: "182*****1538",
          hobby: "钢琴、书法、唱歌",
          address: "上海市奉贤区南桥镇立新路12号2楼"
        },
        {
          name: "李伟",
          gender: "男",
          birthday: "2003-12-7",
          height: "186",
          email: "sun@gmail.com",
          tel: "161*****0097",
          hobby: "钢琴、书法、唱歌",
          address: "上海市崇明县城桥镇八一路739号"
        },
        {
          name: "周伟",
          gender: "女",
          birthday: "1993-12-10",
          height: "188",
          email: "zhou@gmail.com",
          tel: "197*****1123",
          hobby: "钢琴、书法、唱歌",
          address: "上海市青浦区青浦镇章浜路24号"
        },
        {
          name: "吴伟",
          gender: "男",
          birthday: "1993-12-11",
          height: "160",
          email: "wu@gmail.com",
          tel: "183*****6678",
          hobby: "钢琴、书法、唱歌",
          address: "上海市松江区乐都西路867-871号"
        },
        {
          name: "冯伟",
          gender: "女",
          birthday: "1993-12-12",
          height: "168",
          email: "feng@gmail.com",
          tel: "133*****3793",
          hobby: "钢琴、书法、唱歌",
          address: "上海市金山区龙胜路143号一层"
        },
        {
          name: "褚伟",
          gender: "男",
          birthday: "1993-12-30",
          height: "170",
          email: "zhu@gmail.com",
          tel: "189*****2345",
          hobby: "钢琴、书法、唱歌",
          address: "上海市闵行区都市路2988号2楼"
        }
      ],
      columns: [
        {
          field: "name",
          title: "姓名",
          width: 150,
          titleAlign: "center",
          columnAlign: "center",
          isFrozen: true,
          orderBy: "asc"
        },
        {
          field: "gender",
          title: "性别",
          width: 150,
          titleAlign: "center",
          columnAlign: "center",
          isFrozen: true,
          orderBy: "asc"
        },
        {
          field: "birthday",
          title: "生日",
          width: 180,
          titleAlign: "center",
          columnAlign: "center",
          isFrozen: true,
          orderBy: "asc"
        },
        {
          field: "tel",
          title: "手机号码",
          width: 180,
          titleAlign: "center",
          columnAlign: "center"
        },
        {
          field: "hobby",
          title: "爱好",
          width: 380,
          titleAlign: "center",
          columnAlign: "center"
        },
        {
          field: "address",
          title: "地址",
          width: 430,
          titleAlign: "center",
          columnAlign: "left"
        }
      ]
    };
  },
  methods: {
    sortChange(params) {
      // 排序
      let sortkey = "";
      for (let key in params) {
        if (params[key]) {
          sortkey = key;
          break;
        }
      }
      if (sortkey) {
        this.tableData.sort((a, b) => {
          return params[sortkey] == "asc"
            ? a[sortkey].localeCompare(b[sortkey])
            : b[sortkey].localeCompare(a[sortkey]);
        });
      }
    },
    formatData() {
      const KEY_ROWSPAN = "rowSpan";
      var k = 0;
      while (k < this.tableData.length) {
        this.tableData[k][KEY_ROWSPAN] = 1;
        for (var i = k + 1; i <= this.tableData.length - 1; i++) {
          if (
            this.tableData[k][KEY_NAME] === this.tableData[i][KEY_NAME] &&
            this.tableData[k][KEY_NAME] !== ""
          ) {
            this.tableData[k][KEY_ROWSPAN]++;
          } else {
            break;
          }
        }
        k = i;
      }
      this.resultData = this.tableData;
    },
    cellMerge(rowIndex, rowData, field) {
      let index = rowIndex + 1;
      let len = this.tableData.length;
      // console.log(rowData);
      if (
        index + 1 <= len &&
        rowData[field] === this.tableData[parseInt(rowIndex) + 1][field] &&
        (field === "gender" || field === "name" || field === "birthday")
      ) {
        if (field == "name") {
          return {
            colSpan: 1,
            rowSpan: 2,
            content: `${rowData[field]}`,
            componentName: ""
          };
        } else {
          if (
            rowData["name"] === this.tableData[parseInt(rowIndex) + 1]["name"]
          ) {
            return {
              colSpan: 1,
              rowSpan: 2,
              content: `${rowData[field]}`,
              componentName: ""
            };
          }
        }
      }
      // if (rowIndex === 3 && field === "gender") {
      //   return {
      //     colSpan: 1,
      //     rowSpan: 3,
      //     content: `${rowData[field]}`,
      //     componentName: ""
      //   };
      // } else if (rowIndex === 2 && field === "birthday") {
      //   return {
      //     colSpan: 2,
      //     rowSpan: 3,
      //     content: "",
      //     componentName: ""
      //   };
      // }
    }
  }
};
</script>
