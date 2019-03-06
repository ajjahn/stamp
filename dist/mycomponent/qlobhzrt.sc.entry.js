const t=window.mycomponent.h;class e{getText(){return(this.first||"")+((t=this.middle)?` ${t}`:"")+((e=this.last)?` ${e}`:"");var t,e}render(){return t("ion-button",null,"Hello, World! I'm ",this.getText())}static get is(){return"my-component"}static get encapsulation(){return"shadow"}static get properties(){return{first:{type:String,attr:"first"},last:{type:String,attr:"last"},middle:{type:String,attr:"middle"}}}static get style(){return"div.sc-my-component{background:red;height:300px}"}}function n(t){return"string"==typeof t&&t.length>0?{"ion-color":!0,[`ion-color-${t}`]:!0}:void 0}const o=/^[a-z][a-z0-9+\-.]*:/;class i{constructor(){this.inToolbar=!1,this.buttonType="button",this.disabled=!1,this.routerDirection="forward",this.strong=!1,this.type="button",this.onFocus=(()=>{this.ionFocus.emit()}),this.onBlur=(()=>{this.ionBlur.emit()})}componentWillLoad(){this.inToolbar=!!this.el.closest("ion-buttons")}onClick(t){if("button"===this.type)!async function(t,e,n,i){if(null!=e&&"#"!==e[0]&&!o.test(e)){const o=t.document.querySelector("ion-router");if(o)null!=n&&n.preventDefault(),await o.componentOnReady(),o.push(e,i)}}(this.win,this.href,t,this.routerDirection);else if((e=this.el).shadowRoot&&e.attachShadow){const e=this.el.closest("form");if(e){t.preventDefault();const n=this.win.document.createElement("button");n.type=this.type,n.style.display="none",e.appendChild(n),n.click(),n.remove()}}var e}hostData(){const{buttonType:t,disabled:e,color:o,expand:i,shape:s,size:r,strong:l}=this;let a=this.fill;return void 0===a&&(a=this.inToolbar?"clear":"solid"),{"aria-disabled":e?"true":null,class:Object.assign({},n(o),{[t]:!0,[`${t}-${i}`]:void 0!==i,[`${t}-${r}`]:void 0!==r,[`${t}-${s}`]:void 0!==s,[`${t}-${a}`]:!0,[`${t}-strong`]:l,"button-disabled":e,"ion-activatable":!0,"ion-focusable":!0})}}render(){const e=void 0===this.href?"button":"a";return t(e,Object.assign({},"button"===e?{type:this.type}:{href:this.href},{class:"button-native",disabled:this.disabled,onFocus:this.onFocus,onBlur:this.onBlur}),t("span",{class:"button-inner"},t("slot",{name:"icon-only"}),t("slot",{name:"start"}),t("slot",null),t("slot",{name:"end"})),"md"===this.mode&&t("ion-ripple-effect",{type:this.inToolbar?"unbounded":"bounded"}))}static get is(){return"ion-button"}static get encapsulation(){return"shadow"}static get properties(){return{buttonType:{type:String,attr:"button-type",mutable:!0},color:{type:String,attr:"color"},disabled:{type:Boolean,attr:"disabled",reflectToAttr:!0},el:{elementRef:!0},expand:{type:String,attr:"expand",reflectToAttr:!0},fill:{type:String,attr:"fill",reflectToAttr:!0,mutable:!0},href:{type:String,attr:"href"},mode:{type:String,attr:"mode"},routerDirection:{type:String,attr:"router-direction"},shape:{type:String,attr:"shape",reflectToAttr:!0},size:{type:String,attr:"size",reflectToAttr:!0},strong:{type:Boolean,attr:"strong"},type:{type:String,attr:"type"},win:{context:"window"}}}static get events(){return[{name:"ionFocus",method:"ionFocus",bubbles:!0,cancelable:!0,composed:!0},{name:"ionBlur",method:"ionBlur",bubbles:!0,cancelable:!0,composed:!0}]}static get listeners(){return[{name:"click",method:"onClick"}]}static get style(){return".sc-ion-button-md-h{--overflow:hidden;--ripple-color:currentColor;--border-width:initial;--border-color:initial;--border-style:initial;--box-shadow:none;display:inline-block;width:auto;color:var(--color);font-family:var(--ion-font-family,inherit);text-align:center;text-decoration:none;text-overflow:ellipsis;white-space:nowrap;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;vertical-align:top;vertical-align:-webkit-baseline-middle;pointer-events:auto;-webkit-font-kerning:none;font-kerning:none}.button-disabled.sc-ion-button-md-h{pointer-events:none}.button-disabled.sc-ion-button-md-h   .button-native.sc-ion-button-md{cursor:default;opacity:.5;pointer-events:none}.button-solid.sc-ion-button-md-h{--background:var(--ion-color-primary,#3880ff);--background-focused:var(--ion-color-primary-shade,#3171e0);--color:var(--ion-color-primary-contrast,#fff);--color-activated:var(--ion-color-primary-contrast,#fff);--color-focused:var(--ion-color-primary-contrast,#fff)}.button-solid.ion-color.sc-ion-button-md-h   .button-native.sc-ion-button-md{background:var(--ion-color-base);color:var(--ion-color-contrast)}.button-solid.ion-color.ion-focused.sc-ion-button-md-h   .button-native.sc-ion-button-md{background:var(--ion-color-shade)}.button-outline.sc-ion-button-md-h{--border-color:var(--ion-color-primary,#3880ff);--background:transparent;--color:var(--ion-color-primary,#3880ff);--color-focused:var(--ion-color-primary,#3880ff)}.button-outline.ion-color.sc-ion-button-md-h   .button-native.sc-ion-button-md{border-color:var(--ion-color-base);background:transparent;color:var(--ion-color-base)}.button-outline.ion-focused.ion-color.sc-ion-button-md-h   .button-native.sc-ion-button-md{background:rgba(var(--ion-color-base-rgb),.1);color:var(--ion-color-base)}.button-clear.sc-ion-button-md-h{--border-width:0;--background:transparent;--color:var(--ion-color-primary,#3880ff)}.button-clear.ion-color.sc-ion-button-md-h   .button-native.sc-ion-button-md{background:transparent;color:var(--ion-color-base)}.button-clear.ion-focused.ion-color.sc-ion-button-md-h   .button-native.sc-ion-button-md{background:rgba(var(--ion-color-base-rgb),.1);color:var(--ion-color-base)}.button-clear.activated.ion-color.sc-ion-button-md-h   .button-native.sc-ion-button-md{background:transparent}.button-block.sc-ion-button-md-h{display:block}.button-block.sc-ion-button-md-h   .button-native.sc-ion-button-md{margin-left:0;margin-right:0;display:block;width:100%;clear:both;contain:content}.button-block.sc-ion-button-md-h   .button-native.sc-ion-button-md:after{clear:both}.button-full.sc-ion-button-md-h{display:block}.button-full.sc-ion-button-md-h   .button-native.sc-ion-button-md{margin-left:0;margin-right:0;display:block;width:100%;contain:content}.button-full.sc-ion-button-md-h:not(.button-round)   .button-native.sc-ion-button-md{border-radius:0;border-right-width:0;border-left-width:0}.button-native.sc-ion-button-md{border-radius:var(--border-radius);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;display:block;position:relative;width:100%;height:100%;-webkit-transition:var(--transition);transition:var(--transition);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);outline:none;background:var(--background);line-height:1;-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);contain:layout style;cursor:pointer;opacity:var(--opacity);overflow:var(--overflow);z-index:0;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-appearance:none;-moz-appearance:none;appearance:none}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.button-native.sc-ion-button-md{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.button-native.sc-ion-button-md::-moz-focus-inner{border:0}.ion-focused.sc-ion-button-md-h   .button-native.sc-ion-button-md{background:var(--background-focused);color:var(--color-focused)}.activated.sc-ion-button-md-h   .button-native.sc-ion-button-md{background:var(--background-activated);color:var(--color-activated)}.button-inner.sc-ion-button-md{display:-ms-flexbox;display:flex;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%}.sc-ion-button-md-s > ion-icon{font-size:1.4em;pointer-events:none}.sc-ion-button-md-s > ion-icon[slot=start]{margin-left:-.3em;margin-right:.3em;margin-top:0;margin-bottom:0}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.sc-ion-button-md-s > ion-icon[slot=start]{margin-left:unset;margin-right:unset;-webkit-margin-start:-.3em;margin-inline-start:-.3em;-webkit-margin-end:.3em;margin-inline-end:.3em}}.sc-ion-button-md-s > ion-icon[slot=end]{margin-left:.3em;margin-right:-.2em;margin-top:0;margin-bottom:0}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.sc-ion-button-md-s > ion-icon[slot=end]{margin-left:unset;margin-right:unset;-webkit-margin-start:.3em;margin-inline-start:.3em;-webkit-margin-end:-.2em;margin-inline-end:-.2em}}.sc-ion-button-md-s > ion-icon[slot=icon-only]{font-size:1.8em}ion-ripple-effect.sc-ion-button-md{color:var(--ripple-color)}.sc-ion-button-md-h{--border-radius:4px;--padding-top:0;--padding-bottom:0;--padding-start:1.1em;--padding-end:1.1em;--transition:box-shadow 280ms cubic-bezier(.4,0,.2,1),background-color 15ms linear,color 15ms linear;margin-left:2px;margin-right:2px;margin-top:4px;margin-bottom:4px;height:36px;font-size:14px;font-weight:500;letter-spacing:.06em;text-transform:uppercase}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.sc-ion-button-md-h{margin-left:unset;margin-right:unset;-webkit-margin-start:2px;margin-inline-start:2px;-webkit-margin-end:2px;margin-inline-end:2px}}.button-solid.sc-ion-button-md-h{--background-activated:var(--background);--box-shadow:0 3px 1px -2px rgba(0,0,0,0.2),0 2px 2px 0 rgba(0,0,0,0.14),0 1px 5px 0 rgba(0,0,0,0.12)}.button-solid.activated.sc-ion-button-md-h{--box-shadow:0 5px 5px -3px rgba(0,0,0,0.2),0 8px 10px 1px rgba(0,0,0,0.14),0 3px 14px 2px rgba(0,0,0,0.12)}.button-outline.sc-ion-button-md-h{--border-width:2px;--border-style:solid;--box-shadow:none;--background-activated:transparent;--background-focused:rgba(var(--ion-color-primary-rgb,56,128,255),0.1);--color-activated:var(--ion-color-primary,#3880ff)}.button-outline.activated.ion-color.sc-ion-button-md-h   .button-native.sc-ion-button-md{background:transparent}.button-clear.sc-ion-button-md-h{--opacity:1;--background-activated:transparent;--background-focused:rgba(var(--ion-color-primary-rgb,56,128,255),0.1);--color-activated:var(--ion-color-primary,#3880ff);--color-focused:var(--ion-color-primary,#3880ff)}.button-round.sc-ion-button-md-h{--border-radius:64px;--padding-top:0;--padding-start:26px;--padding-end:26px;--padding-bottom:0}.button-large.sc-ion-button-md-h{--padding-top:0;--padding-start:1em;--padding-end:1em;--padding-bottom:0;height:2.8em;font-size:20px}.button-small.sc-ion-button-md-h{--padding-top:0;--padding-start:0.9em;--padding-end:0.9em;--padding-bottom:0;height:2.1em;font-size:13px}.button-strong.sc-ion-button-md-h{font-weight:700}.sc-ion-button-md-s > ion-icon[slot=icon-only]{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0}\@media (any-hover:hover){.button-outline.sc-ion-button-md-h:hover   .button-native.sc-ion-button-md{background:rgba(var(--ion-color-primary-rgb,56,128,255),.04)}.button-outline.ion-color.sc-ion-button-md-h:hover   .button-native.sc-ion-button-md{background:rgba(var(--ion-color-base-rgb),.04)}.button-clear.sc-ion-button-md-h:hover   .button-native.sc-ion-button-md{background:rgba(var(--ion-color-primary-rgb,56,128,255),.04)}.button-clear.ion-color.sc-ion-button-md-h:hover   .button-native.sc-ion-button-md{background:rgba(var(--ion-color-base-rgb),.04)}}"}static get styleMode(){return"md"}}class s{constructor(){this.type="bounded"}async addRipple(t,e){return new Promise(n=>{this.queue.read(()=>{const o=this.el.getBoundingClientRect(),i=o.width,s=o.height,a=Math.sqrt(i*i+s*s),c=Math.max(s,i),u=this.unbounded?c:a+r,d=Math.floor(c*l),p=u/d;let h=t-o.left,y=e-o.top;this.unbounded&&(h=.5*i,y=.5*s);const b=h-.5*d,f=y-.5*d,m=.5*i-h,g=.5*s-y;this.queue.write(()=>{const t=this.win.document.createElement("div");t.classList.add("ripple-effect");const e=t.style;e.top=f+"px",e.left=b+"px",e.width=e.height=d+"px",e.setProperty("--final-scale",`${p}`),e.setProperty("--translate-end",`${m}px, ${g}px`),(this.el.shadowRoot||this.el).appendChild(t),setTimeout(()=>{n(()=>{!function(t){t.classList.add("fade-out"),setTimeout(()=>{t.remove()},200)}(t)})},325)})})})}get unbounded(){return"unbounded"===this.type}hostData(){return{role:"presentation",class:{unbounded:this.unbounded}}}static get is(){return"ion-ripple-effect"}static get encapsulation(){return"shadow"}static get properties(){return{addRipple:{method:!0},el:{elementRef:!0},queue:{context:"queue"},type:{type:String,attr:"type"},win:{context:"window"}}}static get style(){return".sc-ion-ripple-effect-h{left:0;right:0;top:0;bottom:0;position:absolute;contain:strict;pointer-events:none}.unbounded.sc-ion-ripple-effect-h{contain:layout size style}.ripple-effect.sc-ion-ripple-effect{border-radius:50%;position:absolute;background-color:currentColor;color:inherit;contain:strict;opacity:0;-webkit-animation:rippleAnimation 225ms forwards,fadeInAnimation 75ms forwards;animation:rippleAnimation 225ms forwards,fadeInAnimation 75ms forwards;will-change:transform,opacity;pointer-events:none}.fade-out.sc-ion-ripple-effect{-webkit-transform:translate(var(--translate-end)) scale(var(--final-scale,1));transform:translate(var(--translate-end)) scale(var(--final-scale,1));-webkit-animation:fadeOutAnimation .15s forwards;animation:fadeOutAnimation .15s forwards}\@-webkit-keyframes rippleAnimation{0%{-webkit-animation-timing-function:cubic-bezier(.4,0,.2,1);animation-timing-function:cubic-bezier(.4,0,.2,1);-webkit-transform:scale(1);transform:scale(1)}to{-webkit-transform:translate(var(--translate-end)) scale(var(--final-scale,1));transform:translate(var(--translate-end)) scale(var(--final-scale,1))}}\@keyframes rippleAnimation{0%{-webkit-animation-timing-function:cubic-bezier(.4,0,.2,1);animation-timing-function:cubic-bezier(.4,0,.2,1);-webkit-transform:scale(1);transform:scale(1)}to{-webkit-transform:translate(var(--translate-end)) scale(var(--final-scale,1));transform:translate(var(--translate-end)) scale(var(--final-scale,1))}}\@-webkit-keyframes fadeInAnimation{0%{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0}to{opacity:.16}}\@keyframes fadeInAnimation{0%{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0}to{opacity:.16}}\@-webkit-keyframes fadeOutAnimation{0%{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:.16}to{opacity:0}}\@keyframes fadeOutAnimation{0%{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:.16}to{opacity:0}}"}}const r=10,l=.5;export{e as MyComponent,i as IonButton,s as IonRippleEffect};