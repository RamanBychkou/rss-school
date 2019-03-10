const CHOOSE_MENTOR = 'CHOOSE_MENTOR';
const chooseMentor = () => ({
  type: 'CHOOSE_MENTOR',
  mentor: document.querySelector('form > input').value,
  text: 'CHOOSE_MENTOR',
});

export { CHOOSE_MENTOR, chooseMentor };
