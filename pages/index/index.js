//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    imgUrls:[
      '/images/20191222.jpg',
      '/images/20191223.jpg',
      '/images/20191224.jpg',
    ],
    indicatorDots: true,
    autoplay: false,
    interval: 5000,
    duration: 1000,
    content:[
      {
        img: '/images/content-3.jpg',
        title: '秋天枫叶',
        text: '枫叶是枫树的叶子，一般为掌状五裂型，长约13厘米，宽度略大于成人手掌，裂片具少数突出的齿，基部为心形，叶面粗糙，秋季变为黄色至橙色或红色。但少量地区为深、暗绿色'
      },
      {
        img: '/images/content-2.jpg',
        title: '秋天日光',
        text: '秋天的阳光像是善解人意的二八佳人。炎天炙热的气候漏掉了人们的缅怀，跟着四时的变换，秋天早已深切民气。一小我的心声放在差别季候、差别的气候体现也悬殊。'
      },
      {
        img: '/images/content-1.jpg',
        title: '心形湖',
        text: '这些天然心型湖大多数都位于山区之间，需要徒步一段时间才能到达。如果你与你的女朋友都是登山爱好者，下次去旅行就带她到这些天然心型湖给她一个浪漫惊喜吧！'
      }
    ]
  },
  //事件处理函数
  onLoad: function () {
  }
})
