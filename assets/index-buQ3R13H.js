const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/add-BCCf-dV8.js","assets/index-hmDJMfM6.js","assets/index.browser.esm-CAIK7Ioz.js","assets/vendor-dayjs-v0j1UNZp.js","assets/index-qhrWRLq6.js","assets/vendor-vue-Ck7I6JZv.js","assets/vendor-axios-B8_nURbH.js","assets/vendor-vue-router-CBGKudGF.js","assets/index-CHWw2lZ5.css","assets/index-9HGDSJTR.js","assets/signer-VxQoXw0x.js","assets/types-Cvj5H4DH.js","assets/all-wallets-CT6l0kDa.js","assets/arrow-bottom-circle-xv0FZ2qa.js","assets/app-store-DWUF6vlw.js","assets/apple-N4G4Rywr.js","assets/arrow-bottom-Btop1Oiu.js","assets/arrow-left-hAD6xqDx.js","assets/arrow-right-D9c8Yo6e.js","assets/arrow-top-CkVVN8Aq.js","assets/bank-BvnNoPI8.js","assets/browser-CW8uYhza.js","assets/card-BcHCsVVj.js","assets/checkmark-BipbpY22.js","assets/checkmark-bold-x1J7IiCE.js","assets/chevron-bottom-Hgl7YQrQ.js","assets/chevron-left-BnaBXdNG.js","assets/chevron-right-BwyjxqGU.js","assets/chevron-top-C1MXSt2F.js","assets/chrome-store-X6ccwf7w.js","assets/clock-B2sV6eqL.js","assets/close-BAnPF16k.js","assets/compass-DYJ9szvu.js","assets/coinPlaceholder-CfsHo3MK.js","assets/copy-B_LXGWy3.js","assets/cursor-DcEs6gFW.js","assets/cursor-transparent-BHWbs7Iq.js","assets/desktop-Bei3xorl.js","assets/disconnect-BqCBevNS.js","assets/discord-CCMY4b79.js","assets/etherscan-C5YFf3Ft.js","assets/extension-BC2MiME-.js","assets/external-link-DcV9erXN.js","assets/facebook-CUDyHPAZ.js","assets/farcaster-E0Bm7Un-.js","assets/filters-Cerx_aGf.js","assets/github-DnmT_l68.js","assets/google-YSEam_NJ.js","assets/help-circle-bSCu4tTe.js","assets/image-DVQHxR_m.js","assets/id-CL5LqB6H.js","assets/info-circle-BbPiEwdJ.js","assets/lightbulb-CMOqcI56.js","assets/mail-C_x17tnD.js","assets/mobile-KieaIR51.js","assets/more-Duyf4d9z.js","assets/network-placeholder-B4_yajTy.js","assets/nftPlaceholder-4yjjSncT.js","assets/off-xD-dcqzh.js","assets/play-store-kMX2QYUl.js","assets/plus-szcPJ2dE.js","assets/qr-code-JC15rpI3.js","assets/recycle-horizontal-CfcHFjsP.js","assets/refresh-Dxfl3_mt.js","assets/search-BFDeejND.js","assets/send-CHet4wim.js","assets/swapHorizontal-B2mvS-_B.js","assets/swapHorizontalMedium-C6AoL0o_.js","assets/swapHorizontalBold-DzmWmC9_.js","assets/swapHorizontalRoundedBold-BIIC6PwO.js","assets/swapVertical-CoZ1gqDQ.js","assets/telegram-Do3KBXLh.js","assets/three-dots-eqwEpeM9.js","assets/twitch-DMDcHun-.js","assets/x-CwPa2i5F.js","assets/twitterIcon-QyWtSVfI.js","assets/verify-T8sB_KOX.js","assets/verify-filled-qvUakMjP.js","assets/wallet-Dx7RgoOr.js","assets/walletconnect-LcwwgtCv.js","assets/wallet-placeholder-Ch1ZWHbx.js","assets/warning-circle-BTYlyEnu.js","assets/info-5-y8J2sF.js","assets/exclamation-triangle-CaNSB22S.js","assets/reown-logo-DDKijvrx.js"])))=>i.map(i=>d[i]);
import{Z as N,_ as q,z as S,A as b,B as E,C as f,$ as Y,a0 as V,F as H,E as X}from"./index-hmDJMfM6.js";import{_ as a}from"./index-qhrWRLq6.js";const w={getSpacingStyles(t,e){if(Array.isArray(t))return t[e]?`var(--wui-spacing-${t[e]})`:void 0;if(typeof t=="string")return`var(--wui-spacing-${t})`},getFormattedDate(t){return new Intl.DateTimeFormat("en-US",{month:"short",day:"numeric"}).format(t)},getHostName(t){try{return new URL(t).hostname}catch{return""}},getTruncateString({string:t,charsStart:e,charsEnd:i,truncate:r}){return t.length<=e+i?t:r==="end"?`${t.substring(0,e)}...`:r==="start"?`...${t.substring(t.length-i)}`:`${t.substring(0,Math.floor(e))}...${t.substring(t.length-Math.floor(i))}`},generateAvatarColors(t){const i=t.toLowerCase().replace(/^0x/iu,"").replace(/[^a-f0-9]/gu,"").substring(0,6).padEnd(6,"0"),r=this.hexToRgb(i),n=getComputedStyle(document.documentElement).getPropertyValue("--w3m-border-radius-master"),c=100-3*Number(n?.replace("px","")),s=`${c}% ${c}% at 65% 40%`,u=[];for(let h=0;h<5;h+=1){const p=this.tintColor(r,.15*h);u.push(`rgb(${p[0]}, ${p[1]}, ${p[2]})`)}return`
    --local-color-1: ${u[0]};
    --local-color-2: ${u[1]};
    --local-color-3: ${u[2]};
    --local-color-4: ${u[3]};
    --local-color-5: ${u[4]};
    --local-radial-circle: ${s}
   `},hexToRgb(t){const e=parseInt(t,16),i=e>>16&255,r=e>>8&255,n=e&255;return[i,r,n]},tintColor(t,e){const[i,r,n]=t,o=Math.round(i+(255-i)*e),c=Math.round(r+(255-r)*e),s=Math.round(n+(255-n)*e);return[o,c,s]},isNumber(t){return{number:/^[0-9]+$/u}.number.test(t)},getColorTheme(t){return t||(typeof window<"u"&&window.matchMedia?window.matchMedia("(prefers-color-scheme: dark)")?.matches?"dark":"light":"dark")},splitBalance(t){const e=t.split(".");return e.length===2?[e[0],e[1]]:["0","00"]},roundNumber(t,e,i){return t.toString().length>=e?Number(t).toFixed(i):t},formatNumberToLocalString(t,e=2){return t===void 0?"0.00":typeof t=="number"?t.toLocaleString("en-US",{maximumFractionDigits:e,minimumFractionDigits:e}):parseFloat(t).toLocaleString("en-US",{maximumFractionDigits:e,minimumFractionDigits:e})}};function Z(t,e){const{kind:i,elements:r}=e;return{kind:i,elements:r,finisher(n){customElements.get(t)||customElements.define(t,n)}}}function K(t,e){return customElements.get(t)||customElements.define(t,e),e}function $(t){return function(i){return typeof i=="function"?K(t,i):Z(t,i)}}const Q={attribute:!0,type:String,converter:q,reflect:!1,hasChanged:N},J=(t=Q,e,i)=>{const{kind:r,metadata:n}=i;let o=globalThis.litPropertyMetadata.get(n);if(o===void 0&&globalThis.litPropertyMetadata.set(n,o=new Map),r==="setter"&&((t=Object.create(t)).wrapped=!0),o.set(i.name,t),r==="accessor"){const{name:c}=i;return{set(s){const u=e.get.call(this);e.set.call(this,s),this.requestUpdate(c,u,t,!0,s)},init(s){return s!==void 0&&this.C(c,void 0,t,s),s}}}if(r==="setter"){const{name:c}=i;return function(s){const u=this[c];e.call(this,s),this.requestUpdate(c,u,t,!0,s)}}throw Error("Unsupported decorator location: "+r)};function l(t){return(e,i)=>typeof i=="object"?J(t,e,i):((r,n,o)=>{const c=n.hasOwnProperty(o);return n.constructor.createProperty(o,r),c?Object.getOwnPropertyDescriptor(n,o):void 0})(t,e,i)}function bt(t){return l({...t,state:!0,attribute:!1})}const tt=S`
  :host {
    display: flex;
    width: inherit;
    height: inherit;
  }
`;var _=function(t,e,i,r){var n=arguments.length,o=n<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,i):r,c;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,i,r);else for(var s=t.length-1;s>=0;s--)(c=t[s])&&(o=(n<3?c(o):n>3?c(e,i,o):c(e,i))||o);return n>3&&o&&Object.defineProperty(e,i,o),o};let d=class extends E{render(){return this.style.cssText=`
      flex-direction: ${this.flexDirection};
      flex-wrap: ${this.flexWrap};
      flex-basis: ${this.flexBasis};
      flex-grow: ${this.flexGrow};
      flex-shrink: ${this.flexShrink};
      align-items: ${this.alignItems};
      justify-content: ${this.justifyContent};
      column-gap: ${this.columnGap&&`var(--wui-spacing-${this.columnGap})`};
      row-gap: ${this.rowGap&&`var(--wui-spacing-${this.rowGap})`};
      gap: ${this.gap&&`var(--wui-spacing-${this.gap})`};
      padding-top: ${this.padding&&w.getSpacingStyles(this.padding,0)};
      padding-right: ${this.padding&&w.getSpacingStyles(this.padding,1)};
      padding-bottom: ${this.padding&&w.getSpacingStyles(this.padding,2)};
      padding-left: ${this.padding&&w.getSpacingStyles(this.padding,3)};
      margin-top: ${this.margin&&w.getSpacingStyles(this.margin,0)};
      margin-right: ${this.margin&&w.getSpacingStyles(this.margin,1)};
      margin-bottom: ${this.margin&&w.getSpacingStyles(this.margin,2)};
      margin-left: ${this.margin&&w.getSpacingStyles(this.margin,3)};
    `,f`<slot></slot>`}};d.styles=[b,tt];_([l()],d.prototype,"flexDirection",void 0);_([l()],d.prototype,"flexWrap",void 0);_([l()],d.prototype,"flexBasis",void 0);_([l()],d.prototype,"flexGrow",void 0);_([l()],d.prototype,"flexShrink",void 0);_([l()],d.prototype,"alignItems",void 0);_([l()],d.prototype,"justifyContent",void 0);_([l()],d.prototype,"columnGap",void 0);_([l()],d.prototype,"rowGap",void 0);_([l()],d.prototype,"gap",void 0);_([l()],d.prototype,"padding",void 0);_([l()],d.prototype,"margin",void 0);d=_([$("wui-flex")],d);const $t=t=>t??Y;const et=t=>t===null||typeof t!="object"&&typeof t!="function",it=t=>t.strings===void 0;const W={ATTRIBUTE:1,CHILD:2},U=t=>(...e)=>({_$litDirective$:t,values:e});let F=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,i,r){this._$Ct=e,this._$AM=i,this._$Ci=r}_$AS(e,i){return this.update(e,i)}update(e,i){return this.render(...i)}};const R=(t,e)=>{const i=t._$AN;if(i===void 0)return!1;for(const r of i)r._$AO?.(e,!1),R(r,e);return!0},I=t=>{let e,i;do{if((e=t._$AM)===void 0)break;i=e._$AN,i.delete(t),t=e}while(i?.size===0)},G=t=>{for(let e;e=t._$AM;t=e){let i=e._$AN;if(i===void 0)e._$AN=i=new Set;else if(i.has(t))break;i.add(t),at(e)}};function rt(t){this._$AN!==void 0?(I(this),this._$AM=t,G(this)):this._$AM=t}function ot(t,e=!1,i=0){const r=this._$AH,n=this._$AN;if(n!==void 0&&n.size!==0)if(e)if(Array.isArray(r))for(let o=i;o<r.length;o++)R(r[o],!1),I(r[o]);else r!=null&&(R(r,!1),I(r));else R(this,t)}const at=t=>{t.type==W.CHILD&&(t._$AP??=ot,t._$AQ??=rt)};class nt extends F{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,i,r){super._$AT(e,i,r),G(this),this.isConnected=e._$AU}_$AO(e,i=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),i&&(R(this,e),I(this))}setValue(e){if(it(this._$Ct))this._$Ct._$AI(e,this);else{const i=[...this._$Ct._$AH];i[this._$Ci]=e,this._$Ct._$AI(i,this,0)}}disconnected(){}reconnected(){}}class st{constructor(e){this.G=e}disconnect(){this.G=void 0}reconnect(e){this.G=e}deref(){return this.G}}class ct{constructor(){this.Y=void 0,this.Z=void 0}get(){return this.Y}pause(){this.Y??=new Promise(e=>this.Z=e)}resume(){this.Z?.(),this.Y=this.Z=void 0}}const j=t=>!et(t)&&typeof t.then=="function",B=1073741823;class lt extends nt{constructor(){super(...arguments),this._$Cwt=B,this._$Cbt=[],this._$CK=new st(this),this._$CX=new ct}render(...e){return e.find(i=>!j(i))??V}update(e,i){const r=this._$Cbt;let n=r.length;this._$Cbt=i;const o=this._$CK,c=this._$CX;this.isConnected||this.disconnected();for(let s=0;s<i.length&&!(s>this._$Cwt);s++){const u=i[s];if(!j(u))return this._$Cwt=s,u;s<n&&u===r[s]||(this._$Cwt=B,n=0,Promise.resolve(u).then(async h=>{for(;c.get();)await c.get();const p=o.deref();if(p!==void 0){const C=p._$Cbt.indexOf(u);C>-1&&C<p._$Cwt&&(p._$Cwt=C,p.setValue(h))}}))}return V}disconnected(){this._$CK.disconnect(),this._$CX.pause()}reconnected(){this._$CK.reconnect(this),this._$CX.resume()}}const ut=U(lt);class dt{constructor(){this.cache=new Map}set(e,i){this.cache.set(e,i)}get(e){return this.cache.get(e)}has(e){return this.cache.has(e)}delete(e){this.cache.delete(e)}clear(){this.cache.clear()}}const D=new dt,_t=S`
  :host {
    display: flex;
    aspect-ratio: var(--local-aspect-ratio);
    color: var(--local-color);
    width: var(--local-width);
  }

  svg {
    width: inherit;
    height: inherit;
    object-fit: contain;
    object-position: center;
  }

  .fallback {
    width: var(--local-width);
    height: var(--local-height);
  }
`;var P=function(t,e,i,r){var n=arguments.length,o=n<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,i):r,c;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,i,r);else for(var s=t.length-1;s>=0;s--)(c=t[s])&&(o=(n<3?c(o):n>3?c(e,i,o):c(e,i))||o);return n>3&&o&&Object.defineProperty(e,i,o),o};const M={add:async()=>(await a(async()=>{const{addSvg:t}=await import("./add-BCCf-dV8.js");return{addSvg:t}},__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11]))).addSvg,allWallets:async()=>(await a(async()=>{const{allWalletsSvg:t}=await import("./all-wallets-CT6l0kDa.js");return{allWalletsSvg:t}},__vite__mapDeps([12,1,2,3,4,5,6,7,8,9,10,11]))).allWalletsSvg,arrowBottomCircle:async()=>(await a(async()=>{const{arrowBottomCircleSvg:t}=await import("./arrow-bottom-circle-xv0FZ2qa.js");return{arrowBottomCircleSvg:t}},__vite__mapDeps([13,1,2,3,4,5,6,7,8,9,10,11]))).arrowBottomCircleSvg,appStore:async()=>(await a(async()=>{const{appStoreSvg:t}=await import("./app-store-DWUF6vlw.js");return{appStoreSvg:t}},__vite__mapDeps([14,1,2,3,4,5,6,7,8,9,10,11]))).appStoreSvg,apple:async()=>(await a(async()=>{const{appleSvg:t}=await import("./apple-N4G4Rywr.js");return{appleSvg:t}},__vite__mapDeps([15,1,2,3,4,5,6,7,8,9,10,11]))).appleSvg,arrowBottom:async()=>(await a(async()=>{const{arrowBottomSvg:t}=await import("./arrow-bottom-Btop1Oiu.js");return{arrowBottomSvg:t}},__vite__mapDeps([16,1,2,3,4,5,6,7,8,9,10,11]))).arrowBottomSvg,arrowLeft:async()=>(await a(async()=>{const{arrowLeftSvg:t}=await import("./arrow-left-hAD6xqDx.js");return{arrowLeftSvg:t}},__vite__mapDeps([17,1,2,3,4,5,6,7,8,9,10,11]))).arrowLeftSvg,arrowRight:async()=>(await a(async()=>{const{arrowRightSvg:t}=await import("./arrow-right-D9c8Yo6e.js");return{arrowRightSvg:t}},__vite__mapDeps([18,1,2,3,4,5,6,7,8,9,10,11]))).arrowRightSvg,arrowTop:async()=>(await a(async()=>{const{arrowTopSvg:t}=await import("./arrow-top-CkVVN8Aq.js");return{arrowTopSvg:t}},__vite__mapDeps([19,1,2,3,4,5,6,7,8,9,10,11]))).arrowTopSvg,bank:async()=>(await a(async()=>{const{bankSvg:t}=await import("./bank-BvnNoPI8.js");return{bankSvg:t}},__vite__mapDeps([20,1,2,3,4,5,6,7,8,9,10,11]))).bankSvg,browser:async()=>(await a(async()=>{const{browserSvg:t}=await import("./browser-CW8uYhza.js");return{browserSvg:t}},__vite__mapDeps([21,1,2,3,4,5,6,7,8,9,10,11]))).browserSvg,card:async()=>(await a(async()=>{const{cardSvg:t}=await import("./card-BcHCsVVj.js");return{cardSvg:t}},__vite__mapDeps([22,1,2,3,4,5,6,7,8,9,10,11]))).cardSvg,checkmark:async()=>(await a(async()=>{const{checkmarkSvg:t}=await import("./checkmark-BipbpY22.js");return{checkmarkSvg:t}},__vite__mapDeps([23,1,2,3,4,5,6,7,8,9,10,11]))).checkmarkSvg,checkmarkBold:async()=>(await a(async()=>{const{checkmarkBoldSvg:t}=await import("./checkmark-bold-x1J7IiCE.js");return{checkmarkBoldSvg:t}},__vite__mapDeps([24,1,2,3,4,5,6,7,8,9,10,11]))).checkmarkBoldSvg,chevronBottom:async()=>(await a(async()=>{const{chevronBottomSvg:t}=await import("./chevron-bottom-Hgl7YQrQ.js");return{chevronBottomSvg:t}},__vite__mapDeps([25,1,2,3,4,5,6,7,8,9,10,11]))).chevronBottomSvg,chevronLeft:async()=>(await a(async()=>{const{chevronLeftSvg:t}=await import("./chevron-left-BnaBXdNG.js");return{chevronLeftSvg:t}},__vite__mapDeps([26,1,2,3,4,5,6,7,8,9,10,11]))).chevronLeftSvg,chevronRight:async()=>(await a(async()=>{const{chevronRightSvg:t}=await import("./chevron-right-BwyjxqGU.js");return{chevronRightSvg:t}},__vite__mapDeps([27,1,2,3,4,5,6,7,8,9,10,11]))).chevronRightSvg,chevronTop:async()=>(await a(async()=>{const{chevronTopSvg:t}=await import("./chevron-top-C1MXSt2F.js");return{chevronTopSvg:t}},__vite__mapDeps([28,1,2,3,4,5,6,7,8,9,10,11]))).chevronTopSvg,chromeStore:async()=>(await a(async()=>{const{chromeStoreSvg:t}=await import("./chrome-store-X6ccwf7w.js");return{chromeStoreSvg:t}},__vite__mapDeps([29,1,2,3,4,5,6,7,8,9,10,11]))).chromeStoreSvg,clock:async()=>(await a(async()=>{const{clockSvg:t}=await import("./clock-B2sV6eqL.js");return{clockSvg:t}},__vite__mapDeps([30,1,2,3,4,5,6,7,8,9,10,11]))).clockSvg,close:async()=>(await a(async()=>{const{closeSvg:t}=await import("./close-BAnPF16k.js");return{closeSvg:t}},__vite__mapDeps([31,1,2,3,4,5,6,7,8,9,10,11]))).closeSvg,compass:async()=>(await a(async()=>{const{compassSvg:t}=await import("./compass-DYJ9szvu.js");return{compassSvg:t}},__vite__mapDeps([32,1,2,3,4,5,6,7,8,9,10,11]))).compassSvg,coinPlaceholder:async()=>(await a(async()=>{const{coinPlaceholderSvg:t}=await import("./coinPlaceholder-CfsHo3MK.js");return{coinPlaceholderSvg:t}},__vite__mapDeps([33,1,2,3,4,5,6,7,8,9,10,11]))).coinPlaceholderSvg,copy:async()=>(await a(async()=>{const{copySvg:t}=await import("./copy-B_LXGWy3.js");return{copySvg:t}},__vite__mapDeps([34,1,2,3,4,5,6,7,8,9,10,11]))).copySvg,cursor:async()=>(await a(async()=>{const{cursorSvg:t}=await import("./cursor-DcEs6gFW.js");return{cursorSvg:t}},__vite__mapDeps([35,1,2,3,4,5,6,7,8,9,10,11]))).cursorSvg,cursorTransparent:async()=>(await a(async()=>{const{cursorTransparentSvg:t}=await import("./cursor-transparent-BHWbs7Iq.js");return{cursorTransparentSvg:t}},__vite__mapDeps([36,1,2,3,4,5,6,7,8,9,10,11]))).cursorTransparentSvg,desktop:async()=>(await a(async()=>{const{desktopSvg:t}=await import("./desktop-Bei3xorl.js");return{desktopSvg:t}},__vite__mapDeps([37,1,2,3,4,5,6,7,8,9,10,11]))).desktopSvg,disconnect:async()=>(await a(async()=>{const{disconnectSvg:t}=await import("./disconnect-BqCBevNS.js");return{disconnectSvg:t}},__vite__mapDeps([38,1,2,3,4,5,6,7,8,9,10,11]))).disconnectSvg,discord:async()=>(await a(async()=>{const{discordSvg:t}=await import("./discord-CCMY4b79.js");return{discordSvg:t}},__vite__mapDeps([39,1,2,3,4,5,6,7,8,9,10,11]))).discordSvg,etherscan:async()=>(await a(async()=>{const{etherscanSvg:t}=await import("./etherscan-C5YFf3Ft.js");return{etherscanSvg:t}},__vite__mapDeps([40,1,2,3,4,5,6,7,8,9,10,11]))).etherscanSvg,extension:async()=>(await a(async()=>{const{extensionSvg:t}=await import("./extension-BC2MiME-.js");return{extensionSvg:t}},__vite__mapDeps([41,1,2,3,4,5,6,7,8,9,10,11]))).extensionSvg,externalLink:async()=>(await a(async()=>{const{externalLinkSvg:t}=await import("./external-link-DcV9erXN.js");return{externalLinkSvg:t}},__vite__mapDeps([42,1,2,3,4,5,6,7,8,9,10,11]))).externalLinkSvg,facebook:async()=>(await a(async()=>{const{facebookSvg:t}=await import("./facebook-CUDyHPAZ.js");return{facebookSvg:t}},__vite__mapDeps([43,1,2,3,4,5,6,7,8,9,10,11]))).facebookSvg,farcaster:async()=>(await a(async()=>{const{farcasterSvg:t}=await import("./farcaster-E0Bm7Un-.js");return{farcasterSvg:t}},__vite__mapDeps([44,1,2,3,4,5,6,7,8,9,10,11]))).farcasterSvg,filters:async()=>(await a(async()=>{const{filtersSvg:t}=await import("./filters-Cerx_aGf.js");return{filtersSvg:t}},__vite__mapDeps([45,1,2,3,4,5,6,7,8,9,10,11]))).filtersSvg,github:async()=>(await a(async()=>{const{githubSvg:t}=await import("./github-DnmT_l68.js");return{githubSvg:t}},__vite__mapDeps([46,1,2,3,4,5,6,7,8,9,10,11]))).githubSvg,google:async()=>(await a(async()=>{const{googleSvg:t}=await import("./google-YSEam_NJ.js");return{googleSvg:t}},__vite__mapDeps([47,1,2,3,4,5,6,7,8,9,10,11]))).googleSvg,helpCircle:async()=>(await a(async()=>{const{helpCircleSvg:t}=await import("./help-circle-bSCu4tTe.js");return{helpCircleSvg:t}},__vite__mapDeps([48,1,2,3,4,5,6,7,8,9,10,11]))).helpCircleSvg,image:async()=>(await a(async()=>{const{imageSvg:t}=await import("./image-DVQHxR_m.js");return{imageSvg:t}},__vite__mapDeps([49,1,2,3,4,5,6,7,8,9,10,11]))).imageSvg,id:async()=>(await a(async()=>{const{idSvg:t}=await import("./id-CL5LqB6H.js");return{idSvg:t}},__vite__mapDeps([50,1,2,3,4,5,6,7,8,9,10,11]))).idSvg,infoCircle:async()=>(await a(async()=>{const{infoCircleSvg:t}=await import("./info-circle-BbPiEwdJ.js");return{infoCircleSvg:t}},__vite__mapDeps([51,1,2,3,4,5,6,7,8,9,10,11]))).infoCircleSvg,lightbulb:async()=>(await a(async()=>{const{lightbulbSvg:t}=await import("./lightbulb-CMOqcI56.js");return{lightbulbSvg:t}},__vite__mapDeps([52,1,2,3,4,5,6,7,8,9,10,11]))).lightbulbSvg,mail:async()=>(await a(async()=>{const{mailSvg:t}=await import("./mail-C_x17tnD.js");return{mailSvg:t}},__vite__mapDeps([53,1,2,3,4,5,6,7,8,9,10,11]))).mailSvg,mobile:async()=>(await a(async()=>{const{mobileSvg:t}=await import("./mobile-KieaIR51.js");return{mobileSvg:t}},__vite__mapDeps([54,1,2,3,4,5,6,7,8,9,10,11]))).mobileSvg,more:async()=>(await a(async()=>{const{moreSvg:t}=await import("./more-Duyf4d9z.js");return{moreSvg:t}},__vite__mapDeps([55,1,2,3,4,5,6,7,8,9,10,11]))).moreSvg,networkPlaceholder:async()=>(await a(async()=>{const{networkPlaceholderSvg:t}=await import("./network-placeholder-B4_yajTy.js");return{networkPlaceholderSvg:t}},__vite__mapDeps([56,1,2,3,4,5,6,7,8,9,10,11]))).networkPlaceholderSvg,nftPlaceholder:async()=>(await a(async()=>{const{nftPlaceholderSvg:t}=await import("./nftPlaceholder-4yjjSncT.js");return{nftPlaceholderSvg:t}},__vite__mapDeps([57,1,2,3,4,5,6,7,8,9,10,11]))).nftPlaceholderSvg,off:async()=>(await a(async()=>{const{offSvg:t}=await import("./off-xD-dcqzh.js");return{offSvg:t}},__vite__mapDeps([58,1,2,3,4,5,6,7,8,9,10,11]))).offSvg,playStore:async()=>(await a(async()=>{const{playStoreSvg:t}=await import("./play-store-kMX2QYUl.js");return{playStoreSvg:t}},__vite__mapDeps([59,1,2,3,4,5,6,7,8,9,10,11]))).playStoreSvg,plus:async()=>(await a(async()=>{const{plusSvg:t}=await import("./plus-szcPJ2dE.js");return{plusSvg:t}},__vite__mapDeps([60,1,2,3,4,5,6,7,8,9,10,11]))).plusSvg,qrCode:async()=>(await a(async()=>{const{qrCodeIcon:t}=await import("./qr-code-JC15rpI3.js");return{qrCodeIcon:t}},__vite__mapDeps([61,1,2,3,4,5,6,7,8,9,10,11]))).qrCodeIcon,recycleHorizontal:async()=>(await a(async()=>{const{recycleHorizontalSvg:t}=await import("./recycle-horizontal-CfcHFjsP.js");return{recycleHorizontalSvg:t}},__vite__mapDeps([62,1,2,3,4,5,6,7,8,9,10,11]))).recycleHorizontalSvg,refresh:async()=>(await a(async()=>{const{refreshSvg:t}=await import("./refresh-Dxfl3_mt.js");return{refreshSvg:t}},__vite__mapDeps([63,1,2,3,4,5,6,7,8,9,10,11]))).refreshSvg,search:async()=>(await a(async()=>{const{searchSvg:t}=await import("./search-BFDeejND.js");return{searchSvg:t}},__vite__mapDeps([64,1,2,3,4,5,6,7,8,9,10,11]))).searchSvg,send:async()=>(await a(async()=>{const{sendSvg:t}=await import("./send-CHet4wim.js");return{sendSvg:t}},__vite__mapDeps([65,1,2,3,4,5,6,7,8,9,10,11]))).sendSvg,swapHorizontal:async()=>(await a(async()=>{const{swapHorizontalSvg:t}=await import("./swapHorizontal-B2mvS-_B.js");return{swapHorizontalSvg:t}},__vite__mapDeps([66,1,2,3,4,5,6,7,8,9,10,11]))).swapHorizontalSvg,swapHorizontalMedium:async()=>(await a(async()=>{const{swapHorizontalMediumSvg:t}=await import("./swapHorizontalMedium-C6AoL0o_.js");return{swapHorizontalMediumSvg:t}},__vite__mapDeps([67,1,2,3,4,5,6,7,8,9,10,11]))).swapHorizontalMediumSvg,swapHorizontalBold:async()=>(await a(async()=>{const{swapHorizontalBoldSvg:t}=await import("./swapHorizontalBold-DzmWmC9_.js");return{swapHorizontalBoldSvg:t}},__vite__mapDeps([68,1,2,3,4,5,6,7,8,9,10,11]))).swapHorizontalBoldSvg,swapHorizontalRoundedBold:async()=>(await a(async()=>{const{swapHorizontalRoundedBoldSvg:t}=await import("./swapHorizontalRoundedBold-BIIC6PwO.js");return{swapHorizontalRoundedBoldSvg:t}},__vite__mapDeps([69,1,2,3,4,5,6,7,8,9,10,11]))).swapHorizontalRoundedBoldSvg,swapVertical:async()=>(await a(async()=>{const{swapVerticalSvg:t}=await import("./swapVertical-CoZ1gqDQ.js");return{swapVerticalSvg:t}},__vite__mapDeps([70,1,2,3,4,5,6,7,8,9,10,11]))).swapVerticalSvg,telegram:async()=>(await a(async()=>{const{telegramSvg:t}=await import("./telegram-Do3KBXLh.js");return{telegramSvg:t}},__vite__mapDeps([71,1,2,3,4,5,6,7,8,9,10,11]))).telegramSvg,threeDots:async()=>(await a(async()=>{const{threeDotsSvg:t}=await import("./three-dots-eqwEpeM9.js");return{threeDotsSvg:t}},__vite__mapDeps([72,1,2,3,4,5,6,7,8,9,10,11]))).threeDotsSvg,twitch:async()=>(await a(async()=>{const{twitchSvg:t}=await import("./twitch-DMDcHun-.js");return{twitchSvg:t}},__vite__mapDeps([73,1,2,3,4,5,6,7,8,9,10,11]))).twitchSvg,twitter:async()=>(await a(async()=>{const{xSvg:t}=await import("./x-CwPa2i5F.js");return{xSvg:t}},__vite__mapDeps([74,1,2,3,4,5,6,7,8,9,10,11]))).xSvg,twitterIcon:async()=>(await a(async()=>{const{twitterIconSvg:t}=await import("./twitterIcon-QyWtSVfI.js");return{twitterIconSvg:t}},__vite__mapDeps([75,1,2,3,4,5,6,7,8,9,10,11]))).twitterIconSvg,verify:async()=>(await a(async()=>{const{verifySvg:t}=await import("./verify-T8sB_KOX.js");return{verifySvg:t}},__vite__mapDeps([76,1,2,3,4,5,6,7,8,9,10,11]))).verifySvg,verifyFilled:async()=>(await a(async()=>{const{verifyFilledSvg:t}=await import("./verify-filled-qvUakMjP.js");return{verifyFilledSvg:t}},__vite__mapDeps([77,1,2,3,4,5,6,7,8,9,10,11]))).verifyFilledSvg,wallet:async()=>(await a(async()=>{const{walletSvg:t}=await import("./wallet-Dx7RgoOr.js");return{walletSvg:t}},__vite__mapDeps([78,1,2,3,4,5,6,7,8,9,10,11]))).walletSvg,walletConnect:async()=>(await a(async()=>{const{walletConnectSvg:t}=await import("./walletconnect-LcwwgtCv.js");return{walletConnectSvg:t}},__vite__mapDeps([79,1,2,3,4,5,6,7,8,9,10,11]))).walletConnectSvg,walletConnectLightBrown:async()=>(await a(async()=>{const{walletConnectLightBrownSvg:t}=await import("./walletconnect-LcwwgtCv.js");return{walletConnectLightBrownSvg:t}},__vite__mapDeps([79,1,2,3,4,5,6,7,8,9,10,11]))).walletConnectLightBrownSvg,walletConnectBrown:async()=>(await a(async()=>{const{walletConnectBrownSvg:t}=await import("./walletconnect-LcwwgtCv.js");return{walletConnectBrownSvg:t}},__vite__mapDeps([79,1,2,3,4,5,6,7,8,9,10,11]))).walletConnectBrownSvg,walletPlaceholder:async()=>(await a(async()=>{const{walletPlaceholderSvg:t}=await import("./wallet-placeholder-Ch1ZWHbx.js");return{walletPlaceholderSvg:t}},__vite__mapDeps([80,1,2,3,4,5,6,7,8,9,10,11]))).walletPlaceholderSvg,warningCircle:async()=>(await a(async()=>{const{warningCircleSvg:t}=await import("./warning-circle-BTYlyEnu.js");return{warningCircleSvg:t}},__vite__mapDeps([81,1,2,3,4,5,6,7,8,9,10,11]))).warningCircleSvg,x:async()=>(await a(async()=>{const{xSvg:t}=await import("./x-CwPa2i5F.js");return{xSvg:t}},__vite__mapDeps([74,1,2,3,4,5,6,7,8,9,10,11]))).xSvg,info:async()=>(await a(async()=>{const{infoSvg:t}=await import("./info-5-y8J2sF.js");return{infoSvg:t}},__vite__mapDeps([82,1,2,3,4,5,6,7,8,9,10,11]))).infoSvg,exclamationTriangle:async()=>(await a(async()=>{const{exclamationTriangleSvg:t}=await import("./exclamation-triangle-CaNSB22S.js");return{exclamationTriangleSvg:t}},__vite__mapDeps([83,1,2,3,4,5,6,7,8,9,10,11]))).exclamationTriangleSvg,reown:async()=>(await a(async()=>{const{reownSvg:t}=await import("./reown-logo-DDKijvrx.js");return{reownSvg:t}},__vite__mapDeps([84,1,2,3,4,5,6,7,8,9,10,11]))).reownSvg};async function gt(t){if(D.has(t))return D.get(t);const i=(M[t]??M.copy)();return D.set(t,i),i}let m=class extends E{constructor(){super(...arguments),this.size="md",this.name="copy",this.color="fg-300",this.aspectRatio="1 / 1"}render(){return this.style.cssText=`
      --local-color: ${`var(--wui-color-${this.color});`}
      --local-width: ${`var(--wui-icon-size-${this.size});`}
      --local-aspect-ratio: ${this.aspectRatio}
    `,f`${ut(gt(this.name),f`<div class="fallback"></div>`)}`}};m.styles=[b,H,_t];P([l()],m.prototype,"size",void 0);P([l()],m.prototype,"name",void 0);P([l()],m.prototype,"color",void 0);P([l()],m.prototype,"aspectRatio",void 0);m=P([$("wui-icon")],m);const ht=U(class extends F{constructor(t){if(super(t),t.type!==W.ATTRIBUTE||t.name!=="class"||t.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){if(this.st===void 0){this.st=new Set,t.strings!==void 0&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(r=>r!=="")));for(const r in e)e[r]&&!this.nt?.has(r)&&this.st.add(r);return this.render(e)}const i=t.element.classList;for(const r of this.st)r in e||(i.remove(r),this.st.delete(r));for(const r in e){const n=!!e[r];n===this.st.has(r)||this.nt?.has(r)||(n?(i.add(r),this.st.add(r)):(i.remove(r),this.st.delete(r)))}return V}}),pt=S`
  :host {
    display: inline-flex !important;
  }

  slot {
    width: 100%;
    display: inline-block;
    font-style: normal;
    font-family: var(--wui-font-family);
    font-feature-settings:
      'tnum' on,
      'lnum' on,
      'case' on;
    line-height: 130%;
    font-weight: var(--wui-font-weight-regular);
    overflow: inherit;
    text-overflow: inherit;
    text-align: var(--local-align);
    color: var(--local-color);
  }

  .wui-line-clamp-1 {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
  }

  .wui-line-clamp-2 {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }

  .wui-font-medium-400 {
    font-size: var(--wui-font-size-medium);
    font-weight: var(--wui-font-weight-light);
    letter-spacing: var(--wui-letter-spacing-medium);
  }

  .wui-font-medium-600 {
    font-size: var(--wui-font-size-medium);
    letter-spacing: var(--wui-letter-spacing-medium);
  }

  .wui-font-title-600 {
    font-size: var(--wui-font-size-title);
    letter-spacing: var(--wui-letter-spacing-title);
  }

  .wui-font-title-6-600 {
    font-size: var(--wui-font-size-title-6);
    letter-spacing: var(--wui-letter-spacing-title-6);
  }

  .wui-font-mini-700 {
    font-size: var(--wui-font-size-mini);
    letter-spacing: var(--wui-letter-spacing-mini);
    text-transform: uppercase;
  }

  .wui-font-large-500,
  .wui-font-large-600,
  .wui-font-large-700 {
    font-size: var(--wui-font-size-large);
    letter-spacing: var(--wui-letter-spacing-large);
  }

  .wui-font-2xl-500,
  .wui-font-2xl-600,
  .wui-font-2xl-700 {
    font-size: var(--wui-font-size-2xl);
    letter-spacing: var(--wui-letter-spacing-2xl);
  }

  .wui-font-paragraph-400,
  .wui-font-paragraph-500,
  .wui-font-paragraph-600,
  .wui-font-paragraph-700 {
    font-size: var(--wui-font-size-paragraph);
    letter-spacing: var(--wui-letter-spacing-paragraph);
  }

  .wui-font-small-400,
  .wui-font-small-500,
  .wui-font-small-600 {
    font-size: var(--wui-font-size-small);
    letter-spacing: var(--wui-letter-spacing-small);
  }

  .wui-font-tiny-400,
  .wui-font-tiny-500,
  .wui-font-tiny-600 {
    font-size: var(--wui-font-size-tiny);
    letter-spacing: var(--wui-letter-spacing-tiny);
  }

  .wui-font-micro-700,
  .wui-font-micro-600 {
    font-size: var(--wui-font-size-micro);
    letter-spacing: var(--wui-letter-spacing-micro);
    text-transform: uppercase;
  }

  .wui-font-tiny-400,
  .wui-font-small-400,
  .wui-font-medium-400,
  .wui-font-paragraph-400 {
    font-weight: var(--wui-font-weight-light);
  }

  .wui-font-large-700,
  .wui-font-paragraph-700,
  .wui-font-micro-700,
  .wui-font-mini-700 {
    font-weight: var(--wui-font-weight-bold);
  }

  .wui-font-medium-600,
  .wui-font-medium-title-600,
  .wui-font-title-6-600,
  .wui-font-large-600,
  .wui-font-paragraph-600,
  .wui-font-small-600,
  .wui-font-tiny-600,
  .wui-font-micro-600 {
    font-weight: var(--wui-font-weight-medium);
  }

  :host([disabled]) {
    opacity: 0.4;
  }
`;var O=function(t,e,i,r){var n=arguments.length,o=n<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,i):r,c;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,i,r);else for(var s=t.length-1;s>=0;s--)(c=t[s])&&(o=(n<3?c(o):n>3?c(e,i,o):c(e,i))||o);return n>3&&o&&Object.defineProperty(e,i,o),o};let y=class extends E{constructor(){super(...arguments),this.variant="paragraph-500",this.color="fg-300",this.align="left",this.lineClamp=void 0}render(){const e={[`wui-font-${this.variant}`]:!0,[`wui-color-${this.color}`]:!0,[`wui-line-clamp-${this.lineClamp}`]:!!this.lineClamp};return this.style.cssText=`
      --local-align: ${this.align};
      --local-color: var(--wui-color-${this.color});
    `,f`<slot class=${ht(e)}></slot>`}};y.styles=[b,pt];O([l()],y.prototype,"variant",void 0);O([l()],y.prototype,"color",void 0);O([l()],y.prototype,"align",void 0);O([l()],y.prototype,"lineClamp",void 0);y=O([$("wui-text")],y);const vt=S`
  :host {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    background-color: var(--wui-color-gray-glass-020);
    border-radius: var(--local-border-radius);
    border: var(--local-border);
    box-sizing: content-box;
    width: var(--local-size);
    height: var(--local-size);
    min-height: var(--local-size);
    min-width: var(--local-size);
  }

  @supports (background: color-mix(in srgb, white 50%, black)) {
    :host {
      background-color: color-mix(in srgb, var(--local-bg-value) var(--local-bg-mix), transparent);
    }
  }
`;var v=function(t,e,i,r){var n=arguments.length,o=n<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,i):r,c;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,i,r);else for(var s=t.length-1;s>=0;s--)(c=t[s])&&(o=(n<3?c(o):n>3?c(e,i,o):c(e,i))||o);return n>3&&o&&Object.defineProperty(e,i,o),o};let g=class extends E{constructor(){super(...arguments),this.size="md",this.backgroundColor="accent-100",this.iconColor="accent-100",this.background="transparent",this.border=!1,this.borderColor="wui-color-bg-125",this.icon="copy"}render(){const e=this.iconSize||this.size,i=this.size==="lg",r=this.size==="xl",n=i?"12%":"16%",o=i?"xxs":r?"s":"3xl",c=this.background==="gray",s=this.background==="opaque",u=this.backgroundColor==="accent-100"&&s||this.backgroundColor==="success-100"&&s||this.backgroundColor==="error-100"&&s||this.backgroundColor==="inverse-100"&&s;let h=`var(--wui-color-${this.backgroundColor})`;return u?h=`var(--wui-icon-box-bg-${this.backgroundColor})`:c&&(h=`var(--wui-color-gray-${this.backgroundColor})`),this.style.cssText=`
       --local-bg-value: ${h};
       --local-bg-mix: ${u||c?"100%":n};
       --local-border-radius: var(--wui-border-radius-${o});
       --local-size: var(--wui-icon-box-size-${this.size});
       --local-border: ${this.borderColor==="wui-color-bg-125"?"2px":"1px"} solid ${this.border?`var(--${this.borderColor})`:"transparent"}
   `,f` <wui-icon color=${this.iconColor} size=${e} name=${this.icon}></wui-icon> `}};g.styles=[b,X,vt];v([l()],g.prototype,"size",void 0);v([l()],g.prototype,"backgroundColor",void 0);v([l()],g.prototype,"iconColor",void 0);v([l()],g.prototype,"iconSize",void 0);v([l()],g.prototype,"background",void 0);v([l({type:Boolean})],g.prototype,"border",void 0);v([l()],g.prototype,"borderColor",void 0);v([l()],g.prototype,"icon",void 0);g=v([$("wui-icon-box")],g);const wt=S`
  :host {
    display: block;
    width: var(--local-width);
    height: var(--local-height);
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
    border-radius: inherit;
  }
`;var L=function(t,e,i,r){var n=arguments.length,o=n<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,i):r,c;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,i,r);else for(var s=t.length-1;s>=0;s--)(c=t[s])&&(o=(n<3?c(o):n>3?c(e,i,o):c(e,i))||o);return n>3&&o&&Object.defineProperty(e,i,o),o};let x=class extends E{constructor(){super(...arguments),this.src="./path/to/image.jpg",this.alt="Image",this.size=void 0}render(){return this.style.cssText=`
      --local-width: ${this.size?`var(--wui-icon-size-${this.size});`:"100%"};
      --local-height: ${this.size?`var(--wui-icon-size-${this.size});`:"100%"};
      `,f`<img src=${this.src} alt=${this.alt} @error=${this.handleImageError} />`}handleImageError(){this.dispatchEvent(new CustomEvent("onLoadError",{bubbles:!0,composed:!0}))}};x.styles=[b,H,wt];L([l()],x.prototype,"src",void 0);L([l()],x.prototype,"alt",void 0);L([l()],x.prototype,"size",void 0);x=L([$("wui-image")],x);const ft=S`
  :host {
    display: flex;
    justify-content: center;
    align-items: center;
    height: var(--wui-spacing-m);
    padding: 0 var(--wui-spacing-3xs) !important;
    border-radius: var(--wui-border-radius-5xs);
    transition:
      border-radius var(--wui-duration-lg) var(--wui-ease-out-power-1),
      background-color var(--wui-duration-lg) var(--wui-ease-out-power-1);
    will-change: border-radius, background-color;
  }

  :host > wui-text {
    transform: translateY(5%);
  }

  :host([data-variant='main']) {
    background-color: var(--wui-color-accent-glass-015);
    color: var(--wui-color-accent-100);
  }

  :host([data-variant='shade']) {
    background-color: var(--wui-color-gray-glass-010);
    color: var(--wui-color-fg-200);
  }

  :host([data-variant='success']) {
    background-color: var(--wui-icon-box-bg-success-100);
    color: var(--wui-color-success-100);
  }

  :host([data-variant='error']) {
    background-color: var(--wui-icon-box-bg-error-100);
    color: var(--wui-color-error-100);
  }

  :host([data-size='lg']) {
    padding: 11px 5px !important;
  }

  :host([data-size='lg']) > wui-text {
    transform: translateY(2%);
  }
`;var z=function(t,e,i,r){var n=arguments.length,o=n<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,i):r,c;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,i,r);else for(var s=t.length-1;s>=0;s--)(c=t[s])&&(o=(n<3?c(o):n>3?c(e,i,o):c(e,i))||o);return n>3&&o&&Object.defineProperty(e,i,o),o};let T=class extends E{constructor(){super(...arguments),this.variant="main",this.size="lg"}render(){this.dataset.variant=this.variant,this.dataset.size=this.size;const e=this.size==="md"?"mini-700":"micro-700";return f`
      <wui-text data-variant=${this.variant} variant=${e} color="inherit">
        <slot></slot>
      </wui-text>
    `}};T.styles=[b,ft];z([l()],T.prototype,"variant",void 0);z([l()],T.prototype,"size",void 0);T=z([$("wui-tag")],T);const mt=S`
  :host {
    display: flex;
  }

  :host([data-size='sm']) > svg {
    width: 12px;
    height: 12px;
  }

  :host([data-size='md']) > svg {
    width: 16px;
    height: 16px;
  }

  :host([data-size='lg']) > svg {
    width: 24px;
    height: 24px;
  }

  :host([data-size='xl']) > svg {
    width: 32px;
    height: 32px;
  }

  svg {
    animation: rotate 2s linear infinite;
  }

  circle {
    fill: none;
    stroke: var(--local-color);
    stroke-width: 4px;
    stroke-dasharray: 1, 124;
    stroke-dashoffset: 0;
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
  }

  :host([data-size='md']) > svg > circle {
    stroke-width: 6px;
  }

  :host([data-size='sm']) > svg > circle {
    stroke-width: 8px;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes dash {
    0% {
      stroke-dasharray: 1, 124;
      stroke-dashoffset: 0;
    }

    50% {
      stroke-dasharray: 90, 124;
      stroke-dashoffset: -35;
    }

    100% {
      stroke-dashoffset: -125;
    }
  }
`;var k=function(t,e,i,r){var n=arguments.length,o=n<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,i):r,c;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,i,r);else for(var s=t.length-1;s>=0;s--)(c=t[s])&&(o=(n<3?c(o):n>3?c(e,i,o):c(e,i))||o);return n>3&&o&&Object.defineProperty(e,i,o),o};let A=class extends E{constructor(){super(...arguments),this.color="accent-100",this.size="lg"}render(){return this.style.cssText=`--local-color: ${this.color==="inherit"?"inherit":`var(--wui-color-${this.color})`}`,this.dataset.size=this.size,f`<svg viewBox="25 25 50 50">
      <circle r="20" cy="50" cx="50"></circle>
    </svg>`}};A.styles=[b,mt];k([l()],A.prototype,"color",void 0);k([l()],A.prototype,"size",void 0);A=k([$("wui-loading-spinner")],A);export{w as U,ht as a,$ as c,U as e,nt as f,l as n,$t as o,bt as r};
