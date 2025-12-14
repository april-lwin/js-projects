```js
const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
```
ကာလာရွေးဖို့အတွက် array 

```js
const btn = document.getElementById("btn");
```
button ကို နှိပ်လိုက်တဲ့အခါ ပြန်ပေးတဲ့ id ကို သိမ်း။ return value => HTML element

```js
const color = document.querySelector(".color");
```
.color ဆိုတဲ့ class နဲ့ match ဖြစ်တဲ့ ပထမဦးဆုံး element ကို return ပြန်ပေး။

```js
btn.addEventListener("click", function () {}
```
btn ဆိုတဲ့ variable က သိမ်းဆည်းထားတဲ့ element အပေါ်မှာ ဘာ event တွေ ဖြစ်သွားလဲဆိုတာ သိရဖို့အတွက် eventListener ကိုသုံး။

```js
const randomNum = getRandomNumber();
function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}
```
colors array ကနေ အရောင် pick လုပ်ဖို့ array index လိုအပ်။ အဲ့အတွက် random number ထုတ်ပေးတဲ့ function လို။ ```Math.random()``` က 0 နဲ့ညီ/ကြီးပြီး ၁ထက် ငယ်တဲ့ floating point တွေကို return ပြန်ပေး။ array က 4 elements ပဲ ရှိတာမို့လို့ ၀ ကနေ ၃ ကြား ဂဏာန်းပဲလိုအပ်။ ဒါကြောင့် array length နဲ့ မြှောက်ပေးလိုက်တဲ့အခါ [(x = 0 ~ x < 1) * 4] မို့လို့ ၄ အောက် ငယ်တဲ့ ကိန်းတွေပဲ ထွက်။ ထွက်လာတဲ့ ကိန်းတွေက ဒဿမကိန်းတွေမို့လို့ floor ယူပြီး ကိန်းပြည့် ပြောင်းပေး။ ရလာတဲ့ ကိန်းပြည့်ကို randomNum ထဲမှာ သိမ်း။

```js
document.body.style.backgroundColor = colors[randomNum];
```
randomNum ရလာပြီဆို colors array ထဲကို ထည့်ပြီး body ရဲ့ background color ကို change။

```js
color.textContent = colors[randomNum];
```
background color change ပြီးရင် color code ကိုပါ change။