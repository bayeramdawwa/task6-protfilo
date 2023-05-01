



document.addEventListener('scroll', () => {
    const nav = document.querySelector("nav");
    const img = document.querySelector('.imgme')

    if (window.scrollY > 0) {
        img.classList.remove('imgmescroll')
    }
    else {

        img.classList.add('imgmescroll')
    }

    if (window.scrollY > 0) {
        nav.classList.add('scroll')

    }
    else {
        nav.classList.remove('scroll')

    }

});
let contacts = [];

function add() {

    let contact =
    {
        first: document.getElementById('first').value,
        last: document.getElementById('last').value,
        email: document.getElementById('email').value,
        Smessage: document.getElementById('Smessage').value,
        message: document.getElementById('message').value

    }
    console.log(first);
    contacts.push(contact);
    document.querySelector('form').reset();
    localStorage.setItem("contacts", JSON.stringify(contacts));


}




window.addEventListener('scroll', () => {
    const scrol = window.scrollY + 70;
    const home = document.querySelector('#homes');
    const servicess = document.querySelector('#servicess');
    const serv = document.querySelector('#services');
    const servicesst = serv.offsetTop;

    const aboutt = document.querySelector('#aboutt');
    const abo = document.querySelector('#about');
    const abouttt = abo.offsetTop;


    const testimonials = document.querySelector('#testimonials');
    const testi = testimonials.offsetTop;

    const clientt = document.querySelector('#clientt');
    const cli = document.querySelector('#client');
    const clienttt = cli.offsetTop;

    const contactt = document.querySelector('#contactt');
    const con = document.querySelector('#contact');
    const contacttt = con.offsetTop;
    const footer = document.querySelector('#fot');
    const foo = footer.offsetTop

    if (scrol < servicesst) {
        home.classList.add('activee')
        servicess.classList.remove('activee')

    }
    else if (scrol >= servicesst && scrol < abouttt) {
        console.log(scrol);
        home.classList.remove('activee')
        servicess.classList.add('activee')
        aboutt.classList.remove('activee')
    }
    else if (scrol >= abouttt && scrol < testi) {

        servicess.classList.remove('activee')
        aboutt.classList.add('activee')

    }
    else if (scrol >= testi && scrol < clienttt) {
        aboutt.classList.remove('activee')
        clientt.classList.remove('activee')
    }
    else if (scrol >= clienttt && scrol < contacttt) {
        clientt.classList.add('activee')
        contactt.classList.remove('activee')
    }
    else if (scrol >= contacttt && scrol <= foo) {
        contactt.classList.add('activee')
        clientt.classList.remove('activee')

    }
    else {
        contactt.classList.remove('activee')
    }


})

