<template>
    <van-form @submit="onSubmit">
        <van-cell-group inset>
            <van-field
            v-model="username"
            name="Username"
            label="Username"
            placeholder="Username"
            :rules="[{ required: true, message: 'Username is required' }]"
            />
            <van-field
            v-model="password"
            type="password"
            name="Password"
            label="Password"
            placeholder="Password"
            :rules="[{ required: true, message: 'Password is required' }]"
            />
            <van-field
            v-model="rePassword"
            v-show="!isLogin"
            type="password"
            name="rePassword"
            label="Confirm password"
            placeholder="Re-enter Password"
            :rules="[{ required: true, message: 'Password is required' }]"
            />
        </van-cell-group>
        <div style="margin: 16px;">
            <van-button round block class="grey" type="primary" native-type="submit">
            Submit
            </van-button>
        </div>
        <van-col span="">
            <span>forgot your password</span>
        </van-col>
        <van-row>
            <van-col v-show="isLogin" span="12">
                <a href="" @click.prevent @click="isLogin = false">
                    need an account
                </a>
            </van-col>
            <van-col v-show="!isLogin" span="12">
                <a href="" @click.prevent @click="isLogin = true" >
                    already have an account
                </a>
            </van-col>
        </van-row>
    </van-form>
</template>

<script setup>
    import { ref } from 'vue';

    const isLogin = ref(true);

</script>

<!-- <style>
    .grey{
        background-color: #ccc;
    }
</style> -->

<!-- 在页面中覆盖第三方框架的样式，用scoped标签是无效的，要另起一个全局的style? -->
<style scoped>
    a {
        margin: auto 0.25rem;
    }
    .grey{
        background-color: #ccc;
    }
</style>
