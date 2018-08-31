const mutation = {
    // 设置菜单
    SET_MENULIST: (state, menuList) => {
        state.menuList = menuList
    },
    // 菜单收缩状态变更
    SET_COLLAPSE: (state, flag) => {
        state.collapse = flag
    },
    // 添加tag导航，以及存储cache
    ADD_NAVTAGS: (state, route) => {
        // 如果导航列表里面已经有该标签，则不添加
        if (state.navTags.find(item => item.path === route.path)) return
        // 添加tag标签导航
        state.navTags.push(route)
        // 添加缓存列表(目前采用name的方式进行缓存)
        if (route.cache) {
            state.cachedViews.push(route.name)
        }
    },
    // 删除tag导航，以及存储的cache
    DEL_NAVTAGS: (state, route) => {
        // 删除tag标签
        for (const [index, item] of state.navTags.entries()) {
            if (item.path === route.path) {
                state.navTags.splice(index, 1)
                break
            }
        }
        // 删除缓存
        for (const i of state.cachedViews) {
            if (i === route.name) {
                const index = state.cachedViews.indexOf(i)
                state.cachedViews.splice(index, 1)
                break
            }
        }
    }
}
export default mutation
