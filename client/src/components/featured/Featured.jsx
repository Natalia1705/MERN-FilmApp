import { InfoOutlined, PlayArrow } from "@material-ui/icons";
import "./featured.scss";

export default function Featured({ type }) {
  return (
    <div>
      <div className="featured">
        {type && (
          <div className="category">
            <span>{type === "movie" ? "Movies" : "Series"}</span>
            <select name="genre" id="genre">
              <option>Genre</option>
              <option value="adventure">Adventure</option>
              <option value="comedy">Comedy</option>
              <option value="crime">Crime</option>
              <option value="fantasy">Fantasy</option>
              <option value="historical">Historical</option>
              <option value="horror">Horror</option>
              <option value="romance">Romance</option>
              <option value="sci-fi">Sci-fi</option>
              <option value="thriller">Thriller</option>
              <option value="western">Western</option>
              <option value="animation">Animation</option>
              <option value="drama">Drama</option>
              <option value="documentary">Documentary</option>
            </select>
          </div>
        )}
        <img
          width="100%"
          src="https://phantom-expansion.unidadeditorial.es/a9e8d1207c2e1ece71f66e2c0b591ca8/crop/0x23/1597x1085/resize/414/f/jpg/assets/multimedia/imagenes/2021/03/13/16156301244649.jpg"
          alt="movie"
        />
        <div className="info">
          <img src="" alt="" />
          <span className="desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
            placeat expedita illo, sapiente modi iure quod commodi labore saepe!
            Consequatur quam maxime dolorem voluptatem cum optio debitis
            aspernatur, nihil deserunt.
          </span>
          <div className="buttons">
            <button className="play">
              <PlayArrow />
              <span>Play</span>
            </button>
            <button className="more">
              <InfoOutlined />
              <span>Info</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
