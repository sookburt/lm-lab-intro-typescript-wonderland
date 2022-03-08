import { endAdventure } from '..';
import { wakeUp } from './6_wake_up';
import { clear, print, askQuestion } from '../console';

const beverages = ["Tea", "Coffee", "Lemonade", "Water"] as const; 
type DrinkType = typeof beverages[number];

interface Drink {
  type: DrinkType;
  made: boolean;
}

interface Kettle {
  drink: Drink;
  fixed: boolean;
}

export function relaxOnTheSofa(): void {
  clear(true); 
  print('Alice is exhausted by her trial and just needs a nice sit down on a big fluffy sofa with a cuppa.');

  let gotCuppa: boolean = false;

  // get a cup of tea
  const kettle = makeTheTea();
  gotCuppa = kettle.drink.made;

  if (!gotCuppa) {
		print(`The kettle is not working no tea till the fuse is fixed! 😱`);
		return endAdventure();
  } else {
		print(`That was a lovely cup of tea... thank you! ☕`);
		print('Time to wake up...');
		return askQuestion('Press ENTER to continue! ', wakeUp);
	}
}

function makeTheTea(): Kettle {

  const tea: Drink = {
    type: 'Tea',
    made: true
  }

  const kettle: Kettle = {
    drink: tea,
    fixed: true
  }

  return kettle;
}