// Icons
import email from '@/assets/icons/email.png';
import lock from '@/assets/icons/lock.png';
import google from '@/assets/icons/google.png';
import person from '@/assets/icons/person.png';

// Images
import check from '@/assets/images/check.png';
import onboarding1 from '@/assets/images/onboarding1.jpg';
import onboarding2 from '@/assets/images/onboarding2.jpg';
import onboarding3 from '@/assets/images/onboarding3.jpg';
import sign from '@/assets/images/sign.jpg';

export const icons = {
  email,
  google,
  lock,
  person,
};

export const images = {
  check,
  email,
  onboarding1,
  onboarding2,
  onboarding3,
  sign,
};

export const onboarding = [
  {
    id: '1',
    title: "Welcome to Noah's Ride !",
    description:
      'Embark on a journey and explore the world around you with ease and comfort.',
    image: images.onboarding1,
  },
  {
    id: 2,
    title: "Best car in your hands with Noah's Ryde",
    description:
      "From start to finish, Noah's Ride takes you on a fun and smooth journey to your destination.",
    image: images.onboarding2,
  },
  {
    id: 3,
    title: 'Drive into Fun and Discovery',
    description:
      'Navigate through exciting routes and make every ride an adventure for the whole family.',
    image: images.onboarding3,
  },
];
