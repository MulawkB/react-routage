import { useParams, useNavigate } from "react-router";
import Button from "react-bootstrap/Button";

function Category() {
  const navigate = useNavigate();
  const { categoryId } = useParams();
  const handleReturn = () => {
navigate('/');
};

  return (
    <div>
      <h1>Détails du blog avec l'ID : {categoryId}</h1>
      <Button onClick={handleReturn}>Retour à la page d'accueil</Button>
    </div>
  );
}
export default Category;
