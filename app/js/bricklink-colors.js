const PICK_A_BRICK_PIECES = [
    { id: 307021, title: "Bright Red", pieceColor: "#b40000" },
    { id: 6475042, title: "Reddish Orange", pieceColor: "#ca4c0b" },
    { id: 6419170, title: "Nougat", pieceColor: "#bb805a" },
    { id: 6143431, title: "Dark Orange", pieceColor: "#91501c" },
    { id: 6480394, title: "Light Nougat", pieceColor: "#e1bea1" },
    { id: 4211288, title: "Reddish Brown", pieceColor: "#5f3109" },
    { id: 6177146, title: "Medium Nougat", pieceColor: "#aa7d55" },
    { id: 4558595, title: "Bright Orange", pieceColor: "#d67923" },
    { id: 6516867, title: "Dark Brown", pieceColor: "#372100" },
    { id: 6065504, title: "Flame Yellowish Orange", pieceColor: "#fcac00" },
    { id: 6055172, title: "Sand Yellow", pieceColor: "#897d62" },
    { id: 4125253, title: "Brick Yellow", pieceColor: "#ccb98d" },
    { id: 307024, title: "Bright Yellow", pieceColor: "#fac80a" },
    { id: 6275877, title: "Cool Yellow", pieceColor: "#ffec6c" },
    { id: 6566042, title: "Olive Green", pieceColor: "#77774e" },
    { id: 6376232, title: "Vibrant Yellow", pieceColor: "#ffff00" },
    { id: 4537251, title: "Bright Yellowish Green", pieceColor: "#a5ca18" },
    { id: 6304896, title: "Spring Yellowish Green", pieceColor: "#e2f99a" },
    { id: 6172375, title: "Bright Green", pieceColor: "#58ab41" },
    { id: 4558593, title: "Dark Green", pieceColor: "#00852b" },
    { id: 6055171, title: "Earth Green", pieceColor: "#00451a" },
    { id: 6223913, title: "Sand Green", pieceColor: "#708e7c" },
    { id: 6251846, title: "Aqua", pieceColor: "#d3f2ea" },
    { id: 6213782, title: "Bright Bluish Green", pieceColor: "#009894" },
    { id: 4655243, title: "Medium Azur", pieceColor: "#68c3e2" },
    { id: 6151658, title: "Dark Azur", pieceColor: "#469bc3" },
    { id: 307026, title: "Black", pieceColor: "#1b2a34" },
    { id: 4206330, title: "Bright Blue", pieceColor: "#1e5aa8" },
    { id: 6316569, title: "Light Royal Blue", pieceColor: "#9dc3f7" },
    { id: 4527526, title: "Medium Blue", pieceColor: "#7396c8" },
    { id: 6138232, title: "Sand Blue", pieceColor: "#70819a" },
    { id: 4631385, title: "Earth Blue", pieceColor: "#19325a" },
    { id: 6167457, title: "Medium Lilac", pieceColor: "#441a91" },
    { id: 6097301, title: "Medium Lavender", pieceColor: "#a06eb9" },
    { id: 6211403, title: "Lavender", pieceColor: "#cda4de" },
    { id: 6099364, title: "Bright Reddish Violet", pieceColor: "#901f76" },
    { id: 6133726, title: "Bright Purple", pieceColor: "#c8509b" },
    { id: 6251940, title: "Light Purple", pieceColor: "#ff9ecd" },
    { id: 4550169, title: "New Dark Red", pieceColor: "#720012" },
    { id: 6275876, title: "Vibrant Coral", pieceColor: "#f06d78" },
    { id: 307001, title: "White", pieceColor: "#f4f4f4" },
    { id: 4211415, title: "Medium Stone Grey", pieceColor: "#969696" },
    { id: 4210848, title: "Dark Stone Grey", pieceColor: "#646464" },
];

function normalizeHex(hex) {
    const h = hex.replace(/^#/, "").toLowerCase();
    return "#" + (h.length === 6 ? h : h.length === 3 ? h[0] + h[0] + h[1] + h[1] + h[2] + h[2] : h);
}

const HEX_TO_COLOR_NAME = {};
const HEX_TO_PIECE_ID = {};
const COLOR_NAME_TO_ID = {};

const ALL_PICK_A_BRICK_HEXES = [];

PICK_A_BRICK_PIECES.forEach((piece) => {
    const hex = normalizeHex(piece.pieceColor);
    HEX_TO_COLOR_NAME[hex] = piece.title;
    HEX_TO_PIECE_ID[hex] = piece.id;
    COLOR_NAME_TO_ID[piece.title] = piece.id;
    ALL_PICK_A_BRICK_HEXES.push(hex);
});

const ALL_BRICKLINK_SOLID_COLORS = PICK_A_BRICK_PIECES.map((p) => ({
    name: p.title,
    hex: normalizeHex(p.pieceColor),
}));

let ALL_VALID_BRICKLINK_COLORS = [...ALL_BRICKLINK_SOLID_COLORS];

const PIXEL_TYPE_OPTIONS = [
    { name: "1x1 Square Tile", number: "3070b" },
];

const PIXEL_TYPE_TO_FLATTENED = {
    "3070b": "3070b",
};
