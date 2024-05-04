const Player = [
    {
      name: "player1",
      team: " team 1",
      nationality: "Tunisia",
      jerseyNumber: '10',
      age : '32',
      url : 'https'

    },
    {
        name: "player2",
        team: " team 2",
        nationality: "Tunisia",
        jerseyNumber: '10',
        age : '32',
        url : 'https'
    },
    {
        name: "player3",
        team: " team 3",
        nationality: "Tunisia",
        jerseyNumber: '10',
        age : '32',
        url : 'https'
    },
  ];
  const Players = () => {
    return (
      <div>
        <h1>Player</h1>
        <div className="grid grid-cols-3 gap-5 p-8">
          {Player.map((v, i) => (
            {/* <Card key={i} player={v} /> */}
          ))}
        </div>
      </div>
    );
  };
  
  export default Players;