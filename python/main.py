import requests
from requests.exceptions import HTTPError

try:
    user = "example"
    response = requests.get('https://pronouns.page/api/profile/get/'+user+'?version=2')
    response.raise_for_status()
    result = response.json()
except:
    print("HIBA")

print("Felhasználó: " + result['username'])

IsBanned = "Nem"
if (result['bannedReason'] == None):
    IsBanned = "Nem"
else:
    IsBanned = "Igen"
print("Bannolva?: "+ IsBanned)

DontUseThatLol = ""
Names = ""
for i in result['profiles']['en']['names']:
    if ([i][0]['opinion'] == 'yes'):
        Names += [i][0]['value'] + ", "
    elif ([i][0]['opinion'] == 'meh'):
        Names += [i][0]['value'] + ", "
    else:
        DontUseThatLol += [i][0]['value'] + ", "
Names = Names[:-2] + ''
print("Preferált megnevezések: "+ Names)

Pronounss = ""
for i in result['profiles']['en']['pronouns']:
    if ([i][0]['opinion'] == 'yes'):
        Pronounss += [i][0]['value'] + ", "
    elif ([i][0]['opinion'] == 'meh'):
        Pronounss += [i][0]['value'] + ", "
    else:
        DontUseThatLol += [i][0]['value'] + ", "
Pronounss = Pronounss[:-2] + ''
print("Névmások: "+ Pronounss)

print("Kor: "+ str(result['profiles']['en']['age']))

Linkek = ""
for i in result['profiles']['en']['links']:
    Linkek += i + ", "
Linkek = Linkek[:-2] + ''
print("Linkek: "+ Linkek)

Zaszlok = ""
for i in result['profiles']['en']['flags']:
    Zaszlok += i + ", "
Zaszlok = Zaszlok[:-2] + ''
print("Megadott zászlók: "+ Zaszlok)

Honorifics = ""
for i in result['profiles']['en']['words'][0]['values']:
    if ([i][0]['opinion'] == 'yes'):
        Honorifics += [i][0]['value'] + ", "
    elif ([i][0]['opinion'] == 'meh'):
        Honorifics += [i][0]['value'] + ", "
    else:
        DontUseThatLol += [i][0]['value'] + ", "
Honorifics = Honorifics[:-2] + ''
print("Megszólítások: "+ Honorifics)

PndFD = ""
for i in result['profiles']['en']['words'][1]['values']:
    if ([i][0]['opinion'] == 'yes'):
        PndFD += [i][0]['value'] + ", "
    elif ([i][0]['opinion'] == 'meh'):
        PndFD += [i][0]['value'] + ", "
    else:
        DontUseThatLol += [i][0]['value'] + ", "
PndFD = PndFD[:-2] + ''
print("Barátoknak és családnak: "+ PndFD)

Compliments = ""
for i in result['profiles']['en']['words'][2]['values']:
    if ([i][0]['opinion'] == 'yes'):
        Compliments += [i][0]['value'] + ", "
    elif ([i][0]['opinion'] == 'meh'):
        Compliments += [i][0]['value'] + ", "
    else:
        DontUseThatLol += [i][0]['value'] + ", "
Compliments = Compliments[:-2] + ''
print("Bókok: "+ Compliments)

Rship = ""
for i in result['profiles']['en']['words'][3]['values']:
    if ([i][0]['opinion'] == 'yes'):
        Rship += [i][0]['value'] + ", "
    elif ([i][0]['opinion'] == 'meh'):
        Rship += [i][0]['value'] + ", "
    else:
        DontUseThatLol += [i][0]['value'] + ", "
Rship = Rship[:-2] + ''
DontUseThatLol = DontUseThatLol[:-2] + ''
print("Kapcsolat leírások: "+ Rship)
print("----------------------------------------------------------------------------------------")
print("Nem preferált kifejezések: "+ DontUseThatLol)
print("----------------------------------------------------------------------------------------")
print("SUDO#0814 2022")