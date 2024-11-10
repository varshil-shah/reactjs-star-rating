// import StarRating from "reactjs-star-rating";
import StarRating from "./lib";

function App() {
  return (
    <div className="App">
      <div>
        <h2>With default rating</h2>
        <StarRating defaultRating={2} maxRating={7} />
      </div>
      <div>
        <h2>With custom labels</h2>
        <StarRating
          color="red"
          labels={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
          size={40}
        />
      </div>
      <div>
        <h2>Read only</h2>
        <StarRating defaultRating={2} maxRating={7} color="blue" readOnly />
      </div>
      <div>
        <h2>Without label </h2>
        <StarRating
          defaultRating={2}
          maxRating={7}
          color="green"
          showLabel={false}
        />
      </div>
      <div>
        <h2>With half stars</h2>
        <StarRating
          allowHalf
          defaultRating={2.5}
          maxRating={5}
          color="purple"
        />
      </div>
    </div>
  );
}

export default App;
