(this["webpackJsonphtn-app"]=this["webpackJsonphtn-app"]||[]).push([[0],{29:function(e,t,a){e.exports=a(57)},35:function(e,t,a){},57:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(25),o=a.n(l),c=(a(34),a(35),a(8)),i=a(9),u=a(11),s=a(10),m=a(12),h=a(59),d=a(58),g=a(60),p=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(h.a,null,r.a.createElement("h1",null,"Welcome to the Hack the North 2020 volunteer portal!"),r.a.createElement(d.a,null,r.a.createElement(d.a.Group,null,r.a.createElement(d.a.Label,null,"Email"),r.a.createElement(d.a.Control,{type:"email",placeholder:"coolemail@email.com"})),r.a.createElement(d.a.Group,null,r.a.createElement(d.a.Label,null,"Password"),r.a.createElement(d.a.Control,{type:"password",placeholder:"Password"})),r.a.createElement(d.a.Group,null,r.a.createElement(d.a.Check,{type:"checkbox",label:"Remember Me",onChange:function(e){var t="on"===e.target.value;localStorage.setItem("rememberMe",t)}})),r.a.createElement(g.a,{onClick:this.props.onLogIn},"Log In")))}}]),t}(n.Component),f=a(7),v=a(27),E=a(14),b=a.n(E),k="https://hackthenorth.netlify.com/api/",y="fe-challenge-attendee",O=function(e){for(var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=Object.entries(t),n=t.length>0?"?":"",r=0,l=a;r<l.length;r++){var o=Object(v.a)(l[r],2),c=o[0],i=o[1];n+="".concat(c,"=").concat(i)}var u=k+e+n,s=b.a.get(u);return s},L=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(u.a)(this,Object(s.a)(t).call(this))).getProfileData=e.getProfileData.bind(Object(f.a)(e)),e.state={profile:null,loading:!0,doggo:null},e}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.getProfileData()}},{key:"getProfileData",value:function(){var e=this;(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return e?O(y,{id:e}):O(y)})().then((function(t){var a=t.data;e.setState({profile:a,loading:!1,doggo:null})})),b.a.get("https://dog.ceo/api/breeds/image/random").then((function(t){var a=t.data.message;e.setState({doggo:a})}))}},{key:"getActionString",value:function(e){switch(e){case"check_in":return"Check In";case"attend_workshop":return"Attend Workshop";case"call_phone":return"Call Phone";default:return""}}},{key:"formatDateTime",value:function(e){return new Date(e).toLocaleString()}},{key:"formatPhoneNumber",value:function(e){return"".concat(e.slice(0,3)," - ").concat(e.slice(3,6)," - ").concat(e.slice(6,e.length))}},{key:"renderLoadingState",value:function(){return r.a.createElement(h.a,null,"Loading...")}},{key:"renderEmptyState",value:function(){var e=this.state.doggo;return r.a.createElement(r.a.Fragment,null,"Hey! We couldn't find a profile that matches what you were looking for, but here's a dog:",r.a.createElement("div",{className:"card-img-container"},r.a.createElement(h.a.Img,{src:e})))}},{key:"renderProfileHighlights",value:function(e){var t=e.type,a=e.checked_in;return r.a.createElement(h.a.Header,null,"hacker"===t&&r.a.createElement("div",{className:"".concat(t," pill")},"workshops attended: ",e.num_workshops_attended),"sponsor"===t&&r.a.createElement("div",{className:"".concat(t," pill")},"company: ",e.sponsor_company),"organizer"===t&&r.a.createElement("div",{className:"".concat(t," pill")},this.formatPhoneNumber(e.phone_number)),"volunteer"===t&&r.a.createElement("div",{className:"".concat(t," pill")},"next shift: ",this.formatDateTime(e.next_shift)),r.a.createElement("div",{className:a?"green pill":"orange pill"},a?"checked in":"not checked in"))}},{key:"renderProfile",value:function(){var e=this,t=this.state.profile;return r.a.createElement(r.a.Fragment,null,r.a.createElement(h.a.Title,null,t.name,r.a.createElement("span",{className:"".concat(t.type," badge")},t.type)),r.a.createElement("div",{className:"card-img-container"},r.a.createElement(h.a.Img,{src:t.profile_pic})),this.renderProfileHighlights(t),r.a.createElement(h.a.Body,null,r.a.createElement(h.a.Text,null,t.bio),r.a.createElement("div",null,t.actions.map((function(a){return r.a.createElement(g.a,{className:t.type,variant:"primary",key:a},e.getActionString(a))})))))}},{key:"render",value:function(){var e=this.state,t=e.profile;if(e.loading)return this.renderLoadingState();var a=t?t.type:"";return r.a.createElement(h.a,null,!t&&this.renderEmptyState(),t&&this.renderProfile(),r.a.createElement(h.a.Footer,null,r.a.createElement(g.a,{className:a,onClick:this.props.onLogOut},"Log Out"),r.a.createElement(g.a,{className:a,onClick:this.getProfileData},"See Another Profile")))}}]),t}(n.Component),I=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(u.a)(this,Object(s.a)(t).call(this))).handleLogOut=e.handleLogOut.bind(Object(f.a)(e)),e.handleLogIn=e.handleLogIn.bind(Object(f.a)(e)),e.state={loggedIn:localStorage.getItem("rememberMe")||!1},e}return Object(m.a)(t,e),Object(i.a)(t,[{key:"handleLogIn",value:function(){this.setState({loggedIn:!0})}},{key:"handleLogOut",value:function(){localStorage.setItem("rememberMe",!1),this.setState({loggedIn:!1})}},{key:"render",value:function(){var e={loggedIn:this.state.loggedIn,handleLogOut:this.handleLogOut,handleLogIn:this.handleLogIn};return this.props.render(e)}}]),t}(n.Component);var j=function(){return r.a.createElement(I,{render:function(e){var t=e.loggedIn,a=e.handleLogIn,n=e.handleLogOut;return t?r.a.createElement(L,{onLogOut:n}):r.a.createElement(p,{onLogIn:a})}})};o.a.render(r.a.createElement(j,null),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.42e21776.chunk.js.map