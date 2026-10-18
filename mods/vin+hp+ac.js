
elements.vinegar.reactions = elements.vinegar.reactions || {};
elements.hydrogen_peroxide.reactions =
    elements.hydrogen_peroxide.reactions || {};

elements.vinegar.reactions.colorful_bubbles = {
    elem1: "bubbly_suds",
    elem2: "colorful_bubbles",
    chance: 0.1
};

elements.colorful_bubbles = {
    color: ["#d7c5e8", "#c8e8dc", "#e2d5ef"],
    behavior: behaviors.GAS,
    category: "gases",
    state: "gas",
    density: 0.5
};

elements.bubbly_suds = {
    color: ["#d7f4ff", "#e8dcff", "#d8f5e6"],
    behavior: behaviors.LIQUID,
    category: "liquids",
    state: "liquid",
    density: 950,
    viscosity: 800
};
