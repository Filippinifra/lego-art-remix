const pickABrickStudMap = {};
ALL_PICK_A_BRICK_HEXES.forEach((hex) => {
    pickABrickStudMap[hex] = 99999;
});

STUD_MAPS = {
    pick_a_brick: {
        name: "Pick a Brick",
        officialName: "Lego.com Pick a Brick",
        descriptionHTML:
            'Pezzi disponibili su <a href="https://www.lego.com/en-us/page/static/pick-a-brick" target="_blank">Lego.com Pick a Brick</a>',
        sortedStuds: ALL_PICK_A_BRICK_HEXES,
        studMap: pickABrickStudMap,
    },
};
