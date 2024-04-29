const body1 = document.querySelector('body');
if (body) body1.style.background = 'red';


// non-null assertion (!)
const body2 = document.querySelector('body')!;
body2.style.background = 'red';


const body3 = document.querySelector('body') as HTMLBodyElement;
body3.style.background = 'red';
