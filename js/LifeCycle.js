
/**
 * Created by Mike on 2017/11/01.
 * 生命周期
 */
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image
} from 'react-native';


class LifeComponent extends Component {

var data = [];
  // ******** 创建阶段 ************

  // 初始化组件的 构造方法
  constructor(props) {
    super(props);
    console.log('1创建阶段 ，构造方法');
    console.log(props + 'test');

this.state = {
  money:0
}

  }

  // 即将组件加载 ViewDidLoad() 意思是前面的那个
  componentWillMount() {
    console.log('2即将加载组件componentWillMount');
  }

  // 加载一个组件  渲染
    render() {
      data.push(1);
      console.log('3render渲染组件');
      return (
        <View style={styles.container}>
          <Text style={{width:100,height:100, backgroundColor:'yellow'}} onPress={this.changeMoney.bind(this)}>修改金钱</Text>
          <Text style={{backgroundColor:'red'}}> {this.state.money}</Text>
          <Text>{this.props.age} 岁  哈哈哈哈或或或或或</Text>

          <View>
        </View>
      );
    }


  //4 viewdidLoad
  // 这个方法完成就是 组件创建完成 到这里已经能显示了
  componentDidMount() {
      console.log('4componentDidMount组件加载完成， 组件创建完成。 能显示界面了');
  }

  // ******** 更新阶段  ************
  // 组件运行

// 5.0 Props 改变   传入一个新的Props 值的时候会刷新界面
// 接收到新传入的props
  componentWillReceiveProps() {
    console.log('5.0 componentWillReceiveProps 接收到新传入的props');
  }


  // State 改变
  // 5.1 是否刷新新界面： 返回值， true false
  // 当state 修改， 传入新的 props 就会执行
  shouldComponentUpdate(state) {
    console.log('5.1 shouldComponentUpdate 开始刷新');
    console.log(state);
    return true;
  }


changeMoney(){
  var money = this.state.money;
money += 100;
data.push(2);
this.setState({
  money:money
})

}


  // render() {
    // console.log('渲染');
  // }

  componentWillUpdate() {
    console.log('6 运行阶段 , 即将刷新组件');
  }

  componentDidUpdate() {
    console.log('7 组件刷新完成');
  }


  // ******** 销毁阶段 ************
  // 组件卸载
  componentWillUnmount() {
    console.log('99 组件销毁');

    // 移除定时器，
    // 移除观察者 ， 移除通知
  //  清除缓存
  }

}


// export 导出的意思， 不然就是私有的  default 默认组件
// 非默认组件 导入方法 需要加 {} import {AppRegistry,StyleSheet,Text} from 'react-native';
// 默认组件不需要加{}   import LocalImg from '../../res/img';

export default class SKyCPRN extends Component {

 updateMoney() {
   var money this.state.money;
   money += 100000;
   console.log(money);
 }

constructor(props) {
  super(props);

  this.state = {
  age:18,
  name:'张三',
  money:0
  }

// 开启定时器
// 第一个参数，函数， 每隔一段时间， 需要做什么事情
// 第二个参数： 时间， 毫秒 1000 = 1秒
  setInterval(this.updateMoney, 1000);
}
  // 加载一个组件  渲染
    render() {

      return (
        <View style={styles.container}>
          <Text style={{width: 200, height:200, backgroundColor:'green', marginTop:200,}}>
            <Text  onPress={this.chageAge.bind(this)}>修改年龄</Text>
            <LifeComponent age={this.state.age}/>
          </Text>
        </View>

        <View/>  <Image></Image> // 这两个的区别， 第一个写法就不能继续添加子控件了。 第二个可以
      );
    }


    chageAge() {
      let age = this.state.age;
      age += 1;
      this.setState({
        age:age
      })
    }

}

// 什么时候使用，分隔符， 当在对象里面，分隔属性的时候，需要使用 [,]
// 属性 是不需要使用 分隔符
// 数字需要用 {1} 包装

// 怎么获取生成的属性， 都是放在 props
// 每个组件都有一个props 属性， 自动生成属性， 都会放入到这个属性中
// props: 不能在自己的组件中修改， 只能在父组件中修改属性


// margin: 外边距：如果是第一个子控件， 参照与父控件相对的位置
// 如果不是第一个子控件， 参照上一个
// 注意： margin可能跟witdt , height 冲突
// 样式表 组件外观， 尺寸， 颜色


// 绝对定位：参照父控件
// 相对定位：参照控件本身
const styles = StyleSheet.create({
  container: {
    // 占据全屏
    flex: 1,
    backgroundColor: 'blue',
    height: 300,
    width: 300,
  },
  mainStyle: {
    backgroundColor:'red',
  }
});

//搜索 reactnative之CSS布局  简书
// 搜索 reactnative 之Flex布局

// CSS：决定一个子控件的布局
AppRegistry.registerComponent('SKyCPRN', () => SKyCPRN);
