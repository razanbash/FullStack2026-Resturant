import Register from "../Auth/Register.jsx";
import Footer from "../Shared/Footer.jsx";

function LandingPage() {
  return (
    <>
      <div
        style={{
          height: "70vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          width: "100%",
        }}
      >
        <div>
          <h1>Welcome to our Restaurant</h1>
          <p>Best food in town</p>
        </div>
      </div>
      <Register />   
      <Footer />
    </>
  );
}

export default LandingPage;
// i just added register component to the landing page and i will add the login component later on