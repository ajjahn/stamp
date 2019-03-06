import*as tslib_1 from"../polyfills/tslib.js";import{h}from"../mycomponent.core.js";function format(e,t,n){return(e||"")+(t?" "+t:"")+(n?" "+n:"")}var MyComponent=function(){function e(){}return e.prototype.getText=function(){return format(this.first,this.middle,this.last)},e.prototype.render=function(){return h("ion-button",null,"Hello, World! I'm ",this.getText())},Object.defineProperty(e,"is",{get:function(){return"my-component"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{first:{type:String,attr:"first"},last:{type:String,attr:"last"},middle:{type:String,attr:"middle"}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return"div.sc-my-component{background:red;height:300px}"},enumerable:!0,configurable:!0}),e}();function hasShadowDom(e){return!!e.shadowRoot&&!!e.attachShadow}function createColorClasses(e){var t;return"string"==typeof e&&e.length>0?((t={"ion-color":!0})["ion-color-"+e]=!0,t):void 0}var SCHEME=/^[a-z][a-z0-9+\-.]*:/;function openURL(e,t,n,o){return tslib_1.__awaiter(this,void 0,void 0,function(){var r;return tslib_1.__generator(this,function(i){switch(i.label){case 0:return null==t||"#"===t[0]||SCHEME.test(t)?[3,2]:(r=e.document.querySelector("ion-router"))?(null!=n&&n.preventDefault(),[4,r.componentOnReady()]):[3,2];case 1:return i.sent(),[2,r.push(t,o)];case 2:return[2,!1]}})})}var Button=function(){function e(){var e=this;this.inToolbar=!1,this.buttonType="button",this.disabled=!1,this.routerDirection="forward",this.strong=!1,this.type="button",this.onFocus=function(){e.ionFocus.emit()},this.onBlur=function(){e.ionBlur.emit()}}return e.prototype.componentWillLoad=function(){this.inToolbar=!!this.el.closest("ion-buttons")},e.prototype.onClick=function(e){if("button"===this.type)openURL(this.win,this.href,e,this.routerDirection);else if(hasShadowDom(this.el)){var t=this.el.closest("form");if(t){e.preventDefault();var n=this.win.document.createElement("button");n.type=this.type,n.style.display="none",t.appendChild(n),n.click(),n.remove()}}},e.prototype.hostData=function(){var e,t=this,n=t.buttonType,o=t.disabled,r=t.expand,i=t.shape,u=t.size,l=t.strong,a=this.fill;return void 0===a&&(a=this.inToolbar?"clear":"solid"),{"aria-disabled":o?"true":null,class:Object.assign({},createColorClasses(t.color),(e={},e[n]=!0,e[n+"-"+r]=void 0!==r,e[n+"-"+u]=void 0!==u,e[n+"-"+i]=void 0!==i,e[n+"-"+a]=!0,e[n+"-strong"]=l,e["button-disabled"]=o,e["ion-activatable"]=!0,e["ion-focusable"]=!0,e))}},e.prototype.render=function(){var e=void 0===this.href?"button":"a";return h(e,Object.assign({},"button"===e?{type:this.type}:{href:this.href},{class:"button-native",disabled:this.disabled,onFocus:this.onFocus,onBlur:this.onBlur}),h("span",{class:"button-inner"},h("slot",{name:"icon-only"}),h("slot",{name:"start"}),h("slot",null),h("slot",{name:"end"})),"md"===this.mode&&h("ion-ripple-effect",{type:this.inToolbar?"unbounded":"bounded"}))},Object.defineProperty(e,"is",{get:function(){return"ion-button"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{buttonType:{type:String,attr:"button-type",mutable:!0},color:{type:String,attr:"color"},disabled:{type:Boolean,attr:"disabled",reflectToAttr:!0},el:{elementRef:!0},expand:{type:String,attr:"expand",reflectToAttr:!0},fill:{type:String,attr:"fill",reflectToAttr:!0,mutable:!0},href:{type:String,attr:"href"},mode:{type:String,attr:"mode"},routerDirection:{type:String,attr:"router-direction"},shape:{type:String,attr:"shape",reflectToAttr:!0},size:{type:String,attr:"size",reflectToAttr:!0},strong:{type:Boolean,attr:"strong"},type:{type:String,attr:"type"},win:{context:"window"}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"events",{get:function(){return[{name:"ionFocus",method:"ionFocus",bubbles:!0,cancelable:!0,composed:!0},{name:"ionBlur",method:"ionBlur",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(e,"listeners",{get:function(){return[{name:"click",method:"onClick"}]},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return".sc-ion-button-md-h{--overflow:hidden;--ripple-color:currentColor;--border-width:initial;--border-color:initial;--border-style:initial;--box-shadow:none;display:inline-block;width:auto;color:var(--color);font-family:var(--ion-font-family,inherit);text-align:center;text-decoration:none;text-overflow:ellipsis;white-space:nowrap;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;vertical-align:top;vertical-align:-webkit-baseline-middle;pointer-events:auto;-webkit-font-kerning:none;font-kerning:none}.button-disabled.sc-ion-button-md-h{pointer-events:none}.button-disabled.sc-ion-button-md-h   .button-native.sc-ion-button-md{cursor:default;opacity:.5;pointer-events:none}.button-solid.sc-ion-button-md-h{--background:var(--ion-color-primary,#3880ff);--background-focused:var(--ion-color-primary-shade,#3171e0);--color:var(--ion-color-primary-contrast,#fff);--color-activated:var(--ion-color-primary-contrast,#fff);--color-focused:var(--ion-color-primary-contrast,#fff)}.button-solid.ion-color.sc-ion-button-md-h   .button-native.sc-ion-button-md{background:var(--ion-color-base);color:var(--ion-color-contrast)}.button-solid.ion-color.ion-focused.sc-ion-button-md-h   .button-native.sc-ion-button-md{background:var(--ion-color-shade)}.button-outline.sc-ion-button-md-h{--border-color:var(--ion-color-primary,#3880ff);--background:transparent;--color:var(--ion-color-primary,#3880ff);--color-focused:var(--ion-color-primary,#3880ff)}.button-outline.ion-color.sc-ion-button-md-h   .button-native.sc-ion-button-md{border-color:var(--ion-color-base);background:transparent;color:var(--ion-color-base)}.button-outline.ion-focused.ion-color.sc-ion-button-md-h   .button-native.sc-ion-button-md{background:rgba(var(--ion-color-base-rgb),.1);color:var(--ion-color-base)}.button-clear.sc-ion-button-md-h{--border-width:0;--background:transparent;--color:var(--ion-color-primary,#3880ff)}.button-clear.ion-color.sc-ion-button-md-h   .button-native.sc-ion-button-md{background:transparent;color:var(--ion-color-base)}.button-clear.ion-focused.ion-color.sc-ion-button-md-h   .button-native.sc-ion-button-md{background:rgba(var(--ion-color-base-rgb),.1);color:var(--ion-color-base)}.button-clear.activated.ion-color.sc-ion-button-md-h   .button-native.sc-ion-button-md{background:transparent}.button-block.sc-ion-button-md-h{display:block}.button-block.sc-ion-button-md-h   .button-native.sc-ion-button-md{margin-left:0;margin-right:0;display:block;width:100%;clear:both;contain:content}.button-block.sc-ion-button-md-h   .button-native.sc-ion-button-md:after{clear:both}.button-full.sc-ion-button-md-h{display:block}.button-full.sc-ion-button-md-h   .button-native.sc-ion-button-md{margin-left:0;margin-right:0;display:block;width:100%;contain:content}.button-full.sc-ion-button-md-h:not(.button-round)   .button-native.sc-ion-button-md{border-radius:0;border-right-width:0;border-left-width:0}.button-native.sc-ion-button-md{border-radius:var(--border-radius);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;display:block;position:relative;width:100%;height:100%;-webkit-transition:var(--transition);transition:var(--transition);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);outline:none;background:var(--background);line-height:1;-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);contain:layout style;cursor:pointer;opacity:var(--opacity);overflow:var(--overflow);z-index:0;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-appearance:none;-moz-appearance:none;appearance:none}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.button-native.sc-ion-button-md{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.button-native.sc-ion-button-md::-moz-focus-inner{border:0}.ion-focused.sc-ion-button-md-h   .button-native.sc-ion-button-md{background:var(--background-focused);color:var(--color-focused)}.activated.sc-ion-button-md-h   .button-native.sc-ion-button-md{background:var(--background-activated);color:var(--color-activated)}.button-inner.sc-ion-button-md{display:-ms-flexbox;display:flex;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%}.sc-ion-button-md-s > ion-icon{font-size:1.4em;pointer-events:none}.sc-ion-button-md-s > ion-icon[slot=start]{margin-left:-.3em;margin-right:.3em;margin-top:0;margin-bottom:0}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.sc-ion-button-md-s > ion-icon[slot=start]{margin-left:unset;margin-right:unset;-webkit-margin-start:-.3em;margin-inline-start:-.3em;-webkit-margin-end:.3em;margin-inline-end:.3em}}.sc-ion-button-md-s > ion-icon[slot=end]{margin-left:.3em;margin-right:-.2em;margin-top:0;margin-bottom:0}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.sc-ion-button-md-s > ion-icon[slot=end]{margin-left:unset;margin-right:unset;-webkit-margin-start:.3em;margin-inline-start:.3em;-webkit-margin-end:-.2em;margin-inline-end:-.2em}}.sc-ion-button-md-s > ion-icon[slot=icon-only]{font-size:1.8em}ion-ripple-effect.sc-ion-button-md{color:var(--ripple-color)}.sc-ion-button-md-h{--border-radius:4px;--padding-top:0;--padding-bottom:0;--padding-start:1.1em;--padding-end:1.1em;--transition:box-shadow 280ms cubic-bezier(.4,0,.2,1),background-color 15ms linear,color 15ms linear;margin-left:2px;margin-right:2px;margin-top:4px;margin-bottom:4px;height:36px;font-size:14px;font-weight:500;letter-spacing:.06em;text-transform:uppercase}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.sc-ion-button-md-h{margin-left:unset;margin-right:unset;-webkit-margin-start:2px;margin-inline-start:2px;-webkit-margin-end:2px;margin-inline-end:2px}}.button-solid.sc-ion-button-md-h{--background-activated:var(--background);--box-shadow:0 3px 1px -2px rgba(0,0,0,0.2),0 2px 2px 0 rgba(0,0,0,0.14),0 1px 5px 0 rgba(0,0,0,0.12)}.button-solid.activated.sc-ion-button-md-h{--box-shadow:0 5px 5px -3px rgba(0,0,0,0.2),0 8px 10px 1px rgba(0,0,0,0.14),0 3px 14px 2px rgba(0,0,0,0.12)}.button-outline.sc-ion-button-md-h{--border-width:2px;--border-style:solid;--box-shadow:none;--background-activated:transparent;--background-focused:rgba(var(--ion-color-primary-rgb,56,128,255),0.1);--color-activated:var(--ion-color-primary,#3880ff)}.button-outline.activated.ion-color.sc-ion-button-md-h   .button-native.sc-ion-button-md{background:transparent}.button-clear.sc-ion-button-md-h{--opacity:1;--background-activated:transparent;--background-focused:rgba(var(--ion-color-primary-rgb,56,128,255),0.1);--color-activated:var(--ion-color-primary,#3880ff);--color-focused:var(--ion-color-primary,#3880ff)}.button-round.sc-ion-button-md-h{--border-radius:64px;--padding-top:0;--padding-start:26px;--padding-end:26px;--padding-bottom:0}.button-large.sc-ion-button-md-h{--padding-top:0;--padding-start:1em;--padding-end:1em;--padding-bottom:0;height:2.8em;font-size:20px}.button-small.sc-ion-button-md-h{--padding-top:0;--padding-start:0.9em;--padding-end:0.9em;--padding-bottom:0;height:2.1em;font-size:13px}.button-strong.sc-ion-button-md-h{font-weight:700}.sc-ion-button-md-s > ion-icon[slot=icon-only]{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0}\@media (any-hover:hover){.button-outline.sc-ion-button-md-h:hover   .button-native.sc-ion-button-md{background:rgba(var(--ion-color-primary-rgb,56,128,255),.04)}.button-outline.ion-color.sc-ion-button-md-h:hover   .button-native.sc-ion-button-md{background:rgba(var(--ion-color-base-rgb),.04)}.button-clear.sc-ion-button-md-h:hover   .button-native.sc-ion-button-md{background:rgba(var(--ion-color-primary-rgb,56,128,255),.04)}.button-clear.ion-color.sc-ion-button-md-h:hover   .button-native.sc-ion-button-md{background:rgba(var(--ion-color-base-rgb),.04)}}"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"styleMode",{get:function(){return"md"},enumerable:!0,configurable:!0}),e}(),RippleEffect=function(){function e(){this.type="bounded"}return e.prototype.addRipple=function(e,t){return tslib_1.__awaiter(this,void 0,void 0,function(){var n=this;return tslib_1.__generator(this,function(o){return[2,new Promise(function(o){n.queue.read(function(){var r=n.el.getBoundingClientRect(),i=r.width,u=r.height,l=Math.sqrt(i*i+u*u),a=Math.max(u,i),s=n.unbounded?a:l+PADDING,c=Math.floor(a*INITIAL_ORIGIN_SCALE),p=s/c,f=e-r.left,d=t-r.top;n.unbounded&&(f=.5*i,d=.5*u);var b=f-.5*c,h=d-.5*c,y=.5*i-f,m=.5*u-d;n.queue.write(function(){var e=n.win.document.createElement("div");e.classList.add("ripple-effect");var t=e.style;t.top=h+"px",t.left=b+"px",t.width=t.height=c+"px",t.setProperty("--final-scale",""+p),t.setProperty("--translate-end",y+"px, "+m+"px"),(n.el.shadowRoot||n.el).appendChild(e),setTimeout(function(){o(function(){removeRipple(e)})},325)})})})]})})},Object.defineProperty(e.prototype,"unbounded",{get:function(){return"unbounded"===this.type},enumerable:!0,configurable:!0}),e.prototype.hostData=function(){return{role:"presentation",class:{unbounded:this.unbounded}}},Object.defineProperty(e,"is",{get:function(){return"ion-ripple-effect"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{addRipple:{method:!0},el:{elementRef:!0},queue:{context:"queue"},type:{type:String,attr:"type"},win:{context:"window"}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return".sc-ion-ripple-effect-h{left:0;right:0;top:0;bottom:0;position:absolute;contain:strict;pointer-events:none}.unbounded.sc-ion-ripple-effect-h{contain:layout size style}.ripple-effect.sc-ion-ripple-effect{border-radius:50%;position:absolute;background-color:currentColor;color:inherit;contain:strict;opacity:0;-webkit-animation:rippleAnimation 225ms forwards,fadeInAnimation 75ms forwards;animation:rippleAnimation 225ms forwards,fadeInAnimation 75ms forwards;will-change:transform,opacity;pointer-events:none}.fade-out.sc-ion-ripple-effect{-webkit-transform:translate(var(--translate-end)) scale(var(--final-scale,1));transform:translate(var(--translate-end)) scale(var(--final-scale,1));-webkit-animation:fadeOutAnimation .15s forwards;animation:fadeOutAnimation .15s forwards}\@-webkit-keyframes rippleAnimation{0%{-webkit-animation-timing-function:cubic-bezier(.4,0,.2,1);animation-timing-function:cubic-bezier(.4,0,.2,1);-webkit-transform:scale(1);transform:scale(1)}to{-webkit-transform:translate(var(--translate-end)) scale(var(--final-scale,1));transform:translate(var(--translate-end)) scale(var(--final-scale,1))}}\@keyframes rippleAnimation{0%{-webkit-animation-timing-function:cubic-bezier(.4,0,.2,1);animation-timing-function:cubic-bezier(.4,0,.2,1);-webkit-transform:scale(1);transform:scale(1)}to{-webkit-transform:translate(var(--translate-end)) scale(var(--final-scale,1));transform:translate(var(--translate-end)) scale(var(--final-scale,1))}}\@-webkit-keyframes fadeInAnimation{0%{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0}to{opacity:.16}}\@keyframes fadeInAnimation{0%{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0}to{opacity:.16}}\@-webkit-keyframes fadeOutAnimation{0%{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:.16}to{opacity:0}}\@keyframes fadeOutAnimation{0%{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:.16}to{opacity:0}}"},enumerable:!0,configurable:!0}),e}();function removeRipple(e){e.classList.add("fade-out"),setTimeout(function(){e.remove()},200)}var PADDING=10,INITIAL_ORIGIN_SCALE=.5;export{MyComponent,Button as IonButton,RippleEffect as IonRippleEffect};