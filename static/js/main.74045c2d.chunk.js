(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{40:function(e,t,n){},41:function(e,t,n){},43:function(e,t,n){},68:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),i=n(28),o=n.n(i),j=(n(40),n(41),n(34)),l=n(3),r=n(15),s=n.n(r),u=n(29),p=n(9),O=(n(43),n(30)),b=n.n(O),h=n(10),d=n(32),x=n(33),v=n(31),m=n(0);function N(){var e=Object(c.useState)("Enter a city name"),t=Object(p.a)(e,2),n=t[0],a=t[1],i=Object(c.useState)("AL"),o=Object(p.a)(i,2),j=o[0],l=o[1],r=Object(c.useState)("Weather Main"),O=Object(p.a)(r,2),h=O[0],d=O[1],x=Object(c.useState)(""),N=Object(p.a)(x,2),A=N[0],S=N[1],f=Object(c.useState)(""),C=Object(p.a)(f,2),M=C[0],g=C[1],T=Object(c.useState)(""),w=Object(p.a)(T,2),D=w[0],I=w[1],E=Object(c.useState)(""),W=Object(p.a)(E,2),y=W[0],_=W[1],L=Object(c.useState)(""),R=Object(p.a)(L,2),K=R[0],P=R[1],H=Object(c.useState)(""),V=Object(p.a)(H,2),F=(V[0],V[1]),U=Object(c.useState)(!1),Y=Object(p.a)(U,2),k=Y[0],G=Y[1],J=Object(c.useState)("Weather Description"),q=Object(p.a)(J,2),B=q[0],X=q[1],Z=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_API_KEY;function z(){return(z=Object(u.a)(s.a.mark((function e(t){var c,a,i,o,l,r,u,p,O,h,x,v,m,N;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return G(!1),t.preventDefault(),e.next=4,b.a.get("https://api.openweathermap.org/data/2.5/weather?q=".concat(n.replace(" ","&nbsp;"),",").concat(j,",USA&units=imperial&appid=").concat(Z));case 4:c=e.sent,a=c.data,i=a.main,o=i.temp,l=i.temp_min,r=i.temp_max,u=i.humidity,p=a.weather,O=a.wind,h=O.speed,x=O.deg,v=p[0],m=v.icon,N=v.description,d(o),S(r),g(l),I("".concat(u,"%")),_("".concat(Math.round(h),"mph")),P(x),F(m),X(Q(m,N)),G(!0);case 25:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Q(e,t){return t=t.split(" ").map((function(e){return e.replace(e[0],e[0].toUpperCase())})).join(" "),Object(m.jsxs)("div",{className:"condition-con",children:[Object(m.jsx)("img",{alt:"weather-icon",className:"weather-icon",src:"http://openweathermap.org/img/wn/".concat(e,".png")}),Object(m.jsx)("span",{children:t})]})}Object(c.useEffect)((function(){}));var $=[{text:"Conditions:",value:B},{text:"Current:",value:h},{text:"Max",value:A},{text:"Min",value:M},{text:"Humidity",value:D},{text:"Wind",value:[y,function(e){return Object(m.jsx)(v.a,{className:"windDir",style:{transform:"rotate(".concat(e,"deg)")},icon:["fa","long-arrow-alt-up"]})}(K)]}];return Object(m.jsx)("div",{children:Object(m.jsxs)("div",{className:"main-con",children:[Object(m.jsx)("h1",{className:"chooseCity",children:"Enter a U.S. city and state to retrieve the weather"}),Object(m.jsxs)("div",{className:"inputGroup",children:[Object(m.jsx)("input",{name:"city",type:"text",className:"cityRequest",value:n,onChange:function(e){return a(e.target.value)},onClick:function(e){e.target.value=""}}),Object(m.jsxs)("select",{name:"state",type:"text",className:"stateRequest",value:j,onChange:function(e){return l(e.target.value)},children:[Object(m.jsx)("option",{value:"AL",children:"AL"}),Object(m.jsx)("option",{value:"AK",children:"AK"}),Object(m.jsx)("option",{value:"AR",children:"AR"}),Object(m.jsx)("option",{value:"AZ",children:"AZ"}),Object(m.jsx)("option",{value:"CA",children:"CA"}),Object(m.jsx)("option",{value:"CO",children:"CO"}),Object(m.jsx)("option",{value:"CT",children:"CT"}),Object(m.jsx)("option",{value:"DC",children:"DC"}),Object(m.jsx)("option",{value:"DE",children:"DE"}),Object(m.jsx)("option",{value:"FL",children:"FL"}),Object(m.jsx)("option",{value:"GA",children:"GA"}),Object(m.jsx)("option",{value:"HI",children:"HI"}),Object(m.jsx)("option",{value:"IA",children:"IA"}),Object(m.jsx)("option",{value:"ID",children:"ID"}),Object(m.jsx)("option",{value:"IL",children:"IL"}),Object(m.jsx)("option",{value:"IN",children:"IN"}),Object(m.jsx)("option",{value:"KS",children:"KS"}),Object(m.jsx)("option",{value:"KY",children:"KY"}),Object(m.jsx)("option",{value:"LA",children:"LA"}),Object(m.jsx)("option",{value:"MA",children:"MA"}),Object(m.jsx)("option",{value:"MD",children:"MD"}),Object(m.jsx)("option",{value:"ME",children:"ME"}),Object(m.jsx)("option",{value:"MI",children:"MI"}),Object(m.jsx)("option",{value:"MN",children:"MN"}),Object(m.jsx)("option",{value:"MO",children:"MO"}),Object(m.jsx)("option",{value:"MS",children:"MS"}),Object(m.jsx)("option",{value:"MT",children:"MT"}),Object(m.jsx)("option",{value:"NC",children:"NC"}),Object(m.jsx)("option",{value:"NE",children:"NE"}),Object(m.jsx)("option",{value:"NH",children:"NH"}),Object(m.jsx)("option",{value:"NJ",children:"NJ"}),Object(m.jsx)("option",{value:"NM",children:"NM"}),Object(m.jsx)("option",{value:"NV",children:"NV"}),Object(m.jsx)("option",{value:"NY",children:"NY"}),Object(m.jsx)("option",{value:"ND",children:"ND"}),Object(m.jsx)("option",{value:"OH",children:"OH"}),Object(m.jsx)("option",{value:"OK",children:"OK"}),Object(m.jsx)("option",{value:"OR",children:"OR"}),Object(m.jsx)("option",{value:"PA",children:"PA"}),Object(m.jsx)("option",{value:"RI",children:"RI"}),Object(m.jsx)("option",{value:"SC",children:"SC"}),Object(m.jsx)("option",{value:"SD",children:"SD"}),Object(m.jsx)("option",{value:"TN",children:"TN"}),Object(m.jsx)("option",{value:"TX",children:"TX"}),Object(m.jsx)("option",{value:"UT",children:"UT"}),Object(m.jsx)("option",{value:"VT",children:"VT"}),Object(m.jsx)("option",{value:"VA",children:"VA"}),Object(m.jsx)("option",{value:"WA",children:"WA"}),Object(m.jsx)("option",{value:"WI",children:"WI"}),Object(m.jsx)("option",{value:"WV",children:"WV"}),Object(m.jsx)("option",{value:"WY",children:"WY"})]}),Object(m.jsx)("button",{className:"submit",onClick:function(e){return function(e){return z.apply(this,arguments)}(e)},children:"Get Weather"})]}),k&&Object(m.jsxs)("div",{className:"outputGroup",children:[Object(m.jsx)("ul",{className:"outputCats",children:$.map((function(e,t){return Object(m.jsx)("li",{children:e.text},t)}))}),Object(m.jsx)("ul",{className:"weatherOutput",children:$.map((function(e,t){return Object(m.jsx)("li",{children:e.value},t)}))})]}),Object(m.jsx)("div",{className:"openWeather",children:Object(m.jsxs)("span",{children:["Data powered by"," ",Object(m.jsx)("a",{href:"https://openweathermap.org/",children:"openweathermap.org"})," API"]})})]})})}h.b.add(d.a,x.a);var A=function(){return document.title="Weather App",Object(m.jsx)(j.a,{children:Object(m.jsx)(l.c,{children:Object(m.jsx)(l.a,{path:"/",component:N})})})},S=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,69)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,i=t.getLCP,o=t.getTTFB;n(e),c(e),a(e),i(e),o(e)}))};o.a.render(Object(m.jsx)(a.a.StrictMode,{children:Object(m.jsx)(A,{})}),document.getElementById("root")),S()}},[[68,1,2]]]);
//# sourceMappingURL=main.74045c2d.chunk.js.map