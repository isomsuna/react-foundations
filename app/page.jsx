import { useState } from 'react';

export default function HomePage() {
  const names = ['Joanna', 'Chaffi', 'Faye'];
  const [likes, setLikes] = useState(0);

  function handleClick() {
    setLikes(likes + 1);
  }

  return (
    <div>
      <Header title="Develop. Preview. Ship."/>
      <ul>
        {names.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
      <button onClick={handleClick}>{likes} Likes</button>
    </div>
  );
}

function Header({ title }) {
  return <h1>{title}</h1>;
}
