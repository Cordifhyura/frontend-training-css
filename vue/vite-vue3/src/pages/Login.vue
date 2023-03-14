<template>
    <div>
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
                :rules="[{ required: true, message: 'Password is required' },{pattern:/^\w{4,8}$/, message: 'Password is invalid'}]"
                />
                <van-field
                v-model="rePassword"
                type="password"
                name="rePassword"
                label="Confirm Password"
                placeholder="Confirm Password"
                :rules="[{ required: true, message: 'Password is required' },{pattern:/^\w{4,8}$/, message: 'Password is invalid'}]"
                v-show="!isLogin"
                />
            </van-cell-group>
            <div style="margin: 16px;">
                <van-button round block type="primary" native-type="submit">
                Submit
                </van-button>
            </div>
            <p class="text-c">
                <span v-show="isLogin" @click="isLogin=false">need an account?</span>
                <span v-show="!isLogin" @click="isLogin=true">already have an account?</span>
            </p>
        </van-form>
    </div>
</template>

<script>
    import { login } from "../api/userService";

    export default {
        data() {
            return {
                username:"",
                password:"",
                rePassword:"",
                isLogin: true
            };
        },
        methods:{
            onSubmit(values){
                console.log(values);
                login(values,res=>console.log(res));
            }
        }
    };
    
</script>