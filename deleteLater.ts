
interface Bird {
  fly(): void;
}

interface Fish {
  swim(): void;
}

// Type predicate function
function isBird(animal: Bird | Fish): animal is Bird {
  return (animal as Bird).fly !== undefined;
}


function move(animal: Bird | Fish) {
  if ((animal as Bird).fly !== undefined) {
    animal.fly(); // TypeScript knows 'animal' is a Bird here
  } else {
    animal.swim(); // TypeScript knows 'animal' is a Fish here
  }
}

