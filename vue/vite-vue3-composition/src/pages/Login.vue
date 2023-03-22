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
        </van-cell-group>
        <div style="margin: 16px;">
            <van-button round block class="grey" type="primary" native-type="submit">
            Submit
            </van-button>
        </div>
        <!-- use default event -->
        <a href="">Cancel</a>
    </van-form>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { login } from '@/api/userService';

    const username = ref("");
    const password = ref("");
    const router = useRouter();
    function onSubmit(){
        // use value within the same block
        login(username,password);
        router.push("/home");
    }

</script>

<!-- <style>
    .grey{
        background-color: #ccc;
    }
</style> -->

<!-- 在页面中覆盖第三方框架的样式，用scoped标签是无效的，要另起一个全局的style? -->
<style lang="scss" scoped>
    .grey{
        background-color: #ccc;
    }
</style>
