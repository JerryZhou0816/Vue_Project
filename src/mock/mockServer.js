//这个文件才是正儿八经模拟接口的文件
import Mock from './mockServer'
import order from './oder.json'
// import floor from './floor.json'

//通过Mock.mock去模拟接口

// Mock.mock('/mock/banner',{code:200,data:banner})
// Mock.mock('/mock/floor',{code:200,data:floor})
Mock.mock('/mock/order',{code:200,data:order})




