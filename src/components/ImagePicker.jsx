const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export default function ImagePicker({ images, selectedImage, onSelect }) {
  return (
    <div id="image-picker">
      <p>Select an image</p>
      <ul>
        {images.map((image) => (
          <li
            key={image.path}
            onClick={() => onSelect(image.path)}
            className={selectedImage === image.path ? "selected" : undefined}
          >
            <img src={`${BACKEND_URL}/${image.path}`} alt={image.caption} />
          </li>
        ))}
      </ul>
    </div>
  );
}
