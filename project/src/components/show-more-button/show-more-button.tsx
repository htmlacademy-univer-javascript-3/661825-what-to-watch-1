type ShowMoreProps = {
  onClick: () => void;
}

function ShowMoreButton(props: ShowMoreProps) {
  return (
    <div className="catalog__more">
      <button className="catalog__button" type="button" onClick={props.onClick}>Show more</button>
    </div>
  );
}

export default ShowMoreButton;
