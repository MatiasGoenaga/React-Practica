import Header from "./Header";
import ListadeLibros from "./ListadeLibros";
import NuevosLibros from "./NuevosLibros";

function Home() {
  return (
    <>
      <div className="container">
        <Header />
        <ListadeLibros />
        <div className="content">
          <div className="row mt-4">
            <NuevosLibros />
          </div>
        </div>
      </div>
    </>
  );
}
export default Home;
