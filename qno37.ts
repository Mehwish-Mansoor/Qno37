//  23.Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.

function make_shirt(size = "L", message = "I Love Typescript"):void{
    console.log(`I'm making a ${size} T.Shirt with the message"${message}".`);
}
make_shirt("Small", "I'm Programar")
make_shirt("Mediam", "I'm onsite student of GIAIC")
make_shirt("Small")