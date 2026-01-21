function Person({ name, dob, image }) {
  const today = new Date();
  const personDob = new Date(dob);
  const todayYear = today.getFullYear();
  const age = todayYear - personDob.getFullYear();
  return (
    <article className="person">
      <img src={image} alt={name} className="img" />
      <div>
        <h4>{name}</h4>
        <p>{age} years</p>
      </div>
    </article>
  );
}

export default Person;
