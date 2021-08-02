var n = 1;
n = 'Robb';
var isWinter = false;
var count = 5;
var nimi = "Bran";
var names = ["Jon", "Rickon", "Arya", 5];
var Starks;
(function (Starks) {
    Starks[Starks["Jon"] = 0] = "Jon";
    Starks[Starks["Bran"] = 1] = "Bran";
    Starks[Starks["Eddard"] = 2] = "Eddard";
    Starks[Starks["Catlyn"] = 3] = "Catlyn";
})(Starks || (Starks = {}));
;
var cat = Starks.Catlyn;
function getName() {
    console.log("Winter is coming!");
}
