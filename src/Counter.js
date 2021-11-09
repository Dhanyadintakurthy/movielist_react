import { useState } from 'react';

// function Msg({name,pic}) {
//   //console.log(props);
//   //const name = "dhanya";
//   return (
//     <div>
//       <h1 className="username">hello react this is {name}</h1>
//       <img className="userpic" src={pic} alt={name}></img>
//     </div>
//   );
// }
// function Movielist({name,poster,IMDB,summary}) {
//   return(
//     <div className="moviecontainer">
//       <div className="matter">
//         <h1 className="moviename">{name}</h1>
//         <h3 className="rating">IMDB:{IMDB}</h3>
//         <div className="summary">{summary}</div>
//       </div>
//       <img className="moviepic" src={poster} alt={name}></img>
//     </div>
//   )
// }
export function Counter() {
  const [Like, setLike] = useState(0);
  const [Dislike, setDislike] = useState(0);
  return (
    <div>
      <button onClick={() => setLike(Like + 1)}>
        like {Like}
      </button>
      <button onClick={() => setDislike(Dislike + 1)}>
        dislike {Dislike}
      </button>
    </div>
  );
}
