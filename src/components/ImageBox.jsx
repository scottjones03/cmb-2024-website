import "./ImageBox.less";

export default function ImageBox({
  imageUrl = "https://source.unsplash.com/random/",
  lightness = 0
}) {
  return (
    <div
      className="image-box"
      style={{
        backgroundImage: `linear-gradient(rgba(255, 255, 255, ${lightness}), 
        rgba(255, 255, 255, ${lightness})), url(${imageUrl})`
      }}
    ></div>
  );
}
