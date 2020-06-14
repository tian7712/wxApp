// components/tar/tab.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
tab:{
  type:Array,
  value:''
}
  },

  /**
   * 组件的初始数据
   */
  data: {
    
  },

  /**
   * 组件的方法列表
   */
  methods: {
    isactClick(e){
      const {index}=e.currentTarget.dataset;
      // this.triggerEvent('组件自定义的名称',{要传递的参数})
      this.triggerEvent('clickChange',{index})
      // let {tab} =this.data;
      // tab.forEach((v,i,a) => i===index?v.isact=true:v.isact=false);
      // this.setData({
      //     tab
      // })
    }
  }
})
