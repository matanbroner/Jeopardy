(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,a){},15:function(e){e.exports={data:[{category:"Purim Food",questions:[{points:100,question:"What do we eat on Purim?",answer:"Hamentashen"},{points:200,question:"Why do we eat Hamentashen?",answer:"As a symbol of Haman's ear!"},{points:300,question:"What is the Hebrew name for Hamentashen?",answer:"Oznei Haman"},{points:400,question:"Name at least two fillings that are put in Hamentashen.",answer:"Chocolate, Jelly, Poppy Seeds"},{points:500,question:"True or False: On purim we eat a lot of oily foods, such as Sufganiyot.",answer:"False, oily foods are eaten on Hannukah!"}]},{category:"Characters",questions:[{points:100,question:"Who is the 'bad guy' in the Purim story?",answer:"Haman"},{points:200,question:"True or False: Vashti was Jewish.",answer:"False"},{points:300,question:"What was Esther's Hebrew name?",answer:"Hadasa"},{points:400,question:"Why did King Achashverosh banish Vashti from his kingdom?",answer:"She refused to attend the large party he was hosting."},{points:500,question:"Name all the important people in the Megillah (Hint: Five people)",answer:"Esther, Mordechai, Vashti, Achashverosh, Haman"}]},{category:"Megillah Facts",questions:[{points:100,question:"What is a Megillah?",answer:"A scroll"},{points:200,question:"What did Haman use his dice for?",answer:"To decide on what day the Jews would be killed!"},{points:300,question:"What is special about the date 'Yud-Gimel of Adar'?",answer:"It is the date of the Fast of Esther"},{points:400,question:"Who led Mordechai on his horse?",answer:"Haman, as a punishment"},{points:500,question:"What was the relationship between Esther and Mordechai?",answer:"Mordechai was her uncle."}]},{category:"Customs",questions:[{points:100,question:"When is the Megillah read?",answer:"On Purim!"},{points:200,question:"What is the most famous custom to perform on Purim?",answer:"Dress in costumes"},{points:300,question:"What is the name of the gifts we recieve on Purim?",answer:"Mishloach Manot"},{points:400,question:"True or False: Purim has different names in Hebrew and English.",answer:"False"},{points:500,question:"Sing the first line of a famous Purim song!",answer:"Chag Purim, Chag Purim, Chag Gadol LaYeladim!"}]}]}},17:function(e,t,a){e.exports=a(30)},30:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),i=a(14),o=a.n(i),r=a(2),l=a(3),c=a(5),u=a(4),m=a(6),d=a(15),h=a(9),p=a.n(h),f=a(7),v=a(8),y=a(1),b=(a(11),function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={question:!1},a.generateQuestion=a.generateQuestion.bind(Object(y.a)(Object(y.a)(a))),a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.setState({question:this.props.question})}},{key:"generateQuestion",value:function(e){this.state.question.solved||this.props.handleClick(this.state.question)}},{key:"render",value:function(){return s.a.createElement("div",{className:"col-md-2"},s.a.createElement("div",{className:"cardBody",onClick:this.generateQuestion},s.a.createElement("div",{className:this.state.question.solved?"solvedCard":"cardContent"},s.a.createElement("span",{className:"col-md-12 cardPoints"},this.state.question.points))))}}]),t}(s.a.PureComponent)),g=a(16),w=a.n(g),E=a(28),k={backgroundColor:"#7db2e0",color:"#ffffff",padding:"50px",height:"500px",marginTop:"-300px",borderRadius:"10px"},q=[{name:"Red Team",color:"#FF0000",points:0},{name:"Blue Team",color:"#0000FF",points:0}],C=[{name:"Orange Team",color:"#ff8e1c",points:0},{name:"Purple Team",color:"#b91bf9",points:0},{name:"Pink Team",color:"#ff00b4",points:0}],N=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={data:null,categories:null,rows:null,modal:{reveal:!1,question:null,answer:null,points:null,id:null},tally:{questionCount:0,solvedQuestions:0}},a.handleCardClick=a.handleCardClick.bind(Object(y.a)(Object(y.a)(a))),a.resetModal=a.resetModal.bind(Object(y.a)(Object(y.a)(a))),a.addTeam=a.addTeam.bind(Object(y.a)(Object(y.a)(a))),a.removeTeam=a.removeTeam.bind(Object(y.a)(Object(y.a)(a))),a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=[],t=0,a=this.props.data;a.forEach(function(a){e.push(a.category),a.questions.forEach(function(e){t++,e.solved=!1,e.id=E()})}),this.setState({categories:[].concat(e),data:a,teams:[].concat(q),tally:Object(v.a)({},this.state.tally,{questionCount:t})},function(){this.createGrid()})}},{key:"handleCardClick",value:function(e){var t=Object(v.a)({},this.state.modal);t.question=e.question,t.answer=e.answer,t.points=e.points,t.id=e.id,this.setState({modal:t}),this.questionModal.show()}},{key:"resetModal",value:function(){this.setState({modal:Object(v.a)({},this.state.modal,{reveal:!1})})}},{key:"renderModal",value:function(){var e=this,t=this.state.teams.map(function(t){return s.a.createElement("button",{onClick:function(){return e.addPoints(t.name)},key:t.color,className:"modalButton",style:{backgroundColor:"".concat(t.color)}},t.name)});return t.push(s.a.createElement("button",{onClick:function(){return e.addPoints()},key:E(),className:"modalButton",style:{backgroundColor:"#909090"}},"No Points")),s.a.createElement("div",null,s.a.createElement(w.a,{ref:function(t){return e.questionModal=t},title:s.a.createElement("h4",{className:"modalTitle"},this.state.modal.points," Points"),transitionDuration:1e3,closeButtonStyle:{display:"none"},dialogStyles:k,afterClose:this.resetModal},s.a.createElement("div",{className:"modalQuestion"},"Question: ",this.state.modal.question),s.a.createElement("hr",{className:"modalHorizontalRule"}),s.a.createElement("div",{className:this.state.modal.reveal?"answerReveal":"answerHidden"},s.a.createElement("div",{className:"col-md-12 modalAnswer"},"Answer: ",this.state.modal.answer)),s.a.createElement("div",{className:"modalButtonRow"},this.state.modal.reveal?t:s.a.createElement("button",{style:{backgroundColor:"#17b559"},className:"modalButton",onClick:function(){return e.setState({modal:Object(v.a)({},e.state.modal,{reveal:!0})})}},"Reveal Answer"))))}},{key:"renderCategories",value:function(){if(this.state.categories){var e=this.state.categories.map(function(e){return s.a.createElement("h5",{key:E(),className:"col-md-2 header",style:{left:"".concat(e.length<=10?"1%":"0%")}},e)});return s.a.createElement("div",{className:"col-md-11 tableRow"},e)}}},{key:"renderTeams",value:function(){if(this.state.teams)return this.state.teams.map(function(e){return s.a.createElement("div",{key:e.color,className:"col-md-2"},s.a.createElement("div",{className:"pointsMain"},s.a.createElement("div",{className:"pointsHeader"},s.a.createElement("span",{style:{marginRight:"10px"}},e.name),s.a.createElement("i",{style:{color:"".concat(e.color),fontSize:"20px"},className:"fa fa-user","aria-hidden":"true"})),s.a.createElement("div",{className:"pointsDisplay"},e.points)))})}},{key:"renderGameArea",value:function(){return s.a.createElement("div",{className:"mainGameArea"},this.renderCategories(),this.state.rows)}},{key:"renderWinnerArea",value:function(){var e,t=!1,a=[],n=null;return this.state.teams.forEach(function(e){n?e.points===n.points?(t=!0,a.push(n,e),n=e):e.points>n.points&&(t=!1,a=[],n=e):n=e}),t?s.a.createElement("div",{className:"winnerArea"},s.a.createElement("div",{className:"row"},(e=a,(e=Object(f.a)(new Set(e))).map(function(e){return s.a.createElement("div",{className:"col",style:{backgroundColor:"".concat(e.color)},key:E()},s.a.createElement("div",{className:"col-md-12 winnerText"},e.name," tied! ",s.a.createElement("i",{className:"fa fa-thumbs-up","aria-hidden":"true"})))})))):s.a.createElement("div",{className:"winnerArea col-md-12",style:{backgroundColor:"".concat(n.color)}},s.a.createElement("div",{className:"col-md-12 winnerText"},n.name," has won! ",s.a.createElement("i",{className:"fa fa-trophy","aria-hidden":"true"})))}},{key:"addPoints",value:function(){var e,t,a=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,s=[].concat(this.state.teams);n&&(s[this.state.teams.findIndex(function(e){return e.name===n})].points+=this.state.modal.points);for(var i=0;i<this.state.categories.length;i++){var o=this.state.data[i].questions.findIndex(function(e){return e.id===a.state.modal.id});if(o>=0){t=o,e=i;break}}var r=[].concat(this.state.data);r[e].questions[t].solved=!0;var l=this.state.tally.solvedQuestions;this.setState({teams:s,data:r,tally:Object(v.a)({},this.state.tally,{solvedQuestions:++l})},function(){this.createGrid()}),this.questionModal.hide()}},{key:"addTeam",value:function(){if(this.state.teams.length<q.length+C.length){var e=this.state.teams.length-q.length,t=Object(f.a)(this.state.teams);t.push(C[e]),this.setState({teams:Object(f.a)(t)})}}},{key:"removeTeam",value:function(){if(this.state.teams.length>2){var e=Object(f.a)(this.state.teams);e.pop(),this.setState({teams:Object(f.a)(e)})}}},{key:"createGrid",value:function(){for(var e=this.state.data[0].questions.slice(-1)[0].points/100,t=[],a=0;a<e;a++){for(var n=[],s=0;s<this.state.categories.length;s++){var i=this.state.data[s].questions[a];n.push(i)}t.push(this.createCards(n))}this.setState({rows:t})}},{key:"createCards",value:function(e){var t=this,a=e.map(function(e){return s.a.createElement(b,{key:E(),question:e,handleClick:t.handleCardClick})});return s.a.createElement("div",{key:E(),className:"col-md-11 tableRow"},a)}},{key:"render",value:function(){var e=this.state.tally.solvedQuestions;return s.a.createElement("div",null,this.state.teams?this.renderModal():null,s.a.createElement("div",{className:"pointsBar col-md-12"},s.a.createElement("div",{className:"teamChange",onClick:this.removeTeam},s.a.createElement("i",{className:"fa fa-minus-circle","aria-hidden":"true"})),this.renderTeams(),s.a.createElement("div",{className:"teamChange",onClick:this.addTeam},s.a.createElement("i",{className:"fa fa-plus-circle","aria-hidden":"true"}))),e!==this.state.tally.questionCount||0===e?this.renderGameArea():this.renderWinnerArea())}}]),t}(s.a.PureComponent),O=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={questionData:null,play:!1},document.body.style.zoom="80%",a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.setState({questionData:d.data})}},{key:"renderTitleScreen",value:function(){var e=this;return s.a.createElement("div",{className:"col-md-12 titleScreen"},s.a.createElement("img",{className:"titleLogo",src:p.a}),s.a.createElement("br",null),s.a.createElement("div",{className:"playScreenText"},"Welcome to Purim Jeopardy!"),s.a.createElement("br",null),s.a.createElement("button",{className:"playScreenButton",onClick:function(){return e.setState({play:!0})}},"Start Game"))}},{key:"renderGameScreen",value:function(){return s.a.createElement("div",null,s.a.createElement("h1",{className:"gameTitle col-md-12"},"Purim Jeopardy! ",s.a.createElement("img",{className:"headerLogo",src:p.a})),this.state.questionData?s.a.createElement(N,{data:this.state.questionData}):null)}},{key:"render",value:function(){return s.a.createElement("div",null,this.state.play?this.renderGameScreen():this.renderTitleScreen())}}]),t}(s.a.PureComponent);o.a.render(s.a.createElement(O,null),document.getElementById("root"))},9:function(e,t,a){e.exports=a.p+"static/media/logo.30fa15fe.png"}},[[17,1,2]]]);
//# sourceMappingURL=main.c18cdfe3.chunk.js.map