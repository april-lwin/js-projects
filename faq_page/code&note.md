```js
const questions = document.querySelectorAll(".question");
```
HTML ထဲက .question ပါတဲ့ list အားလုံးကို `questions` ထဲ ထည့်။

```js
questions.forEach(function (question)){}
```
questions က nodeList ဖြစ်သွားပြီမို့လို သူ့ထဲမှာ ရှိတဲ့ item တွေကို forEach နဲ့ ပတ်။

```js
const btn = question.querySelector(".question-btn");
```
လက်ရှိ ရောက်နေတဲ့ nodeList element ထဲမှာ `.question-btn` ဆိုတဲ့ဟာကို ရွေးထုတ်ပြီး `btn` ထဲ ထည့်။

```js
btn.addEventListener('click', function() {})
```
btn ကို နှိပ်မနှိပ် addEventListener နဲ့ နားထောင်ပြီး နှိပ်ခဲ့ရင် function ကို ခေါ်။

```js
questions.forEach(function (item)){
    if(item !== question){
        item.classList.remove('show-text');
    };
};
```
အပေါ်က အဆင့်ပြီးတဲ့အခါ `questions` ကို နောက်တစ်ခေါက် loop ပတ်ပြီး `.questions` ထဲက element တွေကို `item` အနေနဲ့ လိုက်ကြည့်။ အဲ့ဒီ `item`ဟာ လက်ရှိနှိပ်လိုက်တဲ့ `.question` မဟုတ်ခဲ့ရင် အဲ့မှာရှိနေတဲ့ `.show-text`ကို ဖယ်ခိုင်း။

```js
question.clssList.toggle('show-text');
```
လက်ရှိနှိပ်လိုက်တဲ့ မေးခွန်းမှာ `show-text` class မရှိရင် ထည့်၊ ရှိရင် ဖြုတ်။

```js
//traversing the DOM
const question = e.currentTarget.parentElement.parentElement;
```
ဒီ နည်းလမ်းက ခလုတ်ကို အရင်ဖမ်းပြီးနောက် upward traversing method နဲ့ parentElement ဆီ အဆင့်ဆင့်တက်ပြီး `.question` class ရှိတဲ့ နေရာကို လှမ်းဖမ်းတဲ့ နည်း။
```
e.currentTarget => question-btn
e.currentTarget.parentElement => question-title
e.currentTarget.parentElement.parentElement => question
```