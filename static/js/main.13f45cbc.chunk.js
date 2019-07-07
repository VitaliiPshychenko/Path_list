(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{45:function(e,t,a){e.exports=a(68)},51:function(e,t,a){},53:function(e,t,a){},68:function(e,t,a){"use strict";a.r(t);a(46);var n=a(0),r=a.n(n),c=a(22),o=a.n(c),l=(a(51),a(18)),s=a(15),i=a.n(s),u=a(29),d=a(8),m=a(9),h=a(11),p=a(10),f=a(12),v=(a(53),a(70)),g=a(41),E=a(72),b=a(76),D=function(e){function t(e){var a;return Object(d.a)(this,t),(a=Object(h.a)(this,Object(p.a)(t).call(this,e))).onTitleChange=function(e){a.setState({pathName:e.target.value})},a.onShortDescChange=function(e){a.setState({shortDescription:e.target.value})},a.onFullDescChange=function(e){a.setState({fullDescription:e.target.value})},a.onSubmit=function(e){e.preventDefault(),a.props.addPathToList(a.state.pathName,a.state.shortDescription,a.state.fullDescription),a.setState({pathName:"",shortDescription:"",fullDescription:""})},a.state={pathName:"",shortDescription:"",fullDescription:""},a}return Object(f.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.state,t=e.pathName,a=e.shortDescription,n=e.fullDescription;return r.a.createElement(v.a,{className:"bg-light add-path-container justify-content-start"},r.a.createElement("button",{type:"button",className:"close","aria-label":"Close",onClick:this.props.toggleForm},r.a.createElement("span",{"aria-hidden":"true"},"\xd7")),r.a.createElement(g.a,{xs:6},r.a.createElement(E.a,{onSubmit:this.onSubmit},r.a.createElement(E.a.Group,null,r.a.createElement(E.a.Label,null,"Title"),r.a.createElement(E.a.Control,{type:"text",value:t,onChange:this.onTitleChange})),r.a.createElement(E.a.Group,{controlId:"exampleForm.ControlTextarea1"},r.a.createElement(E.a.Label,null,"Short description"),r.a.createElement(E.a.Control,{as:"textarea",rows:"3",maxLength:"160",value:a,onChange:this.onShortDescChange})),r.a.createElement(E.a.Group,{controlId:"exampleForm.ControlTextarea1"},r.a.createElement(E.a.Label,null,"Full description"),r.a.createElement(E.a.Control,{as:"textarea",rows:"4",value:n,onChange:this.onFullDescChange})),r.a.createElement(b.a,{variant:"primary",type:"submit"},"Add path"))))}}]),t}(n.Component),I=a(73),w=a(74),y=a(71),j=a(20),x=a.n(j);a(58);x.a.initializeApp({apiKey:"AIzaSyDOiyHKJdnV8ZVxFN6N_h6RFK9evCnDoTw",authDomain:"list-of-paths.firebaseapp.com",databaseURL:"https://list-of-paths.firebaseio.com",projectId:"list-of-paths",storageBucket:"",messagingSenderId:"31567877341",appId:"1:31567877341:web:a60d29794325afa2"});var C=x.a.firestore();window.firebase=x.a;x.a;var O=a(44),S=function(e){return Object(O.a)({id:e.id},e.data())},k=a(75);function N(e){var t=e.isActive,a=e.id,n=e.title,c=e.fullDesc,o=e.changeElected,l=e.elected,s=e.removeItem;return r.a.createElement(g.a,{md:6,className:t},r.a.createElement(w.a.Content,null,r.a.createElement(w.a.Pane,{eventKey:"".concat(a)},r.a.createElement("h3",null,n),r.a.createElement("p",null,c),r.a.createElement("div",{className:"d-flex align-items-end flex-column"},r.a.createElement("a",{href:"1",className:"text-primary d-block",onClick:o},l?"Remove from favorites":"Add to favorites"),r.a.createElement("a",{href:"2",className:"text-danger d-block",onClick:function(e){return s(e,a)}},"Remove")))))}var F=function(e){function t(e){var a;return Object(d.a)(this,t),(a=Object(h.a)(this,Object(p.a)(t).call(this,e))).componentDidMount=function(){a.setState({elected:a.props.isElected})},a.updateElected=function(e){C.doc("data/".concat(a.props.id)).update({elected:!e})},a.displayItem=function(){a.setState({display:!0})},a.toggleItem=function(){a.setState(function(e){return{display:!e.display}})},a.changeElected=function(e,t){e.preventDefault();var n=a.state.elected;n?(a.toggleItem(),a.setState(function(e){return{elected:!e.elected}}),a.props.moveDown(e,t)):(a.toggleItem(),a.setState(function(e){return{elected:!e.elected}}),a.props.moveUp(e,t)),a.updateElected(n)},a.state={elected:null,display:!1},a}return Object(f.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props,t=e.title,a=e.shortDesc,n=e.fullDesc,c=e.id,o=e.selectItem,l=e.removeItem,s=this.state,i=s.display,u=s.elected,d=u?"position-relative elected":"position-relative",m=i?"desc active":"desc not-active";return r.a.createElement(r.a.Fragment,null,r.a.createElement(g.a,{md:6,onClick:this.displayItem,className:"mb-1"},r.a.createElement(k.a,null,r.a.createElement(k.a.Item,{action:!0,href:"".concat(c),onClick:function(e){return o(e,c)}},r.a.createElement("h5",{className:d},t),r.a.createElement("p",null,a)))),r.a.createElement(N,{isActive:m,id:c,title:t,fullDesc:n,changeElected:this.changeElected,elected:u,removeItem:l}))}}]),t}(n.Component),L=function(e){function t(){return Object(d.a)(this,t),Object(h.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props,t=e.selectItem,a=e.removeItem,n=e.moveUp,c=e.moveDown,o=e.changeElected,l=e.pathList;return r.a.createElement("div",null,l.map(function(e){return r.a.createElement(F,{key:e.id,selectItem:t,removeItem:a,moveUp:n,moveDown:c,changeElected:o,isElected:e.elected,id:e.id,title:e.title,shortDesc:e.shortDesc,fullDesc:e.fullDesc})}))}}]),t}(n.Component),T=function(e){function t(e){var a;return Object(d.a)(this,t),(a=Object(h.a)(this,Object(p.a)(t).call(this,e))).componentDidMount=Object(u.a)(i.a.mark(function e(){var t,n;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.collection("data").orderBy("elected","desc").get();case 2:t=e.sent,n=t.docs.map(S),a.setState({data:n});case 5:case"end":return e.stop()}},e)})),a.addPathToList=function(){var e=Object(u.a)(i.a.mark(function e(t,n,r){var c,o,s;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.collection("data").add({title:t,shortDesc:n,fullDesc:r,elected:!1});case 2:return c=e.sent,e.next=5,c.get();case 5:o=e.sent,s=S(o),a.setState(function(e){var t=e.data;return{data:[].concat(Object(l.a)(t),[s])}}),a.toggleForm();case 9:case"end":return e.stop()}},e)}));return function(t,a,n){return e.apply(this,arguments)}}(),a.toggleForm=function(){a.setState(function(e){return{showForm:!e.showForm}})},a.search=function(e,t){return 0===t.length?e:e.filter(function(e){return e.title.includes(t)||e.fullDesc.includes(t)})},a.onSearchChange=function(e){a.setState({query:e.target.value})},a.selectItem=function(e,t){e.preventDefault();var n=a.state.data.findIndex(function(e){return e.id===t});a.setState({selectedIndex:n})},a.removeItem=function(){var e=Object(u.a)(i.a.mark(function e(t,n){var r,c;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,C.doc("data/".concat(n)).delete();case 3:r=a.state.data,c=r.filter(function(e){return e.id!==n}),a.setState({data:c});case 6:case"end":return e.stop()}},e)}));return function(t,a){return e.apply(this,arguments)}}(),a.moveUp=function(e,t){var n=a.state,r=n.data,c=n.selectedIndex;if(c>0||null!==c){var o=r.splice(c,1);a.setState(function(e){return{data:[].concat(Object(l.a)(o),Object(l.a)(e.data)),selectedIndex:null}})}a.selectItem(e,t)},a.moveDown=function(e,t){var n=a.state,r=n.data,c=n.selectedIndex,o=r.splice(c,1);a.setState(function(e){return{data:[].concat(Object(l.a)(e.data),Object(l.a)(o)),electedIndex:null}}),a.selectItem(e,t)},a.state={data:[],showForm:!1,query:"",id:null,selectedIndex:null},a}return Object(f.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.state,t=e.data,a=e.showForm,n=e.query,c=this.search(t,n);return r.a.createElement(v.a,null,r.a.createElement(I.a,{className:"d-flex justify-content-between header"},r.a.createElement(I.a.Brand,{href:"#home"},"Saunter"),r.a.createElement(b.a,{onClick:this.toggleForm,disabled:!!a},"Add path")),a?r.a.createElement(D,{addPathToList:this.addPathToList,toggleForm:this.toggleForm}):null,r.a.createElement(w.a.Container,{id:"list-group-tabs-example"},r.a.createElement(v.a,{className:"main-container"},r.a.createElement(y.a,null,r.a.createElement(g.a,{md:6,className:"search"},r.a.createElement(E.a.Control,{type:"text",placeholder:"Search...",className:"pr-5",value:n,onChange:this.onSearchChange}))),r.a.createElement(L,{pathList:c,selectItem:this.selectItem,removeItem:this.removeItem,moveUp:this.moveUp,moveDown:this.moveDown,changeElected:this.changeElected}))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(T,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[45,1,2]]]);
//# sourceMappingURL=main.13f45cbc.chunk.js.map