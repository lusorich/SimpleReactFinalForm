(this.webpackJsonpamigo=this.webpackJsonpamigo||[]).push([[0],[,,,,,,,,,,,,,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){"use strict";c.r(t);var r=c(0),s=c(1),a=c.n(s),n=c(6),i=c.n(n),l=c(2),o=c(3),d=c(7),m=function(e){if(!e)return"\u041f\u043e\u043b\u0435 \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e \u043a \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044e"},j=function(e){if(!/[+]{1}[0-9]\s\([0-9]{3}\)\s[0-9]{2}\s[0-9]{2}\s[0-9]{3}/.test(e))return"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0446\u0438\u0444\u0440"},u=function(e){if(!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)/.test(e))return"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u044b\u0439 email"},f=function(e){if(18!==e.length)return"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 11 \u0446\u0438\u0444\u0440"},b=function(e){if(!/^(?![ .]+$)[a-zA-Z\u0430-\u044f\u0410-\u042f .]*$/.test(e))return"\u041d\u0435\u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u043e\u0435 \u0438\u043c\u044f"},h=c(5),_=function(e){var t=e.optionsList,c=Object(s.useState)(""),a=Object(h.a)(c,2),n=a[0],i=a[1],l=Object(s.useState)(!1),o=Object(h.a)(l,2),d=o[0],m=o[1];Object(s.useEffect)((function(){return document.addEventListener("mousedown",j),document.removeEventListener("mousedown",j)}));var j=function(e){e.target.classList.contains("custom-select-option")||e.target.classList.contains("selected-text")||m(!1)},u=function(e){i(e.target.getAttribute("data-name")),m(!1)};return Object(r.jsxs)("div",{className:"custom-select",children:[Object(r.jsx)("div",{className:d?"custom-select__title-wrapper active":"custom-select__title-wrapper",onClick:function(){return m(!d)},tabIndex:"0",children:n?Object(r.jsx)("span",{className:"custom-select__title custom-select__title--black",children:n}):Object(r.jsx)("span",{className:"custom-select__title custom-select__title--grey",children:"\u042f\u0437\u044b\u043a"})}),d&&Object(r.jsx)("ul",{className:"custom-select__list",children:t.map((function(e){return Object(r.jsx)("li",{className:"custom-select__item","data-name":e.name,onClick:u,children:e.name},e.id)}))})]})},O=function(){var e=function(){for(var e=arguments.length,t=new Array(e),c=0;c<e;c++)t[c]=arguments[c];return function(e){return t.reduce((function(t,c){return t||c(e)}),void 0)}},t=[{id:1,name:"\u0420\u0443\u0441\u0441\u043a\u0438\u0439"},{id:2,name:"\u0410\u043d\u0433\u043b\u0438\u0439\u0441\u043a\u0438\u0439"},{id:3,name:"\u041a\u0438\u0442\u0430\u0439\u0441\u043a\u0438\u0439"},{id:4,name:"\u0418\u0441\u043f\u0430\u043d\u0441\u043a\u0438\u0439"}];return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)("div",{className:"wrapper",children:[Object(r.jsxs)("div",{className:"form-header",children:[Object(r.jsx)("h1",{className:"form-header__title",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"}),Object(r.jsxs)("p",{className:"form-header__desc",children:["\u0423\u0436\u0435 \u0435\u0441\u0442\u044c \u0430\u043a\u043a\u0430\u0443\u043d\u0442?",Object(r.jsx)("a",{className:"form-header__login",href:"#",children:"\u0412\u043e\u0439\u0442\u0438"})]})]}),Object(r.jsx)(o.b,{onSubmit:function(e){console.log("Submit success")},render:function(c){var s=c.handleSubmit,a=(c.values,c.errors);return Object(r.jsxs)("form",{className:"form",onSubmit:s,children:[Object(r.jsx)("div",{className:"form__field-wrapper",children:Object(r.jsx)(o.a,{name:"fullName",validate:e(m,b),type:"text",children:function(e){var t=e.input,c=e.meta;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("label",{htmlFor:"fullName",children:[Object(r.jsx)("div",{className:"form__field-title",children:Object(r.jsx)("span",{className:"form__field-title",children:"\u0418\u043c\u044f"})}),Object(r.jsx)("input",Object(l.a)(Object(l.a)({id:"fullName",className:"form__field"},t),{},{placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0412\u0430\u0448\u0435 \u0438\u043c\u044f"}))]}),c.touched&&c.error&&Object(r.jsx)("span",{className:"form__field-error",children:c.error})]})}})}),Object(r.jsx)("div",{className:"form__field-wrapper",children:Object(r.jsx)(o.a,{name:"email",validate:e(m,u),type:"email",children:function(e){var t=e.input,c=e.meta;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("label",{htmlFor:"email",children:[Object(r.jsx)("div",{className:"form__field-title",children:Object(r.jsx)("span",{className:"form__field-title",children:"Email"})}),Object(r.jsx)("input",Object(l.a)(Object(l.a)({id:"email",className:"form__field"},t),{},{placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0430\u0448 email"}))]}),c.touched&&c.error&&Object(r.jsx)("span",{className:"form__field-error",children:c.error})]})}})}),Object(r.jsx)("div",{className:"form__field-wrapper",children:Object(r.jsx)(o.a,{name:"phone",parse:Object(d.a)("+7 (999) 99 99 999"),validate:e(m,f,j),type:"tel",children:function(e){var t=e.input,c=e.meta;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("label",{htmlFor:"phone",children:[Object(r.jsx)("div",{className:"form__field-title",children:Object(r.jsx)("span",{className:"form__field-title",children:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430"})}),Object(r.jsx)("input",Object(l.a)(Object(l.a)({id:"phone",className:"form__field"},t),{},{placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430"}))]}),c.touched&&c.error&&Object(r.jsx)("span",{className:"form__field-error",children:c.error})]})}})}),Object(r.jsx)("div",{className:"form__field-wrapper",children:Object(r.jsx)(o.a,{name:"language",children:function(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("div",{className:"form__field-title",children:Object(r.jsx)("span",{className:"form__field-title",children:"\u042f\u0437\u044b\u043a"})}),Object(r.jsx)(_,{optionsList:t})]})}})}),Object(r.jsx)("div",{className:"form__field-wrapper form__field-wrapper--last",children:Object(r.jsx)(o.a,{name:"agree",type:"checkbox",children:function(e){var t=e.input;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("input",Object(l.a)(Object(l.a)({className:"visually-hidden form__checkbox"},t),{},{placeholder:"\u042f\u0437\u044b\u043a",id:"agree"})),Object(r.jsxs)("label",{className:"form__label",htmlFor:"agree",children:["\u041f\u0440\u0438\u043d\u0438\u043c\u0430\u044e ",Object(r.jsx)("a",{href:"#",children:"\u0443\u0441\u043b\u043e\u0432\u0438\u044f"})," \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f"]})]})}})}),Object(r.jsx)("div",{className:"form__button-wrapper",children:Object(r.jsx)("button",{className:"form__button",type:"submit",disabled:JSON.stringify(a).length>2,children:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"})})]})}})]})})};c(13),c(14),c(15),c(16),c(17);var p=function(){return Object(r.jsx)(O,{})};i.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(p,{})}),document.getElementById("root"))}],[[18,1,2]]]);
//# sourceMappingURL=main.de3868df.chunk.js.map