// Component pour la page de connexion, affiche un formulaire de connexion très basique
export default function Login() {
    return (
        <div>
            <h1>Page de connexion</h1>
            <form>
                <label>
                    Nom d'utilisateur :
                    <input type="text" name="username" />
                </label>
                <br />
                <label>
                    Mot de passe :
                    <input type="password" name="password" />
                </label>
                <br />
                <button type="submit">Connexion</button>
            </form>
        </div>
    );
}