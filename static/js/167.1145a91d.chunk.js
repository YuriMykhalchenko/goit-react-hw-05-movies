"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[167],{2167:function(e,n,t){t.r(n),t.d(n,{default:function(){return w}});var r=t(9439),o=t(2791),i=t(1087),s=t(7596),a=(t(5462),t(5275));var c,u,l,p,d=t.p+"static/media/loupe.414f70f40f1ef438344edbbee0d9ec7e.svg",f=t(168),h=t(7402),S=h.Z.section(c||(c=(0,f.Z)(["\n  top: 0;\n  left: 0;\n  position: sticky;\n  z-index: 2;\n  display: flex;\n  align-items: center;\n  width: 100vw;\n  min-height: ","px;\n  padding: ","px ","px;\n  padding-left: ","px;\n  background-color: ",";\n  box-shadow: ",";\n"])),a.rS.sizes[0],a.rS.space[2],a.rS.space[5],a.rS.space[7],a.rS.colors.primeBg,a.rS.shadows.prime),m=h.Z.form(u||(u=(0,f.Z)(["\n  display: flex;\n  width: 100%;\n  max-width: ","px;\n  background-color: ",";\n  border-radius: ","px;\n  overflow: hidden;\n"])),a.rS.sizes[7],a.rS.colors.prime,a.rS.radii[1]),x=h.Z.button(l||(l=(0,f.Z)(["\n  display: inline-block;\n  width: ","px;\n  height: ","px;\n  border: ",";\n  background-size: 50%;\n  background-repeat: no-repeat;\n  background-position: center;\n  opacity: ","px;\n  transition: ",";\n  cursor: pointer;\n  outline: none;\n  &:hover {\n    opacity: ","px;\n  }\n"])),a.rS.sizes[0],a.rS.sizes[0],a.rS.borders.secondary,a.rS.opacities[0],a.rS.transitions.opacity,a.rS.opacities[1]),b=h.Z.input(p||(p=(0,f.Z)(["\n  display: inline-block;\n  width: 100%;\n  font: inherit;\n  font-size: ","px;\n  border: none;\n  outline: none;\n  padding: ","px;\n  &::placeholder {\n    font-style: inherit;\n    font-size: ","px;\n  }\n"])),a.rS.fontSizes[4],a.rS.space[1],a.rS.fontSizes[3]),g=t(184);function v(e){var n=e.onSubmit,t=(0,o.useState)(""),i=(0,r.Z)(t,2),a=i[0],c=i[1],u=function(){return c("")};return(0,g.jsx)(S,{children:(0,g.jsxs)(m,{onSubmit:function(e){if(e.preventDefault(),""===a.trim()||a.length<2)return s.Am.warn("Searching must be no empty and more than 1 letter"),void u();n(a),u()},children:[(0,g.jsx)(b,{type:"text",autocomplete:"off",autoFocus:!0,placeholder:"Search movies...",value:a,onChange:function(e){c(e.currentTarget.value.toLowerCase())}}),(0,g.jsx)(x,{type:"submit",style:{backgroundImage:"url(".concat(d,")")}})]})})}var y=(0,o.lazy)((function(){return t.e(647).then(t.bind(t,8647))})),w=function(){var e,n=(0,o.useState)(null),t=(0,r.Z)(n,2),c=t[0],u=t[1],l=(0,o.useState)(JSON.parse(localStorage.getItem("movies"))||null),p=(0,r.Z)(l,2),d=p[0],f=p[1],h=(0,i.lr)(),S=(0,r.Z)(h,2),m=S[0],x=S[1],b=null!==(e=m.get("query"))&&void 0!==e?e:"";(0,o.useEffect)((function(){b&&a.bl.fetchMovieSearch(b).then((function(e){f(e),localStorage.setItem("movies",JSON.stringify(e))})).catch((function(){return s.Am.error("Sorry, there are not details of this movie")}))}),[b]);return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(v,{value:b,onSubmit:function(e){e!==c?(u(e),x({query:e})):s.Am.warn("The new search must be different from the current search")}}),(0,g.jsx)(o.Suspense,{fallback:(0,g.jsx)(a.aN,{}),children:d&&(0,g.jsx)(y,{movies:d})}),(0,g.jsx)(s.Ix,{autoClose:3e3})]})}}}]);
//# sourceMappingURL=167.1145a91d.chunk.js.map