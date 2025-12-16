
const ProjectGallery = ({ images }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
      {images.map((src, i) => (
        <img
          key={i}
          src={src}
          alt="Notfound"
          className="rounded-xl shadow-md object-cover"
        />
      ))}
    </div>
  );
};

export default ProjectGallery;
