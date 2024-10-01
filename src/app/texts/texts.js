const title = "Visión 20/20";
const email = "anaisabelbenavides79@gmail.com";
const mensajeWhatsApp = encodeURIComponent(
    `¡Hola! Estoy interesado en los productos de ${title} y me gustaría recibir más información sobre gafas y accesorios que ofrecen. ¡Espero su respuesta!`
);
const numeroWhatsApp = "3227087758";
const textos = {
    index: {
        title: title,
    },
    homeContent: {
        title: title,
    },
    about: {
        description1: "*Visión 20/20* se dedica a ofrecer una amplia gama de productos para el cuidado de la visión, incluyendo gafas de aumento, estuches para gafas, cordones para gafas y más. Nuestro objetivo es proporcionar soluciones ópticas que mejoren tu visión y se adapten a tus necesidades diarias.",
        description2: "Contamos con una variada selección de gafas para cerca y lejos, diseñadas para ofrecer comodidad y estilo, además de estuches y accesorios que protegen y complementan tus gafas.",
    },
    contact: {
        whatsappLink: `https://wa.me/${numeroWhatsApp}?text=${mensajeWhatsApp}`,
        email: email,
    },
    footer: {
        slogan: {
            p1: "Vision 20/20",
            p2: "Tu visión es nuestra prioridad",
        },
        address: "",
        phone: numeroWhatsApp,
        email: email,
        facebook: "https://www.facebook.com/share/u2ZqpxbuDyyoExws/?mibextid=qi2Omg",
        instagram: "https://www.instragram.com",
        whatsappLink: `https://wa.me/${numeroWhatsApp}?text=${mensajeWhatsApp}`,
    },
};
export default textos;
