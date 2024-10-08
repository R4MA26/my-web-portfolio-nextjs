import { motion } from 'framer-motion';

export function AboutSection() {
  const text =
    'Hello there, I’m a Mobile (Flutter) and WEB (React) dev based in indonesia, Makassar.'.split(
      ' '
    );
  return (
    <div className='flex h-fit items-center'>
      <div className='flex flex-1 justify-center'>
        <img
          src={'images/rama.jpg'}
          alt={'alt'}
          className='rounded-full border-2 border-gray-300 object-cover dark:border-none'
          style={{ width: 400, height: 400 }}
        />
      </div>
      <div className='flex-1 text-3xl leading-loose tracking-widest'>
        {text.map((el, i) => (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.25,
              delay: i / 10,
            }}
            key={i}
          >
            {el}{' '}
          </motion.span>
        ))}
      </div>
    </div>
  );
}
