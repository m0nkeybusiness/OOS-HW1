const el = React.createElement;

const App = () => {
   return el('h1', null, 'privet Andrey');
};

const root = document.querySelector('#root');
ReactDOM.render(el(App), root);
