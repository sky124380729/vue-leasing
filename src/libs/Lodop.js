import Vue from 'vue'
// ====页面引用CLodop云打印必须的JS文件,用双端口(8000和18000）避免其中某个被占用：====
var src1 = 'http://localhost:8000/CLodopfuncs.js?priority=1'
var src2 = 'http://localhost:18000/CLodopfuncs.js?priority=0'

var head = document.head || document.getElementsByTagName('head')[0] || document.documentElement
var oscript = document.createElement('script')
oscript.src = src1
head.insertBefore(oscript, head.firstChild)
oscript = document.createElement('script')
oscript.src = src2
head.insertBefore(oscript, head.firstChild)

// ====获取LODOP对象的主过程：====
export default function getLodop(oOBJECT, oEMBED) {
    var strCLodopInstall = `
        <p>CLodop云打印服务未启动!</p>
        <p>32位操作系统点击这里<a href='http://www.lodop.net/download/CLodop_Setup_for_Win32NT_https_3.043Extend.zip' target='_self' style='color:#409EFF'>下载</a></p>
        <p>64位操作系统点击这里<a href='http://www.lodop.net/download/CLodop_Setup_for_Win64NT_3.043Extend.zip' target='_self' style='color:#409EFF'>下载</a></p>
        <p style="color:#f56c6c">安装或者启动后请重新刷新页面</p>
    `
    var LODOP
    LODOP = getCLodop()
    if (!LODOP && document.readyState !== 'complete') {
        Vue.prototype.$message({
            message: '网页还没下载完毕，请稍等一下再操作',
            type: 'error'
        })
        return
    }
    if (!LODOP) {
        Vue.prototype.$alert(strCLodopInstall, '友情提示', {
            type: 'error',
            dangerouslyUseHTMLString: true
        }).then(() => {
        }).catch(() => {})
        return
    }
    if (oEMBED && oEMBED.parentNode) { oEMBED.parentNode.removeChild(oEMBED) }
    if (oOBJECT && oOBJECT.parentNode) { oOBJECT.parentNode.removeChild(oOBJECT) }
    return LODOP
}
