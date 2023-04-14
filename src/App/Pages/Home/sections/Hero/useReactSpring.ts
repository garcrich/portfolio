import { useSpring } from '@react-spring/web'

const useCustomSpring = (delay: number,factor = 1) => {
  const [spring, api] = useSpring(() => ({
    from: { opacity: 0, transform: 'translateY(10px)' },
    to: { opacity: 1, transform: 'translateY(0px)' },
    delay: delay * factor,
  }));

  return { spring };
};

export default useCustomSpring;