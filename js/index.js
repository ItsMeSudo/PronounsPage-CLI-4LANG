const prompt = require('prompt-sync')();
const felhasznalo = prompt("Adj meg egy felhasználó nevet: ")
let IsBanned;
let url = "https://en.pronouns.page/api/profile/get/"+felhasznalo+"?version=2";
let settings = { method: "Get" };

fetch(url, settings)
    .then(res => res.json())
    .then((json) => {
        let success = false;
        if (json.profiles.en) {
            success = true
        } else {
            console.log("HIBA")
            return
        }
        // console.log(json)
        if (json.bannedReason == null) {
            IsBanned = "Nem"
        } else {
            IsBanned = "Igen"
        }

        console.log("Preferált megnevezések: " + ifforcycle(json.profiles.en.names))
        console.log("Névmások: " + ifforcycle(json.profiles.en.pronouns))
        console.log("Kor: " + json.profiles.en.age)
        console.log("Linkek: " + json.profiles.en.links)
        console.log("Megadott zászlók: " + json.profiles.en.flags)
        console.log("Megszólítások: " + ifforcycle(json.profiles.en.words[0].values))
        console.log("Barátoknak és családnak: " + ifforcycle(json.profiles.en.words[1].values))
        console.log("Bókok: " + ifforcycle(json.profiles.en.words[2].values))
        console.log("Kapcsolat leírások: " + ifforcycle(json.profiles.en.words[3].values))
        console.log("----------------------------------------------------------------------------------------")
        console.log("Nem preferált kifejezések: " + dontuse(json.profiles.en.words[3].values) + dontuse(json.profiles.en.words[2].values) + dontuse(json.profiles.en.words[1].values) + dontuse(json.profiles.en.words[0].values) + dontuse(json.profiles.en.pronouns) + dontuse(json.profiles.en.names))
        console.log("Egyéb kifejezések: " + otherwords(json.profiles.en.words[3].values) + otherwords(json.profiles.en.words[2].values) + otherwords(json.profiles.en.words[1].values) + otherwords(json.profiles.en.words[0].values) + otherwords(json.profiles.en.pronouns) + otherwords(json.profiles.en.names))
        console.log("----------------------------------------------------------------------------------------")

    }).then(() =>{
        console.log("SUDO#0814 2022")
    })

function ifforcycle(input) {
    let out = ""
    for (const key in input) {
        if (Object.hasOwnProperty.call(input, key)) {
            const element = input[key];
            if (element.opinion == 'yes' || element.opinion == 'meh'){
                out += element.value + ", ";
            }}}
    return out.slice(0, -2) + '';
}

function dontuse(input) {
    let out = ""
    for (const key in input) {
        if (Object.hasOwnProperty.call(input, key)) {
            const element = input[key];
            if (element.opinion == 'no'){
                out += element.value + ", ";
            }}}
    return out.slice(0, -2) + '';
}

function otherwords(input) {
    let out = ""
    for (const key in input) {
        if (Object.hasOwnProperty.call(input, key)) {
            const element = input[key];
            if (element.opinion != 'no' && element.opinion != 'yes' && element.opinion != 'meh'){
                out += element.value + ", ";
            }}}
    return out.slice(0, -2) + '';
}