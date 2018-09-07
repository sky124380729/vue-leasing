export default (Vue) => {
    /* clear指令，用于该表单在销毁之后清空表单内部v-model的绑定值 */
    Vue.directive('clear', {
        unbind(el, binding, vnode) {
            let exp = 'vnode.context'
            vnode.data.model.expression.split('.').forEach(item => {
                exp += `['${item}']`
            })
            exp += ' = " " '
            eval(exp)
        }
    })
}
