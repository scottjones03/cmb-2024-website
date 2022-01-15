export default function ImageBox({
  imageUrl = "https://source.unsplash.com/random/",
  lightness = 0,
  size = "cover",
  repeat = true
}) {
  return (
    <div
      className="image-box"
      style={{
        width: "100%",
        height: "100%",
        position: "absolute",
        backgroundImage: `linear-gradient(rgba(255, 255, 255, ${lightness}), 
        rgba(255, 255, 255, ${lightness})), url(${imageUrl})`,
        backgroundSize: size,
        backgroundRepeat: repeat ? "repeat" : "no-repeat",
        backgroundPosition: "fixed"
      }}
    ></div>
  );
}
