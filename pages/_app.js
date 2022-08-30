import "../styles/globals.css";
import MainLayout from "components/UI/MainLayout";
import SessionCheck from "helpers/SessionCheck";
import { Provider } from "react-redux";
import store from "redux/store";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <SessionCheck>
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </SessionCheck>
    </Provider>
  );
}

export default MyApp;
