(()=>{var o=class{constructor(t){this.element=t}};o.data="any";var a=class extends o{constructor(t){super(t);this.href=t.getAttribute("data-href")||"",t.addEventListener("click",this.onLinkClick.bind(this))}onLinkClick(){window.open(this.href,"_blank")}};a.data="dynamic-link";var e=class extends o{constructor(t){super(t);this.controls=t.querySelector(`[data-component="${e.data}/controls"]`),this.controlsArrowBack=t.querySelector(`[data-component="${e.data}/controls/arrow-back"]`),this.controlsArrowForward=t.querySelector(`[data-component="${e.data}/controls/arrow-forward"]`),this.scrollArea=t.querySelector(`[data-component="${e.data}/scroll-area"]`),this.controlsArrowBack.addEventListener("click",this.onBackClick.bind(this)),this.controlsArrowForward.addEventListener("click",this.onForwardClick.bind(this)),this.scrollArea.addEventListener("scroll",this.onScrollAreaScroll.bind(this)),this.onScrollAreaScroll()}onScrollAreaScroll(){let t=this.scrollArea;t.scrollLeft+t.offsetWidth>=t.scrollWidth&&this.controlsArrowForward.classList.add("disabled"),t.scrollLeft===0&&this.controlsArrowBack.classList.add("disabled"),t.scrollLeft+t.offsetWidth<t.scrollWidth&&this.controlsArrowForward.classList.remove("disabled"),t.scrollLeft>0&&this.controlsArrowBack.classList.remove("disabled")}onBackClick(){let t=this.scrollArea;t.scrollTo({left:t.scrollLeft-Math.min(t.offsetWidth,560),behavior:"smooth"})}onForwardClick(){let t=this.scrollArea;t.scrollTo({left:t.scrollLeft+Math.min(t.offsetWidth,560),behavior:"smooth"})}},l=e;l.data="feedback-carousel";var s=class extends o{constructor(t){super(t);this.currentIndex=0;this.tabContainer=t.querySelector(`[data-component="${s.data}/tabs"]`),this.tabs=Array.from(this.tabContainer.querySelectorAll(`[data-component="${s.data}/tabs"] > *`)),this.tabsContent=Array.from(t.querySelectorAll(`[data-component="${s.data}/content"] > *`)),this.changeIndex(0),this.tabs.forEach((r,n)=>{r.addEventListener("click",()=>{this.changeIndex(n)})})}changeIndex(t){this.currentIndex=t,this.tabs.forEach(r=>{r.classList.remove("current"),r.ariaSelected="false"}),this.tabs[t].classList.add("current"),this.tabs[t].ariaSelected="true",this.tabsContent.forEach(r=>{r.classList.remove("current")}),this.tabsContent[t].classList.add("current")}onScrollAreaScroll(){}onBackClick(){}onForwardClick(){}},i=s;i.data="interactive-carousel";var d=[a,l,i],h=()=>{d.forEach(c=>{let t=c.data,r=document.querySelectorAll(`[data-component=${t}]`);Array.from(r).forEach(n=>{new c(n)})})};h();})();
//# sourceMappingURL=index.js.map
