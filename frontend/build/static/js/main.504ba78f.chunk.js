(this.webpackJsonpaspargis=this.webpackJsonpaspargis||[]).push([[0],{221:function(e,t,n){},234:function(e,t,n){},238:function(e,t,n){},350:function(e,t,n){},351:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),c=n(69),s=n.n(c),i=(n(221),n(35)),o=n(36),l=n(70),u=n.n(l),b=n(94),d=n(14),p=n(195),j=n(403),m=n(405),h=n(394),O=n(184),f=n(418),v=n(2);var g=function(e){var t=Object(i.b)(),n=t.isAuthenticated,a=t.getAccessTokenSilently,c=t.isLoading,s=Object(r.useState)(),l=Object(d.a)(s,2),g=l[0],x=l[1],y=Object(r.useState)(),S=Object(d.a)(y,2),w=S[0],_=S[1],k=Object(p.a)({uri:"https://hasura.aspargis.de/v1alpha1/graphql"});return Object(r.useEffect)((function(){var e=function(){var e=Object(b.a)(u.a.mark((function e(){var t,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,a({audience:"https://aspargis.de",scope:"read:current_user"});case 3:t=e.sent,x(t),e.next=16;break;case 7:return e.prev=7,e.t0=e.catch(0),e.next=11,new Promise((function(e){return setTimeout(e,500)}));case 11:return e.next=13,a({audience:"https://aspargis.de",scope:"read:current_user"});case 13:n=e.sent,x(n),console.log("error fetching jwt:",e.t0.message);case 16:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}),[n]),Object(r.useEffect)((function(){var e=Object(O.a)((function(e,t){var n=t.headers,r=g;return r?{headers:Object(o.a)(Object(o.a)({},n),{},{authorization:"Bearer ".concat(r)})}:{headers:Object(o.a)({},n)}})),t=new j.a({link:e.concat(k),cache:new m.a});_(t)}),[g]),c?Object(v.jsx)(f.a,{}):n&&g?Object(v.jsx)(h.a,{client:w,children:e.children}):Object(v.jsx)(v.Fragment,{})},x=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function y(e,t){navigator.serviceWorker.register(e).then(function(){var e=Object(b.a)(u.a.mark((function e(n){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.onupdatefound=function(){var e=n.installing;null!=e&&(e.onstatechange=function(){"installed"===e.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(n)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(n)))})};case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){console.error("Error during service worker registration:",e)}))}function S(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var r=n.headers.get("content-type");404===n.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):y(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}var w,_,k=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,430)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),r(e),a(e),c(e),s(e)}))},G=n(17),C=n(18),I=n(23),E=n(22),A=n(25),$=n(404),D=n(410),N=n(62),U=["title","titleId"];function z(){return z=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},z.apply(this,arguments)}function P(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function T(e,t){var n=e.title,a=e.titleId,c=P(e,U);return r.createElement("svg",z({viewBox:"0 0 500 500",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":a},c),n?r.createElement("title",{id:a},n):null,r.createElement("path",{d:"m518.27 402.33v-1.2s-214.03-8.7751-260.43-26.575c-119.53-45.6-146.16-182.35-202.75-195.69-43.121-13.3-30.439-10.876-66.547-10.876v350.25h529.73z",fill:"#707272",style:{fill:"#9c9e9e",strokeWidth:1.028}}),w||(w=r.createElement("rect",{x:-559,y:-298,width:0,height:0,fill:"#707272"})),_||(_=r.createElement("rect",{x:-34.3,y:135,width:0,height:0,fill:"#21B469"})),r.createElement("path",{d:"m36.699 110.2-17.699 17 17.699 16.9h0.17578l6.4258 289 12.699 30.6 12.6-31.799 4.0605-288.33 17.24-16.367-17.801-17h-35.4z",style:{fill:"#578a1e"}}),r.createElement("path",{d:"m152.01 112.32h81.829v65.767h-81.829z",style:{fill:"none",strokeWidth:1.6907}}),r.createElement("text",{style:{fontFamily:"sans-serif",fontSize:40,letterSpacing:0,lineHeight:1.25,shapeInside:"url(#rect2371)",whiteSpace:"pre",wordSpacing:0},xmlSpace:"preserve"}))}var W=r.forwardRef(T),B=(n.p,["title","titleId"]);function F(){return F=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},F.apply(this,arguments)}function L(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function V(e,t){var n=e.title,a=e.titleId,c=L(e,B);return r.createElement("svg",F({width:"7.8643mm",height:"18.357mm",viewBox:"0 0 7.8643 18.357",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":a},c),n?r.createElement("title",{id:a},n):null,r.createElement("g",{transform:"translate(-104.39 -120.1)"},r.createElement("g",{transform:"matrix(.26458 0 0 .26458 67.644 90.982)"},r.createElement("path",{d:"m158.2 137.35v20.796c0 0.33814 0.16907 0.50721 0.33814 0.84535 1.3526 1.1835 2.1979 2.536 2.8742 4.2268 0.33814 0.84535 0.50721 1.5216 0.67628 2.367 0.16907 1.1835 0.16907 2.367 0.16907 3.5505-0.16907 1.0144-0.33814 2.0288-0.84535 3.0433-0.67628 1.6907-1.8598 3.2123-3.2123 4.3958-0.84535 0.67628-1.8598 1.3526-2.8742 1.8598-0.67628 0.33814-1.3526 0.50721-2.1979 0.67628-0.84535 0.33814-1.8598 0.33814-2.8742 0.33814-0.67628 0-1.5216-0.16907-2.1979-0.33814-0.50721-0.16907-1.0144-0.16907-1.5216-0.50721-1.0144-0.33814-1.8598-0.84535-2.7051-1.3526-1.0144-0.67628-1.8598-1.5216-2.7051-2.536-0.67628-0.84535-1.1835-1.6907-1.5216-2.7051-0.67628-1.6907-0.84535-3.3814-0.67628-5.2412 0.16907-1.0144 0.33814-1.8598 0.67628-2.8742s0.84535-2.0288 1.5216-2.8742c0.50721-0.67628 1.0144-1.3526 1.6907-1.8598 0.16907-0.16907 0.16907-0.33814 0.16907-0.50721v-41.084c0-1.8598 0.50721-3.5505 1.8598-4.903 0.67628-0.84535 1.6907-1.5216 2.7051-2.0288 1.3526-0.50721 2.7051-0.67628 4.0577-0.50721 1.0144 0.16907 1.8598 0.50721 2.7051 1.0144 1.5216 0.84535 2.536 2.1979 3.0433 3.7195 0.16907 0.67628 0.33814 1.1835 0.33814 1.8598v0.84535c0.50721 6.4247 0.50721 13.187 0.50721 19.781zm-3.2123 1.1835v-21.134c0-1.0144-0.33814-1.8598-0.84535-2.7051-0.67628-1.0144-1.6907-1.5216-2.8742-1.6907-0.50721-0.16907-1.1835 0-1.6907 0.16907-0.67628 0.16907-1.1835 0.50721-1.6907 1.1835-0.50721 0.50721-0.84535 1.1835-1.0144 1.8598-0.16907 0.50721-0.16907 0.84535-0.16907 1.3526v42.098c0 0.50721-0.16907 0.84535-0.67628 1.1835-0.84535 0.50721-1.5216 1.1835-2.0288 2.0288-0.67628 1.0144-1.1835 2.0288-1.3526 3.2123-0.16907 0.67628-0.16907 1.3526-0.16907 2.0288 0.16907 0.67628 0.16907 1.3526 0.33814 2.0288 0.33814 0.84535 0.67628 1.6907 1.3526 2.367 0.67628 0.84535 1.5216 1.6907 2.536 2.1979 0.84535 0.50721 1.8598 0.84535 2.8742 1.0144 1.1835 0.16907 2.367 0 3.3814-0.33814s1.8598-0.84535 2.7051-1.5216c1.1835-1.0144 2.1979-2.1979 2.7051-3.7195 0.33814-0.84535 0.50721-1.8598 0.50721-2.7051 0-0.67628-0.16907-1.3526-0.33814-2.0288-0.16907-0.84535-0.67628-1.6907-1.0144-2.536-0.67628-1.0144-1.5216-1.8598-2.536-2.536-0.16907-0.16907-0.33814-0.33814-0.33814-0.50721v-0.50721c0.33814-6.7628 0.33814-13.695 0.33814-20.796z",style:{opacity:.95402,strokeWidth:1.6907}}),r.createElement("path",{d:"m168.51 135.32c0.16907 0.50721 0 1.0144 0 1.6907h-7.7772c-0.50721 0-0.50721 0-0.50721-0.50721v-0.84535c0-0.33814 0-0.33814 0.33814-0.33814h7.6082z",style:{opacity:.95402,strokeWidth:1.6907}}),r.createElement("path",{d:"m160.23 145.97v-1.3526c0-0.16907 0.16907-0.33814 0.33814-0.33814h7.6082c0.33814 0 0.33814 0 0.33814 0.33814v1.1835c-0.33814 0.33814-7.7772 0.33814-8.2844 0.16907z",style:{opacity:.95402,strokeWidth:1.6907}}),r.createElement("path",{d:"m164.46 139.88v1.6907h-3.7195c-0.33814 0-0.50721 0-0.50721-0.50721v-0.84535c0-0.33814 0-0.33814 0.33814-0.33814h1.6907z",style:{opacity:.95402,strokeWidth:1.6907}}),r.createElement("path",{d:"m164.46 132.45h-3.7195c-0.16907 0-0.33814-0.16907-0.33814-0.33814v-1.1835c0.33814-0.16907 3.5505-0.16907 4.0577 0z",style:{opacity:.95402,strokeWidth:1.6907}}),r.createElement("path",{d:"m152.45 147.49v14.202c0 0.16907 0.16907 0.33814 0.33814 0.50721 1.0144 0.33814 1.8598 1.0144 2.536 1.6907 0.50721 0.67628 0.84535 1.3526 1.0144 2.0288 0.16907 0.84535 0.33814 1.8598 0.16907 2.7051-0.33814 1.5216-1.1835 2.8742-2.536 3.7195-0.67628 0.33814-1.3526 0.67628-2.0288 0.84535-0.50721 0.16907-1.0144 0.16907-1.5216 0.16907-1.1835-0.16907-2.1979-0.50721-3.2123-1.1835-0.84535-0.67628-1.3526-1.3526-1.6907-2.1979-0.16907-0.50721-0.50721-1.1835-0.50721-1.6907 0-0.84535 0-1.5216 0.16907-2.1979 0.33814-0.84535 0.67628-1.5216 1.1835-2.1979 0.67628-0.67628 1.5216-1.1835 2.367-1.5216 0.16907 0 0.33814-0.16907 0.33814-0.33814v-28.235c0-0.50721 0-0.84535 0.33814-1.1835 0.50721-0.67628 1.1835-0.67628 1.8598-0.50721 0.50721 0.16907 1.0144 0.67628 1.1835 1.3526v0.84535z",style:{opacity:.95402,strokeWidth:1.6907}}))))}var R=r.forwardRef(V),q=(n.p,n(234),function(e){Object(I.a)(n,e);var t=Object(E.a)(n);function n(){return Object(G.a)(this,n),t.apply(this,arguments)}return Object(C.a)(n,[{key:"render",value:function(){var e=this.props.temp.map((function(e,t){return t?Object(v.jsxs)("p",{className:"damm-elem damm-temp damm-temp"+t,children:[e.toFixed(2),"\xb0C"]},t):null}));return Object(v.jsxs)("div",{className:"damm-container",children:[Object(v.jsx)(W,{className:"damm-elem damm-bg"}),Object(v.jsx)("h3",{className:"damm-elem damm-name",children:this.props.pos}),Object(v.jsx)("h4",{className:"damm-elem damm-sub",children:this.props.type}),Object(v.jsx)(R,{className:"damm-elem damm-thermo damm-thermo1"}),Object(v.jsx)(R,{className:"damm-elem damm-thermo damm-thermo2"}),Object(v.jsx)(R,{className:"damm-elem damm-thermo damm-thermo3"}),Object(v.jsx)(R,{className:"damm-elem damm-thermo damm-thermo4"}),Object(v.jsxs)("p",{className:"damm-elem damm-label damm-label1",children:["0",Object(v.jsx)("br",{}),"cm"]}),Object(v.jsxs)("p",{className:"damm-elem damm-label damm-label2",children:["-5",Object(v.jsx)("br",{}),"cm"]}),Object(v.jsxs)("p",{className:"damm-elem damm-label damm-label3",children:["-25",Object(v.jsx)("br",{}),"cm"]}),Object(v.jsxs)("p",{className:"damm-elem damm-label damm-label4",children:["-40",Object(v.jsx)("br",{}),"cm"]}),e]})}}]),n}(r.Component)),M=q,H=function(e){Object(I.a)(n,e);var t=Object(E.a)(n);function n(){return Object(G.a)(this,n),t.apply(this,arguments)}return Object(C.a)(n,[{key:"render",value:function(){var e,t=[0,0,0,0];return this.props.group.Sensors.forEach((function(e){var n,r=null===(n=e.Correction_Sensorpositions[0])||void 0===n?void 0:n.pos;r=r||e.Type.charAt(4),t[r]=e.Sensor_Values[0].Value})),Object(v.jsx)(N.b,{to:"/details/".concat(this.props.group.SGroup),children:Object(v.jsx)(M,{temp:t,pos:this.props.group.Position,type:null===(e=this.props.group.Spargelsorten)||void 0===e?void 0:e.Name})})}}]),n}(r.Component),K=H,J=(n(238),n(189)),Q=n.n(J),Y=n(395),Z=n(419),X=n(412),ee=n(414),te=n(421),ne=n(422),re=n(190),ae=n.n(re),ce=n(191),se=n.n(ce),ie=a.a.forwardRef((function(e,t){return Object(v.jsx)(Y.a,Object(o.a)({direction:"up",ref:t},e))}));function oe(e){return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(Z.a,{onClick:e.handleClickOpen,color:"primary",style:{position:"fixed",bottom:20,right:20},children:Object(v.jsx)(ae.a,{})}),Object(v.jsxs)(X.a,{fullScreen:!0,open:e.open,onClose:e.handleClose,TransitionComponent:ie,children:[Object(v.jsx)(ee.a,{container:!0,direction:"row",justifyContent:"center",children:Object(v.jsx)(ee.a,{item:!0,children:Object(v.jsx)(te.a,{color:"inherit",onClick:e.handleClose,"aria-label":"close",children:Object(v.jsx)(se.a,{})})})}),Object(v.jsx)(ne.a,{display:"flex",alignItems:"center",justifyContent:"center",m:4,children:e.children})]})]})}var le,ue=n(429),be=Object($.a)(le||(le=Object(A.a)(["\nmutation acquireSensor($SGroupID: Int!) {\n  update_SGroups(where:{SGroup:{_eq:$SGroupID}}){\n    affected_rows\n  }\n}\n"])));var de,pe=function(e){var t=Object(ue.a)(be,{refetchQueries:["Overview"]}),n=Object(d.a)(t,1)[0],r=a.a.useState(!1),c=Object(d.a)(r,2),s=c[0],i=c[1];return Object(v.jsx)(oe,{handleClickOpen:function(){i(!0)},handleClose:function(){i(!1)},open:s,children:Object(v.jsx)(Q.a,{delay:500,style:{height:150,width:400},onError:function(e){console.log(e)},onScan:function(e){if(console.log("Found",{result:e}),isNaN(e.data))console.error("Non numeric values are invalid");else{var t=e.data;n({variables:{SGroupID:t.substring(t.length-8)}})}i(!1)}})})},je=Object($.a)(de||(de=Object(A.a)(["\nquery Overview {\n  SGroups {\n    SGroup\n    Position\n    Spargelsorten {\n      Name\n    }\n    Sensors {\n      Correction_Sensorpositions {\n        pos\n      }\n      Type\n      Sensor_Values(limit: 1, order_by: {Timestamp: desc}) {\n        Timestamp\n        Value\n      }\n    }\n  }\n}\n"])));var me,he,Oe,fe=function(){var e=Object(D.a)(je),t=e.loading,n=e.error,r=e.data;if(n)return console.error(n),"Error";if(t)return Object(v.jsx)(f.a,{});console.log({data:r});var a=r.SGroups.map((function(e){return Object(v.jsx)(K,{group:e},e.SGroup)}));return Object(v.jsxs)("div",{className:"overview-container",children:[a,Object(v.jsx)(pe,{})]})},ve=n(198),ge=n(124),xe=n(197),ye=n(48),Se=n(39),we=n.n(Se),_e=(n(348),n(27)),ke=n(406),Ge=n(424),Ce=n(402),Ie=n(423),Ee=n(19),Ae=n(415),$e=Object($.a)(me||(me=Object(A.a)(["\nmutation shareSensor($SGroupID: Int!, $user: String!) {\n  insert_share_one(object: {SGroup: $SGroupID, User: $user}, on_conflict: {constraint: share_pkey, update_columns: []}) {\n    __typename\n  }\n}"]))),De=Object($.a)(he||(he=Object(A.a)(["\nmutation unshareSensor($SGroupID: Int!, $user: String!) {\n  delete_share_by_pk(SGroup: $SGroupID, User: $user) {\n    __typename\n  }\n}"]))),Ne=Object($.a)(Oe||(Oe=Object(A.a)(["\nquery findUserID($email: String!) {\n  Users(where: {email: {_eq: $email}}) {\n    user_id\n  }\n}"])));var Ue,ze,Pe,Te=function(e){var t=Object(r.useState)(""),n=Object(d.a)(t,2),a=n[0],c=n[1],s=Object(r.useState)(e.shares),o=Object(d.a)(s,2),l=o[0],u=o[1],b=Object(r.useState)(!1),p=Object(d.a)(b,2),j=p[0],m=p[1],h=Object(i.b)().user,O=Object(ue.a)($e),f=Object(d.a)(O,1)[0],g=Object(ue.a)(De),x=Object(d.a)(g,1)[0],y=Object(D.a)(Ne,{variables:{email:a}}),S=y.loading,w=y.data,_=function(t){return function(){x({variables:{SGroupID:e.SGroupID,user:t.user}}),u(l.filter((function(e){return e.email!==t.email})))}};return Object(v.jsx)(oe,{handleClickOpen:function(){m(!0)},handleClose:function(){m(!1)},open:j,children:Object(v.jsxs)(ee.a,{container:!0,direction:"column",children:[Object(v.jsx)(ee.a,{item:!0,children:"Shared with:"}),Object(v.jsx)(ee.a,{item:!0,children:l.map((function(e){return Object(v.jsx)(Ae.a,{label:e.email,onDelete:_(e)},e.user)}))}),Object(v.jsx)(ee.a,{item:!0,children:Object(v.jsx)(Ce.a,{value:a,onChange:function(e){c(e.target.value)},variant:"standard"})}),Object(v.jsx)(ee.a,{item:!0,children:Object(v.jsx)(Ie.a,{disabled:S||0===w.Users.length||l.some((function(e){return e.email===a}))||w.Users[0].user_id===h.sub,onClick:function(){var t=w.Users[0].user_id;u([].concat(Object(Ee.a)(l),[{email:a,user:t}])),c(""),f({variables:{SGroupID:e.SGroupID,user:t}})},children:"Share"})})]})})},We=["children","value","index"];ye.a.register(xe.a);var Be=Object($.a)(Ue||(Ue=Object(A.a)(["\nquery PlotData($SGroup: Int!) {\n  SGroups_by_pk(SGroup: $SGroup) {\n    Position\n    Sorte\n    Owner\n    Alarm\n    shares {\n      User\n      userByUser {\n        email\n      }\n      Alarm\n    }\n    Sensors {\n      Type\n      Correction_Sensorpositions {\n        pos\n      }\n      Daily {\n        avg\n        max\n        date_trunc\n      }\n      Sensor_Values{\n        Timestamp\n        Value\n      }\n    }\n  }\n}\n"]))),Fe={limits:{x:{min:"original",max:"original",minRange:86400},y:{min:"original",max:"original",minRange:10}},pan:{enabled:!0,mode:"x"},zoom:{wheel:{enabled:!0,speed:.5},pinch:{enabled:!0},mode:"x"}},Le=["rgb(80, 200, 130)","rgb(60, 160, 120)","rgb(40, 150, 210)","rgb(40, 118, 210)"];var Ve=function(e){var t=Object(_e.f)().SGroupID,n=Object(D.a)(Be,{variables:{SGroup:t}}),a=n.loading,c=n.error,s=n.data,o=Object(r.useState)(0),l=Object(d.a)(o,2),u=l[0],b=l[1],p=Object(i.b)().user;if(!t)return"Something has gone wrong";if(c)return console.error(c),"Error";if(a)return Object(v.jsx)(f.a,{});var j=s.SGroups_by_pk.Sensors,m=s.SGroups_by_pk.Owner===p.sub,h=s.SGroups_by_pk.shares.map((function(e){return{email:e.userByUser.email,user:e.User}}));return Object(v.jsxs)(ne.a,{sx:{width:"100%",minHeight:"80vh"},children:[Object(v.jsxs)(ke.a,{value:u,onChange:function(e,t){b(t)},children:[Object(v.jsx)(Ge.a,{label:"Averages"}),Object(v.jsx)(Ge.a,{label:"Min-Max"}),Object(v.jsx)(Ge.a,{label:"Full"}),Object(v.jsx)(Ge.a,{label:"Battery"}),Object(v.jsx)(Ge.a,{label:"Alarm"})]}),Object(v.jsx)(Ye,{value:u,index:0,children:Object(v.jsx)(Ke,{sensors:j})}),Object(v.jsx)(Ye,{value:u,index:1,children:"TODO"}),Object(v.jsx)(Ye,{value:u,index:2,children:Object(v.jsx)(Qe,{sensors:j})}),Object(v.jsx)(Ye,{value:u,index:3,children:Object(v.jsx)(Je,{sensors:j})}),Object(v.jsx)(Ye,{value:u,index:4,children:Object(v.jsx)(He,{owned:m,user:p,SGroupID:t,alarm:m?s.SGroups_by_pk.Alarm:s.SGroups_by_pk.shares.find((function(e){return e.User===p.sub})).Alarm})}),m?Object(v.jsx)(v.Fragment,{children:Object(v.jsx)(Te,{SGroupID:t,shares:h})}):"shared with you"]})},Re=Object($.a)(ze||(ze=Object(A.a)(["\nmutation setOwnedAlarm($SGroup: Int!, $Alarm: float8!) {\n  update_SGroups_by_pk(pk_columns: {SGroup: $SGroup}, _set: {Alarm: $Alarm}) {\n    Alarm\n  }\n}\n"]))),qe=Object($.a)(Pe||(Pe=Object(A.a)(["\nmutation setSharedAlarm($SGroup: Int!, $User: String!, $Alarm: float8!) {\n  update_share_by_pk(pk_columns: {SGroup: $SGroup, User: $User}, _set: {Alarm: $Alarm}) {\n    Alarm\n  }\n}\n\n"])));function Me(e){return{backgroundColor:[Le[e]],borderColor:[Le[e]]}}function He(e){var t=Object(r.useState)(e.alarm),n=Object(d.a)(t,2),a=n[0],c=n[1],s=Object(ue.a)(Re),i=Object(d.a)(s,1)[0],o=Object(ue.a)(qe),l=Object(d.a)(o,1)[0],u=function(t){var n=t;""===t&&(n=null),e.owned?i({variables:{SGroup:e.SGroupID,Alarm:n}}):l({variables:{SGroup:e.SGroupID,Alarm:n,User:e.user.sub}})};return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(Ce.a,{label:"Temperature alarm",type:"number",inputProps:{min:"12",max:"30",step:".1"},InputLabelProps:{shrink:!0},value:a,onChange:function(e){c(e.target.value),u(e.target.value)}}),Object(v.jsx)(Ie.a,{onClick:function(){c(""),u("")},children:"Clear"})]})}function Ke(e){var t={labels:[],datasets:[]},n=0;return e.sensors.forEach((function(e,r){var a;if(!["sig","dev","ver","mod","adc","bat","time"].includes(e.Type)){var c=null!==(a=e.Correction_Sensorpositions.pos)&&void 0!==a?a:n,s=Object(o.a)({label:"temp"+c,data:[]},Me(c));e.Daily.forEach((function(e){var r=we()(e.date_trunc);n||t.labels.push(r),s.data.push(e.max)})),t.datasets.push(s),n+=1}})),Object(v.jsx)(ge.a,{data:t,options:{maintainAspectRatio:!1,normalized:!0,elements:{point:{radius:0}},scales:{x:{type:"time"},y:{type:"linear"}},plugins:{zoom:Fe}}})}function Je(e){var t={labels:[],datasets:[]};return e.sensors.forEach((function(e,n){if("v_bat"===e.Type){var r={label:"bat",data:[]};e.Daily.forEach((function(e){var n=we()(e.date_trunc);t.labels.push(n),r.data.push(e.max)})),t.datasets.push(r)}})),Object(v.jsx)(ge.a,{data:t,options:{normalized:!0,maintainAspectRatio:!1,elements:{point:{radius:0}},scales:{x:{type:"time"},y:{type:"linear"}}}})}function Qe(e){var t={labels:[],datasets:[]},n=0;return e.sensors.forEach((function(e,r){var a;if(!["sig","dev","ver","mod","adc","bat","time"].includes(e.Type)){var c=null!==(a=e.Correction_Sensorpositions.pos)&&void 0!==a?a:n,s=Object(o.a)({label:"temp"+c,data:[]},Me(c));"v_bat"!==e.Type&&(e.Sensor_Values.forEach((function(e){var r=we()(e.Timestamp);n||t.labels.push(r),s.data.push(e.Value)})),t.datasets.push(s),n+=1)}})),Object(v.jsx)(ge.a,{data:t,options:{normalized:!0,maintainAspectRatio:!1,elements:{point:{radius:0}},scales:{x:{type:"time"},y:{type:"linear"}},plugins:{zoom:Fe}}})}function Ye(e){var t=e.children,n=e.value,r=e.index,a=Object(ve.a)(e,We);return Object(v.jsx)("div",Object(o.a)(Object(o.a)({role:"tabpanel",hidden:n!==r,id:"simple-tabpanel-".concat(r),"aria-labelledby":"simple-tab-".concat(r)},a),{},{children:n===r&&Object(v.jsx)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",margin:"20px",height:"60vh"},children:t})}))}var Ze;n(350);function Xe(e){for(var t=(e+"=".repeat((4-e.length%4)%4)).replace(/-/g,"+").replace(/_/g,"/"),n=window.atob(t),r=new Uint8Array(n.length),a=0;a<n.length;++a)r[a]=n.charCodeAt(a);return r}var et=Object($.a)(Ze||(Ze=Object(A.a)(["\nmutation setSub($sub: jsonb!, $user: String!) {\n  update_Users_by_pk(pk_columns: {user_id: $user}, _append: {subscriptions: $sub}) {\n    user_id\n  }\n}\n"]))),tt=function(){var e=Object(i.b)(),t=e.user,n=e.isAuthenticated,r=Object(ue.a)(et),a=Object(d.a)(r,1)[0];return navigator.serviceWorker.ready.then((function(e){return e.pushManager.getSubscription().then((function(t){return t?{sub:t,new:!1}:e.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:Xe("BN1rZgnIUhURBJGNVVbLHUp2LMzfrKtPDfvP9QgNUzu1oBnFPLPLrOjKaNDry44Pzv0uD_YI4KAiqmQawoMHcr4")}).then((function(e){return{sub:e,new:!0}}))}))})).then((function(e){console.log("Sub:",e),e.new&&a({variables:{sub:e.sub,user:t.sub}})})),n&&Object(v.jsxs)("div",{className:"profile-container",children:[Object(v.jsx)("img",{src:t.picture,alt:t.name,className:"profile-picture"}),Object(v.jsx)("h2",{children:t.name}),Object(v.jsx)("p",{children:t.email})]})},nt=function(e){Object(I.a)(n,e);var t=Object(E.a)(n);function n(){return Object(G.a)(this,n),t.apply(this,arguments)}return Object(C.a)(n,[{key:"render",value:function(){return Object(v.jsxs)(_e.c,{children:[Object(v.jsx)(_e.a,{path:"/details/:SGroupID",children:Object(v.jsx)(Ve,{})}),Object(v.jsx)(_e.a,{path:"/profile",children:Object(v.jsx)(tt,{})}),Object(v.jsx)(_e.a,{path:"/",children:Object(v.jsx)(fe,{})})]})}}]),n}(r.Component),rt=nt,at=n(425);function ct(){return Object(v.jsx)(at.a,{color:"inherit"})}var st=function(){var e=Object(r.useState)(!1),t=Object(d.a)(e,2),n=t[0],a=t[1],c=Object(i.b)().loginWithRedirect;return n?Object(v.jsx)(ct,{}):Object(v.jsx)(Ie.a,{color:"inherit",onClick:function(){a(!0),c()},children:"Log In"})},it=n(416),ot=n(196),lt=n(409);var ut=Object(_e.g)((function(e){var t=a.a.useState(null),n=Object(d.a)(t,2),r=n[0],c=n[1],s=Object(i.b)().logout;return Object(v.jsxs)("div",{children:[Object(v.jsx)(te.a,{size:"large","aria-label":"account of current user","aria-controls":"menu-appbar","aria-haspopup":"true",onClick:function(e){c(e.currentTarget)},color:"inherit",children:Object(v.jsx)(it.a,{sx:{width:24,height:24},alt:"Avatar",src:e.user.picture})}),Object(v.jsxs)(ot.a,{id:"menu-appbar",anchorEl:r,anchorOrigin:{vertical:"top",horizontal:"right"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:Boolean(r),onClose:function(){c(null)},children:[Object(v.jsx)(lt.a,{onClick:function(){return e.history.push("/profile")},children:"Profile"}),Object(v.jsx)(lt.a,{onClick:function(){s({returnTo:window.location.origin})},children:"Logout"})]})]})})),bt=n(426),dt=n(427),pt=n(428);var jt=function(){var e=Object(i.b)(),t=e.user,n=e.isAuthenticated,r=e.isLoading;return Object(v.jsx)(bt.a,{position:"static",children:Object(v.jsxs)(dt.a,{children:[Object(v.jsx)(pt.a,{variant:"h6",component:"div",sx:{flexGrow:1},children:Object(v.jsx)(N.b,{to:"/",children:"Aspargis"})}),r?null:n?Object(v.jsx)(ut,{user:t}):Object(v.jsx)(st,{})]})})};s.a.render(Object(v.jsx)(i.a,{domain:"dev-leodorh9.us.auth0.com",clientId:"VPe92gUMGhq9WHnHljMB6p0OIN0pf2bA",redirectUri:window.location.origin,audience:"https://aspargis.de",scope:"read:current_user update:current_user_metadata",children:Object(v.jsxs)(N.a,{children:[Object(v.jsx)(jt,{}),Object(v.jsx)(g,{children:Object(v.jsx)(rt,{})})]})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",Object(b.a)(u.a.mark((function t(){var n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n="".concat("","/service-worker.js"),x?(S(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):y(n,e);case 2:case"end":return t.stop()}}),t)}))))}}(),k()}},[[351,1,2]]]);
//# sourceMappingURL=main.504ba78f.chunk.js.map