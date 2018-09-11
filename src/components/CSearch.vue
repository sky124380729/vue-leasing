<script>
import lookUp from '@/lookUp'
export default {
    props: {
        queryList: {
            type: Array,
            default: () => []
        }
    },
    name: 'CSearch',
    data() {
        return {
            conditions: {}
        }
    },
    render(h) {
        let template = <section></section>
        template.children = template.children || []
        this.queryList.forEach(item => {
            switch (item.type) {
            case 'text':
                template.children.push(<el-input size="small" placeholder={'请输入' + item.title} v-model={this.conditions[item.key]} clearable>{item.title}</el-input>)
                break
            case 'select':
                let comp =
                <el-select size="small" placeholder={'请选择' + item.title} v-model={this.conditions[item.key]} clearable>
                </el-select>
                comp.children = comp.children || []
                for (let i in lookUp[item.lookUp]) {
                    comp.children.push(<el-option label={lookUp[item.lookUp][i]} value={i} key={i}></el-option>)
                }
                console.log(comp)
                template.children.push(comp)
                break
            default:
                break
            }
        })
        template.children.push(<el-button type="primary" size="small" on-click={this.search}>查询</el-button>)
        template.children.push(<el-button type="danger" size="small" on-click={this.clear}>清空</el-button>)
        template.children.push(<div class="search-slot">{this.$slots.default}</div>)
        return template
    },
    methods: {
        search() {
            console.log(this.conditions)
        },
        clear() {
            this.conditions = {}
        }
    },
    mounted() {
    }
}
</script>

<style lang="scss" scoped>
.search-slot {
    display: inline-block;
    margin-left: 10px;
}
</style>
