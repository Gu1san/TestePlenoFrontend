import Header from "../../components/Header/Header";
import homeStyles from "./Home.module.css";
import commonStyles from "../Styles/Common.module.css";

function Home() {
  return (
    <div className={`${commonStyles.container} ${homeStyles.container}`}>
      <div className={homeStyles.headerContainer}>
        <div className={homeStyles.headerSubcontainer}>
          <Header />
        </div>
        <div className={homeStyles.userContainer}>
          <p className={commonStyles.title}>Olá Fulano</p>
          <p className={homeStyles.subtitle}>Dev sla</p>
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
