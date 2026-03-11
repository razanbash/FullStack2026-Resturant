// import Footer from "../Shared/Footer.jsx";

// function LandingPage() {
//   return (
//     <>
//       <Footer />
//     </>
//   );
// }

// export default LandingPage;



// import Footer from "../Shared/Footer.jsx";

// function LandingPage() {
//   return (
//     <>
//       <div style={{ padding: "40px" }}>
//         <h1>Welcome to our Restaurant</h1>
//         <p>Best food in town</p>
//       </div>

//       <Footer />
//     </>
//   );
// }

// export default LandingPage;



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
          width: "100%"
        }}
      >
        <div>
          <h1>Welcome to our Restaurant</h1>
          <p>Best food in town</p>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default LandingPage;