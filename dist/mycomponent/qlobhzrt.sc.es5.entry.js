var __awaiter=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))(function(o,i){function u(e){try{l(r.next(e))}catch(e){i(e)}}function a(e){try{l(r.throw(e))}catch(e){i(e)}}function l(e){e.done?o(e.value):new n(function(t){t(e.value)}).then(u,a)}l((r=r.apply(e,t||[])).next())})},__generator=this&&this.__generator||function(e,t){var n,r,o,i,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;u;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return u.label++,{value:i[1],done:!1};case 5:u.label++,r=i[1],i=[0];continue;case 7:i=u.ops.pop(),u.trys.pop();continue;default:if(!(o=(o=u.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){u=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){u.label=i[1];break}if(6===i[0]&&u.label<o[1]){u.label=o[1],o=i;break}if(o&&u.label<o[2]){u.label=o[2],u.ops.push(i);break}o[2]&&u.ops.pop(),u.trys.pop();continue}i=t.call(e,u)}catch(e){i=[6,e],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}};mycomponent.loadBundle("qlobhzrt",["exports"],function(e){var t=window.mycomponent.h,n=function(){function e(){}return e.prototype.getText=function(){return(this.first||"")+((e=this.middle)?" "+e:"")+((t=this.last)?" "+t:"");var e,t},e.prototype.render=function(){return t("ion-button",null,"Hello, World! I'm ",this.getText())},Object.defineProperty(e,"is",{get:function(){return"my-component"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{first:{type:String,attr:"first"},last:{type:String,attr:"last"},middle:{type:String,attr:"middle"}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return"div.sc-my-component{background:red;height:300px}"},enumerable:!0,configurable:!0}),e}();function r(e){var t;return"string"==typeof e&&e.length>0?((t={"ion-color":!0})["ion-color-"+e]=!0,t):void 0}var o=/^[a-z][a-z0-9+\-.]*:/,i=function(){function e(){var e=this;this.inToolbar=!1,this.buttonType="button",this.disabled=!1,this.routerDirection="forward",this.strong=!1,this.type="button",this.onFocus=function(){e.ionFocus.emit()},this.onBlur=function(){e.ionBlur.emit()}}return e.prototype.componentWillLoad=function(){this.inToolbar=!!this.el.closest("ion-buttons")},e.prototype.onClick=function(e){if("button"===this.type)!function(e,t,n,r){__awaiter(this,void 0,void 0,function(){var i;return __generator(this,function(u){switch(u.label){case 0:return null==t||"#"===t[0]||o.test(t)?[3,2]:(i=e.document.querySelector("ion-router"))?(null!=n&&n.preventDefault(),[4,i.componentOnReady()]):[3,2];case 1:return u.sent(),[2,i.push(t,r)];case 2:return[2,!1]}})})}(this.win,this.href,e,this.routerDirection);else if((r=this.el).shadowRoot&&r.attachShadow){var t=this.el.closest("form");if(t){e.preventDefault();var n=this.win.document.createElement("button");n.type=this.type,n.style.display="none",t.appendChild(n),n.click(),n.remove()}}var r},e.prototype.hostData=function(){var e,t=this,n=t.buttonType,o=t.disabled,i=t.expand,u=t.shape,a=t.size,l=t.strong,c=this.fill;return void 0===c&&(c=this.inToolbar?"clear":"solid"),{"aria-disabled":o?"true":null,class:Object.assign({},r(t.color),(e={},e[n]=!0,e[n+"-"+i]=void 0!==i,e[n+"-"+a]=void 0!==a,e[n+"-"+u]=void 0!==u,e[n+"-"+c]=!0,e[n+"-strong"]=l,e["button-disabled"]=o,e["ion-activatable"]=!0,e["ion-focusable"]=!0,e))}},e.prototype.render=function(){var e=void 0===this.href?"button":"a";return t(e,Object.assign({},"button"===e?{type:this.type}:{href:this.href},{class:"button-native",disabled:this.disabled,onFocus:this.onFocus,onBlur:this.onBlur}),t("span",{class:"button-inner"},t("slot",{name:"icon-only"}),t("slot",{name:"start"}),t("slot",null),t("slot",{name:"end"})),"md"===this.mode&&t("ion-ripple-effect",{type:this.inToolbar?"unbounded":"bounded"}))},Object.defineProperty(e,"is",{get:function(){return"ion-button"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{buttonType:{type:String,attr:"button-type",mutable:!0},color:{type:String,attr:"color"},disabled:{type:Boolean,attr:"disabled",reflectToAttr:!0},el:{elementRef:!0},expand:{type:String,attr:"expand",reflectToAttr:!0},fill:{type:String,attr:"fill",reflectToAttr:!0,mutable:!0},href:{type:String,attr:"href"},mode:{type:String,attr:"mode"},routerDirection:{type:String,attr:"router-direction"},shape:{type:String,attr:"shape",reflectToAttr:!0},size:{type:String,attr:"size",reflectToAttr:!0},strong:{type:Boolean,attr:"strong"},type:{type:String,attr:"type"},win:{context:"window"}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"events",{get:function(){return[{name:"ionFocus",method:"ionFocus",bubbles:!0,cancelable:!0,composed:!0},{name:"ionBlur",method:"ionBlur",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(e,"listeners",{get:function(){return[{name:"click",method:"onClick"}]},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return".sc-ion-button-md-h{--overflow:hidden;--ripple-color:currentColor;--border-width:initial;--border-color:initial;--border-style:initial;--box-shadow:none;display:inline-block;width:auto;color:var(--color);font-family:var(--ion-font-family,inherit);text-align:center;text-decoration:none;text-overflow:ellipsis;white-space:nowrap;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;vertical-align:top;vertical-align:-webkit-baseline-middle;pointer-events:auto;-webkit-font-kerning:none;font-kerning:none}.button-disabled.sc-ion-button-md-h{pointer-events:none}.button-disabled.sc-ion-button-md-h   .button-native.sc-ion-button-md{cursor:default;opacity:.5;pointer-events:none}.button-solid.sc-ion-button-md-h{--background:var(--ion-color-primary,#3880ff);--background-focused:var(--ion-color-primary-shade,#3171e0);--color:var(--ion-color-primary-contrast,#fff);--color-activated:var(--ion-color-primary-contrast,#fff);--color-focused:var(--ion-color-primary-contrast,#fff)}.button-solid.ion-color.sc-ion-button-md-h   .button-native.sc-ion-button-md{background:var(--ion-color-base);color:var(--ion-color-contrast)}.button-solid.ion-color.ion-focused.sc-ion-button-md-h   .button-native.sc-ion-button-md{background:var(--ion-color-shade)}.button-outline.sc-ion-button-md-h{--border-color:var(--ion-color-primary,#3880ff);--background:transparent;--color:var(--ion-color-primary,#3880ff);--color-focused:var(--ion-color-primary,#3880ff)}.button-outline.ion-color.sc-ion-button-md-h   .button-native.sc-ion-button-md{border-color:var(--ion-color-base);background:transparent;color:var(--ion-color-base)}.button-outline.ion-focused.ion-color.sc-ion-button-md-h   .button-native.sc-ion-button-md{background:rgba(var(--ion-color-base-rgb),.1);color:var(--ion-color-base)}.button-clear.sc-ion-button-md-h{--border-width:0;--background:transparent;--color:var(--ion-color-primary,#3880ff)}.button-clear.ion-color.sc-ion-button-md-h   .button-native.sc-ion-button-md{background:transparent;color:var(--ion-color-base)}.button-clear.ion-focused.ion-color.sc-ion-button-md-h   .button-native.sc-ion-button-md{background:rgba(var(--ion-color-base-rgb),.1);color:var(--ion-color-base)}.button-clear.activated.ion-color.sc-ion-button-md-h   .button-native.sc-ion-button-md{background:transparent}.button-block.sc-ion-button-md-h{display:block}.button-block.sc-ion-button-md-h   .button-native.sc-ion-button-md{margin-left:0;margin-right:0;display:block;width:100%;clear:both;contain:content}.button-block.sc-ion-button-md-h   .button-native.sc-ion-button-md:after{clear:both}.button-full.sc-ion-button-md-h{display:block}.button-full.sc-ion-button-md-h   .button-native.sc-ion-button-md{margin-left:0;margin-right:0;display:block;width:100%;contain:content}.button-full.sc-ion-button-md-h:not(.button-round)   .button-native.sc-ion-button-md{border-radius:0;border-right-width:0;border-left-width:0}.button-native.sc-ion-button-md{border-radius:var(--border-radius);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;display:block;position:relative;width:100%;height:100%;-webkit-transition:var(--transition);transition:var(--transition);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);outline:none;background:var(--background);line-height:1;-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);contain:layout style;cursor:pointer;opacity:var(--opacity);overflow:var(--overflow);z-index:0;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-appearance:none;-moz-appearance:none;appearance:none}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.button-native.sc-ion-button-md{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.button-native.sc-ion-button-md::-moz-focus-inner{border:0}.ion-focused.sc-ion-button-md-h   .button-native.sc-ion-button-md{background:var(--background-focused);color:var(--color-focused)}.activated.sc-ion-button-md-h   .button-native.sc-ion-button-md{background:var(--background-activated);color:var(--color-activated)}.button-inner.sc-ion-button-md{display:-ms-flexbox;display:flex;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%}.sc-ion-button-md-s > ion-icon{font-size:1.4em;pointer-events:none}.sc-ion-button-md-s > ion-icon[slot=start]{margin-left:-.3em;margin-right:.3em;margin-top:0;margin-bottom:0}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.sc-ion-button-md-s > ion-icon[slot=start]{margin-left:unset;margin-right:unset;-webkit-margin-start:-.3em;margin-inline-start:-.3em;-webkit-margin-end:.3em;margin-inline-end:.3em}}.sc-ion-button-md-s > ion-icon[slot=end]{margin-left:.3em;margin-right:-.2em;margin-top:0;margin-bottom:0}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.sc-ion-button-md-s > ion-icon[slot=end]{margin-left:unset;margin-right:unset;-webkit-margin-start:.3em;margin-inline-start:.3em;-webkit-margin-end:-.2em;margin-inline-end:-.2em}}.sc-ion-button-md-s > ion-icon[slot=icon-only]{font-size:1.8em}ion-ripple-effect.sc-ion-button-md{color:var(--ripple-color)}.sc-ion-button-md-h{--border-radius:4px;--padding-top:0;--padding-bottom:0;--padding-start:1.1em;--padding-end:1.1em;--transition:box-shadow 280ms cubic-bezier(.4,0,.2,1),background-color 15ms linear,color 15ms linear;margin-left:2px;margin-right:2px;margin-top:4px;margin-bottom:4px;height:36px;font-size:14px;font-weight:500;letter-spacing:.06em;text-transform:uppercase}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.sc-ion-button-md-h{margin-left:unset;margin-right:unset;-webkit-margin-start:2px;margin-inline-start:2px;-webkit-margin-end:2px;margin-inline-end:2px}}.button-solid.sc-ion-button-md-h{--background-activated:var(--background);--box-shadow:0 3px 1px -2px rgba(0,0,0,0.2),0 2px 2px 0 rgba(0,0,0,0.14),0 1px 5px 0 rgba(0,0,0,0.12)}.button-solid.activated.sc-ion-button-md-h{--box-shadow:0 5px 5px -3px rgba(0,0,0,0.2),0 8px 10px 1px rgba(0,0,0,0.14),0 3px 14px 2px rgba(0,0,0,0.12)}.button-outline.sc-ion-button-md-h{--border-width:2px;--border-style:solid;--box-shadow:none;--background-activated:transparent;--background-focused:rgba(var(--ion-color-primary-rgb,56,128,255),0.1);--color-activated:var(--ion-color-primary,#3880ff)}.button-outline.activated.ion-color.sc-ion-button-md-h   .button-native.sc-ion-button-md{background:transparent}.button-clear.sc-ion-button-md-h{--opacity:1;--background-activated:transparent;--background-focused:rgba(var(--ion-color-primary-rgb,56,128,255),0.1);--color-activated:var(--ion-color-primary,#3880ff);--color-focused:var(--ion-color-primary,#3880ff)}.button-round.sc-ion-button-md-h{--border-radius:64px;--padding-top:0;--padding-start:26px;--padding-end:26px;--padding-bottom:0}.button-large.sc-ion-button-md-h{--padding-top:0;--padding-start:1em;--padding-end:1em;--padding-bottom:0;height:2.8em;font-size:20px}.button-small.sc-ion-button-md-h{--padding-top:0;--padding-start:0.9em;--padding-end:0.9em;--padding-bottom:0;height:2.1em;font-size:13px}.button-strong.sc-ion-button-md-h{font-weight:700}.sc-ion-button-md-s > ion-icon[slot=icon-only]{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0}\@media (any-hover:hover){.button-outline.sc-ion-button-md-h:hover   .button-native.sc-ion-button-md{background:rgba(var(--ion-color-primary-rgb,56,128,255),.04)}.button-outline.ion-color.sc-ion-button-md-h:hover   .button-native.sc-ion-button-md{background:rgba(var(--ion-color-base-rgb),.04)}.button-clear.sc-ion-button-md-h:hover   .button-native.sc-ion-button-md{background:rgba(var(--ion-color-primary-rgb,56,128,255),.04)}.button-clear.ion-color.sc-ion-button-md-h:hover   .button-native.sc-ion-button-md{background:rgba(var(--ion-color-base-rgb),.04)}}"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"styleMode",{get:function(){return"md"},enumerable:!0,configurable:!0}),e}(),u=function(){function e(){this.type="bounded"}return e.prototype.addRipple=function(e,t){return __awaiter(this,void 0,void 0,function(){var n=this;return __generator(this,function(r){return[2,new Promise(function(r){n.queue.read(function(){var o=n.el.getBoundingClientRect(),i=o.width,u=o.height,c=Math.sqrt(i*i+u*u),s=Math.max(u,i),p=n.unbounded?s:c+a,f=Math.floor(s*l),d=p/f,b=e-o.left,h=t-o.top;n.unbounded&&(b=.5*i,h=.5*u);var y=b-.5*f,g=h-.5*f,m=.5*i-b,v=.5*u-h;n.queue.write(function(){var e=n.win.document.createElement("div");e.classList.add("ripple-effect");var t=e.style;t.top=g+"px",t.left=y+"px",t.width=t.height=f+"px",t.setProperty("--final-scale",""+d),t.setProperty("--translate-end",m+"px, "+v+"px"),(n.el.shadowRoot||n.el).appendChild(e),setTimeout(function(){r(function(){var t;(t=e).classList.add("fade-out"),setTimeout(function(){t.remove()},200)})},325)})})})]})})},Object.defineProperty(e.prototype,"unbounded",{get:function(){return"unbounded"===this.type},enumerable:!0,configurable:!0}),e.prototype.hostData=function(){return{role:"presentation",class:{unbounded:this.unbounded}}},Object.defineProperty(e,"is",{get:function(){return"ion-ripple-effect"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{addRipple:{method:!0},el:{elementRef:!0},queue:{context:"queue"},type:{type:String,attr:"type"},win:{context:"window"}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return".sc-ion-ripple-effect-h{left:0;right:0;top:0;bottom:0;position:absolute;contain:strict;pointer-events:none}.unbounded.sc-ion-ripple-effect-h{contain:layout size style}.ripple-effect.sc-ion-ripple-effect{border-radius:50%;position:absolute;background-color:currentColor;color:inherit;contain:strict;opacity:0;-webkit-animation:rippleAnimation 225ms forwards,fadeInAnimation 75ms forwards;animation:rippleAnimation 225ms forwards,fadeInAnimation 75ms forwards;will-change:transform,opacity;pointer-events:none}.fade-out.sc-ion-ripple-effect{-webkit-transform:translate(var(--translate-end)) scale(var(--final-scale,1));transform:translate(var(--translate-end)) scale(var(--final-scale,1));-webkit-animation:fadeOutAnimation .15s forwards;animation:fadeOutAnimation .15s forwards}\@-webkit-keyframes rippleAnimation{0%{-webkit-animation-timing-function:cubic-bezier(.4,0,.2,1);animation-timing-function:cubic-bezier(.4,0,.2,1);-webkit-transform:scale(1);transform:scale(1)}to{-webkit-transform:translate(var(--translate-end)) scale(var(--final-scale,1));transform:translate(var(--translate-end)) scale(var(--final-scale,1))}}\@keyframes rippleAnimation{0%{-webkit-animation-timing-function:cubic-bezier(.4,0,.2,1);animation-timing-function:cubic-bezier(.4,0,.2,1);-webkit-transform:scale(1);transform:scale(1)}to{-webkit-transform:translate(var(--translate-end)) scale(var(--final-scale,1));transform:translate(var(--translate-end)) scale(var(--final-scale,1))}}\@-webkit-keyframes fadeInAnimation{0%{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0}to{opacity:.16}}\@keyframes fadeInAnimation{0%{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0}to{opacity:.16}}\@-webkit-keyframes fadeOutAnimation{0%{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:.16}to{opacity:0}}\@keyframes fadeOutAnimation{0%{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:.16}to{opacity:0}}"},enumerable:!0,configurable:!0}),e}(),a=10,l=.5;e.MyComponent=n,e.IonButton=i,e.IonRippleEffect=u,Object.defineProperty(e,"__esModule",{value:!0})});