(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{11:function(e,t,n){e.exports={list:"Navigation_list__2wTh1",item:"Navigation_item__2PYnQ",link:"Navigation_link__1qhbX",active:"Navigation_active__JfOe7"}},126:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a=n(44),r=n(5),o="ADD-MESSAGE",c={users:[{id:1,name:"Alexey"},{id:2,name:"Andrew"},{id:3,name:"Pavel"},{id:4,name:"Vladislav"},{id:5,name:"Ivan"}],messages:[{id:1,message:"Hey, how are you"},{id:2,message:"I'm fine"},{id:3,message:"What's going on?"},{id:4,message:"I dont know"},{id:5,message:"Okie Dokie"}]},i=function(e){return{type:o,newMessageText:e}};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case o:return Object(r.a)(Object(r.a)({},e),{},{messages:[].concat(Object(a.a)(e.messages),[{id:6,message:t.newMessageText}])});default:return e}}},14:function(e,t,n){e.exports={preloader:"Users_preloader__39tF-",wrapper:"Users_wrapper__1HT27",image__wrapper:"Users_image__wrapper__3oz_M",image:"Users_image__3zPkz",btn:"Users_btn__3F4VR",content:"Users_content__3disy",name:"Users_name__28Z-4",text:"Users_text__24xhu",country:"Users_country__1Tqy-",city:"Users_city__r3lWU"}},16:function(e,t,n){"use strict";n.d(t,"c",(function(){return o})),n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return i}));var a=n(132),r=a.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"4404a335-ea0f-496e-a8e3-423487adc902"}}),o={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return r.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},follow:function(e){return r.post("follow/".concat(e))},unfollow:function(e){return r.delete("follow/".concat(e))},getProfile:function(e){return console.warn("Obsolete method. Use profileAPI object."),c.getProfile(e)}},c={getProfile:function(e){return r.get("profile/".concat(e))},getStatus:function(e){return r.get("profile/status/".concat(e))},updateStatus:function(e){return r.put("profile/status",{status:e})}},i={me:function(){return r.get("auth/me")},login:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return r.post("auth/login",{email:e,password:t,rememberMe:n})},logout:function(){return r.delete("auth/login")}}},164:function(e,t,n){},165:function(e,t,n){},285:function(e,t,n){"use strict";n.r(t);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var a=n(0),r=n.n(a),o=n(66),c=n.n(o),i=(n(164),n(34)),s=n(35),u=n(38),l=n(37),m=n(10),f=n(12),p=(n(165),n(18)),d=n(127),g=n(33),h=n(86),b=n(9),v=n.n(b),E=n(19),_=n(5),O=n(16),w=n(47),j="auth/SET_USER_DATA",P={userId:null,email:null,login:null,isAuth:!1},y=function(e,t,n,a){return{type:j,payload:{userId:e,email:t,login:n,isAuth:a}}},N=function(){return function(){var e=Object(E.a)(v.a.mark((function e(t){var n,a,r,o,c;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.me();case 2:0===(n=e.sent).data.resultCode&&(a=n.data.data,r=a.id,o=a.email,c=a.login,t(y(r,o,c,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case j:return Object(_.a)(Object(_.a)({},e),t.payload);default:return e}},C=n(45),k=n.n(C),x=Object(d.a)({form:"login"})((function(e){var t=e.handleSubmit,n=e.error;return r.a.createElement("form",{onSubmit:t},Object(g.c)(g.a,"email","Email",[h.b]),Object(g.c)(g.a,"password","Password",[h.b],{type:"password"}),Object(g.c)(g.a,"rememberMe",null,null,{type:"checkbox"},"Remember Me"),n&&r.a.createElement("div",{className:k.a.formError},n),r.a.createElement("button",null,"Submit"))})),U=Object(p.b)((function(e){return{isAuth:e.auth.isAuth}}),{login:function(e,t,n){return function(){var a=Object(E.a)(v.a.mark((function a(r){var o,c;return v.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,O.a.login(e,t,n);case 2:0===(o=a.sent).data.resultCode?r(N()):(c=o.data.messages.length>0?o.data.messages[0]:"Some error",r(Object(w.a)("login",{_error:c})));case 4:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()}})((function(e){return e.isAuth?r.a.createElement(m.a,{to:"/profile"}):r.a.createElement("div",null,r.a.createElement("h1",null,"Login"),r.a.createElement(x,{onSubmit:function(t){e.login(t.email,t.password,t.rememberMe)}}))})),I=n(11),T=n.n(I),z=function(){return r.a.createElement("nav",null,r.a.createElement("ul",{className:T.a.list},r.a.createElement("li",{className:T.a.item},r.a.createElement(f.b,{className:T.a.link,activeClassName:T.a.active,to:"/profile"},"Profile")),r.a.createElement("li",{className:T.a.item},r.a.createElement(f.b,{className:T.a.link,activeClassName:T.a.active,to:"/dialogs"},"Messages")),r.a.createElement("li",{className:T.a.item},r.a.createElement(f.b,{className:T.a.link,activeClassName:T.a.active,to:"/users"},"Users")),r.a.createElement("li",{className:T.a.item},r.a.createElement(f.b,{className:T.a.link,activeClassName:T.a.active,to:"/news"},"News")),r.a.createElement("li",{className:T.a.item},r.a.createElement(f.b,{className:T.a.link,activeClassName:T.a.active,to:"/music"},"Music")),r.a.createElement("li",{className:T.a.item},r.a.createElement(f.b,{className:T.a.link,activeClassName:T.a.active,to:"/settings"},"Settings"))))},A=n(46),F=n.n(A),M=n.p+"static/media/ornithology.d7503068.svg",L=function(e){return r.a.createElement("header",{className:F.a.header},r.a.createElement(f.b,{className:F.a.link,to:"/profile"},r.a.createElement("img",{className:F.a.image,src:M,alt:"ornithology"})),r.a.createElement("div",null,e.isAuth?r.a.createElement("div",null,r.a.createElement(f.b,{className:F.a.login,to:"/profile"},e.login),r.a.createElement("button",{onClick:e.logout},"Logout")):r.a.createElement(f.b,{className:F.a.login,to:"/login"},"Login")))},R=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement(L,this.props)}}]),n}(r.a.Component),D=Object(p.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{logout:function(){return function(){var e=Object(E.a)(v.a.mark((function e(t){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.logout();case 2:0===e.sent.data.resultCode&&t(y(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(R),G=n(8),W=n(44),H=function(e,t,n,a){return e.map((function(e){return e[n]===t?Object(_.a)(Object(_.a)({},e),a):e}))},X="FOLLOW",Z="UNFOLLOW",q="SET_USERS",J="SET_CURRENT_PAGE",V="SET_TOTAL_USERS_COUNT",K="TOGGLE_IS_FETCHING",Y="TOGGLE_IS_FOLLOWING_PROGRESS",B={users:[],pageSize:10,totalUsersCount:0,currentPage:1,isFetching:!0,followingInProgress:[]},Q=function(e){return{type:X,userId:e}},$=function(e){return{type:Z,userId:e}},ee=function(e){return{type:J,currentPage:e}},te=function(e){return{type:K,isFetching:e}},ne=function(e,t){return{type:Y,isFetching:e,userId:t}},ae=function(){var e=Object(E.a)(v.a.mark((function e(t,n,a,r){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(ne(!0,n)),e.next=3,a(n);case 3:0===e.sent.data.resultCode&&t(r(n)),t(ne(!1,n));case 6:case"end":return e.stop()}}),e)})));return function(t,n,a,r){return e.apply(this,arguments)}}(),re=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case X:return Object(_.a)(Object(_.a)({},e),{},{users:H(e.users,t.userId,"id",{followed:!0})});case Z:return Object(_.a)(Object(_.a)({},e),{},{users:H(e.users,t.userId,"id",{followed:!1})});case q:return Object(_.a)(Object(_.a)({},e),{},{users:t.users});case J:return Object(_.a)(Object(_.a)({},e),{},{currentPage:t.currentPage});case V:return Object(_.a)(Object(_.a)({},e),{},{totalUsersCount:t.count});case K:return Object(_.a)(Object(_.a)({},e),{},{isFetching:t.isFetching});case Y:return Object(_.a)(Object(_.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object(W.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!=t.userId}))});default:return e}},oe=n(57),ce=n(128),ie=n(71),se=n.n(ie),ue=function(e){for(var t=e.totalUsersCount,n=e.pageSize,o=e.currentPage,c=e.onPageChanged,i=e.portionSize,s=void 0===i?10:i,u=Math.ceil(t/n),l=[],m=1;m<=u;m++)l.push(m);var f=Math.ceil(u/s),p=Object(a.useState)(1),d=Object(ce.a)(p,2),g=d[0],h=d[1],b=(g-1)*s+1,v=g*s;return r.a.createElement("div",{className:se.a.numbers},g>1&&r.a.createElement("button",{onClick:function(){h(g-1)}},"PREV"),l.filter((function(e){return e>=b&&e<=v})).map((function(e){return r.a.createElement("button",{className:o===e?se.a.activePage:se.a.ordinaryPage,key:e,onClick:function(){c(e)}},e)})),f>g&&r.a.createElement("button",{onClick:function(){h(g+1)}},"NEXT"))},le=n(14),me=n.n(le),fe=n.p+"static/media/user.7be416ee.png",pe=function(e){var t=e.user,n=e.followingInProgress,a=e.follow,o=e.unfollow;return r.a.createElement("div",{className:me.a.wrapper},r.a.createElement("div",{className:me.a.image__wrapper},r.a.createElement(f.b,{to:"/profile/".concat(t.id)},r.a.createElement("img",{className:me.a.image,src:null!=t.photos.small?t.photos.small:fe})),t.followed?r.a.createElement("button",{className:me.a.btn,disabled:n.some((function(e){return e===t.id})),onClick:function(){o(t.id)}},"Unfollow"):r.a.createElement("button",{className:me.a.btn,disabled:n.some((function(e){return e===t.id})),onClick:function(){a(t.id)}},"Follow")),r.a.createElement("div",{className:me.a.content},r.a.createElement("div",{className:me.a.content__left},r.a.createElement("h3",{className:me.a.name},t.name),r.a.createElement("p",{className:me.a.text},t.status)),r.a.createElement("div",{className:me.a.content__right},r.a.createElement("h4",{className:me.a.country},"Country"),r.a.createElement("h4",{className:me.a.city},"City"))))},de=function(e){var t=e.totalUsersCount,n=e.pageSize,a=e.currentPage,o=e.onPageChanged,c=e.users,i=Object(oe.a)(e,["totalUsersCount","pageSize","currentPage","onPageChanged","users"]);return r.a.createElement("div",null,r.a.createElement(ue,{totalUsersCount:t,pageSize:n,currentPage:a,onPageChanged:o}),c.map((function(e){return r.a.createElement(pe,{user:e,key:e.id,followingInProgress:i.followingInProgress,follow:i.follow,unfollow:i.unfollow})})))},ge=n(40),he=n(133),be=Object(he.a)((function(e){return e.usersPage.users}),(function(e){return e.filter((function(e){return!0}))})),ve=function(e){return e.usersPage.pageSize},Ee=function(e){return e.usersPage.totalUsersCount},_e=function(e){return e.usersPage.currentPage},Oe=function(e){return e.usersPage.isFetching},we=function(e){return e.usersPage.followingInProgress},je=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).onPageChanged=function(t){var n=e.props.pageSize;e.props.getUsers(t,n)},e}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.currentPage,n=e.pageSize;this.props.getUsers(t,n)}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,this.props.isFetching?r.a.createElement(ge.a,null):null,r.a.createElement(de,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,users:this.props.users,follow:this.props.follow,unfollow:this.props.unfollow,followingInProgress:this.props.followingInProgress}))}}]),n}(r.a.Component),Pe=Object(G.d)(Object(p.b)((function(e){return{users:be(e),pageSize:ve(e),totalUsersCount:Ee(e),currentPage:_e(e),isFetching:Oe(e),followingInProgress:we(e)}}),{follow:function(e){return function(){var t=Object(E.a)(v.a.mark((function t(n){return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:ae(n,e,O.c.follow.bind(O.c),Q);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},unfollow:function(e){return function(){var t=Object(E.a)(v.a.mark((function t(n){return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:ae(n,e,O.c.unfollow.bind(O.c),$);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},setCurrentPage:ee,toggleFollowingProgress:ne,getUsers:function(e,t){return function(){var n=Object(E.a)(v.a.mark((function n(a){var r;return v.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a(te(!0)),a(ee(e)),n.next=4,O.c.getUsers(e,t);case 4:r=n.sent,a(te(!1)),a((c=r.items,{type:q,users:c})),a((o=r.totalCount,{type:V,count:o}));case 8:case"end":return n.stop()}var o,c}),n)})));return function(e){return n.apply(this,arguments)}}()}}))(je),ye="INITIALIZED-SUCCESS",Ne={initialized:!1},Se=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ne,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ye:return Object(_.a)(Object(_.a)({},e),{},{initialized:!0});default:return e}},Ce=n(95),ke=n(126),xe={},Ue=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:xe;return e},Ie=n(134),Te=n(129),ze=Object(G.c)({profilePage:Ce.b,dialogsPage:ke.b,usersPage:re,sidebar:Ue,auth:S,form:Te.a,app:Se}),Ae=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||G.d,Fe=Object(G.e)(ze,Ae(Object(G.a)(Ie.a))),Me=function(e){return function(t){return r.a.createElement(r.a.Suspense,{fallback:r.a.createElement(ge.a,null)},r.a.createElement(e,t))}},Le=r.a.lazy((function(){return n.e(3).then(n.bind(null,291))})),Re=r.a.lazy((function(){return n.e(4).then(n.bind(null,292))})),De=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialized?r.a.createElement("div",{className:"container"},r.a.createElement(D,null),r.a.createElement("div",{className:"wrapper"},r.a.createElement(z,null),r.a.createElement(m.b,{path:"/profile/:userId?",render:Me(Le)}),r.a.createElement(m.b,{path:"/dialogs",render:Me(Re)}),r.a.createElement(m.b,{path:"/users",render:function(){return r.a.createElement(Pe,null)}}),r.a.createElement(m.b,{path:"/login",render:function(){return r.a.createElement(U,null)}}))):r.a.createElement(ge.a,null)}}]),n}(r.a.Component),Ge=Object(G.d)(m.f,Object(p.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(e){e(N()).then((function(){e({type:ye})}))}}}))(De),We=function(e){return r.a.createElement(f.a,null,r.a.createElement(p.a,{store:Fe},r.a.createElement(r.a.StrictMode,null,r.a.createElement(Ge,null))))};c.a.render(r.a.createElement(We,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},33:function(e,t,n){"use strict";n.d(t,"b",(function(){return l})),n.d(t,"a",(function(){return m})),n.d(t,"c",(function(){return f}));var a=n(57),r=n(0),o=n.n(r),c=n(45),i=n.n(c),s=n(89),u=function(e){e.input;var t=e.meta,n=t.touched,a=t.error,r=e.children,c=n&&a;return o.a.createElement("div",{className:i.a.container},o.a.createElement("div",{className:c?i.a.error:""},r),c&&o.a.createElement("p",{className:i.a.errorText},a))},l=function(e){var t=e.input,n=(e.meta,e.child,Object(a.a)(e,["input","meta","child"]));return o.a.createElement(u,e,o.a.createElement("textarea",Object.assign({},t,n)))},m=function(e){var t=e.input,n=(e.meta,e.child,Object(a.a)(e,["input","meta","child"]));return o.a.createElement(u,e,o.a.createElement("input",Object.assign({},t,n)))},f=function(e,t,n,a){var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},c=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";return o.a.createElement("div",null,o.a.createElement(s.a,Object.assign({type:"text",component:e,name:t,placeholder:n,validate:a},r))," ",c)}},40:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(14),c=n.n(o),i=n.p+"static/media/preloader.02193965.svg";t.a=function(e){return r.a.createElement("img",{className:c.a.preloader,src:i,alt:""})}},45:function(e,t,n){e.exports={container:"FormsControls_container__3p5JZ",error:"FormsControls_error__3szqT",errorText:"FormsControls_errorText__1-p7Z",formError:"FormsControls_formError__m1RKe"}},46:function(e,t,n){e.exports={header:"Header_header__3zp4N",image:"Header_image__lXWal",login:"Header_login__1-P3K"}},71:function(e,t,n){e.exports={numbers:"Pagination_numbers__hZu2P",activePage:"Pagination_activePage__14Y_w",ordinaryPage:"Pagination_ordinaryPage__2r0Iv"}},86:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return r}));var a=function(e){return e?void 0:"Field is required"},r=function(e){return function(t){return t.length>e?"Max length is ".concat(e," symbols"):void 0}}},95:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"d",(function(){return h})),n.d(t,"c",(function(){return b})),n.d(t,"e",(function(){return v}));var a=n(9),r=n.n(a),o=n(19),c=n(44),i=n(5),s=n(16),u="ADD-POST",l="SET_USER_PROFILE",m="SET_STATUS",f="DELETE-POST",p={posts:[{id:1,message:"Harry Potter",likes:46},{id:2,message:"Ron Weasley",likes:28},{id:3,message:"Hermione Granger",likes:37},{id:4,message:"Drako Malfoy",likes:53}],profile:null,status:""},d=function(e){return{type:u,newPostText:e}},g=function(e){return{type:m,status:e}},h=function(e){return function(){var t=Object(o.a)(r.a.mark((function t(n){var a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.c.getProfile(e);case 2:a=t.sent,n((r=a.data,{type:l,profile:r}));case 4:case"end":return t.stop()}var r}),t)})));return function(e){return t.apply(this,arguments)}}()},b=function(e){return function(){var t=Object(o.a)(r.a.mark((function t(n){var a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.b.getStatus(e);case 2:a=t.sent,n(g(a.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},v=function(e){return function(){var t=Object(o.a)(r.a.mark((function t(n){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.b.updateStatus(e);case 2:0===t.sent.data.resultCode&&n(g(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u:return Object(i.a)(Object(i.a)({},e),{},{posts:[].concat(Object(c.a)(e.posts),[{id:5,message:t.newPostText,likes:0}]),newPostText:""});case l:return Object(i.a)(Object(i.a)({},e),{},{profile:t.profile});case m:return Object(i.a)(Object(i.a)({},e),{},{status:t.status});case f:return Object(i.a)(Object(i.a)({},e),{},{posts:e.posts.filter((function(e){return e.id!=t.postId}))});default:return e}}}},[[285,1,2]]]);
//# sourceMappingURL=main.521fc7c4.chunk.js.map