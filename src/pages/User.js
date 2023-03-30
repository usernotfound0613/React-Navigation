import { useParams } from "react-router-dom";

// Component pour la page de l'utilisateur, utilise des paramètres de route pour afficher les détails de l'utilisateur en fonction de son identifiant
export default function User() {
    const { id } = useParams();

    return (
        <div>
            <h1>Page utilisateur</h1>
            <p>ID utilisateur : {id}</p>
        </div>
    );
}