```css
@media screen and (min-width: 676px) {
    .sidebar{
        width: 400px;
        /* border: 1px solid black; */
    }
}
```
screen size က 676px ထက် ငယ်သွားရင် sidebar ကို 400px ထား။

```css
.sidebar{
    transform: translate(-100%);
}
.show-sidebar{
    transform: translate(0);
}
```
hamburger button ကို မနှိပ်မီမှာ sidebar ကို မြင်ကွင်းကနေ ဖျောက်ထားတဲ့အနေနဲ့ translate(-100%); ပေးထားပြီး button click နှိပ်လိုက်တဲ့အခါ 0 ကို ပြန်ပြောင်းပေးပြီး sidebar ကို ပေါ်အောင်လုပ် 
