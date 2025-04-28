import Header from "../../components/Header/Header";
import homeStyles from "./Home.module.css";
import commonStyles from "../Styles/Common.module.css";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

function Home() {
  const navigate = useNavigate();
  const { user } = useAuth();
  return (
    <div className={`${commonStyles.container} ${homeStyles.container}`}>
      <div className={homeStyles.headerContainer}>
        <div className={homeStyles.headerSubcontainer}>
          <Header buttonText="Sair" onClick={() => navigate("/")} />
        </div>
        <div className={homeStyles.userContainer}>
          <p className={commonStyles.title}>
            Olá{user?.name !== undefined ? ", " + user.name : ""}
          </p>
          <p className={homeStyles.subtitle}>{user?.role}</p>
        </div>
      </div>
      <div className={homeStyles.mainContainer}>
        <div className={homeStyles.mainSubcontainer}>
          <p className={commonStyles.title}>
            Que pena! Estamos em desenvolvimento :(
          </p>
          <p className={homeStyles.description}>
            Nossa aplicação está em desenvolvimento, em breve teremos novidades
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
