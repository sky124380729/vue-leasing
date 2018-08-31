const mutation = {
    SET_MENULIST: (state, menuList) => {
        state.menuList = menuList
    },
    ADD_NAVTAGS: (state, tag) => {
        // 如果导航列表里面已经有该标签，则不添加
        if (state.navTags.find(item => item.path === tag.path)) return
        state.navTags.push(tag)
    }
}
export default mutation
