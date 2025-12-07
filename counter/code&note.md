```js 
let count = 0; 
```
ဂဏန်းကို ပြောင်းဖို့ initialize လုပ်။


```js
const value = document.querySelector("#value");
```
value ကို querySelector နဲ့ select လုပ်။


```js
const btns = document.querySelectorAll(".btn");
```
button တွေကို တစ်ခါတည်းနဲ့ အကုန် select လုပ်ဖို့ querySelectorAll ကို သုံး။ .btn တွေကို select လုပ်ပြီးတဲ့အခါ btns ထဲမှာ .btn နဲ့ ပတ်သက်တဲ့ nodeList ဝင်နေ။


```js
btns.forEach(function (btn)){}
```
btns ထဲရောက်နေတဲ့ nodeList တန်ဖိုးတွေကို တစ်ခုချင်း ဆွဲထုတ်ဖို့အတွက် forEach ကို သုံး။ forEach() ထဲမှာ callback function လိုက်ပြီး function က return ပြန်လာတဲ့တန်ဖိုးကို btn နဲ့ လက်ခံ။ အဓိပ္ပါယ်က btn ဆိုတာ "အခု လက်ရှိ ကိုင်တွယ်နေတဲ့ ခလုတ်" ဖြစ်တယ်။ 


```js
btn.addEventListener('click', function(e)){}
```
btn ထဲမှာ လက်ရှိ ကိုင်တွယ်နေတဲ့ ခလုတ်တန်ဖိုး ရောက်လာပြီဆို addEventListener နဲ့ event type က ဘာ type လဲ ပြီးရင် အဲ့ event ဖြစ်ပေါ်လာ​ပြီဆို ဘယ် function ကို ခေါ်မှာလဲ သတ်မှတ်။ ဒီ function က Event object ကို သူ့ရဲ့ argument အနေနဲ့ လက်ခံ။


```js
const styles = e.currentTarget.classList;
```
e ထဲမှာ event object ဝင်လာပြီဆို အဲ့ element ရဲ့ အချက်အလက်တွေကို currentTarget နဲ့ယူပြီး classList နဲ့ အဲ့ object မှာ ပါတဲ့ class တွေကို စစ်။
ဆိုလိုတာက e.currentTargetက user က နှိပ်လိုက်တဲ့ ခလုတ်ကို ရည်ညွှန်း။
.classList က အဲ့ ခလုတ်မျာ ရှိနေတဲ့ class အားလုံးကို စာရင်းတစ်ခုအနေနဲ့ ပြန်ပေး။ ဥပမာ - decrease ကို နှိပ်လိုက်ရင် btn နဲ့ decrease ဆိုတဲ့ class နစ်ခုလုံးကို ပြန်ပေး။


```js
if(styles.contains("decrease")){
    count---;
}
```
classList မှာရှိတဲ့ key methods တွေထဲကမှ .contains ဆိုတဲ့ method နဲ့ styles ထဲမှာ decrease ဆိုတဲ့ class ပါမပါ စစ်။


```js
if(count > 0){
    value.style.color = "green";
}
```
count က သုညထက်ကြီးရင် value ရဲ့ color ကို အစိမ်းရောင်ပြောင်း။
i.e. value က #value ကို ထောက်ထားတာမို့လို့ #value ရှိတဲ့ element "0" ကို အရောင်ပြောင်းပေး။


```js
value.textContent = count;
```
button နှိပ်​ပြီး count ကို အတိုးအလျှော့လုပ်ရုံနဲ့ frontend မှာ မပြောင်းသေးတဲ့အတွက် value ရဲ့ တန်ဖိုးကို update လုပ်ပေးပြီး အဲ့ တန်ဖိုးကို frontend မှာ သက်ရောက်မှုရှိဖို့ textContent နဲ့ ပြောင်းပေး။