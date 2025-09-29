import React from "react";

const Hero = () => {
  return (
    <main
      className="Hero"
      style={{
        backgroundColor: "white",
        padding: "20px",
      }}
    >
      <div
        className="Hero-content"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start", // align image a little higher
          flexWrap: "wrap",
        }}
      >
        {/* Text on the left */}
        <div className="Hero-text" style={{ maxWidth: "50%" }}>
          <p>Discover the power of nature with our skincare products</p>
          <p>
            Gentle, effective, and crafted to let your natural glow shine
            through.
          </p>
          <p>Because your skin deserves the best, naturally. 🌿✨</p>

          <div className="Hero-btn" style={{ marginTop: "20px" }}>
            <button
              style={{
                marginRight: "10px",
                padding: "10px 20px",
                borderRadius: "8px",
                backgroundColor: "#8b4513",
                color: "white",
                border: "none",
                cursor: "pointer",
                fontWeight: "bold",
              }}
            >
              Shop Now
            </button>
            <button
              style={{
                padding: "10px 20px",
                borderRadius: "8px",
                border: "none",
                backgroundColor: "#8b4513",
                color: "white",
                cursor: "pointer",
                fontWeight: "bold",
              }}
            >
              Category
            </button>
          </div>
        </div>

        {/* Image on the right */}
        <div
          className="Hero-image"
          style={{ maxWidth: "1280%", marginTop: "-20px" }} // moves image slightly up
        >
          <img
            src="/images/OIP.webp"
            alt="Hero"
            style={{ width: "50%", borderRadius: "70px" }}
          />
        </div>
      </div>
    </main>
  );
};

export default Hero;
