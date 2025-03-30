// _data/navigation.js
module.exports = {
    items: [
        { text: "About", url: "/about/" },
        { text: "Our Priorities", url: "/priorities/" },
        {
            text: "Join Our Movement",
            url: "https://docs.google.com/forms/d/e/1FAIpQLSemwwwpCQNYbVMFicVETMrQK1A10aQuIfTm-zXZ6mFWQryaDA/viewform?usp=header",
            external: true,
        },
        { text: "Contact", url: "/contact/" },
        {
            text: "Donate",
            url: "https://secure.actblue.com/donate/kebranalexander",
            external: true,
            isButton: true, // Flag to style as a button
        },
    ],
};
