const function1 = (obj) => {
  let key1 = obj.key1;
  let key2 = obj.key2;
  console.log(key1, key2);
};

const PokeDetails = (props) => {
  let { type, hp, attack, defense } = props.details;
  return (
    <div className="details">
      <div>
        <b>Type:</b> {type}
      </div>
      <div>
        <b>HP:</b> {hp}
      </div>
      <div>
        <b>Attack:</b> {attack}
      </div>
      <div>
        <b>Defense:</b> {defense}
      </div>
    </div>
  );
};

export default PokeDetails;
