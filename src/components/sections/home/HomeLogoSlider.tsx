const repeat = Array.from({ length: 12 });

export default function HomeLogoSlider() {
  return (
    <section className="py-10 overflow-hidden bg-white">
      <div>
        <div className="flex items-center marquee-track gap-10 sm:gap-16" style={{ width: "max-content" }}>
          {repeat.map((_, i) => (
            <img
              key={i}
              src="/logo/WNFS_Logo.svg"
              alt="Wongnai FoodStory POS"
              className="h-5 sm:h-7 w-auto object-contain"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
