<template>
    <section>
        <el-upload ref="upload" list-type="picture-card" action="" name="multipartFile" :on-remove="fileRemove" :on-preview="handlePictureCardPreview" :on-change="fileChange" :on-success='fileSuccess' multiple :before-upload="beforeUpload" :auto-upload="false" :file-list="fileList" >
            <i class="el-icon-plus"></i>
            <div slot="tip" class="el-upload__tip">只能上传jpg/png文件</div>
        </el-upload>
        <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt="">
        </el-dialog>
        <el-button @click="submit">提交</el-button>
    </section>
</template>
<script>
export default {
    data() {
        return {
            dialogVisible: false,
            dialogImageUrl: null,
            fileList: []
        }
    },
    methods: {
        fileRemove() {},
        fileChange(file, fileList) {
            console.log(fileList)
            this.fileList = fileList
        },
        fileSuccess() {},
        beforeUpload(file, fileList) {
        },
        handlePictureCardPreview(file) {
            this.dialogImageUrl = file.url
            this.dialogVisible = true
        },
        submit() {
            this.$refs.upload.submit()
        }
    }
}
</script>
