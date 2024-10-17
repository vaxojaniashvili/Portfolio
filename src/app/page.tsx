import Header from "./common/components/_organisms/Header/Header";
import AboutPage from "./pages/about/page";
import ContactPage from "./pages/contact/page";
import Footer from "./pages/footer/page";
import HomePage from "./pages/home/page";
import ProjectsPage from "./pages/projects/page";

const page = () => {
  return (
    <>
      <Header />
      <HomePage />
      <AboutPage />
      <ProjectsPage />
      <ContactPage />
      <Footer />
    </>
  );
};

export default page;
