const FancyResumeButton = () => {
  return (
    <div className="relative group">
      {/* Animated border */}
      <div className="
        absolute inset-0 
        rounded-xl 
        bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500
        blur-sm
        opacity-70
        group-hover:opacity-100
        transition duration-500
        animate-gradient
      " />

      {/* Button */}
      <button
        onClick={() => window.open('Adithya_Resume_6_12.pdf', '_blank')}
        className="
          relative z-10
          px-8 py-3
          rounded-xl
          bg-[#0B0F1A]
          text-white
          font-medium
          border border-white/10
          backdrop-blur
          hover:scale-[1.03]
          active:scale-[0.97]
          transition-all duration-300
        "
      >
        Resume
      </button>
    </div>
  );
};
export default FancyResumeButton;
