import { flag } from '@vercel/flags/sveltekit';
 
export const landingDepDiv1Flag = flag<boolean>({
  key: 'landingDepDiv1Flag',
//   origin: 'https://example.com/#showdashbord', // optional
  options: [{ value: true }, { value: false }], // optional
  // can be async and has access to the event
  decide(_event) {
    return false;
  },
});

export const landingDepDiv2Flag = flag<boolean>({
    key: 'landingDepDiv2Flag',
  //   origin: 'https://example.com/#showdashbord', // optional
    options: [{ value: true }, { value: false }], // optional
    // can be async and has access to the event
    decide(_event) {
      return false;
    },
  });
  

export const landingDepDiv3Flag = flag<boolean>({
key: 'landingDepDiv3Flag',
//   origin: 'https://example.com/#showdashbord', // optional
options: [{ value: true }, { value: false }], // optional
// can be async and has access to the event
decide(_event) {
    return false;
},
});

export const landingDepDiv4Flag = flag<boolean>({
key: 'landingDepDiv4Flag',
//   origin: 'https://example.com/#showdashbord', // optional
options: [{ value: true }, { value: false }], // optional
    // can be async and has access to the event
    decide(_event) {
      return false;
    },
  });