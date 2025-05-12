import { useParams } from "react-router";
function Category() {
  const { categoryId } = useParams();
  return (
    <div>
      <h1>Détails du blog avec l'ID : {categoryId}</h1>
    </div>
  );
}
export default Category;
