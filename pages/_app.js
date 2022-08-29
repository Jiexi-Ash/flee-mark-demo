import "../styles/globals.css";
import MainLayout from "components/UI/MainLayout";
import { Provider } from "react-redux";
import store from "redux/store";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </Provider>
  );
}

export default MyApp;
