export default {
  title: '躺平使者',
  themeConfig: {
    siteTitle: '躺平使者',
    nav: nav(),
    sidebar: {
      '/study/': sidebarStudy()
    }
  }
};
//导航栏 text标题 单个link链接到的文件 层级菜单用items activeMatch高亮菜单
function nav() {
  return [
    { text: 'vue学习笔记', link: '/study/studyLink', activeMatch: '/study/' }
  ];
}

//侧边栏
function sidebarStudy() {
  return [
    {
      text: '学习链接',
      link: '/study/studyLink'
    },
    {
      text: '工具',
      link: '/study/vue'
    }
  ];
}
