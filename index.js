(()=>{var e=class{constructor(t){this.element=t}};e.data="any";var i=class extends e{constructor(t){super(t);this.href=t.getAttribute("data-href")||"",t.addEventListener("click",this.onLinkClick.bind(this))}onLinkClick(){window.open(this.href,"_blank")}};i.data="dynamic-link";var s=class extends e{constructor(t){super(t);this.controls=t.querySelector(`[data-component="${s.data}/controls"]`),this.controlsArrowBack=t.querySelector(`[data-component="${s.data}/controls/arrow-back"]`),this.controlsArrowForward=t.querySelector(`[data-component="${s.data}/controls/arrow-forward"]`),this.scrollArea=t.querySelector(`[data-component="${s.data}/scroll-area"]`),this.headline=t.querySelector(`[data-component="${s.data}/headline"]`),this.controlsArrowBack.addEventListener("click",this.onBackClick.bind(this)),this.controlsArrowForward.addEventListener("click",this.onForwardClick.bind(this)),this.scrollArea.addEventListener("scroll",this.onScrollAreaScroll.bind(this)),this.onScrollAreaScroll(),window.addEventListener("resize",this.onResize.bind(this)),this.onResize()}onResize(){this.scrollArea.style.paddingLeft=`${this.headline.offsetLeft}px`;let t=Array.from(this.scrollArea.children[0].children);t[t.length-1].style.paddingRight=`${this.headline.offsetLeft}px`,this.onScrollAreaScroll()}onScrollAreaScroll(){let t=this.scrollArea;t.scrollLeft+t.offsetWidth>=t.scrollWidth&&this.controlsArrowForward.classList.add("disabled"),t.scrollLeft===0&&this.controlsArrowBack.classList.add("disabled"),t.scrollLeft+t.offsetWidth<t.scrollWidth&&this.controlsArrowForward.classList.remove("disabled"),t.scrollLeft>0&&this.controlsArrowBack.classList.remove("disabled")}onBackClick(){let t=this.scrollArea,r=this.scrollArea.children[0].children[0].offsetWidth;t.scrollTo({left:t.scrollLeft-Math.min(r,560),behavior:"smooth"})}onForwardClick(){let t=this.scrollArea,r=this.scrollArea.children[0].children[0].offsetWidth;t.scrollTo({left:t.scrollLeft+Math.min(r,560),behavior:"smooth"})}},l=s;l.data="feedback-carousel";var a=class extends e{constructor(t){super(t);this.currentIndex=0;this.tabContainer=t.querySelector(`[data-component="${a.data}/tabs"]`),this.tabs=Array.from(this.tabContainer.querySelectorAll(`[data-component="${a.data}/tabs"] > *`)),this.tabsContent=Array.from(t.querySelectorAll(`[data-component="${a.data}/content"] > *`)),this.changeIndex(0),this.tabs.forEach((r,o)=>{r.addEventListener("click",()=>{this.changeIndex(o)})}),this.controlsArrowBack=t.querySelector(`[data-component="${a.data}/controls/arrow-back"]`),this.controlsArrowForward=t.querySelector(`[data-component="${a.data}/controls/arrow-forward"]`),this.controlsArrowBack.addEventListener("click",()=>{this.controlsArrowBack.classList.contains("disabled")||(this.changeIndex(this.currentIndex-1),this.currentIndex===0&&this.controlsArrowBack.classList.add("disabled"),this.controlsArrowForward.classList.remove("disabled"))}),this.controlsArrowForward.addEventListener("click",()=>{this.controlsArrowForward.classList.contains("disabled")||(this.changeIndex(this.currentIndex+1),this.currentIndex===this.tabs.length-1&&this.controlsArrowForward.classList.add("disabled"),this.controlsArrowBack.classList.remove("disabled"))}),this.tabContainer.addEventListener("scroll",r=>{r.preventDefault()})}changeIndex(t){this.currentIndex=t;let r=this.tabs[t];this.tabs.forEach(o=>{o.classList.remove("current"),o.ariaSelected="false"}),r.classList.add("current"),r.ariaSelected="true",this.tabsContent.forEach(o=>{o.classList.remove("current")}),this.tabsContent[t].classList.add("current"),this.tabContainer.scrollTo({left:r.offsetLeft-(this.tabContainer.offsetWidth-r.offsetWidth)/2,behavior:"smooth"})}},n=a;n.data="interactive-carousel";var d=[i,l,n],h=()=>{d.forEach(c=>{let t=c.data,r=document.querySelectorAll(`[data-component=${t}]`);Array.from(r).forEach(o=>{new c(o)})})};h();})();
//# sourceMappingURL=index.js.map
