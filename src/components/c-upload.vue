<template>
    <section>
        <el-upload ref="upload" list-type="picture-card" action="" name="multipartFile" :on-remove="fileRemove" :on-preview="handlePictureCardPreview" :on-change="fileChange" :on-success='fileSuccess' multiple :before-upload="beforeUpload" :auto-upload="false" :file-list="fileList" >
            <i class="el-icon-plus"></i>
            <div slot="tip" class="el-upload__tip">只能上传jpg/png文件</div>
        </el-upload>
        <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt="">
        </el-dialog>
        <el-button @click="submit">提交多个</el-button>
        <div>
            <input type="file" @change="aaa">
            <el-button @click="submit2">提交单个</el-button>
        </div>

        <el-form :model="modelx">
            <el-form-item label="是否">
                <el-radio v-model="radio" :label="1">是</el-radio>
                <el-radio v-model="radio" :label="2">否</el-radio>
            </el-form-item>
            <el-form-item label="哈哈" v-if="radio===1">
                <el-input v-model="modela"  v-clear></el-input>
            </el-form-item>

        </el-form>
    </section>
</template>
<script>
import axios from 'axios'
export default {
    name: 'upload',
    data() {
        return {
            dialogVisible: false,
            dialogImageUrl: null,
            fileList: [],
            file: null,
            modelx: {},
            modela: '',
            radio: 1
        }
    },
    methods: {
        aaa(e) {
            this.file = e.target.files[0]
        },
        fileRemove() {},
        fileChange(file, fileList) {
            this.fileList = fileList
            console.log(fileList)
        },
        fileSuccess() {},
        beforeUpload(file, fileList) {
        },
        handlePictureCardPreview(file) {
            this.dialogImageUrl = file.url
            this.dialogVisible = true
        },
        submit() {
            let formData = new FormData()
            formData.append('name', 'zq')
            formData.append('code', '222')
            formData.append('obj', {a: 1})
            this.fileList.forEach(item => {
                formData.append('multipartFileArray', item.raw)
            })
            axios.post('/leasing-api/att/dto/out/many', formData, {headers: {
                'Content-Type': 'multipart/form-data'
            }}).then(res => {
                console.log(res)
            })
        },
        submit2() {
            let formData = new FormData()
            formData.append('multipartFile', this.file, 'xx1')
            axios.post('/leasing-api/att/dto/out/one', formData, {headers: {
                'Content-Type': 'multipart/form-data'
            }}).then(res => {
                console.log(res)
            })
        }
    }
}
</script>
