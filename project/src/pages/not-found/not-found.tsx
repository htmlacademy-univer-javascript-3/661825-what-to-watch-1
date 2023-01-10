import {Link} from 'react-router-dom';

function NotFound() {
  return (
    <div style={{margin: '20% 30%', lineHeight: 1.1}}>
      <h3 style={{color:'#cbcbcb'}}>404 Not Found</h3>
      <h1>Такой страницы нет, поищите другую :(</h1>
      <p>Или вернитесь <Link to={'/'}>на главную →</Link></p>
    </div>
  );
}

export default NotFound;
