
//This is just a list of strings
//its ONLY function is to avoid typos
//i.e.
//   I could write reading, Reading, READING or reeeading just because I don't remember how it was written first
//   but by using enums, I can just do LIST_NAMES.READING
//   Seems like the same problem, but with enums, by just writting 'R', the IDE will autocomplete my options
//   Or at least, it will show me the available options
//  NO MORE GRAMMAR MISTAKES WITH ENUMS!

//But really, this is JUST a fancy array of strings
export enum LIST_NAMES{
    READING, //0
    INTERESTING, //1
    FINISHED //2
}

