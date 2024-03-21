import ListadeLibros from "./ListadeLibros";
import NuevosLibros from "./NuevosLibros";

function Home() {
  return (
    <>
      <ListadeLibros />
      <div className="content">
        <div className="row mt-4 row_1">
          <NuevosLibros />
        </div>
      </div>
    </>
  );
}
export default Home;
