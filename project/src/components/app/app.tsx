import Main, {MainProps} from '../../pages/main/main';

function App(props: MainProps): JSX.Element {
  return <Main promoData={props.promoData} films={props.films} genres={props.genres}/>;
}

export default App;
