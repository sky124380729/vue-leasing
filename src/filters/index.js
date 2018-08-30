export default {
    // 时间戳转化成时间  2018/4/18 下午3:10:41
    time(timestamp) {
        return timestamp ? new Date(timestamp).toLocaleString() : ''
    }
}
