import { CardSkill } from '../components/skills';

export default function SkillsSection() {
  const icons = [
    {
      src: 'https://images.unsplash.com/photo-1735040736883-9e0bc7e6f1ba?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8',
      alt: 'HTML5',
    },
    {
      src: 'https://images.unsplash.com/photo-1735040736883-9e0bc7e6f1ba?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8',
      alt: 'CSS3',
    },
    {
      src: 'https://images.unsplash.com/photo-1735040736883-9e0bc7e6f1ba?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8',
      alt: 'JavaScript',
    },
    {
      src: 'https://images.unsplash.com/photo-1735040736883-9e0bc7e6f1ba?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8',
      alt: 'Vue.js',
    },
    {
      src: 'https://images.unsplash.com/photo-1735040736883-9e0bc7e6f1ba?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8',
      alt: 'Laravel',
    },
    {
      src: 'https://images.unsplash.com/photo-1735040736883-9e0bc7e6f1ba?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8',
      alt: 'Bootstrap',
    },
    {
      src: 'https://images.unsplash.com/photo-1735040736883-9e0bc7e6f1ba?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8',
      alt: 'Git',
    },
  ];
  return (
    <div className='flex h-full w-full items-center justify-center'>
      <div className='flex max-w-lg flex-wrap justify-center gap-4'>
        {icons.map((icon, index) => (
          <CardSkill alt={icon.alt} src={icon.src} key={index} />
        ))}
      </div>
    </div>
  );
}
