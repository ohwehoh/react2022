import React from 'react'
import MovieList from '../includes/MovieList';
// function MovieInfo({image, alt, title, textL, textR}){
//   return (
//     <article>
//       <img src={image} alt={alt} />
//       <span>1</span>
//       <span>2</span>
//       <span>3</span>
//       <span>4</span>
//       <span>5</span>
//       <span>6</span>
//       <span>7</span>
//       <span>8</span>
//       <span>9</span>
//       <span>10</span>
//       <h3>{title}</h3>
//       <div className='desc__wrap'>
//         <p className='left'>{textL}</p>
//         <p className='right'>{textR}</p>
//       </div>
//     </article>
//   )
// }

// const movieData = [
//   {
//     image : "/img/script00.png",
//     alt : "첫번째이미지",
//     title : "animationRequestFrame",
//     textL : "레이아웃은 사이트를 만드는데 가장 기본적이 요소입니다. 레이아웃만 제대로 만들 수 있다면 사이트의 제작에 50%는 끝나다고 보셔도 됩니다. 그만큼 레이아웃 제작은 상당히 중요합니다. 사이트의 제작에 50%는 끝나다고 보셔도 됩니다. 그만큼 레이아웃 제작은 상당히 중요합니다.",
//     textR : "레이아웃은 사이트를 만드는데 가장 기본적이 요소입니다. 레이아웃만 제대로 만들 수 있다면 사이트의 제작에 50%는 끝나다고 보셔도 됩니다. 그만큼 레이아웃 제작은 상당히 중요합니다. 사이트의 제작에 50%는 끝나다고 보셔도 됩니다. 그만큼 레이아웃 제작은 상당히 중요합니다."
//   },
//   {
//     image : "/img/script01.png",
//     alt : "첫번째이미지",
//     title : "animationRequestFrame",
//     textL : "레이아웃은 사이트를 만드는데 가장 기본적이 요소입니다. 레이아웃만 제대로 만들 수 있다면 사이트의 제작에 50%는 끝나다고 보셔도 됩니다. 그만큼 레이아웃 제작은 상당히 중요합니다. 사이트의 제작에 50%는 끝나다고 보셔도 됩니다. 그만큼 레이아웃 제작은 상당히 중요합니다.",
//     textR : "레이아웃은 사이트를 만드는데 가장 기본적이 요소입니다. 레이아웃만 제대로 만들 수 있다면 사이트의 제작에 50%는 끝나다고 보셔도 됩니다. 그만큼 레이아웃 제작은 상당히 중요합니다. 사이트의 제작에 50%는 끝나다고 보셔도 됩니다. 그만큼 레이아웃 제작은 상당히 중요합니다."
//   },
//   {
//     image : "/img/script02.png",
//     alt : "첫번째이미지",
//     title : "animationRequestFrame",
//     textL : "레이아웃은 사이트를 만드는데 가장 기본적이 요소입니다. 레이아웃만 제대로 만들 수 있다면 사이트의 제작에 50%는 끝나다고 보셔도 됩니다. 그만큼 레이아웃 제작은 상당히 중요합니다. 사이트의 제작에 50%는 끝나다고 보셔도 됩니다. 그만큼 레이아웃 제작은 상당히 중요합니다.",
//     textR : "레이아웃은 사이트를 만드는데 가장 기본적이 요소입니다. 레이아웃만 제대로 만들 수 있다면 사이트의 제작에 50%는 끝나다고 보셔도 됩니다. 그만큼 레이아웃 제작은 상당히 중요합니다. 사이트의 제작에 50%는 끝나다고 보셔도 됩니다. 그만큼 레이아웃 제작은 상당히 중요합니다."
//   }
// ]

function MovieCont(props) {
  return (
    <section className="movie__cont">
      <div className="container">
        <div className="movie__inner">
          {/* {movieData.map((txt,i) => (
            <MovieInfo
              key = {i}
              image = {txt.image}
              alt = {txt.alt}
              title = {txt.title}
              textL = {txt.textL}
              textR = {txt.textR}
            />
          ))} */}
          <MovieList list={props.list}/>
        </div>
      </div>
    </section>
  )
}

export default MovieCont