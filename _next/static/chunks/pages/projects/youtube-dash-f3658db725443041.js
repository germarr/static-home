(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[449],{1401:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/projects/youtube-dash",function(){return s(4771)}])},4771:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return b}});var n=s(5666),i=s.n(n),l=s(5893),a=s(9008);var r=function(e){var t=e.status,s=e.title,n=e.img,i=e.views,a=e.likes,r=e.comments,o=e.link,c=e.published;return(0,l.jsxs)("div",{className:"flex-row justify-items-center bg-gray-50 shadow-lg rounded-md p-5",children:[(0,l.jsx)("div",{className:"flex justify-center mb-1",children:(0,l.jsx)("h1",{className:"text-gray-800 font-semibold text-xl",children:t})}),(0,l.jsx)("div",{className:"flex justify-center mb-3",children:(0,l.jsx)("p",{className:"text-gray-700 font-medium text-sm",children:s})}),(0,l.jsx)("div",{className:"flex justify-center mb-3",children:(0,l.jsx)("a",{href:o,target:"_blank",rel:"noreferrer",children:(0,l.jsx)("img",{title:s,className:"rounded-sm shadow-md",src:n,alt:s})})}),(0,l.jsxs)("div",{className:"lg:ml-12 ml-1",children:[(0,l.jsxs)("p",{className:"text-gray-600 font-semibold",children:["Views: ",(0,l.jsx)("span",{className:"text-gray-600 font-light text-sm",children:i})]}),(0,l.jsxs)("p",{className:"text-gray-600 font-semibold",children:["Likes: ",(0,l.jsx)("span",{className:"text-gray-600 font-light text-sm",children:a})]}),(0,l.jsxs)("p",{className:"text-gray-600 font-semibold",children:["Comments: ",(0,l.jsx)("span",{className:"text-gray-600 font-light text-sm",children:r})]}),(0,l.jsxs)("p",{className:"text-gray-600 font-semibold",children:["Date: ",(0,l.jsx)("span",{className:"text-gray-600 font-light text-sm",children:c.split("T")[0]})]})]})]})};function o(e){var t=e.title,s=e.data,n=e.text;return(0,l.jsxs)("div",{className:"bg-white shadow-md rounded-lg py-3",children:[(0,l.jsx)("div",{className:"flex justify-center mb-1 text-gray-700 font-semibold",children:(0,l.jsx)("h1",{children:t})}),(0,l.jsx)("div",{className:"flex justify-center mb-1 text-gray-700 font-medium text-sm",children:(0,l.jsx)("p",{children:s})}),(0,l.jsx)("div",{className:"flex justify-center mb-1 text-gray-700 font-extralight text-xs",children:(0,l.jsx)("p",{children:n})})]})}function c(e){var t=e.tableData;return(0,l.jsxs)("table",{className:"border-separate border border-gray-500",children:[(0,l.jsx)("thead",{className:"bg-gray-400",children:(0,l.jsxs)("tr",{className:"p-4",children:[(0,l.jsx)("th",{children:"Title"}),(0,l.jsx)("th",{className:"px-5",children:"PublishedAt"})]})}),(0,l.jsx)("tbody",{children:t.map((function(e){var t=e.title,s=(e.viewCount,e.commentCount,e.publishedAt),n=e.video_id,i=(e.likeCount,e.link);return(0,l.jsxs)("tr",{className:"hover:bg-gray-300",children:[(0,l.jsx)("a",{href:i,rel:"noreferrer",target:"_blank",title:t,className:"cursor-pointer hover:text-gray-400",children:(0,l.jsx)("td",{className:"text-gray-600",children:t})}),(0,l.jsx)("td",{className:"text-gray-600 text-center",children:s.split("T")[0]})]},n)}))})]})}var d=s(508);function m(e){for(var t=e.data,s=t.views,n=t.title,i=[],a=0;a<s.length;a++)i.push(t.dates[a].slice(0,10));return(0,l.jsxs)("div",{className:"bg-white rounded-md shadow-sm p-5",children:[(0,l.jsx)("div",{className:"font-semibold text-lg text-gray-700",children:"Total Views."}),(0,l.jsx)(d.x1,{data:{labels:i,datasets:[{label:"# of Views",data:s,backgroundColor:["rgba(255, 99, 132, 0.2)"],borderColor:["rgba(255, 99, 132, 1)"],borderWidth:1}]},height:50,width:150,options:{maintainAspectRatio:!0,scales:{y:{beginAtZero:!0}},plugins:{tooltip:{displayColors:!1,callbacks:{title:function(e,t){var s=e[0];return console.log(">>>>>>",s.dataIndex),n[s.dataIndex]}}}}}})]})}var x,u=s(7294);function h(e,t,s,n,i,l,a){try{var r=e[l](a),o=r.value}catch(c){return void s(c)}r.done?t(o):Promise.resolve(o).then(n,i)}function g(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}var v={items:{0:{most_views:{title:"",publishedAt:"",viewCount:0,likeCount:0,dislikeCount:0,commentCount:0,thumbnail:"https://via.placeholder.com/320x180.png?text=TBD",link:"",id:""},less_views:{title:"",publishedAt:"",viewCount:0,likeCount:0,dislikeCount:0,commentCount:0,thumbnail:"https://via.placeholder.com/320x180.png?text=TBD",link:"",id:""},most_recent:{title:"",publishedAt:"",viewCount:0,likeCount:0,dislikeCount:0,commentCount:0,thumbnail:"https://via.placeholder.com/320x180.png?text=TBD",link:"",id:""}},1:{dislikes:0,likes:0,comments:0,total_time:0},2:{views:50*[0],dates:50*["2021-05-01"],title:50*["TBD"]},3:{},4:{},5:{channel_name:"Wating for Channel Info.",country:"",channel_main_stats:{viewCount:0,subscriberCount:0,hiddenSubscriberCount:!1,videoCount:0}},6:[(x={title:"",publishedAt:"",viewCount:"",commentCount:""},g(x,"publishedAt",""),g(x,"video_id",""),g(x,"likeCount",""),g(x,"link",""),x)]}};function b(){var e,t=(0,u.useState)(""),s=t[0],n=t[1],d=(0,u.useState)(v.items),x=d[0],g=d[1],b=(e=i().mark((function e(t){var n,l;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),console.log(s),e.prev=2,e.next=5,fetch("https://api.gmarr.me/youtube_dash/".concat(s.split("?").pop()));case 5:return n=e.sent,e.next=8,n.json();case 8:l=e.sent,console.log(n),g(l.items),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(2),console.log(e.t0);case 16:case"end":return e.stop()}}),e,null,[[2,13]])})),function(){var t=this,s=arguments;return new Promise((function(n,i){var l=e.apply(t,s);function a(e){h(l,n,i,a,r,"next",e)}function r(e){h(l,n,i,a,r,"throw",e)}a(void 0)}))});console.log("---\x3e",x[2]);var p=x[5].country;return(0,l.jsxs)("div",{className:"bg-gray-200 py-1",children:[(0,l.jsxs)(a.default,{children:[(0,l.jsx)("title",{children:"Youtube Dashboard"}),(0,l.jsx)("meta",{name:"description",content:"Generated by create next app"}),(0,l.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,l.jsxs)("div",{className:"flex items-center",children:[(0,l.jsxs)("div",{className:"m-5",children:[(0,l.jsx)("h1",{className:"text-2xl text-gray-800 font-extrabold",children:"Youtube Dashboard"}),(0,l.jsx)("p",{className:"text-lg text-gray-700",children:"Check the main stats of your favorite Youtube channel."})]}),(0,l.jsx)("form",{action:"",onSubmit:b,onChange:function(e){return n(e.target.value)},children:(0,l.jsxs)("div",{className:"bg-white shadow p-2 flex",children:[(0,l.jsx)("input",{className:"w-full rounded p-2 text-gray-800 focus:outline-none focus:ring focus:border-blue-300",type:"text",placeholder:"Paste video URL."}),(0,l.jsx)("button",{className:"bg-red-400 hover:bg-red-300 rounded text-white p-2 pl-4 pr-4",children:(0,l.jsx)("p",{className:"font-semibold text-xs",children:"Search"})})]})})]}),(0,l.jsxs)("div",{children:[(0,l.jsx)("div",{className:"text-2xl font-extrabold",children:(0,l.jsx)("h1",{})}),(0,l.jsxs)("div",{className:"flex ml-5 items-center",children:[(0,l.jsxs)("h1",{className:"text-xl text-gray-800 font-bold",children:["Channel Title: ",(0,l.jsx)("span",{className:"text-xl text-gray-800 font-medium",children:x[5].channel_name})]}),(0,l.jsx)("img",{title:x[5].country,className:"ml-3",src:"https://www.countryflags.io/".concat(p,"/flat/32.png")})]}),(0,l.jsxs)("div",{className:"grid lg:grid-cols-7 md:grid-cols-3 grid-cols-2 gap-1 m-5",children:[(0,l.jsx)(o,{title:"Subscribers",data:parseInt(x[5].channel_main_stats.subscriberCount).toLocaleString("en-US")}),(0,l.jsx)(o,{title:"Published Videos",data:parseInt(x[5].channel_main_stats.videoCount).toLocaleString("en-US")}),(0,l.jsx)(o,{title:"Total Views",data:parseInt(x[5].channel_main_stats.viewCount).toLocaleString("en-US"),text:"(Last 1,000 videos)"}),(0,l.jsx)(o,{title:"Total Likes",data:x[1].likes.toLocaleString("en-US"),text:"(Last 1,000 videos)"}),(0,l.jsx)(o,{title:"Total Dislikes",data:x[1].dislikes.toLocaleString("en-US"),text:"(Last 1,000 videos)"}),(0,l.jsx)(o,{title:"Total Comments",data:x[1].comments.toLocaleString("en-US"),text:"(Last 1,000 videos)"}),(0,l.jsx)(o,{title:"Total Hours of Content",data:Math.ceil(x[1].total_time.toLocaleString("en-US")),text:"(Last 1,000 videos)"})]})]}),(0,l.jsxs)("div",{className:"grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-4 m-5",children:[(0,l.jsx)(r,{status:"Most Recent Video",title:x[0].most_recent.title,img:x[0].most_recent.thumbnail,views:x[0].most_recent.viewCount.toLocaleString("en-US"),likes:x[0].most_recent.likeCount.toLocaleString("en-US"),comments:x[0].most_recent.commentCount.toLocaleString("en-US"),link:x[0].most_recent.link,published:x[0].most_recent.publishedAt}),(0,l.jsx)(r,{status:"Most Watched",title:x[0].most_views.title,img:x[0].most_views.thumbnail,views:x[0].most_views.viewCount.toLocaleString("en-US"),likes:x[0].most_views.likeCount.toLocaleString("en-US"),comments:x[0].most_views.commentCount.toLocaleString("en-US"),link:x[0].most_views.link,published:x[0].most_views.publishedAt}),(0,l.jsx)(r,{status:"Less Watched",title:x[0].less_views.title,img:x[0].less_views.thumbnail,views:x[0].less_views.viewCount.toLocaleString("en-US"),likes:x[0].less_views.likeCount.toLocaleString("en-US"),comments:x[0].less_views.commentCount.toLocaleString("en-US"),link:x[0].less_views.link,published:x[0].less_views.publishedAt})]}),(0,l.jsxs)("div",{className:"grid grid-cols-1 gap-4 lg:grid-cols-3 m-5",children:[(0,l.jsxs)("div",{className:"col-span-2",children:[(0,l.jsx)("div",{className:"mt-1 mb-5",children:(0,l.jsx)("h1",{className:"text-xl text-gray-800 font-bold",children:"Main Stats."})}),(0,l.jsx)(m,{data:x[2]})]}),(0,l.jsxs)("div",{children:[(0,l.jsx)("div",{className:"mt-1 mb-5",children:(0,l.jsx)("h1",{className:"text-xl text-gray-800 font-bold",children:"Last 10 videos of the channel. "})}),(0,l.jsx)(c,{tableData:x[6]})]})]})]})}}},function(e){e.O(0,[570,952,774,888,179],(function(){return t=1401,e(e.s=t);var t}));var t=e.O();_N_E=t}]);