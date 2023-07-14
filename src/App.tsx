import Header from "./components/Header";
import Footer from "./components/Footer";
import MainPage from "./pages/mainPage/MainPage";

function App() {
  return (
    <>
      <main className="min-h-screen flex flex-col">
        <Header />
        <MainPage />
        <Footer />
      </main>
    </>
  );
}

export default App;
