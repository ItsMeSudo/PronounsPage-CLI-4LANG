const prompt = require('prompt-sync')();
const felhasznalo = prompt("Adj meg egy felhasználó nevet: ")
let IsBanned;
let url = "https://en.pronouns.page/api/profile/get/"+felhasznalo+"?version=2";
let settings = { method: "Get" };

fetch(url, settings)
    .then(res => res.json())
    .then((json) => {
        let dontusethatlol = "";
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
        let megnevez = "";
        let object = json.profiles.en.names;
        for (const key in object) {
            if (Object.hasOwnProperty.call(object, key)) {
                const element = object[key];
                if (element.opinion == 'yes' || element.opinion == 'meh'){
                    megnevez += element.value + " ";
                } else {
                    dontusethatlol+= element.value + ", ";
                }
            }
        }
        object = json.profiles.en.pronouns;
        let pronouns = "";
        for (const key in object) {
            if (Object.hasOwnProperty.call(object, key)) {
                const element = object[key];
                if (element.opinion == 'yes' || element.opinion == 'meh'){
                    pronouns += element.value + ", ";
                } else {
                    dontusethatlol+= element.value + ", ";
                }
            }
        }
        pronouns = pronouns.slice(0, -2) + '';

        const Honorifics = json.profiles.en.words[0].values;
        let HonorificsList = "";
        for (const i in Honorifics) {
            if (Object.hasOwnProperty.call(Honorifics, i)) {
                const element = Honorifics[i];
                if (element.opinion == 'yes' || element.opinion == 'meh') {
                    HonorificsList += element.value + ", ";
                } else {
                    dontusethatlol+= element.value + ", ";
                }
            }
        }
        HonorificsList = HonorificsList.slice(0, -2) + '';

        const PndFD = json.profiles.en.words[1].values;
        let PndFDList = "";
        for (const i in PndFD) {
            if (Object.hasOwnProperty.call(PndFD, i)) {
                const element = PndFD[i];
                if (element.opinion == 'yes' || element.opinion == 'meh') {
                    PndFDList += element.value + ", ";
                } else {
                    dontusethatlol+= element.value + ", ";
                }
            }
        }
        PndFDList = PndFDList.slice(0, -2) + '';

        const Compliments = json.profiles.en.words[2].values;
        let ComplimentsList = "";
        for (const i in Compliments) {
            if (Object.hasOwnProperty.call(Compliments, i)) {
                const element = Compliments[i];
                if (element.opinion == 'yes' || element.opinion == 'meh') {
                    ComplimentsList += element.value + ", ";
                } else {
                    dontusethatlol+= element.value + ", ";
                }
            }
        }
        ComplimentsList = ComplimentsList.slice(0, -2) + '';

        const Rship = json.profiles.en.words[3].values;
        let RshipList = "";
        for (const i in Rship) {
            if (Object.hasOwnProperty.call(Rship, i)) {
                const element = Rship[i];
                if (element.opinion == 'yes' || element.opinion == 'meh') {
                    RshipList += element.value + ", ";
                } else {
                    dontusethatlol+= element.value + ", ";
                }
            }
        }
        RshipList = RshipList.slice(0, -2) + '';
        dontusethatlol = dontusethatlol.slice(0, -2) + '';

        console.log("Felhasználó: " + json.username)
        console.log("Bannolva?: " + IsBanned)
        console.log("Preferált megnevezések: " + megnevez)
        console.log("Névmások: " + pronouns)
        console.log("Kor: " + json.profiles.en.age)
        console.log("Linkek: " + json.profiles.en.links)
        console.log("Megadott zászlók: " + json.profiles.en.flags)
        console.log("Megszólítások: " + HonorificsList)
        console.log("Barátoknak és családnak: "+ PndFDList)
        console.log("Bókok: " + ComplimentsList)
        console.log("Kapcsolat leírások: " + RshipList)
        console.log("----------------------------------------------------------------------------------------")
        console.log("Nem preferált kifejezések: " + dontusethatlol)
        console.log("----------------------------------------------------------------------------------------")
    }).then(() =>{
        console.log("SUDO#0814 2022")
    })