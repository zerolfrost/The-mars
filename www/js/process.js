// Dom7
var $ = Dom7;
var routes = [
  // Index page
  {
    path: '/',
    url: './index.html',
    name: 'home',
  },

  {
    path: '/characters/',
    componentUrl: './pages/characters.html',
  },  
];
//galing sa routes.js


// Theme
var theme = 'auto';
if (document.location.search.indexOf('theme=') >= 0) {
  theme = document.location.search.split('theme=')[1].split('&')[0];
}

// Init App
var app = new Framework7({
  root: '#app',
  theme: theme,
  data: function () {
    return {
      user: {
        firstName: 'Juvan',
        lastName: 'Urbano',
      },
    };
  },
  methods: {
    helloWorld: function () {
      app.dialog.alert('Hello World!');
    },
  },
  routes: routes,
});

//galing sa app.js
var rooted = document.getElementById('root');
var dom =

         <div class="page-content">
    
       <div class="column">
     
      <a href="/characters/"><button class="col button button-fill color-orange button-round ">Browse Characters</button></a>
       <center><img src="img/main.png" width="100%" height="350px" class="border"></img></center>     
      </div>
      </div>
ReactDOM.render(dom,rooted);

var rooted = document.getElementById('b');
var dom =

       <div class="page-content">
    
       <div class="column">
       <center><img src="img/main.png"  width="100%" height="400px"></img></center>

      </div>
      </div>
    ReactDOM.render(dom,rooted);

function clock(){
  let element = <h1>{new Date().toLocaleTimeString()}</h1>;
  ReactDOM.render(element, document.getElementById('a'));
}

setInterval(function(){
  clock();
},1000);

ReactDOM.render(dom,_root);
