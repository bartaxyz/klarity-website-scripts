(()=>{var o=class{constructor(t){this.element=t}};o.data="any";var l=class extends o{constructor(t){super(t);this.href=t.getAttribute("data-href")||"",t.addEventListener("click",this.onLinkClick.bind(this))}onLinkClick(){window.open(this.href,"_blank")}};l.data="dynamic-link";var a=class extends o{constructor(t){super(t);this.controls=t.querySelector(`[data-component="${a.data}/controls"]`),this.controlsArrowBack=t.querySelector(`[data-component="${a.data}/controls/arrow-back"]`),this.controlsArrowForward=t.querySelector(`[data-component="${a.data}/controls/arrow-forward"]`),this.scrollArea=t.querySelector(`[data-component="${a.data}/scroll-area"]`),this.controlsArrowBack.addEventListener("click",this.onBackClick.bind(this)),this.controlsArrowForward.addEventListener("click",this.onForwardClick.bind(this)),this.scrollArea.addEventListener("scroll",this.onScrollAreaScroll.bind(this)),this.onScrollAreaScroll()}onScrollAreaScroll(){let t=this.scrollArea;t.scrollLeft+t.offsetWidth>=t.scrollWidth&&this.controlsArrowForward.classList.add("disabled"),t.scrollLeft===0&&this.controlsArrowBack.classList.add("disabled"),t.scrollLeft+t.offsetWidth<t.scrollWidth&&this.controlsArrowForward.classList.remove("disabled"),t.scrollLeft>0&&this.controlsArrowBack.classList.remove("disabled")}onBackClick(){let t=this.scrollArea;t.scrollTo({left:t.scrollLeft-Math.min(t.offsetWidth,560),behavior:"smooth"})}onForwardClick(){let t=this.scrollArea;t.scrollTo({left:t.scrollLeft+Math.min(t.offsetWidth,560),behavior:"smooth"})}},i=a;i.data="feedback-carousel";var e=class extends o{constructor(t){super(t);this.currentIndex=0;this.tabContainer=t.querySelector(`[data-component="${e.data}/tabs"]`),this.tabs=Array.from(this.tabContainer.querySelectorAll(`[data-component="${e.data}/tabs"] > *`)),this.tabsContent=Array.from(t.querySelectorAll(`[data-component="${e.data}/content"] > *`)),this.changeIndex(0),this.tabs.forEach((s,r)=>{s.addEventListener("click",()=>{this.changeIndex(r)})}),this.controlsArrowBack=t.querySelector(`[data-component="${e.data}/controls/arrow-back"]`),this.controlsArrowForward=t.querySelector(`[data-component="${e.data}/controls/arrow-forward"]`),this.controlsArrowBack.addEventListener("click",()=>{this.changeIndex(this.currentIndex-1),this.currentIndex===0&&this.controlsArrowBack.classList.add("disabled"),this.controlsArrowForward.classList.remove("disabled")}),this.controlsArrowForward.addEventListener("click",()=>{this.changeIndex(this.currentIndex+1),this.currentIndex===this.tabs.length-1&&this.controlsArrowForward.classList.add("disabled"),this.controlsArrowBack.classList.remove("disabled")})}changeIndex(t){this.currentIndex=t,this.tabs.forEach(r=>{r.classList.remove("current"),r.ariaSelected="false"}),this.tabs[t].classList.add("current"),this.tabs[t].ariaSelected="true",this.tabsContent.forEach(r=>{r.classList.remove("current")}),this.tabsContent[t].classList.add("current");let s=this.tabContainer;s.scrollTo({left:s.scrollLeft+s.offsetWidth/2-this.tabs[t].offsetWidth/2,behavior:"smooth"})}},n=e;n.data="interactive-carousel";var d=[l,i,n],h=()=>{d.forEach(c=>{let t=c.data,s=document.querySelectorAll(`[data-component=${t}]`);Array.from(s).forEach(r=>{new c(r)})})};h();})();
//# sourceMappingURL=index.js.map
