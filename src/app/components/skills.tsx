type CardSkillProps = {
  src: string;
  alt: string;
};
export function CardSkill({ src, alt }: CardSkillProps) {
  return (
    <div className='bg-blue-500 p-4'>
      <img
        alt={alt}
        className='h-32 w-32 object-cover'
        src={src}
        loading='lazy'
      />
    </div>
  );
}
