import "./ImageBox.less";

export default function ImageBox({
  imageUrl = "https://source.unsplash.com/random/",
  lightness = 0,
  zoom = 100
}) {
  return (
    <div
      className="image-box"
      style={{
        backgroundImage: `linear-gradient(rgba(255, 255, 255, ${lightness}), 
        rgba(255, 255, 255, ${lightness})), url(${imageUrl})`,
        backgroundSize: `${zoom}%`,
        backgroundRepeat: "repeat"
      }}
    ></div>
  );
}
