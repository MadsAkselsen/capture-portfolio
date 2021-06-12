import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';

export const UseScroll = (threshold) => {
  const controls = useAnimation();
  const [element, view] = useInView({
    threshold: threshold,
    // triggerOnce: true, //* if the hidden animation should not trigger
  });
  if (view) {
    controls.start('show');
  } else {
    controls.start('hidden');
  }

  return [element, controls];
};
