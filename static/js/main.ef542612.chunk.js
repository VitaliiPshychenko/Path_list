(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{177:function(e,t,a){e.exports=a(395)},183:function(e,t,a){},185:function(e,t,a){},395:function(e,t,a){"use strict";a.r(t);a(178);var n=a(0),r=a.n(n),l=a(39),c=a.n(l),o=(a(183),a(47)),s=a(31),i=a.n(s),m=a(80),u=a(40),d=a(41),p=a(44),h=a(42),f=a(45),v=(a(185),a(397)),g=a(173),E=a(399),b=a(403),y=a(81);var x=Object(y.withScriptjs)(Object(y.withGoogleMap)(function(e){return r.a.createElement(y.GoogleMap,{defaultZoom:10,defaultCenter:{lat:49.26,lng:32.03}})})),D=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(p.a)(this,Object(h.a)(t).call(this,e))).onTitleChange=function(e){a.setState({pathName:e.target.value})},a.onShortDescChange=function(e){a.setState({shortDescription:e.target.value})},a.onFullDescChange=function(e){a.setState({fullDescription:e.target.value})},a.onSubmit=function(e){e.preventDefault(),a.props.addPathToList(a.state.pathName,a.state.shortDescription,a.state.fullDescription),a.setState({pathName:"",shortDescription:"",fullDescription:""})},a.state={pathName:"",shortDescription:"",fullDescription:""},a}return Object(f.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.state,t=e.pathName,a=e.shortDescription,n=e.fullDescription;return r.a.createElement(v.a,{className:"bg-light add-path-container justify-content-start"},r.a.createElement("button",{type:"button",className:"close","aria-label":"Close",onClick:this.props.toggleForm},r.a.createElement("span",{"aria-hidden":"true"},"\xd7")),r.a.createElement(g.a,{xs:6},r.a.createElement(E.a,{onSubmit:this.onSubmit},r.a.createElement(E.a.Group,null,r.a.createElement(E.a.Label,null,"Title"),r.a.createElement(E.a.Control,{type:"text",value:t,onChange:this.onTitleChange})),r.a.createElement(E.a.Group,{controlId:"exampleForm.ControlTextarea1"},r.a.createElement(E.a.Label,null,"Short description"),r.a.createElement(E.a.Control,{as:"textarea",rows:"3",maxLength:"160",value:a,onChange:this.onShortDescChange})),r.a.createElement(E.a.Group,{controlId:"exampleForm.ControlTextarea1"},r.a.createElement(E.a.Label,null,"Full description"),r.a.createElement(E.a.Control,{as:"textarea",rows:"4",value:n,onChange:this.onFullDescChange})),r.a.createElement(E.a.Group,null,r.a.createElement(E.a.Text,null,"Length")),r.a.createElement(b.a,{variant:"primary",type:"submit"},"Add path"))),r.a.createElement(g.a,{xs:6},r.a.createElement(x,{googleMapURL:"https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyBz7Oa8C8MOOd20FJSUaYQc0lrlLkvn0m4",loadingElement:r.a.createElement("div",{style:{height:"400px"}}),containerElement:r.a.createElement("div",{style:{height:"400px"}}),mapElement:r.a.createElement("div",{style:{height:"400px"}})})))}}]),t}(n.Component),w=a(400),I=a(401),C=a(398),S=a(55),O=a.n(S);a(385);O.a.initializeApp({apiKey:"AIzaSyDOiyHKJdnV8ZVxFN6N_h6RFK9evCnDoTw",authDomain:"list-of-paths.firebaseapp.com",databaseURL:"https://list-of-paths.firebaseio.com",projectId:"list-of-paths",storageBucket:"",messagingSenderId:"31567877341",appId:"1:31567877341:web:a60d29794325afa2"});var j=O.a.firestore();window.firebase=O.a;O.a;var k=a(176),F=function(e){return Object(k.a)({id:e.id},e.data())},N=a(402);function L(e){var t=e.display,a=e.id,n=e.title,l=e.fullDesc,c=e.changeElected,o=e.elected,s=e.removeItem,i=t?"desc active":"desc not-active";return r.a.createElement(g.a,{md:6,className:i},r.a.createElement(I.a.Content,{className:" pr-2 pb-2"},r.a.createElement(I.a.Pane,{eventKey:"".concat(a)},r.a.createElement("h3",null,n),r.a.createElement("p",null,l),r.a.createElement(x,{googleMapURL:"https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyBz7Oa8C8MOOd20FJSUaYQc0lrlLkvn0m4",loadingElement:r.a.createElement("div",{style:{height:"400px"}}),containerElement:r.a.createElement("div",{style:{height:"400px"}}),mapElement:r.a.createElement("div",{style:{height:"400px"}})}),r.a.createElement("div",{className:"d-flex align-items-end flex-column mt-2"},r.a.createElement("a",{href:"1",className:"text-primary d-block",onClick:c},o?"Remove from favorites":"Add to favorites"),r.a.createElement("a",{href:"2",className:"text-danger d-block",onClick:function(e){return s(e,a)}},"Remove")))))}var T=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(p.a)(this,Object(h.a)(t).call(this,e))).componentDidMount=function(){a.setState({elected:a.props.isElected})},a.updateElected=function(e){j.doc("data/".concat(a.props.id)).update({elected:!e})},a.displayItem=function(){a.setState({display:!0})},a.toggleItem=function(){a.setState(function(e){return{display:!e.display}})},a.changeElected=function(e,t){e.preventDefault();var n=a.state.elected;n?(a.toggleItem(),a.setState(function(e){return{elected:!e.elected}}),a.props.moveDown(e,t)):(a.toggleItem(),a.setState(function(e){return{elected:!e.elected}}),a.props.moveUp(e,t)),a.updateElected(n)},a.state={elected:null,display:!1},a}return Object(f.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.props,t=e.title,a=e.shortDesc,n=e.fullDesc,l=e.id,c=e.selectItem,o=e.removeItem,s=this.state,i=s.display,m=s.elected,u=m?"position-relative elected":"position-relative";return r.a.createElement(r.a.Fragment,null,r.a.createElement(g.a,{md:6,onClick:this.displayItem,className:"mb-1 pl-0"},r.a.createElement(N.a,null,r.a.createElement(N.a.Item,{action:!0,href:"".concat(l),onClick:function(e){return c(e,l)}},r.a.createElement("h5",{className:u},t),r.a.createElement("p",null,a)))),r.a.createElement(L,{display:i,id:l,title:t,fullDesc:n,changeElected:this.changeElected,elected:m,removeItem:o}))}}]),t}(n.Component);function U(e){var t=e.selectItem,a=e.removeItem,n=e.moveUp,l=e.moveDown,c=e.changeElected,o=e.pathList;return r.a.createElement("div",null,o.map(function(e){return r.a.createElement(T,{key:e.id,selectItem:t,removeItem:a,moveUp:n,moveDown:l,changeElected:c,isElected:e.elected,id:e.id,title:e.title,shortDesc:e.shortDesc,fullDesc:e.fullDesc})}))}var M=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(p.a)(this,Object(h.a)(t).call(this,e))).componentDidMount=Object(m.a)(i.a.mark(function e(){var t,n;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.collection("data").orderBy("elected","desc").get();case 2:t=e.sent,n=t.docs.map(F),a.setState({data:n});case 5:case"end":return e.stop()}},e)})),a.addPathToList=function(){var e=Object(m.a)(i.a.mark(function e(t,n,r){var l,c,s;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.collection("data").add({title:t,shortDesc:n,fullDesc:r,elected:!1});case 2:return l=e.sent,e.next=5,l.get();case 5:c=e.sent,s=F(c),a.setState(function(e){var t=e.data;return{data:[].concat(Object(o.a)(t),[s])}}),a.toggleForm();case 9:case"end":return e.stop()}},e)}));return function(t,a,n){return e.apply(this,arguments)}}(),a.toggleForm=function(){a.setState(function(e){return{showForm:!e.showForm}})},a.search=function(e,t){return 0===t.length?e:e.filter(function(e){return e.title.includes(t)||e.fullDesc.includes(t)})},a.onSearchChange=function(e){a.setState({query:e.target.value})},a.selectItem=function(e,t){e.preventDefault();var n=a.state.data.findIndex(function(e){return e.id===t});a.setState({selectedIndex:n})},a.removeItem=function(){var e=Object(m.a)(i.a.mark(function e(t,n){var r,l;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,j.doc("data/".concat(n)).delete();case 3:r=a.state.data,l=r.filter(function(e){return e.id!==n}),a.setState({data:l});case 6:case"end":return e.stop()}},e)}));return function(t,a){return e.apply(this,arguments)}}(),a.moveUp=function(e,t){var n=a.state,r=n.data,l=n.selectedIndex;if(l>0||null!==l){var c=r.splice(l,1);a.setState(function(e){return{data:[].concat(Object(o.a)(c),Object(o.a)(e.data)),selectedIndex:null}})}a.selectItem(e,t)},a.moveDown=function(e,t){var n=a.state,r=n.data,l=n.selectedIndex,c=r.splice(l,1);a.setState(function(e){return{data:[].concat(Object(o.a)(e.data),Object(o.a)(c)),selectedIndex:null}}),a.selectItem(e,t)},a.state={data:[],showForm:!1,query:"",id:null,selectedIndex:null},a}return Object(f.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.state,t=e.data,a=e.showForm,n=e.query,l=this.search(t,n);return r.a.createElement(v.a,null,r.a.createElement(w.a,{className:"d-flex justify-content-between header"},r.a.createElement(w.a.Brand,{href:"#home"},"Saunter"),r.a.createElement(b.a,{onClick:this.toggleForm,disabled:!!a},"Add path")),a?r.a.createElement(D,{addPathToList:this.addPathToList,toggleForm:this.toggleForm}):null,r.a.createElement(I.a.Container,{id:"list-group-tabs-example"},r.a.createElement(v.a,{className:"main-container"},r.a.createElement(C.a,null,r.a.createElement(g.a,{md:6,className:"search"},r.a.createElement(E.a.Control,{type:"text",placeholder:"Search...",className:"pr-5",value:n,onChange:this.onSearchChange}))),r.a.createElement(U,{pathList:l,selectItem:this.selectItem,removeItem:this.removeItem,moveUp:this.moveUp,moveDown:this.moveDown,changeElected:this.changeElected}))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(M,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[177,1,2]]]);
//# sourceMappingURL=main.ef542612.chunk.js.map