import LikeButton from './like-button';

export default function HomePage() {
  const names = ['Joanna', 'Chaffi', 'Faye'];

  return (
    <div>
      <Header title="Develop. Preview. Ship."/>
      <ul>
        {names.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
      <LikeButton/>
    </div>
  );
}

function Header({ title }) {
  return <h1>{title}</h1>;
}
