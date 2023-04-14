import { useSpring } from '@react-spring/web'

const useCustomSpring = (factor = 1) => {
  const [spring, api] = useSpring(() => ({
    from: { opacity: 0, transform: 'translateY(10px)' },
    to: { opacity: 1, transform: 'translateY(0px)' },
    delay: 120 * factor,
  }));

  return { spring, api };
};

export default useCustomSpring;