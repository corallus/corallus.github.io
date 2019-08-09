(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{200:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),c=t(218),i=t(216),r=t(260),s=function(e){var a=e.study;return l.a.createElement("div",{className:"resume-item d-flex flex-column flex-md-row justify-content-between mb-5"},l.a.createElement("div",{className:"resume-content"},l.a.createElement("h3",{className:"mb-0"},a.frontmatter.title),l.a.createElement("div",{className:"subheading mb-3"},a.frontmatter.degree),l.a.createElement("div",{dangerouslySetInnerHTML:{__html:a.html}})),l.a.createElement("div",{className:"resume-date text-md-right"},l.a.createElement("span",{className:"text-primary"},a.frontmatter.date)))},d=function(){var e=r.data.allMarkdownRemark.edges;return l.a.createElement(l.a.Fragment,null,e&&e.length&&e.map(function(e){var a=e.node;return l.a.createElement(s,{study:a,key:a.id})}))},o=t(261),m=(t(29),t(30),t(14),t(50),t(210),t(282)),A=t(262),g=t.n(A),p=(t(18),t(263)),u=t(266),b=t.n(u),f=t(267),w=t.n(f),h=t(268),E=t.n(h),k=t(269),v=t.n(k),S=t(270),N=t.n(S),x=t(271),j=t.n(x),z=t(272),I=t.n(z),R=t(273),y=t.n(R),U=t(274),V=t.n(U),T=t(275),B=t.n(T),L=t(276),C=t.n(L),Q=function(e){var a={react:b.a,angular:w.a,bootstrap:v.a,django:N.a,gulp:I.a,wordpress:j.a,gatsby:V.a,webpack:y.a,jquery:B.a,aws:C.a,sass:E.a}[e.tool];return l.a.createElement(l.a.Fragment,null,l.a.createElement(p.Icon,Object.assign({icon:a},e,{className:"tool-icon"})))},K=function(e){var a=e.project,t=a.frontmatter.toolset;return l.a.createElement(m.a,{border:"secondary",className:"shadow"},a.frontmatter.image&&l.a.createElement("a",{href:a.frontmatter.link,target:"_blank"},l.a.createElement(g.a,{className:"card-img-top",fluid:a.frontmatter.image.childImageSharp.fluid})),l.a.createElement(m.a.Body,null,l.a.createElement(m.a.Title,{as:"h3"},a.frontmatter.title),l.a.createElement(m.a.Text,{dangerouslySetInnerHTML:{__html:a.html}}),l.a.createElement("ul",{className:"list-inline"},t&&Object.keys(t).map(function(e,a){return t[e]&&l.a.createElement("li",{className:"list-inline-item",key:a},l.a.createElement(Q,{tool:e,size:"32",width:"2em"}))}))))},W=t(279),M=function(){var e=o.data.allMarkdownRemark.edges;return l.a.createElement(W.a,null,e&&e.length&&e.map(function(e){var a=e.node;return l.a.createElement(K,{project:a,key:a.id})}))},H=t(277),G=t(281),X=function(e){return l.a.createElement("section",{id:e.id,className:"resume-section p-3 p-lg-5 d-flex flex-column justify-content-center"},e.children)};a.default=function(){return l.a.createElement(c.a,null,l.a.createElement(i.a,{title:"Vincent van Bergen"}),l.a.createElement(X,{id:"about"},l.a.createElement("header",null,l.a.createElement("h1",null,"Vincent ",l.a.createElement("span",{className:"text-primary"},"van Bergen")),l.a.createElement("div",{className:"subheading"},"Johannesburgstraat 9 · 5642EK, Eindhoven · +31 681 506 563  · ",l.a.createElement("a",{href:"mailto:v.vanbergen@gmail.com"},"v.vanbergen@gmail.com"))),l.a.createElement("p",{className:"lead"},"I am experienced in leveraging agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition."),l.a.createElement(G.a,{className:"social-icons"},l.a.createElement(G.a.Link,{href:"https://www.linkedin.com/in/vincent-van-bergen/",className:"ml-0"},l.a.createElement(H.c,{size:"64"})),l.a.createElement(G.a.Link,{href:"#"},l.a.createElement(H.b,{size:"64"})),l.a.createElement(G.a.Link,{href:"#"},l.a.createElement(H.a,{size:"64"})))),l.a.createElement("hr",{className:"d-print-none"}),l.a.createElement(X,{title:"Education",id:"education"},l.a.createElement("header",{className:"mb-5"},l.a.createElement("h2",null,"Education")),l.a.createElement(d,null)),l.a.createElement("hr",{className:"d-print-none"}),l.a.createElement(X,{id:"portfolio"},l.a.createElement("header",null,l.a.createElement("h2",null,"Portfolio")),l.a.createElement(M,null)),l.a.createElement("hr",{className:"d-print-none"}),l.a.createElement(X,{title:"Skills",id:"skills"},l.a.createElement("header",null,l.a.createElement("h2",null,"Skills"))),l.a.createElement("hr",{className:"d-print-none"}),l.a.createElement(X,{title:"Interests",id:"interests"},l.a.createElement("header",null,l.a.createElement("h2",null,"Interests"))))}},206:function(e,a,t){var n;e.exports=(n=t(212))&&n.default||n},211:function(e){e.exports={data:{site:{siteMetadata:{title:"Portfolio Vincent van Bergen"}}}}},212:function(e,a,t){"use strict";t.r(a);t(18);var n=t(0),l=t.n(n),c=t(102);a.default=function(e){var a=e.location,t=e.pageResources;return t?l.a.createElement(c.a,Object.assign({location:a,pageResources:t},t.json)):null}},213:function(e,a,t){e.exports=t.p+"static/avatar-e5f6f8fda1a01f4101c69f82e5831ec9.png"},216:function(e,a,t){"use strict";var n=t(217),l=t(0),c=t.n(l),i=t(228),r=t.n(i);function s(e){var a=e.description,t=e.lang,l=e.meta,i=e.title,s=n.data.site,d=a||s.siteMetadata.description;return c.a.createElement(r.a,{htmlAttributes:{lang:t},title:i,titleTemplate:"%s | "+s.siteMetadata.title,meta:[{name:"description",content:d},{property:"og:title",content:i},{property:"og:description",content:d},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:s.siteMetadata.author},{name:"twitter:title",content:i},{name:"twitter:description",content:d}].concat(l)})}s.defaultProps={lang:"en",meta:[],description:""},a.a=s},217:function(e){e.exports={data:{site:{siteMetadata:{title:"Portfolio Vincent van Bergen",description:"",author:"Vincent van Bergen"}}}}},218:function(e,a,t){"use strict";var n=t(211),l=t(0),c=t.n(l),i=t(66),r=t.n(i);t(206),t(9).default.enqueue,c.a.createContext({});var s=t(280),d=t(281),o=t(213),m=t.n(o),A=function(e){var a=e.siteTitle;return c.a.createElement(s.a,{bg:"primary",variant:"dark",expand:"lg",fixed:"top"},c.a.createElement(s.a.Brand,{href:"#home"},c.a.createElement("span",{className:"d-block d-lg-none"},a),c.a.createElement("span",{className:"d-none d-lg-block"},c.a.createElement("img",{src:m.a,className:"img-fluid img-profile rounded-circle border-1 mx-auto mb-2",alt:"portret"}))),c.a.createElement(s.a.Toggle,{"aria-controls":"basic-navbar-nav"}),c.a.createElement(s.a.Collapse,{id:"basic-navbar-nav"},c.a.createElement(d.a,{className:"mr-auto"},["about","education","portfolio","skills","interests"].map(function(e){return c.a.createElement(r.a,{onClick:function(a){return function(e,a){void 0!==typeof window&&(e.preventDefault(),document.getElementById(a).scrollIntoView({behavior:"smooth",block:"start"}))}(a,e)},to:"/#"+e,className:"nav-link",key:e},e)}))))};A.defaultProps={siteTitle:""};var g=A;t(227),a.a=function(e){var a=e.children,t=n.data;return c.a.createElement(c.a.Fragment,null,c.a.createElement(g,{siteTitle:t.site.siteMetadata.title}),c.a.createElement("main",{className:"container-fluid p-0"},a),c.a.createElement("footer",null,"Last updated: ",(new Date).getFullYear()))}},260:function(e){e.exports={data:{allMarkdownRemark:{edges:[{node:{excerpt:"Minor: Operation management & Logistics",html:"<p><strong>Minor</strong>: Operation management &#x26; Logistics</p>",id:"0c4c6156-60f4-503d-bb25-c825c9dc28e3",frontmatter:{title:"Computer Science",degree:"Bachelor",school:"Eindhoven University of Technology",started:"August 2019",ended:"August 2019"}}},{node:{excerpt:"",html:"",id:"4beb8321-81a9-59a1-83ac-45baf26c7605",frontmatter:{title:"Service Design & Engineering",degree:"1st degree Master",school:"EIT Digital Master School, Aalto University",started:"August 2019",ended:"August 2019"}}},{node:{excerpt:"",html:"",id:"cca82f23-c507-5367-9836-d3feb916110d",frontmatter:{title:"Service Oriented Business Process Management",degree:"2nd degree Master",school:"EIT Digital Master School, Eindhoven University of Technology",started:"August 2019",ended:"August 2019"}}}]}}}},261:function(e){e.exports={data:{allMarkdownRemark:{edges:[{node:{excerpt:"Implementatie frontend",html:"<p>Implementatie frontend</p>",id:"4edcd0c7-1482-5b2c-a7d3-0a944736bd9e",frontmatter:{title:"depauwfase3.nl",customer:"De Realisatie",link:"https://www.depauwfase3.nl/",toolset:{react:null,angular:!0,bootstrap:!0,django:null,gulp:null,wordpress:null,gatsby:null,webpack:null,jquery:null,aws:!0,sass:!0},started:"December 2018",ended:"Invalid date",image:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsSAAALEgHS3X78AAACvUlEQVQoz02R209TWRjF+zTR8WGejAiMODS+of4hPuiDrxgvMWaCIZlonElMGg0ER0NA46WKSHGUoQpoi9ykkIqJTKpyEaKG2II9PZd9Lu3hFNQXk9/sc5TJPKzslZ291v7W+kKapmEYRgBVyWPqCoWPWdSCwuw/U4wN9JB61MOT3hjpoX7ezr3ENAW2kDo1T15R0HSBIQSqqhLyjYQwsS1BtuCQya4yn/9EXnjknK8sKOss6R5vVlymP3i81z6xpBTJfHB5o3zho2pjmYb8xETXdUJCOvvk8/o6HT297Kv/lSN/NNPRFePa/QfUHz5KpCnC8d/Psv/YKU43X+J8aysHjjZy6PQ54n39lMvl/1IGE/qGbmmV8fQTLl9r4n7sCuOpQbrvRYneauLhQAfdvTeI3rxEoi/GwGAPV6MtdHe2kck8x3FK3yrbiKwbOo6wmRHveKBNElfHSesZhvVpetUUT41pUsZLySdIaGmmjBn6tWf8rY3xSiziGJbs8H8T+vkt00LYJqql4ZSLuGurqKaKamuU1lw0ea+IAkXJbdeWXMHybEqei5AeliX1sr7vSxGBqW3ZrORW0AoabrEkNy4oux6eu4qhG5ScIuveGkV5OpYj7z0c2wmm8/WBod+fj40uJ2ZH6Xt+j+GZBGOLQ4zMJxhdGGR0fpCRmSTDcwlG5pIMzT5maiEV9LaxkGDLtm3LUp0APn+6kOTh6ztcGbpA+18XudHXTltXE3/ejnA93kb3ZCd3JzrpSt9iTL71U/lT+no/diiXy+FjeXmZbDZL4kVcPo7S0HqcE2ca+O1OO/WRkxyMNNB49RwtiU5akjEuj0RJTscDTW5Z6le+6UPhcJgN1NaGqa6pZOvPFWzZVsWP2yrYVFnD5mofO9lcUcWm7Tv4YXsNP1VWUf1LJeHdUre3ll17dlFXV8e/uFK/PuuGl+YAAAAASUVORK5CYII=",aspectRatio:1.7777777777777777,src:"/static/add6516a499d666b2e7f8c890e3a3c2a/0826e/img-2019-08-08-123643.png",srcSet:"/static/add6516a499d666b2e7f8c890e3a3c2a/24601/img-2019-08-08-123643.png 256w,\n/static/add6516a499d666b2e7f8c890e3a3c2a/79068/img-2019-08-08-123643.png 512w,\n/static/add6516a499d666b2e7f8c890e3a3c2a/0826e/img-2019-08-08-123643.png 1024w,\n/static/add6516a499d666b2e7f8c890e3a3c2a/0db51/img-2019-08-08-123643.png 1536w,\n/static/add6516a499d666b2e7f8c890e3a3c2a/bf411/img-2019-08-08-123643.png 1920w",sizes:"(max-width: 1024px) 100vw, 1024px"}}}}}},{node:{excerpt:"Implementatie frontend en ontwikkeling E-commerce functionaliteiten",html:"<p>Implementatie frontend en ontwikkeling E-commerce functionaliteiten</p>",id:"0ade40eb-31ac-58ed-9963-81fac71b4ed0",frontmatter:{title:"dna-makelaars.nl",customer:"DNA Makelaars",link:"https://www.dna-makelaars.nl",toolset:{react:null,angular:null,bootstrap:!0,django:null,gulp:!0,wordpress:!0,gatsby:null,webpack:null,jquery:!0,aws:null,sass:!0},started:"December 2017",ended:"Invalid date",image:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsSAAALEgHS3X78AAAC5ElEQVQoz22RX0xTBxTGb5xx+qCJE6IZUwtsT76rL3NzQ6PZjA8zbmzRuWhEzSRmCT6IoKgVwyrFbqEEhNsrLVChIIjUQAttb6HItYXa1j9rpcQgGIO66fjTYvbz4oO6xJP8cvJ9yXdyco5wvaMNd881nJ12boVvExgMogQGUW76CYXCxOMj3L33F+HIHfyq3+frR/b24nD20NXtwiN7MTfUc0JXQr72LMKFC6VIUiWWunpk3wBdjh7snQ6uOWUar7QxFAriD4apqKzGWHmRhuZ2TGYr5UYjF0URa1MLecW/s+Hnvaz7ZjtCa7uNllYJt6cbufcGLm8/3Z3tDP2ZTdCwE3/5bu5bcvHqfsCty2aw7Du8xdtoMldzqa6OGpPEb6e1bJob+GUWgkt243BdJ6hu0h8IYmm+iq3JSp9UgFs8xi3bOXpN+bSdz1F1If66k0Q7DNhbbVguNyPWWjiYX8CGHd+z/vONCN0eH6K5kRpRoqPLicFYwfGisxwpLOHo6VJO6crJK9RSpNVyXq+nqqYahzxAaUkxub/msH//L2z98Sc+W7+W1NQUhGjsPrH4A/UhESLhEH5FvePVJnrsV4jFhhmJxwn43NwdukFoKECv7ELp8+BxduDostNis9JgrUeURP4w6BF4X72c4b/Ev2/17IxqvdWJfx6TfPH0vVHhZTLBHLNJNTQ7y8zf44zLEuMekekno0w9f8qEz8xEXy3TL54x+SjGI9nEY6+JxPMJkmo2OTNFYo7pSYQR/de8y1jtPsakPYyZdvHw0l4e1B4gqt9MrGwLUcO3PHQamZyaYtSuY1j3BSNlWW+ycb36ZeVwKkquylw/nELo3FdEyra/Jli0lkBe+muUQ4sJVuUwOnyPSOMZRuNRAoZsBnIWoRxZwc3cZSjGAwjpyxbwfz5E89F8NEs/ID11ERnLF6ssQZOykE81K8lYuYK0+QIZq9PIXPUxmuXz0GgWkPnJQtZkpvEKHCqAUR9uTY0AAAAASUVORK5CYII=",aspectRatio:1.7777777777777777,src:"/static/4b087584af3157440a8f549ecf5c96e5/0826e/img-2019-08-08-123550.png",srcSet:"/static/4b087584af3157440a8f549ecf5c96e5/24601/img-2019-08-08-123550.png 256w,\n/static/4b087584af3157440a8f549ecf5c96e5/79068/img-2019-08-08-123550.png 512w,\n/static/4b087584af3157440a8f549ecf5c96e5/0826e/img-2019-08-08-123550.png 1024w,\n/static/4b087584af3157440a8f549ecf5c96e5/0db51/img-2019-08-08-123550.png 1536w,\n/static/4b087584af3157440a8f549ecf5c96e5/bf411/img-2019-08-08-123550.png 1920w",sizes:"(max-width: 1024px) 100vw, 1024px"}}}}}},{node:{excerpt:"Een webapp voor het bijhouden van een ranking op basis van het Elo systeem. Werkt ook offline met synchronisatie achteraf door middel van de Google Cloud Firestore",html:"<p>Een webapp voor het bijhouden van een ranking op basis van het Elo systeem. Werkt ook offline met synchronisatie achteraf door middel van de Google Cloud Firestore</p>",id:"6871c30d-f32b-5079-af5d-0a88492a36d9",frontmatter:{title:"Elo Scoreboard",customer:"Dispuut Baldr",link:"https://beerpong.dispuutbaldr.com",toolset:{react:null,angular:!0,bootstrap:!0,django:null,gulp:null,wordpress:null,gatsby:null,webpack:null,jquery:null,aws:null,sass:!0},started:"November 2018",ended:"Invalid date",image:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsSAAALEgHS3X78AAAB6ElEQVQoz3WRzUsbQRjG9xwoguKhniQkWYSCofXkP9FTLx7ECvUgCC028SBeAqJoQcQ2BAypFMmWtkppyEkofiC1hygiAS/ixUMhmK9Nsl8z+zgz2213/Bh49mWYZ3/v+8woRqcDy7KEKKVwXVcSX5TVk1wa5Z0itnbzKP7SYBBTnAmPZxNL4R/HcdButwXUNwnxBnzP6vbyJA6zS9hNp5DfSKAF8t+LAJBPZdu2APL6ENAdH4M+PoqV32kMr8VROPokvISSf0kkoGEYIIRIcalLRRzbMTG3l8JSZgzHG8twtc+wC98DkW8BeeRWq3Unsg8kxMFc8S0yX2dRm0/BeL8KXF97Uf0Uf6ESsNlsylMGIv9cmMD+4hRKH9+hkE16jW89ogTkd8ihcmwqTA6bMLs+iWPtAw7evEDpy6qXz4V0fwLIATyqPyFvEBT/wbFN5DYTuEpOASOvcHK6A+18C+U/Z9LDcCn+nZmmKXTvYpPmNqexraVQWnyNi/IBDGrCotYdq1Kv11GtVlGpVFCr1cSUjUYjUHU0mOfb/EvkMzMoriSQTz7H5Q8NnY7BzplHbwrpug4lGo2CKxwOIxKJQFVVxGKxgLx9f2831FAIT3r70PU4hJ7wI6jP2NlT5hmKYWBoAPHBOG4AhJAA9zbw3ikAAAAASUVORK5CYII=",aspectRatio:1.7777777777777777,src:"/static/7e0fc80153ea019e39519999d5a053ae/0826e/img-2019-08-09-162401.png",srcSet:"/static/7e0fc80153ea019e39519999d5a053ae/24601/img-2019-08-09-162401.png 256w,\n/static/7e0fc80153ea019e39519999d5a053ae/79068/img-2019-08-09-162401.png 512w,\n/static/7e0fc80153ea019e39519999d5a053ae/0826e/img-2019-08-09-162401.png 1024w,\n/static/7e0fc80153ea019e39519999d5a053ae/0db51/img-2019-08-09-162401.png 1536w,\n/static/7e0fc80153ea019e39519999d5a053ae/bf411/img-2019-08-09-162401.png 1920w",sizes:"(max-width: 1024px) 100vw, 1024px"}}}}}},{node:{excerpt:"Implementatie frontend",html:"<p>Implementatie frontend</p>",id:"85ae2e70-c136-53f7-ab82-e9b8295819b4",frontmatter:{title:"gigiinconcert.com",customer:"PSG Concerts",link:"http://www.gigiinconcert.com",toolset:{react:!0,angular:null,bootstrap:!0,django:null,gulp:null,wordpress:null,gatsby:!0,webpack:null,jquery:null,aws:!0,sass:!0},started:"June 2019",ended:"Invalid date",image:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsSAAALEgHS3X78AAAC+UlEQVQoz0WRW0xUZxSFT2KcAYQQoONBGGfkcg63dIbhPnKRUYjGEZyWgoCEAaYWgQQE8TLiBTDqA/EeS1QUkzZBTOhD0zR9IZrwoIamMQ2YtDVtaZ/0ZVrInAOY+Pkzkviwsv7svdbK3vuXPjEksdlgJd6YKqAgG1MwGZKJM1rJzyrBVVBMl/cL2ur2srt0B87scuIMFkzGZOFLDunlMPEWelNYElLBNj8OuYesSDdZURWkR1agRJWzLcKJx+Xj68vjPLj9kNGrD/h2bIqGvV1Yw52oQpMhtFlRlcJbRU78UfKtx5E6vE95NLFEbcU0zsSz5MotfGqqIy3GjSWijMp8L83VvdRUdrArt4mt4WWkx1RhM9WTJ7fhNJ+nad8MU480vJ9PI90d/Z2VtzD/Ek71/EZZ2hUciT4yN3tIDCuhpvQww/sPMtjWSUrsTlKid5Fh8pBjbseVeYvz/r/449U7lldh5MIvSP3dz5j6bom/F5b5dX6FOvdzitURMsWkstFFgdXNRI2ba00NmMJLsGwSK8b7KE67RnPtC179uSoCdSYnF+luf4KkivX2ucY57Z/n+vUFzpx5Qffh7/E2jFJbNUyz5xi3fHXcHxymsXqA+s8u0tJ4l57Onxg8N8fNm//iPzbHnpLbpMZ5kOTwHLZsKkXd0sp2+zkOlE/Svv8H+r2PGTn6M99cmOV06w0u9z1kbGiWi32znPTN8FX1j9S7pthuGwp5E0SGHOFASk5wkJqYR+rWPNHYSUfsAgNJOkP2JS4V6vjNb+mNhL7od3RtXOWQpNFpXKInUsNn/IcMcyWKpQjFXERKQi6SpmloQV0cVSfwWuOsBU7EwIAMJ2PhiAG6N0CvETok8AkcjxYfKPp+gcAbjeUVPZSxlhUKDAY1dF1j8b8gE/0BxloD3P/yA4+1BLjXul7zBRg/9IHvNAdC2sX/g+jLImNtsLVARVFRBUKsqtjyFeyFAgUK2YKzi9Z5HfbCj3VbmYKaI7wOhfTsdOw2O+8B5Dvr91ETi/AAAAAASUVORK5CYII=",aspectRatio:1.7777777777777777,src:"/static/3035b0c2ec94deb404a3ac2d382b2bc6/0826e/img-2019-08-08-124801.png",srcSet:"/static/3035b0c2ec94deb404a3ac2d382b2bc6/24601/img-2019-08-08-124801.png 256w,\n/static/3035b0c2ec94deb404a3ac2d382b2bc6/79068/img-2019-08-08-124801.png 512w,\n/static/3035b0c2ec94deb404a3ac2d382b2bc6/0826e/img-2019-08-08-124801.png 1024w,\n/static/3035b0c2ec94deb404a3ac2d382b2bc6/0db51/img-2019-08-08-124801.png 1536w,\n/static/3035b0c2ec94deb404a3ac2d382b2bc6/bf411/img-2019-08-08-124801.png 1920w",sizes:"(max-width: 1024px) 100vw, 1024px"}}}}}},{node:{excerpt:"",html:"",id:"4ab3ea8c-5354-50b8-8654-2729027c3990",frontmatter:{title:"landvanmauve.nl",customer:"De Realisatie",link:"https://www.landvanmauve.nl",toolset:{react:null,angular:!0,bootstrap:!0,django:null,gulp:null,wordpress:null,gatsby:null,webpack:null,jquery:null,aws:!0,sass:!0},started:"June 2019",ended:"Invalid date",image:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsSAAALEgHS3X78AAADE0lEQVQozz2R3U+TBxSH3ysWw9yoLRPdzf6LLYtxGcs0iopONpw4NnHDql0cpVDatJTylm7QFweolH5IbTvoFwXWYdHKR4egZAwrQTP2EQhTw9S4ZHGDRVmevevFLp485/xybs45Qkl7P+/K/Od9rVH2SBHZEdlhdjvCFDki2WyvzK4WuZfzbN8ayc4f+DL2P/vPxBCml1b5bnmVmbtrzN7/m7mVp9z74xlLj9dYfLzKjw//zLLw4Ak/P/ormy//vsbKk3UWHj3lzsNn3H6wzvxv62Tu/4NQH56lMTqLLT5DUyyNNHCN1K1FUnNLMstcurlIMrPEyPxdJhZWmPpphWs/3OOG7N6pX/GM3MZ5eQZn8ls6+gIItcHvMUfnMEUyNPROYIvc4OLITfzjcwTSdwhN/iLX8/hGM7hTGTqHb+EcnqXz0jSOvgR152rQSpWcbq5A5yhH6B+L09Ltwhvvou+ql8SED/c3UToTMbq+7sM7eJnA8CDRdIj45AXiU+1Exq34kwYCqdN4EhrcMoFkDV84P0UYm44iSiKdPge2jnragm5E/xXaYpO4Bq/T3DuKLTiCFE3zuctHa5vIBacexxk1jvPH+SpgpDdRTc+Qjki/A8EV8jB+/QoDqSEa2r00uBK0ha7SERpC8ocZHPAxlvRibNJSVLyLt97cxkflB9m+/Q127CzEVHuMs5KWRklDi1MtP8UzSpWjmzqzgbEhJ+e6JOLxIOmUH2vjUQw1ZZyoOIi6cj8nKw9RevhtamvLOVxSzL7i3VRVfYIollPXJN/QrkOwnq/D1FyF5uQHRLpFLIaj9HqMxC7WY9QfQas9QmFhIa9vexXRfoxYTz3xHitBtwW7eBybpRRLywG0djNaawmCwbIDvWkP5sYyzJZKaozvU61/D62uFHPDx2g/+1BesQj1iTLaJR1hn5Wor4mz9lOYzXupFg+hNunRGN6hQvMaQn7BRvJUOWzemsdLWxQoVM+hVG1AlZ+LUpmLYpOMIpetm/NR5inY+MIGFC8+n8025eeQV1CA4hUlipdzKNii4l8wRkSVKQpl4gAAAABJRU5ErkJggg==",aspectRatio:1.7777777777777777,src:"/static/3b5d214bf7d6c44d47ed2c0198592796/0826e/img-2019-08-08-123734.png",srcSet:"/static/3b5d214bf7d6c44d47ed2c0198592796/24601/img-2019-08-08-123734.png 256w,\n/static/3b5d214bf7d6c44d47ed2c0198592796/79068/img-2019-08-08-123734.png 512w,\n/static/3b5d214bf7d6c44d47ed2c0198592796/0826e/img-2019-08-08-123734.png 1024w,\n/static/3b5d214bf7d6c44d47ed2c0198592796/0db51/img-2019-08-08-123734.png 1536w,\n/static/3b5d214bf7d6c44d47ed2c0198592796/bf411/img-2019-08-08-123734.png 1920w",sizes:"(max-width: 1024px) 100vw, 1024px"}}}}}},{node:{excerpt:"",html:"",id:"8b372408-b3e5-5416-83bd-9f989a36c552",frontmatter:{title:"puurhollands.eu",customer:"PSG Concerts",link:"http://www.puurhollands.eu",toolset:{react:!0,angular:null,bootstrap:!0,django:null,gulp:null,wordpress:null,gatsby:!0,webpack:null,jquery:null,aws:!0,sass:!0},started:"July 2019",ended:"Invalid date",image:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsSAAALEgHS3X78AAACKklEQVQoz61SyW7TUBT1d1BEKxaJuiECfpEdWxBSVyz4A4ZKiICEqtI2iTO08ezneIqdwfGYOCHD4fpVSGy641lHvtK9795zzn1CEIQY3BpYLjPMZnM0f4iYzmZIkhhiVwUbDhB9OsP121dQBn2sVgWvtywX2+0K7Y4CsadSXMJ1fQiyYmA8DmCaNpjlgDEHjuMiSRNkeYKo/QWX716jefYGdruJvMj5YMZGvCm/Q7gbajAMC4IkGzQ1hyQx6IaNYpkiy1JUpzsY4+eljVbfhmSGKMo9NdzwXBzH6A8MRNEMizjC1283NMCGYDseJXQqiBCEE3wnyRW7cr3DVcvGxZUDzV0TSsjaHEM5QFluiX3KbWq1JXREGZvNEtbIgaBqJqdc6a+aS7KJNL1nuCespgH88w9wP75H5jvYHXiK1/h+AE2zoBJMZpNCkjyUdN79bmhC122sNwWm0ymZ/BsH+rZFjLVxg/2og/0qxna3Aw47rkbskrJkQc1jfD7/dc+Qke7bO502O4HnkWcXXXi+j8UiwlAy4fohsvUG1z0GzXSQ06JkmXE2aRbTliV0ezKPGbEUqo3Z9pgvojJakkdkckwFKUYjn9jOqUkKRbHIkjF/NtU/DKfkZeWbT5Z5PA4nMwj4z0fIsgwPochzKKqHVoehLTKouo+C3uHffE75LM84qriCUKvV8BDq9TqeHD/Fo6MTHD0+wTHF9fo/Nc8ILwgvazh9fopGo4E/7xQA/jFoVn8AAAAASUVORK5CYII=",aspectRatio:1.7777777777777777,src:"/static/6f4fa5fc861726f3430195aa210198b7/0826e/img-2019-08-09-160453.png",srcSet:"/static/6f4fa5fc861726f3430195aa210198b7/24601/img-2019-08-09-160453.png 256w,\n/static/6f4fa5fc861726f3430195aa210198b7/79068/img-2019-08-09-160453.png 512w,\n/static/6f4fa5fc861726f3430195aa210198b7/0826e/img-2019-08-09-160453.png 1024w,\n/static/6f4fa5fc861726f3430195aa210198b7/0db51/img-2019-08-09-160453.png 1536w,\n/static/6f4fa5fc861726f3430195aa210198b7/bf411/img-2019-08-09-160453.png 1920w",sizes:"(max-width: 1024px) 100vw, 1024px"}}}}}},{node:{excerpt:"",html:"",id:"f8a143a3-3e53-56ba-a596-3d182ace43d7",frontmatter:{title:"tuscanyresidencearuba.com",customer:"ARPRE Development",link:"https://www.tuscanyresidencearuba.com",toolset:{react:null,angular:null,bootstrap:null,django:!0,gulp:null,wordpress:null,gatsby:null,webpack:null,jquery:null,aws:null,sass:null},started:"November 2018",ended:"Invalid date",image:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsSAAALEgHS3X78AAAC20lEQVQoz22S3WtTBxjGDwylsDnxk61eaD4aoRejujtXhG2MeeHF/oDJQATRXQ12MUQFhcFuqxdSGe3GtF2T1roS2zWmbU5qNTZfJqnVtDG15yQnzUdPcppzEo1Nfzu6CeJ84OHhfS8eeN7nFQ4HfByPBflxPsbR4B3afS7ap65hm+ih8+4oX876+WLWx1chkcOmHrrvo/PlHBH5POzj64jf3IscCvr5LDKD8KLZxFhfR19/wbPmOiNLAbriw/wc6mFMSpIoN5nJ6ww9LhGVNWpajUVFx5sw8MQNZpMG5XKNlKTji1UQeAv3MlX+SqqMpda4mSzgnM/Sk8hx7FqM884EYkCi17PML8NFzjg1uj0qo3dzjHglLvctImxsbPCaL6FXVNSVLJVijnIhh75aoFkzGLwn0SMuc8Uv0T0j44zkGXig8mtQpTdQ4Dd/hu7b6f8bFldXkTJZsrkVZCVHPp9H0apYxDi7J6JYpqJYvWFs4yH2TEXo7Pfy3aVBWqej2CeD7zAslpAkGVnOIMkySlZh2dztvHWb91xuWpyjbB50s9npRhjwcMI9ztj4LVo9k+zy+t+84b+GjUaDer1OvVbDMIlZVr3xnN0jQ2xyXael36TrT1qGXGzrcxKaC0LuEcfG/kboG0ZQKjWyZR2lYrxSSdVJFddYKD/nSWGNCUmjN1XldPgpJyNpTobSfG/y2/spzoTTNI01NK1EMJ/h96dLCIkVjUTBrF9WzYYriEtF7kgqQ/293AjEGZhX6JvLkNfqLCsliqbqDXhmpjH+y/aDHGdr+CZHF8zI/rkFfIEZrndd4MYfV5l4mGJ60s3Fbw5w7uxPiA/TiLFHZDMZFpKPya8oqKslNPMbqlWNhm7QtRjlSHCUU4lpBKvNzt6Pd7JvWwt7tmzCZrWw76Md7PrwfVq3f0Cb1YqjzYHdbsdisWK12V6prc2Go8OB46CD9oP7+eRAO592dPAPJIa3kYj/l8IAAAAASUVORK5CYII=",aspectRatio:1.7777777777777777,src:"/static/4fa3994084d614a609c1ef8ccbfb02a4/0826e/img-2019-08-08-123908.png",srcSet:"/static/4fa3994084d614a609c1ef8ccbfb02a4/24601/img-2019-08-08-123908.png 256w,\n/static/4fa3994084d614a609c1ef8ccbfb02a4/79068/img-2019-08-08-123908.png 512w,\n/static/4fa3994084d614a609c1ef8ccbfb02a4/0826e/img-2019-08-08-123908.png 1024w,\n/static/4fa3994084d614a609c1ef8ccbfb02a4/0db51/img-2019-08-08-123908.png 1536w,\n/static/4fa3994084d614a609c1ef8ccbfb02a4/bf411/img-2019-08-08-123908.png 1920w",sizes:"(max-width: 1024px) 100vw, 1024px"}}}}}},{node:{excerpt:"Implementatie frontend en backend",html:"<p>Implementatie frontend en backend</p>",id:"658d2367-9a54-5b8d-82dc-d3fae7d98d13",frontmatter:{title:"de-realisatie.nl",customer:"De Realisatie",link:"https://www.de-realisatie.nl",toolset:{react:null,angular:null,bootstrap:!0,django:!0,gulp:null,wordpress:null,gatsby:null,webpack:null,jquery:!0,aws:null,sass:!0},started:"October 2017",ended:"September 2017",image:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsSAAALEgHS3X78AAACTElEQVQoz32S60uTcRTH98fsghAo0cve1ZvCILHeVpihUKHYxTJLlHJpNV1b0mVaGVQv1EB0ODHIMjU2NXXz7jScNS/s7i7ueZ5Pv7mSUeiBL+d3fr/zfJ9zvueoEKYoSsqR3N7m03cvNvsa/fMy4x4Z9/IKk9Pz+KNRouJ9KxAkEomkEQohSxKZHKrMQI5FMRgNnK95zJmbtVQ0mLlbcoXi4ydpevSQN81P6eux8WPcSeSnl23xE2U/QikRp629GkPTfczPzbR3vudOVQ3lZZU8MFhoMD2j12bFPTWFf22drWAIRZZR9iJEkim5VUdxWQV60ytarcPo9SZyz13j9KU66i1dTM86WVlyC7Ig8XBEVCjvXaGSSFBeWsjVkgJMjVV86GjFrK+kqOgs12+U8rLlBYN9/Sw4xtja2ERKSsjJ/VpOJnGNz+MYnsQ5NsPMcphZb4zVNT9ef5xgVGZuahbP3AJhv5+kKGBfDePxBC3NFuped9I25KG61oLRuszb7gFqjU9o63iHw2HH7RQaelbFUGL/t5w6yHL6MiYSLhTmk5d/hEZjPQW5h8k7cZR7+tvkHjvE5YunmBi1s+hy8cu9RFxMObU2KY6/UJFpgvibfRBbbzcjow6GR4b4PPCRyYkxerqsfO3/gts1wsbiIrH1TWSxl/+aKiSWcxdictIfkXcEF+0oovik0FYWkARBMBDAJ/QLivyAz7cTh8JhgRBh4VVarZZMqNXqNDTq3bNGo0nHwqdydDodupTX6tAeEN8d1JKVk0VOdja/ATSD2+lDtR/fAAAAAElFTkSuQmCC",aspectRatio:1.7777777777777777,src:"/static/d09371b2ef064e96b4911961dfedfef4/0826e/img-2019-08-08-130524.png",srcSet:"/static/d09371b2ef064e96b4911961dfedfef4/24601/img-2019-08-08-130524.png 256w,\n/static/d09371b2ef064e96b4911961dfedfef4/79068/img-2019-08-08-130524.png 512w,\n/static/d09371b2ef064e96b4911961dfedfef4/0826e/img-2019-08-08-130524.png 1024w,\n/static/d09371b2ef064e96b4911961dfedfef4/0db51/img-2019-08-08-130524.png 1536w,\n/static/d09371b2ef064e96b4911961dfedfef4/bf411/img-2019-08-08-130524.png 1920w",sizes:"(max-width: 1024px) 100vw, 1024px"}}}}}},{node:{excerpt:"",html:"",id:"9ce6657b-4f33-56a9-b4a4-485955e85017",frontmatter:{title:"virtualarchitecture.nl",customer:"Virtual Architecture",link:"https://www.virtualarchitecture.nl",toolset:{react:null,angular:null,bootstrap:!0,django:!0,gulp:null,wordpress:null,gatsby:null,webpack:!0,jquery:!0,aws:null,sass:!0},started:"April 2018",ended:"April 2018",image:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsSAAALEgHS3X78AAAC8UlEQVQoz22QfUjTCRjHfxBZoWWtomYF0fVH0UEREXdxJBWVdNVW6tScLZdTl+4392Lapk7TWW5niVKyWZ6aWSQWmFipCTUKIbJD/7C7Xih70cKCsq03t0/Tg47j7gtfnpfPl+ePR/CPfYUAE/IHAgTGzb/1wetldHQ0yP6exzN+f2AiHywTHkfjFvhfBdGXT4wF/fmjj08+b3A39g/7j/zfO+HF0BC3+gfpGRjmzv0XPH7t461vjOG3H3j06j3DXj+DI17ar/dxubOfK1193Lj9gLt9z+l/+Y7e11/pHQHP4Bc8T3wII2+ecur8JVLNRRSfbqO6Y4Abfw7jefyOpu4+ylwXcLXeJkGhJylOhyrJitVsx5RVitlRTmlDKznOWvTuToraHiIMvXrK2QYX8QkxqNJENm5XsFEmJyPLTKHFxNYNP7FNEUnUzyuRRa5h2eJFbF+/hsjVPyJTbiJq1zp+2bAUuWoH+0xGhMg9OpIrblLc9AfuZg9VDR00tV+npeMmrrpGLAWFqFIzON7cg7Kii6jCVmRlXagcLZQ3X8VWfxVT5Xm0lVcoqetESNRZic4swXy0Flt5Ddn236i/cJET7lp0BwsQc4KvcFZhPdmI7awHS801ct3tpBbayXO1kmmvI9ZQhcZyAndLN4JezCIxPp6k5L1odSLZ5mJy83MwZGcimnXEJSmQxewgI9+IaLNQ4CzleNVhCo4Y0B6IwWRQYhAVaPZvI10rR7j31zNOX+yiyFFJaVkFVmcjaToNu2O2YDAmolbLSdHEcqlngPLqeqzHfqel9xlnOro5mp+Bw6LmcPBotV2H06ZFOJSXS0leNnqNElV8NCtWLUdjOEhKWjop6liMBi16Uc1OZTTGfbuRr13Jr4oEdu3djJiegDE1Dr1KzjlXGY4jeQghIZMInxHKLImEGTMlTJk6lfnSCKRSKXNmS1i4III5QRYWOoWZ4WGETgthWshkZs+ajmTudMLnhTH/h3ksXCJlUYSUbzqOV1UMbU9iAAAAAElFTkSuQmCC",aspectRatio:1.7777777777777777,src:"/static/f78ccde2b9d33d4a78bb563750fcc91c/0826e/img-2019-08-08-124318.png",srcSet:"/static/f78ccde2b9d33d4a78bb563750fcc91c/24601/img-2019-08-08-124318.png 256w,\n/static/f78ccde2b9d33d4a78bb563750fcc91c/79068/img-2019-08-08-124318.png 512w,\n/static/f78ccde2b9d33d4a78bb563750fcc91c/0826e/img-2019-08-08-124318.png 1024w,\n/static/f78ccde2b9d33d4a78bb563750fcc91c/0db51/img-2019-08-08-124318.png 1536w,\n/static/f78ccde2b9d33d4a78bb563750fcc91c/bf411/img-2019-08-08-124318.png 1920w",sizes:"(max-width: 1024px) 100vw, 1024px"}}}}}},{node:{excerpt:"Herontwikkeling frontend en backend en ontwikkeling van E-commerce functionaliteiten",html:"<p>Herontwikkeling frontend en backend en ontwikkeling van E-commerce functionaliteiten</p>",id:"46457e64-93eb-570e-9cce-b6c22c7144a6",frontmatter:{title:"bakxwagenaar.nl",customer:"Bakx & Wagenaar",link:"https://www.bakxwagenaar.nl",toolset:{react:null,angular:null,bootstrap:!0,django:null,gulp:!0,wordpress:!0,gatsby:null,webpack:null,jquery:!0,aws:null,sass:!0},started:"August 2017",ended:"September 2018",image:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsSAAALEgHS3X78AAACRklEQVQoz2WRS0wTURSGuzbRxJ3RBa2BEnZUV2xc4FJ3mLjxkWrYkBgSZGFYCAHEmBgFE6NFCWoC1kKI4REWPgsK5WXBB6+2QtG+ZjotdAQKtPM5nVKpZZIvZ+6d+f6ce4/ud6iRbFzeOqbmqnC6zeq6Ab94j4DYgk9Qq3SXQOQWwWgToRSRJnJ9XThqJRtf+AV+qQMp2o0QeUlIsqrVhiDZcM62MjzRzKfJFuxj9xn58kD7J+WJu76OnMdiaae+qprbtfU4HDO0dQ7y8GkXQ6OzTH6V6H3joWdwgb63y3x0BHN1dIqSIEUyuaNt1DXUcK2slJvXy3n32c5lczlnSk7SZrWxvrFJUAgjShGiazJr8h/Ny2Sk0DpUFEX9kNQCK6sqqa2u4OqlC3S97uNcRQ2lp07zpNfO8Jib1s5hLB12HqtY+ybYSaS9VIbWYW6g+YqZO5UXsTTewPK8k7KaZkrOnudR79DeuZRtFLb3lrth/wVmNj0eD7PfpwkFf6lTE5j8sciYc4YlX5API4t09IzzzDZKu3WU7n7n/g4zYZku5Z0NNpQt1hNxNpNxkqh3RFoSY6v4ImHmV5b5GQrgj0okVCc7Y9+Uo2uriGERSZKQIhEE9V0QReJbcRwhJ11zA9jm+3m10M/A0vv9U47FYmTj9Xpxu9xp3GlcLhdSWGIpsML43BTTrm/4g34CgQAxOfYPWZbRGY1GsjEYDOTl5aHX67WaoSC/gCP6oxw4doiD+YcxmI5TaCrEeEL1TEaKTEUUFxfzF9Fk215l0YA2AAAAAElFTkSuQmCC",aspectRatio:1.7777777777777777,src:"/static/e871f897b42d7997b007f46790a3e840/0826e/img-2019-08-08-130306.png",srcSet:"/static/e871f897b42d7997b007f46790a3e840/24601/img-2019-08-08-130306.png 256w,\n/static/e871f897b42d7997b007f46790a3e840/79068/img-2019-08-08-130306.png 512w,\n/static/e871f897b42d7997b007f46790a3e840/0826e/img-2019-08-08-130306.png 1024w,\n/static/e871f897b42d7997b007f46790a3e840/0db51/img-2019-08-08-130306.png 1536w,\n/static/e871f897b42d7997b007f46790a3e840/bf411/img-2019-08-08-130306.png 1920w",sizes:"(max-width: 1024px) 100vw, 1024px"}}}}}}]}}}}}]);
//# sourceMappingURL=component---src-pages-index-js-39e4f9d8916cd665bcf7.js.map