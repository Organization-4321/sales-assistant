const extractLinkAndText = (fullDesription: string) => {
    const splitedDescription = fullDesription.split('[click to apply]');

    return {
        text: splitedDescription[0],
        link: splitedDescription[1].slice(1, -1),
    };
};

export default extractLinkAndText;
