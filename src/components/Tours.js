import Card from "./Card";

function Tours({ tours,removeTour }) {
  return (
    <div className="Container">
      <div>
        <h2 className="title">Tour-Plan</h2>
      </div>

      <div className="cards">
        {tours.map((tour) => {
          return <Card key={tour.id} {...tour} removeTour={removeTour}></Card>;
        })}
      </div>
    </div>
  );
}

export default Tours;