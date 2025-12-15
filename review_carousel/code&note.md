```js
const reviews = [{id: 1, name: susan smith,....}]
```
array ထဲမှာ object ထည့်ထားခြင်း။ အဲ့လို ထည့်ထားတဲ့အတွက် array method တွေ ယူသုံးလို့ရသွား။ များသောအားဖြင့် employees or products တို့လို complex, related data တွေ သိမ်းဆည်းဖို့ သုံး။

```js
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");
```
button click နှိပ်လိုက်တဲ့အခါ အထဲက content တွေ ပြောင်းဖို့အတွက် သက်ဆိုင်ရာ element တွေရဲ့ id ကို ကြိုတင်ရယူခြင်း။

```js
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");
```
button တွေကို နှိပ်တဲ့အခါ ဘယ်ဟာကို နှိပ်လိုက်မှန်း သိရဖို့အတွက် querySelector နဲ့ ကြိုတင်ရယူခြင်း။ button မှာက class ပဲ ပေးထားတာမို့ getElementById နဲ့ ယူလို့မရ။ အကယ်၍ ပေးထားတယ်ဆို getElementById နဲ့ ရွေးလည်းရ။ 

```js
let currentItem = 0;
```
button ကို နှိပ်လိုက်တဲ့အခါ ပြောင်းလဲသွားမယ့် နံပါတ်။ ဒီဂဏာန်းက reviews[] ထဲမှာ ဝင်သွားပြီး သက်ဆိုင်ရာ index က content ကို ရည်ညွှန်းပေး။ ဘယ် button ကို နှိပ်နှိပ် ပြောင်းသွားရမှာ မို့လို့ global အနေနဲ့ သတ်မှတ်ပေးထား။

```js
window.addEventListener("DOMContentLoaded", function () {
    showPerson();
})
```
`window` object က လက်ရှိဖွင့်ထားတဲ့ page ရဲ့ DOM ကို point လုပ်ပြီး js နဲ့ content တွေ ပြုပြင်ပြောင်းလဲလို့ရအောင် လုပ်ပေး။ DOM manipulation.
`DOMContentLoaded` event is a key part of the web page loading process in web development, specifically in js. It fires when the initial HTML document has been completely loaded and parsed, meaning the DOM is full built and ready for manipulation.
browser က tab ကို ဖွင့်လိုက်တဲ့အခါ ပထမဦးဆုံး ပေါ်လာမယ့် content။ မထည့်ထားရင် HTML ဘက်မှာ ရေးထားတဲ့ content ပေါ်။ ကျန်တာ အလုပ်လုပ်ပုံခြင်း တူတူပဲ။ မထည့်လဲ ရ။

```js
function showPerson() {
    // const item = reviews[currentItem];
    const item = reviews[currentItem];
    // img.src = reviews[currentItem].img;
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;    
}
```
button ကို click လုပ်တဲ့အခါ currentItem က update ဖြစ်သွားပြီး reviews[] ရဲ့ သက်ဆိုင်ရာ index က value ကို ရယူပေးပြီး item ထဲ ထည့်။ ပြီးရင် img က point လုပ်ထားတဲ့ #person-img က content ကို လက်ရှိ item ထဲက img နဲ့ update လုပ်။ ကျန်တာတွေလဲ တူတူပဲ။

```js
nextBtn.addEventListener("click", function () {
    currentItem++;
    if (currentItem >= reviews.length) {
        currentItem = 0;
    }
    showPerson();
});
```
next button ကို နှိပ်လိုက်တဲ့အခါ nextBtn က click event ကို listen လုပ်ပြီး currentItem ကို ၁ တိုး။ ဒါပေမယ့် ၁ တိုးရင်းက reviews[] ထဲမှာ ရှိတဲ့ ပမာဏကို ကျော်သွားရင် error တက်နိုင်တာမို့လို့ reviews.length နဲ့ ညီသွားတာ ဒါမှမဟုတ် ကျော်သွားတဲ့အခါကျရင် currentItem ကို ၀ ပြန်ထားပြီး အစကို ပြန်ရောက်အောင် လုပ်။ ပြီးရင် အထဲက content တွေ ပြောင်းသွားဖို့အတွက် showPerson() ကို ခေါ်။ prevBtn လဲ အလားတူပဲ။ 