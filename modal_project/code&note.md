```css
body{
    height: 100vh;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    background-attachment: fixed;
}
```
background image ကို screen အပြည့် တစ်ပုံတည်း ပေါ်အောင်လုပ်။

```css
.hero{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
```
div element ကို screen ရဲ့ အလယ် တည့်တည့် ရောက်အောင်ချိန်။

```css
.modal-overlay{
    place-items: center;
    visibility: hidden;
    z-index: -10;
}
```
`place-items: center` is a shorthand for setting the `align-items` (vertical/block axis) and `justify-items` (horizontal/inline axis) property simultaneously within a grid or flexbox container.
***one value***: used for both `align-items` and `justify-items`.
***two value***: the first sets `align-items`, and the second sets `justify-items`.
`visibility: hidden` `z-index: -10;` ထားထားပြီး ပုံမှန်အခြေနေမှာ overlay ကို မမြင်ရအောင် လုပ်ထား။ ခလုပ်နှိပ်လိုက်တော့မှ `visibility: visible;` `z-index: 10;` ထားပြီး ပေါ်အောင်လုပ်။