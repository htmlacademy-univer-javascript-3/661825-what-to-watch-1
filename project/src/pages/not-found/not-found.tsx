import {Link} from 'react-router-dom';

function NotFound() {
  return (
    <div style={{margin: '20% 30%'}}>
      <h1>Такой страницы нет, поищите другую :(</h1>
      <p>Ну или сходите <Link to={'/'}>на главную</Link></p>
    </div>
  );
}

export default NotFound;
