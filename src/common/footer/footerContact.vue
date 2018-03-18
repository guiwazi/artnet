<template>
    <div class="footer">
        <div class="contact">
            <p>
                <span class="tel">客服电话：15025568143</span>
                <span class="mail">客服邮箱：765909184@qq.com</span>
            </p>
        </div>
        <div class="content">
            <p>版权所有 @2018 艺术品拍卖网</p>
        </div>
    </div>
</template>
<script>
/**
 * @file footer部分  组件
 * @author 王维
 */
export default {
    data() {
        return {};
    },
    components: {
    }
};
</script>
<style scoped>
p {
    margin: 0;
    padding: 0;
}
.footer {
    width: 100%;
    height: 88px;
    background-color: #e3eaf3;
    color: #8f9aa7;
}
.contact {
    height: 40px;
    padding-top: 22px;
    text-align: center;
    font-size: 12px;
    border-bottom: 1px solid #d1dce9;
}
.tel, .mail {
    display: inline-block;
    width: 30%;
    margin: 0 100px 0 100px;
}
.tel {
    text-align: right;
    padding-right: 30px;
}
.mail {
    text-align: left;
    padding-left: 30px;
}
.icon {
    padding-right: 4px;
}
.content {
    height: 48px;
    margin: -40px 0 0 0;
    text-align: center;
    font-size: 12px;

}
</style>
