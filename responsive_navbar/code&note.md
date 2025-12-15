```css
.links{
        position: absolute;
        width: 100%;
        top: 100px;
        height: 0;
        overflow: hidden;
        transition: var(--transition);
        transition: height 0.2s ease-out, height 0.2s ease-in;
    }
.show-links{
        height: 10rem;
}
```
.links က screen size 810px အောက်မှာဆို ဖျောက်ထားရမှာမို့လို့ height ကို ၀ ထားပြီး overflow ကို hidden လုပ်ထား။ ပြီးတော့မှ .show-links class ကို ထည့်ပေးပြီး link တွေ ပေါ်အောင်လုပ်။


```js
if(links.classList.contains("show-links")){
    links.classList.remove("show-links");
}
else{
    links.classList.add("show-links");
}
```
hamburger icon ကို click လုပ်လိုက်ရင် အဲ့ event ကို navToggle က နားထောင်ပြီးနောက် ပြန်ပေးလာတဲ့ classList ထဲမှာ .show-links class ပါမပါ စစ်။ ပါရင် ဖြုတ်ပေးပြီး မပါရင် ထည့်။

```js
links.classList.toggle("show-links");
```
အပေါ်က add, remove method တွေ အစား toggle method နဲ့ဆို တစ်ကြောင်းတည်းပြီး။

### css class တွေ select လုပ်တဲ့အခါ specificity(hierarchy) က ပို အသေးစိတ်တိကျတဲ့ဟာကို အတည်ယူတာမို့လို့ select method ကို တူတူရေးသင့်။ 
error ဖြစ်သွားတဲ့ဟာ ==> toggle icon ကို screen size အကြီးမှာ hide လုပ်တဲ့အခါ `.nav-center>.toggle-btn>.nav-toggle` လို ​ရေးထားပေမယ့် screen အသေးမှာ ပြန်ဖော်တဲ့အခါ .nav-toggle တစ်ခုပဲ ရေးထားတာမို့လို့ အပေါ်ကဟာက override ဖြစ်ပြီး screen အသေးမှာလဲ မပေါ်တော့။