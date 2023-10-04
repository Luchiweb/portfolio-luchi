function SkillCard({ imgPath, name }: { imgPath: string; name: string }) {
  return (
    <div className="grid place-items-center select-none bg-bg-color px-2 py-4 rounded-lg border border-transparent hover:border-main-color transition-colors">
      <img src={`./icons/${imgPath}`} alt={name} />
      <div className="text-white mt-2">{name}</div>
    </div>
  );
}
export default SkillCard;
