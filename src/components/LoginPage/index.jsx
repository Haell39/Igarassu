import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import logo from "../../assets/logo igarassu.svg"; // Use o mesmo logo do Header

export default function LoginPage() {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <img src={logo} alt="Igarassu Prefeitura" />
                <Link to="/">
                    <button className={styles.backButton}>← Voltar</button>
                </Link>
            </div>
            <div className={styles.loginBox}>
                <h2>Login</h2>
                <p>Bem-vindo de volta!</p>
                <input type="email" placeholder="E-mail" />
                <input type="password" placeholder="Senha" />
                <p className={styles.forgotPassword}>Esqueci minha senha</p>
                <button>Conecte-se</button>
                <p>
                    Novo por aqui? <Link to="/register">Cadastre-se!</Link>
                </p>
            </div>
            <p className={styles.helpText}>Precisa de ajuda?</p>
        </div>
    );
}
