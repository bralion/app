<template>
    <div class="login">
        <p style="padding-top: 30px;"><img src="../assets/family.svg" alt=""></p>
        <p style=" font-size:18px; color: #fff;text-align: center;padding-top: 30px;padding-bottom: 60px;">请输入解锁密码</p>
        <p><span class="input-label">{{verifyNum[0]}}</span> <span class="input-label">{{verifyNum[1]}}</span> <span
                class="input-label">{{verifyNum[2]}}</span> <span class="input-label">{{verifyNum[3]}}</span></p>
        <ul style="margin-top:40px;margin-left: 5%;margin-right: 5%;">
            <li class="label-number" @click="handleNumber(1)">1</li>
            <li class="label-number" @click="handleNumber(2)">2</li>
            <li class="label-number" @click="handleNumber(3)">3</li>
            <li class="label-number" @click="handleNumber(4)">4</li>
            <li class="label-number" @click="handleNumber(5)">5</li>
            <li class="label-number" @click="handleNumber(6)">6</li>
            <li class="label-number" @click="handleNumber(7)">7</li>
            <li class="label-number" @click="handleNumber(8)">8</li>
            <li class="label-number" @click="handleNumber(9)">9</li>
            <li class="label-number label-number-txt">取消</li>
            <li class="label-number" @click="handleNumber(0)">0</li>
            <li class="label-number label-number-txt" @click="handleNumber(-1)">清除</li>
        
        </ul>
    </div>
</template>

<script>
	//登录页，验证密码
	export default {
		name: 'PassWord',
		data () {
			return {
				verifyNum: [],//验证码
			}
		},
		methods: {
			handleNumber (val) {//添加数字
				if (val === -1) {//清除
					this.verifyNum.pop ();
					return
				}
				if (this.verifyNum.length < 4) {//添加
					this.verifyNum.push (val);
					if (this.verifyNum.length === 4) {
						this.startVerify ();
					}
					return
				}
			},
			startVerify () {//验证数据
				if (this.verifyNum.toString () === '1,3,5,9') {
					alert ('验证通过！')
				} else {
					this.verifyNum = [];
					alert ('验证失败');
				}
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h1, h2 {
        font-weight: normal;
    }
    
    ul {
        list-style-type: none;
        padding: 0;
    }
    
    li {
        display: inline-block;
        margin: 0 10px;
    }
    
    a {
        color: #42b983;
    }
    
    .login {
        width: 100%;
        height: 100%;
    }
    
    .login {
        background-color: #2dbe5f;
    }
    
    .input-label {
        display: inline-block;
        width: 18%;
        border-bottom: 2px solid #9ee1b6;
        margin-left: 2%;
        height: 20px;
        color: #fff;
        font-size: 20;
        margin-right: 2%;
    }
    
    .label-number {
        margin: 20px 0;
        width: 30%;
        display: inline-block;
        font-size: 40px;
        line-height: 60px;
        color: #fff;
    }
    
    .label-number-txt {
        font-size: 28px;
    }
</style>
